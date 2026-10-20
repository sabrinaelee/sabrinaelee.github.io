export type Project = {
  slug: string;
  title: string;
  /** Text shown on the folder tab */
  tab: string;
  /** Which side of the divider the tab sits on */
  tabSide: "left" | "right";
  role: string;
  year: string;
  summary: string;
  /** Optional screenshot in /public, e.g. "/work/on-deck.png". Falls back to a sketch preview. */
  image?: string;
  /** Accent used by the placeholder preview */
  accent: string;
  /** Folder artwork in /public/folder: the divider (with its tab) and the sheet peeking out of it */
  divider: string;
  sheet: string;
  /** When true, the case study isn't published: not linked, no page, shown as "coming soon". */
  comingSoon?: boolean;
};

// Order matters: first item is the back-most divider in the folder.
export const projects: Project[] = [
  {
    slug: "on-deck",
    comingSoon: true,
    divider: "/folder/on_deck_folder.svg",
    sheet: "/folder/ondeck_id.svg",
    title: "On Deck",
    tab: "ON DECK",
    tabSide: "right",
    role: "Product Design",
    year: "2022",
    summary:
      "Placeholder — describe the problem, your role, and the outcome of your On Deck work here.",
    accent: "#1f2a44",
  },
  {
    slug: "adobe-creative-jam",
    divider: "/folder/adobe_folder.svg",
    sheet: "/folder/nyt_x_adobe_id.svg",
    title: "Adobe Creative Jam",
    tab: "ADOBE CREATIVE JAM",
    tabSide: "left",
    role: "UX / Visual Design",
    year: "2021",
    summary:
      "Placeholder — a news credibility ranking concept. Add your brief, process and final screens.",
    accent: "#22a35a",
  },
  {
    slug: "points",
    divider: "/folder/points_folder.svg",
    sheet: "/folder/points_id.svg",
    title: "Points",
    tab: "POINTS",
    tabSide: "right",
    role: "Product Design",
    year: "2021",
    summary: "Placeholder — describe the Points project here.",
    accent: "#4cc3f0",
  },
  {
    slug: "palantir",
    divider: "/folder/pltr_folder.svg",
    sheet: "/folder/pltr_id.svg",
    title: "Palantir",
    tab: "PALANTIR",
    tabSide: "left",
    role: "Product Design Intern",
    year: "2023",
    summary:
      "Placeholder — resource management tooling. Add context, constraints and impact.",
    accent: "#2bb3a3",
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
