# Ripple Trend Marketing: landing page

Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion + Lucide + Resend.

## Run
    npm install
    cp .env.example .env.local   # then fill in values
    npm run dev                  # http://localhost:3000

## Placeholder data
Prices, phone, address, socials, WhatsApp number and the "Sample result" lines are pseudo values (see `lib/content.ts`).

## Before launch (confirm with the agency)
- Replace the WhatsApp number (`NEXT_PUBLIC_WHATSAPP_NUMBER`), email and social URLs (`components/Footer.tsx`).
- Add real KES prices in `components/Packages.tsx`.
- Replace concept projects in `lib/content.ts` with real work and results.
- Add the logo and final brand colours (`tailwind.config.ts`).
- Set `RESEND_API_KEY` so form submissions are emailed. Without it, leads are only logged to the server console.
- Deploy to Vercel and set the same env vars there.
