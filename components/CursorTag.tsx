"use client";

import { useEffect, useRef, useState } from "react";

/**
 * A pill-shaped label that replaces the cursor over any element carrying a
 * `data-cursor="…"` attribute. Pure HTML/CSS (no image), so it stays crisp
 * and works in every browser. Disabled on touch / coarse pointers.
 */
export default function CursorTag() {
  const ref = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState<string | null>(null);
  const [arrow, setArrow] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    let raf = 0;
    const move = (e: MouseEvent) => {
      const el = (e.target as Element | null)?.closest?.("[data-cursor]") as HTMLElement | null;
      setLabel(el ? el.dataset.cursor ?? null : null);
      setArrow(el ? el.dataset.cursorArrow != null : false);
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (ref.current) ref.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      });
    };
    const leave = () => setLabel(null);
    document.addEventListener("mousemove", move, { passive: true });
    document.documentElement.addEventListener("mouseleave", leave);
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("mousemove", move);
      document.documentElement.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <div ref={ref} className={`cursor-tag${label ? " on" : ""}`} aria-hidden>
      <span>
        {label}
        {arrow && (
          <svg className="cursor-tag-arrow" viewBox="0 0 24 12" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M1 6h21M17 1l5 5-5 5" />
          </svg>
        )}
      </span>
    </div>
  );
}
