import type { Language } from "@/lib/portfolio-copy";

export type PageKey = "home" | "resume" | "projects" | "about" | "contact";
export const pagePaths = {
  home: "/",
  resume: "/resume",
  projects: "/projects",
  about: "/about",
  contact: "/contact",
} as const;
export const pageOrder: PageKey[] = ["home", "resume", "projects", "about", "contact"];

type PageText = { label: string; title: string; description: string };
type SiteCopy = {
  pages: Record<PageKey, PageText>;
  menu: string;
  knowMore: string;
  knowMoreSub: string;
  explore: string;
  next: string;
};

export const siteCopy: Record<Language, SiteCopy> = {
  en: {
    menu: "Menu",
    knowMore: "Get to know me more!",
    knowMoreSub: "Ginny's AI answers your questions about my experience.",
    explore: "Explore my portfolio",
    next: "Next",
    pages: {
      home: { label: "Homepage", title: "Ginelle Doubek — CRM, Data & AI", description: "Business experience with a technology mindset: CRM, data analytics, AI and automation." },
      resume: { label: "Resume", title: "Resume — Ginelle Doubek", description: "Experience, education, skills, languages and certifications of Ginelle Doubek." },
      projects: { label: "Projects", title: "Projects — Ginelle Doubek", description: "TindaCo, web projects and an interactive CRM demo by Ginelle Doubek." },
      about: { label: "About me", title: "About me — Ginelle Doubek", description: "Ginelle's story, purpose, career direction, tennis and cross-country skiing." },
      contact: { label: "Contacts", title: "Contact — Ginelle Doubek", description: "Connect with Ginelle Doubek for hiring or collaboration." },
    },
  },
  de: {
    menu: "Menü",
    knowMore: "Lernen Sie mich besser kennen!",
    knowMoreSub: "Ginny's AI beantwortet Ihre Fragen zu meiner Erfahrung.",
    explore: "Mein Portfolio entdecken",
    next: "Weiter",
    pages: {
      home: { label: "Startseite", title: "Ginelle Doubek — CRM, Daten & KI", description: "Geschäftserfahrung mit Technologie-Mindset: CRM, Datenanalyse, KI und Automatisierung." },
      resume: { label: "Lebenslauf", title: "Lebenslauf — Ginelle Doubek", description: "Erfahrung, Ausbildung, Fähigkeiten, Sprachen und Zertifikate von Ginelle Doubek." },
      projects: { label: "Projekte", title: "Projekte — Ginelle Doubek", description: "TindaCo, Webprojekte und eine interaktive CRM-Demo von Ginelle Doubek." },
      about: { label: "Über mich", title: "Über mich — Ginelle Doubek", description: "Ginelles Geschichte, Ziele, Tennis und Langlauf." },
      contact: { label: "Kontakt", title: "Kontakt — Ginelle Doubek", description: "Kontakt zu Ginelle Doubek für Stellen oder Zusammenarbeit." },
    },
  },
  fr: {
    menu: "Menu",
    knowMore: "Apprenez à mieux me connaître !",
    knowMoreSub: "Ginny's AI répond à vos questions sur mon expérience.",
    explore: "Découvrir mon portfolio",
    next: "Suivant",
    pages: {
      home: { label: "Accueil", title: "Ginelle Doubek — CRM, données & IA", description: "Expérience business et esprit technologique : CRM, analyse de données, IA et automatisation." },
      resume: { label: "CV", title: "CV — Ginelle Doubek", description: "Expérience, formation, compétences, langues et certifications de Ginelle Doubek." },
      projects: { label: "Projets", title: "Projets — Ginelle Doubek", description: "TindaCo, projets web et démo CRM interactive de Ginelle Doubek." },
      about: { label: "À propos", title: "À propos — Ginelle Doubek", description: "Le parcours de Ginelle, ses objectifs, le tennis et le ski de fond." },
      contact: { label: "Contact", title: "Contact — Ginelle Doubek", description: "Contactez Ginelle Doubek pour un poste ou une collaboration." },
    },
  },
  it: {
    menu: "Menu",
    knowMore: "Conoscimi meglio!",
    knowMoreSub: "Ginny's AI risponde alle tue domande sulla mia esperienza.",
    explore: "Esplora il mio portfolio",
    next: "Avanti",
    pages: {
      home: { label: "Home", title: "Ginelle Doubek — CRM, dati & IA", description: "Esperienza business con mentalità tecnologica: CRM, analisi dati, IA e automazione." },
      resume: { label: "Curriculum", title: "Curriculum — Ginelle Doubek", description: "Esperienza, formazione, competenze, lingue e certificazioni di Ginelle Doubek." },
      projects: { label: "Progetti", title: "Progetti — Ginelle Doubek", description: "TindaCo, progetti web e una demo CRM interattiva di Ginelle Doubek." },
      about: { label: "Chi sono", title: "Chi sono — Ginelle Doubek", description: "La storia di Ginelle, i suoi obiettivi, il tennis e lo sci di fondo." },
      contact: { label: "Contatti", title: "Contatti — Ginelle Doubek", description: "Contatta Ginelle Doubek per lavoro o collaborazione." },
    },
  },
};

export function pageHead(page: PageKey, lang: Language | undefined) {
  const p = siteCopy[lang ?? "en"].pages[page];
  return {
    meta: [
      { title: p.title },
      { name: "description", content: p.description },
      { property: "og:title", content: p.title },
      { property: "og:description", content: p.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}
