import Link from "next/link";
import type { CSSProperties } from "react";
import { projects } from "@/lib/projects";

/**
 * The file-folder illustration, built from the exported SVG layers in
 * /public/folder. Everything is positioned in the SVGs' own units (the
 * folder is 417 wide) and converted to container-query units, so the whole
 * stack scales with its column.
 *
 * Stacking order, back to front:
 *   back_folder → [sheet 1, divider 1] → [sheet 2, divider 2] → …
 * The last divider is the front pocket (THE WORKS + binder rings).
 */
const W = 417;
const u = (n: number) => `${((n * 100) / W).toFixed(3)}cqw`;

const FIRST_DIVIDER = 54.5; // top of the first divider's tab, below the back folder's top
const STEP = 54.5; // vertical distance between dividers
const SHEET_RISE = 34; // how far a sheet's top sits above its divider's top
const SHEET_X = -10; // sheet SVGs are 433 wide, incl. shadow padding
const DIVIDER_H = 256;
const FRONT_H = 273; // the front pocket SVG includes the rings hanging below

export default function Folder() {
  const last = projects.length - 1;
  const height = FIRST_DIVIDER + STEP * last + FRONT_H;

  return (
    <div className="folder" style={{ aspectRatio: `${W} / ${height}` }} aria-label="Selected work">
      <img className="layer" src="/folder/back_folder.svg" alt="" style={{ left: 0, top: 0, width: u(W), zIndex: 0 }} />

      {projects.map((p, i) => {
        const top = FIRST_DIVIDER + STEP * i;
        const isFront = i === last;
        const z = 10 + i * 10;
        const inner = (
          <>
            <img
              className="layer sheet"
              src={p.sheet}
              alt=""
              style={{ left: u(SHEET_X), top: u(top - SHEET_RISE), width: u(433), zIndex: z } as CSSProperties}
            />
            <img
              className="layer"
              src={p.divider}
              alt=""
              style={{ left: 0, top: u(top), width: u(W), height: u(isFront ? FRONT_H : DIVIDER_H), zIndex: z + 1 }}
            />
            {/* invisible hit area over the visible strip: the tab plus the sheet peeking above it */}
            <span
              className="hit"
              style={{ left: 0, right: 0, top: u(top - 15), height: u(isFront ? 62 : STEP), zIndex: 200 + i }}
            />
          </>
        );
        return p.comingSoon ? (
          <span key={p.slug} className="divider-link coming-soon" data-cursor="Coming soon!" aria-label={`${p.title} — coming soon`}>
            {inner}
          </span>
        ) : (
          <Link
            key={p.slug}
            href={`/work/${p.slug}`}
            className="divider-link"
            data-cursor="View project"
            data-cursor-arrow=""
            aria-label={`${p.title} case study`}
          >
            {inner}
          </Link>
        );
      })}
    </div>
  );
}
