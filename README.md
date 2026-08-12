# Breakthrough TMS Landing Page

Modern Next.js landing page for [Breakthrough TMS](https://www.breakthroughtms.com) — Glendale, CA.

## Stack

- Next.js 14 (App Router)
- Tailwind CSS
- TypeScript
- Lucide icons

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pending configuration

When ready, update `src/content/site.ts`:

- `phone` / `phoneHref` — Twilio tracking number (if different from main line)
- `mapsEmbedUrl` / `mapsUrl` — Google Maps links (if needed)

GHL form and calendar embeds are configured under `site.ghl`.

## Page sections

1. Hero with CTAs (Book Consultation, Qualify, Call)
2. What Is TMS / How It Works
3. Conditions Treated
4. Medication Management
5. Why Choose Breakthrough TMS
6. Insurance
7. What to Expect
8. Location & Hours
9. FAQ
10. Book Consultation (calendar embed)
11. Qualification form
12. Final CTA band
