export const languages = { en: "English", de: "Deutsch", fr: "Français", it: "Italiano" } as const;
export type Language = keyof typeof languages;
export const personalVideoCopy = {
  en: { running: "Running with baby Daniela", note: "These days, my new favourite activity is going for a run with my baby Daniela. 💜" },
  de: { running: "Laufen mit Baby Daniela", note: "Am liebsten gehe ich inzwischen mit meinem Baby Daniela laufen." },
  fr: { running: "Courir avec mon bébé Daniela", note: "Mon nouveau plaisir préféré : courir avec mon bébé Daniela." },
  it: { running: "Correre con la mia bimba Daniela", note: "La mia nuova attività preferita è correre con la mia bimba Daniela." },
} as const;
export function isLanguage(value: unknown): value is Language {
  return typeof value === "string" && Object.prototype.hasOwnProperty.call(languages, value);
}
export function languageSearch(search: Record<string, unknown>): { lang?: Language } {
  const lang = search["lang"];
  return isLanguage(lang) ? { lang } : {};
}

const previousCopy = {
  en: {
    title: "Ginelle Doubek — CRM, AI Building & Automation",
    description:
      "B2B experience, hands-on Salesforce skills and a new career direction in CRM, AI building and automation. Meet Ginelle Doubek in Aargau, Switzerland.",
    nav: ["Capabilities", "My story", "My direction"],
    skip: "Skip to content",
    language: "Page language",
    location: "Obersiggenthal, Aargau · Switzerland",
    audience: "For recruiters & hiring teams",
    headline: "Customer relationships. Clear processes. A new chapter.",
    intro:
      "I bring B2B sales experience and hands-on Salesforce skills to a new career focused on CRM, AI building and automation.",
    availability:
      "Exploring CRM Specialist, Salesforce Administrator, Sales Ops and CRM/Business Analyst roles — hybrid or remote-friendly, Aargau / Zurich.",
    connect: "Connect on LinkedIn",
    email: "Email me",
    proofTitle: "Experience I bring with me",
    proof: [
      [
        "10+ years",
        "B2B sales & account management",
        "Starwood, Sheraton, Nestlé and Unilever. A background in building customer relationships and managing accounts.",
      ],
      [
        "3.5 years",
        "Salesforce in daily use",
        "At ClavigerME: accounts, leads, opportunities and pipeline across MENA.",
      ],
      [
        "2 years",
        "International coordination",
        "Abstract programme coordination for EULAR’s international congress in Zurich.",
      ],
    ],
    capabilityKicker: "What I bring to your team",
    capabilityTitle: "Business experience, with a systems mindset.",
    capabilities: [
      [
        "CRM & customer relationships",
        "Hands-on Salesforce experience with accounts, leads, opportunities and pipeline, backed by a career in B2B sales.",
      ],
      [
        "Data & business operations",
        "An analytics toolkit spanning Excel, SQL, Python, Power BI and Tableau, alongside international programme coordination.",
      ],
      [
        "AI building & automation",
        "My next career direction: developing AI-building and automation skills through learning, AI prompting and the AI Builder Program.",
      ],
    ],
    demoKicker: "A small example · Fictional data",
    demoTitle: "From a lead to a partnership.",
    demoIntro:
      "A mini CRM pipeline, bringing my interest in customer data and clear next steps to life.",
    storyKicker: "My story",
    storyTitle: "Not starting from zero. Building on experience.",
    story: [
      [
        "Customer relationships",
        "My background spans B2B sales and account management. At ClavigerME, I led business development and acquisitions, taking new hotel accounts from prospecting to signed partnership and keeping the MENA pipeline current in Salesforce.",
      ],
      [
        "Cross-border coordination",
        "I later coordinated the abstract programme for EULAR’s international congress in Zurich, working with researchers, committees and international teams.",
      ],
      [
        "A deliberate new chapter",
        "After a planned career break, I am returning to the Swiss job market with fresh learning in data, cloud and AI. I want to connect my business experience with a new career in CRM, AI building and automation.",
      ],
    ],
    directionKicker: "Where I want to go",
    directionTitle: "CRM. AI building. Automation.",
    directionText:
      "I want to help teams make better use of customer information, build clearer workflows and explore practical AI and automation. I bring the business perspective; I am developing the technical skills to take it further.",
    skillsTitle: "My toolkit",
    learningTitle: "Learning & development",
    learning: [
      "Data Analytics Professional Certificate — Purdue / Simplilearn",
      "AWS Cloud Practitioner badge",
      "Bring Women Back to Work, Cohort 16 — AI Builder Program",
      "Preparing for Salesforce Certified Administrator (Trailhead)",
    ],
    spoken: "English: full professional · German: professional working",
    personalKicker: "On a personal note",
    personalTitle: "A love of sport, from childhood to Switzerland.",
    personalText:
      "Sport has always been part of my life. I used to compete, and tennis has been a constant since childhood. After moving to Switzerland, I discovered cross-country skiing and grew to love it too.",
    tennis: "Tennis",
    skiing: "Cross-country skiing",
    contactTitle: "Let’s talk about the next chapter.",
    contactText:
      "I am looking for my next role in CRM, Salesforce or business operations — I would love to talk.",
    copy: "Copy email",
    copied: "Email copied",
    copyError: "Copy unavailable",
    top: "Back to top",
    demo: {
      title: "CRM pipeline",
      reset: "Reset demo",
      accounts: "Accounts",
      proposals: "Proposals",
      partnerships: "Partnerships",
      choose: "Accounts",
      selected: "Selected account",
      contact: "Contact",
      next: "Next action",
      pipeline: "Pipeline stage",
      latest: "Latest",
      move: "Move to",
      complete: "Partnership complete",
      note: "Fictional accounts · No real customer data · Changes reset on reload",
      stages: ["Lead", "Qualified", "Proposal", "Partnership"],
      actions: [
        "Schedule a discovery call",
        "Prepare a tailored proposal",
        "Follow up on the proposal",
        "Plan the next account review",
      ],
      activities: [
        "Discovery call completed",
        "New inbound enquiry",
        "Proposal shared",
        "Partnership confirmed",
        "Added to pipeline",
      ],
      moved: "Moved to",
      selectedVerb: "selected",
      resetMessage: "Demo reset",
    },
  },
  de: {
    title: "Ginelle Doubek — CRM, KI-Entwicklung & Automatisierung",
    description:
      "B2B-Erfahrung, praktische Salesforce-Kenntnisse und ein neuer Karriereweg in CRM, KI-Entwicklung und Automatisierung. Ginelle Doubek im Aargau.",
    nav: ["Kompetenzen", "Mein Weg", "Meine Ziele"],
    skip: "Zum Inhalt",
    language: "Seitensprache",
    location: "Obersiggenthal, Aargau · Schweiz",
    audience: "Für Recruiter & einstellende Teams",
    headline: "Kundenbeziehungen. Klare Prozesse. Ein neues Kapitel.",
    intro:
      "Ich verbinde B2B-Vertriebserfahrung und praktische Salesforce-Kenntnisse mit einem neuen Karriereweg in CRM, KI-Entwicklung und Automatisierung.",
    availability:
      "Ich suche Aufgaben als CRM Specialist, Salesforce Administrator, im Sales Ops oder als CRM/Business Analyst — hybrid oder remote-freundlich, Aargau / Zürich.",
    connect: "Auf LinkedIn vernetzen",
    email: "E-Mail schreiben",
    proofTitle: "Die Erfahrung, die ich mitbringe",
    proof: [
      [
        "10+ Jahre",
        "B2B-Vertrieb & Account Management",
        "Starwood, Sheraton, Nestlé und Unilever. Erfahrung im Aufbau von Kundenbeziehungen und in der Betreuung von Kunden.",
      ],
      [
        "3,5 Jahre",
        "Salesforce im täglichen Einsatz",
        "Bei ClavigerME: Accounts, Leads, Opportunities und Pipeline in der MENA-Region.",
      ],
      [
        "2 Jahre",
        "Internationale Koordination",
        "Koordination des Abstract-Programms für den internationalen EULAR-Kongress in Zürich.",
      ],
    ],
    capabilityKicker: "Was ich Ihrem Team mitbringe",
    capabilityTitle: "Geschäftserfahrung trifft strukturiertes Denken.",
    capabilities: [
      [
        "CRM & Kundenbeziehungen",
        "Praktische Salesforce-Erfahrung mit Accounts, Leads, Opportunities und Pipeline, gestützt auf meine Laufbahn im B2B-Vertrieb.",
      ],
      [
        "Daten & Business Operations",
        "Ein Analyse-Toolkit mit Excel, SQL, Python, Power BI und Tableau sowie Erfahrung in internationaler Programmkoordination.",
      ],
      [
        "KI-Entwicklung & Automatisierung",
        "Meine neue berufliche Richtung: Ich entwickle meine Fähigkeiten in KI und Automatisierung durch Weiterbildung, KI-Prompting und das AI Builder Program.",
      ],
    ],
    demoKicker: "Ein kleines Beispiel · Fiktive Daten",
    demoTitle: "Vom Lead zur Partnerschaft.",
    demoIntro:
      "Eine Mini-CRM-Pipeline macht mein Interesse an Kundendaten und klaren nächsten Schritten greifbar.",
    storyKicker: "Mein Weg",
    storyTitle: "Kein Anfang bei null. Ein Aufbau auf Erfahrung.",
    story: [
      [
        "Kundenbeziehungen",
        "Mein Hintergrund liegt im B2B-Vertrieb und Account Management. Bei ClavigerME leitete ich Geschäftsentwicklung und Akquisition, begleitete neue Hotelkunden von der Ansprache bis zur Partnerschaft und hielt die MENA-Pipeline in Salesforce aktuell.",
      ],
      [
        "Grenzüberschreitende Koordination",
        "Danach koordinierte ich das Abstract-Programm für den internationalen EULAR-Kongress in Zürich und arbeitete mit Forschenden, Komitees und internationalen Teams zusammen.",
      ],
      [
        "Ein bewusstes neues Kapitel",
        "Nach einer geplanten beruflichen Auszeit kehre ich mit neuem Wissen in Datenanalyse, Cloud und KI in den Schweizer Arbeitsmarkt zurück. Ich möchte meine Geschäftserfahrung mit einer neuen Karriere in CRM, KI-Entwicklung und Automatisierung verbinden.",
      ],
    ],
    directionKicker: "Wohin ich möchte",
    directionTitle: "CRM. KI-Entwicklung. Automatisierung.",
    directionText:
      "Ich möchte Teams dabei unterstützen, Kundeninformationen besser zu nutzen, klarere Abläufe zu gestalten und praktische KI und Automatisierung zu erkunden. Die Geschäftsperspektive bringe ich mit; die technischen Fähigkeiten entwickle ich weiter.",
    skillsTitle: "Mein Toolkit",
    learningTitle: "Weiterbildung & Entwicklung",
    learning: [
      "Professional Certificate in Data Analytics — Purdue / Simplilearn",
      "AWS Cloud Practitioner Badge",
      "Bring Women Back to Work, Kohorte 16 — AI Builder Program",
      "Vorbereitung auf Salesforce Certified Administrator (Trailhead)",
    ],
    spoken: "Englisch: volle berufliche Kompetenz · Deutsch: berufliche Arbeitskenntnisse",
    personalKicker: "Ganz persönlich",
    personalTitle: "Sport begleitet mich — seit der Kindheit bis in die Schweiz.",
    personalText:
      "Sport war immer Teil meines Lebens. Früher habe ich an Wettkämpfen teilgenommen, und Tennis begleitet mich seit meiner Kindheit bis heute. Nach meinem Umzug in die Schweiz habe ich Langlauf gelernt — und lieben gelernt.",
    tennis: "Tennis",
    skiing: "Langlauf",
    contactTitle: "Sprechen wir über das nächste Kapitel.",
    contactText:
      "Ich suche meine nächste Aufgabe in CRM, Salesforce oder Business Operations — ich freue mich auf ein Gespräch.",
    copy: "E-Mail kopieren",
    copied: "E-Mail kopiert",
    copyError: "Kopieren nicht verfügbar",
    top: "Nach oben",
    demo: {
      title: "CRM-Pipeline",
      reset: "Demo zurücksetzen",
      accounts: "Accounts",
      proposals: "Angebote",
      partnerships: "Partnerschaften",
      choose: "Accounts",
      selected: "Ausgewählter Account",
      contact: "Kontakt",
      next: "Nächster Schritt",
      pipeline: "Pipeline-Phase",
      latest: "Zuletzt",
      move: "Weiter zu",
      complete: "Partnerschaft abgeschlossen",
      note: "Fiktive Accounts · Keine echten Kundendaten · Änderungen werden beim Neuladen zurückgesetzt",
      stages: ["Lead", "Qualifiziert", "Angebot", "Partnerschaft"],
      actions: [
        "Erstgespräch vereinbaren",
        "Passendes Angebot erstellen",
        "Zum Angebot nachfassen",
        "Nächsten Kundentermin planen",
      ],
      activities: [
        "Erstgespräch abgeschlossen",
        "Neue eingehende Anfrage",
        "Angebot versendet",
        "Partnerschaft bestätigt",
        "Zur Pipeline hinzugefügt",
      ],
      moved: "Verschoben zu",
      selectedVerb: "ausgewählt",
      resetMessage: "Demo zurückgesetzt",
    },
  },
  fr: {
    title: "Ginelle Doubek — CRM, création avec l’IA & automatisation",
    description:
      "Expérience B2B, pratique de Salesforce et nouvelle orientation vers le CRM, la création avec l’IA et l’automatisation. Ginelle Doubek en Argovie.",
    nav: ["Compétences", "Mon parcours", "Mes objectifs"],
    skip: "Aller au contenu",
    language: "Langue de la page",
    location: "Obersiggenthal, Argovie · Suisse",
    audience: "Pour les recruteurs & les équipes qui recrutent",
    headline: "Relations clients. Processus clairs. Un nouveau chapitre.",
    intro:
      "J’apporte mon expérience de la vente B2B et ma pratique de Salesforce à une nouvelle carrière axée sur le CRM, la création avec l’IA et l’automatisation.",
    availability:
      "Je recherche un poste de CRM Specialist, Salesforce Administrator, Sales Ops ou CRM/Business Analyst — hybride ou ouvert au télétravail, Argovie / Zurich.",
    connect: "Me contacter sur LinkedIn",
    email: "M’écrire",
    proofTitle: "L’expérience que j’apporte",
    proof: [
      [
        "10+ ans",
        "Vente B2B & gestion de comptes",
        "Starwood, Sheraton, Nestlé et Unilever. Une expérience dans le développement des relations clients et la gestion de comptes.",
      ],
      [
        "3,5 ans",
        "Salesforce au quotidien",
        "Chez ClavigerME : comptes, leads, opportunités et pipeline dans la région MENA.",
      ],
      [
        "2 ans",
        "Coordination internationale",
        "Coordination du programme des résumés scientifiques du congrès international EULAR à Zurich.",
      ],
    ],
    capabilityKicker: "Ce que j’apporte à votre équipe",
    capabilityTitle: "L’expérience métier, avec une vision structurée.",
    capabilities: [
      [
        "CRM & relations clients",
        "Une pratique de Salesforce pour les comptes, leads, opportunités et pipeline, soutenue par une carrière dans la vente B2B.",
      ],
      [
        "Données & opérations",
        "Des outils d’analyse : Excel, SQL, Python, Power BI et Tableau, ainsi qu’une expérience de coordination de programmes internationaux.",
      ],
      [
        "Création avec l’IA & automatisation",
        "Ma nouvelle orientation : développer mes compétences en IA et automatisation grâce à la formation, au prompting et à l’AI Builder Program.",
      ],
    ],
    demoKicker: "Un petit exemple · Données fictives",
    demoTitle: "Du lead au partenariat.",
    demoIntro:
      "Un mini-pipeline CRM donne vie à mon intérêt pour les données clients et les prochaines étapes clairement définies.",
    storyKicker: "Mon parcours",
    storyTitle: "Je ne pars pas de zéro. Je m’appuie sur mon expérience.",
    story: [
      [
        "Relations clients",
        "Mon parcours couvre la vente B2B et la gestion de comptes. Chez ClavigerME, j’ai dirigé le développement commercial et l’acquisition, accompagné de nouveaux clients hôteliers de la prospection au partenariat et tenu à jour le pipeline MENA dans Salesforce.",
      ],
      [
        "Coordination internationale",
        "J’ai ensuite coordonné le programme des résumés scientifiques du congrès international EULAR à Zurich, en collaboration avec des chercheurs, des comités et des équipes internationales.",
      ],
      [
        "Un nouveau chapitre choisi",
        "Après une pause professionnelle planifiée, je reviens sur le marché suisse avec de nouvelles connaissances en analyse de données, cloud et IA. Je souhaite relier mon expérience métier à une nouvelle carrière dans le CRM, la création avec l’IA et l’automatisation.",
      ],
    ],
    directionKicker: "L’avenir que je souhaite construire",
    directionTitle: "CRM. Création avec l’IA. Automatisation.",
    directionText:
      "Je souhaite aider les équipes à mieux exploiter les informations clients, à structurer leurs processus et à explorer des usages concrets de l’IA et de l’automatisation. J’apporte la perspective métier et développe mes compétences techniques pour aller plus loin.",
    skillsTitle: "Mes outils",
    learningTitle: "Formation & développement",
    learning: [
      "Certificat professionnel en analyse de données — Purdue / Simplilearn",
      "Badge AWS Cloud Practitioner",
      "Bring Women Back to Work, cohorte 16 — AI Builder Program",
      "Préparation à la certification Salesforce Certified Administrator (Trailhead)",
    ],
    spoken:
      "Anglais : compétence professionnelle complète · Allemand : compétence professionnelle opérationnelle",
    personalKicker: "Sur une note personnelle",
    personalTitle: "Le sport, de mon enfance à la Suisse.",
    personalText:
      "Le sport a toujours fait partie de ma vie. J’ai participé à des compétitions, et le tennis m’accompagne depuis l’enfance jusqu’à aujourd’hui. Après mon arrivée en Suisse, j’ai appris le ski de fond — et j’ai appris à l’aimer aussi.",
    tennis: "Tennis",
    skiing: "Ski de fond",
    contactTitle: "Parlons du prochain chapitre.",
    contactText:
      "Je recherche mon prochain poste en CRM, Salesforce ou opérations commerciales — j’aurais plaisir à en discuter.",
    copy: "Copier l’e-mail",
    copied: "E-mail copié",
    copyError: "Copie indisponible",
    top: "Retour en haut",
    demo: {
      title: "Pipeline CRM",
      reset: "Réinitialiser",
      accounts: "Comptes",
      proposals: "Propositions",
      partnerships: "Partenariats",
      choose: "Comptes",
      selected: "Compte sélectionné",
      contact: "Contact",
      next: "Prochaine action",
      pipeline: "Étape du pipeline",
      latest: "Dernière activité",
      move: "Passer à",
      complete: "Partenariat conclu",
      note: "Comptes fictifs · Aucune donnée client réelle · Modifications réinitialisées au rechargement",
      stages: ["Lead", "Qualifié", "Proposition", "Partenariat"],
      actions: [
        "Planifier un appel de découverte",
        "Préparer une proposition adaptée",
        "Relancer la proposition",
        "Planifier le prochain suivi client",
      ],
      activities: [
        "Appel de découverte terminé",
        "Nouvelle demande entrante",
        "Proposition envoyée",
        "Partenariat confirmé",
        "Ajouté au pipeline",
      ],
      moved: "Passé à",
      selectedVerb: "sélectionné",
      resetMessage: "Démo réinitialisée",
    },
  },
  it: {
    title: "Ginelle Doubek — CRM, sviluppo con l’IA & automazione",
    description:
      "Esperienza B2B, competenze pratiche in Salesforce e una nuova direzione nel CRM, nello sviluppo con l’IA e nell’automazione. Ginelle Doubek in Argovia.",
    nav: ["Competenze", "La mia storia", "I miei obiettivi"],
    skip: "Vai al contenuto",
    language: "Lingua della pagina",
    location: "Obersiggenthal, Argovia · Svizzera",
    audience: "Per recruiter & team che assumono",
    headline: "Relazioni con i clienti. Processi chiari. Un nuovo capitolo.",
    intro:
      "Porto la mia esperienza nelle vendite B2B e le mie competenze pratiche in Salesforce verso una nuova carriera incentrata su CRM, sviluppo con l’IA e automazione.",
    availability:
      "Cerco ruoli come CRM Specialist, Salesforce Administrator, Sales Ops o CRM/Business Analyst — ibridi o aperti al lavoro da remoto, Argovia / Zurigo.",
    connect: "Collegati su LinkedIn",
    email: "Scrivimi",
    proofTitle: "L’esperienza che porto con me",
    proof: [
      [
        "10+ anni",
        "Vendite B2B & gestione clienti",
        "Starwood, Sheraton, Nestlé e Unilever. Esperienza nello sviluppo delle relazioni con i clienti e nella gestione degli account.",
      ],
      [
        "3,5 anni",
        "Salesforce ogni giorno",
        "In ClavigerME: account, lead, opportunità e pipeline nella regione MENA.",
      ],
      [
        "2 anni",
        "Coordinamento internazionale",
        "Coordinamento del programma degli abstract per il congresso internazionale EULAR a Zurigo.",
      ],
    ],
    capabilityKicker: "Cosa porto al vostro team",
    capabilityTitle: "Esperienza aziendale e una visione strutturata.",
    capabilities: [
      [
        "CRM & relazioni con i clienti",
        "Esperienza pratica con Salesforce per account, lead, opportunità e pipeline, sostenuta da una carriera nelle vendite B2B.",
      ],
      [
        "Dati & operazioni aziendali",
        "Un insieme di strumenti di analisi: Excel, SQL, Python, Power BI e Tableau, oltre al coordinamento di programmi internazionali.",
      ],
      [
        "Sviluppo con l’IA & automazione",
        "La mia nuova direzione: sviluppare competenze nell’IA e nell’automazione attraverso formazione, prompting e l’AI Builder Program.",
      ],
    ],
    demoKicker: "Un piccolo esempio · Dati fittizi",
    demoTitle: "Dal lead alla partnership.",
    demoIntro:
      "Una mini-pipeline CRM rende concreto il mio interesse per i dati dei clienti e per prossimi passi chiari.",
    storyKicker: "La mia storia",
    storyTitle: "Non parto da zero. Costruisco sulla mia esperienza.",
    story: [
      [
        "Relazioni con i clienti",
        "Il mio percorso comprende vendite B2B e gestione clienti. In ClavigerME ho guidato lo sviluppo commerciale e l’acquisizione, accompagnando nuovi clienti alberghieri dalla ricerca iniziale alla partnership e mantenendo aggiornata la pipeline MENA in Salesforce.",
      ],
      [
        "Coordinamento internazionale",
        "Successivamente ho coordinato il programma degli abstract per il congresso internazionale EULAR a Zurigo, collaborando con ricercatori, comitati e team internazionali.",
      ],
      [
        "Un nuovo capitolo consapevole",
        "Dopo una pausa professionale pianificata, rientro nel mercato del lavoro svizzero con nuove conoscenze in dati, cloud e IA. Voglio collegare la mia esperienza aziendale a una nuova carriera in CRM, sviluppo con l’IA e automazione.",
      ],
    ],
    directionKicker: "Dove voglio arrivare",
    directionTitle: "CRM. Sviluppo con l’IA. Automazione.",
    directionText:
      "Voglio aiutare i team a utilizzare meglio le informazioni sui clienti, creare flussi di lavoro più chiari ed esplorare applicazioni pratiche dell’IA e dell’automazione. Porto la prospettiva aziendale e sviluppo le competenze tecniche per andare oltre.",
    skillsTitle: "I miei strumenti",
    learningTitle: "Formazione & sviluppo",
    learning: [
      "Certificato professionale in Data Analytics — Purdue / Simplilearn",
      "Badge AWS Cloud Practitioner",
      "Bring Women Back to Work, coorte 16 — AI Builder Program",
      "Preparazione alla certificazione Salesforce Certified Administrator (Trailhead)",
    ],
    spoken:
      "Inglese: piena competenza professionale · Tedesco: competenza lavorativa professionale",
    personalKicker: "Una nota personale",
    personalTitle: "Lo sport, dall’infanzia alla Svizzera.",
    personalText:
      "Lo sport ha sempre fatto parte della mia vita. Ho partecipato a competizioni e il tennis mi accompagna dall’infanzia fino a oggi. Dopo il trasferimento in Svizzera, ho imparato lo sci di fondo — e ho imparato ad amarlo.",
    tennis: "Tennis",
    skiing: "Sci di fondo",
    contactTitle: "Parliamo del prossimo capitolo.",
    contactText:
      "Cerco il mio prossimo ruolo in CRM, Salesforce o business operations — mi farebbe piacere parlarne.",
    copy: "Copia e-mail",
    copied: "E-mail copiata",
    copyError: "Copia non disponibile",
    top: "Torna su",
    demo: {
      title: "Pipeline CRM",
      reset: "Reimposta demo",
      accounts: "Account",
      proposals: "Proposte",
      partnerships: "Partnership",
      choose: "Account",
      selected: "Account selezionato",
      contact: "Contatto",
      next: "Prossima azione",
      pipeline: "Fase della pipeline",
      latest: "Ultima attività",
      move: "Passa a",
      complete: "Partnership completata",
      note: "Account fittizi · Nessun dato cliente reale · Le modifiche si azzerano al ricaricamento",
      stages: ["Lead", "Qualificato", "Proposta", "Partnership"],
      actions: [
        "Pianificare una chiamata conoscitiva",
        "Preparare una proposta su misura",
        "Dare seguito alla proposta",
        "Pianificare il prossimo incontro",
      ],
      activities: [
        "Chiamata conoscitiva completata",
        "Nuova richiesta in entrata",
        "Proposta inviata",
        "Partnership confermata",
        "Aggiunto alla pipeline",
      ],
      moved: "Spostato a",
      selectedVerb: "selezionato",
      resetMessage: "Demo reimpostata",
    },
  },
};

