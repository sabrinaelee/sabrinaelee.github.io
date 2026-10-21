"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { projects } from "@/lib/projects";

export default function Nav() {
  const path = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [path]);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = (
    <>
      <Link href="/" aria-current={path === "/" || path.startsWith("/work") ? "page" : undefined}>
        work
      </Link>
      <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
        resume
      </a>
    </>
  );

  return (
    <header className={`nav${open ? " menu-open" : ""}`}>
      <Link href="/" className="logo">
        Sabrina Lee
      </Link>

      <nav className="nav-links">{links}</nav>

      <button
        type="button"
        className={`nav-burger${open ? " open" : ""}`}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
      </button>

      <div className={`nav-sheet${open ? " open" : ""}`} onClick={() => setOpen(false)}>
        <nav className="nav-sheet-links" onClick={(e) => e.stopPropagation()}>
          <span className="nav-sheet-label">Work</span>
          {[...projects].reverse().map((p) =>
            p.comingSoon ? (
              <span key={p.slug} className="nav-sheet-item soon">
                <span className="nav-sheet-name">
                  <span className="nav-arrow" aria-hidden>→</span>
                  {p.title}
                </span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="nav-tag" src="/tags/coming-soon.svg" alt="Coming soon" />
              </span>
            ) : (
              <Link key={p.slug} href={`/work/${p.slug}`} className="nav-sheet-item">
                <span className="nav-sheet-name">
                  <span className="nav-arrow" aria-hidden>→</span>
                  {p.title}
                </span>
              </Link>
            )
          )}
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="nav-sheet-item nav-sheet-resume">
            <span className="nav-sheet-name">
              Resume
              <span className="nav-arrow up" aria-hidden>↗</span>
            </span>
          </a>
        </nav>
      </div>
    </header>
  );
}
