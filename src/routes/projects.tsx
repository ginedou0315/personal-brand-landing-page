import { createFileRoute } from "@tanstack/react-router";
import { NextPage, PageHeader, SiteShell } from "@/components/SiteShell";
import { TindaCoSection, ProjectsSection, CrmDemoSection } from "@/components/PortfolioSections";
import { languageSearch } from "@/lib/portfolio-copy";
import { pageHead, siteCopy } from "@/lib/site-pages";

export const Route = createFileRoute("/projects")({
  validateSearch: languageSearch,
  head: ({ match }) => pageHead("projects", match.search.lang),
  component: Page,
});

function Page() {
  const { lang = "en" } = Route.useSearch();

  const s = siteCopy[lang];
  return (
    <SiteShell page="projects">
      <PageHeader kicker="Ginelle Doubek" title={s.pages.projects.label} />
      <TindaCoSection lang={lang} />
      <ProjectsSection lang={lang} />
      <CrmDemoSection lang={lang} />
      <NextPage to="about" />
    </SiteShell>
  );
}
