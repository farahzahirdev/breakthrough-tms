import { Clock, Mail, Phone } from "lucide-react";
import { copy } from "@/content/copy";
import { site } from "@/content/site";
import { Button } from "./Button";
import { GhlInquiryForm } from "./GhlInquiryForm";
import { Reveal } from "./Reveal";

export function QualifyForm() {
  return (
    <section id="qualify" className="bt-section" aria-labelledby="qualify-heading">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="bt-embed-layout">
          <Reveal className="bt-embed-copy space-y-5 lg:sticky lg:top-28">
            <div>
              <p className="section-eyebrow justify-center lg:justify-start">{copy.qualify.eyebrow}</p>
              <h2 id="qualify-heading" className="mt-3 text-center lg:text-left">
                {copy.qualify.headline}
              </h2>
              <p className="text-lead mx-auto mt-4 max-w-xl text-center lg:mx-0 lg:text-left">
                {copy.qualify.body}
              </p>
            </div>

            <div className="flex justify-center lg:justify-start">
              <Button href={site.routes.bookConsult}>{copy.qualify.bookLink}</Button>
            </div>

            <ul className="bt-contact-list">
              <li>
                <a href={site.phoneHref} className="bt-contact-item group">
                  <span className="bt-icon-badge shrink-0 p-2.5">
                    <Phone className="h-4 w-4" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-bt-muted">
                      Phone
                    </span>
                    <span className="mt-0.5 block font-medium text-bt-ink group-hover:text-bt-accent-ink">
                      {site.phone}
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a href={site.emailHref} className="bt-contact-item group">
                  <span className="bt-icon-badge shrink-0 p-2.5">
                    <Mail className="h-4 w-4" aria-hidden />
                  </span>
                  <span className="pt-2 font-medium text-bt-ink group-hover:text-bt-accent-ink">
                    {site.email}
                  </span>
                </a>
              </li>
              <li>
                <div className="bt-contact-item">
                  <span className="bt-icon-badge shrink-0 p-2.5">
                    <Clock className="h-4 w-4" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-bt-muted">
                      Hours
                    </span>
                    <span className="mt-0.5 block font-medium text-bt-ink">{site.hours.days}</span>
                    <span className="block text-sm text-bt-body">{site.hours.time}</span>
                  </span>
                </div>
              </li>
            </ul>

            <p className="text-center text-sm text-bt-muted lg:text-left">{copy.qualify.trustLine}</p>
          </Reveal>

          <div className="animate-fade-in" style={{ animationDelay: "120ms" }}>
            <div className="bt-form-shell">
              <div className="bt-form-shell-header">
                <p className="font-heading text-lg font-semibold text-bt-ink">{copy.qualify.formTitle}</p>
                <p className="mt-1 text-sm text-bt-body">{copy.qualify.formSubtitle}</p>
              </div>
              <div className="bt-form-shell-body">
                <GhlInquiryForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
