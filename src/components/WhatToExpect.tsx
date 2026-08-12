import { copy } from "@/content/copy";
import { Reveal, StaggerGrid } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function WhatToExpect() {
  return (
    <section className="bt-section bt-section-alt">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader eyebrow={copy.whatToExpect.eyebrow} headline={copy.whatToExpect.headline} />
        </Reveal>

        <StaggerGrid className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {copy.whatToExpect.steps.map((step, i) => (
            <article key={step.title} className="bt-card relative">
              <span className="font-heading text-3xl font-semibold text-bt-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-bt-body">{step.body}</p>
            </article>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
