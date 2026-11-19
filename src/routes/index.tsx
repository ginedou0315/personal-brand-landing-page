import { createFileRoute } from "@tanstack/react-router";

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
  { years: "10+ yrs", label: "B2B sales & account management", detail: "Starwood, Sheraton, Nestlé, Unilever" },
  { years: "3.5 yrs", label: "Salesforce in daily use", detail: "Accounts, leads, opportunities & pipeline across MENA at ClavigerME" },
  { years: "2 yrs", label: "International congress coordination", detail: "Abstract programme, EULAR, Zurich" },
];

const toolkit = ["Salesforce", "Power BI", "Tableau", "Excel", "SQL", "Python", "HTML/CSS/JS", "AI prompting"];

const learning = [
  "Data Analytics Professional Certificate — Purdue / Simplilearn",
  "AWS Cloud Practitioner badge",
  "Bring Women Back to Work, Cohort 16 — AI Builder Program",
  "Preparing for Salesforce Certified Administrator (Trailhead)",
];

function Index() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-12 sm:px-8 sm:py-20">
      <header>
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Ginelle Doubek · Obersiggenthal, Aargau
        </p>
        <h1 className="mt-5 text-4xl leading-[1.1] text-foreground sm:text-6xl">
          I turn customer data, processes and relationships into{" "}
          <em className="text-primary">clear decisions.</em>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          CRM & business operations · Salesforce admin skills · Data analytics. Open to CRM Specialist,
          Salesforce Administrator, Sales Ops and CRM/Business Analyst roles — hybrid or remote-friendly,
          Aargau/Zurich.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-md cta-primary px-6 py-3.5 font-semibold text-primary-foreground transition hover:opacity-90"
          >
            Connect on LinkedIn
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3.5 font-medium text-foreground transition hover:bg-secondary"
          >
            Email me
          </a>
        </div>
      </header>

      <section className="mt-16 grid gap-4 sm:grid-cols-3">
        {proof.map((p) => (
          <div key={p.label} className="rounded-lg border border-border bg-card p-5">
            <p className="font-display text-3xl text-primary">{p.years}</p>
            <p className="mt-2 font-semibold text-card-foreground">{p.label}</p>
            <p className="mt-1 text-sm text-muted-foreground">{p.detail}</p>
          </div>
        ))}
      </section>

      <section className="mt-16">
        <h2 className="text-2xl text-foreground">About</h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          At ClavigerME I led business development and acquisitions, taking new B2B hotel accounts from
          prospecting to signed partnership, and ran Salesforce to keep the MENA pipeline current. I later
          coordinated the abstract programme for EULAR's international congress, working with researchers,
          committees and cross-border teams. After a planned career break, I'm re-entering the Swiss job
          market with fresh skills in data, cloud and AI.
        </p>
      </section>

      <section className="mt-12 grid gap-10 sm:grid-cols-2">
        <div>
          <h2 className="text-2xl text-foreground">Toolkit</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {toolkit.map((t) => (
              <li key={t} className="rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground">
                {t}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-muted-foreground">English (full professional) · German (professional working)</p>
        </div>
        <div>
          <h2 className="text-2xl text-foreground">Recent learning</h2>
          <ul className="mt-4 space-y-2 text-muted-foreground">
            {learning.map((l) => (
              <li key={l} className="border-l-2 border-accent pl-3 text-sm">{l}</li>
            ))}
          </ul>
        </div>
      </section>

      <footer className="mt-20 border-t border-border pt-8 text-sm text-muted-foreground">
        <a href={`mailto:${EMAIL}`} className="underline-offset-4 hover:underline">{EMAIL}</a>
      </footer>
    </main>
  );
}
