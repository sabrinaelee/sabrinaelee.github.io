/* eslint-disable @next/next/no-img-element */
import PinnedCarousel, { type Slide } from "@/components/PinnedCarousel";

const finalSlides: Slide[] = [
  {
    src: "/work/points/final-select.gif",
    ratio: 1.772,
    alt: "Buy miles hero — selecting a promotion and amount",
    caption: "Selecting points to purchase",
    body: "Users choose from a set of promotions or enter a custom amount. A brief order summary updates as they adjust.",
  },
  {
    src: "/work/points/final-usecases.gif",
    ratio: 1.774,
    alt: "What can your miles do for you — redemption options and testimonials",
    caption: "Understanding how points can be used",
    body: "Users see what they can redeem points for and why buying them is worthwhile, supported by customer testimonials.",
  },
  {
    src: "/work/points/final-recipient.gif",
    ratio: 1.81,
    alt: "Who are you buying points for — buy for myself or gift to another member",
    caption: "Choosing who the points are for",
    body: "Users choose whether to buy points for themselves or gift them to another member.",
  },
  {
    src: "/work/points/final-payment.gif",
    ratio: 1.81,
    alt: "Select your payment method — checkout step",
    caption: "Completing the payment",
    body: "Payment is a three-step flow: selecting a payment method, entering billing details, and receiving an order confirmation.",
  },
];

export default function PointsCaseStudy() {
  return (
    <article className="cs pts">
      <header className="cs-head">
        <div className="eyebrow">Points Ltd (Plusgrade)</div>
        <h1>Redesigning reward redemption</h1>
      </header>

      <img className="cs-banner" src="/work/points/hero.svg" alt="Points buy-miles storefront preview" />

      {/* ---- project context ---- */}
      <section className="pts-context">
        <h2 className="pts-ctx-label">Project context</h2>
        <div className="pts-ctx-body">
          <p>
            Points is a company that offers digital e-commerce solutions by partnering with the
            world’s leading loyalty programs, giving customers new ways to use their loyalty
            currency.
          </p>
          <p>
            The goal of this project was to redesign the buy and gift experiences for Points’
            white-label loyalty storefront to drive customer engagement and attract loyal customers.
          </p>
        </div>
      </section>

      {/* ---- before / after ---- */}
      <section className="pts-panel pts-beforeafter">
        <img src="/work/points/before-legacy.svg" alt="Legacy UX rebranded for Air Canada" />
        <span className="pts-arrow" aria-hidden>→</span>
        <img src="/work/points/before-proposed.svg" alt="Proposed UX" />
      </section>

      {/* ---- research: laying out the landscape ---- */}
      <section className="pts-section">
        <div className="eyebrow">Research and context</div>
        <h2>Laying out the landscape</h2>
        <p className="pts-blurb">
          Research into how customers buy, use, and think about points surfaced a clear picture of
          what drives purchases, who is transacting, and where the current experience falls short.
          Together, these findings framed the central design question.
        </p>

        <div className="pts-findings">
          <div className="pts-finding">
            <h3>Value drives purchases</h3>
            <p>Customers buy points primarily for a good deal, most often to redeem for flights.</p>
          </div>
          <div className="pts-finding">
            <h3>Two distinct user types</h3>
            <p>
              Younger members transact out of need, while older members transact for value, shaping
              how each group engages with the product.
            </p>
          </div>
          <div className="pts-finding">
            <h3>Three key product gaps</h3>
            <p>
              Customer dissatisfaction centers on a lack of education on the <strong>value of
              points</strong>, an <strong>outdated UI</strong>, and <strong>limited transparency</strong> around fees.
            </p>
          </div>
        </div>

        <p className="pts-callout">
          “How might I make the experience of buying/gifting points more engaging and navigable for
          users?”
        </p>
      </section>

      {/* ---- user journey ---- */}
      <section className="pts-section">
        <div className="eyebrow">Information architecture</div>
        <h2>User journey</h2>
        <p className="pts-blurb">
          The flow runs from the homepage to a Buy/Gift landing page, then through selecting points,
          choosing a recipient, setting up payment, and confirming the purchase. Alongside that core
          path, a set of product transparency touchpoints (reasons to buy, testimonials, and how
          points work) addresses the education and trust gaps surfaced in the research.
        </p>
        <img className="pts-wide" src="/work/points/user-journey.svg" alt="User journey flow — from homepage to confirmation" />
      </section>

      {/* ---- iterating ---- */}
      <section className="pts-section">
        <div className="eyebrow">Ideation</div>
        <h2>From exploration to decision</h2>
        <p className="pts-blurb">
          We focused on the hero section, since it’s where customers decide how many points to buy
          and where the offer is first presented. We explored two directions for the points
          selector, weighing how engaging each felt against how clearly it surfaced promotions and
          cost.
        </p>

        <div className="pts-explore">
          <div className="pts-explore-label">Exploration A</div>
          <div className="pts-explore-row">
            <img src="/work/points/explore-a.svg" alt="Exploration A — slider input" />
            <div className="pts-proscons">
              <div className="pts-finding">
                <h3>Pros</h3>
                <p>Slider is an engaging method of user input that makes the user experience more interesting.</p>
              </div>
              <div className="pts-finding">
                <h3>Cons</h3>
                <p>Selecting specific increments on the slider may prove to be difficult; also no promotions displayed.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pts-explore">
          <div className="pts-explore-label">Exploration B <span className="pts-chosen">(Chosen option)</span></div>
          <div className="pts-explore-row">
            <img src="/work/points/explore-b.svg" alt="Exploration B — chosen option" />
            <div className="pts-proscons">
              <div className="pts-finding">
                <h3>Pros</h3>
                <p>Personalized user experience; easy to read and select promotions.</p>
              </div>
              <div className="pts-finding">
                <h3>Cons</h3>
                <p>Difficult to distinguish the user input from the order summary section.</p>
              </div>
            </div>
          </div>
        </div>

        <img className="pts-wide pts-alts" src="/work/points/alternatives.svg" alt="Other alternatives we explored" />
      </section>

      {/* ---- putting it all together ---- */}
      <section className="pts-section">
        <div className="eyebrow">Synthesis</div>
        <h2>Putting it all together</h2>
        <p className="pts-blurb">
          We carried the chosen hero through the full purchase flow, from selecting miles to choosing
          a recipient and paying. The order summary stays visible throughout, so customers always see
          what they’re buying and what it costs.
        </p>
        <div className="pts-panel pts-wires">
          <img src="/work/points/wire-landing.svg" alt="Landing page wireframe" />
          <img src="/work/points/wire-recipient.svg" alt="Choose recipient wireframe" />
          <img src="/work/points/wire-payment.svg" alt="Payment method wireframe" />
        </div>
      </section>

      {/* ---- final designs (scroll-pinned carousel) ---- */}
      <PinnedCarousel
        eyebrow="Solution"
        title="Final designs"
        blurb="The final prototype takes customers from choosing an amount to confirming their order, with a simple, clear visual design at every step."
        slides={finalSlides}
      />
    </article>
  );
}
