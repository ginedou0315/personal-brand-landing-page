import { useEffect, useMemo, useRef, useState } from 'react';
import type { User } from '@supabase/supabase-js';
import { DefaultChatTransport, type UIMessage } from 'ai';
import { useChat } from '@ai-sdk/react';
import { LogOut, RotateCcw, Trash2 } from 'lucide-react';
import { Conversation, ConversationContent, ConversationEmptyState, ConversationScrollButton } from '@/components/ai-elements/conversation';
import { Message, MessageContent, MessageResponse } from '@/components/ai-elements/message';
import { PromptInput, PromptInputFooter, PromptInputSubmit, PromptInputTextarea, type PromptInputMessage } from '@/components/ai-elements/prompt-input';
import { Reasoning, ReasoningContent, ReasoningTrigger } from '@/components/ai-elements/reasoning';
import { Shimmer } from '@/components/ai-elements/shimmer';
import { Button } from '@/components/ui/button';
import { GinnyAuth } from '@/components/GinnyAuth';
import { supabase } from '@/integrations/supabase/client';
import { ginnyCopy, type Language } from '@/lib/portfolio-copy';
import portraitAsset from '@/assets/ginelle-portrait.png.asset.json';

export function GinnyChat({ lang }: { lang: Language }) {
  const c = ginnyCopy[lang];
  const [user, setUser] = useState<User | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [history, setHistory] = useState<UIMessage[]>([]);
  const [historyState, setHistoryState] = useState<'loading' | 'ready' | 'error'>('loading');
  const [retry, setRetry] = useState(0);

  useEffect(() => {
    let mounted = true;
    void supabase.auth.getSession().then(({ data }) => {
      if (!mounted) return;
      setUser(data.session?.user ?? null); setAuthLoading(false);
    });
    const { data } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!mounted) return;
      setUser(session?.user ?? null); setAuthLoading(false);
    });
    return () => { mounted = false; data.subscription.unsubscribe(); };
  }, []);

  useEffect(() => {
    if (!user) { setHistory([]); setHistoryState('ready'); return; }
    let cancelled = false;
    setHistoryState('loading');
    void supabase.from('ginny_messages').select('message_id, role, parts, created_at').eq('user_id', user.id).order('created_at', { ascending: true }).then(({ data, error }) => {
      if (cancelled) return;
      if (error) { setHistoryState('error'); return; }
      const messages = data.flatMap(row => {
        if (row.role !== 'user' && row.role !== 'assistant') return [];
        return [{ id: row.message_id, role: row.role, parts: row.parts as UIMessage['parts'] } satisfies UIMessage];
      });
      setHistory(messages); setHistoryState('ready');
    });
    return () => { cancelled = true; };
  }, [user, retry]);

  if (authLoading) return <div className="flex min-h-64 items-center justify-center"><Shimmer>{c.cloudSaved}</Shimmer></div>;
  if (!user) return <GinnyAuth lang={lang} />;
  if (historyState === 'loading') return <div className="flex min-h-64 items-center justify-center"><Shimmer>{c.cloudSaved}</Shimmer></div>;
  if (historyState === 'error') return <div role="alert" className="mx-auto max-w-md rounded-lg border border-border p-6 text-center"><p className="text-sm text-muted-foreground">{c.loadError}</p><Button variant="outline" className="mt-4" onClick={() => setRetry(value => value + 1)}><RotateCcw />{c.retry}</Button></div>;
  return <GinnyConversation key={user.id} user={user} lang={lang} initialMessages={history} />;
}