// Candidate positioning and project scope come from the supplied personal brand plan.
export const brandCopy = {
  en: {
    nav: ["Expertise", "TindaCo", "My story", "Let’s connect"],
    role: "Corporate Business & CRM · Data Analytics · AI & Automation",
    headline: "Business experience. A technology mindset.",
    intro:
      "I bridge international business and CRM experience with analytical thinking and growing skills in Salesforce, AI, automation and app development.",
    availability:
      "Seeking my next business & technology role in Switzerland · Aargau / Zurich · Open to collaboration",
    purpose: "Making work smarter, simpler, and more meaningful through technology.",
    capabilityTitle: "A business perspective. Practical possibilities.",
    capabilityKicker: "The value I bring",
    capabilities: [
      [
        "Business & CRM",
        "International experience in business development, strategic account management and Salesforce. I understand customers, commercial priorities and the people behind a process.",
      ],
      [
        "Analysis & coordination",
        "I connect customer data, business information and operational challenges with clear next steps. Analytical thinking, organization and cross-functional coordination are at the heart of my approach.",
      ],
      [
        "Technology & improvement",
        "I am developing my skills in AI, automation and application development to simplify workflows and reduce repetitive tasks. Business understanding guides what I choose to build.",
      ],
    ],
    strengths: [
      "Analytical thinking",
      "Organization",
      "Process improvement",
      "Adaptability",
      "Curiosity",
      "Reliability",
      "Collaboration",
    ],
    projectKicker: "Putting learning into practice",
    projectTitle: "TindaCo",
    projectTagline: "Your Business. Beautifully Managed.",
    prototype: "Prototype in development",
    projectIntro:
      "A mobile commerce and business management application I am developing for small businesses, online sellers and entrepreneurs — inspired by my own online jewelry business.",
    projectProblemTitle: "The real-world problem",
    projectProblem:
      "Running a small business means juggling products, pricing, orders, payments and customer relationships. I know firsthand how repetitive administration can take time away from customers and growth.",
    projectApproachTitle: "My approach",
    projectApproach:
      "Bring essential business workflows together in one accessible application, starting with the everyday needs of online and live sellers in the Philippines.",
    projectNowTitle: "Where it stands",
    projectNow:
      "Core business management workflows are being tested. Next, I plan to test it within my jewelry business, gather seller feedback and refine the most useful features.",
    projectFuture:
      "Planned: advanced AI assistance, Facebook Live integration and native in-app livestreaming. These are development goals, not commercially available features.",
    workflowTitle: "Product vision",
    workflow: ["Products & pricing", "Inventory & orders", "Payments & customers"],
    storyTitle: "Reinventing my career. Not my curiosity.",
    storyKicker: "The story behind the skills",
    story: [
      [
        "An international business foundation",
        "My career spans corporate business, business development, customer relationships and cross-functional coordination across industries and international environments. Salesforce and pipeline management became part of my daily work.",
      ],
      [
        "A curiosity that became a direction",
        "I have always enjoyed puzzles, exploring technology and finding smarter ways to do things. Learning data analytics and software development gave that curiosity a new outlet: building practical digital solutions.",
      ],
      [
        "From business challenges to building",
        "Today, I am connecting my corporate experience with CRM, Salesforce, AI and automation. Developing TindaCo lets me apply new skills to challenges I understand as an entrepreneur.",
      ],
    ],
    directionKicker: "My next chapter",
    directionTitle: "Meaningful work. With people who care.",
    directionText:
      "I am looking for a hybrid business and technology role where I can contribute my international experience, keep developing my technical skills and solve real business problems.",
    values: [
      ["People first", "Respect, trust, open communication and psychological safety."],
      ["Room to thrive", "Work-life balance, flexibility and a healthy, supportive workplace."],
      ["Useful innovation", "Meaningful projects, creativity and continuous improvement."],
    ],
    contactTitle: "A new role. A shared idea. A conversation.",
    contactText:
      "I am looking for my next opportunity in Switzerland and welcome collaboration with people working in CRM, data, AI, automation and digital transformation.",
    hiring: "Job opportunities",
    hiringText:
      "Let’s talk about how my business experience and growing technical capabilities could contribute to your team.",
    collaboration: "Possible collaboration",
    collaborationText:
      "I welcome knowledge sharing, practical projects and conversations with business and technology professionals.",
    demoTitle: "Customer information, with a clear next step.",
    demoIntro:
      "A fictional CRM example reflecting my interest in organized customer relationships and practical workflows.",
  },
  de: {
    nav: ["Kompetenzen", "TindaCo", "Mein Weg", "Kontakt"],
    role: "Corporate Business & CRM · Datenanalyse · KI & Automatisierung",
    headline: "Geschäftserfahrung. Technologisches Denken.",
    intro:
      "Ich verbinde internationale Geschäfts- und CRM-Erfahrung mit analytischem Denken und wachsenden Fähigkeiten in Salesforce, KI, Automatisierung und App-Entwicklung.",
    availability:
      "Ich suche meine nächste Aufgabe an der Schnittstelle von Business und Technologie in der Schweiz · Aargau / Zürich · Offen für Zusammenarbeit",
    purpose: "Arbeit mit Technologie intelligenter, einfacher und sinnvoller gestalten.",
    capabilityTitle: "Geschäftsperspektive. Praktische Möglichkeiten.",
    capabilityKicker: "Was ich mitbringe",
    capabilities: [
      [
        "Business & CRM",
        "Internationale Erfahrung in Geschäftsentwicklung, strategischem Account Management und Salesforce. Ich verstehe Kunden, geschäftliche Prioritäten und die Menschen hinter einem Prozess.",
      ],
      [
        "Analyse & Koordination",
        "Ich verbinde Kundendaten, Geschäftsinformationen und operative Herausforderungen mit klaren nächsten Schritten. Analytisches Denken, Organisation und bereichsübergreifende Koordination prägen meinen Ansatz.",
      ],
      [
        "Technologie & Verbesserung",
        "Ich entwickle meine Fähigkeiten in KI, Automatisierung und App-Entwicklung, um Abläufe zu vereinfachen und repetitive Aufgaben zu reduzieren. Mein Geschäftsverständnis leitet, was ich entwickle.",
      ],
    ],
    strengths: [
      "Analytisches Denken",
      "Organisation",
      "Prozessverbesserung",
      "Anpassungsfähigkeit",
      "Neugier",
      "Zuverlässigkeit",
      "Zusammenarbeit",
    ],
    projectKicker: "Lernen in die Praxis umsetzen",
    projectTitle: "TindaCo",
    projectTagline: "Ihr Geschäft. Einfach gut organisiert.",
    prototype: "Prototyp in Entwicklung",
    projectIntro:
      "Eine mobile Commerce- und Geschäftsmanagement-App, die ich für kleine Unternehmen, Online-Verkäufer und Selbstständige entwickle — inspiriert von meinem eigenen Online-Schmuckgeschäft.",
    projectProblemTitle: "Die Herausforderung",
    projectProblem:
      "Ein kleines Geschäft zu führen bedeutet, Produkte, Preise, Bestellungen, Zahlungen und Kundenbeziehungen gleichzeitig zu betreuen. Ich weiß aus eigener Erfahrung, wie viel Zeit repetitive Verwaltung kostet.",
    projectApproachTitle: "Mein Ansatz",
    projectApproach:
      "Wichtige Geschäftsabläufe in einer zugänglichen Anwendung bündeln — ausgehend von den Bedürfnissen von Online- und Live-Verkäufern auf den Philippinen.",
    projectNowTitle: "Der aktuelle Stand",
    projectNow:
      "Zentrale Geschäftsabläufe werden getestet. Als Nächstes möchte ich die App in meinem Schmuckgeschäft erproben, Feedback sammeln und die nützlichsten Funktionen verfeinern.",
    projectFuture:
      "Geplant: erweiterte KI-Unterstützung, Facebook-Live-Integration und In-App-Livestreaming. Dies sind Entwicklungsziele, keine kommerziell verfügbaren Funktionen.",
    workflowTitle: "Produktvision",
    workflow: ["Produkte & Preise", "Lager & Bestellungen", "Zahlungen & Kunden"],
    storyTitle: "Ein neuer Karriereweg. Die gleiche Neugier.",
    storyKicker: "Die Geschichte hinter den Fähigkeiten",
    story: [
      [
        "Eine internationale Grundlage",
        "Meine Laufbahn umfasst Corporate Business, Geschäftsentwicklung, Kundenbeziehungen und bereichsübergreifende Koordination in verschiedenen Branchen und internationalen Umgebungen. Salesforce und Pipeline-Management gehörten zu meinem Alltag.",
      ],
      [
        "Neugier wird zur Richtung",
        "Ich habe schon immer gerne Rätsel gelöst, Technologie erkundet und nach besseren Abläufen gesucht. Datenanalyse und Softwareentwicklung eröffneten mir einen neuen Weg: praktische digitale Lösungen zu entwickeln.",
      ],
      [
        "Von Herausforderungen zum Entwickeln",
        "Heute verbinde ich meine Geschäftserfahrung mit CRM, Salesforce, KI und Automatisierung. Mit TindaCo wende ich neue Fähigkeiten auf Herausforderungen an, die ich als Unternehmerin kenne.",
      ],
    ],
    directionKicker: "Mein nächstes Kapitel",
    directionTitle: "Sinnvolle Arbeit. Mit Menschen, die sich kümmern.",
    directionText:
      "Ich suche eine Aufgabe an der Schnittstelle von Business und Technologie, in der ich meine internationale Erfahrung einbringen, technische Fähigkeiten weiterentwickeln und echte Geschäftsprobleme lösen kann.",
    values: [
      [
        "Menschen im Mittelpunkt",
        "Respekt, Vertrauen, offene Kommunikation und psychologische Sicherheit.",
      ],
      [
        "Raum zur Entfaltung",
        "Work-Life-Balance, Flexibilität und ein gesundes, unterstützendes Arbeitsumfeld.",
      ],
      [
        "Sinnvolle Innovation",
        "Bedeutungsvolle Projekte, Kreativität und kontinuierliche Verbesserung.",
      ],
    ],
    contactTitle: "Eine neue Aufgabe. Eine gemeinsame Idee. Ein Gespräch.",
    contactText:
      "Ich suche meine nächste berufliche Chance in der Schweiz und freue mich über Zusammenarbeit in CRM, Daten, KI, Automatisierung und digitaler Transformation.",
    hiring: "Berufliche Chancen",
    hiringText:
      "Sprechen wir darüber, wie meine Geschäftserfahrung und wachsenden technischen Fähigkeiten Ihr Team unterstützen können.",
    collaboration: "Zusammenarbeit",
    collaborationText:
      "Ich freue mich über Wissensaustausch, praktische Projekte und Gespräche mit Fachleuten aus Business und Technologie.",
    demoTitle: "Kundeninformationen mit einem klaren nächsten Schritt.",
    demoIntro:
      "Ein fiktives CRM-Beispiel für strukturierte Kundenbeziehungen und praktische Abläufe.",
  },
  fr: {
    nav: ["Compétences", "TindaCo", "Mon parcours", "Contact"],
    role: "Business & CRM · Analyse de données · IA & automatisation",
    headline: "L’expérience métier. Un esprit technologique.",
    intro:
      "Je relie mon expérience internationale en business et CRM à une pensée analytique et à des compétences en développement dans Salesforce, l’IA, l’automatisation et la création d’applications.",
    availability:
      "À la recherche de mon prochain poste à la croisée du business et de la technologie en Suisse · Argovie / Zurich · Ouverte aux collaborations",
    purpose:
      "Rendre le travail plus intelligent, plus simple et plus porteur de sens grâce à la technologie.",
    capabilityTitle: "Une perspective métier. Des possibilités concrètes.",
    capabilityKicker: "Ce que j’apporte",
    capabilities: [
      [
        "Business & CRM",
        "Une expérience internationale en développement commercial, gestion stratégique de comptes et Salesforce. Je comprends les clients, les priorités commerciales et les personnes derrière les processus.",
      ],
      [
        "Analyse & coordination",
        "Je relie les données clients, les informations métier et les défis opérationnels à des prochaines étapes claires. Analyse, organisation et coordination transversale sont au cœur de mon approche.",
      ],
      [
        "Technologie & amélioration",
        "Je développe mes compétences en IA, automatisation et création d’applications pour simplifier les processus et réduire les tâches répétitives. Ma compréhension métier guide ce que je construis.",
      ],
    ],
    strengths: [
      "Pensée analytique",
      "Organisation",
      "Amélioration des processus",
      "Adaptabilité",
      "Curiosité",
      "Fiabilité",
      "Collaboration",
    ],
    projectKicker: "Mettre l’apprentissage en pratique",
    projectTitle: "TindaCo",
    projectTagline: "Votre activité. Tout simplement bien gérée.",
    prototype: "Prototype en développement",
    projectIntro:
      "Une application mobile de commerce et de gestion que je développe pour les petites entreprises et les vendeurs en ligne — inspirée de ma propre activité de vente de bijoux.",
    projectProblemTitle: "Le problème concret",
    projectProblem:
      "Gérer une petite activité, c’est jongler entre produits, prix, commandes, paiements et relations clients. Je sais combien les tâches administratives répétitives prennent du temps.",
    projectApproachTitle: "Mon approche",
    projectApproach:
      "Réunir les processus essentiels dans une application accessible, en partant des besoins des vendeurs en ligne et en direct aux Philippines.",
    projectNowTitle: "L’état actuel",
    projectNow:
      "Les principaux processus de gestion sont en cours de test. Je prévois ensuite de tester l’application dans mon activité de bijoux, recueillir des retours et affiner les fonctions les plus utiles.",
    projectFuture:
      "Prévus : assistance IA avancée, intégration Facebook Live et diffusion en direct dans l’application. Ce sont des objectifs de développement, pas des fonctions commercialisées.",
    workflowTitle: "Vision du produit",
    workflow: ["Produits & prix", "Stocks & commandes", "Paiements & clients"],
    storyTitle: "Réinventer ma carrière. Garder ma curiosité.",
    storyKicker: "Le parcours derrière les compétences",
    story: [
      [
        "Une base internationale",
        "Mon parcours couvre le business, le développement commercial, les relations clients et la coordination transversale dans différents secteurs et environnements internationaux. Salesforce et la gestion du pipeline faisaient partie de mon quotidien.",
      ],
      [
        "Une curiosité devenue une direction",
        "J’ai toujours aimé résoudre des énigmes, explorer la technologie et trouver de meilleures façons de travailler. L’analyse de données et le développement logiciel m’ont ouvert une nouvelle voie : créer des solutions numériques concrètes.",
      ],
      [
        "Des défis métier à la création",
        "Aujourd’hui, je relie mon expérience métier au CRM, à Salesforce, à l’IA et à l’automatisation. TindaCo me permet d’appliquer mes nouvelles compétences à des défis que je connais en tant qu’entrepreneuse.",
      ],
    ],
    directionKicker: "Mon prochain chapitre",
    directionTitle: "Un travail utile. Des personnes bienveillantes.",
    directionText:
      "Je recherche un poste à la croisée du business et de la technologie pour apporter mon expérience internationale, développer mes compétences techniques et résoudre de vrais problèmes.",
    values: [
      ["L’humain d’abord", "Respect, confiance, communication ouverte et sécurité psychologique."],
      [
        "Un cadre pour s’épanouir",
        "Équilibre de vie, flexibilité et environnement sain et solidaire.",
      ],
      ["Une innovation utile", "Projets porteurs de sens, créativité et amélioration continue."],
    ],
    contactTitle: "Un nouveau poste. Une idée commune. Une conversation.",
    contactText:
      "Je recherche ma prochaine opportunité en Suisse et suis ouverte aux collaborations en CRM, données, IA, automatisation et transformation numérique.",
    hiring: "Opportunités professionnelles",
    hiringText:
      "Parlons de ce que mon expérience métier et mes compétences techniques en développement peuvent apporter à votre équipe.",
    collaboration: "Collaborations possibles",
    collaborationText:
      "Je suis ouverte au partage de connaissances, aux projets concrets et aux échanges avec des professionnels du business et de la technologie.",
    demoTitle: "Des informations clients et une prochaine étape claire.",
    demoIntro:
      "Un exemple CRM fictif qui reflète mon intérêt pour des relations clients structurées et des processus concrets.",
  },
  it: {
    nav: ["Competenze", "TindaCo", "La mia storia", "Contatti"],
    role: "Business & CRM · Analisi dei dati · IA & automazione",
    headline: "Esperienza aziendale. Mentalità tecnologica.",
    intro:
      "Collego la mia esperienza internazionale nel business e nel CRM al pensiero analitico e a competenze in crescita in Salesforce, IA, automazione e sviluppo di applicazioni.",
    availability:
      "Cerco il mio prossimo ruolo tra business e tecnologia in Svizzera · Argovia / Zurigo · Aperta a collaborazioni",
    purpose:
      "Rendere il lavoro più intelligente, semplice e significativo attraverso la tecnologia.",
    capabilityTitle: "Una prospettiva aziendale. Possibilità concrete.",
    capabilityKicker: "Il valore che porto",
    capabilities: [
      [
        "Business & CRM",
        "Esperienza internazionale nello sviluppo commerciale, nella gestione strategica dei clienti e in Salesforce. Comprendo i clienti, le priorità commerciali e le persone dietro ai processi.",
      ],
      [
        "Analisi & coordinamento",
        "Collego dati dei clienti, informazioni aziendali e sfide operative a prossimi passi chiari. Pensiero analitico, organizzazione e coordinamento interfunzionale sono al centro del mio approccio.",
      ],
      [
        "Tecnologia & miglioramento",
        "Sviluppo competenze in IA, automazione e creazione di applicazioni per semplificare i flussi e ridurre le attività ripetitive. La comprensione del business guida ciò che costruisco.",
      ],
    ],
    strengths: [
      "Pensiero analitico",
      "Organizzazione",
      "Miglioramento dei processi",
      "Adattabilità",
      "Curiosità",
      "Affidabilità",
      "Collaborazione",
    ],
    projectKicker: "Mettere in pratica ciò che imparo",
    projectTitle: "TindaCo",
    projectTagline: "Il tuo business. Gestito al meglio.",
    prototype: "Prototipo in sviluppo",
    projectIntro:
      "Un’applicazione mobile per il commercio e la gestione aziendale che sviluppo per piccole imprese e venditori online — ispirata alla mia attività di vendita di gioielli.",
    projectProblemTitle: "Il problema concreto",
    projectProblem:
      "Gestire una piccola attività significa occuparsi di prodotti, prezzi, ordini, pagamenti e clienti. So quanto tempo richiedono le attività amministrative ripetitive.",
    projectApproachTitle: "Il mio approccio",
    projectApproach:
      "Riunire i flussi essenziali in un’applicazione accessibile, partendo dalle esigenze dei venditori online e in diretta nelle Filippine.",
    projectNowTitle: "Lo stato attuale",
    projectNow:
      "I principali flussi di gestione sono in fase di test. Intendo poi provare l’app nella mia attività di gioielli, raccogliere feedback e perfezionare le funzioni più utili.",
    projectFuture:
      "Previsti: assistenza IA avanzata, integrazione Facebook Live e dirette nell’app. Sono obiettivi di sviluppo, non funzioni disponibili sul mercato.",
    workflowTitle: "Visione del prodotto",
    workflow: ["Prodotti & prezzi", "Scorte & ordini", "Pagamenti & clienti"],
    storyTitle: "Reinventare la carriera. Mantenere la curiosità.",
    storyKicker: "La storia dietro le competenze",
    story: [
      [
        "Una base internazionale",
        "Il mio percorso comprende business, sviluppo commerciale, relazioni con i clienti e coordinamento interfunzionale in diversi settori e contesti internazionali. Salesforce e la gestione della pipeline facevano parte del mio lavoro quotidiano.",
      ],
      [
        "La curiosità diventa una direzione",
        "Ho sempre amato risolvere enigmi, esplorare la tecnologia e trovare modi migliori di lavorare. L’analisi dei dati e lo sviluppo software mi hanno aperto una nuova strada: creare soluzioni digitali concrete.",
      ],
      [
        "Dalle sfide aziendali alla creazione",
        "Oggi collego la mia esperienza aziendale a CRM, Salesforce, IA e automazione. TindaCo mi permette di applicare nuove competenze a sfide che conosco come imprenditrice.",
      ],
    ],
    directionKicker: "Il mio prossimo capitolo",
    directionTitle: "Lavoro significativo. Persone che hanno cura.",
    directionText:
      "Cerco un ruolo tra business e tecnologia dove contribuire con la mia esperienza internazionale, sviluppare le competenze tecniche e risolvere problemi reali.",
    values: [
      [
        "Le persone prima di tutto",
        "Rispetto, fiducia, comunicazione aperta e sicurezza psicologica.",
      ],
      [
        "Spazio per crescere",
        "Equilibrio vita-lavoro, flessibilità e un ambiente sano e solidale.",
      ],
      ["Innovazione utile", "Progetti significativi, creatività e miglioramento continuo."],
    ],
    contactTitle: "Un nuovo ruolo. Un’idea condivisa. Una conversazione.",
    contactText:
      "Cerco la mia prossima opportunità in Svizzera e accolgo collaborazioni in CRM, dati, IA, automazione e trasformazione digitale.",
    hiring: "Opportunità professionali",
    hiringText:
      "Parliamo di come la mia esperienza aziendale e le competenze tecniche in crescita possano contribuire al vostro team.",
    collaboration: "Possibili collaborazioni",
    collaborationText:
      "Accolgo scambi di conoscenze, progetti concreti e conversazioni con professionisti del business e della tecnologia.",
    demoTitle: "Informazioni sui clienti e un prossimo passo chiaro.",
    demoIntro:
      "Un esempio CRM fittizio che riflette il mio interesse per relazioni con i clienti organizzate e flussi pratici.",
  },
};

