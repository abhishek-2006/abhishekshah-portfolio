export const PROJECTS_DATA = [
  {
    slug: "chess",
    name: "Chess",
    title: "Chess – Modern Cross-Platform Chess Application",
    tagline: "A feature-rich, high-performance chess application built with Flutter featuring offline play, smooth animations, and intelligent minimax AI.",
    description: "A modern, beautiful, and feature-rich chess application. Built with Flutter for cross-platform play across Android, Windows, and Web.",
    category: "Mobile Game",
    categoryType: "game",
    tech: ["Flutter", "Dart", "Cross-Platform", "Minimax AI", "Canvas UI"],
    url: "https://github.com/abhishek-2006/Chess",
    liveUrl: "/chess",
    downloadUrl: "/chess",
    isGame: true,
    logo: "/chess-logo.png",
    status: "Completed",
    stats: {
      stars: 1,
      forks: 0,
      license: "MIT",
      platform: "Android / Windows / Web",
    },
    overview:
      "Chess by Abhishek Shah is a modern, high-performance chess application engineered from the ground up using Flutter and Dart. Designed for both desktop and mobile platforms, it features an intelligent AI opponent powered by minimax decision algorithms with alpha-beta pruning, full move validation following international chess rules, move notation history, and custom board themes. Built with an emphasis on fluid animations and responsive performance.",
    highlights: [
      "AI Opponent with intelligent minimax tree evaluation and alpha-beta pruning",
      "Strict FIDE move validation: castling, en passant, pawn promotion",
      "Dual-platform builds for Android and Windows desktop with native feel",
      "Neo-Dark minimalist board aesthetics with smooth piece movement",
      "Move history tracking with reversible steps and clock notation",
    ],
    features: [
      {
        title: "Smart Algorithmic AI",
        description:
          "Engage in challenging offline single-player games powered by recursive minimax decision-tree calculations.",
      },
      {
        title: "Pass & Play Local Multiplayer",
        description:
          "Play head-to-head on a single device with an intuitive touch-friendly flip-board view.",
      },
      {
        title: "Complete Chess Rule Engine",
        description:
          "Full enforcement of international chess rules including check, checkmate, stalemate, and special pawn moves.",
      },
      {
        title: "Cross-Platform Responsive Design",
        description:
          "Single Dart codebase cleanly adapted for touchscreens, mobile displays, and desktop mouse interactions.",
      },
    ],
    architecture: {
      framework: "Flutter 3.x with Dart",
      stateManagement: "Clean Reactive State Pattern with immutable board models",
      aiEngine: "Minimax with Alpha-Beta Pruning (depth-limited for instant mobile response)",
      rendering: "Custom Flutter Canvas painters with coordinate interpolation for 60FPS piece transitions",
    },
  },
  {
    slug: "tictactoe",
    name: "TicTacToe",
    title: "TicTacToe – Neo-Dark Android Edition with Adaptive AI",
    tagline: "A premium Android reimagining of the classic game featuring adaptive AI levels, neo-dark aesthetic, and 60FPS fluid animations.",
    description: "A premium Android edition of the classic game. Built with Flutter, featuring adaptive AI levels and neo-dark aesthetic.",
    category: "Mobile Game",
    categoryType: "game",
    tech: ["Flutter", "Dart", "Android", "Adaptive AI", "Mobile UX"],
    url: "https://github.com/abhishek-2006/Tictactoe",
    liveUrl: "/tictactoe",
    downloadUrl: "/tictactoe",
    isGame: true,
    logo: "/tictactoe-logo.png",
    status: "Completed",
    stats: {
      stars: 1,
      forks: 0,
      license: "MIT",
      platform: "Android / Web",
    },
    overview:
      "TicTacToe is a premium reimagining of the timeless strategy game, crafted with Flutter for Android and web. It breaks away from generic grid games through high-refresh-rate animations, haptic feedback cues, a cyberpunk-inspired dark palette, and an adaptive heuristic AI that ranges from forgiving practice modes to an unbeatable minimax difficulty level.",
    highlights: [
      "Adaptive AI engine with Easy, Medium, and Unbeatable Minimax difficulties",
      "Fluid 60FPS animations, neon board glows, and custom particle victory effects",
      "Dedicated two-player local pass-and-play match mode",
      "Persistent session statistics and win-streak tracking",
      "Lightweight production APK under 15MB with instant load times",
    ],
    features: [
      {
        title: "Adaptive AI Opponents",
        description:
          "Toggle between casual heuristic AI and an unbeatable minimax algorithm for players of all skill levels.",
      },
      {
        title: "Neo-Dark Aesthetic",
        description:
          "Sleek dark theme featuring electric cyan and violet accents with luminous player tokens.",
      },
      {
        title: "Score & Streak Tracker",
        description:
          "Keep track of lifetime scores, win percentages, and winning streaks across multiple rounds.",
      },
      {
        title: "Android Native Optimization",
        description:
          "Customized specifically for Android devices with touch haptics and edge-to-edge system navigation.",
      },
    ],
    architecture: {
      framework: "Flutter with Dart",
      stateManagement: "Provider / ValueNotifier lightweight reactive bindings",
      aiEngine: "Recursive Heuristic Minimax decision matrix with memoization",
      rendering: "Hardware-accelerated Impeller/Skia renderer with zero frame drops",
    },
  },
  {
    slug: "currency-converter",
    name: "Currency Converter",
    title: "Currency Converter – Real-Time Global Exchange Rate Tool",
    tagline: "A lightning-fast financial tool featuring real-time exchange rates via API integration with zero latency.",
    description: "A lightning-fast financial tool featuring real-time exchange rates via API integration. Focused on precision, speed, and clean mobile responsiveness.",
    category: "Web Utility",
    categoryType: "web",
    tech: ["JavaScript", "REST API", "TailwindCSS", "HTML5", "CSS3"],
    url: "https://github.com/abhishek-2006/Currency-Converter",
    liveUrl: "https://abhishek-2006.github.io/Currency-Converter",
    downloadUrl: null,
    isGame: false,
    logo: "/favicon.ico",
    status: "Completed",
    stats: {
      stars: 1,
      forks: 0,
      license: "MIT",
      platform: "Web (All Devices)",
    },
    overview:
      "A lightweight, rapid-response currency exchange calculator that integrates with live financial APIs to deliver up-to-the-minute global exchange rates across 160+ world currencies. Engineered with vanilla JavaScript and Tailwind CSS for near-zero runtime overhead and instantaneous calculations as you type.",
    highlights: [
      "Live foreign exchange rates for 160+ fiat currencies",
      "Instant bidirectional conversion as the user types without page reloads",
      "Smart client-side caching to reduce redundant network hits and respect API rate limits",
      "Fully mobile-responsive glassmorphism user interface designed with Tailwind CSS",
    ],
    features: [
      {
        title: "Real-Time Exchange Data",
        description:
          "Directly queries foreign exchange API endpoints for accurate market conversion rates.",
      },
      {
        title: "Searchable Country Selector",
        description:
          "Quickly locate currencies by ISO code, symbol, or country name with instant filtering.",
      },
      {
        title: "One-Click Currency Swap",
        description:
          "Single-tap toggle to invert source and target currencies without re-entering values.",
      },
      {
        title: "Offline Fallback Cache",
        description:
          "Saves latest known rates in LocalStorage for uninterrupted calculation during intermittent connectivity.",
      },
    ],
    architecture: {
      framework: "Vanilla Modern JavaScript (ES6+)",
      styling: "Tailwind CSS with custom glassmorphism utilities",
      networking: "Asynchronous Fetch API with debounce and request deduplication",
      storage: "Browser LocalStorage for cached exchange rates and user currency preferences",
    },
  },
  {
    slug: "hotel-management-system",
    name: "Hotel Management System",
    title: "Hotel Management System – Full-Stack Enterprise Admin Portal",
    tagline: "Enterprise administrative portal for room reservations, billing, guest check-in, and staff tracking.",
    description: "Enterprise administrative portal for room reservations, billing, and staff tracking built with PHP and MySQL.",
    category: "Full Stack",
    categoryType: "fullstack",
    tech: ["PHP", "MySQL", "Bootstrap", "JavaScript", "HTML/CSS"],
    url: "https://github.com/abhishek-2006",
    liveUrl: null,
    downloadUrl: null,
    isGame: false,
    logo: "/favicon.ico",
    status: "Completed",
    stats: {
      stars: 1,
      forks: 0,
      license: "Proprietary / Educational",
      platform: "Web Application",
    },
    overview:
      "A full-featured hospitality management system engineered to automate front-desk and back-office hotel operations. From booking reservations and assigning room categories to invoicing, guest checkout, and staff attendance monitoring, this system simplifies day-to-day administrative complexity through a normalized relational MySQL database.",
    highlights: [
      "Role-based access control (Admin, Receptionist, Staff)",
      "Complete reservation lifecycle management with calendar view",
      "Automated invoice calculation with taxes and itemized service charges",
      "Relational schema ensuring data consistency across rooms and bookings",
    ],
    features: [
      {
        title: "Room Availability Tracker",
        description:
          "Real-time status tracking for Deluxe, Suite, and Standard rooms (Vacant, Occupied, Maintenance).",
      },
      {
        title: "Billing & Invoicing",
        description:
          "Generates printable bills with automated rate calculations and checkout timestamps.",
      },
      {
        title: "Customer Database",
        description:
          "Stores guest records, identification verification, and repeat booking history.",
      },
      {
        title: "Analytics Dashboard",
        description:
          "Visual metrics displaying daily revenue, occupancy percentage, and peak season logs.",
      },
    ],
    architecture: {
      backend: "PHP backend structured in modular service controllers",
      database: "MySQL with normalized tables (3NF) and foreign key integrity constraints",
      frontend: "Bootstrap 5 responsive admin dashboard layout with jQuery AJAX",
      security: "Prepared statements via PHP PDO to protect against SQL Injection; session-based auth",
    },
  },
];

