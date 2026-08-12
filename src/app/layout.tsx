import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { site } from "@/content/site";
import "./globals.css";

export const metadata: Metadata = {
  title: "Deep TMS Therapy in Glendale, CA | Breakthrough TMS",
  description:
    "FDA-cleared BrainsWay Deep TMS in Glendale, CA. Noninvasive treatment for depression, anxious depression, OCD & more. Book a free consultation. Mon–Fri 7 AM–7 PM.",
  icons: {
    icon: "/images/favicon-96.png",
  },
  keywords: [
    "TMS Glendale CA",
    "Breakthrough TMS",
    "Deep TMS San Fernando Valley",
    "BrainsWay TMS",
    "treatment resistant depression Glendale",
  ],
  openGraph: {
    title: "Deep TMS Therapy in Glendale, CA | Breakthrough TMS",
    description:
      "FDA-cleared BrainsWay Deep TMS. Noninvasive, 20-minute sessions. Serving Glendale & the San Fernando Valley.",
    url: site.website,
    siteName: site.name,
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#171A41",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href={site.ghl.origin} />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,550;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans">
        {children}
        <Script src={site.ghl.embedScriptSrc} strategy="afterInteractive" />
      </body>
    </html>
  );
}
