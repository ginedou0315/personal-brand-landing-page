import { createFileRoute } from "@tanstack/react-router";
import { NextPage, PageHeader, SiteShell } from "@/components/SiteShell";
import { ContactSection } from "@/components/PortfolioSections";
import { languageSearch } from "@/lib/portfolio-copy";
import { pageHead, siteCopy } from "@/lib/site-pages";

export const Route = createFileRoute("/contact")({
  validateSearch: languageSearch,
  head: ({ match }) => pageHead("contact", match.search.lang),
  component: Page,
});

function Page() {
  const { lang = "en" } = Route.useSearch();

  const s = siteCopy[lang];
  return (
    <SiteShell page="contact">
      <PageHeader kicker="Ginelle Doubek" title={s.pages.contact.label} />
      <ContactSection lang={lang} />
    </SiteShell>
  );
}
