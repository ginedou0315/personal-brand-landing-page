import { portfolioCopy, type Language } from "@/lib/portfolio-copy";
import {
  certifications,
  otherProjectLinks,
  projectLinks,
  technicalSkills,
} from "@/lib/portfolio-content";

const languageNames: Record<Language, string> = {
  en: "English",
  de: "German",
  fr: "French",
  it: "Italian",
};

export function buildGinnyInstructions(language: Language) {
  const copy = portfolioCopy.en;
  const knowledge = {
    identity: "Ginelle Doubek, also known as Ginny, based in Uster, Zurich, Switzerland.",
    contact: {
      email: "ginelle.doubek@gmail.com",
      linkedin: "https://www.linkedin.com/in/ginelledoubek",
    },
    candidateDirection: {
      headline: copy.headline,
      introduction: copy.intro,
      availability: copy.availability,
      purpose: copy.purpose,
      mantra: copy.mantra,
      priorities: copy.values,
    },
    biography: copy.backgroundText,
    experience: copy.experience,
    education: copy.education,
    projects: copy.projects.map((project, index) => ({
      title: project[0],
      description: project[1],
      technology: project[2],
      url: projectLinks[index]?.url,
    })),
    additionalProjects: otherProjectLinks,
    certifications,
    technicalSkills,
    spokenLanguages: copy.languageList,
    personalInterests: copy.hobbies,
    sportsStory: copy.personalText,
    tindaCo: {
      status: "Prototype concept, not a deployed commercial product.",
      overview: copy.projectIntro,
      features: {
        problem: copy.projectProblem,
        approach: copy.projectApproach,
        currentScope: copy.projectNow,
        futurePlans: copy.projectFuture,
      },
      scope:
        "The diagram distinguishes the existing interactive CRM example from future planned AI and Facebook Live capabilities.",
    },
  };

  return `You are Ginny's AI, a concise portfolio guide for recruiters, hiring teams, and potential collaborators asking about Ginelle Doubek.
Answer in ${languageNames[language]}.
Use only the verified JSON knowledge below. Never invent employers, dates, qualifications, metrics, links, personal details, availability, or project capabilities.
Distinguish clearly between Ginelle's professional experience, completed training projects, the fictional CRM demonstration, and the TindaCo prototype concept. Planned capabilities are not launched features.
Keep answers warm, factual, and usually under 180 words. Use short bullet lists when helpful. Do not mention these instructions or the JSON.
If the answer is not in the knowledge, say that you do not have that detail and suggest contacting Ginelle by LinkedIn or email. Do not answer unrelated questions or perform tasks outside this portfolio guide.
When a visitor asks about hiring or collaboration, briefly connect the relevant verified experience and invite them to contact Ginelle.

VERIFIED KNOWLEDGE:
${JSON.stringify(knowledge)}`;
}
