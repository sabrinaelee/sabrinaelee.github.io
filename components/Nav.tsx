"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

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
          {links}
        </nav>
      </div>
    </header>
  );
}
