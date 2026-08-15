export const identity = {
  name: "Dari Osorio Junior",
  role: "Senior Full Stack Developer",
  email: "juniorosorio47@gmail.com",
  linkedin: "https://www.linkedin.com/in/dari-osorio-junior-developer",
  github: "https://github.com/juniorosorio47",
  location: "Foz do Iguaçu, Brazil",
  timezone: "UTC-3",
};

export const receiptItems = [
  { qty: "7yr", item: "React / TypeScript" },
  { qty: "6yr", item: "Node.js APIs" },
  { qty: "6yr", item: "Python · Django · FastAPI" },
  { qty: "2x", item: "Enterprise POS platforms" },
  { qty: "1x", item: "Event-ticketing platform" },
  { qty: "1x", item: "B2B SaaS, built solo" },
];

export interface CaseStudy {
  order: string;
  client: string;
  period: string;
  role: string;
  title: string;
  problem: string;
  work: string[];
  stack: string[];
  links?: { label: string; href: string }[];
}

export const cases: CaseStudy[] = [
  {
    order: "#004",
    client: "E-DEPLOY (AN IFOOD COMPANY)",
    period: "2025 — NOW",
    role: "Full Stack Developer",
    title: "3S Checkout",
    problem:
      "Restaurants and markets run sales across counters, kiosks, kitchens and delivery — usually on systems that don't talk to each other.",
    work: [
      "I build full-stack features across the 3S Checkout ecosystem: embedded POS, self-service kiosks, kitchen management and delivery.",
      "Front-end interfaces wired into order management and payment processing back-ends — the part of the stack where a bug costs money at the counter.",
      "Daily work in a cross-functional squad with Product and Design, tuning user journeys to cut transaction time.",
    ],
    stack: ["React", "Node.js", "Python", "Grafana"],
  },
  {
    order: "#003",
    client: "SEU MÉTODO — SOLO",
    period: "FOUNDER & DEVELOPER",
    role: "Creator",
    title: "A B2B SaaS, end to end, alone",
    problem:
      "Deadline-bound service shops — labs, workshops — still run on legacy ERPs that fight how they actually work.",
    work: [
      "I designed, built and launched the whole product: a Kanban workflow engine, automated WhatsApp notifications, a white-label tracking portal.",
      "One adaptive React UI serving three contexts: a high-density backoffice, a touch-first shop floor, a public customer portal.",
      "Every decision — product, architecture, UI — was mine to make and mine to live with.",
    ],
    stack: ["React", "Node.js", "WhatsApp API"],
    links: [
      { label: "VISIT LIVE ↗", href: "https://seumetodo.com" },
      { label: "WATCH DEMO ↗", href: "https://www.youtube.com/watch?v=r4aiKYsN6Pk" },
    ],
  },
  {
    order: "#002",
    client: "YES7 TICKETS — FREELANCE",
    period: "2024 — 2026",
    role: "Full Stack Developer",
    title: "Tickets people pay in installments",
    problem:
      "Brazilian event producers needed to sell tickets online with installment payments, and run the whole operation from their pocket.",
    work: [
      "I built most of the customer-facing storefront of yes7tickets.net in Angular: browsing events, picking seats, paying in installments.",
      "Shipped backend features for the ticketing and order flows in Ruby on Rails with PostgreSQL.",
      "Built the event producer's companion app in React Native, so producers manage sales away from a desk.",
    ],
    stack: ["Angular", "Ruby on Rails", "PostgreSQL", "React Native"],
    links: [{ label: "VISIT LIVE ↗", href: "https://yes7tickets.net" }],
  },
  {
    order: "#001",
    client: "STEFANINI / CENCOSUD",
    period: "2022 — 2025",
    role: "Senior Full Stack Developer",
    title: "Assisted-sales revamp",
    problem:
      "An enterprise retailer's assisted-sales system was slowing staff down, on mobile and on the web.",
    work: [
      "I led the UX/UI modernization end to end: stakeholder needs translated into user-centered architecture.",
      "React and React Native front-ends shipped on high-availability back-ends, streamlining checkouts to boost staff productivity.",
      "Promoted from Analyst to Senior Analyst along the way.",
    ],
    stack: ["React", "React Native", "Python"],
  },
];

export const orderHistory = [
  {
    period: "2019-2021",
    role: "Full Stack Developer",
    detail: "MaestroTech — case management platform for the Jamaican government",
  },
  {
    period: "2019-2022",
    role: "Global IT Support",
    detail: "Valoroso — server ops & monitoring, VOTT Platform",
  },
  {
    period: "2018-2019",
    role: "Intern Software Analyst",
    detail: "Itaipu Technological Park (CELTAB)",
  },
];

export const storeInfo = [
  { label: "LOCATION", value: "Foz do Iguaçu, Brazil (UTC-3)" },
  { label: "WORKS", value: "Remote — worldwide" },
  { label: "LANGUAGES", value: "Portuguese (native) · English (fluent) · Spanish (advanced)" },
  { label: "STACK", value: "React · React Native · TypeScript · Node.js · Python · Java" },
  { label: "CRAFT", value: "POS architecture · kiosk UX · WCAG 2.2 AA accessibility" },
];
