import { useState } from "react";
import { BriefcaseBusiness, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { portfolioCopy, type Language } from "@/lib/portfolio-copy";

export function ResumeSection({ lang }: { lang: Language }) {
  const c = portfolioCopy[lang];
  const [active, setActive] = useState<"experience" | "education">("experience");
  const items = active === "experience" ? c.experience : c.education;
  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label={c.resumeTitle}>
        <Button
          id="experience-tab"
          role="tab"
          aria-selected={active === "experience"}
          aria-controls="resume-panel"
          variant={active === "experience" ? "default" : "outline"}
          onClick={() => setActive("experience")}
        >
          <BriefcaseBusiness />
          {c.experienceTab}
        </Button>
        <Button
          id="education-tab"
          role="tab"
          aria-selected={active === "education"}
          aria-controls="resume-panel"
          variant={active === "education" ? "default" : "outline"}
          onClick={() => setActive("education")}
        >
          <GraduationCap />
          {c.educationTab}
        </Button>
      </div>
      <div id="resume-panel" role="tabpanel" aria-labelledby={`${active}-tab`} className="mt-8">
        {items.map(([years, title, organization, description]) => (
          <article
            key={`${years}-${title}`}
            className="grid gap-3 border-t border-border py-6 sm:grid-cols-[9rem_1fr] sm:gap-7"
          >
            <p className="text-xs font-semibold text-primary">{years}</p>
            <div>
              <h3 className="font-sans text-lg font-semibold">{title}</h3>
              <p className="mt-1 text-sm font-medium text-muted-foreground">{organization}</p>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
