import PinnedCarousel, { type Slide } from "@/components/PinnedCarousel";

const capacitySlides: Slide[] = [
  {
    src: "/work/palantir/usage.svg",
    alt: "AIP usage dashboard — model usage over time and per-project usage",
    caption: "View usage",
    body: "This view gives administrators an overview of usage across the enrollment, including capacity, tokens, requests, and how often projects hit their limits.",
  },
  {
    src: "/work/palantir/user-rate-limit-thumb.png",
    alt: "Managing user rate limits for AIP usage",
    caption: "User-scoped usage",
    body: "Foundry divides usage into user-scoped and project-scoped. User-scoped usage is attributed to an individual and sits outside any shared project, typically experimentation or sandbox work. This section lets administrators cap that personal usage so it stays within bounds.",
  },
  {
    src: "/work/palantir/reserved-capacity.gif",
    alt: "Reserved capacity allocation across projects",
    caption: "Reserving capacity",
    body: "From here, administrators can reserve capacity for specific models in their enrollment. Reserved capacity guarantees that designated projects have the throughput they need, regardless of what else is consuming the shared pool.",
  },
];

const costSlides: Slide[] = [
  {
    src: "/work/palantir/budget-spend.svg",
    alt: "AIP Spend — view spend tab with budget history chart and top resources",
    caption: "View budget spend",
    body: "This view shows budget history across three windows (last 24 hours, 7 days, and 30 days), along with any alerts triggered against the budget.",
  },
  {
    src: "/work/palantir/budget-details.svg",
    alt: "AIP Spend — budget details, assigned projects and alert thresholds",
    caption: "View budget details",
    body: "Here, administrators can review a budget and the projects assigned to it, and edit its settings, alerts, and notifications.",
  },
  {
    src: "/work/palantir/budget-configure.svg",
    alt: "Create AIP budget form with budget windows and alert thresholds",
    caption: "Configure a budget",
    body: "Administrators can set up a budget with up to three time periods (24 hours, 7 days, and 30 days), a budget amount, an estimated cost, alert thresholds, and more.",
  },
];

const agentSlides: Slide[] = [
  {
    src: "/work/palantir/agent-wizard.gif",
    ratio: 1.62,
    alt: "Agent studio configuration wizard — name and location step",
    caption: "Agent configuration wizard",
    body: "A guided setup for first-time agent users. It walks them through loading the agent with context (such as documents and Ontology objects), selecting tools, and choosing a model and prompt.",
  },
  {
    src: "/work/palantir/agent-reasoning.svg",
    ratio: 1.62,
    alt: "Agent sandbox with the view reasoning panel open",
    caption: "Visualizing the reasoning process",
    body: "Exposes how an agent works through a request, from the user query to the tools it calls and the actions it takes, so its behavior can be debugged and understood.",
  },
  {
    src: "/work/palantir/agent-parameters.gif",
    ratio: 1.62,
    alt: "Agent parameters panel in the agent sandbox",
    caption: "Agent parameters",
    body: "Lets users define parameters that pass variables into a deployed agent, so it can be used in downstream applications such as Workshop and Logic functions.",
  },
];

const docSlides: Slide[] = [
  {
    src: "/work/palantir/de-config.gif",
    ratio: 1.5975,
    alt: "Document Intelligence — configuring a markdown extraction strategy with a testing input",
    caption: "Configuring extraction strategy",
    body: "Here a user is able to input their testing document or sample and specify their starting and ending page, then configure their extraction strategy (e.g. setting type, model selection, system prompt, user prompt, etc.).",
  },
  {
    src: "/work/palantir/de-review.gif",
    ratio: 1.5975,
    alt: "Document Intelligence — reviewing an extraction run with evaluation metrics",
    caption: "Review a markdown extraction run",
    body: "Users can review a run’s evaluation metrics, run an LLM as a judge over its results, and compare runs against each other. This helps them decide which strategy to promote and deploy.",
  },
  {
    src: "/work/palantir/de-entity.gif",
    ratio: 1.5975,
    alt: "Document Intelligence — adding an entity extraction block after markdown extraction",
    caption: "Entity extraction from markdown strategy",
    body: "Markdown extraction results can be exported into entity extraction by adding an entity extraction block to the chain. Users can then configure the extraction strategy, such as JSON or an object schema defined by the Ontology.",
  },
  {
    src: "/work/palantir/de-entity-run.gif",
    ratio: 1.5975,
    alt: "Document Intelligence — reviewing an entity extraction run and run history",
    caption: "Reviewing an entity extraction run",
    body: "Users can look over entity extraction results, review the updated object set, and check accuracy against the markdown results. Once the results look right, they can save and deploy the markdown and entity extraction strategies together or separately.",
  },
];

export default function PalantirCaseStudy() {
  return (
    <article className="cs">

      <header className="cs-head">
        <div className="eyebrow">Palantir Technologies</div>
        <h1>Designing the AI management experience on Foundry</h1>
      </header>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="cs-banner" src="/work/palantir/hero.svg" alt="Resource Management interface preview" />

      <dl className="cs-meta">
        <div>
          <dt>Duration</dt>
          <dd>
            <span className="meta-row">
              Aug 2025 – Present
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="tag-img" src="/work/palantir/tag-full-time.svg" alt="Full time" />
            </span>
            <span className="meta-row">
              May 2024 – Aug 2024
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="tag-img" src="/work/palantir/tag-internship.svg" alt="Internship" />
            </span>
            <span className="meta-row">
              Aug 2023 – Dec 2023
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="tag-img" src="/work/palantir/tag-internship.svg" alt="Internship" />
            </span>
          </dd>
        </div>
        <div>
          <dt>Context</dt>
          <dd className="cs-context">
            Foundry is an operating system for the enterprise: it connects an organization’s scattered
            data, models it through the Ontology, and turns it into workflows and analytics people can
            act on. I designed across its surfaces, including AI observability, the groundwork for AIP
            agents, and platform security.
          </dd>
        </div>
      </dl>

      <PinnedCarousel
        title="LLM capacity management"
        statusSrc="/work/palantir/tag-shipped.svg"
        statusAlt="Shipped"
        blurb="LLM usage is complex to govern: capacity is capped per model by each provider, and consumption is spread across projects, users, and models. Capacity management gives administrators the observability and controls to understand that usage and allocate it deliberately."
        slides={capacitySlides}
      />

      <PinnedCarousel
        title="LLM cost visibility and management"
        statusSrc="/work/palantir/tag-shipped.svg"
        statusAlt="Shipped"
        blurb="Cost visibility is one of the most consistent requests from AIP users. To adopt AIP on Foundry with confidence, administrators need to open it up to their teams knowing that spend stays predictable and usage stays within bounds."
        slides={costSlides}
      />

      <PinnedCarousel
        title="Building agentic workflows on Foundry"
        statusSrc="/work/palantir/tag-shipped.svg"
        statusAlt="Shipped"
        blurb="During my internship, I led design for the foundation of agents on Foundry: how users are first introduced to agents, how they’re guided through creating one, and which capabilities extend them, such as visible reasoning and configurable parameters."
        slides={agentSlides}
      />

      <PinnedCarousel
        title="Expanding markdown extraction to entity extraction"
        statusSrc="/work/palantir/tag-experimental.svg"
        statusAlt="Experimental"
        blurb="An exploration into extending markdown extraction to entity extraction, along with a testing playground where users can try combinations of markdown and entity extraction strategies before deploying them to production use cases."
        slides={docSlides}
      />
    </article>
  );
}
