import { Clock, MapPin, Navigation, ParkingCircle } from "lucide-react";
import { copy } from "@/content/copy";
import { site } from "@/content/site";
import { Button } from "./Button";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function Location() {
  return (
    <section id="location" className="bt-section">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            eyebrow={copy.location.eyebrow}
            headline={copy.location.headline}
            body={copy.location.body}
          />
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <Reveal className="space-y-5 text-center lg:text-left">
            <div className="bt-card !p-5">
              <div className="flex items-start gap-4">
                <span className="bt-icon-badge shrink-0">
                  <MapPin className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <p className="font-semibold text-bt-ink">{site.name}</p>
                  {site.addressLines.map((line) => (
                    <p key={line} className="text-sm text-bt-body">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className="bt-card !p-5">
              <div className="flex items-start gap-4">
                <span className="bt-icon-badge shrink-0">
                  <Clock className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <p className="font-semibold text-bt-ink">Hours</p>
                  <p className="text-sm text-bt-body">{site.hours.display}</p>
                </div>
              </div>
            </div>

            <div className="bt-card !p-5">
              <div className="flex items-start gap-4">
                <span className="bt-icon-badge shrink-0">
                  <ParkingCircle className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <p className="font-semibold text-bt-ink">Parking</p>
                  <p className="text-sm text-bt-body">{copy.location.parking}</p>
                  <p className="mt-1 text-sm text-bt-body">{site.parkingNote}</p>
                </div>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-bt-body">{copy.location.serving}</p>

            <div className="flex flex-wrap gap-2">
              {site.serviceAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-bt-line bg-bt-sand px-3 py-1 text-xs font-semibold text-bt-ink-2 transition-colors duration-300 hover:border-bt-accent hover:text-bt-accent-ink"
                >
                  {area}
                </span>
              ))}
            </div>

            <div className="flex justify-center lg:justify-start">
              <Button
                href={site.mapsUrl}
                variant="secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Navigation className="h-4 w-4" aria-hidden />
                Get Directions
              </Button>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="overflow-hidden rounded-brand border border-bt-line shadow-card transition-shadow duration-300 hover:shadow-lift">
              <iframe
                src={site.mapsEmbedUrl}
                title={`${site.name} location map`}
                className="block h-[420px] w-full border-0 lg:h-full lg:min-h-[480px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
