import Link from "next/link";
import { projects } from "@/lib/projects";

export const metadata = { title: "Work — Sabrina Lee" };

export default function Work() {
  return (
    <section className="page">
      <h1>the works</h1>
      <ul className="work-list">
        {[...projects].reverse().map((p) =>
          p.comingSoon ? (
            <li key={p.slug}>
              <span className="work-soon">
                <span>{p.title}</span>
                <span className="meta">{p.role}</span>
                <span className="meta">Coming soon</span>
              </span>
            </li>
          ) : (
            <li key={p.slug}>
              <Link href={`/work/${p.slug}`}>
                <span>{p.title}</span>
                <span className="meta">{p.role}</span>
                <span className="meta">{p.year}</span>
              </Link>
            </li>
          )
        )}
      </ul>
    </section>
  );
}
