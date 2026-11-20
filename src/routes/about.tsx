import { createFileRoute } from "@tanstack/react-router";
import { NextPage, PageHeader, SiteShell } from "@/components/SiteShell";
import { StorySection, DirectionSection, PersonalSection } from "@/components/PortfolioSections";
import { languageSearch } from "@/lib/portfolio-copy";
import { pageHead, siteCopy } from "@/lib/site-pages";

export const Route = createFileRoute("/about")({
  validateSearch: languageSearch,
  head: ({ match }) => pageHead("about", match.search.lang),
  component: Page,
});

function Page() {
  const { lang = "en" } = Route.useSearch();

  const s = siteCopy[lang];
  return (
    <SiteShell page="about">
      <PageHeader kicker="Ginelle Doubek" title={s.pages.about.label} />
      <StorySection lang={lang} />
      <DirectionSection lang={lang} />
      <PersonalSection lang={lang} />
      <NextPage to="contact" />
    </SiteShell>
  );
}
