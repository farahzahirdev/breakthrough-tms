import { Clock, Focus, MapPin, ShieldCheck, Zap } from "lucide-react";
import { copy } from "@/content/copy";
import { Reveal, StaggerGrid } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function WhyChoose() {
  const icons = [Focus, ShieldCheck, Clock, Zap, Zap, MapPin];

  return (
    <section className="bt-section bt-section-alt">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            eyebrow={copy.whyChoose.eyebrow}
            headline={copy.whyChoose.headline}
            body={copy.whyChoose.body}
          />
        </Reveal>

        <StaggerGrid className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {copy.whyChoose.cards.map((card, i) => {
            const Icon = icons[i] ?? Focus;
            return (
              <article key={card.title} className="bt-card h-full">
                <span className="bt-icon-badge">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-4">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-bt-body">{card.body}</p>
              </article>
            );
          })}
        </StaggerGrid>
      </div>
    </section>
  );
}
