import { createFileRoute } from "@tanstack/react-router";
import { NextPage, PageHeader, SiteShell } from "@/components/SiteShell";
import { ResumeBlock, CertificationsSection } from "@/components/PortfolioSections";
import { languageSearch } from "@/lib/portfolio-copy";
import { pageHead, siteCopy } from "@/lib/site-pages";

export const Route = createFileRoute("/resume")({
  validateSearch: languageSearch,
  head: ({ match }) => pageHead("resume", match.search.lang),
  component: Page,
});

function Page() {
  const { lang = "en" } = Route.useSearch();

  const s = siteCopy[lang];
  return (
    <SiteShell page="resume">
      <PageHeader kicker="Ginelle Doubek" title={s.pages.resume.label} />
      <ResumeBlock lang={lang} />
      <CertificationsSection lang={lang} />
      <NextPage to="projects" />
    </SiteShell>
  );
}
