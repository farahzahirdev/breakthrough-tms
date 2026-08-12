import Image from "next/image";
import { Brain, Clock, HeartPulse } from "lucide-react";
import { copy } from "@/content/copy";
import { site } from "@/content/site";
import { Button } from "./Button";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const pointIcons = [HeartPulse, Clock, Brain];

export function WhatIsTms() {
  return (
    <section id="tms" className="bt-section">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="relative order-2 lg:order-1">
            <div className="overflow-hidden rounded-brand shadow-card">
              <div className="relative aspect-[4/5]">
                <Image
                  src={site.images.patientInRoom}
                  alt="Patient receiving BrainsWay Deep TMS treatment"
                  fill
                  className="object-cover object-center transition-transform duration-700 ease-brand hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 100vw, 560px"
                />
              </div>
            </div>
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-brand border border-bt-line bg-bt-card p-4 shadow-lift transition-transform duration-300 hover:-translate-y-1 lg:left-auto lg:translate-x-0 lg:-right-6">
              <p className="text-xs font-bold uppercase tracking-wider text-bt-accent-ink">Powered by</p>
              <p className="font-heading text-lg font-semibold text-bt-ink">BrainsWay 104</p>
            </div>
          </Reveal>

          <Reveal className="order-1 space-y-8 lg:order-2" delay={100}>
            <SectionHeader
              eyebrow={copy.whatIsTms.eyebrow}
              headline={copy.whatIsTms.headline}
              body={copy.whatIsTms.body}
              splitOnDesktop
              className="!mx-0 !max-w-none"
            />

            <ul className="space-y-4">
              {copy.whatIsTms.points.map((point, i) => {
                const Icon = pointIcons[i];
                return (
                  <li
                    key={point.title}
                    className="flex flex-col items-center gap-3 text-center sm:flex-row sm:items-start sm:gap-4 sm:text-left lg:flex-row lg:items-start lg:text-left"
                  >
                    <span className="bt-icon-badge shrink-0">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="font-semibold text-bt-ink">{point.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-bt-body">{point.body}</p>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="flex justify-center lg:justify-start">
              <Button href={site.routes.bookConsult}>{copy.whatIsTms.cta}</Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
