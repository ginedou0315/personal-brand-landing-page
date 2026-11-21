import { createFileRoute } from "@tanstack/react-router";
import { convertToModelMessages, createIdGenerator, type UIMessage } from "ai";
import { buildGinnyInstructions } from "@/lib/ai/ginny-knowledge.server";
import { createResponsesCall } from "@/lib/ai/responses.server";
import { languageSearch } from "@/lib/portfolio-copy";

const MAX_MESSAGES = 40;
const MAX_QUESTION_LENGTH = 1200;

function textParts(message: UIMessage) {
  return message.parts.filter(
    (part): part is Extract<UIMessage["parts"][number], { type: "text" }> =>
      part.type === "text" && typeof part.text === "string" && part.text.trim().length > 0,
  );
}

function normalizeMessages(value: unknown): UIMessage[] | null {
  if (!Array.isArray(value) || value.length === 0 || value.length > MAX_MESSAGES) return null;
  const normalized: UIMessage[] = [];
  for (const candidate of value) {
    if (!candidate || typeof candidate !== "object") return null;
    const message = candidate as UIMessage;
    if (
      typeof message.id !== "string" ||
      (message.role !== "user" && message.role !== "assistant") ||
      !Array.isArray(message.parts)
    ) {
      return null;
    }
    if (message.role === "user" && !message.id) return null;
    const parts = textParts(message).map((part) => ({
      type: "text" as const,
      text: part.text.slice(0, 12000),
    }));
    if (parts.length === 0) continue;
    normalized.push({ id: message.id || crypto.randomUUID(), role: message.role, parts });
  }
  const last = normalized.at(-1);
  if (!last || last.role !== "user") return null;
  const question = textParts(last)
    .map((part) => part.text)
    .join("\n")
    .trim();
  if (!question || question.length > MAX_QUESTION_LENGTH) return null;
  return normalized;
}

function safeStreamError(error: unknown) {
  const status =
    typeof error === "object" && error !== null && "statusCode" in error
      ? Number((error as { statusCode?: unknown }).statusCode)
      : 0;
  if (status === 402)
    return "AI usage is temporarily paused because credits need attention. Please contact the site owner.";
  if (status === 403)
    return "Ginny’s AI is temporarily unavailable. Please try again later or contact Ginelle directly.";
  if (status === 429)
    return "Ginny’s AI is receiving too many questions right now. Please wait a moment and try again.";
  if (status >= 500) return "Ginny’s AI is temporarily unavailable. Please try again shortly.";
  if (error instanceof Error && error.name === "AbortError") return "Stopped.";
  return "I couldn’t answer that question. Please try again or contact Ginelle directly.";
}

export const Route = createFileRoute("/api/ginny-chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const body = (await request.json().catch(() => null)) as {
          messages?: unknown;
          language?: unknown;
        } | null;
        const messages = normalizeMessages(body?.messages);
        const language = languageSearch({ lang: body?.language }).lang;
        if (!messages || !language) {
          return Response.json(
            { error: "Please enter a question of up to 1,200 characters." },
            { status: 400 },
          );
        }
        const apiKey = process.env["OPENAI_API_KEY"];
        if (!apiKey) {
          console.error("Ginny chat is missing its AI key.");
          return Response.json({ error: "Ginny’s AI is not configured yet." }, { status: 500 });
        }

        const modelMessages = await convertToModelMessages(messages);
        const { result, wrapResponse } = createResponsesCall(
          {
            baseURL: process.env["OPENAI_BASE_URL"] || "https://api.openai.com/v1",
            apiKey,
            model: process.env["OPENAI_MODEL"] || "gpt-4.1-mini",
          },
          modelMessages,
          buildGinnyInstructions(language),
        );

        const response = result.toUIMessageStreamResponse({
          originalMessages: messages,
          generateMessageId: createIdGenerator({ prefix: "msg", size: 16 }),
          sendReasoning: true,
          onError: safeStreamError,
        });
        return wrapResponse(response);
      },
    },
  },
});
