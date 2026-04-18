# Claude Code Refactor Prompt — Mira Fleur Website

This prompt is designed for a website that already has a basic structure (home page, portfolio gallery) and needs to be expanded and refactored to match a new comprehensive specification.

---

## STEP 1 — Paste this first, as the opening message

Hi Claude, I have an updated specification for the Mira Fleur website. The full spec is in `MIRA_FLEUR_WEBSITE_SPEC.md` in this folder. Please read it in full before we discuss anything.

Context: this is a refactor, not a greenfield build. The website already exists and has a working home page with a portfolio masonry gallery. We're expanding the site to match the new spec, which adds many new pages, restructures the information architecture, and introduces new features (floating Text Us button, Formspree form, six occasion landing pages, etc.).

**Before making any changes, please do the following:**

1. Read `MIRA_FLEUR_WEBSITE_SPEC.md` in full.
2. Audit the current codebase and tell me, in plain language:
   - What pages/components already exist
   - What the current tech stack is
   - What already matches the new spec (we can keep)
   - What doesn't match the spec (needs to change)
   - What's entirely missing (needs to be added)
3. Propose a refactor plan in batches — don't try to change everything at once. I want to review each batch separately before you implement it.

Please don't write any code yet. Just give me the audit and the proposed batch plan.

---

## STEP 2 — After Claude Code gives you the audit, respond with this

Thanks. Let's work through the refactor in the following batches, in order. For each batch:

1. Show me the files you plan to create or modify before writing any code.
2. Write the code.
3. Let me preview locally before moving to the next batch.

**Batch 1 — Route structure and empty page scaffolding**
Create empty page files for all new routes listed in spec Section 2. Just the file structure and basic layout wrappers — no content yet. This lets us verify the site map is correct before we populate content.

**Batch 2 — Home page content refactor**
Update the home page per spec Section 3. The existing portfolio gallery should be preserved and integrated as the "Selected Work" section (3.3). All other sections (hero, intro strip, occasions grid, services preview, process, about snippet, service area, testimonials, closing CTA, footer) are new or revised — use the copy in the spec verbatim.

**Batch 3 — Six occasion landing pages**
Populate all six `/occasions/*` pages per spec Section 5. Use the template structure and the copy in the spec exactly.

**Batch 4 — About, Services, Process, FAQ pages**
Populate per spec Sections 6–9.

**Batch 5 — Inquire page + Formspree integration**
Build the `/inquire` page per spec Section 10 (text-first three-card layout + simplified 5-field form). Connect the form to the Formspree endpoint in Section 15 (`https://formspree.io/f/xnjldozr`). Create the `/inquire/thank-you` page.

**Batch 6 — Site-wide floating Text Us button**
Implement per spec Section 14. Appears on every page except `/inquire`.

**Batch 7 — SEO + technical polish**
- Meta tags per page (Section 11)
- JSON-LD structured data in footer
- FAQPage schema on /faq
- Sitemap.xml
- Alt text audit on existing images
- Accessibility audit (WCAG AA)

Let's start with Batch 1. Show me the file structure before creating anything.

---

## Tips for working through the batches

- **Don't rush.** Let each batch finish and preview it before approving the next.
- **Keep existing content you like.** If Claude Code proposes to delete or rewrite something that's already working well, push back and tell it to preserve.
- **Trust your eye.** If something looks off visually, say so — the spec is detailed but can't anticipate every design judgment.
- **Copy is deliberate.** If Claude Code tries to "improve" the copy in the spec, remind it that the tone is intentional and to use the spec copy verbatim.
- **Commit to git between batches.** That way if something goes wrong in batch 4, you can roll back to end-of-batch-3 without losing work.

---

## If something specific needs a follow-up change later

For targeted changes after the big refactor, use short, specific prompts like:

- "On the /occasions/sympathy-remembrance page, change the intro paragraph's third sentence — replace 'many cultures' with 'Western, Chinese, and other cultural traditions'."
- "The floating Text Us button is too large on mobile. Reduce the diameter from 56px to 48px."
- "Add a line at the bottom of the About page that says: *'For press and collaboration inquiries, email hello@mirafleur.com.'*"

Precise, surgical edits work better than vague ones like "make it better."
