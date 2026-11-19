import { createFileRoute } from "@tanstack/react-router";
import { CrmDemo } from "../components/CrmDemo";
import {
  ArrowUp,
  ArrowUpRight,
  BarChart3,
  Check,
  ChevronRight,
  Copy,
  Handshake,
  Linkedin,
  Mail,
  Presentation,
} from "lucide-react";
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent,
  type ReactNode,
} from "react";

const EMAIL = "ginelle.doubek@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/ginelledoubek";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ginelle Doubek — CRM, Salesforce & Business Operations" },
      {
        name: "description",
        content:
          "I help teams turn customer data, processes and relationships into clear decisions. Open to CRM, Salesforce Admin and Sales Ops roles in Aargau/Zurich.",
      },
      { property: "og:title", content: "Ginelle Doubek — CRM, Salesforce & Business Operations" },
      {
        property: "og:description",
        content: "I help teams turn customer data, processes and relationships into clear decisions.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

const proof = [
  {
    years: "10+ yrs",
    label: "B2B sales & account management",
    detail: "Starwood, Sheraton, Nestlé, Unilever",
    icon: Handshake,
  },
  {
    years: "3.5 yrs",
    label: "Salesforce in daily use",
    detail: "Accounts, leads, opportunities & pipeline across MENA at ClavigerME",
    icon: BarChart3,
  },
  {
    years: "2 yrs",
    label: "International congress coordination",
    detail: "Abstract programme, EULAR, Zurich",
    icon: Presentation,
  },
];

const toolkit = ["Salesforce", "Power BI", "Tableau", "Excel", "SQL", "Python", "HTML/CSS/JS", "AI prompting"];

const learning = [
  "Data Analytics Professional Certificate — Purdue / Simplilearn",
  "AWS Cloud Practitioner badge",
  "Bring Women Back to Work, Cohort 16 — AI Builder Program",
  "Preparing for Salesforce Certified Administrator (Trailhead)",
];

function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const update = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0);
      setShowBackToTop(window.scrollY > 500);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return { progress, showBackToTop };
}

function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}

