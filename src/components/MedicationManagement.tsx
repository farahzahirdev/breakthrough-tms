import { CheckCircle2, Pill } from "lucide-react";
import { copy } from "@/content/copy";
import { site } from "@/content/site";
import { Button } from "./Button";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function MedicationManagement() {
  return (
    <section id="medication" className="bt-section">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="rounded-brand bg-bt-ink p-8 text-white shadow-lift transition-transform duration-500 ease-brand hover:-translate-y-1 sm:p-10">
              <span className="inline-flex rounded-brand bg-[rgba(253,251,247,0.12)] p-4">
                <Pill className="h-8 w-8 text-bt-rose" aria-hidden />
              </span>
              <h3 className="mt-6 !text-[#fdfcf9]">Comprehensive psychiatric support</h3>
              <p className="mt-3 text-sm leading-relaxed text-bt-lavender">
                Medication management works alongside Deep TMS, not instead of it, for adults
                navigating complex depression and related conditions.
              </p>
            </div>
          </Reveal>

          <Reveal className="space-y-8" delay={100}>
            <SectionHeader
              eyebrow={copy.medication.eyebrow}
              headline={copy.medication.headline}
              body={copy.medication.body}
              splitOnDesktop
              className="!mx-0 !max-w-none"
            />

            <ul className="space-y-3">
              {copy.medication.points.map((point) => (
                <li
                  key={point}
                  className="flex flex-col items-center gap-2 text-center sm:flex-row sm:items-start sm:gap-3 sm:text-left"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-bt-accent" aria-hidden />
                  <span className="text-sm leading-relaxed text-bt-body">{point}</span>
                </li>
              ))}
            </ul>

            <div className="flex justify-center lg:justify-start">
              <Button href={site.routes.qualify}>{copy.medication.cta}</Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