function GinnyConversation({ user, lang, initialMessages }: { user: User; lang: Language; initialMessages: UIMessage[] }) {
  const c = ginnyCopy[lang];
  const [input, setInput] = useState('');
  const [actionError, setActionError] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const transport = useMemo(() => new DefaultChatTransport({
    api: '/api/ginny-chat',
    headers: async () => {
      const { data } = await supabase.auth.getSession();
      return data.session ? { Authorization: `Bearer ${data.session.access_token}` } : {};
    },
    body: { language: lang },
  }), [lang]);
  const { messages, sendMessage, status, stop, error, setMessages } = useChat({
    id: `ginny-${user.id}`,
    messages: initialMessages,
    transport,
  });
  const busy = status === 'submitted' || status === 'streaming';

  useEffect(() => { if (status === 'ready') textareaRef.current?.focus(); }, [status]);
  useEffect(() => { textareaRef.current?.focus(); }, []);

  async function ask(text: string) {
    const question = text.trim();
    if (!question || busy) return;
    setActionError('');
    await sendMessage({ text: question }, { body: { language: lang } });
    setInput('');
    requestAnimationFrame(() => textareaRef.current?.focus());
  }

  function handleSubmit(message: PromptInputMessage) { void ask(message.text); }

  async function clearConversation() {
    if (!window.confirm(c.clearConfirm)) return;
    const { error: deleteError } = await supabase.from('ginny_messages').delete().eq('user_id', user.id);
    if (deleteError) { setActionError(deleteError.message); return; }
    setMessages([]); setActionError(''); textareaRef.current?.focus();
  }

  return <div className="overflow-hidden rounded-lg border border-border bg-card shadow-sm">
    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-4 py-3">
      <div className="flex items-center gap-3"><img src={portraitAsset.url} alt="" className="size-9 rounded-full border border-border bg-secondary object-cover object-top" /><div><p className="text-sm font-semibold">Ginny’s AI</p><p className="text-[11px] text-muted-foreground">{c.cloudSaved}</p></div></div>
      <div className="flex items-center gap-1"><Button variant="ghost" size="sm" onClick={clearConversation} disabled={messages.length === 0 || busy}><Trash2 />{c.clear}</Button><Button variant="ghost" size="sm" onClick={() => void supabase.auth.signOut()}><LogOut />{c.signOut}</Button></div>
    </div>
    <Conversation className="h-[28rem] bg-background"><ConversationContent>
      {messages.length === 0 ? <ConversationEmptyState>
        <div className="flex max-w-lg flex-col items-center gap-3 p-6 text-center"><img src={portraitAsset.url} alt="" className="size-16 rounded-full border border-border bg-secondary object-cover object-top" /><h3 className="font-display text-2xl">{c.emptyTitle}</h3><p className="text-sm leading-relaxed text-muted-foreground">{c.emptyText}</p><div className="mt-2 flex flex-wrap justify-center gap-2">{c.suggestions.map(suggestion => <Button key={suggestion} variant="outline" size="sm" onClick={() => void ask(suggestion)}>{suggestion}</Button>)}</div></div>
      </ConversationEmptyState> : messages.map(message => <Message key={message.id} from={message.role}>
        <MessageContent className="group-[.is-user]:bg-primary group-[.is-user]:text-primary-foreground">
          {message.parts.map((part, index) => {
            if (part.type === 'text') return <MessageResponse key={index} isAnimating={busy && message.id === messages.at(-1)?.id}>{part.text}</MessageResponse>;
            if (part.type === 'reasoning') return <Reasoning key={index} isStreaming={busy && message.id === messages.at(-1)?.id}><ReasoningTrigger getThinkingMessage={() => c.reasoning} /><ReasoningContent>{part.text}</ReasoningContent></Reasoning>;
            return null;
          })}
        </MessageContent>
      </Message>)}
      {status === 'submitted' && <Shimmer className="ml-1 text-sm">{c.thinking}</Shimmer>}
    </ConversationContent><ConversationScrollButton aria-label={c.retry} /></Conversation>
    {(error || actionError) && <p role="alert" className="border-t border-destructive/30 bg-destructive/10 px-4 py-3 text-xs text-destructive">{actionError || error?.message}</p>}
    <div className="border-t border-border p-3 sm:p-4">
      <PromptInput onSubmit={handleSubmit}>
        <PromptInputTextarea ref={textareaRef} value={input} onChange={event => setInput(event.target.value)} placeholder={c.placeholder} maxLength={1200} disabled={busy} aria-label={c.placeholder} />
        <PromptInputFooter className="justify-end"><PromptInputSubmit status={status} onStop={() => void stop()} disabled={!busy && !input.trim()} aria-label={busy ? c.stop : c.send} /></PromptInputFooter>
      </PromptInput>
      <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground">{c.disclaimer}</p>
    </div>
  </div>;
}
