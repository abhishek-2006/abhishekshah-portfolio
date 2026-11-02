import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import ClarityProvider from "./components/ClarityProvider";
import MotionProvider from "./components/MotionProvider";
import { Analytics } from "@vercel/analytics/next"
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const siteConfig = {
  name: "Abhishek Shah",
  title: "Abhishek Shah - Professional Full-Stack Developer",
  description: "Abhishek Shah - Full-stack developer. Explore projects, skills, and contact details to collaborate on web and app development.",
  url: "https://abhishekshah-portfolio.vercel.app",
  image: "https://abhishekshah-portfolio.vercel.app/abhishek-shah-full-stack-developer.jpg",
  keywords: [
    "Abhishek", 
    "Abhishek Shah",
    "Portfolio",
    "Personal Portfolio",
    "Personal Portfolio Website",
    "Portfolio Website",
    "Abhishek Portfolio",
    "Abhishek Shah Portfolio",
    "Abhishek Shah Portfolio Vercel",
    "Abhishek Shah Developer",
    "Abhishek Shah Portfolio Website",
    "Abhishek Shah Personal Portfolio",
    "Abhishek Shah Developer Portfolio",
    "Abhishek Shah Software Engineer Portfolio",
    "Abhishek Shah Web Developer Portfolio",
    "Abhishek Shah Flutter Developer Portfolio",
    "Abhishek Shah Full-Stack Developer Portfolio",
    "Abhishek Shah Professional Portfolio",
    "Abhishek Shah Tech Portfolio",
    "Abhishek Shah Projects Portfolio",
    "Abhishek Shah Skills Portfolio",
    "About Abhishek",
    "About Abhishek Shah",
    "Abhishek Shah About Me",
    "Abhishek Shah About",
    "Abhishek Shah Biography",
    "Abhishek Shah Profile",
    "Abhishek Shah Skills",
    "Abhishek Skills",
    "Contact Abhishek",
    "Contact Abhishek Shah",
    "Abhishek Shah Contact",
    "Abhishek Contact", 
    "Vercel", 
    "Portfolio Vercel", 
    "Vercel Portfolio",
    "Projects", 
    "Abhishek Projects",
    "Abhishek Shah Projects",
    "Open Source Projects",
    "MERN Stack Projects",
    "MERN Stack Developer",
    "Full-Stack Developer",
    "Full-Stack Projects",
    "Software Engineer", 
    "Web Developer",
    "Flutter Projects",
    "Flutter Developer", 
    "TicTacToe",
    "TicTacToe Game", 
    "Chess",
    "Chess Game",
    "Abhishek Shah Games",
    "Abhishek Shah TicTacToe",
    "Abhishek Shah TicTacToe Game",
    "Abhishek Shah Chess",
    "Abhishek Shah Chess Game",
    "Abhishek Resume",
    "Abhishek Shah Resume",
    "Resume",
    "CV",
    "Curriculum Vitae",
    "Abhishek CV",
    "Abhishek Shah CV",
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  verification: {
    other: {
      "msvalidate.01": "4029A6DB07AC15E01324DF3414E63DDF",
    }
  },
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
    images: [siteConfig.image],
    creator: "@shahabhishek409",
  },

  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  other: {
    "platform": "Vercel",
    "generator": "Next.js",
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
      "jobTitle": "Professional Full-Stack Developer & Software Engineer",
      "url": "https://abhishekshah-portfolio.vercel.app",
      "image": "https://abhishekshah-portfolio.vercel.app/abhishek-shah-full-stack-developer.jpg",
      "sameAs": [
        "https://github.com/abhishek-2006",
        "https://www.linkedin.com/in/abhishekshah-dev/",
        "https://x.com/shahabhishek409",
        "https://www.instagram.com/abhishekshah_112/"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bardoli",
        "addressRegion": "Gujarat",
        "addressCountry": "India"
      }
    },
  ];
  const websiteSchema = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Abhishek Shah Portfolio",
      "url": "https://abhishekshah-portfolio.vercel.app",
      "description": "Abhishek Shah - Full-stack developer. Explore projects, skills, and contact details to collaborate on web and app development.",
      "keywords": "Abhishek, Abhishek Shah, Portfolio, Abhishek Portfolio, About Abhishek, About Abhishek Shah, Abhishek Shah Skills, Abhishek Skills, Vercel, Portfolio Vercel, Abhishek Shah Portfolio, Projects, Abhishek Shah Projects, Abhishek Projects, Software Engineer, Web Developer, Flutter Developer, TicTacToe, TicTacToe Game, Chess, Chess Game, Bardoli, Gujarat",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://abhishekshah-portfolio.vercel.app/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      },
      "copyrightYear": new Date().getFullYear(),
      "copyrightNotice": "Copyright © Abhishek Shah. All rights reserved."
    },
  ];
  const gameSchema = [
    {
      "@context": "https://schema.org",
      "@type" : "SoftwareApplication",
      "name" : "TicTacToe Game",
      "operatingSystem" : "Android",
      "applicationCategory" : "GameApplication",
      "description": "TicTacToe by Abhishek Shah is a clean, fast, and strategic game. Play against AI or friends and enjoy a smooth classic gameplay experience.",
      "image" : "https://abhishekshah-portfolio.vercel.app/tictactoe-logo.png",
      "copyrightYear": new Date().getFullYear(),
      "copyrightNotice": "Copyright © Abhishek Shah. All rights reserved."
    },
    {
      "@context": "https://schema.org",
      "@type" : "SoftwareApplication",
      "name" : "Chess Game",
      "operatingSystem" : "Windows, Linux, Web, Android",
      "applicationCategory" : "GameApplication",
      "description": "Chess by Abhishek Shah is a modern, beautiful, and feature-rich cross-platform application with advanced piece movements.",
      "image" : "https://abhishekshah-portfolio.vercel.app/chess-logo.png",
      "copyrightYear": new Date().getFullYear(),
      "copyrightNotice": "Copyright © Abhishek Shah. All rights reserved."
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([
          ...personSchema, 
          ...websiteSchema, 
          ...gameSchema
        ]), 
      }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth dark ${plusJakartaSans.variable} ${outfit.variable}`} data-scroll-behavior="smooth">
      <body className="bg-[#1a1a1a] text-white">
        <MotionProvider>
          <ClarityProvider />
          <JsonLd />
          <Navbar/>
          <div className="pt-0">{children}</div>
          <Analytics/>
        </MotionProvider>
      </body>
    </html>
  );
}