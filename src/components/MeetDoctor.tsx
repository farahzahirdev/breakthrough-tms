import Image from "next/image";
import { GraduationCap, Languages } from "lucide-react";
import { copy } from "@/content/copy";
import { site } from "@/content/site";
import { Button } from "./Button";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function MeetDoctor() {
  return (
    <section id="meet-doctor" className="bt-section bt-section-alt">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="doctor-layout">
          <Reveal className="doctor-photo-wrap order-1 lg:order-2">
            <figure className="doctor-photo">
              <div className="doctor-photo-frame">
                <Image
                  src={site.images.drSaakyan}
                  alt="Dr. Artur Saakyan, MD, psychiatrist at Breakthrough TMS"
                  fill
                  className="object-cover object-top transition-transform duration-700 ease-brand hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 100vw, 560px"
                  priority={false}
                />
              </div>
              <figcaption className="doctor-caption">Dr. Artur Saakyan, MD</figcaption>
            </figure>
          </Reveal>

          <Reveal className="doctor-copy order-2 space-y-5 lg:order-1" delay={80}>
            <SectionHeader
              eyebrow={copy.meetDoctor.eyebrow}
              headline={copy.meetDoctor.headline}
              body={copy.meetDoctor.intro}
              splitOnDesktop
              className="!mx-0 !max-w-none !text-left"
            />

            <p className="doctor-highlight">{copy.meetDoctor.highlight}</p>

            <ul className="doctor-credentials">
              {copy.meetDoctor.credentials.map((item) => (
                <li key={item}>
                  <GraduationCap className="h-4 w-4 shrink-0 text-bt-accent-ink" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
              <li>
                <Languages className="h-4 w-4 shrink-0 text-bt-accent-ink" aria-hidden />
                <span>{copy.meetDoctor.languages}</span>
              </li>
            </ul>

            <div className="flex justify-center pt-1 lg:justify-start">
              <Button href={site.routes.bookConsult}>Schedule a Free Consultation</Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
