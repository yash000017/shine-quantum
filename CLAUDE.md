# ShineQuantum Ltd website

Multi-page marketing site for ShineQuantum Ltd, outsourced accounting services for US businesses and CPA firms.

## Stack
React + Vite + Tailwind (v4, via @tailwindcss/vite), React Router, Framer Motion, lucide-react.
Commands: `npm install`, `npm run dev`, `npm run build` (output in `dist/`).

## Structure
- `src/data/site.js`: all content (company details, services, industries, process, FAQs). Edit here first.
- `src/pages/`: Home, About, Services, ServiceDetail (`/services/:slug`), Industries, HowWeWork, Contact, BookMeeting, NotFound.
- `src/components/`: Layout (navbar, footer), ui (Reveal, PageHero, CTABand), Faq, useForm.
- `src/index.css`: Tailwind theme tokens and shared classes (blue and green light theme).
- `public/_redirects` and `vercel.json`: SPA routing for Cloudflare Pages / Netlify and Vercel.

## Status
- Contact and Book a Meeting forms only simulate sending. Set `formEndpoint` (e.g. Formspree) and optionally `calendlyUrl` in `site.js`.
- Contact email, phone and address in `site.js` are placeholders.
- Hero stats on Home ("Up to 60%", "24/5", "US GAAP", "100%") are placeholders. No certifications or client numbers should be claimed unless they are real.
- A production build is in `dist/`. Deploy target is Cloudflare Pages (direct upload of `dist/`).

## Owner conventions to apply
- No fake statistics, affiliations or offices.
- Typography standard: Plus Jakarta Sans, hero titles weight 200, section headings 500, body 300, buttons 400, letter-spacing -0.02em to -0.025em. The site currently uses heavier weights and still needs updating.
- Give targeted, minimal changes rather than rewriting whole files.

## Next steps
1. Replace placeholder contact details and review stats and claims.
2. Apply the typography standard.
3. Rebuild and upload `dist/` to Cloudflare Pages.
