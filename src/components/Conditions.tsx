import { Brain, CloudRain, Flame, Heart, Users } from "lucide-react";
import { copy } from "@/content/copy";
import { Reveal, StaggerGrid } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const conditionIcons = [CloudRain, Heart, Users, Brain, Flame];

export function Conditions() {
  return (
    <section id="conditions" className="bt-section">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            eyebrow={copy.conditions.eyebrow}
            headline={copy.conditions.headline}
            body={copy.conditions.subheadline}
          />
        </Reveal>

        <StaggerGrid className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {copy.conditions.items.map((item, i) => {
            const Icon = conditionIcons[i];
            return (
              <article key={item.title} className="group bt-card flex h-full flex-col !p-0 overflow-hidden">
                <div className="w-full border-b border-bt-line bg-bt-sand px-6 py-5 transition-colors duration-300 group-hover:bg-[rgba(227,183,200,0.12)]">
                  <div className="flex items-start justify-between gap-3">
                    <span className="bt-icon-badge !bg-bt-card">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <span className="rounded-full bg-[rgba(168,78,111,0.1)] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-bt-accent-ink">
                      {item.tag}
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h3>{item.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-bt-body">{item.body}</p>
                </div>
              </article>
            );
          })}
        </StaggerGrid>

        <Reveal delay={200}>
          <div className="mt-8 overflow-hidden rounded-brand bg-bt-ink p-8 text-white shadow-lift sm:p-10">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="section-eyebrow section-eyebrow-light">Accelerated Option</p>
                <h3 className="mt-3 !text-[#fdfcf9]">{copy.conditions.accelerated.title}</h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-bt-lavender">
                  {copy.conditions.accelerated.body}
                </p>
              </div>
              <div className="shrink-0 rounded-brand border border-[rgba(253,251,247,0.2)] bg-[rgba(253,251,247,0.08)] px-6 py-4 text-center">
                <p className="font-heading text-3xl font-semibold text-bt-rose">6</p>
                <p className="text-xs font-semibold uppercase tracking-wider text-bt-lavender-muted">
                  Treatment days
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
