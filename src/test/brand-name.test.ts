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

describe("Ginelle AI profile feed", () => {
  it.each(langList)("adds the profile and response rules in %s", (lang) => {
    const instructions = buildGinnyInstructions(lang);
    expect(instructions).toContain("Ginelle Doubek AI");
    expect(instructions).toContain("more than 15 years");
    expect(instructions).toContain("International Rice Research Institute");
    expect(instructions).toContain("maximum of 5 sentences");
    expect(instructions).toContain("🫶");
  });
});
