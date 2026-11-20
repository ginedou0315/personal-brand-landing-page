import { createFileRoute } from "@tanstack/react-router";
import { NextPage, SiteShell } from "@/components/SiteShell";
import { Capabilities, GinnySection, HomeHero } from "@/components/PortfolioSections";
import { languageSearch } from "@/lib/portfolio-copy";
import { pageHead } from "@/lib/site-pages";

export const Route = createFileRoute("/")({
  validateSearch: languageSearch,
  head: ({ match }) => pageHead("home", match.search.lang),
  component: Index,
});

function Index() {
  const { lang = "en" } = Route.useSearch();
  return (
    <SiteShell page="home">
      <HomeHero lang={lang} />
      <GinnySection lang={lang} />
      <Capabilities lang={lang} />
      <NextPage to="resume" />
    </SiteShell>
  );
}
