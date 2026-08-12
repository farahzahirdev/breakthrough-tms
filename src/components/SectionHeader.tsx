type SectionHeaderProps = {
  eyebrow: string;
  headline: string;
  body?: string;
  className?: string;
  dark?: boolean;
  light?: boolean;
  /** Center on mobile, left-align eyebrow/headline from lg up */
  splitOnDesktop?: boolean;
};

export function SectionHeader({
  eyebrow,
  headline,
  body,
  className = "",
  dark = false,
  light = false,
  splitOnDesktop = false,
}: SectionHeaderProps) {
  return (
    <div
      className={`bt-section-header ${splitOnDesktop ? "section-header-split" : ""} ${className}`}
    >
      <p
        className={`section-eyebrow ${dark || light ? "section-eyebrow-light mx-auto" : ""} ${dark ? "!justify-center" : ""}`}
      >
        {eyebrow}
      </p>
      <h2 className={`mt-3 ${dark || light ? "!text-[#fdfcf9]" : ""}`}>{headline}</h2>
      {body ? (
        <p className={`mt-4 text-lead ${dark ? "!text-bt-cta-text" : ""}`}>{body}</p>
      ) : null}
    </div>
  );
}
