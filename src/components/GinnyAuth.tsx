import { useState } from 'react';
import { LovableMark } from '@lovable.dev/cloud-auth-js/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { lovable } from '@/integrations/lovable/index';
import { supabase } from '@/integrations/supabase/client';
import { ginnyCopy, type Language } from '@/lib/portfolio-copy';
import portraitAsset from '@/assets/ginelle-portrait.png.asset.json';

function GoogleLogo() {
  return <svg aria-hidden="true" className="size-[18px] shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#4285F4" d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z"/><path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09C3.26 21.3 7.31 24 12 24z"/><path fill="#FBBC05" d="M5.27 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.38l3.98-3.09z"/><path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96z"/></svg>;
}

export function GinnyAuth({ lang }: { lang: Language }) {
  const c = ginnyCopy[lang];
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState('');
  const [error, setError] = useState('');

  async function handleOAuth(provider: 'google' | 'lovable') {
    setBusy(true); setError(''); setNotice('');
    const result = await lovable.auth.signInWithOAuth(provider, { redirect_uri: window.location.origin });
    if (result.error) setError(result.error.message);
    if (!result.redirected) setBusy(false);
  }

  async function handleEmail(event: React.FormEvent) {
    event.preventDefault(); setError(''); setNotice('');
    if (mode === 'signup' && password.length < 8) { setError(c.passwordHint); return; }
    setBusy(true);
    if (mode === 'signin') {
      const { error: authError } = await supabase.auth.signInWithPassword({ email, password });
      if (authError) setError(authError.message);
    } else {
      const { data, error: authError } = await supabase.auth.signUp({
        email, password, options: { emailRedirectTo: window.location.origin },
      });
      if (authError) setError(authError.message);
      else if (!data.session) setNotice(c.confirmEmail);
    }
    setBusy(false);
  }

  async function handleReset() {
    setError(''); setNotice('');
    if (!email) { setError(c.email); return; }
    setBusy(true);
    const { error: resetError } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password?lang=${lang}`,
    });
    if (resetError) setError(resetError.message); else setNotice(c.resetSent);
    setBusy(false);
  }

  return <div className="mx-auto max-w-md rounded-lg border border-border bg-card p-6 shadow-sm sm:p-8">
    <div className="text-center"><img src={portraitAsset.url} alt="" className="mx-auto size-16 rounded-full border border-border bg-secondary object-cover object-top" /><h3 className="mt-4 font-display text-2xl">{c.signInTitle}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.signInText}</p></div>
    <form className="mt-6 space-y-4" onSubmit={handleEmail}>
      <div className="space-y-2"><Label htmlFor="ginny-email">{c.email}</Label><Input id="ginny-email" type="email" required autoComplete="email" value={email} onChange={event => setEmail(event.target.value)} /></div>
      <div className="space-y-2"><div className="flex items-center justify-between gap-3"><Label htmlFor="ginny-password">{c.password}</Label>{mode === 'signin' && <button type="button" onClick={handleReset} className="text-xs text-primary underline-offset-4 hover:underline">{c.forgotPassword}</button>}</div><Input id="ginny-password" type="password" required minLength={mode === 'signup' ? 8 : 1} autoComplete={mode === 'signin' ? 'current-password' : 'new-password'} value={password} onChange={event => setPassword(event.target.value)} />{mode === 'signup' && <p className="text-xs text-muted-foreground">{c.passwordHint}</p>}</div>
      {error && <p role="alert" className="rounded-md border border-destructive/30 bg-destructive/10 p-3 text-xs text-destructive">{error}</p>}
      {notice && <p role="status" className="rounded-md border border-border bg-secondary p-3 text-xs text-secondary-foreground">{notice}</p>}
      <Button type="submit" className="w-full" disabled={busy}>{mode === 'signin' ? c.signIn : c.createAccount}</Button>
    </form>
    <button type="button" className="mt-4 w-full text-center text-xs font-medium text-primary underline-offset-4 hover:underline" onClick={() => { setMode(mode === 'signin' ? 'signup' : 'signin'); setError(''); setNotice(''); }}>{mode === 'signin' ? c.needAccount : c.haveAccount}</button>
    <div className="my-5 flex items-center gap-3"><span className="h-px flex-1 bg-border" /><span className="text-xs text-muted-foreground">{c.or}</span><span className="h-px flex-1 bg-border" /></div>
    <div className="space-y-3">
      <Button type="button" variant="outline" className="h-11 w-full border-[var(--google-button-border)] bg-[var(--google-button-bg)] font-medium text-[var(--google-button-fg)] hover:bg-[var(--google-button-bg)]" disabled={busy} onClick={() => handleOAuth('google')}><GoogleLogo />{c.google}</Button>
      <Button type="button" variant="outline" className="h-11 w-full" disabled={busy} onClick={() => handleOAuth('lovable')}><LovableMark className="size-[18px]" />{c.lovable}</Button>
    </div>
  </div>;
}
