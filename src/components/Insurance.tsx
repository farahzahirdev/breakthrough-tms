import Image from "next/image";

import { copy } from "@/content/copy";
import { site } from "@/content/site";
import { Button } from "./Button";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function Insurance() {
  const payers = copy.insurance.payers;
  const marqueePayers = [...payers, ...payers];

  return (
    <section id="insurance" className="bt-wallpaper bg-bt-ink py-14 sm:py-16">
      <div className="bt-wallpaper-inner mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            eyebrow={copy.insurance.eyebrow}
            headline={copy.insurance.headline}
            body={copy.insurance.body}
            dark
          />
        </Reveal>

        <div className="payer-marquee-wrap" aria-label="Insurance plans we work with">
          <div className="payer-marquee-track">
            {marqueePayers.map((payer, i) => (
              <div
                key={`${payer.alt}-${i}`}
                className="payer-pill"
                aria-hidden={i >= payers.length ? true : undefined}
              >
                <Image
                  src={payer.src}
                  alt={i >= payers.length ? "" : payer.alt}
                  width={payer.width}
                  height={payer.height}
                  className={`payer-logo ${payer.size}`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        <Reveal delay={120}>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-bt-lavender-muted">
            {copy.insurance.disclaimer}
          </p>

          <div className="mt-8 flex justify-center">
            <Button href={site.routes.qualify}>{copy.insurance.cta}</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
