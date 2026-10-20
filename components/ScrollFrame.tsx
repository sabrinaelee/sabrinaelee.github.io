"use client";

import { useCallback, useRef, useState } from "react";

export type Slide = { src: string; alt: string };

/**
 * A fixed-height window that holds a stack of screenshots. You scroll
 * vertically within it, each screenshot snaps to center, and a counter
 * in the corner tracks which one you're on. Extra screenshots can be
 * added just by growing the `slides` array.
 */
export default function ScrollFrame({ slides }: { slides: Slide[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [idx, setIdx] = useState(0);

  const onScroll = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const center = el.scrollTop + el.clientHeight / 2;
    let best = 0;
    let bestDist = Infinity;
    Array.from(el.children).forEach((child, i) => {
      const c = child as HTMLElement;
      const mid = c.offsetTop + c.offsetHeight / 2;
      const d = Math.abs(mid - center);
      if (d < bestDist) {
        bestDist = d;
        best = i;
      }
    });
    setIdx(best);
  }, []);

  return (
    <div className="scroll-frame">
      <div className="scroll-track" ref={trackRef} onScroll={onScroll}>
        {slides.map((s, i) => (
          <div className="slide" key={i}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={s.src} alt={s.alt} draggable={false} />
          </div>
        ))}
      </div>
      <div className="scroll-counter" aria-hidden>
        {idx + 1} / {slides.length}
      </div>
    </div>
  );
}
