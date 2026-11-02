export const metadata = {
  title: "Projects & Portfolio | Abhishek Shah",
  description: "Explore Abhishek Shah’s portfolio of real-world projects, featuring full-stack applications, modern web solutions, mobile apps, and scalable systems.",
  alternates: {
    canonical: "https://abhishekshah-portfolio.vercel.app/projects",
  },
  keywords: [
    "Abhishek Projects",
    "Abhishek Shah projects",
    "Abhishek Shah projects portfolio",
    "Abhishek Shah project showcase",
    "Abhishek Shah portfolio projects",
    "Abhishek Shah development projects",
    "Abhishek Shah portfolio",
    "Full stack developer projects",
    "Web development projects",
    "Software development projects",
    "Mobile app development projects",
    "React projects",
    "Flutter projects",
    "Native Android projects",
    "Node.js projects",
    "Next.js projects",
    "JavaScript projects",
    "TypeScript projects",
    "Abhishek Shah web solutions",
    "Abhishek Shah real-world projects",
    "Abhishek Shah coding projects",
    "Full stack projects",
    "Modern web projects",
    "Abhishek Shah development work",
    "Frontend projects",
    "Backend projects"
  ],
  openGraph: {
    title: "Projects & Portfolio | Abhishek Shah",
    description: "Explore Abhishek Shah’s portfolio of real-world projects, featuring full-stack applications, modern web solutions, mobile apps, and scalable systems.",
    url: "https://abhishekshah-portfolio.vercel.app/projects",
    siteName: "Abhishek Shah Portfolio",
    locale: "en_US",
    images: [{ url: "https://abhishekshah-portfolio.vercel.app/abhishek-shah-full-stack-developer.jpg", width: 1200, height: 630, alt: "Abhishek Shah Projects Portfolio" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects & Portfolio | Abhishek Shah",
    description: "Explore Abhishek Shah’s portfolio of real-world projects, featuring full-stack applications, modern web solutions, mobile apps, and scalable systems.",
    images: ["https://abhishekshah-portfolio.vercel.app/abhishek-shah-full-stack-developer.jpg"],
    creator: "@shahabhishek409",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
    bingBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  authors: [{ name: "Abhishek Shah", url: "https://abhishekshah-portfolio.vercel.app" }],
};

function ProjectsJsonLd() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Projects & Portfolio | Abhishek Shah",
      "description": "A collection of software development projects by Abhishek Shah, featuring full-stack applications, modern web solutions, and mobile apps.",
      "url": "https://abhishekshah-portfolio.vercel.app/projects",
      "author": {
        "@type": "Person",
        "name": "Abhishek Shah",
        "url": "https://abhishekshah-portfolio.vercel.app",
        "sameAs": [
          "https://github.com/abhishek-2006",
          "https://www.linkedin.com/in/abhishekshah-dev/",
          "https://x.com/shahabhishek409",
          "https://www.instagram.com/abhishekshah_112/"
        ]
      },
      "mainEntity": {
        "@type": "Person",
        "name": "Abhishek Shah",
        "jobTitle": "Professional Full-Stack Developer",
        "description": "Developer specializing in MERN Stack, Flutter, and modern web technologies.",
        "expertise": ["Full-Stack Web Development", "Mobile App Development", "JavaScript", "React", "Next.js", "Node.js", "Flutter"]
      },
      "copyrightYear": new Date().getFullYear(),
      "copyrightNotice": "Copyright © Abhishek Shah. All rights reserved."
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "TicTacToe Game",
      "description": "Interactive Tic Tac Toe game built with modern web technologies featuring AI opponent and multiplayer support.",
      "applicationCategory": "GameApplication",
      "operatingSystem": ["Android", "Windows", "Web"],
      "author": {
        "@type": "Person",
        "name": "Abhishek Shah",
        "url": "https://abhishekshah-portfolio.vercel.app",
        "sameAs": [
          "https://github.com/abhishek-2006",
          "https://www.linkedin.com/in/abhishekshah-dev/",
          "https://x.com/shahabhishek409",
          "https://www.instagram.com/abhishekshah_112/"
        ]
      },
      "url": "https://abhishekshah-portfolio.vercel.app/tictactoe",
      "inLanguage": "en"
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Chess Game",
      "description": "Feature-rich Chess game with advanced piece movements, AI opponent, and multiplayer support for web and mobile platforms.",
      "applicationCategory": "GameApplication",
      "operatingSystem": ["Android", "Windows", "Web", "Linux"],
      "author": {
        "@type": "Person",
        "name": "Abhishek Shah",
        "url": "https://abhishekshah-portfolio.vercel.app",
        "sameAs": [
          "https://github.com/abhishek-2006",
          "https://www.linkedin.com/in/abhishekshah-dev/",
          "https://x.com/shahabhishek409",
          "https://www.instagram.com/abhishekshah_112/"
        ]
      },
      "url": "https://abhishekshah-portfolio.vercel.app/chess",
      "inLanguage": "en"
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://abhishekshah-portfolio.vercel.app"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Projects",
          "item": "https://abhishekshah-portfolio.vercel.app/projects"
        }
      ]
    }
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

import ProjectsPage from "./ProjectsPage";
import { GET } from "../api/projects/route";

async function getProjects() {
  try {
    const res = await GET();
    if (res.ok) {
      return await res.json();
    }
  } catch (error) {
    console.error("Failed to fetch projects server-side:", error);
  }
  return null;
}

export default async function page() {
  const initialProjects = await getProjects();

  return (
    <>
      <ProjectsJsonLd />
      <ProjectsPage initialProjects={initialProjects} />
    </>
  );
}