function Index() {
  const [activeProof, setActiveProof] = useState(0);
  const [copyState, setCopyState] = useState<"idle" | "copied" | "error">("idle");
  const { progress, showBackToTop } = useScrollProgress();

  useEffect(() => {
    if (copyState === "idle") return;
    const timeout = window.setTimeout(() => setCopyState("idle"), 2400);
    return () => window.clearTimeout(timeout);
  }, [copyState]);

  const handleHeroPointer = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType === "touch") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--pointer-x", `${event.clientX - bounds.left}px`);
    event.currentTarget.style.setProperty("--pointer-y", `${event.clientY - bounds.top}px`);
  };

  const copyEmail = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(EMAIL);
      } else {
        const field = document.createElement("textarea");
        field.value = EMAIL;
        field.style.position = "fixed";
        field.style.opacity = "0";
        document.body.appendChild(field);
        field.select();
        const copied = document.execCommand("copy");
        field.remove();
        if (!copied) throw new Error("Copy command unavailable");
      }
      setCopyState("copied");
    } catch {
      setCopyState("error");
    }
  };

  const backToTop = () => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
  };

  const selectedProof = proof[activeProof]!;

  return (
    <>
      <a
        href="#main-content"
        className="fixed left-4 top-3 z-50 -translate-y-20 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>

      <div className="fixed inset-x-0 top-0 z-50 h-1 bg-secondary" aria-hidden="true">
        <div className="scroll-progress h-full origin-left" style={{ transform: `scaleX(${progress})` }} />
      </div>

      <nav className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-xl" aria-label="Page sections">
        <div className="mx-auto flex h-16 max-w-3xl items-center justify-between gap-3 px-5 sm:px-8">
          <a
            href="#top"
            className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary font-display text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:rotate-6 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            aria-label="Ginelle Doubek — back to top"
          >
            GD
          </a>
          <div className="flex items-center gap-3 sm:gap-6">
            <a className="nav-link" href="#about">About</a>
            <a className="nav-link" href="#toolkit">Skills</a>
            <a className="nav-link hidden min-[380px]:inline-flex" href="#learning">Learning</a>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              className="flex size-9 items-center justify-center rounded-full border border-border text-foreground transition duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="Connect with Ginelle on LinkedIn"
            >
              <Linkedin className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </nav>

      <main id="main-content" className="mx-auto max-w-3xl px-5 pb-12 sm:px-8 sm:pb-20">
        <header id="top" onPointerMove={handleHeroPointer} className="hero-spotlight scroll-mt-20 py-12 sm:py-20">
          <div className="hero-content">
            <p className="hero-enter text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Ginelle Doubek · Obersiggenthal, Aargau
            </p>
            <h1 className="hero-enter hero-delay-1 mt-5 text-4xl leading-[1.1] text-foreground sm:text-6xl">
              I turn customer data, processes and relationships into{" "}
              <em className="text-primary">clear decisions.</em>
            </h1>
            <p className="hero-enter hero-delay-2 mt-6 text-lg text-muted-foreground">
              CRM & business operations · Salesforce admin skills · Data analytics. Open to CRM Specialist,
              Salesforce Administrator, Sales Ops and CRM/Business Analyst roles — hybrid or remote-friendly,
              Aargau/Zurich.
            </p>
            <div className="hero-enter hero-delay-3 mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noreferrer"
                className="button-interactive group inline-flex items-center justify-center gap-2 rounded-md cta-primary px-6 py-3.5 font-semibold text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Connect on LinkedIn
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="button-interactive group inline-flex items-center justify-center gap-2 rounded-md border border-border bg-card/60 px-6 py-3.5 font-medium text-foreground hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <Mail className="size-4 transition-transform duration-300 group-hover:-rotate-6" aria-hidden="true" />
                Email me
              </a>
            </div>
          </div>
        </header>

        <Reveal>
          <section aria-labelledby="experience-heading">
            <div className="mb-5 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
              <h2 id="experience-heading" className="text-2xl text-foreground">Experience at a glance</h2>
              <p className="text-sm text-muted-foreground">Select a card to explore</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {proof.map((item, index) => {
                const Icon = item.icon;
                const selected = activeProof === index;
                return (
                  <button
                    key={item.label}
                    type="button"
                    aria-pressed={selected}
                    aria-controls="proof-detail"
                    onClick={() => setActiveProof(index)}
                    className={`proof-card group rounded-lg border p-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${selected ? "is-selected" : ""}`}
                  >
                    <span className="flex items-start justify-between gap-3">
                      <span className="font-display text-3xl text-primary">{item.years}</span>
                      <span className="proof-icon flex size-9 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                        <Icon className="size-4" aria-hidden="true" />
                      </span>
                    </span>
                    <span className="mt-3 block font-semibold leading-snug text-card-foreground">{item.label}</span>
                    <span className="mt-4 flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-primary">
                      {selected ? "Selected" : "Explore"}
                      <ChevronRight className={`size-3.5 transition-transform duration-300 ${selected ? "rotate-90" : "group-hover:translate-x-1"}`} aria-hidden="true" />
                    </span>
                  </button>
                );
              })}
            </div>
            <div id="proof-detail" key={selectedProof.label} className="proof-detail mt-4 rounded-lg border border-primary/25 bg-secondary/60 p-5 sm:p-6" aria-live="polite">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">In practice</p>
              <p className="mt-2 leading-relaxed text-secondary-foreground">{selectedProof.detail}</p>
            </div>
          </section>
        </Reveal>

        <Reveal delay={60}>
          <section id="crm-demo" className="scroll-mt-24 pt-16" aria-labelledby="crm-demo-heading">
            <p className="section-kicker">Interactive demo · Sample data</p>
            <h2 id="crm-demo-heading" className="mt-2 text-2xl text-foreground">Try a mini CRM pipeline</h2>
            <p className="mb-5 mt-3 leading-relaxed text-muted-foreground">
              Explore a fictional workflow: choose an account, move it to the next stage, then reset the demo.
            </p>
            <CrmDemo />
          </section>
        </Reveal>

        <Reveal delay={80}>
          <section id="about" className="scroll-mt-24 pt-16">
            <p className="section-kicker">My story</p>
            <h2 className="mt-2 text-2xl text-foreground">About</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              At ClavigerME I led business development and acquisitions, taking new B2B hotel accounts from
              prospecting to signed partnership, and ran Salesforce to keep the MENA pipeline current. I later
              coordinated the abstract programme for EULAR's international congress, working with researchers,
              committees and cross-border teams. After a planned career break, I'm re-entering the Swiss job
              market with fresh skills in data, cloud and AI.
            </p>
          </section>
        </Reveal>

        <Reveal delay={100}>
          <section className="mt-12 grid gap-10 sm:grid-cols-2">
            <div id="toolkit" className="scroll-mt-24">
              <p className="section-kicker">What I work with</p>
              <h2 className="mt-2 text-2xl text-foreground">Toolkit</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {toolkit.map((item) => (
                  <li key={item} className="toolkit-pill rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground">
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-muted-foreground">English (full professional) · German (professional working)</p>
            </div>
            <div id="learning" className="scroll-mt-24">
              <p className="section-kicker">Always growing</p>
              <h2 className="mt-2 text-2xl text-foreground">Recent learning</h2>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                {learning.map((item) => (
                  <li key={item} className="learning-item border-l-2 border-accent pl-3 text-sm">{item}</li>
                ))}
              </ul>
            </div>
          </section>
        </Reveal>

        <Reveal delay={100}>
          <footer className="mt-20 border-t border-border pt-8 text-sm text-muted-foreground">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <a href={`mailto:${EMAIL}`} className="underline-offset-4 transition-colors hover:text-primary hover:underline">{EMAIL}</a>
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold text-card-foreground transition duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-live="polite"
              >
                {copyState === "copied" ? <Check className="size-3.5 text-primary" aria-hidden="true" /> : <Copy className="size-3.5" aria-hidden="true" />}
                {copyState === "copied" ? "Email copied" : copyState === "error" ? "Copy unavailable" : "Copy email"}
              </button>
            </div>
          </footer>
        </Reveal>
      </main>

      <button
        type="button"
        onClick={backToTop}
        aria-label="Back to top"
        tabIndex={showBackToTop ? 0 : -1}
        className={`back-to-top fixed bottom-5 right-5 z-40 flex size-11 items-center justify-center rounded-full cta-primary text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${showBackToTop ? "is-visible" : ""}`}
      >
        <ArrowUp className="size-4" aria-hidden="true" />
      </button>
    </>
  );
}
