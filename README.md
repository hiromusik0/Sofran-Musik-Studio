# Sofran Musik Studio — Netlify rebuild

This is a separate rebuild branch based on the current Framer project inspected on 21 Nov 2026. It does not replace or modify the Framer source project.

## Deployment
- Repository: `hiromusik0/Sofran-Musik-Studio`
- Branch: `netlify-rebuild`
- Build command: leave blank
- Publish directory: `.`

## Current state
- All 9 intended page routes have corresponding page metadata and render functions.
- Page titles/descriptions, responsive CSS breakpoints, mobile navigation, reduced-motion styling, and SPA history navigation are present.
- The source Framer project contains a 5-step registration component with Supabase POST logic, age-based guardian requirements, consent, and duplicate-submission protection.
- That original form has **not yet been ported** to this rebuild. The current rebuild form is a small disabled placeholder; it must not be used to collect real applications.
- The original Framer asset library has not yet been transferred. The rebuild currently uses text and CSS placeholders instead of the original images; the gallery is not populated with real photos.
- Book pricing, official book descriptions, purchase links, and some biography/material details remain marked as awaiting verification.

## Test findings (static source inspection)
- PASS: 9 route definitions exist.
- PASS: SPA route rendering and browser back/forward handling are present.
- PASS: mobile breakpoints and reduced-motion CSS are present.
- NOT READY: registration form is incomplete and intentionally disabled.
- NOT READY: original images/assets and exact Framer animation/interaction parity are not transferred.
- NOT READY: visual browser testing and deployed Netlify testing have not been performed.

Do not deploy as the production site or delete the Framer site until visual, mobile, link, form, and Supabase tests pass.
