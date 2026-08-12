import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bt: {
          ink: "#171A41",
          "ink-2": "#262A55",
          paper: "#FDFBF7",
          sand: "#F7F3EA",
          card: "#FFFEFC",
          body: "#454965",
          muted: "#666A84",
          accent: "#F0A4D4",
          "accent-hover": "#E892C8",
          "accent-ink": "#8E6B9E",
          line: "#E6DFD1",
          rose: "#F0A4D4",
          "rose-hover": "#E892C8",
          lavender: "#DCDEF0",
          "lavender-muted": "#9398B8",
          "cta-text": "#C3C6E0",
          white: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ['"Inter"', "system-ui", "sans-serif"],
        heading: ['"Fraunces"', "Georgia", "serif"],
      },
      fontSize: {
        "bt-body": ["1.0625rem", { lineHeight: "1.7" }],
        "bt-large": ["1.15rem", { lineHeight: "1.65" }],
        "bt-small": ["0.9375rem", { lineHeight: "1.65" }],
        "bt-h1": [
          "clamp(2.5rem, 6vw, 4rem)",
          { lineHeight: "1.12", letterSpacing: "-0.015em" },
        ],
        "bt-h2": [
          "clamp(1.75rem, 3.6vw, 2.5rem)",
          { lineHeight: "1.18", letterSpacing: "-0.015em" },
        ],
        "bt-h3": [
          "clamp(1.25rem, 2.2vw, 1.5rem)",
          { lineHeight: "1.25", letterSpacing: "-0.01em" },
        ],
      },
      maxWidth: {
        content: "1140px",
      },
      borderRadius: {
        brand: "14px",
        card: "14px",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(23, 26, 65, 0.05), 0 10px 30px rgba(23, 26, 65, 0.06)",
        card: "0 1px 2px rgba(23, 26, 65, 0.05), 0 10px 30px rgba(23, 26, 65, 0.06)",
        lift: "0 4px 18px rgba(23, 26, 65, 0.35)",
        "hero-offset": "1.6rem -1.6rem -1.6rem 1.6rem",
      },
      transitionTimingFunction: {
        brand: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(1.25rem)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "scale-in": {
          from: { opacity: "0", transform: "scale(0.96)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-in": "fade-in 0.8s ease-out both",
        "scale-in": "scale-in 0.8s cubic-bezier(0.22, 1, 0.36, 1) both",
        marquee: "marquee 40s linear infinite",
        "pulse-soft": "pulse-soft 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
