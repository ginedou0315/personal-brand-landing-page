import { describe, expect, it } from "vitest";
import { buildGinnyInstructions } from "@/lib/ai/ginny-knowledge.server";
import { languages, portfolioCopy, type Language } from "@/lib/portfolio-copy";

const langList = Object.keys(languages) as Language[];

describe("Product name is TindaCo", () => {
  it.each(langList)("names the project TindaCo in %s", (lang) => {
    expect(portfolioCopy[lang].projectTitle).toBe("TindaCo");
  });

  it("keeps the old TindaFlow name out of every language", () => {
    for (const lang of langList) {
      expect(JSON.stringify(portfolioCopy[lang])).not.toMatch(/TindaFlow/i);
    }
  });

  it.each(langList)("tells Ginny's AI about TindaCo in %s", (lang) => {
    const instructions = buildGinnyInstructions(lang);
    expect(instructions).toContain("TindaCo");
    expect(instructions).not.toMatch(/TindaFlow/i);
  });
});
