import { ArrowUpRight, ChefHat, Clock3, CloudRain, CloudSun, Map, Puzzle } from 'lucide-react';
import { otherProjectLinks, projectLinks } from '@/lib/portfolio-content';
import { portfolioCopy, type Language } from '@/lib/portfolio-copy';

const projectIcons = [Clock3, CloudSun, CloudRain, ChefHat, Map, Puzzle];

export function ProjectGrid({ lang }: { lang: Language }) {
  const c = portfolioCopy[lang];
  return (
    <>
      <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {c.projects.map(([title, description, technology], index) => {
          const project = projectLinks[index];
          if (!project) return null;
          const Icon = projectIcons[index] ?? Puzzle;
          return (
            <article key={project.id} className="project-card flex flex-col rounded-lg border border-border bg-card p-5">
              <Icon className="size-6 text-primary" aria-hidden="true" />
              <h3 className="mt-5 font-sans text-lg font-semibold">{title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
              <p className="mt-4 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground"><span className="font-semibold text-foreground">{c.projectTech}:</span> {technology}</p>
              <a href={project.url} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline">{c.projectLaunch}<ArrowUpRight className="size-4" /></a>
            </article>
          );
        })}
      </div>
      <div className="mt-9 border-t border-border pt-6">
        <h3 className="font-sans text-sm font-semibold">{c.otherProjectsTitle}</h3>
        <ul className="mt-4 grid gap-3 md:grid-cols-3">{otherProjectLinks.map(project => <li key={project.id}><a href={project.url} target="_blank" rel="noreferrer" className="flex items-center justify-between gap-3 rounded-md border border-border bg-background px-4 py-3 text-xs font-medium transition-colors hover:border-primary hover:text-primary">{project.title}<ArrowUpRight className="size-4 shrink-0" /></a></li>)}</ul>
      </div>
    </>
  );
}
