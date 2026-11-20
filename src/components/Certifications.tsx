import { BadgeCheck, ArrowUpRight } from 'lucide-react';
import { certifications } from '@/lib/portfolio-content';
import { portfolioCopy, type Language } from '@/lib/portfolio-copy';

export function Certifications({ lang }: { lang: Language }) {
  const c = portfolioCopy[lang];
  return (
    <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {certifications.map(certification => (
        <a key={certification.id} href={certification.url} target="_blank" rel="noreferrer" className="certification-card group overflow-hidden rounded-lg border border-border bg-card" aria-label={`${certification.title} — ${c.credentialLink}`}>
          <div className="flex aspect-[3/2] items-center justify-center overflow-hidden border-b border-border bg-secondary/35 p-2">
            <img src={certification.image} alt={certification.title} width={certification.width} height={certification.height} loading="lazy" decoding="async" className="size-full object-contain transition-transform duration-300 group-hover:scale-[1.02]" />
          </div>
          <div className="p-4">
            <BadgeCheck className="size-5 text-primary" aria-hidden="true" />
            <h3 className="mt-3 font-sans text-sm font-semibold leading-snug">{certification.title}</h3>
            <p className="mt-2 text-xs text-muted-foreground">{certification.issuer}</p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-primary underline-offset-4 group-hover:underline">{c.credentialLink}<ArrowUpRight className="size-3.5" /></span>
          </div>
        </a>
      ))}
    </div>
  );
}
