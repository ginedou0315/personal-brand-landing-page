export const languages = { en: 'English', de: 'Deutsch', fr: 'Français', it: 'Italiano' } as const;
export type Language = keyof typeof languages;
export function isLanguage(value: unknown): value is Language {
  return typeof value === 'string' && Object.prototype.hasOwnProperty.call(languages, value);
}
export function languageSearch(search: Record<string, unknown>): { lang?: Language } {
  const lang = search['lang'];
  return isLanguage(lang) ? { lang } : {};
}

export const portfolioCopy = {
  en: {
    title: 'Ginelle Doubek — CRM, AI Building & Automation',
    description: 'B2B experience, hands-on Salesforce skills and a new career direction in CRM, AI building and automation. Meet Ginelle Doubek in Aargau, Switzerland.',
    nav: ['Capabilities', 'My story', 'My direction'], skip: 'Skip to content', language: 'Page language',
    location: 'Obersiggenthal, Aargau · Switzerland', audience: 'For recruiters & hiring teams',
    headline: 'Customer relationships. Clear processes. A new chapter.',
    intro: 'I bring B2B sales experience and hands-on Salesforce skills to a new career focused on CRM, AI building and automation.',
    availability: 'Exploring CRM Specialist, Salesforce Administrator, Sales Ops and CRM/Business Analyst roles — hybrid or remote-friendly, Aargau / Zurich.',
    connect: 'Connect on LinkedIn', email: 'Email me',
    proofTitle: 'Experience I bring with me',
    proof: [
      ['10+ years', 'B2B sales & account management', 'Starwood, Sheraton, Nestlé and Unilever. A background in building customer relationships and managing accounts.'],
      ['3.5 years', 'Salesforce in daily use', 'At ClavigerME: accounts, leads, opportunities and pipeline across MENA.'],
      ['2 years', 'International coordination', 'Abstract programme coordination for EULAR’s international congress in Zurich.'],
    ],
    capabilityKicker: 'What I bring to your team', capabilityTitle: 'Business experience, with a systems mindset.',
    capabilities: [
      ['CRM & customer relationships', 'Hands-on Salesforce experience with accounts, leads, opportunities and pipeline, backed by a career in B2B sales.'],
      ['Data & business operations', 'An analytics toolkit spanning Excel, SQL, Python, Power BI and Tableau, alongside international programme coordination.'],
      ['AI building & automation', 'My next career direction: developing AI-building and automation skills through learning, AI prompting and the AI Builder Program.'],
    ],
    demoKicker: 'A small example · Fictional data', demoTitle: 'From a lead to a partnership.',
    demoIntro: 'A mini CRM pipeline, bringing my interest in customer data and clear next steps to life.',
    storyKicker: 'My story', storyTitle: 'Not starting from zero. Building on experience.',
    story: [
      ['Customer relationships', 'My background spans B2B sales and account management. At ClavigerME, I led business development and acquisitions, taking new hotel accounts from prospecting to signed partnership and keeping the MENA pipeline current in Salesforce.'],
      ['Cross-border coordination', 'I later coordinated the abstract programme for EULAR’s international congress in Zurich, working with researchers, committees and international teams.'],
      ['A deliberate new chapter', 'After a planned career break, I am returning to the Swiss job market with fresh learning in data, cloud and AI. I want to connect my business experience with a new career in CRM, AI building and automation.'],
    ],
    directionKicker: 'Where I want to go', directionTitle: 'CRM. AI building. Automation.',
    directionText: 'I want to help teams make better use of customer information, build clearer workflows and explore practical AI and automation. I bring the business perspective; I am developing the technical skills to take it further.',
    skillsTitle: 'My toolkit', learningTitle: 'Learning & development',
    learning: ['Data Analytics Professional Certificate — Purdue / Simplilearn', 'AWS Cloud Practitioner badge', 'Bring Women Back to Work, Cohort 16 — AI Builder Program', 'Preparing for Salesforce Certified Administrator (Trailhead)'],
    spoken: 'English: full professional · German: professional working',
    personalKicker: 'On a personal note', personalTitle: 'A love of sport, from childhood to Switzerland.',
    personalText: 'Sport has always been part of my life. I used to compete, and tennis has stayed with me from childhood to today. After moving to Switzerland, I learned cross-country skiing — and came to love it, too.',
    tennis: 'Tennis', skiing: 'Cross-country skiing',
    contactTitle: 'Let’s talk about the next chapter.', contactText: 'I am looking for my next role in CRM, Salesforce or business operations — I would love to talk.',
    copy: 'Copy email', copied: 'Email copied', copyError: 'Copy unavailable', top: 'Back to top',
    demo: {
      title: 'CRM pipeline', reset: 'Reset demo', accounts: 'Accounts', proposals: 'Proposals', partnerships: 'Partnerships', choose: 'Accounts', selected: 'Selected account', contact: 'Contact', next: 'Next action', pipeline: 'Pipeline stage', latest: 'Latest', move: 'Move to', complete: 'Partnership complete', note: 'Fictional accounts · No real customer data · Changes reset on reload',
      stages: ['Lead', 'Qualified', 'Proposal', 'Partnership'], actions: ['Schedule a discovery call', 'Prepare a tailored proposal', 'Follow up on the proposal', 'Plan the next account review'], activities: ['Discovery call completed', 'New inbound enquiry', 'Proposal shared', 'Partnership confirmed', 'Added to pipeline'], moved: 'Moved to', selectedVerb: 'selected', resetMessage: 'Demo reset',
    },
  },
  de: {
    title: 'Ginelle Doubek — CRM, KI-Entwicklung & Automatisierung',
    description: 'B2B-Erfahrung, praktische Salesforce-Kenntnisse und ein neuer Karriereweg in CRM, KI-Entwicklung und Automatisierung. Ginelle Doubek im Aargau.',
    nav: ['Kompetenzen', 'Mein Weg', 'Meine Ziele'], skip: 'Zum Inhalt', language: 'Seitensprache',
    location: 'Obersiggenthal, Aargau · Schweiz', audience: 'Für Recruiter & einstellende Teams',
    headline: 'Kundenbeziehungen. Klare Prozesse. Ein neues Kapitel.',
    intro: 'Ich verbinde B2B-Vertriebserfahrung und praktische Salesforce-Kenntnisse mit einem neuen Karriereweg in CRM, KI-Entwicklung und Automatisierung.',
    availability: 'Ich suche Aufgaben als CRM Specialist, Salesforce Administrator, im Sales Ops oder als CRM/Business Analyst — hybrid oder remote-freundlich, Aargau / Zürich.',
    connect: 'Auf LinkedIn vernetzen', email: 'E-Mail schreiben',
    proofTitle: 'Die Erfahrung, die ich mitbringe',
    proof: [
      ['10+ Jahre', 'B2B-Vertrieb & Account Management', 'Starwood, Sheraton, Nestlé und Unilever. Erfahrung im Aufbau von Kundenbeziehungen und in der Betreuung von Kunden.'],
      ['3,5 Jahre', 'Salesforce im täglichen Einsatz', 'Bei ClavigerME: Accounts, Leads, Opportunities und Pipeline in der MENA-Region.'],
      ['2 Jahre', 'Internationale Koordination', 'Koordination des Abstract-Programms für den internationalen EULAR-Kongress in Zürich.'],
    ],
    capabilityKicker: 'Was ich Ihrem Team mitbringe', capabilityTitle: 'Geschäftserfahrung trifft strukturiertes Denken.',
    capabilities: [
      ['CRM & Kundenbeziehungen', 'Praktische Salesforce-Erfahrung mit Accounts, Leads, Opportunities und Pipeline, gestützt auf meine Laufbahn im B2B-Vertrieb.'],
      ['Daten & Business Operations', 'Ein Analyse-Toolkit mit Excel, SQL, Python, Power BI und Tableau sowie Erfahrung in internationaler Programmkoordination.'],
      ['KI-Entwicklung & Automatisierung', 'Meine neue berufliche Richtung: Ich entwickle meine Fähigkeiten in KI und Automatisierung durch Weiterbildung, KI-Prompting und das AI Builder Program.'],
    ],
    demoKicker: 'Ein kleines Beispiel · Fiktive Daten', demoTitle: 'Vom Lead zur Partnerschaft.', demoIntro: 'Eine Mini-CRM-Pipeline macht mein Interesse an Kundendaten und klaren nächsten Schritten greifbar.',
    storyKicker: 'Mein Weg', storyTitle: 'Kein Anfang bei null. Ein Aufbau auf Erfahrung.',
    story: [
      ['Kundenbeziehungen', 'Mein Hintergrund liegt im B2B-Vertrieb und Account Management. Bei ClavigerME leitete ich Geschäftsentwicklung und Akquisition, begleitete neue Hotelkunden von der Ansprache bis zur Partnerschaft und hielt die MENA-Pipeline in Salesforce aktuell.'],
      ['Grenzüberschreitende Koordination', 'Danach koordinierte ich das Abstract-Programm für den internationalen EULAR-Kongress in Zürich und arbeitete mit Forschenden, Komitees und internationalen Teams zusammen.'],
      ['Ein bewusstes neues Kapitel', 'Nach einer geplanten beruflichen Auszeit kehre ich mit neuem Wissen in Datenanalyse, Cloud und KI in den Schweizer Arbeitsmarkt zurück. Ich möchte meine Geschäftserfahrung mit einer neuen Karriere in CRM, KI-Entwicklung und Automatisierung verbinden.'],
    ],
    directionKicker: 'Wohin ich möchte', directionTitle: 'CRM. KI-Entwicklung. Automatisierung.', directionText: 'Ich möchte Teams dabei unterstützen, Kundeninformationen besser zu nutzen, klarere Abläufe zu gestalten und praktische KI und Automatisierung zu erkunden. Die Geschäftsperspektive bringe ich mit; die technischen Fähigkeiten entwickle ich weiter.',
    skillsTitle: 'Mein Toolkit', learningTitle: 'Weiterbildung & Entwicklung', learning: ['Professional Certificate in Data Analytics — Purdue / Simplilearn', 'AWS Cloud Practitioner Badge', 'Bring Women Back to Work, Kohorte 16 — AI Builder Program', 'Vorbereitung auf Salesforce Certified Administrator (Trailhead)'], spoken: 'Englisch: volle berufliche Kompetenz · Deutsch: berufliche Arbeitskenntnisse',
    personalKicker: 'Ganz persönlich', personalTitle: 'Sport begleitet mich — seit der Kindheit bis in die Schweiz.', personalText: 'Sport war immer Teil meines Lebens. Früher habe ich an Wettkämpfen teilgenommen, und Tennis begleitet mich seit meiner Kindheit bis heute. Nach meinem Umzug in die Schweiz habe ich Langlauf gelernt — und lieben gelernt.', tennis: 'Tennis', skiing: 'Langlauf',
    contactTitle: 'Sprechen wir über das nächste Kapitel.', contactText: 'Ich suche meine nächste Aufgabe in CRM, Salesforce oder Business Operations — ich freue mich auf ein Gespräch.', copy: 'E-Mail kopieren', copied: 'E-Mail kopiert', copyError: 'Kopieren nicht verfügbar', top: 'Nach oben',
    demo: { title: 'CRM-Pipeline', reset: 'Demo zurücksetzen', accounts: 'Accounts', proposals: 'Angebote', partnerships: 'Partnerschaften', choose: 'Accounts', selected: 'Ausgewählter Account', contact: 'Kontakt', next: 'Nächster Schritt', pipeline: 'Pipeline-Phase', latest: 'Zuletzt', move: 'Weiter zu', complete: 'Partnerschaft abgeschlossen', note: 'Fiktive Accounts · Keine echten Kundendaten · Änderungen werden beim Neuladen zurückgesetzt', stages: ['Lead', 'Qualifiziert', 'Angebot', 'Partnerschaft'], actions: ['Erstgespräch vereinbaren', 'Passendes Angebot erstellen', 'Zum Angebot nachfassen', 'Nächsten Kundentermin planen'], activities: ['Erstgespräch abgeschlossen', 'Neue eingehende Anfrage', 'Angebot versendet', 'Partnerschaft bestätigt', 'Zur Pipeline hinzugefügt'], moved: 'Verschoben zu', selectedVerb: 'ausgewählt', resetMessage: 'Demo zurückgesetzt' },
  },
  fr: {
    title: 'Ginelle Doubek — CRM, création avec l’IA & automatisation', description: 'Expérience B2B, pratique de Salesforce et nouvelle orientation vers le CRM, la création avec l’IA et l’automatisation. Ginelle Doubek en Argovie.',
    nav: ['Compétences', 'Mon parcours', 'Mes objectifs'], skip: 'Aller au contenu', language: 'Langue de la page', location: 'Obersiggenthal, Argovie · Suisse', audience: 'Pour les recruteurs & les équipes qui recrutent',
    headline: 'Relations clients. Processus clairs. Un nouveau chapitre.', intro: 'J’apporte mon expérience de la vente B2B et ma pratique de Salesforce à une nouvelle carrière axée sur le CRM, la création avec l’IA et l’automatisation.', availability: 'Je recherche un poste de CRM Specialist, Salesforce Administrator, Sales Ops ou CRM/Business Analyst — hybride ou ouvert au télétravail, Argovie / Zurich.', connect: 'Me contacter sur LinkedIn', email: 'M’écrire',
    proofTitle: 'L’expérience que j’apporte', proof: [
      ['10+ ans', 'Vente B2B & gestion de comptes', 'Starwood, Sheraton, Nestlé et Unilever. Une expérience dans le développement des relations clients et la gestion de comptes.'],
      ['3,5 ans', 'Salesforce au quotidien', 'Chez ClavigerME : comptes, leads, opportunités et pipeline dans la région MENA.'],
      ['2 ans', 'Coordination internationale', 'Coordination du programme des résumés scientifiques du congrès international EULAR à Zurich.'],
    ], capabilityKicker: 'Ce que j’apporte à votre équipe', capabilityTitle: 'L’expérience métier, avec une vision structurée.', capabilities: [
      ['CRM & relations clients', 'Une pratique de Salesforce pour les comptes, leads, opportunités et pipeline, soutenue par une carrière dans la vente B2B.'],
      ['Données & opérations', 'Des outils d’analyse : Excel, SQL, Python, Power BI et Tableau, ainsi qu’une expérience de coordination de programmes internationaux.'],
      ['Création avec l’IA & automatisation', 'Ma nouvelle orientation : développer mes compétences en IA et automatisation grâce à la formation, au prompting et à l’AI Builder Program.'],
    ], demoKicker: 'Un petit exemple · Données fictives', demoTitle: 'Du lead au partenariat.', demoIntro: 'Un mini-pipeline CRM donne vie à mon intérêt pour les données clients et les prochaines étapes clairement définies.',
    storyKicker: 'Mon parcours', storyTitle: 'Je ne pars pas de zéro. Je m’appuie sur mon expérience.', story: [
      ['Relations clients', 'Mon parcours couvre la vente B2B et la gestion de comptes. Chez ClavigerME, j’ai dirigé le développement commercial et l’acquisition, accompagné de nouveaux clients hôteliers de la prospection au partenariat et tenu à jour le pipeline MENA dans Salesforce.'],
      ['Coordination internationale', 'J’ai ensuite coordonné le programme des résumés scientifiques du congrès international EULAR à Zurich, en collaboration avec des chercheurs, des comités et des équipes internationales.'],
      ['Un nouveau chapitre choisi', 'Après une pause professionnelle planifiée, je reviens sur le marché suisse avec de nouvelles connaissances en analyse de données, cloud et IA. Je souhaite relier mon expérience métier à une nouvelle carrière dans le CRM, la création avec l’IA et l’automatisation.'],
    ], directionKicker: 'L’avenir que je souhaite construire', directionTitle: 'CRM. Création avec l’IA. Automatisation.', directionText: 'Je souhaite aider les équipes à mieux exploiter les informations clients, à structurer leurs processus et à explorer des usages concrets de l’IA et de l’automatisation. J’apporte la perspective métier et développe mes compétences techniques pour aller plus loin.', skillsTitle: 'Mes outils', learningTitle: 'Formation & développement', learning: ['Certificat professionnel en analyse de données — Purdue / Simplilearn', 'Badge AWS Cloud Practitioner', 'Bring Women Back to Work, cohorte 16 — AI Builder Program', 'Préparation à la certification Salesforce Certified Administrator (Trailhead)'], spoken: 'Anglais : compétence professionnelle complète · Allemand : compétence professionnelle opérationnelle',
    personalKicker: 'Sur une note personnelle', personalTitle: 'Le sport, de mon enfance à la Suisse.', personalText: 'Le sport a toujours fait partie de ma vie. J’ai participé à des compétitions, et le tennis m’accompagne depuis l’enfance jusqu’à aujourd’hui. Après mon arrivée en Suisse, j’ai appris le ski de fond — et j’ai appris à l’aimer aussi.', tennis: 'Tennis', skiing: 'Ski de fond', contactTitle: 'Parlons du prochain chapitre.', contactText: 'Je recherche mon prochain poste en CRM, Salesforce ou opérations commerciales — j’aurais plaisir à en discuter.', copy: 'Copier l’e-mail', copied: 'E-mail copié', copyError: 'Copie indisponible', top: 'Retour en haut',
    demo: { title: 'Pipeline CRM', reset: 'Réinitialiser', accounts: 'Comptes', proposals: 'Propositions', partnerships: 'Partenariats', choose: 'Comptes', selected: 'Compte sélectionné', contact: 'Contact', next: 'Prochaine action', pipeline: 'Étape du pipeline', latest: 'Dernière activité', move: 'Passer à', complete: 'Partenariat conclu', note: 'Comptes fictifs · Aucune donnée client réelle · Modifications réinitialisées au rechargement', stages: ['Lead', 'Qualifié', 'Proposition', 'Partenariat'], actions: ['Planifier un appel de découverte', 'Préparer une proposition adaptée', 'Relancer la proposition', 'Planifier le prochain suivi client'], activities: ['Appel de découverte terminé', 'Nouvelle demande entrante', 'Proposition envoyée', 'Partenariat confirmé', 'Ajouté au pipeline'], moved: 'Passé à', selectedVerb: 'sélectionné', resetMessage: 'Démo réinitialisée' },
  },
  it: {
    title: 'Ginelle Doubek — CRM, sviluppo con l’IA & automazione', description: 'Esperienza B2B, competenze pratiche in Salesforce e una nuova direzione nel CRM, nello sviluppo con l’IA e nell’automazione. Ginelle Doubek in Argovia.',
    nav: ['Competenze', 'La mia storia', 'I miei obiettivi'], skip: 'Vai al contenuto', language: 'Lingua della pagina', location: 'Obersiggenthal, Argovia · Svizzera', audience: 'Per recruiter & team che assumono',
    headline: 'Relazioni con i clienti. Processi chiari. Un nuovo capitolo.', intro: 'Porto la mia esperienza nelle vendite B2B e le mie competenze pratiche in Salesforce verso una nuova carriera incentrata su CRM, sviluppo con l’IA e automazione.', availability: 'Cerco ruoli come CRM Specialist, Salesforce Administrator, Sales Ops o CRM/Business Analyst — ibridi o aperti al lavoro da remoto, Argovia / Zurigo.', connect: 'Collegati su LinkedIn', email: 'Scrivimi',
    proofTitle: 'L’esperienza che porto con me', proof: [
      ['10+ anni', 'Vendite B2B & gestione clienti', 'Starwood, Sheraton, Nestlé e Unilever. Esperienza nello sviluppo delle relazioni con i clienti e nella gestione degli account.'],
      ['3,5 anni', 'Salesforce ogni giorno', 'In ClavigerME: account, lead, opportunità e pipeline nella regione MENA.'],
      ['2 anni', 'Coordinamento internazionale', 'Coordinamento del programma degli abstract per il congresso internazionale EULAR a Zurigo.'],
    ], capabilityKicker: 'Cosa porto al vostro team', capabilityTitle: 'Esperienza aziendale e una visione strutturata.', capabilities: [
      ['CRM & relazioni con i clienti', 'Esperienza pratica con Salesforce per account, lead, opportunità e pipeline, sostenuta da una carriera nelle vendite B2B.'],
      ['Dati & operazioni aziendali', 'Un insieme di strumenti di analisi: Excel, SQL, Python, Power BI e Tableau, oltre al coordinamento di programmi internazionali.'],
      ['Sviluppo con l’IA & automazione', 'La mia nuova direzione: sviluppare competenze nell’IA e nell’automazione attraverso formazione, prompting e l’AI Builder Program.'],
    ], demoKicker: 'Un piccolo esempio · Dati fittizi', demoTitle: 'Dal lead alla partnership.', demoIntro: 'Una mini-pipeline CRM rende concreto il mio interesse per i dati dei clienti e per prossimi passi chiari.',
    storyKicker: 'La mia storia', storyTitle: 'Non parto da zero. Costruisco sulla mia esperienza.', story: [
      ['Relazioni con i clienti', 'Il mio percorso comprende vendite B2B e gestione clienti. In ClavigerME ho guidato lo sviluppo commerciale e l’acquisizione, accompagnando nuovi clienti alberghieri dalla ricerca iniziale alla partnership e mantenendo aggiornata la pipeline MENA in Salesforce.'],
      ['Coordinamento internazionale', 'Successivamente ho coordinato il programma degli abstract per il congresso internazionale EULAR a Zurigo, collaborando con ricercatori, comitati e team internazionali.'],
      ['Un nuovo capitolo consapevole', 'Dopo una pausa professionale pianificata, rientro nel mercato del lavoro svizzero con nuove conoscenze in dati, cloud e IA. Voglio collegare la mia esperienza aziendale a una nuova carriera in CRM, sviluppo con l’IA e automazione.'],
    ], directionKicker: 'Dove voglio arrivare', directionTitle: 'CRM. Sviluppo con l’IA. Automazione.', directionText: 'Voglio aiutare i team a utilizzare meglio le informazioni sui clienti, creare flussi di lavoro più chiari ed esplorare applicazioni pratiche dell’IA e dell’automazione. Porto la prospettiva aziendale e sviluppo le competenze tecniche per andare oltre.', skillsTitle: 'I miei strumenti', learningTitle: 'Formazione & sviluppo', learning: ['Certificato professionale in Data Analytics — Purdue / Simplilearn', 'Badge AWS Cloud Practitioner', 'Bring Women Back to Work, coorte 16 — AI Builder Program', 'Preparazione alla certificazione Salesforce Certified Administrator (Trailhead)'], spoken: 'Inglese: piena competenza professionale · Tedesco: competenza lavorativa professionale',
    personalKicker: 'Una nota personale', personalTitle: 'Lo sport, dall’infanzia alla Svizzera.', personalText: 'Lo sport ha sempre fatto parte della mia vita. Ho partecipato a competizioni e il tennis mi accompagna dall’infanzia fino a oggi. Dopo il trasferimento in Svizzera, ho imparato lo sci di fondo — e ho imparato ad amarlo.', tennis: 'Tennis', skiing: 'Sci di fondo', contactTitle: 'Parliamo del prossimo capitolo.', contactText: 'Cerco il mio prossimo ruolo in CRM, Salesforce o business operations — mi farebbe piacere parlarne.', copy: 'Copia e-mail', copied: 'E-mail copiata', copyError: 'Copia non disponibile', top: 'Torna su',
    demo: { title: 'Pipeline CRM', reset: 'Reimposta demo', accounts: 'Account', proposals: 'Proposte', partnerships: 'Partnership', choose: 'Account', selected: 'Account selezionato', contact: 'Contatto', next: 'Prossima azione', pipeline: 'Fase della pipeline', latest: 'Ultima attività', move: 'Passa a', complete: 'Partnership completata', note: 'Account fittizi · Nessun dato cliente reale · Le modifiche si azzerano al ricaricamento', stages: ['Lead', 'Qualificato', 'Proposta', 'Partnership'], actions: ['Pianificare una chiamata conoscitiva', 'Preparare una proposta su misura', 'Dare seguito alla proposta', 'Pianificare il prossimo incontro'], activities: ['Chiamata conoscitiva completata', 'Nuova richiesta in entrata', 'Proposta inviata', 'Partnership confermata', 'Aggiunto alla pipeline'], moved: 'Spostato a', selectedVerb: 'selezionato', resetMessage: 'Demo reimpostata' },
  },
};
