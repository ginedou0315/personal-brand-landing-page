import { createUIMessageStream, createUIMessageStreamResponse, type UIMessage } from "ai";
import { getPortfolioGuideAnswer } from "@/lib/ginny-guide";
import type { Language } from "@/lib/portfolio-copy";

export function createPortfolioGuideResponse(messages: UIMessage[], language: Language) {
  const questions = messages.filter((message) => message.role === "user").map((message) =>
    message.parts.filter((part) => part.type === "text").map((part) => part.type === "text" ? part.text : "").join("\n"),
  );
  const answer = getPortfolioGuideAnswer(questions.at(-1) ?? "", language, questions.slice(0, -1));
  const id = crypto.randomUUID();
  return createUIMessageStreamResponse({
    headers: { "Cache-Control": "no-store", "X-Ginny-Mode": "portfolio-guide" },
    stream: createUIMessageStream({
      execute({ writer }) {
        writer.write({ type: "start", messageId: crypto.randomUUID() });
        writer.write({ type: "text-start", id });
        writer.write({ type: "text-delta", id, delta: answer });
        writer.write({ type: "text-end", id });
        writer.write({ type: "finish", finishReason: "stop" });
      },
    }),
  });
}
