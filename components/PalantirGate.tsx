"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

/* ------------------------------------------------------------------ *
 *  Change this to set the password for the Palantir case study.
 *  Note: this is a client-side gate. It keeps the case study out of
 *  the page's HTML source (the content is only fetched after the
 *  correct password), but it is a deterrent, not true security.
 * ------------------------------------------------------------------ */
const PASSWORD = "cheese";
const KEY = "unlock:palantir";

// Loaded only after unlocking, so the content isn't in the initial page.
const PalantirCaseStudy = dynamic(() => import("@/components/PalantirCaseStudy"), {
  ssr: false,
  loading: () => <div className="gate-loading" />,
});

export default function PalantirGate() {
  const [unlocked, setUnlocked] = useState(false);
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(KEY) === "1") setUnlocked(true);
    } catch {}
  }, []);

  if (unlocked) return <PalantirCaseStudy />;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value === PASSWORD) {
      setUnlocked(true);
      try {
        sessionStorage.setItem(KEY, "1");
      } catch {}
    } else {
      setError(true);
    }
  };

  return (
    <div className="gate">
      <div className="gate-box">
        <svg className="gate-lock" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M17.5 27.5V17.5C17.5 14.1848 18.817 11.0054 21.1612 8.66117C23.5054 6.31696 26.6848 5 30 5C33.3152 5 36.4946 6.31696 38.8388 8.66117C41.183 11.0054 42.5 14.1848 42.5 17.5V27.5M12.5 27.5H47.5C50.2614 27.5 52.5 29.7386 52.5 32.5V50C52.5 52.7614 50.2614 55 47.5 55H12.5C9.73858 55 7.5 52.7614 7.5 50V32.5C7.5 29.7386 9.73858 27.5 12.5 27.5Z" stroke="#B3B3B3" strokeWidth="5.25" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <h1>This content is protected.</h1>
        <p className="gate-sub">To view, please enter the password.</p>
        <form onSubmit={submit} className={`gate-form${error ? " bad" : ""}`}>
          <input
            type="password"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              setError(false);
            }}
            placeholder="Enter password"
            aria-label="Password"
            autoFocus
          />
          <button type="submit" aria-label="Enter">
            <svg viewBox="0 0 80 18" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M1 9h77M70 1l8 8-8 8" />
            </svg>
          </button>
        </form>
        <p className="gate-error" role="alert">{error ? "Incorrect password. Please try again." : "\u00a0"}</p>
      </div>
    </div>
  );
}
