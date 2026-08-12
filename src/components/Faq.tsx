"use client";

import { useId, useState } from "react";
import { copy } from "@/content/copy";
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
      <div
        id={panelId}
        className="faq-panel"
        role="region"
        aria-hidden={!open}
      >
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
        <Reveal>
          <SectionHeader eyebrow={copy.faq.eyebrow} headline={copy.faq.headline} />
        </Reveal>

        <Reveal delay={80}>
          <div className="faq-list mx-auto mt-12 max-w-3xl">
            {copy.faq.items.map((item) => (
              <FaqItem key={item.q} question={item.q} answer={item.a} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
