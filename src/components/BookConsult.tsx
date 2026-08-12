import { Phone } from "lucide-react";
import { copy } from "@/content/copy";
import { site } from "@/content/site";
import { Button } from "./Button";
import { GhlCalendarEmbed } from "./GhlCalendarEmbed";
import { Reveal } from "./Reveal";

export function BookConsult() {
  return (
    <section id="book-consult" className="bt-section bt-section-alt" aria-labelledby="book-consult-heading">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="bt-embed-layout">
          <Reveal className="bt-embed-copy lg:sticky lg:top-28">
            <p className="section-eyebrow justify-center lg:justify-start">{copy.bookConsult.eyebrow}</p>
            <h2 id="book-consult-heading" className="mt-3 text-center lg:text-left">
              {copy.bookConsult.headline}
            </h2>
            <p className="text-lead mx-auto mt-4 max-w-xl text-center lg:mx-0 lg:text-left">
              {copy.bookConsult.body}
            </p>
            <div className="mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
              <Button href={site.phoneHref} variant="secondary">
                <Phone className="h-4 w-4" aria-hidden />
                {copy.bookConsult.callPrompt} {site.phone}
              </Button>
              <Button href={site.routes.qualify} variant="secondary">
                {copy.bookConsult.inquiryLink}
              </Button>
            </div>
          </Reveal>

          <div className="animate-fade-in" style={{ animationDelay: "100ms" }}>
            <div className="bt-embed-panel">
              <GhlCalendarEmbed />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
