import { Link } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowUpRight,
  BarChart3,
  BriefcaseBusiness,
  Check,
  Code2,
  Copy,
  Database,
  Download,
  Github,
  Globe2,
  Handshake,
  Laptop,
  Linkedin,
  Mail,
  Network,
  Package,
  Sparkles,
  UsersRound,
} from "lucide-react";
import { useEffect, useState } from "react";
import { siteCopy } from "@/lib/site-pages";
import { Button } from "@/components/ui/button";
import { CrmDemo } from "@/components/CrmDemo";
import { ResumeSection } from "@/components/ResumeSection";
import { ProjectGrid } from "@/components/ProjectGrid";
import { Certifications } from "@/components/Certifications";
import { GinnyChat } from "@/components/GinnyChat";
import portraitAsset from "@/assets/ginelle-portrait.png.asset.json";
import tindacoAsset from "@/assets/tindaco-logo.png.asset.json";
import cvAsset from "@/assets/Ginelle_Doubek_Website_CV.pdf.asset.json";
import {
  GITHUB,
  NETLIFY,
  ORIGINAL_SITE_SOURCE,
  SHECODES,
  TABLEAU,
  technicalSkills,
} from "@/lib/portfolio-content";
import {
  ginnyCopy,
  languageSearch,
  languages,
  portfolioCopy,
  type Language,
} from "@/lib/portfolio-copy";

const EMAIL = "ginelle.doubek@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/ginelledoubek";
const capabilityIcons = [UsersRound, Database, Sparkles];

export function HomeHero({ lang }: { lang: Language }) {
  const c = portfolioCopy[lang];
  const [activeProof, setActiveProof] = useState(0);
  return (
    <>
        <header id="top" className="brand-hero relative scroll-mt-24 ">
          <div className="page-width py-10 sm:py-14">
            <div className="hero-enter flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
              <p>{c.location}</p>
              <p className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-primary" />
                CRM / DATA / AI
              </p>
            </div>
            <div className="mt-9 grid items-center gap-9 sm:mt-12 lg:grid-cols-[minmax(0,1fr)_20rem] xl:grid-cols-[minmax(0,1fr)_22rem]">
              <div className="min-w-0">
                <p className="hero-enter max-w-2xl text-xs font-semibold text-primary">{c.role}</p>
                <h1 className="hero-enter hero-delay-1 mt-3 text-5xl leading-tight sm:text-7xl lg:text-6xl xl:text-8xl">
                  <span className="font-script font-normal text-primary">Ginelle Doubek</span>
                </h1>
                <p className="hero-enter hero-delay-1 mt-4 max-w-3xl font-display text-2xl leading-snug sm:text-4xl">
                  {c.headline}
                </p>
                <p className="hero-enter hero-delay-2 mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
                  {c.intro}
                </p>
                <div className="hero-enter hero-delay-3 mt-7 flex flex-col gap-3 sm:flex-row">
                  <Button
                    asChild
                    size="lg"
                    className="button-interactive h-auto whitespace-normal py-3.5"
                  >
                    <a href={LINKEDIN} target="_blank" rel="noreferrer">
                      {c.connect}
                      <ArrowUpRight />
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="h-auto whitespace-normal py-3.5"
                  >
                    <Link to="/projects" search={{ lang }}>
                      {c.projectTitle}
                      <ArrowDown />
                    </Link>
                  </Button>
                </div>
                <p className="mt-6 max-w-2xl text-xs leading-relaxed text-muted-foreground">
                  {c.availability}
                </p>
              </div>
              <div className="hero-enter hero-delay-2">
                <div className="portrait-frame">
                  <img
                    src={portraitAsset.url}
                    alt="Ginelle Doubek"
                    width="1528"
                    height="1920"
                    className="portrait-image"
                    fetchPriority="high"
                    decoding="async"
                  />
                </div>
                <p className="mt-3 text-center text-xs text-muted-foreground">{c.nickname}</p>
              </div>
            </div>
          </div>
          <div className="border-t border-border">
            <div className="page-width grid gap-0 sm:grid-cols-3">
              {c.proof.map(([years, label], i) => (
                <Button
                  key={i}
                  variant="ghost"
                  onClick={() => setActiveProof(i)}
                  aria-pressed={activeProof === i}
                  aria-controls="proof-detail"
                  className={`experience-cell h-auto min-h-24 items-center justify-start gap-4 whitespace-normal rounded-none border-b border-border py-5 text-left sm:border-b-0 ${activeProof === i ? "is-selected" : ""}`}
                >
                  <span className="shrink-0 font-display text-2xl text-primary">{years}</span>
                  <span className="max-w-40 text-xs leading-relaxed">{label}</span>
                </Button>
              ))}
            </div>
          </div>
        </header>
        <div className="page-width">
          <p
            id="proof-detail"
            aria-live="polite"
            className="py-4 text-xs leading-relaxed text-muted-foreground"
          >
            {c.proof[activeProof]?.[2]}
          </p>
        </div>
    </>
  );
}

