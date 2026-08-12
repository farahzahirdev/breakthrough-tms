import { ArrowRight, Phone } from "lucide-react";
import { copy } from "@/content/copy";
import { site } from "@/content/site";
import { Button } from "./Button";
import { Reveal } from "./Reveal";

export function FinalCta() {
  return (
    <section aria-labelledby="final-cta-heading" className="bt-wallpaper bg-bt-ink py-16 sm:py-20 lg:py-24">
      <div className="bt-wallpaper-inner relative z-10 mx-auto max-w-content px-4 text-center sm:px-6 lg:max-w-3xl lg:px-8">
        <Reveal>
          <p className="section-eyebrow section-eyebrow-light mx-auto">{site.name}</p>
          <h2 id="final-cta-heading" className="mt-4 !text-[#fdfcf9]">
            {copy.finalCta.headline}
          </h2>
          <p className="mx-auto mt-4 text-base leading-relaxed text-bt-cta-text sm:text-lg">
            {copy.finalCta.body}
          </p>

          <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
            <Button href={site.routes.bookConsult} className="!px-8">
              {copy.finalCta.primaryCta}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
            <Button href={site.routes.qualify} variant="ghost-light">
              {copy.finalCta.secondaryCta}
            </Button>
            <Button href={site.phoneHref} variant="ghost-light">
              <Phone className="h-4 w-4" aria-hidden />
              {copy.hero.callCta} {site.phone}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
