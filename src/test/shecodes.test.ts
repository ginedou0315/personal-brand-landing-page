import { afterEach, describe, expect, it, vi } from "vitest";
import type { UIMessage } from "ai";
import { getSheCodesAnswer } from "@/lib/ai/shecodes.server";

const message = (text: string, role: "user" | "assistant" = "user"): UIMessage => ({ id: crypto.randomUUID(), role, parts: [{ type: "text", text }] });
afterEach(() => vi.unstubAllGlobals());

describe("SheCodes server integration", () => {
  it("encodes questions safely and carries bounded conversation context", async () => {
    const fetchMock = vi.fn().mockResolvedValue(Response.json({ answer: "I enjoy Excel." }));
    vi.stubGlobal("fetch", fetchMock);
    const answer = await getSheCodesAnswer([message("Tell me about Excel"), message("I enjoy automating tasks", "assistant"), message("And reporting & CRM? #flows")], "en", "test-key", new AbortController().signal);
    expect(answer).toBe("I enjoy Excel.");
    const url = new URL(fetchMock.mock.calls[0][0]);
    expect(url.origin).toBe("https://api.shecodes.io");
    expect(url.pathname).toBe("/ai/v1/generate");
    expect(url.searchParams.get("prompt")).toContain("And reporting & CRM? #flows");
    expect(url.searchParams.get("prompt")).toContain("Tell me about Excel");
    expect(url.searchParams.get("context")).toContain("Daniela");
    expect(url.searchParams.get("context")).toContain("not a completed certification");
    expect(fetchMock.mock.calls[0][1].redirect).toBe("error");
  });
  it("does not propagate a credential-bearing URL in connection errors", async () => {
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new Error("https://example.test/?key=test-secret")));
    await expect(getSheCodesAnswer([message("Hello")], "en", "test-secret", new AbortController().signal)).rejects.toThrow("AI service connection failed");
  });
  it.each([Response.json({ error: "bad key" }, { status: 401 }), Response.json({ answer: null })])("handles a rejected key or malformed response", async response => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(response));
    await expect(getSheCodesAnswer([message("Hi")], "en", "test-key", new AbortController().signal)).rejects.toThrow();
  });
});
