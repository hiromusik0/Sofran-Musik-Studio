# Sofran Musik Studio — Netlify rebuild

This is a separate rebuild branch based on the current Framer project content inspected on 21 Nov 2026. It does not replace or modify the Framer source project.

## Deployment
- Repository: `hiromusik0/Sofran-Musik-Studio`
- Branch: `netlify-rebuild`
- Build command: leave blank
- Publish directory: `.`

## Current state
- Main routes recreated: Home, Tentang, Sofran Method, Pengajar, Galeri, Toko Buku, Lokasi & Kontak, Mulai Belajar, Pendaftaran.
- Page titles and descriptions synced to the current Framer metadata.
- Responsive styling, route navigation, robots.txt and sitemap.xml included.
- Text and sections are still a partial rebuild, not a pixel-perfect copy of Framer.
- Original Framer media assets and full animation/interaction behavior have not yet been transferred.
- The registration page is intentionally non-submitting until its current staged form fields, Supabase schema, and RLS policies are verified.
- Some content in the source Framer project is explicitly marked as conceptual or awaiting official details; these are kept as placeholders.

Do not deploy as the production site or delete the Framer site until visual, mobile, link, form, and Supabase tests pass.
