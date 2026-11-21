import { portfolioCopy, ginnyCopy, type Language } from "@/lib/portfolio-copy";
import { certifications, otherProjectLinks, projectLinks, technicalSkills } from "@/lib/portfolio-content";
import { finishConversationAnswer, getPersonalConversationAnswer, professionalConversation } from "@/lib/ginelle-conversation";

type Topic = "intro" | "crm" | "experience" | "projects" | "prototype" | "education" | "certifications" | "skills" | "direction" | "languages" | "sports" | "values" | "contact";
const rules: [Topic, RegExp][] = [
  ["prototype", /tinda(?:co|flow)|live.?sell|live.?verkauf|prototype|prototyp/],
  ["crm", /\bcrm\b|salesforce|pipeline|customer relationship|kundenbezieh/],
  ["direction", /looking for|next role|next job|what.*next|availability|available|opportunit|verf.gbar|suchst|sucht|n.chst|karriereziel|recherche|prochain|disponib|cerca|prossim|obiettiv/],
  ["certifications", /certif|zertif|credential/],
  ["education", /educat|degree|universit|qualif|training|learning|ausbildung|studium|weiterbildung|formation|.tudes|istruzione|formazione/],
  ["languages", /language|sprach|langue|lingu|\benglish\b|\bgerman\b|\bfilipino\b|\bdeutsch\b|\bfran.ais\b/],
  ["sports", /sport|tennis|ski|langlauf|running|jogging|hobb|personal note|pers.nlich|int.r.ts|passion|interessi/],
  ["projects", /project|projekt|projet|progett|weather app|world clock|recipe|travel website|puzzle/],
  ["skills", /data analy|datenanal|power ?bi|tableau|\bpython\b|skill|toolkit|tools|technolog|strength|kompetenz|f.higkeit|st.rke|outil|comp.tence|forza|strument/],
  ["values", /values|purpose|culture|respect|werte|zweck|kultur|valeur|mission|valori|scopo/],
  ["experience", /experience|career|work history|worked|background|erfahrung|beruf|laufbahn|parcours|exp.rience|esperienza|carriera/],
  ["contact", /contact|kontakt|email|e-mail|linkedin|hire|hiring|recruit|rekrut|collabor|contatt/],
  ["intro", /^(hi|hello|hey|hallo|bonjour|salut|ciao|buongiorno)[!. ]*$|who is|who are|tell me about (her|ginelle|ginny|yourself)|wer ist|qui est|chi ./],
];
const followUp = /^(tell me more|more details|and|what else|mehr|erz.hl mir mehr|und|plus de d.tails|encore|e poi|dimmi di pi.)[?!. ]*$/i;
const labels: Record<Language, { unknown: string; certification: string; contact: string; more: string }> = {
  en: { unknown: "I don’t have a published detail that answers that question. You can ask about Ginelle’s CRM experience, career, projects, qualifications, skills, languages, sports or career direction.", certification: "The published portfolio lists Salesforce experience and ongoing learning, but does not list a completed Salesforce Administrator certification.", contact: "You can contact Ginelle at [ginelle.doubek@gmail.com](mailto:ginelle.doubek@gmail.com) or on [LinkedIn](https://www.linkedin.com/in/ginelledoubek).", more: "For the complete professional record, see the [résumé](/resume?lang=en)." },
  de: { unknown: "Dazu habe ich keine veröffentlichte Angabe. Du kannst nach Ginelles CRM-Erfahrung, Berufserfahrung, Projekten, Qualifikationen, Fähigkeiten, Sprachen, Sport oder beruflichen Zielen fragen.", certification: "Das veröffentlichte Portfolio nennt Salesforce-Erfahrung und laufende Weiterbildung, aber keine abgeschlossene Salesforce-Administrator-Zertifizierung.", contact: "Du erreichst Ginelle unter [ginelle.doubek@gmail.com](mailto:ginelle.doubek@gmail.com) oder auf [LinkedIn](https://www.linkedin.com/in/ginelledoubek).", more: "Den vollständigen beruflichen Hintergrund findest du im [Lebenslauf](/resume?lang=de)." },
  fr: { unknown: "Je n’ai pas d’information publiée permettant de répondre à cette question. Tu peux poser une question sur l’expérience CRM, le parcours, les projets, les qualifications, les compétences, les langues, le sport ou les objectifs de Ginelle.", certification: "Le portfolio publié mentionne une expérience Salesforce et une formation continue, mais pas de certification Salesforce Administrator obtenue.", contact: "Tu peux contacter Ginelle à [ginelle.doubek@gmail.com](mailto:ginelle.doubek@gmail.com) ou sur [LinkedIn](https://www.linkedin.com/in/ginelledoubek).", more: "Consulte le [CV](/resume?lang=fr) pour son parcours complet." },
  it: { unknown: "Non ho un’informazione pubblicata che risponda a questa domanda. Puoi chiedere dell’esperienza CRM, della carriera, dei progetti, delle qualifiche, delle competenze, delle lingue, dello sport o degli obiettivi di Ginelle.", certification: "Il portfolio pubblicato indica esperienza con Salesforce e formazione continua, ma non una certificazione Salesforce Administrator completata.", contact: "Puoi contattare Ginelle a [ginelle.doubek@gmail.com](mailto:ginelle.doubek@gmail.com) o su [LinkedIn](https://www.linkedin.com/in/ginelledoubek).", more: "Consulta il [curriculum](/resume?lang=it) per il percorso completo." },
};
const normalize = (text: string) => text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
const list = (items: readonly string[]) => items.map((item) => `- ${item}`).join("\n");

