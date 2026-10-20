"use client";

import { useEffect, useRef, useState } from "react";

export type Slide = { src: string; alt: string; caption: string; body: string; ratio?: number };

/**
 * A scroll-pinned carousel. The section is tall; while it passes through the
 * viewport its content is stuck (sticky), and the page's own scroll drives
 * which slide is shown — each advances with a horizontal transition and its
 * own caption. On narrow screens / reduced-motion it falls back to a simple
 * vertical stack (see the CSS media query).
 */
export default function PinnedCarousel({
  title,
  statusSrc,
  statusAlt,
  blurb,
  slides,
  eyebrow,
}: {
  title: string;
  statusSrc?: string;
  statusAlt?: string;
  blurb: React.ReactNode;
  slides: Slide[];
  eyebrow?: string;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(0);
  const n = slides.length;

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = sectionRef.current;
      if (!el) return;
      const total = el.offsetHeight - window.innerHeight;
      const scrolled = Math.min(Math.max(-el.getBoundingClientRect().top, 0), Math.max(total, 1));
      const progress = total > 0 ? scrolled / total : 0;
      const seg = progress * (n - 1);
      const i = Math.min(Math.floor(seg), n - 1);
      const t = seg - i;
      // snap: hold on a slide for most of its step, then pass quickly through
      // a narrow window in the middle (smaller W = snappier).
      const W = 0.3;
      const lo = 0.5 - W / 2;
      const hi = 0.5 + W / 2;
      let e: number;
      if (t <= lo) e = 0;
      else if (t >= hi) e = 1;
      else {
        const u = (t - lo) / W;
        e = u * u * u * (u * (u * 6 - 15) + 10); // smootherstep inside the window
      }
      setPos(Math.min(i + e, n - 1));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [n]);

  const active = Math.round(pos);

  const Head = (
    <div className="pin-head">
      {eyebrow ? <div className="eyebrow">{eyebrow}</div> : null}
      <div className="cs-section-head">
        <h2>{title}</h2>
        {statusSrc ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img className="tag-img" src={statusSrc} alt={statusAlt ?? ""} />
        ) : null}
      </div>
      <p className="cs-blurb">{blurb}</p>
    </div>
  );

  return (
    <div className="pin-section" ref={sectionRef} style={{ height: `${n * 100}vh` }}>
      {/* desktop: pinned, scroll-driven */}
      <div className="pin-sticky">
        <div className="pin-card">
          {Head}
          <div className="pin-frame">
            <div className="pin-stage">
              {slides.map((s, k) => {
                const dx = k - pos;
                return (
                  <div
                    className="pin-slide"
                    key={k}
                    style={{
                      // vertical pass: next slide rises straight up from the bottom,
                      // the current one lifts straight up and out the top
                      transform: `translateY(${dx * 108}%)`,
                      zIndex: 10 - Math.round(Math.abs(dx) * 10),
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={s.src}
                      alt={s.alt}
                      draggable={false}
                      className={s.ratio ? "round" : undefined}
                      style={s.ratio ? ({ "--ar": s.ratio } as React.CSSProperties) : undefined}
                    />
                  </div>
                );
              })}
            </div>
            <div className="scroll-counter" aria-hidden>
              {active + 1} / {n}
            </div>
          </div>
          {/* all captions share one grid cell, so the area is always as tall
              as the longest caption and the card never changes size */}
          <div className="pin-captions">
            {slides.map((s, k) => (
              <div className={`cs-caption${k === active ? " is-active" : ""}`} key={k} aria-hidden={k !== active}>
                <span className="cap-title"><span className="diamond" aria-hidden>⟢</span>{s.caption}</span>
                <span className="cap-body">{s.body}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* mobile / reduced-motion fallback */}
      <div className="pin-fallback pin-card">
        {Head}
        {slides.map((s, k) => (
          <figure key={k}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={s.src} alt={s.alt} />
            <figcaption className="cs-caption">
              <span className="cap-title"><span className="diamond" aria-hidden>⟢</span>{s.caption}</span>
              <span className="cap-body">{s.body}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
