"use client";

import { Phone } from "lucide-react";
import { copy } from "@/content/copy";
import { site } from "@/content/site";

export function FloatingCTA() {
  return (
    <div className="fixed bottom-4 left-1/2 z-40 flex -translate-x-1/2 gap-0 overflow-hidden rounded-full bg-bt-ink shadow-lift transition-transform duration-300 lg:hidden">
      <a
        href={site.routes.bookConsult}
        className="inline-flex min-h-[44px] items-center justify-center px-5 text-sm font-semibold text-bt-paper transition-colors duration-300 hover:text-bt-rose"
      >
        {copy.floatingCta.book}
      </a>
      <span className="w-px self-stretch bg-[rgba(253,251,247,0.15)]" aria-hidden />
      <a
        href={site.phoneHref}
        className="inline-flex min-h-[44px] items-center justify-center gap-2 px-4 text-sm font-semibold text-bt-paper transition-colors duration-300 hover:text-bt-rose"
        aria-label={`Call ${site.phone}`}
      >
        <Phone className="h-4 w-4" aria-hidden />
        <span className="sr-only">{copy.floatingCta.call}</span>
      </a>
    </div>
  );
}
