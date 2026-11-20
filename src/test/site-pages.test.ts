import { describe, expect, it } from "vitest";
import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { routeTree } from "@/routeTree.gen";
import { pageOrder, pagePaths } from "@/lib/site-pages";

describe("multi-page site", () => {
  it("has five pages that each match a real route", () => {
    expect(pageOrder).toEqual(["home", "resume", "projects", "about", "contact"]);
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
    for (const key of pageOrder) {
      expect(router.matchRoutes(pagePaths[key]).at(-1)?.routeId).not.toBe(rootRouteId);
    }
  });
});
