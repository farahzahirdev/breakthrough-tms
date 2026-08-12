"use client";

import Image from "next/image";
import { useId, useState } from "react";
import { copy } from "@/content/copy";
import { site } from "@/content/site";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className={`faq-item ${open ? "is-open" : ""}`}>
      <button
        type="button"
        className="faq-trigger"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((o) => !o)}
      >
        <span className="faq-question">{question}</span>
        <span className="faq-icon" aria-hidden>
          +
        </span>
      </button>
      <div id={panelId} className="faq-panel" role="region" aria-hidden={!open}>
        <div className="faq-panel-inner">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
}

export function Faq() {
  return (
    <section id="faq" className="bt-section bt-section-alt">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="bt-embed-layout">
          <Reveal className="faq-split-media lg:sticky lg:top-28 lg:self-start">
            <div className="overflow-hidden rounded-brand shadow-card">
              <div className="relative aspect-[3/2] w-full">
                <Image
                  src={site.images.faqOffice}
                  alt="Breakthrough TMS reception area in Glendale"
                  fill
                  className="object-cover object-center transition-transform duration-700 ease-brand hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 100vw, 540px"
                />
              </div>
            </div>
          </Reveal>

          <Reveal className="faq-split-content" delay={100}>
            <SectionHeader
              eyebrow={copy.faq.eyebrow}
              headline={copy.faq.headline}
              splitOnDesktop
              className="!mx-0 !max-w-none"
            />

            <div className="faq-list mt-8 lg:mt-10">
              {copy.faq.items.map((item) => (
                <FaqItem key={item.q} question={item.q} answer={item.a} />
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
