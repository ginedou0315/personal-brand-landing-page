import { useEffect, useState } from 'react';
import { Link, createFileRoute } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { supabase } from '@/integrations/supabase/client';
import { ginnyCopy, languageSearch } from '@/lib/portfolio-copy';

export const Route = createFileRoute('/reset-password')({
  validateSearch: languageSearch,
  head: ({ match }) => {
    const lang = match.search.lang ?? 'en';
    return { meta: [
      { title: `${ginnyCopy[lang].resetTitle} — Ginelle Doubek` },
      { name: 'description', content: ginnyCopy[lang].resetText },
      { property: 'og:title', content: `${ginnyCopy[lang].resetTitle} — Ginelle Doubek` },
      { property: 'og:description', content: ginnyCopy[lang].resetText },
      { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary' },
    ] };
  },
  component: ResetPasswordPage,
});

function ResetPasswordPage() {
  const { lang = 'en' } = Route.useSearch();
  const c = ginnyCopy[lang];
  const [recovery, setRecovery] = useState<boolean | null>(null);
  const [password, setPassword] = useState('');
  const [confirmation, setConfirmation] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [updated, setUpdated] = useState(false);

  useEffect(() => {
    const hash = new URLSearchParams(window.location.hash.slice(1));
    setRecovery(hash.get('type') === 'recovery');
  }, []);

  async function updatePassword(event: React.FormEvent) {
    event.preventDefault(); setError('');
    if (password !== confirmation) { setError(c.passwordMismatch); return; }
    setBusy(true);
    const { error: updateError } = await supabase.auth.updateUser({ password });
    if (updateError) setError(updateError.message); else setUpdated(true);
    setBusy(false);
  }

  return <main className="flex min-h-screen items-center justify-center bg-background px-4 py-12"><div className="w-full max-w-md rounded-lg border border-border bg-card p-6 shadow-sm sm:p-8"><p className="section-kicker">Ginny’s AI</p><h1 className="mt-3 font-display text-4xl">{c.resetTitle}</h1><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.resetText}</p>
    {recovery === false && <p role="alert" className="mt-6 rounded-md border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive">{c.recoveryMissing}</p>}
    {recovery && !updated && <form className="mt-6 space-y-4" onSubmit={updatePassword}><div className="space-y-2"><Label htmlFor="new-password">{c.newPassword}</Label><Input id="new-password" type="password" required minLength={8} autoComplete="new-password" value={password} onChange={event => setPassword(event.target.value)} /><p className="text-xs text-muted-foreground">{c.passwordHint}</p></div><div className="space-y-2"><Label htmlFor="confirm-password">{c.confirmPassword}</Label><Input id="confirm-password" type="password" required minLength={8} autoComplete="new-password" value={confirmation} onChange={event => setConfirmation(event.target.value)} /></div>{error && <p role="alert" className="text-sm text-destructive">{error}</p>}<Button type="submit" className="w-full" disabled={busy}>{c.updatePassword}</Button></form>}
    {updated && <p role="status" className="mt-6 rounded-md border border-border bg-secondary p-3 text-sm">{c.passwordUpdated}</p>}
    <Button asChild variant="outline" className="mt-6 w-full"><Link to="/" search={{ lang }} hash="ginny-ai">{c.backHome}</Link></Button>
  </div></main>;
}
