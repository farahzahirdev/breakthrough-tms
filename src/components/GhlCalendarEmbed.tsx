"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/content/site";
import { mountAndBindGhlCalendar, unmountGhlEmbed } from "@/lib/ghlEmbed";
import { GhlEmbed } from "./GhlEmbed";

const calendar = site.ghl.calendar;
const isPlaceholder = calendar.id.startsWith("PLACEHOLDER");
const CALENDAR_MIN_HEIGHT = "720px";

export function GhlCalendarEmbed() {
  const hostRef = useRef<HTMLDivElement>(null);
  const [clientReady, setClientReady] = useState(false);

  useEffect(() => {
    setClientReady(true);
  }, []);

  useEffect(() => {
    if (!clientReady || isPlaceholder) return;

    const host = hostRef.current;
    if (!host) return;

    const unbind = mountAndBindGhlCalendar(host, {
      id: calendar.id,
      title: calendar.title,
      iframeId: calendar.iframeId,
      minHeight: CALENDAR_MIN_HEIGHT,
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
        placeholderTitle="Calendar booking coming soon"
        placeholderBody="The consultation calendar will appear here once embed IDs are configured in site.ts."
        minHeight="520px"
        caption={calendar.title}
      />
    );
  }

  return (
    <div
      ref={hostRef}
      className="w-full overflow-hidden"
      style={{ minHeight: CALENDAR_MIN_HEIGHT }}
    />
  );
}