/** Prepared answers use the same translated, public content as the website. */
function getPreparedAnswer(question: string, language: Language, previousQuestions: string[] = []): string {
  const copy = portfolioCopy[language];
  const words = labels[language];
  const q = normalize(question.trim());
  const employer = copy.experience.find((row) => {
    const name = normalize(row[2].split(/[·/]/)[0].trim());
    return name.length > 3 && (q.includes(name) || (name.split(/\s+/)[0].length > 3 && q.includes(name.split(/\s+/)[0])));
  });
  if (employer && !/certif|zertif/.test(q)) return `**${employer[1]} — ${employer[2]} (${employer[0]})**\n\n${employer[3]}`;
  if (/salesforce/.test(q) && /certif|zertif/.test(q)) return `${words.certification}\n\n${list(copy.learning)}\n\n${words.contact}`;
  let topic = rules.find(([, pattern]) => pattern.test(q))?.[0];
  if (!topic && followUp.test(q)) {
    for (const previous of [...previousQuestions].reverse()) {
      topic = rules.find(([, pattern]) => pattern.test(normalize(previous)))?.[0];
      if (topic) break;
    }
  }
  if (language === "en") {
    switch (topic) {
      case "intro": return professionalConversation.intro;
      case "experience": return professionalConversation.experience;
      case "crm": return professionalConversation.crm;
      case "sports": return professionalConversation.sports;
      case "direction": return professionalConversation.direction;
      case "projects": return "I enjoy putting new skills into practice through web development, data and CRM projects. My portfolio includes learning projects and an interactive CRM demonstration, alongside TindaCo, a prototype in development. You can explore them on my [projects page](/projects?lang=en).";
      case "prototype": return "TindaCo is a Prototype in Development, not a launched commercial product. It explores challenges around live selling, with a separate interactive CRM demonstration in the portfolio. AI and Facebook Live capabilities are future plans, not completed functionality. You can read about the current scope on my [projects page](/projects?lang=en).";
      case "education": return `My education includes ${copy.education.map(row => `${row[1]} at ${row[2]}`).join("; ")}. I continue learning through technical courses and hands-on projects. My [résumé](/resume?lang=en) has the full education and development record.`;
      case "certifications": return "My portfolio includes completed training and qualifications in web development and data analytics, alongside ongoing professional development. It does not list a completed Salesforce Administrator certification. You can view the qualification details and original certificates on my [résumé](/resume?lang=en).";
      case "skills": return "I connect international business experience with growing skills in Salesforce, data analysis, reporting and automation. My toolkit includes Excel, Power BI, Tableau, SQL and Python, alongside web development tools. I enjoy learning how to turn those tools into useful business solutions.";
      case "values": return "I value continuous learning, work-life balance and a company that cares about its people. Respect, trust, open communication and a supportive culture matter to me. I’m looking for meaningful work in an environment where people can thrive.";
    }
  }
  switch (topic) {
    case "intro": return `${copy.intro}\n\n${copy.purpose}\n\n${words.contact}`;
    case "crm": return `${copy.capabilities[0][1]}\n\n${copy.story[0][1]}\n\n${words.more}`;
    case "experience": return `${copy.resumeIntro}\n\n${list(copy.experience.map((row) => `**${row[1]}** — ${row[2]} (${row[0]})`))}\n\n${words.more}`;
    case "projects": return `${copy.projectsIntro}\n\n${list(copy.projects.map((row, index) => `[${row[0]}](${projectLinks[index].url}) — ${row[1]}`))}\n\n${list(otherProjectLinks.map((item) => `[${item.title}](${item.url})`))}`;
    case "prototype": return `**${copy.projectTitle} — ${copy.prototype}**\n\n${copy.projectIntro}\n\n**${copy.projectNowTitle}**\n${copy.projectNow}\n\n${copy.projectFuture}`;
    case "education": return `${list(copy.education.map((row) => `**${row[1]}** — ${row[2]} (${row[0]})`))}\n\n${list(copy.learning)}\n\n${words.more}`;
    case "certifications": return `${list(certifications.map((item) => `[${item.title}](${item.url}) — ${item.issuer}`))}\n\n${words.more}`;
    case "skills": return `${list(copy.capabilities.map(([title, description]) => `**${title}** — ${description}`))}\n\n${technicalSkills.join(" · ")}`;
    case "direction": return `${copy.availability}\n\n${copy.directionText}\n\n${words.contact}`;
    case "languages": return `${list(copy.languageList.map(([level, name]) => `${name} — ${level}`))}\n\n${words.contact}`;
    case "sports": return `${copy.personalText}\n\n${copy.hobbies.join(" · ")}`;
    case "values": return `${copy.purpose}\n\n${list(copy.values.map(([title, description]) => `**${title}** — ${description}`))}`;
    case "contact": return words.contact;
    default: return `${words.unknown}\n\n${ginnyCopy[language].emptyText}\n\n${words.contact}`;
  }
}

export function getPortfolioGuideAnswer(question: string, language: Language, previousQuestions: string[] = []): string {
  return finishConversationAnswer(
    getPersonalConversationAnswer(question, language) ?? getPreparedAnswer(question, language, previousQuestions),
    language,
  );
}
