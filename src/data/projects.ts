import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    slug: "bazardor",
    title: "BazarDor",
    description:
      "A responsive daily price application for essential goods, with category browsing, price changes, and market comparisons across Bangladesh.",
    detailDescription:
      "BazarDor helps people check daily prices of essential goods such as rice, lentils, oil, vegetables, fish, and meat. Its documented features include daily risers and fallers, category pages with sorting, and market-wise price comparisons.",
    repoUrl: "https://github.com/Maidul-057/Bazardor",
    liveUrl: "https://bazardor-lilac.vercel.app/",
    image: "/images/bazardor.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "DaisyUI", "Better Auth", "MongoDB"],
    developmentChallenges:
      "The repository does not document personal development challenges, so none are claimed here. Its README documents a public price-data API with a fallback source and five-minute revalidation.",
    potentialImprovements: [
      "Potential follow-up: document and monitor the freshness and coverage of the external price-data sources.",
    ],
  },
  {
    slug: "listen-to-learn",
    title: "Listen to Learn",
    description:
      "A personal vocabulary-learning app for managing words, listening to English and Bengali content, and practicing with quizzes.",
    detailDescription:
      "Listen to Learn lets each user maintain a private vocabulary list with English and Bangla meanings, examples, and mnemonics. The README documents audio playback using browser text-to-speech, word search and tags, and multiple-choice vocabulary quizzes.",
    repoUrl: "https://github.com/Maidul-057/Listen-to-Learn",
    image: "/images/listen-to-learn.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Web Speech API"],
    developmentChallenges:
      "The repository does not document personal development challenges, so none are claimed here. Its README does document device-dependent Bengali browser speech support as a known limitation.",
    potentialImprovements: [
      "The README describes Google Cloud Text-to-Speech as a planned way to improve Bengali voice availability.",
      "Unify browser and cloud speech playback with fallback handling, as described in the project documentation.",
    ],
  },
  {
    slug: "serialtrack",
    title: "SerialTrack",
    description:
      "A doctor queue management system with receptionist tools, real-time queue updates, and patient tracking links.",
    detailDescription:
      "SerialTrack allows receptionists to manage hospitals, doctors, and live patient queues. Patients can follow a personalized queue link without an account or app installation. The repository documents real-time updates with Socket.IO and a mock SMS outbox.",
    repoUrl: "https://github.com/Maidul-057/serialtrack",
    image: "/images/serialtrack.png",
    tags: ["React", "Vite", "Node.js", "Express", "Socket.IO", "NeDB", "JWT"],
    developmentChallenges:
      "The repository does not document personal development challenges, so none are claimed here. Its README documents NeDB, mock SMS, and a single Node process as deliberate trade-offs for the current project.",
    potentialImprovements: [
      "Replace mock SMS with a real SMS gateway when one is configured.",
      "Consider the documented MongoDB migration path and a Redis Socket.IO adapter if production scale requires them.",
    ],
  },
];
