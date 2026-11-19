import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { ArrowDown, ArrowUp, ArrowUpRight, Check, Copy, Database, Globe2, Linkedin, Mail, Network, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { CrmDemo } from '@/components/CrmDemo';
import { languageSearch, languages, portfolioCopy, type Language } from '@/lib/portfolio-copy';

const EMAIL = 'ginelle.doubek@gmail.com';
const LINKEDIN = 'https://www.linkedin.com/in/ginelledoubek';
const toolkit = ['Salesforce', 'Power BI', 'Tableau', 'Excel', 'SQL', 'Python', 'HTML/CSS/JS', 'AI prompting'];
const capabilityIcons = [Database, Network, Sparkles];

export const Route = createFileRoute('/')({
  validateSearch: languageSearch,
  head: ({ match }) => {
    const copy = portfolioCopy[match.search.lang ?? 'en'];
    return { meta: [
      { title: copy.title }, { name: 'description', content: copy.description },
      { property: 'og:title', content: copy.title }, { property: 'og:description', content: copy.description },
      { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' },
    ] };
  },
  component: Index,
});

function Index() {
  const { lang = 'en' } = Route.useSearch();
  const navigate = useNavigate({ from: '/' });
  const c = portfolioCopy[lang];
  const [activeProof, setActiveProof] = useState(0);
  const [copyState, setCopyState] = useState<'idle' | 'copied' | 'error'>('idle');
  const [showTop, setShowTop] = useState(false);
  const selectedProof = c.proof[activeProof] ?? c.proof[0];

  useEffect(() => { document.documentElement.lang = lang; }, [lang]);
  useEffect(() => {
    const update = () => setShowTop(window.scrollY > 500);
    update(); window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);
  useEffect(() => {
    if (copyState === 'idle') return;
    const timeout = window.setTimeout(() => setCopyState('idle'), 2400);
    return () => window.clearTimeout(timeout);
  }, [copyState]);
  const copyEmail = async () => {
    try { await navigator.clipboard.writeText(EMAIL); setCopyState('copied'); }
    catch { setCopyState('error'); }
  };
  const switchLanguage = (language: Language) => {
    void navigate({ search: { lang: language }, hash: window.location.hash.slice(1), resetScroll: false });
  };

  return (
    <>
      <Button asChild className="fixed left-4 top-3 z-50 -translate-y-20 focus:translate-y-0"><a href="#main-content">{c.skip}</a></Button>
      <nav className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-xl" aria-label={c.audience}>
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-4 gap-y-2 px-5 py-3 sm:px-8">
          <Button asChild variant="ghost" className="h-auto px-0 hover:bg-transparent"><a href="#top" className="gap-3"><span className="flex size-9 items-center justify-center rounded-full bg-primary font-display text-primary-foreground">GD</span><span className="hidden font-semibold sm:block">Ginelle Doubek</span></a></Button>
          <div className="hidden items-center gap-6 lg:flex">
            {['capabilities', 'about', 'direction'].map((id, i) => <Button asChild key={id} variant="link" className="px-0 text-xs text-muted-foreground"><a href={`#${id}`}>{c.nav[i]}</a></Button>)}
          </div>
          <div className="flex items-center gap-2">
            <Globe2 className="size-4 text-muted-foreground" aria-hidden="true" />
            <div role="group" aria-label={c.language} className="flex gap-0.5">
              {(Object.keys(languages) as Language[]).map(language => <Button key={language} onClick={() => switchLanguage(language)} variant={language === lang ? 'secondary' : 'ghost'} size="sm" aria-pressed={language === lang} aria-label={languages[language]} title={languages[language]} className="px-2.5 uppercase">{language}</Button>)}
            </div>
            <Button asChild variant="ghost" size="icon" className="hidden sm:inline-flex"><a href={LINKEDIN} target="_blank" rel="noreferrer" aria-label={c.connect}><Linkedin /></a></Button>
          </div>
        </div>
      </nav>

      <main id="main-content">
        <header id="top" className="portfolio-hero scroll-mt-24 border-b border-border">
          <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
            <div className="hero-enter flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground"><p>{c.location}</p><p className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-primary" />{c.audience}</p></div>
            <h1 className="hero-enter hero-delay-1 mt-8 text-5xl leading-tight sm:text-7xl">Ginelle Doubek<span className="text-primary">.</span></h1>
            <p className="hero-enter hero-delay-1 mt-4 max-w-3xl font-display text-2xl leading-snug sm:text-3xl">{c.headline}</p>
            <p className="hero-enter hero-delay-2 mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">{c.intro}</p>
            <div className="hero-enter hero-delay-3 mt-7 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="button-interactive cta-primary h-auto whitespace-normal py-3.5"><a href={LINKEDIN} target="_blank" rel="noreferrer">{c.connect}<ArrowUpRight /></a></Button>
              <Button asChild variant="outline" size="lg" className="h-auto py-3.5"><a href={`mailto:${EMAIL}`}><Mail />{c.email}</a></Button>
            </div>
            <p className="mt-5 max-w-2xl text-xs leading-relaxed text-muted-foreground">{c.availability}</p>
            <div className="mt-10 flex items-center gap-3 text-xs text-primary"><ArrowDown className="size-4" /><span>{c.proofTitle}</span></div>
          </div>
        </header>

        <section className="border-b border-border bg-card" aria-label={c.proofTitle}>
          <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8">
            <div className="grid gap-3 sm:grid-cols-3">
              {c.proof.map(([years, label], i) => <Button key={i} variant="ghost" onClick={() => setActiveProof(i)} aria-pressed={activeProof === i} aria-controls="proof-detail" className={`proof-card h-auto min-h-28 flex-col items-start gap-3 whitespace-normal rounded-lg border p-5 text-left ${activeProof === i ? 'is-selected' : ''}`}><span className="font-display text-3xl text-primary">{years}</span><span className="text-sm">{label}</span></Button>)}
            </div>
            <p id="proof-detail" aria-live="polite" className="mt-5 min-h-12 text-sm leading-relaxed text-muted-foreground">{selectedProof?.[2]}</p>
          </div>
        </section>

        <section id="capabilities" className="scroll-mt-24" aria-labelledby="capability-title">
          <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
            <p className="section-kicker">{c.capabilityKicker}</p><h2 id="capability-title" className="mt-3 max-w-2xl text-3xl leading-tight sm:text-4xl">{c.capabilityTitle}</h2>
            <div className="mt-9 grid gap-7 md:grid-cols-3">
              {c.capabilities.map(([title, text], i) => {
                const Icon = capabilityIcons[i] ?? Database;
                return <div key={i} className="border-t border-border pt-5"><Icon className="size-6 text-primary" aria-hidden="true" /><h3 className="mt-4 font-sans text-lg font-semibold">{title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p></div>;
              })}
            </div>
          </div>
        </section>

        <section id="crm-demo" className="scroll-mt-24 border-y border-border bg-secondary/35" aria-labelledby="demo-title">
          <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
            <p className="section-kicker">{c.demoKicker}</p><h2 id="demo-title" className="mt-3 text-3xl sm:text-4xl">{c.demoTitle}</h2><p className="mb-7 mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">{c.demoIntro}</p>
            <CrmDemo lang={lang} />
          </div>
        </section>

        <section id="about" className="scroll-mt-24" aria-labelledby="story-title">
          <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
            <p className="section-kicker">{c.storyKicker}</p><h2 id="story-title" className="mt-3 max-w-2xl text-3xl leading-tight sm:text-4xl">{c.storyTitle}</h2>
            <div className="mt-10 max-w-3xl">
              {c.story.map(([title, text], i) => <div key={i} className="relative flex gap-5 pb-9 last:pb-0"><div className="relative flex w-8 shrink-0 justify-center"><span className="relative z-10 flex size-8 items-center justify-center rounded-full border border-primary/30 bg-background text-xs font-semibold text-primary">0{i + 1}</span>{i < 2 && <span className="absolute bottom-0 top-8 w-px bg-border" />}</div><div><h3 className="font-sans text-lg font-semibold">{title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p></div></div>)}
            </div>
          </div>
        </section>

        <section id="direction" className="scroll-mt-24 border-y border-border bg-secondary/40" aria-labelledby="direction-title">
          <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
            <p className="section-kicker">{c.directionKicker}</p><h2 id="direction-title" className="mt-3 text-3xl leading-tight sm:text-4xl">{c.directionTitle}</h2><p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground">{c.directionText}</p>
            <div className="mt-10 grid gap-10 md:grid-cols-2">
              <div id="toolkit"><h3 className="font-sans text-base font-semibold">{c.skillsTitle}</h3><ul className="mt-4 flex flex-wrap gap-2">{toolkit.map(item => <li key={item} className="toolkit-pill rounded-full border border-border bg-card px-3 py-1.5 text-xs">{item === 'AI prompting' && lang !== 'en' ? ({ de: 'KI-Prompting', fr: 'Prompting IA', it: 'Prompting IA' }[lang]) : item}</li>)}</ul><p className="mt-5 text-xs leading-relaxed text-muted-foreground">{c.spoken}</p></div>
              <div id="learning"><h3 className="font-sans text-base font-semibold">{c.learningTitle}</h3><ul className="mt-4 space-y-3">{c.learning.map(item => <li key={item} className="border-l-2 border-accent pl-3 text-sm leading-relaxed text-muted-foreground">{item}</li>)}</ul></div>
            </div>
          </div>
        </section>

        <section aria-labelledby="personal-title" className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
          <div className="grid items-center gap-8 md:grid-cols-[1fr_240px]">
            <div><p className="section-kicker">{c.personalKicker}</p><h2 id="personal-title" className="mt-3 max-w-2xl text-3xl leading-tight sm:text-4xl">{c.personalTitle}</h2><p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">{c.personalText}</p><div className="mt-5 flex flex-wrap gap-5 text-sm font-medium text-primary"><span>{c.tennis}</span><span className="text-accent" aria-hidden="true">/</span><span>{c.skiing}</span></div></div>
            <svg viewBox="0 0 240 240" className="mx-auto w-48 text-primary md:w-60" fill="none" aria-hidden="true">
              <circle cx="120" cy="120" r="112" className="fill-secondary" />
              <g transform="rotate(-28 108 105)" stroke="currentColor" strokeWidth="3"><ellipse cx="108" cy="85" rx="32" ry="43" /><ellipse cx="108" cy="85" rx="27" ry="38" strokeWidth="1" /><path d="M88 58v54m10-64v74m10-75v76m10-75v74m10-62v51M83 65h50M80 75h56M80 85h56M82 95h53M86 105h43M92 115h32" strokeWidth="0.8" /><path d="m98 126 4 22h12l4-22M103 148v41q5 7 10 0v-41" /></g>
              <circle cx="161" cy="142" r="16" className="fill-accent" stroke="currentColor" strokeWidth="2" /><path d="M150 130q18 10 22 23m-23 1q9-5 12-27" stroke="currentColor" strokeWidth="1.5" />
              <path d="m146 187 45-100m-32 111 43-97" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
            </svg>
          </div>
        </section>

        <footer className="border-t border-border bg-card">
          <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8"><h2 className="text-3xl">{c.contactTitle}</h2><p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">{c.contactText}</p><div className="mt-6 flex flex-col gap-3 sm:flex-row"><Button asChild className="cta-primary h-auto whitespace-normal py-3"><a href={LINKEDIN} target="_blank" rel="noreferrer"><Linkedin />{c.connect}<ArrowUpRight /></a></Button><Button asChild variant="outline" className="h-auto py-3"><a href={`mailto:${EMAIL}`}><Mail />{c.email}</a></Button></div><div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6"><a href={`mailto:${EMAIL}`} className="break-all text-sm text-muted-foreground hover:text-primary">{EMAIL}</a><Button variant="ghost" size="sm" onClick={copyEmail} aria-live="polite">{copyState === 'copied' ? <Check /> : <Copy />}{copyState === 'copied' ? c.copied : copyState === 'error' ? c.copyError : c.copy}</Button></div></div>
        </footer>
      </main>
      {showTop && <Button size="icon" aria-label={c.top} title={c.top} className="fixed bottom-5 right-5 z-40 rounded-full" onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })}><ArrowUp /></Button>}
    </>
  );
}
