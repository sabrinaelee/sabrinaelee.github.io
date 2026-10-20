import Folder from "@/components/Folder";

function Sun() {
  const rays = Array.from({ length: 8 }, (_, i) => i * 45);
  return (
    <svg className="sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden>
      <circle cx="12" cy="12" r="3.2" />
      {rays.map((deg) => (
        <line key={deg} x1="12" y1="2" x2="12" y2="6.2" transform={`rotate(${deg} 12 12)`} />
      ))}
    </svg>
  );
}

export default function Home() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Hi, I’m Sabrina!</h1>
        <p>
          A designer of experiences and a daydreamer of everything{" "}
          <span className="nowrap">under the sun<Sun /></span>
        </p>
      </div>
      <div className="hero-folder">
        <Folder />
      </div>
    </section>
  );
}
