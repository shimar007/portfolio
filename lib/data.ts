export const projects = [
  {
    num: "01",
    title: "LLM Studio",
    description:
      "A production-ready prompt management tool with structured JSON generation, archive-not-delete lifecycle, and optimistic UI updates.",
    tags: ["Next.js", "TypeScript", "Drizzle ORM", "Turso"],
    github: "#",
    live: "#",
  },
  {
    num: "02",
    title: "DAMcore",
    description:
      "Headless Digital Asset Management system with CMS integrations for 7 platforms, multi-select batch ops, and drag-and-drop upload.",
    tags: ["React", "REST API", "Contentful", "Sanity"],
    github: "#",
    live: "#",
  },
  {
    num: "03",
    title: "KidLearn",
    description:
      "Educational mobile app for toddlers covering animals, phonics, numbers, and shapes. Built with Expo and deployed via TestFlight.",
    tags: ["React Native", "Expo", "iOS"],
    github: "#",
    live: "#",
  },
];

export const skills = [
  {
    label: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "React Native"],
  },
  {
    label: "Backend",
    items: ["Node.js", "REST APIs", "GraphQL", "Drizzle ORM", "SQLite / Turso"],
  },
  {
    label: "AI / LLM",
    items: [
      "Anthropic API",
      "OpenAI",
      "Structured outputs",
      "Prompt engineering",
    ],
  },
  {
    label: "Tools & DevOps",
    items: ["Git", "Vercel", "Expo", "Figma", "Docker"],
  },
];

export const posts = [
  {
    date: "Apr 2025",
    title: "Building production-ready LLM apps with Next.js",
    excerpt:
      "How I structured a prompt management system with archive lifecycles, optimistic UI, and structured JSON output from the Anthropic API.",
    slug: "llm-apps-nextjs",
  },
  {
    date: "Feb 2025",
    title: "Headless CMS integrations: lessons from building DAMcore",
    excerpt:
      "A deep dive into building a single-component DAM system that speaks to seven different CMS platforms without losing its mind.",
    slug: "damcore-cms-integrations",
  },
  {
    date: "Jan 2025",
    title: "Expo Go to TestFlight: shipping a React Native app",
    excerpt:
      "The full journey of building and deploying a mobile educational app — from first component to a kid actually using it on an iPad.",
    slug: "expo-to-testflight",
  },
];