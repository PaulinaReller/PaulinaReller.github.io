export type ProjectHero =
  | { type: "video"; src: string; poster: string }
  | { type: "image"; src: string };

export type ProjectDetail = {
  slug: string;
  title: string;
  subtitle: string;
  client?: string;
  org: string;
  period: string;
  role: string;
  hero: ProjectHero;
  screens?: { src: string; label: string }[];
  screensNote?: string;
  demo?: { src: string; caption: string };
  summary: string;
  problem: string;
  approach: { title: string; description: string }[];
  features: { title: string; description: string }[];
};

export const projectDetails: Record<string, ProjectDetail> = {
  avenue: {
    slug: "avenue",
    title: "Avenue",
    subtitle: "A subscription video platform for a fitness & wellness trainer",
    client: "Barbara",
    org: "Wellbewell GmbH",
    period: "07/2025 — Present",
    role: "Solo full-stack developer — architecture, backend, frontend, deployment",
    hero: {
      type: "video",
      src: "/projects/avenue/hero-barbara.mp4",
      poster: "/projects/avenue/hero-poster.jpg",
    },
    screens: [
      { src: "/projects/avenue/screens/home.jpg", label: "Landing" },
      { src: "/projects/avenue/screens/serien.jpg", label: "Series overview" },
      {
        src: "/projects/avenue/screens/serien-detail.jpg",
        label: "Series detail",
      },
    ],
    screensNote:
      "Live captures of the test build — landing page, the editorial series overview, and a series detail page in the Vimeo On Demand style.",
    summary:
      "Barbara, a fitness trainer with a following built on in-person classes, wanted to turn her workout series into a recurring subscription product — one calm, single €9.99/month plan that unlocks everything, aimed at an audience 50 and older who don't want to think about tiers or à-la-carte pricing.",
    problem:
      "The target audience is 50 plus: large type, a calm layout, no cluttered menus, and no friction between \"I want to work out\" and actually starting the video. At the same time the business needed real subscription mechanics — trial periods, cancellation, refunds — without a subscription engineer on the team.",
    approach: [
      {
        title: "Frontend & backend logic",
        description:
          "Next.js App Router serves the pages and also owns the access decisions — server components check subscription status before ever rendering a play button.",
      },
      {
        title: "Stripe",
        description:
          "Handles the €9.99/month plan with a 3–4 day free trial. A webhook is the single source of truth for subscription state, writing status changes straight into Supabase.",
      },
      {
        title: "Supabase",
        description:
          "Postgres + Auth + Row Level Security. Login, series/video data, and subscription status all live here, gated so a user can only ever read what they're entitled to.",
      },
      {
        title: "Cloudflare Stream",
        description:
          "Planned final step — video never sits at an open URL. The backend confirms payment first, then issues a short-lived signed URL, so the paywall is enforced at the delivery layer, not just the UI.",
      },
    ],
    features: [
      {
        title: "Video hero loop",
        description:
          "Full-bleed autoplaying hero with a slow-motion loop of Barbara, a poster fallback, and a constant-contrast dark overlay regardless of how bright the underlying footage is.",
      },
      {
        title: "Time-of-day recommendation",
        description:
          "Reads the visitor's local hour client-side and suggests a matching series — e.g. a shorter, energizing routine in the afternoon — rendered after mount to avoid hydration mismatches.",
      },
      {
        title: "Continue watching",
        description:
          "Tracks per-episode progress for logged-in users and resurfaces exactly where they left off, Netflix-style.",
      },
      {
        title: "Series & favourites",
        description:
          "Editorial series overview and detail pages (Vimeo On Demand style: player, info, episode list), plus a watchlist so people can save series for later.",
      },
      {
        title: "Subscription checkout",
        description:
          "Stripe Checkout with a built-in trial, a customer portal for self-service cancellation, and a 14-day money-back path handled manually through Stripe.",
      },
      {
        title: "Access control",
        description:
          "Episodes render a paywall instead of a player until the webhook-confirmed subscription status says otherwise — display-level today, hardened with signed URLs once Cloudflare Stream lands.",
      },
    ],
  },
  "evx-suite": {
    slug: "evx-suite",
    title: "EVx Suite",
    subtitle:
      "A real-time sound-design tool for synthetic electric vehicle sound",
    org: "Impulse Audio Lab",
    period: "10/2024 — Present",
    role: "Frontend developer (Svelte) on a ~8-person C++/Svelte team — owned the sample-library Browser panel end to end",
    hero: {
      type: "image",
      src: "/projects/evx/full-app.jpg",
    },
    demo: {
      src: "/projects/evx/engine-player.html",
      caption:
        "The Engine Player, running standalone with a real harmonics dataset from the tool — switch between 3D, Top, and Side to explore it live.",
    },
    summary:
      "EVx Suite is a desktop tool NVH/sound engineers use to compose synthetic motor sound for electric vehicles: live vehicle telemetry (speed, load, gear, throttle) drives layered audio samples through pitch, EQ, and gain curves in real time, for both interior cabin sound and exterior AVAS alert sound.",
    problem:
      "Sound designers work against sample libraries with hundreds of audio files and overlays across many modules, while live-tuning curves against real vehicle data. The existing file browser was a single flat, unsearchable list — no folders, no tags, no way to preview or organize as the team's library kept growing, which made finding and reusing the right sample a constant bottleneck.",
    approach: [
      {
        title: "C++ audio core",
        description:
          "The synthesis and DSP engine — sample playback, pitching, cascading, EQ, gain curves — runs natively in C++, driven in real time by incoming vehicle data (speed, load, throttle, gear).",
      },
      {
        title: "Webview bridge",
        description:
          "A native OS webview embeds the GUI and exchanges JSON messages with the C++ core in both directions — parameter changes, file commands, live meter data.",
      },
      {
        title: "Svelte component library",
        description:
          "The frontend is a from-scratch atomic design system (atoms → molecules → organisms) in Svelte 5, developed and documented in isolation with Storybook.",
      },
      {
        title: "Browser panel",
        description:
          "My focus: the organism that lets a sound designer find, tag, and drag a sample into any module in the rack, built on top of that shared component library.",
      },
    ],
    features: [
      {
        title: "Tabbed library",
        description:
          "Replaced the old single flat file list with four dedicated tabs — Audio, Overlay, Eone, and Settings — each with its own tree view and content rules.",
      },
      {
        title: "Search, sort & tags",
        description:
          "Full-text search and sorting across the tree, plus a tag/label system with color pickers so designers can group samples their own way.",
      },
      {
        title: "Drag & drop into the rack",
        description:
          "Audio files and overlays can be dragged directly from the browser onto a module, wired through a shared drag-and-drop attachment used across the app.",
      },
      {
        title: "Resizable, foldable panel",
        description:
          "A custom layout shell — drag-to-resize with clamped bounds, a fold/unfold rail, and per-tab footers (including an inline audio player) that adapt to the open tab.",
      },
      {
        title: "Tree abstraction",
        description:
          "Extracted the recursive nesting logic into a domain-free Tree component, separate from BrowserTree's behaviour (search, selection, drag, context menus) — so it can be reused anywhere else in the app.",
      },
      {
        title: "Custom icon set & hotkeys",
        description:
          "Designed a consistent icon set for overlay/mute/solo/live-data/collapse/expand states, plus keyboard shortcuts for the most common browser actions.",
      },
    ],
  },
};

export function getProjectDetail(slug: string): ProjectDetail | undefined {
  return projectDetails[slug];
}
