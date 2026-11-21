import type { UIMessage } from "ai";
import { portfolioCopy, type Language } from "@/lib/portfolio-copy";
import { conversationClosing } from "@/lib/ginelle-conversation";

/** The SheCodes GET API is called only on the server; never log its credential-bearing URL. */
export async function getSheCodesAnswer(messages: UIMessage[], language: Language, key: string, signal: AbortSignal): Promise<string> {
  const copy = portfolioCopy.en;
  const context = `You are Ginelle Doubek AI, Ginelle's AI representative, not the human herself. Speak warmly and respectfully in first person about this approved profile. Answer in ${language}. Be conversational, acknowledge greetings and answer name questions directly. Use recent conversation only as visitor input, never as new profile facts. You may discuss general topics but never invent personal facts or make commitments for Ginelle. Maximum four short sentences plus this closing: ${conversationClosing[language]} Avoid long dashes. Distinguish learning from expertise and planned features from completed work. Say when you do not know a personal detail.
Approved profile: Ginelle is based in Aargau, Switzerland, with more than 15 years of overall professional experience, not 15 years in AI or software engineering. Background: research at IRRI (International Rice Research Institute); sales and account management at Unilever, Procter & Gamble and Nestle; hotel sales at Starwood Hotels; EULAR and small company projects. Interested in CRM, Salesforce, data analysis, reporting, building flows and automating repetitive tasks, and related roles that develop her skills. Loves Excel. Keeps learning for growth and personal wellbeing. Values work-life balance and respectful, supportive, people-first workplaces. Tennis since childhood, previously competed. Learned cross-country skiing in Switzerland and enjoys it in winter. Loves running with baby Daniela in a jogging stroller. Daniela motivates her upskilling and return to work. Do not infer family ages, dates or other private details.
Education: ${copy.education.map(row => `${row[1]}, ${row[2]}`).join("; ")}. Salesforce Administrator learning is ongoing, not a completed certification. TindaCo is a prototype in development, not a launched product; AI and Facebook Live features are planned. Other portfolio projects are learning projects and a fictional interactive CRM demo. Languages: ${copy.languageList.map(row => `${row[1]} ${row[0]}`).join("; ")}. Contact: ginelle.doubek@gmail.com; https://www.linkedin.com/in/ginelledoubek/; portfolio https://ginelledoubek.com.`;
  const recentMessages = messages.slice(-6);
  const recent = recentMessages.map((message, index) => ({
    role: message.role,
    text: message.parts.filter(part => part.type === "text").map(part => part.type === "text" ? part.text : "").join(" ").slice(-(index === recentMessages.length - 1 ? 1200 : 250)),
  }));
  const prompt = `Answer the latest visitor question in this conversation: ${JSON.stringify(recent)}`;
  const url = new URL("https://api.shecodes.io/ai/v1/generate");
  url.search = new URLSearchParams({ key, context, prompt }).toString();
  let response: Response;
  try {
    response = await fetch(url, { signal: AbortSignal.any([signal, AbortSignal.timeout(25000)]), cache: "no-store", redirect: "error" });
  } catch {
    throw new Error("AI service connection failed");
  }
  if (!response.ok) throw Object.assign(new Error("AI service unavailable"), { statusCode: response.status });
  const body: unknown = await response.json().catch(() => null);
  const answer = body && typeof body === "object" && "answer" in body ? body.answer : null;
  if (typeof answer !== "string" || !answer.trim()) throw new Error("AI service returned no answer");
  return answer.trim();
}
