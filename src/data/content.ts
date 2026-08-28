export const profile = {
  name: "Paulina Reller",
  role: "Computer Science & Design",
  tagline: "Building interfaces where code and craft meet.",
  location: "Munich, Germany",
  email: "paulina.reller@web.de",
  phone: "+49 176 2275516",
  socials: [
    { label: "GitHub", href: "https://github.com/" },
    { label: "LinkedIn", href: "https://linkedin.com/" },
    { label: "Email", href: "mailto:paulina.reller@web.de" },
  ],
  about: `I'm a Computer Science & Design student at Hochschule München, working
  student at Impulse Audio Lab, and trained illustrator (B.A. Illustration,
  HAW Hamburg). I move between code and visual design — building modular,
  data-heavy frontends by day and murals, editorial illustration, and product
  concepts on the side.`,
};

export const experience = [
  {
    role: "Working Student — Software Development & UI/UX Design",
    org: "Impulse Audio Lab, Munich",
    period: "10/2024 — Present",
    description:
      "Conceptualized and developed interactive data visualization tools for vehicle telemetry (EVx Suite). Built modular frontends with Svelte and JavaScript within a component-based architecture.",
  },
  {
    role: "Working Student — Medical App Development",
    org: "Medspace GmbH, Rosenheim",
    period: "01/2024 — 03/2024",
    description:
      "Developed mobile and web-based applications targeting medical prevention.",
  },
  {
    role: "Freelance Artist",
    org: "Independent",
    period: "02/2024 — Present",
    description:
      "Managed the complete production cycle for large-scale murals. Instructed bi-monthly art and illustration masterclasses for adult learners, mentoring students in visual design principles and technique.",
  },
];

export const projects = [
  {
    title: "Studio B",
    subtitle: "Subscription Video Platform",
    org: "Wellbewell GmbH",
    period: "07/2025 — Present",
    description:
      "Architected and built a full-stack subscription video platform from scratch using Next.js, TypeScript, and Supabase (Postgres, Auth, RLS), with Stripe for subscription billing and Cloudflare for signed video delivery.",
    tags: ["Next.js", "TypeScript", "Supabase", "Stripe", "Cloudflare"],
    href: "/work/studio-b",
    image: "/projects/studio-b/hero-poster.jpg",
    quote: {
      text: "[Placeholder quote from Barbara — to be replaced with her actual feedback.]",
      author: "Barbara",
      role: "Founder, Studio B",
    },
  },
  {
    title: "KIM4U",
    subtitle: "RAG Chatbot Prototype for Endometriosis Support",
    org: "with Pia Greilich",
    period: "08/2025 — 09/2025",
    description:
      "Pro-bono technical prototype for a founder's healthcare-ecosystem idea: a retrieval-augmented chatbot that answers endometriosis questions from a curated knowledge base instead of the open web.",
    tags: ["RAG", "Python", "ChromaDB", "OpenAI API", "Gradio"],
    href: "/work/kim4u",
    image: "/projects/kim4u/hero-placeholder.svg",
    quote: {
      text: "She worked in a structured, solution-oriented way, with a clear eye for product logic and usability — and could always explain complex technical decisions to me, as founder, without losing precision.",
      author: "Pia Greilich",
      role: "Founder",
    },
  },
  {
    title: "EVx Suite",
    subtitle: "Real-Time Sound Design for Electric Vehicles",
    org: "Impulse Audio Lab",
    period: "10/2024 — Present",
    description:
      "A real-time sound-design tool for synthetic EV motor sound, driven by live vehicle telemetry. Owned the sample-library Browser panel — Svelte, component-based architecture — on an ~8-person C++/Svelte team.",
    tags: ["Svelte", "TypeScript", "Component Library", "C++ (integration)"],
    href: "/work/evx-suite",
    image: "/projects/evx/full-app.jpg",
    quote: {
      text: "We are consistently impressed by her exceptional technical grasp, paired with a real feel for design and creativity. She's highly engaged, always works in a structured way, and brings incredible enthusiasm to new topics and challenges.",
      author: "Beat Rossmy",
      role: "Lead Senior UI/UX Designer & Mentor, Impulse Audio Lab",
    },
  },
];

export const skills = {
  design: [
    "User Research & Usability Testing",
    "User Interface",
    "User Experience",
    "Wireframing & Prototyping",
    "Accessibility Standards",
  ],
  tools: [
    "GitLab",
    "Figma",
    "Data Visualization",
    "Next.js",
    "CI/CD",
    "Supabase / PostgreSQL",
    "Vercel",
  ],
  languages: ["JavaScript", "Svelte", "Python", "TypeScript"],
  spoken: ["German (native)", "English (professional)"],
};

export const education = [
  {
    school: "Hochschule München (HM)",
    degree: "B.Sc. Computer Science and Design",
    period: "10/2025 — Present",
  },
  {
    school: "Hochschule für Angewandte Wissenschaften Hamburg (HAW)",
    degree: "B.A. Illustration",
    period: "10/2020 — 02/2024",
  },
];
