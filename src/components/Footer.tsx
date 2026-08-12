import Image from "next/image";
import { Phone } from "lucide-react";
import { copy } from "@/content/copy";
import { site } from "@/content/site";
import { Button } from "./Button";
import { Reveal } from "./Reveal";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer-accent" aria-hidden />

      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="site-footer-top">
            <div className="site-footer-brand">
              <Image
                src={site.logoFooter}
                alt={site.name}
                width={181}
                height={54}
                className="h-[52px] w-auto"
              />
              <p className="site-footer-tagline">{copy.footer.tagline}</p>
            </div>
            <div className="site-footer-cta">
              <p className="site-footer-cta-text">Ready to see if Deep TMS is right for you?</p>
              <div className="flex flex-wrap gap-3">
                <Button href={site.routes.bookConsult}>Book Free Consultation</Button>
                <Button href={site.phoneHref} variant="secondary-light">
                  <Phone className="h-4 w-4" aria-hidden />
                  {site.phone}
                </Button>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="site-footer-disclaimer">
          <p>{copy.footer.disclaimer}</p>
          <p className="mt-3">{copy.footer.eligibility}</p>
        </div>

        <div className="site-footer-bottom">
          <p>
            © {year} {site.name}. {copy.footer.rights}
          </p>
          <a href={site.website} className="site-footer-bottom-link">
            {site.website.replace("https://", "")}
          </a>
        </div>
      </div>
    </footer>
  );
}
