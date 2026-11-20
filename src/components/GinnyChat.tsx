import { portraitAsset } from "@/lib/site-assets";
import { useEffect, useMemo, useRef, useState } from "react";
import { DefaultChatTransport, type UIMessage } from "ai";
import { useChat } from "@ai-sdk/react";
import { Trash2 } from "lucide-react";
import {
  Conversation,
  ConversationContent,
  ConversationEmptyState,
  ConversationScrollButton,
} from "@/components/ai-elements/conversation";
import { Message, MessageContent, MessageResponse } from "@/components/ai-elements/message";
import {
  PromptInput,
  PromptInputFooter,
  PromptInputSubmit,
  PromptInputTextarea,
  type PromptInputMessage,
} from "@/components/ai-elements/prompt-input";
import { Reasoning, ReasoningContent, ReasoningTrigger } from "@/components/ai-elements/reasoning";
import { Shimmer } from "@/components/ai-elements/shimmer";
import { Button } from "@/components/ui/button";
import { ginnyCopy, type Language } from "@/lib/portfolio-copy";

const STORAGE_KEY = "ginny-chat-v1";

export function GinnyChat({ lang }: { lang: Language }) {
  const [initial, setInitial] = useState<UIMessage[] | null>(null);
  useEffect(() => {
    try {
      const saved = JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? "[]") as UIMessage[];
      setInitial(Array.isArray(saved) ? saved : []);
    } catch {
      setInitial([]);
    }
  }, []);
  if (!initial)
    return (
      <div className="flex min-h-64 items-center justify-center">
        <Shimmer>Ginny’s AI</Shimmer>
      </div>
    );
  return <GinnyConversation lang={lang} initialMessages={initial} />;
}

function friendlyError(error?: Error) {
  if (!error) return "";
  try {
    const parsed = JSON.parse(error.message) as { error?: string };
    return parsed.error || error.message;
  } catch {
    return error.message;
  }
}

function GinnyConversation({
  lang,
  initialMessages,
}: {
  lang: Language;
  initialMessages: UIMessage[];
}) {
  const c = ginnyCopy[lang];
  const [input, setInput] = useState("");
  const [actionError, setActionError] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const transport = useMemo(
    () =>
      new DefaultChatTransport({
        api: "/api/ginny-chat",
        body: { language: lang },
      }),
    [lang],
  );
  const { messages, sendMessage, status, stop, error, setMessages } = useChat({
    id: "ginny-visitor",
    messages: initialMessages,
    transport,
  });
  const busy = status === "submitted" || status === "streaming";
  useEffect(() => {
    if (busy) return;
    const saved = messages
      .map((m) => ({ ...m, parts: m.parts.filter((p) => p.type === "text") }))
      .filter((m) => m.parts.length > 0)
      .slice(-30);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
  }, [messages, busy]);

  useEffect(() => {
    if (status === "ready") textareaRef.current?.focus();
  }, [status]);
  useEffect(() => {
    textareaRef.current?.focus();
  }, []);

  async function ask(text: string) {
    const question = text.trim();
    if (!question || busy) return;
    setActionError("");
    setInput("");
    await sendMessage({ text: question }, { body: { language: lang } });
    requestAnimationFrame(() => textareaRef.current?.focus());
  }

  function handleSubmit(message: PromptInputMessage) {
    void ask(message.text);
  }

  function clearConversation() {
    if (!window.confirm(c.clearConfirm)) return;
    window.localStorage.removeItem(STORAGE_KEY);
    setMessages([]);
    setActionError("");
    textareaRef.current?.focus();
  }

  return (
    <div className="overflow-hidden rounded-lg border border-border bg-card shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-4 py-3">
        <div className="flex items-center gap-3">
          <img
            src={portraitAsset.url}
            alt=""
            className="size-9 rounded-full border border-border bg-secondary object-cover object-top"
          />
          <div>
            <p className="text-sm font-semibold">Ginny’s AI</p>
            <p className="text-[11px] text-muted-foreground">{c.cloudSaved}</p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="sm"
            onClick={clearConversation}
            disabled={messages.length === 0 || busy}
          >
            <Trash2 />
            {c.clear}
          </Button>
        </div>
      </div>
      <Conversation className="h-[28rem] bg-background">
        <ConversationContent>
          {messages.length === 0 ? (
            <ConversationEmptyState>
              <div className="flex max-w-lg flex-col items-center gap-3 p-6 text-center">
                <img
                  src={portraitAsset.url}
                  alt=""
                  className="size-16 rounded-full border border-border bg-secondary object-cover object-top"
                />
                <h3 className="font-display text-2xl">{c.emptyTitle}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{c.emptyText}</p>
                <div className="mt-2 flex flex-wrap justify-center gap-2">
                  {c.suggestions.map((suggestion) => (
                    <Button
                      key={suggestion}
                      variant="outline"
                      size="sm"
                      onClick={() => void ask(suggestion)}
                    >
                      {suggestion}
                    </Button>
                  ))}
                </div>
              </div>
            </ConversationEmptyState>
          ) : (
            messages.map((message) => (
              <Message key={message.id} from={message.role}>
                <MessageContent className="group-[.is-user]:bg-primary group-[.is-user]:text-primary-foreground">
                  {message.parts.map((part, index) => {
                    if (part.type === "text")
                      return (
                        <MessageResponse
                          key={index}
                          isAnimating={busy && message.id === messages.at(-1)?.id}
                        >
                          {part.text}
                        </MessageResponse>
                      );
                    if (part.type === "reasoning")
                      return (
                        <Reasoning
                          key={index}
                          isStreaming={busy && message.id === messages.at(-1)?.id}
                        >
                          <ReasoningTrigger getThinkingMessage={() => c.reasoning} />
                          <ReasoningContent>{part.text}</ReasoningContent>
                        </Reasoning>
                      );
                    return null;
                  })}
                </MessageContent>
              </Message>
            ))
          )}
          {status === "submitted" && <Shimmer className="ml-1 text-sm">{c.thinking}</Shimmer>}
        </ConversationContent>
        <ConversationScrollButton aria-label={c.retry} />
      </Conversation>
      {(error || actionError) && (
        <p
          role="alert"
          className="border-t border-destructive/30 bg-destructive/10 px-4 py-3 text-xs text-destructive"
        >
          {actionError || friendlyError(error)}
        </p>
      )}
      <div className="border-t border-border p-3 sm:p-4">
        <PromptInput onSubmit={handleSubmit}>
          <PromptInputTextarea
            ref={textareaRef}
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder={c.placeholder}
            maxLength={1200}
            disabled={busy}
            aria-label={c.placeholder}
          />
          <PromptInputFooter className="justify-end">
            <PromptInputSubmit
              status={status}
              onStop={() => void stop()}
              disabled={!busy && !input.trim()}
              aria-label={busy ? c.stop : c.send}
            />
          </PromptInputFooter>
        </PromptInput>
        <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground">{c.disclaimer}</p>
      </div>
    </div>
  );
}
