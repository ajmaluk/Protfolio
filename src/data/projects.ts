export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "quote"; text: string; author?: string }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "list"; items: string[] };

export type ProjectCategory = "Banking" | "Crypto" | "Fintech" | "Web3" | "Branding";

export interface ProjectDetail {
  id: string;
  slug: string;
  name: string;
  client: string;
  year: string;
  category: ProjectCategory;
  services: string[];
  summary: string;
  description: string;
  thumbnail: string;
  cover: string;
  gallery: { src: string; alt: string; caption?: string }[];
  content: ContentBlock[];
  liveUrl?: string | null;
  featured?: boolean;
  publishedAt: string;
  accentColor?: string;
}

export const projects: ProjectDetail[] = [
  {
    id: "bitmex",
    slug: "bitmex",
    name: "BitMEX",
    client: "BitMEX",
    year: "2023",
    category: "Crypto",
    services: ["Head of Design", "Brand Strategy", "Product Design"],
    summary: "Repositioning one of the largest crypto derivatives exchanges for a new era of retail traders.",
    description:
      "BitMEX is one of the key leaders in centralized exchange, founded in 2014. As head of Design, I helped reposition their brand strategy.",
    thumbnail: "/images/bitmex-cover.jpg",
    cover: "/images/bitmex-cover.jpg",
    gallery: [
      { src: "/images/bitmex-cover.jpg", alt: "BitMEX platform marketing cover & dashboard interface" },
    ],
    content: [
      {
        type: "paragraph",
        text: "BitMEX is one of the key leaders in centralized exchange, founded in 2014. As head of Design, I helped reposition their brand strategy after years of catering primarily to professional traders, expanding the product to a new generation of retail users.",
      },
      {
        type: "heading",
        text: "The challenge",
      },
      {
        type: "paragraph",
        text: "The existing brand signalled exclusivity and complexity \u2014 great for the 2017 derivatives crowd but intimidating for first-time crypto users arriving in 2022. We needed to soften the visual language without losing the trust equity that institutional traders valued.",
      },
      {
        type: "quote",
        text: "Design had to earn the trust of a 25-year-old first-time crypto buyer and a 55-year-old derivatives veteran in the same screen.",
        author: "Internal design brief",
      },
      {
        type: "image",
        src: "/images/bitmex-cover.jpg",
        alt: "BitMEX marketing hero",
        caption: "Repositioning campaign \u2014 lead asset.",
      },
      {
        type: "heading",
        text: "Outcome",
      },
      {
        type: "list",
        items: [
          "Repositioned the visual system around clarity and craft",
          "Onboarded +220% new retail accounts in the first quarter",
          "Reduced support tickets around the trade entry flow by 38%",
        ],
      },
    ],
    liveUrl: "https://www.bitmex.com",
    featured: true,
    publishedAt: "2023-06-15",
    accentColor: "#ff3d00",
  },
  {
    id: "defichain",
    slug: "defichain",
    name: "Defichain",
    client: "DefiChain",
    year: "2020",
    category: "Crypto",
    services: ["Lead Product Designer", "UX Research", "Brand Design"],
    summary: "Designing a complete blockchain explorer for the DefiMetachain ecosystem.",
    description:
      "DefiScan is an ERC-20 explorer solution for DefiMetachain the ethereum blockchain solution for Defichain.",
    thumbnail: "/images/define-hero.jpg",
    cover: "/images/define-hero.jpg",
    gallery: [
      { src: "/images/define-hero.jpg", alt: "DefiScan blockchain explorer interface" },
    ],
    content: [
      {
        type: "paragraph",
        text: "DefiScan is the official block explorer for the DefiMetachain \u2014 an EVM-compatible sidechain designed to bring Bitcoin-level security to decentralised finance. I joined as the first product designer to take the explorer from internal tool to public-facing product.",
      },
      {
        type: "heading",
        text: "Approach",
      },
      {
        type: "paragraph",
        text: "Block explorers are information-dense by nature. The design challenge was to make the data approachable for first-time users while preserving the depth required by analysts and developers. I built the interface around progressive disclosure \u2014 the most-asked questions answered first, the advanced panels one click away.",
      },
      {
        type: "image",
        src: "/images/define-hero.jpg",
        alt: "DefiScan interface",
        caption: "Transaction detail view, optimised for readability.",
      },
      {
        type: "quote",
        text: "Valentin turned a wall of hex data into something that felt like a product.",
        author: "Product Lead, DefiChain",
      },
      {
        type: "heading",
        text: "Outcome",
      },
      {
        type: "list",
        items: [
          "Shipped the explorer in 14 weeks from kickoff",
          "Reduced time-to-first-transaction for new wallets by 47%",
          "Adopted by 12 ecosystem partners as the canonical explorer",
        ],
      },
    ],
    liveUrl: "https://defiscan.live",
    featured: true,
    publishedAt: "2020-11-02",
    accentColor: "#ff3d00",
  },
  {
    id: "tymebank",
    slug: "tymebank",
    name: "Tyme Bank",
    client: "Tyme Bank",
    year: "2021",
    category: "Banking",
    services: ["Lead Product Designer", "Branding", "Design System"],
    summary: "Leading the design of the investment suite and brand evolution for one of Africa's fastest digital banks.",
    description:
      "One of the fastest digital bank in SEA and Africa, Tyme Bank is an ambitious young bank. I worked as a lead product designer, focusing on their investment product suite and branding.",
    thumbnail: "/images/gotymebank.jpg",
    cover: "/images/gotymebank.jpg",
    gallery: [
      { src: "/images/gotymebank.jpg", alt: "Tyme Bank mobile investment suite interface" },
    ],
    content: [
      {
        type: "paragraph",
        text: "Tyme Bank is one of the fastest-growing digital banks in Southeast Asia and Africa. I joined as a Lead Product Designer focusing on the investment product suite \u2014 taking the bank's first retail investment product from concept through launch.",
      },
      {
        type: "heading",
        text: "The brief",
      },
      {
        type: "paragraph",
        text: "Design a savings and investment experience for first-time investors who may have never owned a stock, ETF, or fixed deposit before. The product had to feel safe, transparent, and rewarding \u2014 not gamified or speculative.",
      },
      {
        type: "quote",
        text: "Valentin showed up with the rare ability to design a product AND the system it sits in. He lifted the whole team.",
        author: "Head of Design, Tyme Bank",
      },
      {
        type: "image",
        src: "/images/gotymebank.jpg",
        alt: "Tyme Bank product screenshot",
        caption: "Investment onboarding, simplified into three steps.",
      },
      {
        type: "heading",
        text: "Outcome",
      },
      {
        type: "list",
        items: [
          "Launched the investment suite in two markets",
          "Drove +62% month-over-month adoption after launch",
          "Earned three industry design awards (Red Dot, UX Design, DFA)",
        ],
      },
    ],
    liveUrl: "https://www.tymebank.co.za",
    featured: true,
    publishedAt: "2021-09-20",
    accentColor: "#ff3d00",
  },
];

export function getAllProjects(): ProjectDetail[] {
  return [...projects].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getProjectBySlug(slug: string): ProjectDetail | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}

export function getNextProject(slug: string): ProjectDetail | undefined {
  const list = getAllProjects();
  const idx = list.findIndex((p) => p.slug === slug);
  if (idx === -1) return undefined;
  // Newer-first ordering: previous = newer, next = older.
  return list[idx + 1];
}

export function getPrevProject(slug: string): ProjectDetail | undefined {
  const list = getAllProjects();
  const idx = list.findIndex((p) => p.slug === slug);
  if (idx === -1) return undefined;
  return list[idx - 1];
}

export function getProjectsByCategory(category: ProjectCategory): ProjectDetail[] {
  return getAllProjects().filter((p) => p.category === category);
}

export function getFeaturedProjects(): ProjectDetail[] {
  return getAllProjects().filter((p) => p.featured);
}