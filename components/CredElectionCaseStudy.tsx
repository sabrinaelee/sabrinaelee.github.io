/* eslint-disable @next/next/no-img-element */
import PinnedCarousel, { type Slide } from "@/components/PinnedCarousel";

const PROTOTYPE_URL = "https://xd.adobe.com/view/f64a8872-c245-4b08-9957-425b039fc114-a319/";

const finalSlides: Slide[] = [
  {
    src: "/work/cred-election/final-home.gif",
    ratio: 0.461,
    alt: "CredElection home screen surfacing featured stories, videos, and recent news",
    caption: "Easily access top stories all in one place",
    body: "CredElection's home page surfaces featured stories, videos, and recent news alongside the most credible sources, all in a single view.",
  },
  {
    src: "/work/cred-election/final-article.gif",
    ratio: 0.461,
    alt: "CredElection article view showing a credibility score and inline bias highlights",
    caption: "See how credible each story is",
    body: "Every article leads with a credibility score, and biased or inaccurate passages are highlighted inline so readers can weigh what they're reading.",
  },
  {
    src: "/work/cred-election/final-polls.gif",
    ratio: 0.461,
    alt: "CredElection polls screen with live seat counts, a poll tracker, and election news",
    caption: "Follow the election as it unfolds",
    body: "The polls screen tracks live seat counts and polling averages alongside the latest election news.",
  },
];

export default function CredElectionCaseStudy() {
  return (
    <article className="cs pts cred">
      <header className="cs-head">
        <div className="eyebrow">New York Times x Adobe Design Jam — Top 3 Winner</div>
        <h1>Creating a user-centric mobile-first experience that increases trust and credibility in election content</h1>
      </header>

      <img className="cs-banner" src="/work/cred-election/hero.svg" alt="CredElection app preview" />

      {/* ---- project context ---- */}
      <section className="pts-context">
        <h2 className="pts-ctx-label">Project context</h2>
        <div className="pts-ctx-body">
          <p>
            The Adobe Creative Jam is a design competition that challenges participants to solve a
            given problem within a set timeframe. Hosted by the New York Times, our challenge was to
            design a solution that helps users find reliable, credible election content.
          </p>
          <p>
            Over one week, I worked with another designer to create CredElection, a mobile-first
            experience built to increase trust in election coverage. We pitched our solution to a
            panel of industry experts and <strong>placed 3rd out of 300+</strong> teams.
          </p>
        </div>
      </section>

      {/* ---- design process ---- */}
      <section className="pts-section">
        <h2>Design process</h2>
        <p className="pts-blurb">
          A four-phase process used to explore the problem, define our focus, and develop a solution
          that addressed real user needs.
        </p>
        <img className="cred-img" src="/work/cred-election/design-process.svg" alt="Double-diamond design process: Discover, Define, Develop, Deliver" />
      </section>

      {/* ---- research: discover (stats) ---- */}
      <section className="pts-section">
        <div className="eyebrow">Research and context</div>
        <h2>Discover insight into the problem</h2>
        <p className="pts-blurb">
          Research focus: What do readers think about the credibility of news media in the current age?
        </p>
        <img className="cred-img" src="/work/cred-election/stats.svg" alt="74% think misinformation online is the leading problem; 70% think media owners influence coverage; 83% say the media is to blame for political division" />
        <p className="cred-note">* Data gathered from an American survey conducted by the Gallup and Knight foundation</p>
      </section>

      {/* ---- discover: user groups + ideas ---- */}
      <section className="pts-section">
        <h2>Discover insight into the problem</h2>
        <p className="pts-blurb">
          To narrow down the problem space, we started by learning who our users were, including
          their goals and frustrations. Research showed that most news app users are male, ages
          35–64, with higher education levels, and are typically the main income earner in their
          household. Based on this, we interviewed people who matched this group to learn more about
          them.
        </p>
        <img className="cred-img" src="/work/cred-election/research-cards.svg" alt="Target user groups, how the credibility of election stories is rated, and how to promote credible content" />
      </section>

      {/* ---- user journey ---- */}
      <section className="pts-section">
        <div className="eyebrow">Development</div>
        <h2>User journey</h2>
        <p className="pts-blurb">
          The app opens onto four main screens: Home, Top charts, For you, and Polls. Credibility is
          built into each path, from rankings of publishers and journalists to ratings, bias alerts,
          and misinformation flags in the focused article view.
        </p>
        <img className="cred-img" src="/work/cred-election/user-journey.svg" alt="User journey flow from launching the app through home, top charts, for you, and polls screens" />
      </section>

      {/* ---- wireframes ---- */}
      <section className="pts-section">
        <h2>Wireframes</h2>
        <p className="pts-blurb">
          Wireframes for the five core screens set the layout and hierarchy before any visual design.
          They place credibility ratings and bias alerts alongside the content they describe, rather
          than behind a separate view.
        </p>
        <img className="cred-img" src="/work/cred-election/wireframes.svg" alt="Wireframes: Credibility Charts Page, Article View, For You Page, Poll Tracking Page, Reader Home" />
      </section>

      {/* ---- final designs (scroll-pinned carousel) ---- */}
      <PinnedCarousel
        eyebrow="Solution"
        title="Final designs"
        blurb={
          <>
            The last step in our process was prototyping. We focused the visual design on simplicity
            and clarity, ensuring users could navigate the app intuitively. The final prototype can
            be found <a href={PROTOTYPE_URL} target="_blank" rel="noopener noreferrer">here</a>.
          </>
        }
        slides={finalSlides}
      />

    </article>
  );
}
