import { Link, useSearch } from "@tanstack/react-router";
import {
  ArrowUp,
  BriefcaseBusiness,
  Contact,
  FolderKanban,
  Home,
  Menu,
  UserRound,
  X,
} from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { languages, portfolioCopy, type Language } from "@/lib/portfolio-copy";
import { pageOrder, pagePaths, siteCopy, type PageKey } from "@/lib/site-pages";

const icons = { home: Home, resume: BriefcaseBusiness, projects: FolderKanban, about: UserRound, contact: Contact };

export function useLang(): Language {
  const search = useSearch({ strict: false });
  return search.lang ?? "en";
}

export function SiteShell({ page, children }: { page: PageKey; children: ReactNode }) {
  const lang = useLang();
  const s = siteCopy[lang];
  const c = portfolioCopy[lang];
  const [open, setOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  useEffect(() => {
    const update = () => setShowTop(window.scrollY > 500);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const nav = (
    <nav aria-label={s.menu} className="flex flex-col gap-1">
      {pageOrder.map((key) => {
        const Icon = icons[key];
        return (
          <Link
            key={key}
            to={pagePaths[key]}
            search={{ lang }}
            onClick={() => setOpen(false)}
            className={`side-link ${key === page ? "is-active" : ""}`}
            aria-current={key === page ? "page" : undefined}
          >
            <Icon className="size-4" />
            {s.pages[key].label}
          </Link>
        );
      })}
    </nav>
  );
  const langSwitch = (
    <div role="group" aria-label={c.language} className="flex flex-wrap gap-1">
      {(Object.keys(languages) as Language[]).map((l) => (
        <Link
          key={l}
          to="."
          search={{ lang: l }}
          resetScroll={false}
          aria-label={languages[l]}
          aria-pressed={l === lang}
          className={`lang-chip ${l === lang ? "is-active" : ""}`}
        >
          {l.toUpperCase()}
        </Link>
      ))}
    </div>
  );
  const monogram = (
    <Link to="/" search={{ lang }} className="gd-box" aria-label="Ginelle Doubek">
      GD
    </Link>
  );

  return (
    <div className="site-bg min-h-screen">
      <Button asChild className="fixed left-4 top-3 z-[60] -translate-y-20 focus:translate-y-0">
        <a href="#main-content">{c.skip}</a>
      </Button>
      <aside className="side-rail hidden lg:flex">
        {monogram}
        <div className="mt-16">{nav}</div>
        <div className="mt-8 px-3">{langSwitch}</div>
      </aside>
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-border bg-background/90 px-4 py-3 backdrop-blur-xl lg:hidden">
        {monogram}
        <Button variant="outline" size="icon" aria-label={s.menu} aria-expanded={open} onClick={() => setOpen((v) => !v)}>
          {open ? <X /> : <Menu />}
        </Button>
        {open && (
          <div className="absolute inset-x-0 top-full border-b border-border bg-background p-4 shadow-lg">
            {nav}
            <div className="mt-4">{langSwitch}</div>
          </div>
        )}
      </header>
      <div className="relative lg:pl-40">
        <svg className="wave-art" viewBox="0 0 800 600" preserveAspectRatio="none" aria-hidden="true">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <path key={i} d={`M${-50 + i * 12} ${600 - i * 8} C ${200 + i * 20} ${380 - i * 14}, ${420 - i * 10} ${120 + i * 18}, ${860} ${-20 + i * 16}`} />
          ))}
        </svg>
        <main id="main-content" key={page} className="page-enter relative">
          {children}
        </main>
        <footer className="relative border-t border-border">
          <div className="page-width flex flex-wrap items-center justify-between gap-3 py-6 text-xs text-muted-foreground">
            <span className="font-script text-2xl text-primary">Ginelle Doubek</span>
            <span>{c.location}</span>
          </div>
        </footer>
      </div>
      {showTop && (
        <Button size="icon" aria-label={c.top} title={c.top} className="fixed bottom-5 right-5 z-40 rounded-full" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <ArrowUp />
        </Button>
      )}
    </div>
  );
}

export function PageHeader({ kicker, title, intro }: { kicker: string; title: string; intro?: string }) {
  return (
    <div className="page-width pt-12 sm:pt-16">
      <p className="section-kicker">{kicker}</p>
      <h1 className="mt-3 font-script text-6xl leading-tight text-primary sm:text-7xl">{title}</h1>
      {intro && <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">{intro}</p>}
    </div>
  );
}

export function NextPage({ to }: { to: PageKey }) {
  const lang = useLang();
  const s = siteCopy[lang];
  return (
    <div className="page-width pb-14">
      <Link to={pagePaths[to]} search={{ lang }} className="next-card">
        <span className="text-xs text-muted-foreground">{s.next}</span>
        <span className="font-display text-2xl">{s.pages[to].label} →</span>
      </Link>
    </div>
  );
}
