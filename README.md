# Sofran Musik Studio — Netlify rebuild

This branch is a static rebuild of the existing Framer project. The Framer source project remains untouched.

## Deployment
- GitHub branch: `netlify-rebuild`
- Netlify build command: empty (plain HTML/CSS/JS)
- Publish directory: repository root (`.`)
- Netlify config: `netlify.toml`
- SPA routes: `_redirects`

## Current implementation
- Nine routes: Home, Tentang, Sofran Method, Pengajar, Galeri, Toko Buku, Lokasi & Kontak, Mulai Belajar, and Pendaftaran.
- Responsive navigation and page routing.
- Original Framer-hosted visual assets reused for the hero, music imagery, book mockups, and registration background.
- Framer-inspired motion system: hero image drift, musical light particles, word-by-word heading reveal, scroll-triggered reveal, staggered cards, hover lift/tilt, floating book mockups, and page transitions.
- Reduced-motion accessibility support.
- Five-step enrollment form ported with age-based guardian requirements, consent, duplicate-submission ID, and Supabase REST submission matching the existing `applications` table.

## Important verification status
- The new animations are recreated in CSS/JavaScript based on inspected Framer effect settings; they are not a byte-for-byte export of Framer's runtime and still require visual comparison and tuning.
- No real registration submission has been sent from this rebuild. Do not submit real student data until the live form is tested and approved.
- Gallery documentation is still placeholder content because original event photos were not available in the Framer project.
- Some biography, official book descriptions, prices, availability, and purchase links still require confirmation from the studio.
- The teacher portrait and studio photographs are not real documentation; conceptual imagery is labeled accordingly.
- The site has not yet passed a full browser QA pass on desktop, tablet, and mobile.

## Safety
- Keep the original Framer site and GitHub `main` branch intact until the Netlify version passes visual, navigation, responsive, and form tests.
- Do not use the production registration form for test submissions.
