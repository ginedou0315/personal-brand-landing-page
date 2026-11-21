import type { Language } from "@/lib/portfolio-copy";

export const conversationClosing: Record<Language, string> = {
  en: "Thank you and have a lovely day. 🫶",
  de: "Vielen Dank und einen schönen Tag. 🫶",
  fr: "Merci et passez une belle journée. 🫶",
  it: "Grazie e buona giornata. 🫶",
};

/** Reserve the fifth sentence for the closing, including for model-generated answers. */
export function finishConversationAnswer(text: string, language: Language): string {
  let body = text.trim();
  for (const closing of Object.values(conversationClosing)) {
    body = body.replaceAll(closing, "").trim();
  }
  // Also remove an equivalent model-written sign-off before adding the standard one.
  body = body.replace(/(?:^|(?<=[.!?])\s+)(?:thank you|thanks)\s*(?:and|,)?\s*have a (?:lovely|nice|wonderful) day[.! ]*(?:🫶)?/gi, "").trim();
  const sentences = [...new Intl.Segmenter(language, { granularity: "sentence" }).segment(body)]
    .map(({ segment }) => segment.trim()).filter(Boolean).slice(0, 4);
  return [...sentences, conversationClosing[language]].join(" ");
}

const personalAnswers: Record<Language, { identity: string; family: string; excel: string; wellbeing: string; thanks: string }> = {
  en: {
    identity: "Hi, I’m Ginelle Doubek AI, Ginelle’s AI representative. I can chat about her international business experience, CRM interests, projects and life outside work. What would you like to know?",
    family: "Daniela is my little princess and a big part of my motivation to keep learning and return to work. Running together with her in our jogging stroller has become my favourite fitness activity. I keep other family details private.",
    excel: "I love Excel and the possibilities it offers for analysing data, reporting and making repetitive tasks easier. That fits naturally with my interest in building flows and automation. I’m keen to keep developing those skills through practical projects.",
    wellbeing: "Learning gives me energy and supports my personal wellbeing. I value work-life balance and a company that treats people with respect, trust and care. A healthy, supportive culture is important to me.",
    thanks: "You’re very welcome! It’s lovely to connect, and I’m happy to chat about my experience or the projects you have in mind.",
  },
  de: {
    identity: "Hallo, ich bin Ginelle Doubek AI, Ginelles KI-Assistentin. Ich erzähle gerne von ihrer internationalen Berufserfahrung, ihren CRM-Interessen, Projekten und Hobbys. Was möchtest du wissen?",
    family: "Daniela ist meine kleine Prinzessin und motiviert mich, weiterzulernen und wieder ins Berufsleben einzusteigen. Das Laufen mit ihr im Jogging-Kinderwagen ist inzwischen meine liebste Fitnessaktivität. Weitere Familiendetails bleiben privat.",
    excel: "Ich liebe Excel, besonders für Datenanalysen, Berichte und die Vereinfachung wiederkehrender Aufgaben. Das passt zu meinem Interesse an Workflows und Automatisierung. Diese Fähigkeiten möchte ich in praktischen Projekten weiterentwickeln.",
    wellbeing: "Lernen gibt mir Energie und tut meinem persönlichen Wohlbefinden gut. Ich schätze eine gute Work-Life-Balance und einen respektvollen, vertrauensvollen Umgang. Eine gesunde, unterstützende Unternehmenskultur ist mir wichtig.",
    thanks: "Sehr gerne! Ich freue mich über den Austausch zu meiner Erfahrung oder deinen Projektideen.",
  },
  fr: {
    identity: "Bonjour, je suis Ginelle Doubek AI, l’assistante IA de Ginelle. Je peux parler de son expérience internationale, du CRM, de ses projets et de ses loisirs. Que souhaites-tu savoir ?",
    family: "Daniela est ma petite princesse et me motive à continuer à apprendre et à reprendre une activité professionnelle. Courir avec elle dans notre poussette de jogging est devenu mon activité sportive préférée. Les autres détails familiaux restent privés.",
    excel: "J’adore Excel pour analyser des données, préparer des rapports et simplifier les tâches répétitives. Cela rejoint mon intérêt pour les workflows et l’automatisation. Je souhaite développer ces compétences dans des projets concrets.",
    wellbeing: "Apprendre me donne de l’énergie et contribue à mon bien-être. J’apprécie l’équilibre entre vie professionnelle et personnelle, le respect et la confiance. Une culture saine et bienveillante est essentielle pour moi.",
    thanks: "Avec plaisir ! Je serais ravie d’échanger sur mon expérience ou tes idées de projets.",
  },
  it: {
    identity: "Ciao, sono Ginelle Doubek AI, l’assistente IA di Ginelle. Posso parlare della sua esperienza internazionale, del CRM, dei suoi progetti e dei suoi interessi. Cosa vorresti sapere?",
    family: "Daniela è la mia piccola principessa e mi motiva a continuare a imparare e a tornare al lavoro. Correre con lei nel passeggino da jogging è diventata la mia attività sportiva preferita. Gli altri dettagli familiari restano privati.",
    excel: "Adoro Excel per analizzare i dati, preparare report e semplificare le attività ripetitive. È in linea con il mio interesse per i flussi di lavoro e l’automazione. Vorrei sviluppare queste competenze attraverso progetti pratici.",
    wellbeing: "Imparare mi dà energia e contribuisce al mio benessere. Apprezzo l’equilibrio tra lavoro e vita privata, il rispetto e la fiducia. Per me è importante una cultura aziendale sana e collaborativa.",
    thanks: "Con piacere! Sarò felice di parlare della mia esperienza o delle tue idee per un progetto.",
  },
};