// Verified content retained from Ginelle's existing website, reorganized for the new brand.
const existingSiteCopy = {
  en: {
    nav: ["Expertise", "Projects", "Résumé", "Certifications", "Contact"],
    nickname: "Also known as Ginny",
    backgroundText:
      "A creative web developer with a diverse background in research, sales and international business, I bring a unique perspective to user-friendly web solutions. I completed a Full Stack Web Development Bootcamp with SheCodes and gained experience in React, Bootstrap and responsive design. My journey began in agricultural economics, evolved through roles at Unilever, Procter & Gamble and Nestlé, and led to a Master’s in Business Management. I am eager to contribute my business and technical experience to impactful technology projects.",
    mantra: "When the going gets tough, the tough get going.",
    resumeKicker: "Experience & education",
    resumeTitle: "The path behind my perspective.",
    resumeIntro:
      "International business experience, continuous learning and a foundation in both management and technology.",
    downloadCv: "Download CV",
    experienceTab: "Experience",
    educationTab: "Education",
    experience: [
      [
        "2021 — 2023",
        "Congress Coordinator",
        "EULAR · Zurich, Switzerland",
        "Managed and consolidated submitted abstracts for the annual EULAR Congress and coordinated their evaluation with Abstract Chairs and reviewers. Set up the M-anage submission system, created and coordinated sessions, liaised with authors and submitters, and supported the wider congress programme.",
      ],
      [
        "2018 — 2021",
        "Business Development & Acquisition Manager",
        "Claviger Middle East · Dubai & Switzerland",
        "Prospected and acquired new hotels for representation in the Middle East and managed sales activities for new accounts. Coordinated business development and revenue activities with the CEO, analyzed data for stakeholder presentations, and attended international travel trade exhibitions, roadshows and workshops.",
      ],
      [
        "2012 — 2018",
        "Global Sales Manager",
        "Starwood International · Dubai, UAE",
        "Drove key sales activities for Starwood programmes in the UAE and Greece, including client appointments, promotions, familiarization trips and hotel sales trips. Managed team sales production, analysis and presentations, improved account database and activity tracking, and coordinated relationships between clients and hotels.",
      ],
      [
        "2014 — 2016",
        "Regional Sales Controller",
        "Nestlé · Manila, Philippines",
        "Monitored regional trade spend, expenses, assets and funds. Trained and coached Sales Managers on selling and trading techniques, conducted trade checks and audits to verify account claims, and implemented measures to improve accounts receivable and market returns.",
      ],
    ],
    education: [
      [
        "2024 — current",
        "Web Development Bootcamp",
        "SheCodes",
        "Coding workshops covering HTML, CSS, JavaScript, responsive development and practical project work, with a mission to help women pursue careers in technology.",
      ],
      [
        "2022 — 2023",
        "Professional Certificate Program in Data Analytics",
        "Simplilearn · Purdue University",
        "Statistics and data analytics with hands-on exposure to Python and R, SQL databases, Tableau and Power BI. The programme included blended learning and an industry-aligned capstone project.",
      ],
      [
        "2009 — 2011",
        "Master in Business Management",
        "University of the Philippines Los Baños",
        "Master of Management major in Business Management, focused on developing success-oriented and socially responsible managers and entrepreneurs.",
      ],
      [
        "1999 — 2003",
        "Bachelor’s in Agricultural Economics",
        "University of the Philippines Los Baños",
        "Major in Marketing and Price Analysis, covering agricultural commodity movement, prices, logistics, value addition and costs across agricultural and food supply chains.",
      ],
    ],
    projectsKicker: "Learning through building",
    projectsTitle: "Applications, experiments and a puzzle.",
    projectsIntro:
      "A selection of working projects from my web development, data and AI learning journey.",
    projectTech: "Tools & technologies",
    projectLaunch: "Launch project",
    otherProjectsTitle: "More learning projects",
    projects: [
      [
        "World Clock app",
        "A dynamic world clock providing the current time and date for a selected city, with minutes and seconds updating in real time.",
        "HTML · CSS · JavaScript · Moment.js · Axios · VSCode",
      ],
      [
        "Weather app",
        "My first coding project: a user-friendly weather application with real-time conditions for cities worldwide, including temperature, humidity, current day and time.",
        "HTML · CSS · JavaScript · Axios · SheCodes Weather API · VSCode",
      ],
      [
        "Weather Forecast app",
        "An advanced forecasting application with current conditions, sunrise and sunset times, and a five-day forecast for a searched city.",
        "HTML · CSS · JavaScript · Axios · SheCodes Weather API · VSCode",
      ],
      [
        "Recipe AI app",
        "An AI-driven recipe generator that suggests recipes from entered ingredients or recipe searches and provides easy-to-follow cooking instructions.",
        "HTML · CSS · JavaScript · Axios · SheCodes AI API · VSCode",
      ],
      [
        "Travel Website",
        "A Prague travel website created to practise CSS styling across a complete HTML page, including a hero, footer, cards, grids, embeds, filters and tables.",
        "HTML · CSS · JavaScript · Grids · Embeds · Cards · VSCode",
      ],
      [
        "Puzzle Peg Cross",
        "A puzzle game I developed and published as a playable web project.",
        "Web game development",
      ],
    ],
    certificationKicker: "Verified learning",
    certificationTitle: "Certifications and completed programmes.",
    certificationIntro:
      "Open a certificate to view its original credential on Simplilearn or SheCodes.",
    credentialLink: "View credential",
    languagesTitle: "Languages",
    languageList: [
      ["C1", "English"],
      ["B2", "German"],
      ["Dialect", "Filipino"],
    ],
    hobbiesTitle: "More of what I enjoy",
    hobbies: [
      "Tennis",
      "Running & races",
      "Cycling",
      "Winter sports",
      "Fitness",
      "Yoga",
      "Travel",
      "Painting",
      "Cooking & baking",
    ],
    profilesTitle: "More of my work",
    sourceCode: "Original open-source portfolio",
  },
  de: {
    nav: ["Kompetenzen", "Projekte", "Lebenslauf", "Zertifikate", "Kontakt"],
    nickname: "Auch bekannt als Ginny",
    backgroundText:
      "Als kreative Webentwicklerin mit unterschiedlichen Erfahrungen in Forschung, Vertrieb und internationalem Business bringe ich eine besondere Perspektive auf benutzerfreundliche Weblösungen mit. Ich habe einen Full-Stack-Webdevelopment-Bootcamp bei SheCodes abgeschlossen und Erfahrung mit React, Bootstrap und responsivem Design gesammelt. Mein Weg begann mit Agrarökonomie, führte über Positionen bei Unilever, Procter & Gamble und Nestlé zu einem Master in Business Management. Ich möchte meine Geschäfts- und Technologieerfahrung in wirkungsvolle Projekte einbringen.",
    mantra: "Wenn es schwierig wird, fangen die Starken erst richtig an.",
    resumeKicker: "Erfahrung & Ausbildung",
    resumeTitle: "Der Weg hinter meiner Perspektive.",
    resumeIntro:
      "Internationale Geschäftserfahrung, kontinuierliches Lernen und eine Grundlage in Management und Technologie.",
    downloadCv: "CV herunterladen",
    experienceTab: "Berufserfahrung",
    educationTab: "Ausbildung",
    experience: [
      [
        "2021 — 2023",
        "Kongresskoordinatorin",
        "EULAR · Zürich, Schweiz",
        "Verwaltung und Konsolidierung eingereichter Abstracts für den jährlichen EULAR-Kongress sowie Koordination ihrer Bewertung mit Abstract Chairs und Reviewern. Einrichtung des M-anage-Einreichungssystems, Erstellung und Koordination von Sitzungen, Kommunikation mit Autoren und Unterstützung des Kongressprogramms.",
      ],
      [
        "2018 — 2021",
        "Business Development & Acquisition Manager",
        "Claviger Middle East · Dubai & Schweiz",
        "Akquisition neuer Hotels für die Vertretung im Nahen Osten und Verantwortung für Vertriebsaktivitäten zur Kundengewinnung und -entwicklung. Zusammenarbeit mit dem CEO an Geschäftsentwicklung und Erlösmodellen, Datenanalyse für Stakeholder-Präsentationen sowie Teilnahme an internationalen Fachmessen, Roadshows und Workshops.",
      ],
      [
        "2012 — 2018",
        "Global Sales Manager",
        "Starwood International · Dubai, VAE",
        "Verantwortung für zentrale Vertriebsaktivitäten der Starwood-Programme in den VAE und Griechenland, einschließlich Kundenterminen, Promotionen, Familiarization Trips und Hotelverkaufsreisen. Steuerung der Teamleistung, Analysen und Präsentationen, Verbesserung der Kundendatenbank und Aktivitätenübersicht sowie Koordination der Beziehungen zwischen Kunden und Hotels.",
      ],
      [
        "2014 — 2016",
        "Regional Sales Controller",
        "Nestlé · Manila, Philippinen",
        "Überwachung regionaler Handelsausgaben, Kosten, Vermögenswerte und Gelder. Schulung und Coaching von Sales Managern in Verkaufs- und Handelstechniken, Handelskontrollen und Audits zur Prüfung von Kundenforderungen sowie Maßnahmen zur Verbesserung von Forderungen und Marktretouren.",
      ],
    ],
    education: [
      [
        "2024 — heute",
        "Webentwicklungs-Bootcamp",
        "SheCodes",
        "Coding-Workshops zu HTML, CSS, JavaScript, responsivem Development und praktischen Projekten, mit dem Ziel, mehr Frauen für technologische Berufe zu befähigen.",
      ],
      [
        "2022 — 2023",
        "Professional Certificate Program in Data Analytics",
        "Simplilearn · Purdue University",
        "Statistik und Datenanalyse mit praktischer Anwendung von Python und R, SQL-Datenbanken, Tableau und Power BI. Das Programm umfasste Blended Learning und ein praxisnahes Capstone-Projekt.",
      ],
      [
        "2009 — 2011",
        "Master in Business Management",
        "University of the Philippines Los Baños",
        "Master of Management mit Schwerpunkt Business Management zur Entwicklung erfolgsorientierter und sozial verantwortlicher Manager und Unternehmer.",
      ],
      [
        "1999 — 2003",
        "Bachelor in Agrarökonomie",
        "University of the Philippines Los Baños",
        "Schwerpunkt Marketing und Preisanalyse mit den Themen Warenströme, Preise, Logistik, Wertschöpfung und Kosten in landwirtschaftlichen und Lebensmittel-Lieferketten.",
      ],
    ],
    projectsKicker: "Lernen durch Umsetzen",
    projectsTitle: "Anwendungen, Experimente und ein Puzzle.",
    projectsIntro:
      "Eine Auswahl funktionierender Projekte aus meinem Lernweg in Webentwicklung, Daten und KI.",
    projectTech: "Tools & Technologien",
    projectLaunch: "Projekt öffnen",
    otherProjectsTitle: "Weitere Lernprojekte",
    projects: [
      [
        "World Clock App",
        "Eine dynamische Weltuhr mit aktuellem Datum und Uhrzeit für eine ausgewählte Stadt; Minuten und Sekunden werden in Echtzeit aktualisiert.",
        "HTML · CSS · JavaScript · Moment.js · Axios · VSCode",
      ],
      [
        "Wetter-App",
        "Mein erstes Coding-Projekt: eine benutzerfreundliche Wetteranwendung mit aktuellen Bedingungen für Städte weltweit, einschließlich Temperatur, Luftfeuchtigkeit, Datum und Uhrzeit.",
        "HTML · CSS · JavaScript · Axios · SheCodes Weather API · VSCode",
      ],
      [
        "Wettervorhersage-App",
        "Eine erweiterte Vorhersageanwendung mit aktuellen Bedingungen, Sonnenaufgang und Sonnenuntergang sowie einer Fünf-Tage-Prognose für eine gesuchte Stadt.",
        "HTML · CSS · JavaScript · Axios · SheCodes Weather API · VSCode",
      ],
      [
        "Rezept-KI-App",
        "Ein KI-gestützter Rezeptgenerator, der passende Rezepte anhand eingegebener Zutaten oder Suchbegriffe vorschlägt und leicht verständliche Kochanleitungen liefert.",
        "HTML · CSS · JavaScript · Axios · SheCodes AI API · VSCode",
      ],
      [
        "Reise-Website",
        "Eine Website über Prag zur praktischen Anwendung von CSS für eine vollständige HTML-Seite mit Hero, Footer, Cards, Grids, Embeds, Filtern und Tabellen.",
        "HTML · CSS · JavaScript · Grids · Embeds · Cards · VSCode",
      ],
      [
        "Puzzle Peg Cross",
        "Ein Puzzlespiel, das ich entwickelt und als spielbares Webprojekt veröffentlicht habe.",
        "Web-Game-Development",
      ],
    ],
    certificationKicker: "Nachgewiesenes Lernen",
    certificationTitle: "Zertifikate und abgeschlossene Programme.",
    certificationIntro:
      "Öffnen Sie ein Zertifikat, um den originalen Nachweis bei Simplilearn oder SheCodes anzusehen.",
    credentialLink: "Nachweis ansehen",
    languagesTitle: "Sprachen",
    languageList: [
      ["C1", "Englisch"],
      ["B2", "Deutsch"],
      ["Dialekt", "Filipino"],
    ],
    hobbiesTitle: "Was mir außerdem Freude macht",
    hobbies: [
      "Tennis",
      "Laufen & Wettkämpfe",
      "Radfahren",
      "Wintersport",
      "Fitness",
      "Yoga",
      "Reisen",
      "Malen",
      "Kochen & Backen",
    ],
    profilesTitle: "Mehr von meiner Arbeit",
    sourceCode: "Originalportfolio auf GitHub",
  },
  fr: {
    nav: ["Compétences", "Projets", "Parcours", "Certifications", "Contact"],
    nickname: "Également connue sous le nom de Ginny",
    backgroundText:
      "Développeuse web créative avec un parcours varié dans la recherche, la vente et le commerce international, j’apporte une perspective unique aux solutions web conviviales. J’ai terminé un bootcamp Full Stack Web Development chez SheCodes et acquis de l’expérience avec React, Bootstrap et le responsive design. Mon parcours a commencé en économie agricole, est passé par des postes chez Unilever, Procter & Gamble et Nestlé, puis par un Master en gestion d’entreprise. Je souhaite mettre mon expérience métier et technique au service de projets technologiques utiles.",
    mantra: "Quand les choses se compliquent, les plus déterminés passent à l’action.",
    resumeKicker: "Expérience & formation",
    resumeTitle: "Le parcours derrière ma perspective.",
    resumeIntro:
      "Une expérience internationale, un apprentissage continu et des bases solides en gestion comme en technologie.",
    downloadCv: "Télécharger le CV",
    experienceTab: "Expérience",
    educationTab: "Formation",
    experience: [
      [
        "2021 — 2023",
        "Coordinatrice de congrès",
        "EULAR · Zurich, Suisse",
        "Gestion et consolidation des résumés soumis au congrès annuel de l’EULAR et coordination de leur évaluation avec les présidents et relecteurs. Configuration du système de soumission M-anage, création et coordination des sessions, liaison avec les auteurs et soutien au programme général du congrès.",
      ],
      [
        "2018 — 2021",
        "Responsable développement commercial & acquisition",
        "Claviger Middle East · Dubaï & Suisse",
        "Prospection et acquisition de nouveaux hôtels à représenter au Moyen-Orient et gestion des activités commerciales pour les nouveaux comptes. Coordination avec le CEO des activités de développement et de revenus, analyse de données pour les présentations et participation à des salons internationaux, roadshows et ateliers.",
      ],
      [
        "2012 — 2018",
        "Responsable commerciale internationale",
        "Starwood International · Dubaï, EAU",
        "Pilotage des principales activités commerciales des programmes Starwood aux EAU et en Grèce : rendez-vous clients, promotions, voyages de découverte et déplacements commerciaux. Gestion de la production commerciale, des analyses et présentations, amélioration du suivi des comptes et coordination des relations entre clients et hôtels.",
      ],
      [
        "2014 — 2016",
        "Contrôleuse commerciale régionale",
        "Nestlé · Manille, Philippines",
        "Suivi des dépenses commerciales régionales, frais, actifs et fonds. Formation et accompagnement des responsables commerciaux, contrôles et audits des comptes, et mise en place de mesures pour améliorer les créances clients et les retours du marché.",
      ],
    ],
    education: [
      [
        "2024 — aujourd’hui",
        "Bootcamp de développement web",
        "SheCodes",
        "Ateliers de programmation sur HTML, CSS, JavaScript, le responsive development et des projets pratiques, avec pour mission d’aider les femmes à accéder aux métiers de la technologie.",
      ],
      [
        "2022 — 2023",
        "Professional Certificate Program in Data Analytics",
        "Simplilearn · Purdue University",
        "Statistiques et analyse de données avec pratique de Python et R, bases SQL, Tableau et Power BI. Le programme comprenait un apprentissage mixte et un projet Capstone aligné sur les besoins du secteur.",
      ],
      [
        "2009 — 2011",
        "Master en gestion d’entreprise",
        "University of the Philippines Los Baños",
        "Master of Management spécialisé en gestion d’entreprise, axé sur le développement de managers et d’entrepreneurs performants et socialement responsables.",
      ],
      [
        "1999 — 2003",
        "Licence en économie agricole",
        "University of the Philippines Los Baños",
        "Spécialisation en marketing et analyse des prix : circulation des produits agricoles, prix, logistique, création de valeur et coûts dans les chaînes d’approvisionnement alimentaires et agricoles.",
      ],
    ],
    projectsKicker: "Apprendre en construisant",
    projectsTitle: "Applications, expériences et un puzzle.",
    projectsIntro:
      "Une sélection de projets fonctionnels issus de mon apprentissage du développement web, des données et de l’IA.",
    projectTech: "Outils & technologies",
    projectLaunch: "Ouvrir le projet",
    otherProjectsTitle: "Autres projets d’apprentissage",
    projects: [
      [
        "World Clock app",
        "Une horloge mondiale dynamique affichant la date et l’heure actuelles d’une ville sélectionnée, avec mise à jour des minutes et secondes en temps réel.",
        "HTML · CSS · JavaScript · Moment.js · Axios · VSCode",
      ],
      [
        "Weather app",
        "Mon premier projet de programmation : une application météo conviviale avec les conditions en temps réel de villes du monde entier, dont température, humidité, jour et heure.",
        "HTML · CSS · JavaScript · Axios · SheCodes Weather API · VSCode",
      ],
      [
        "Weather Forecast app",
        "Une application de prévisions avancées avec conditions actuelles, heures du lever et coucher du soleil et prévisions sur cinq jours pour la ville recherchée.",
        "HTML · CSS · JavaScript · Axios · SheCodes Weather API · VSCode",
      ],
      [
        "Recipe AI app",
        "Un générateur de recettes piloté par l’IA qui propose des idées à partir d’ingrédients ou de recherches et fournit des instructions de cuisine faciles à suivre.",
        "HTML · CSS · JavaScript · Axios · SheCodes AI API · VSCode",
      ],
      [
        "Site de voyage",
        "Un site sur Prague créé pour pratiquer le CSS sur une page HTML complète : hero, footer, cartes, grilles, contenus intégrés, filtres et tableaux.",
        "HTML · CSS · JavaScript · Grilles · Contenus intégrés · Cartes · VSCode",
      ],
      [
        "Puzzle Peg Cross",
        "Un jeu de puzzle que j’ai développé et publié comme projet web jouable.",
        "Développement de jeux web",
      ],
    ],
    certificationKicker: "Apprentissages vérifiés",
    certificationTitle: "Certifications et programmes terminés.",
    certificationIntro:
      "Ouvrez un certificat pour consulter le justificatif original sur Simplilearn ou SheCodes.",
    credentialLink: "Voir le justificatif",
    languagesTitle: "Langues",
    languageList: [
      ["C1", "Anglais"],
      ["B2", "Allemand"],
      ["Dialecte", "Filipino"],
    ],
    hobbiesTitle: "Mes autres centres d’intérêt",
    hobbies: [
      "Tennis",
      "Course à pied & compétitions",
      "Cyclisme",
      "Sports d’hiver",
      "Fitness",
      "Yoga",
      "Voyage",
      "Peinture",
      "Cuisine & pâtisserie",
    ],
    profilesTitle: "Découvrir plus de mon travail",
    sourceCode: "Portfolio original open source",
  },
  it: {
    nav: ["Competenze", "Progetti", "Percorso", "Certificazioni", "Contatti"],
    nickname: "Conosciuta anche come Ginny",
    backgroundText:
      "Sviluppatrice web creativa con un percorso diversificato nella ricerca, nelle vendite e nel business internazionale, porto una prospettiva unica nelle soluzioni web intuitive. Ho completato un bootcamp Full Stack Web Development con SheCodes e maturato esperienza con React, Bootstrap e responsive design. Il mio percorso è iniziato con l’economia agraria, è proseguito con ruoli in Unilever, Procter & Gamble e Nestlé e mi ha portato a un Master in Business Management. Voglio mettere la mia esperienza aziendale e tecnica al servizio di progetti tecnologici concreti.",
    mantra: "Quando il gioco si fa duro, i duri cominciano a giocare.",
    resumeKicker: "Esperienza & formazione",
    resumeTitle: "Il percorso dietro la mia prospettiva.",
    resumeIntro:
      "Esperienza internazionale, apprendimento continuo e solide basi in management e tecnologia.",
    downloadCv: "Scarica il CV",
    experienceTab: "Esperienza",
    educationTab: "Formazione",
    experience: [
      [
        "2021 — 2023",
        "Coordinatrice congressuale",
        "EULAR · Zurigo, Svizzera",
        "Gestione e consolidamento degli abstract presentati per il congresso annuale EULAR e coordinamento della loro valutazione con chair e revisori. Configurazione del sistema M-anage, creazione e coordinamento delle sessioni, contatto con autori e supporto al programma generale del congresso.",
      ],
      [
        "2018 — 2021",
        "Business Development & Acquisition Manager",
        "Claviger Middle East · Dubai & Svizzera",
        "Ricerca e acquisizione di nuovi hotel da rappresentare in Medio Oriente e gestione delle attività commerciali per i nuovi account. Coordinamento con il CEO di sviluppo commerciale e fonti di ricavo, analisi dei dati per le presentazioni e partecipazione a fiere internazionali, roadshow e workshop.",
      ],
      [
        "2012 — 2018",
        "Global Sales Manager",
        "Starwood International · Dubai, EAU",
        "Gestione delle principali attività commerciali dei programmi Starwood negli EAU e in Grecia: appuntamenti con clienti, promozioni, familiarization trip e visite commerciali. Gestione dei risultati del team, analisi e presentazioni, miglioramento del monitoraggio degli account e coordinamento delle relazioni tra clienti e hotel.",
      ],
      [
        "2014 — 2016",
        "Regional Sales Controller",
        "Nestlé · Manila, Filippine",
        "Monitoraggio di spese commerciali regionali, costi, asset e fondi. Formazione e coaching dei Sales Manager, controlli e audit per verificare le richieste degli account e misure per migliorare crediti commerciali e resi dal mercato.",
      ],
    ],
    education: [
      [
        "2024 — oggi",
        "Bootcamp di sviluppo web",
        "SheCodes",
        "Workshop di programmazione su HTML, CSS, JavaScript, sviluppo responsive e progetti pratici, con la missione di aiutare le donne a intraprendere carriere tecnologiche.",
      ],
      [
        "2022 — 2023",
        "Professional Certificate Program in Data Analytics",
        "Simplilearn · Purdue University",
        "Statistica e analisi dei dati con esperienza pratica in Python e R, database SQL, Tableau e Power BI. Il programma comprendeva blended learning e un progetto Capstone orientato alle esigenze del settore.",
      ],
      [
        "2009 — 2011",
        "Master in Business Management",
        "University of the Philippines Los Baños",
        "Master of Management con specializzazione in Business Management, orientato a formare manager e imprenditori efficaci e socialmente responsabili.",
      ],
      [
        "1999 — 2003",
        "Laurea in Economia Agraria",
        "University of the Philippines Los Baños",
        "Specializzazione in Marketing e Analisi dei Prezzi: movimento dei prodotti agricoli, prezzi, logistica, creazione di valore e costi nelle filiere agroalimentari.",
      ],
    ],
    projectsKicker: "Imparare costruendo",
    projectsTitle: "Applicazioni, esperimenti e un puzzle.",
    projectsIntro:
      "Una selezione di progetti funzionanti dal mio percorso di apprendimento in sviluppo web, dati e IA.",
    projectTech: "Strumenti & tecnologie",
    projectLaunch: "Apri il progetto",
    otherProjectsTitle: "Altri progetti di apprendimento",
    projects: [
      [
        "World Clock app",
        "Un orologio mondiale dinamico con data e ora correnti per una città selezionata, con minuti e secondi aggiornati in tempo reale.",
        "HTML · CSS · JavaScript · Moment.js · Axios · VSCode",
      ],
      [
        "Weather app",
        "Il mio primo progetto di programmazione: un’app meteo intuitiva con condizioni in tempo reale per città di tutto il mondo, tra cui temperatura, umidità, giorno e ora.",
        "HTML · CSS · JavaScript · Axios · SheCodes Weather API · VSCode",
      ],
      [
        "Weather Forecast app",
        "Un’app di previsioni avanzate con condizioni attuali, orari di alba e tramonto e previsioni a cinque giorni per la città cercata.",
        "HTML · CSS · JavaScript · Axios · SheCodes Weather API · VSCode",
      ],
      [
        "Recipe AI app",
        "Un generatore di ricette basato sull’IA che propone idee a partire dagli ingredienti o dalle ricerche e offre istruzioni di cucina facili da seguire.",
        "HTML · CSS · JavaScript · Axios · SheCodes AI API · VSCode",
      ],
      [
        "Sito di viaggi",
        "Un sito su Praga creato per esercitarmi con CSS su una pagina HTML completa: hero, footer, card, griglie, contenuti incorporati, filtri e tabelle.",
        "HTML · CSS · JavaScript · Griglie · Contenuti incorporati · Card · VSCode",
      ],
      [
        "Puzzle Peg Cross",
        "Un puzzle game che ho sviluppato e pubblicato come progetto web giocabile.",
        "Sviluppo di giochi web",
      ],
    ],
    certificationKicker: "Apprendimento verificato",
    certificationTitle: "Certificazioni e programmi completati.",
    certificationIntro:
      "Apri un certificato per vedere l’attestazione originale su Simplilearn o SheCodes.",
    credentialLink: "Vedi attestazione",
    languagesTitle: "Lingue",
    languageList: [
      ["C1", "Inglese"],
      ["B2", "Tedesco"],
      ["Dialetto", "Filipino"],
    ],
    hobbiesTitle: "Altre cose che mi piacciono",
    hobbies: [
      "Tennis",
      "Corsa & gare",
      "Ciclismo",
      "Sport invernali",
      "Fitness",
      "Yoga",
      "Viaggi",
      "Pittura",
      "Cucina & dolci",
    ],
    profilesTitle: "Altri miei lavori",
    sourceCode: "Portfolio originale open source",
  },
} as const;

