const LINKEDIN_URL = "https://www.linkedin.com/in/sabrina-lee-82656a18b/";
const EMAIL = "mailto:sabrinaericalee@gmail.com";

export default function Footer() {
  return (
    <footer className="footer">
      <span className="footer-chat">
        Lets chat
        <span className="footer-spark" aria-hidden>⋆˙⟡</span>
      </span>
      <nav className="footer-links">
        <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
          linkedin<span className="arrow" aria-hidden>→</span>
        </a>
        <a href={EMAIL}>
          email<span className="arrow" aria-hidden>→</span>
        </a>
      </nav>
    </footer>
  );
}
