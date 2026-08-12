import { site } from "@/content/site";
import { GhlEmbed } from "./GhlEmbed";

const form = site.ghl.inquiryForm;
const isPlaceholder = form.id.startsWith("PLACEHOLDER");

export function GhlInquiryForm() {
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

  return (
    <iframe
      src={form.src}
      id={form.iframeId}
      title={form.title}
      data-layout={"{'id':'INLINE'}"}
      data-trigger-type="alwaysShow"
      data-trigger-value=""
      data-activation-type="alwaysActivated"
      data-activation-value=""
      data-deactivation-type="neverDeactivate"
      data-deactivation-value=""
      data-form-name={form.name}
      data-height={String(form.height)}
      data-layout-iframe-id={form.iframeId}
      data-form-id={form.id}
      className="block w-full border-0"
      style={{ width: "100%", height: form.height, border: "none", borderRadius: "20px" }}
    />
  );
}