export const portfolioCopy = Object.fromEntries(
  (Object.keys(languages) as Language[]).map((lang) => [
    lang,
    {
      ...previousCopy[lang],
      ...brandCopy[lang],
      ...existingSiteCopy[lang],
      title: `Ginelle Doubek — ${brandCopy[lang].role}`,
      description: brandCopy[lang].intro,
    },
  ]),
) as {
  [L in Language]: (typeof previousCopy)[L] & (typeof brandCopy)[L] & (typeof existingSiteCopy)[L];
};

export type GinnyCopy = {
  kicker: string;
  title: string;
  intro: string;
  privacy: string;
  cloudSaved: string;
  signInTitle: string;
  signInText: string;
  email: string;
  password: string;
  passwordHint: string;
  signIn: string;
  signUp: string;
  createAccount: string;
  haveAccount: string;
  needAccount: string;
  forgotPassword: string;
  resetSent: string;
  confirmEmail: string;
  or: string;
  google: string;
  emptyTitle: string;
  emptyText: string;
  suggestions: string[];
  placeholder: string;
  thinking: string;
  send: string;
  stop: string;
  signOut: string;
  clear: string;
  clearConfirm: string;
  loadError: string;
  retry: string;
  disclaimer: string;
  reasoning: string;
  resetTitle: string;
  resetText: string;
  newPassword: string;
  confirmPassword: string;
  updatePassword: string;
  passwordUpdated: string;
  recoveryMissing: string;
  backHome: string;
  passwordMismatch: string;
};

