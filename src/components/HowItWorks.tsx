import { copy } from "@/content/copy";
import { Reveal, StaggerGrid } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function HowItWorks() {
  return (
    <section className="bt-section bt-section-alt">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader eyebrow={copy.howItWorks.eyebrow} headline={copy.howItWorks.headline} />
        </Reveal>

        <StaggerGrid className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {copy.howItWorks.steps.map((step) => (
            <article key={step.step} className="bt-card relative h-full !p-6">
              <span className="font-heading text-3xl font-semibold text-bt-accent">{step.step}</span>
              <h3 className="mt-3">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-bt-body">{step.body}</p>
            </article>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
