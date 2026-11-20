import { cvAsset } from "@/lib/site-assets";
import { describe, expect, it } from "vitest";
import { certifications, otherProjectLinks, projectLinks } from "@/lib/portfolio-content";
import { languages, portfolioCopy, type Language } from "@/lib/portfolio-copy";

describe("Existing website content retained in the new portfolio", () => {
  it("keeps all nine unique certification credentials", () => {
    expect(certifications).toHaveLength(9);
    expect(new Set(certifications.map((certification) => certification.url)).size).toBe(9);
    for (const certification of certifications) {
      expect(certification.url.startsWith("https://")).toBe(true);
      expect(certification.image.length).toBeGreaterThan(0);
    }
  });

  it("keeps all six featured projects and three additional project links", () => {
    expect(projectLinks).toHaveLength(6);
    expect(otherProjectLinks).toHaveLength(3);
  });

  it("keeps the uploaded CV as a PDF download with a label in every language", () => {
    expect(cvAsset.url).toMatch(/\.pdf$/);
    for (const lang of Object.keys(languages) as Language[]) {
      expect(portfolioCopy[lang].downloadCv.length).toBeGreaterThan(0);
    }
  });

  it.each(Object.keys(languages) as Language[])(
    "keeps the complete résumé and project collections in %s",
    (lang) => {
      const copy = portfolioCopy[lang];
      expect(copy.experience).toHaveLength(4);
      expect(copy.education).toHaveLength(4);
      expect(copy.projects).toHaveLength(projectLinks.length);
      expect(copy.languageList).toHaveLength(3);
      expect(copy.hobbies).toHaveLength(9);
      expect(copy.nav).toHaveLength(5);
    },
  );
});