export function Capabilities({ lang }: { lang: Language }) {
  const c = portfolioCopy[lang];
  return (
    <>
        <section id="capabilities" className="scroll-mt-24 border-t border-border">
          <div className="page-width section-space">
            <p className="section-kicker">{c.capabilityKicker}</p>
            <h2 className="section-heading">{c.capabilityTitle}</h2>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {c.capabilities.map(([title, text], i) => {
                const Icon = capabilityIcons[i] ?? Database;
                return (
                  <div key={title} className="border-t border-border pt-5">
                    <div className="flex items-center justify-between">
                      <Icon className="size-6 text-primary" />
                      <span className="text-xs text-muted-foreground">0{i + 1}</span>
                    </div>
                    <h3 className="mt-5 font-sans text-lg font-semibold">{title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
                  </div>
                );
              })}
            </div>
            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-border pt-6">
              {c.strengths.map((strength) => (
                <li key={strength} className="flex items-center gap-2 text-xs">
                  <Check className="size-3 text-primary" />
                  {strength}
                </li>
              ))}
            </ul>
          </div>
        </section>
    </>
  );
}

export function GinnySection({ lang }: { lang: Language }) {
  const c = portfolioCopy[lang];
  return (
    <>
        <section id="ginny-ai" className="scroll-mt-24 border-y border-border bg-secondary/35">
          <div className="page-width section-space">
            <p className="section-kicker">{ginnyCopy[lang].kicker.replace(/^\d+ \/ /, "")}</p>
            <h2 className="section-heading">{siteCopy[lang].knowMore}</h2>
            <p className="mt-2 font-display text-xl text-primary">{ginnyCopy[lang].title}</p>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              {ginnyCopy[lang].intro}
            </p>
            <p className="mb-8 mt-3 max-w-2xl text-xs leading-relaxed text-muted-foreground">
              {ginnyCopy[lang].privacy}
            </p>
            <div className="glow-panel"><GinnyChat lang={lang} /></div>
          </div>
        </section>
    </>
  );
}

export function TindaCoSection({ lang }: { lang: Language }) {
  const c = portfolioCopy[lang];
  return (
    <>
        <section id="tindaco" className="scroll-mt-24 border-y border-border bg-secondary/45">
          <div className="page-width section-space">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <p className="section-kicker">{c.projectKicker}</p>
              <span className="flex items-center gap-2 text-xs font-medium text-primary">
                <span className="size-1.5 rounded-full bg-primary" />
                {c.prototype}
              </span>
            </div>
            <div className="mt-7 grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr]">
              <div>
                <img
                  src={tindacoAsset.url}
                  alt="TindaCo"
                  width="1310"
                  height="460"
                  className="mb-6 h-auto w-full max-w-[19rem] sm:max-w-[22rem]"
                  loading="lazy"
                  decoding="async"
                />
                <h2 className="text-5xl sm:text-6xl">
                  {c.projectTitle}
                  <span className="text-primary">.</span>
                </h2>
                <p className="mt-3 font-display text-xl">{c.projectTagline}</p>
                <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  {c.projectIntro}
                </p>
              </div>
              <div className="project-diagram border-l-2 border-primary pl-6">
                <p className="text-xs font-semibold text-primary">{c.workflowTitle}</p>
                <ol className="mt-5 space-y-5">
                  {c.workflow.map((label, i) => {
                    const Icon = [Package, Network, UsersRound][i] ?? Package;
                    return (
                      <li key={label} className="flex items-center gap-4">
                        <span className="flex size-11 shrink-0 items-center justify-center rounded-md border border-border bg-background">
                          <Icon className="size-5 text-primary" />
                        </span>
                        <span className="text-sm font-medium">{label}</span>
                      </li>
                    );
                  })}
                </ol>
              </div>
            </div>
            <div className="mt-12 grid gap-7 border-t border-border pt-7 md:grid-cols-3">
              {[
                [c.projectProblemTitle, c.projectProblem],
                [c.projectApproachTitle, c.projectApproach],
                [c.projectNowTitle, c.projectNow],
              ].map(([title, text]) => (
                <div key={title}>
                  <h3 className="font-sans text-sm font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </div>
              ))}
            </div>
            <p className="mt-7 border-t border-border pt-5 text-xs leading-relaxed text-muted-foreground">
              {c.projectFuture}
            </p>
          </div>
        </section>
    </>
  );
}

export function ProjectsSection({ lang }: { lang: Language }) {
  const c = portfolioCopy[lang];
  return (
    <>
        <section id="projects" className="scroll-mt-24">
          <div className="page-width section-space">
            <p className="section-kicker">{c.projectsKicker}</p>
            <h2 className="section-heading">{c.projectsTitle}</h2>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              {c.projectsIntro}
            </p>
            <ProjectGrid lang={lang} />
          </div>
        </section>
    </>
  );
}

export function CrmDemoSection({ lang }: { lang: Language }) {
  const c = portfolioCopy[lang];
  return (
    <>
        <section id="crm-demo" className="scroll-mt-24 border-y border-border bg-secondary/35">
          <div className="page-width section-space">
            <p className="section-kicker">{c.demoKicker}</p>
            <h2 className="section-heading">{c.demoTitle}</h2>
            <p className="mb-7 mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              {c.demoIntro}
            </p>
            <CrmDemo lang={lang} />
          </div>
        </section>
    </>
  );
}

export function StorySection({ lang }: { lang: Language }) {
  const c = portfolioCopy[lang];
  return (
    <>
        <section id="about" className="scroll-mt-24 border-y border-border bg-secondary/35">
          <div className="page-width section-space">
            <p className="section-kicker">{c.storyKicker}</p>
            <h2 className="section-heading">{c.storyTitle}</h2>
            <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              {c.backgroundText}
            </p>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {c.story.map(([title, text], i) => (
                <div key={title} className="border-t border-border pt-5">
                  <span className="font-display text-3xl text-primary">0{i + 1}</span>
                  <h3 className="mt-4 font-sans text-base font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </div>
              ))}
            </div>
            <blockquote className="mt-12 border-l-2 border-primary pl-6 font-display text-2xl leading-relaxed text-primary sm:text-3xl">
              “{c.purpose}”
            </blockquote>
            <p className="mt-6 max-w-2xl text-xs italic leading-relaxed text-muted-foreground">
              “{c.mantra}”
            </p>
          </div>
        </section>
    </>
  );
}

export function DirectionSection({ lang }: { lang: Language }) {
  const c = portfolioCopy[lang];
  return (
    <>
        <section id="direction" className="border-y border-border bg-secondary/35">
          <div className="page-width section-space">
            <p className="section-kicker">{c.directionKicker}</p>
            <h2 className="section-heading">{c.directionTitle}</h2>
            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              {c.directionText}
            </p>
            <div className="mt-9 grid gap-7 md:grid-cols-3">
              {c.values.map(([title, text]) => (
                <div key={title} className="border-t border-border pt-5">
                  <h3 className="font-sans text-sm font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 grid gap-9 border-t border-border pt-7 md:grid-cols-2">
              <div>
                <h3 className="font-sans text-sm font-semibold">{c.skillsTitle}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {technicalSkills.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-border bg-background px-3 py-2 text-xs"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-5">
                  <h4 className="text-xs font-semibold">{c.languagesTitle}</h4>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {c.languageList.map(([level, language]) => (
                      <li key={language} className="flex items-center gap-2 text-xs">
                        <span className="rounded bg-secondary px-2 py-1 font-semibold text-primary">
                          {level}
                        </span>
                        <span className="text-muted-foreground">{language}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="font-sans text-sm font-semibold">{c.learningTitle}</h3>
                <ul className="mt-4 space-y-3">
                  {c.learning.map((item) => (
                    <li
                      key={item}
                      className="border-l-2 border-accent pl-3 text-xs leading-relaxed text-muted-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
    </>
  );
}

export function PersonalSection({ lang }: { lang: Language }) {
  const c = portfolioCopy[lang];
  return (
    <>
        <section className="border-t border-border">
          <div className="page-width section-space grid items-center gap-8 md:grid-cols-[1fr_170px]">
            <div>
              <p className="section-kicker">{c.personalKicker}</p>
              <h2 className="mt-3 max-w-2xl text-2xl leading-snug sm:text-3xl">
                {c.personalTitle}
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {c.personalText}
              </p>
              <p className="mt-5 text-xs font-semibold text-primary">
                {c.tennis} / {c.skiing}
              </p>
              <div className="mt-6">
                <h3 className="font-sans text-xs font-semibold">{c.hobbiesTitle}</h3>
                <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
                  {c.hobbies.map((hobby) => (
                    <li key={hobby} className="text-xs text-muted-foreground">
                      {hobby}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <svg
              viewBox="0 0 200 200"
              fill="none"
              className="mx-auto w-36 text-primary"
              aria-hidden="true"
            >
              <g transform="rotate(-28 85 90)" stroke="currentColor" strokeWidth="2">
                <ellipse cx="85" cy="65" rx="30" ry="40" />
                <path d="M65 36v57m10-65v75m10-78v80m10-78v75m10-66v58M58 45h54M56 55h58M55 65h60M57 75h56M60 85h50M67 95h36M76 104l3 22h12l3-22M80 126v43h10v-43" />
              </g>
              <circle
                cx="140"
                cy="126"
                r="15"
                className="fill-secondary"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M130 115q14 11 20 24m-22-2q15-4 13-26m-14 68 39-91m-26 100 36-88"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </section>
    </>
  );
}

export function ResumeBlock({ lang }: { lang: Language }) {
  const c = portfolioCopy[lang];
  return (
    <>
        <section id="resume" className="scroll-mt-24">
          <div className="page-width section-space">
            <p className="section-kicker">{c.resumeKicker}</p>
            <h2 className="section-heading">{c.resumeTitle}</h2>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              {c.resumeIntro}
            </p>
            <Button asChild variant="outline" className="mb-8 mt-5">
              <a
                href={cvAsset.url}
                download="Ginelle_Doubek_Website_CV.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <Download />
                {c.downloadCv}
              </a>
            </Button>
            <ResumeSection lang={lang} />
          </div>
        </section>
    </>
  );
}

export function CertificationsSection({ lang }: { lang: Language }) {
  const c = portfolioCopy[lang];
  return (
    <>
        <section id="certifications" className="scroll-mt-24">
          <div className="page-width section-space">
            <p className="section-kicker">{c.certificationKicker}</p>
            <h2 className="section-heading">{c.certificationTitle}</h2>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              {c.certificationIntro}
            </p>
            <Certifications lang={lang} />
          </div>
        </section>
    </>
  );
}

export function ContactSection({ lang }: { lang: Language }) {
  const c = portfolioCopy[lang];
  const [copyState, setCopyState] = useState<"idle" | "copied" | "error">("idle");
  useEffect(() => {
    if (copyState === "idle") return;
    const timeout = window.setTimeout(() => setCopyState("idle"), 2400);
    return () => window.clearTimeout(timeout);
  }, [copyState]);
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopyState("copied");
    } catch {
      setCopyState("error");
    }
  };
  return (
    <>
        <section id="contact" className="scroll-mt-24 border-t border-border bg-secondary/50">
          <div className="page-width section-space">
            <p className="section-kicker">{siteCopy[lang].pages.contact.label}</p>
            <h2 className="section-heading">{c.contactTitle}</h2>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              {c.contactText}
            </p>
            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              {[
                [c.hiring, c.hiringText],
                [c.collaboration, c.collaborationText],
              ].map(([title, text], i) => (
                <div key={title} className="border-t border-border pt-5">
                  {i === 0 ? (
                    <BriefcaseBusiness className="size-5 text-primary" />
                  ) : (
                    <Handshake className="size-5 text-primary" />
                  )}
                  <h3 className="mt-3 font-sans text-base font-semibold">{title}</h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                    {text}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-auto whitespace-normal py-3.5">
                <a href={LINKEDIN} target="_blank" rel="noreferrer">
                  <Linkedin />
                  {c.connect}
                  <ArrowUpRight />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-auto whitespace-normal py-3.5"
              >
                <a href={`mailto:${EMAIL}`}>
                  <Mail />
                  {c.email}
                </a>
              </Button>
            </div>
            <div className="mt-8">
              <h3 className="text-xs font-semibold">{c.profilesTitle}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                <Button asChild variant="outline" size="sm">
                  <a href={GITHUB} target="_blank" rel="noreferrer">
                    <Github />
                    GitHub
                  </a>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <a href={TABLEAU} target="_blank" rel="noreferrer">
                    <BarChart3 />
                    Tableau
                  </a>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <a href={SHECODES} target="_blank" rel="noreferrer">
                    <Laptop />
                    SheCodes
                  </a>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <a href={NETLIFY} target="_blank" rel="noreferrer">
                    <Globe2 />
                    Netlify
                  </a>
                </Button>
                <Button asChild variant="ghost" size="sm">
                  <a href={ORIGINAL_SITE_SOURCE} target="_blank" rel="noreferrer">
                    <Code2 />
                    {c.sourceCode}
                  </a>
                </Button>
              </div>
            </div>
            <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
              <span className="text-xs font-semibold">Ginelle Doubek</span>
              <div className="flex flex-wrap items-center gap-2">
                <a
                  href={`mailto:${EMAIL}`}
                  className="break-all text-xs text-muted-foreground hover:text-primary"
                >
                  {EMAIL}
                </a>
                <Button variant="ghost" size="sm" onClick={copyEmail} aria-live="polite">
                  {copyState === "copied" ? <Check /> : <Copy />}
                  {copyState === "copied" ? c.copied : copyState === "error" ? c.copyError : c.copy}
                </Button>
              </div>
            </div>
          </div>
        </section>
    </>
  );
}