export function normalizeSlug(val) {
  if (!val) return "";
  return String(val)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function getProjectBySlug(slug) {
  if (!slug) return null;
  const target = normalizeSlug(slug);
  return (
    PROJECTS_DATA.find((p) => normalizeSlug(p.slug) === target || normalizeSlug(p.name) === target) ||
    null
  );
}

export function getAllProjectSlugs() {
  return PROJECTS_DATA.map((p) => p.slug);
}

export function getAllProjects() {
  return PROJECTS_DATA;
}

export async function fetchProjectDetails(slug) {
  const localProject = getProjectBySlug(slug);
  if (localProject) return localProject;

  // Attempt dynamic GitHub lookup for other repositories
  const normalized = normalizeSlug(slug);
  try {
    const headers = {
      "User-Agent": "abhishek-portfolio",
      Accept: "application/vnd.github+json",
    };
    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    // Attempt direct match or fetch repos list to match normalized slug
    const res = await fetch(`https://api.github.com/repos/abhishek-2006/${normalized}`, {
      headers,
      next: { revalidate: 3600 },
    });

    let repo = null;
    if (res.ok) {
      repo = await res.json();
    } else {
      // Search in repos list if name differs by casing/hyphens
      const listRes = await fetch(
        "https://api.github.com/users/abhishek-2006/repos?per_page=100",
        { headers, next: { revalidate: 3600 } }
      );
      if (listRes.ok) {
        const repos = await listRes.json();
        if (Array.isArray(repos)) {
          repo = repos.find((r) => normalizeSlug(r.name) === normalized);
        }
      }
    }

    if (!repo) return null;

    let langs = [];
    try {
      if (repo.languages_url) {
        const langRes = await fetch(repo.languages_url, {
          headers,
          next: { revalidate: 86400 },
        });
        if (langRes.ok) {
          const lData = await langRes.json();
          langs = Object.keys(lData);
        }
      }
    } catch {
      if (repo.language) langs = [repo.language];
    }

    const isTicTacToe = repo.name.toLowerCase().includes("tictactoe");
    const isChess = repo.name.toLowerCase().includes("chess");
    const isGame = isTicTacToe || isChess;

    let category = "Web";
    if (isGame) category = "Android";
    else if (langs.includes("Dart") || langs.includes("Kotlin")) category = "Mobile";
    else if (langs.includes("PHP") || langs.includes("Java")) category = "Full Stack";

    return {
      slug: normalized,
      name: repo.name.replace(/-/g, " "),
      title: `${repo.name.replace(/-/g, " ")} | Abhishek Shah`,
      tagline: repo.description || `Software project built with ${repo.language || "modern technologies"}.`,
      description: repo.description || "Experimental open-source project by Abhishek Shah.",
      category: category,
      categoryType: isGame ? "game" : "web",
      tech: langs.length ? langs : repo.language ? [repo.language] : ["Software"],
      url: repo.html_url,
      liveUrl: isTicTacToe ? "/tictactoe" : isChess ? "/chess" : repo.homepage || null,
      downloadUrl: isTicTacToe ? "/tictactoe" : isChess ? "/chess" : null,
      isGame: isGame,
      logo: isTicTacToe ? "/tictactoe-logo.png" : isChess ? "/chess-logo.png" : "/favicon.ico",
      status: repo.archived ? "Archived" : "Active",
      stats: {
        stars: repo.stargazers_count || 0,
        forks: repo.forks_count || 0,
        license: repo.license?.name || "Open Source",
        platform: "Cross-Platform",
      },
      overview:
        repo.description ||
        `The ${repo.name} repository is an open-source project created and maintained by Abhishek Shah on GitHub.`,
      highlights: [
        `Primary language: ${repo.language || (langs.length ? langs[0] : "Multi-language")}`,
        `Default branch: ${repo.default_branch || "main"}`,
        `Open issues: ${repo.open_issues_count || 0}`,
        `Last updated: ${new Date(repo.pushed_at || repo.updated_at || Date.now()).toLocaleDateString()}`,
      ],
      features: [
        {
          title: "Open Source Codebase",
          description: `Available under ${repo.license?.name || "open source"} terms on GitHub.`,
        },
        {
          title: "Version Controlled",
          description:
            "Structured with Git best practices, clean commits, and modular repository structure.",
        },
      ],
      architecture: {
        language: repo.language || (langs.length ? langs[0] : "General"),
        repository: repo.html_url,
        branch: repo.default_branch || "main",
      },
    };
  } catch (err) {
    console.error(`Error resolving project slug "${slug}":`, err);
    return null;
  }
}

