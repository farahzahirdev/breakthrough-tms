"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/content/site";
import { mountAndBindGhlForm, unmountGhlEmbed } from "@/lib/ghlEmbed";
import { GhlEmbed } from "./GhlEmbed";

const form = site.ghl.inquiryForm;
const isPlaceholder = form.id.startsWith("PLACEHOLDER");

const FORM_LOADING_MIN_HEIGHT = "520px";

export function GhlInquiryForm() {
  const hostRef = useRef<HTMLDivElement>(null);
  const [clientReady, setClientReady] = useState(false);

  useEffect(() => {
    setClientReady(true);
  }, []);

  useEffect(() => {
    if (!clientReady || isPlaceholder) return;

    const host = hostRef.current;
    if (!host) return;

    const unbind = mountAndBindGhlForm(host, {
      id: form.id,
      name: form.name,
      height: String(form.height),
      iframeId: form.iframeId,
      minHeight: FORM_LOADING_MIN_HEIGHT,
    });

    return () => {
      unbind();
      unmountGhlEmbed(host);
    };
  }, [clientReady]);

  if (isPlaceholder) {
    return (
      <GhlEmbed
        html=""
        placeholderTitle="Qualification form coming soon"
        placeholderBody="The inquiry form will appear here once embed IDs are configured in site.ts."
        minHeight="520px"
        caption={form.name}
      />
    );
  }

  return <div ref={hostRef} className="w-full min-h-[520px]" />;
}
