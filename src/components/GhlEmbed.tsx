type GhlEmbedProps = {
  html: string;
  placeholderTitle: string;
  placeholderBody: string;
  minHeight?: string;
  caption?: string;
};

export function GhlEmbed({
  html,
  placeholderTitle,
  placeholderBody,
  minHeight = "520px",
  caption,
}: GhlEmbedProps) {
  if (html.trim()) {
    return (
      <div
        className="ghl-embed w-full overflow-hidden"
        style={{ minHeight }}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }

  return (
    <div
      className="flex w-full flex-col items-center justify-center rounded-brand border-2 border-dashed border-[rgba(240,164,212,0.45)] bg-bt-sand px-6 py-16 text-center"
      style={{ minHeight }}
      role="status"
    >
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-brand bg-[rgba(240,164,212,0.2)] text-bt-accent-ink">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
          <line x1="16" x2="16" y1="2" y2="6" />
          <line x1="8" x2="8" y1="2" y2="6" />
          <line x1="3" x2="21" y1="10" y2="10" />
        </svg>
      </div>
      <p className="font-heading text-lg font-semibold text-bt-ink">{placeholderTitle}</p>
      <p className="mt-2 max-w-md text-sm leading-relaxed text-bt-body">{placeholderBody}</p>
      {caption ? (
        <p className="mt-4 text-xs font-bold uppercase tracking-wider text-bt-accent-ink">{caption}</p>
      ) : null}
    </div>
  );
}
