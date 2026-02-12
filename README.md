# Beauty on Tap Salon

Single-page landing site for Beauty on Tap Salon (Next.js App Router, TypeScript, Tailwind). One route only; all sections are anchors (#home, #about, #services, #team, #contact).

## Run locally

From the `beautyontap-temp` folder:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Replace placeholders

Search for these and replace with your real details:

- `[PHONE]` — your phone number
- `[ADDRESS]` — full address
- `[INSTAGRAM]` / `[FACEBOOK]` — social handles in sidebar and footer
- About section “Our Story” block — replace the two placeholder paragraphs with your story
- Contact form — wire the submit handler to your booking method (phone link, Booksy, Square, etc.) or keep the placeholder thank-you message
- “Booking method” line in the Contact/Booking info card

Logo is at `public/beauty on tap logo.png`.

## Build

```bash
npm run build
npm start
```
