import { site } from "@/content/site";
import { GhlEmbed } from "./GhlEmbed";

const calendar = site.ghl.calendar;
const isPlaceholder = calendar.id.startsWith("PLACEHOLDER");

export function GhlCalendarEmbed() {
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
    <iframe
      src={calendar.src}
      id={calendar.iframeId}
      title={calendar.title}
      allow="payment"
      scrolling="no"
      className="block w-full border-0"
      style={{ width: "100%", height: 720, minHeight: 720, overflow: "hidden" }}
    />
  );
}
