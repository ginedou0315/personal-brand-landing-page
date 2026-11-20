import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { siteAssets } from "@/lib/site-assets";

describe("Portable website assets", () => {
  it.each(Object.entries(siteAssets))("ships a real public file for %s", (_name, asset) => {
    expect(asset.url).not.toContain("/__l5e/");
    const file = readFileSync(resolve(process.cwd(), "public", asset.url.slice(1)));
    expect(file.length).toBeGreaterThan(100);
    if (asset.url.endsWith(".pdf")) {
      expect(file.subarray(0, 4).toString()).toBe("%PDF");
    } else {
      expect(file.subarray(0, 4).toString()).toBe("RIFF");
      expect(file.subarray(8, 12).toString()).toBe("WEBP");
    }
  });
});

