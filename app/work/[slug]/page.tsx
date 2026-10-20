import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/lib/projects";
import PalantirGate from "@/components/PalantirGate";
import PointsCaseStudy from "@/components/PointsCaseStudy";
import CredElectionCaseStudy from "@/components/CredElectionCaseStudy";

export function generateStaticParams() {
  return projects.filter((p) => !p.comingSoon).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProject(slug);
  return { title: p ? `${p.title} — Sabrina Lee` : "Sabrina Lee" };
}

export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p || p.comingSoon) notFound();

  if (slug === "palantir") return <PalantirGate />;
  if (slug === "points") return <PointsCaseStudy />;
  if (slug === "adobe-creative-jam") return <CredElectionCaseStudy />;

  return (
    <article className="page">
      <Link href="/work" className="back">← all work</Link>
      <div className="eyebrow">{p.role} · {p.year}</div>
      <h1>{p.title}</h1>
      <div className="case-hero">
        {p.image
          // eslint-disable-next-line @next/next/no-img-element
          ? <img src={p.image} alt={`${p.title} cover`} style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 12 }} />
          : "cover image goes here"}
      </div>
      <div className="prose">
        <p>{p.summary}</p>
      </div>
    </article>
  );
}
