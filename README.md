# Sabrina Lee — portfolio

Next.js (App Router) + TypeScript, plain CSS, self-hosted Inter.

```bash
npm install
npm run dev     # http://localhost:3000
```

## Where things live

| What | File |
| --- | --- |
| Projects (tabs, order, copy, screenshots) | `lib/projects.ts` |
| Folder illustration | `components/Folder.tsx` |
| Colors, type, layout | `app/globals.css` (palette variables at the top) |
| Home / work list / case study / resume | `app/page.tsx`, `app/work/…`, `app/resume/page.tsx` |

## Adding real screenshots
Put an image in `public/work/` (e.g. `public/work/on-deck.png`) and set
`image: "/work/on-deck.png"` on that project. It replaces the sketch preview on the
folder sheet and becomes the case-study cover. Only the top ~30% of the image
peeks out of the folder, so crop to the most recognisable part of the UI.

## Adding / reordering projects
The first project in the array is the back-most divider; the last one becomes the
front pocket's tab. Each needs a `tabSide` (`"left"` / `"right"`) — alternate them.
The folder is drawn for four dividers; with more, raise the `aspect-ratio` in
`.folder` and add a colour to `cardColors`.
