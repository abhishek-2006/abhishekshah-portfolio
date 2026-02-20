import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Analytics } from "@vercel/analytics/next"

const siteConfig = {
  name: "Abhishek Shah",
  title: "Abhishek Shah - Professional Portfolio & Full-Stack Developer",
  description: "Abhishek Shah - Full-stack developer. Explore projects, skills, and contact details to collaborate on web and app development.",
  url: "https://abhishekshah-portfolio.vercel.app",
  image: "https://abhishekshah-portfolio.vercel.app/profile.jpg",
  keywords: [
    "Abhishek", 
    "Abhishek Shah", 
    "Portfolio", 
    "Vercel", 
    "Portfolio Vercel", 
    "Abhishek Shah Portfolio", 
    "Projects", 
    "Abhishek Shah Projects",
    "Software Engineer", 
    "Web Developer",
    "Flutter Developer", 
    "TicTacToe",
    "TicTacToe Game", 
    "Bardoli", 
    "Gujarat"
  ],
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#030712" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name} Portfolio`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: "Abhishek Shah Portfolio",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.image,
        width: 1200,
        height: 630,
        alt: "Abhishek Shah - Full Stack Developer Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/profile.jpg"],
    creator: "@shahabhishek409",
  },

  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },

  other: {
    "platform": "Vercel",
    generator: "Next.js",
    "author": "Abhishek Shah",
    "publisher": "Abhishek Shah",
    "theme-color": "#1a1a1a",
  },
};

function JsonLd() {
  const personSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Abhishek Shah",
      "jobTitle": "Full-Stack Developer",
      "url": "https://abhishekshah-portfolio.vercel.app",
      "image": "https://abhishekshah-portfolio.vercel.app/profile.jpg",
      "sameAs": [
        "https://github.com/abhishek-2006",
        "https://www.linkedin.com/in/abhishek-shah-aa1346326/",
        "https://x.com/shahabhishek409",
        "https://www.instagram.com/abhishekshah_112/"
      ]
    },
  ];
  const websiteSchema = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Abhishek Shah Portfolio",
      "url": "https://abhishekshah-portfolio.vercel.app",
      "description": "Abhishek Shah - Full-stack developer. Explore projects, skills, and contact details to collaborate on web and app development.",
      "keywords": "Abhishek, Abhishek Shah, Portfolio, Vercel, Portfolio Vercel, Abhishek Shah Portfolio, Projects, Abhishek Shah Projects, Software Engineer, Web Developer, Flutter Developer, TicTacToe, TicTacToe Game, Bardoli, Gujarat",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://abhishekshah-portfolio.vercel.app/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
  ];
  const gameSchema = [
    {
      "@context": "https://schema.org",
      "@type" : "SoftwareApplication",
      "name" : "TicTacToe Game",
      "operatingSystem" : "Android",
      "applicationCategory" : "Game",
      "description": "TicTacToe by Abhishek Shah is a clean, fast, and strategic game. Play against AI or friends and enjoy a smooth classic gameplay experience.",
      "image" : "https://abhishekshah-portfolio.vercel.app/tictactoe-logo.png",
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify([personSchema, websiteSchema, gameSchema]) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className="bg-[#1a1a1a] text-white">
        <JsonLd />
        <Navbar/>
        <div className="pt-[0px]">{children}</div>
        <Analytics/>
      </body>
    </html>
  );
}