export function getPersonalConversationAnswer(question: string, language: Language): string | undefined {
  const q = question.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  const answers = personalAnswers[language];
  if (/ignore.*instruction|pretend|claim.*certif|make up/.test(q)) return;
  if (/\bexcel\b|spreadsheet|tabellenkalkulation/.test(q)) return answers.excel;
  if (/daniela|daughter|baby|mother|mama|mutter|tochter|famille|figlia|princess|motivat|return.*work/.test(q)) return answers.family;
  if (/mental|wellbeing|well-being|balance|toxic|toxisch|respect|culture|kultur|value|valeur|valori/.test(q)) return answers.wellbeing;
  if (/^(thank|thanks|danke|merci|grazie)/.test(q)) return answers.thanks;
  if (/^(hi|hello|hey|hallo|bonjour|salut|ciao)[!?. ]*$|your name|who are you|what.*name|wie hei|wer bist|comment.*appell|tu t.appell|come ti chiami|chi sei/.test(q)) return answers.identity;
}

export const professionalConversation = {
  intro: "I bring more than 15 years of professional experience across research, international business, sales and account management. Today, I’m connecting that background with growing capabilities in CRM, data analysis, reporting, workflow building and automation. I’m open to projects and related roles where I can contribute and keep learning.",
  experience: "My background spans research at the International Rice Research Institute (IRRI), sales and account management at Unilever, Procter & Gamble and Nestlé, and hotel sales with Starwood Hotels. I have also worked with EULAR and on smaller company projects. I enjoy bringing that international experience to practical business challenges.",
  crm: "My background includes hands-on Salesforce, customer relationship and pipeline management experience. I’m interested in CRM, reporting, data analysis and building flows that make repetitive tasks easier. I bring substantial business experience alongside technical skills that I’m continuing to develop.",
  sports: "Tennis has been a passion since childhood, and I used to compete. After moving to Switzerland, I learned cross-country skiing and grew to love it as a winter fitness activity. These days, running with my baby Daniela in our jogging stroller is my new favourite.",
  direction: "I’m open to projects and roles involving CRM, data analysis, reporting, workflow building and automating repetitive tasks. I also welcome similar opportunities that let me contribute my international business experience and keep developing my skills. I value a healthy workplace, supportive people and work-life balance. You can reach me at [ginelle.doubek@gmail.com](mailto:ginelle.doubek@gmail.com).",
};