export const ginnyCopy: Record<Language, GinnyCopy> = {
  en: {
    kicker: "09 / Portfolio guide",
    title: "Ask Ginny about my experience.",
    intro:
      "A portfolio guide for hiring teams and collaborators, grounded in the verified information on this site.",
    privacy:
      "Ask anything right away — no sign-in needed. Your conversation stays only in this browser.",
    cloudSaved: "Ask about my portfolio · no sign-in needed",
    signInTitle: "Start your conversation",
    signInText: "Choose a sign-in method. Email confirmation is required for new email accounts.",
    email: "Email address",
    password: "Password",
    passwordHint: "Use at least 8 characters.",
    signIn: "Sign in",
    signUp: "Create account",
    createAccount: "Create my account",
    haveAccount: "Already have an account? Sign in",
    needAccount: "New here? Create an account",
    forgotPassword: "Forgot password?",
    resetSent: "If that account exists, a reset link has been sent.",
    confirmEmail: "Check your email to confirm your account, then return to sign in.",
    or: "or",
    google: "Continue with Google",
    emptyTitle: "What would you like to know about Ginelle?",
    emptyText:
      "Ask about her CRM direction, work history, projects, certifications, languages, or collaboration interests.",
    suggestions: [
      "What CRM experience does Ginelle have?",
      "Show me her technical projects.",
      "What is she looking for next?",
    ],
    placeholder: "Ask about Ginelle’s experience…",
    thinking: "Ginny is thinking…",
    send: "Send question",
    stop: "Stop answer",
    signOut: "Sign out",
    clear: "Clear conversation",
    clearConfirm: "Clear this conversation?",
    loadError: "Your conversation could not be loaded. Please try again.",
    retry: "Try again",
    disclaimer:
      "Answers use this site’s information and may be imperfect. Verify important details with Ginelle.",
    reasoning: "Thinking summary",
    resetTitle: "Choose a new password",
    resetText: "Use the recovery link from your email, then enter a new password.",
    newPassword: "New password",
    confirmPassword: "Confirm new password",
    updatePassword: "Update password",
    passwordUpdated: "Your password has been updated. You can now return to Ginny’s AI.",
    recoveryMissing:
      "This page needs a valid password-recovery link. Request a new link from the sign-in area.",
    backHome: "Back to Ginny’s AI",
    passwordMismatch: "The passwords do not match.",
  },
  de: {
    kicker: "09 / Ginnys KI",
    title: "Frag Ginny zu meiner Erfahrung.",
    intro:
      "Ein Portfolio-Guide für Hiring-Teams und Kooperationspartner, basierend auf den geprüften Angaben dieser Website.",
    privacy:
      "Frag direkt los – ohne Anmeldung. Dein Gespräch bleibt nur in diesem Browser.",
    cloudSaved: "Fragen zu meinem Portfolio · ohne Anmeldung",
    signInTitle: "Gespräch starten",
    signInText: "Wähle eine Anmeldemethode. Neue E-Mail-Konten müssen per E-Mail bestätigt werden.",
    email: "E-Mail-Adresse",
    password: "Passwort",
    passwordHint: "Mindestens 8 Zeichen verwenden.",
    signIn: "Anmelden",
    signUp: "Konto erstellen",
    createAccount: "Mein Konto erstellen",
    haveAccount: "Schon ein Konto? Anmelden",
    needAccount: "Neu hier? Konto erstellen",
    forgotPassword: "Passwort vergessen?",
    resetSent: "Falls dieses Konto existiert, wurde ein Link zum Zurücksetzen gesendet.",
    confirmEmail:
      "Bestätige dein Konto über den Link in der E-Mail und kehre dann zur Anmeldung zurück.",
    or: "oder",
    google: "Weiter mit Google",
    emptyTitle: "Was möchtest du über Ginelle wissen?",
    emptyText:
      "Frage zu ihrer CRM-Ausrichtung, Berufserfahrung, Projekten, Zertifikaten, Sprachen oder Kooperationsinteressen.",
    suggestions: [
      "Welche CRM-Erfahrung hat Ginelle?",
      "Zeig mir ihre technischen Projekte.",
      "Was sucht sie als Nächstes?",
    ],
    placeholder: "Frage zu Ginelles Erfahrung…",
    thinking: "Ginny denkt nach…",
    send: "Frage senden",
    stop: "Antwort stoppen",
    signOut: "Abmelden",
    clear: "Gespräch löschen",
    clearConfirm: "Gespeichertes Gespräch löschen? Das kann nicht rückgängig gemacht werden.",
    loadError: "Dein Gespräch konnte nicht geladen werden. Bitte versuche es erneut.",
    retry: "Erneut versuchen",
    disclaimer:
      "Antworten basieren auf den Angaben dieser Website und können fehlerhaft sein. Wichtige Details bitte mit Ginelle prüfen.",
    reasoning: "Denkzusammenfassung",
    resetTitle: "Neues Passwort wählen",
    resetText: "Öffne den Wiederherstellungslink aus deiner E-Mail und gib ein neues Passwort ein.",
    newPassword: "Neues Passwort",
    confirmPassword: "Neues Passwort bestätigen",
    updatePassword: "Passwort aktualisieren",
    passwordUpdated: "Dein Passwort wurde aktualisiert. Du kannst jetzt zu Ginnys KI zurückkehren.",
    recoveryMissing:
      "Diese Seite benötigt einen gültigen Wiederherstellungslink. Fordere im Anmeldebereich einen neuen Link an.",
    backHome: "Zurück zu Ginnys KI",
    passwordMismatch: "Die Passwörter stimmen nicht überein.",
  },
  fr: {
    kicker: "09 / IA de Ginny",
    title: "Demandez à Ginny de parler de mon expérience.",
    intro:
      "Un guide du portfolio pour les équipes de recrutement et les collaborateurs, fondé sur les informations vérifiées de ce site.",
    privacy:
      "Posez vos questions tout de suite, sans connexion. Votre conversation reste uniquement dans ce navigateur.",
    cloudSaved: "Questions sur mon portfolio · sans connexion",
    signInTitle: "Commencer la conversation",
    signInText:
      "Choisissez une méthode de connexion. Les nouveaux comptes e-mail doivent être confirmés.",
    email: "Adresse e-mail",
    password: "Mot de passe",
    passwordHint: "Utilisez au moins 8 caractères.",
    signIn: "Se connecter",
    signUp: "Créer un compte",
    createAccount: "Créer mon compte",
    haveAccount: "Déjà un compte ? Se connecter",
    needAccount: "Nouveau ici ? Créer un compte",
    forgotPassword: "Mot de passe oublié ?",
    resetSent: "Si ce compte existe, un lien de réinitialisation a été envoyé.",
    confirmEmail:
      "Consultez votre e-mail pour confirmer votre compte, puis revenez vous connecter.",
    or: "ou",
    google: "Continuer avec Google",
    emptyTitle: "Que souhaitez-vous savoir sur Ginelle ?",
    emptyText:
      "Interrogez son orientation CRM, son expérience, ses projets, ses certifications, ses langues ou ses envies de collaboration.",
    suggestions: [
      "Quelle expérience CRM Ginelle possède-t-elle ?",
      "Montrez-moi ses projets techniques.",
      "Que recherche-t-elle maintenant ?",
    ],
    placeholder: "Posez une question sur l’expérience de Ginelle…",
    thinking: "Ginny réfléchit…",
    send: "Envoyer la question",
    stop: "Arrêter la réponse",
    signOut: "Se déconnecter",
    clear: "Effacer la conversation",
    clearConfirm: "Supprimer votre conversation enregistrée ? Cette action est irréversible.",
    loadError: "Impossible de charger votre conversation. Veuillez réessayer.",
    retry: "Réessayer",
    disclaimer:
      "Les réponses utilisent les informations de ce site et peuvent contenir des erreurs. Vérifiez les détails importants avec Ginelle.",
    reasoning: "Résumé de la réflexion",
    resetTitle: "Choisir un nouveau mot de passe",
    resetText:
      "Utilisez le lien de récupération reçu par e-mail, puis saisissez un nouveau mot de passe.",
    newPassword: "Nouveau mot de passe",
    confirmPassword: "Confirmer le nouveau mot de passe",
    updatePassword: "Mettre à jour le mot de passe",
    passwordUpdated:
      "Votre mot de passe a été mis à jour. Vous pouvez maintenant revenir à l’IA de Ginny.",
    recoveryMissing:
      "Cette page nécessite un lien de récupération valide. Demandez un nouveau lien dans la zone de connexion.",
    backHome: "Retour à l’IA de Ginny",
    passwordMismatch: "Les mots de passe ne correspondent pas.",
  },
  it: {
    kicker: "09 / IA di Ginny",
    title: "Chiedi a Ginny della mia esperienza.",
    intro:
      "Una guida al portfolio per team di recruiting e collaboratori, basata sulle informazioni verificate di questo sito.",
    privacy:
      "Fai subito le tue domande, senza accesso. La conversazione resta solo in questo browser.",
    cloudSaved: "Domande sul mio portfolio · senza accesso",
    signInTitle: "Inizia la conversazione",
    signInText: "Scegli un metodo di accesso. I nuovi account email richiedono una conferma.",
    email: "Indirizzo email",
    password: "Password",
    passwordHint: "Usa almeno 8 caratteri.",
    signIn: "Accedi",
    signUp: "Crea account",
    createAccount: "Crea il mio account",
    haveAccount: "Hai già un account? Accedi",
    needAccount: "Prima volta qui? Crea un account",
    forgotPassword: "Password dimenticata?",
    resetSent: "Se l’account esiste, è stato inviato un link di reimpostazione.",
    confirmEmail: "Controlla l’email per confermare l’account, poi torna ad accedere.",
    or: "oppure",
    google: "Continua con Google",
    emptyTitle: "Cosa vorresti sapere su Ginelle?",
    emptyText:
      "Chiedi del suo percorso CRM, esperienza lavorativa, progetti, certificazioni, lingue o interessi di collaborazione.",
    suggestions: [
      "Che esperienza CRM ha Ginelle?",
      "Mostrami i suoi progetti tecnici.",
      "Cosa cerca per il futuro?",
    ],
    placeholder: "Chiedi dell’esperienza di Ginelle…",
    thinking: "Ginny sta riflettendo…",
    send: "Invia domanda",
    stop: "Interrompi risposta",
    signOut: "Esci",
    clear: "Cancella conversazione",
    clearConfirm: "Eliminare la conversazione salvata? L’azione non può essere annullata.",
    loadError: "Impossibile caricare la conversazione. Riprova.",
    retry: "Riprova",
    disclaimer:
      "Le risposte usano le informazioni di questo sito e possono contenere errori. Verifica i dettagli importanti con Ginelle.",
    reasoning: "Riepilogo del ragionamento",
    resetTitle: "Scegli una nuova password",
    resetText: "Usa il link di recupero ricevuto via email e inserisci una nuova password.",
    newPassword: "Nuova password",
    confirmPassword: "Conferma nuova password",
    updatePassword: "Aggiorna password",
    passwordUpdated: "La password è stata aggiornata. Ora puoi tornare all’IA di Ginny.",
    recoveryMissing:
      "Questa pagina richiede un link di recupero valido. Richiedi un nuovo link nell’area di accesso.",
    backHome: "Torna all’IA di Ginny",
    passwordMismatch: "Le password non corrispondono.",
  },
};
