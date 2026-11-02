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
  title: "Abhishek Shah | Full-Stack Developer & Software Engineer",
  description: "Abhishek Shah is a Full-Stack Developer and Software Engineer from Bardoli, Gujarat, India. Specializing in MERN Stack, Next.js, Flutter, and Android — building scalable web and cross-platform mobile applications.",
  url: "https://abhishekshah-portfolio.vercel.app",
  image: "https://abhishekshah-portfolio.vercel.app/abhishek-shah-full-stack-developer.jpg",
  keywords: [
    "Abhishek Shah",
    "Abhishek Shah Developer",
    "Abhishek Shah Portfolio",
    "Abhishek Shah Full-Stack Developer",
    "Abhishek Shah Software Engineer",
    "Abhishek Shah Web Developer",
    "Abhishek Shah Flutter Developer",
    "Abhishek Shah MERN Stack",
    "Abhishek Shah Next.js Developer",
    "Abhishek Shah Projects",
    "Abhishek Shah Skills",
    "Abhishek Shah Contact",
    "About Abhishek Shah",
    "Full-Stack Developer India",
    "Full-Stack Developer Gujarat",
    "Full-Stack Developer Bardoli",
    "MERN Stack Developer",
    "Next.js Developer",
    "Flutter Developer India",
    "React Developer",
    "Node.js Developer",
    "Software Engineer India",
    "Web Developer India",
    "Android Developer India",
    "Mobile App Developer",
    "Portfolio Website",
    "Developer Portfolio",
    "Chess Game",
    "TicTacToe Game",
    "Abhishek Shah Chess",
    "Abhishek Shah TicTacToe",
    "Abhishek Shah Resume",
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
      "@id": "https://abhishekshah-portfolio.vercel.app/#person",
      "name": "Abhishek Shah",
      "givenName": "Abhishek",
      "familyName": "Shah",
      "jobTitle": "Full-Stack Developer & Software Engineer",
      "description": "Abhishek Shah is a Full-Stack Developer and Software Engineer from Bardoli, Gujarat, India. He specializes in MERN Stack, Next.js, Flutter, and Android app development.",
      "url": "https://abhishekshah-portfolio.vercel.app",
      "image": "https://abhishekshah-portfolio.vercel.app/abhishek-shah-full-stack-developer.jpg",
      "email": "shahabhishek051@gmail.com",
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
        "addressCountry": "IN"
      },
      "nationality": "Indian",
      "knowsAbout": [
        "MERN Stack Development",
        "Full-Stack Web Development",
        "Flutter",
        "Android Development",
        "React",
        "Next.js",
        "Node.js",
        "MongoDB",
        "TypeScript",
        "RESTful APIs"
      ]
    },
  ];
  const websiteSchema = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://abhishekshah-portfolio.vercel.app/#website",
      "name": "Abhishek Shah | Full-Stack Developer Portfolio",
      "url": "https://abhishekshah-portfolio.vercel.app",
      "description": "Abhishek Shah is a Full-Stack Developer and Software Engineer specializing in MERN Stack, Next.js, Flutter, and Android — building scalable web and cross-platform mobile apps.",
      "author": { "@id": "https://abhishekshah-portfolio.vercel.app/#person" },
      "copyrightYear": 2024,
      "copyrightNotice": "Copyright © Abhishek Shah. All rights reserved.",
      "inLanguage": "en-US"
    },
  ];
  const gameSchema = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "TicTacToe Game by Abhishek Shah",
      "operatingSystem": "Android, Web, Windows",
      "applicationCategory": "GameApplication",
      "description": "TicTacToe by Abhishek Shah is a clean, fast, and strategic game. Play against AI or friends and enjoy a smooth classic gameplay experience.",
      "image": "https://abhishekshah-portfolio.vercel.app/tictactoe-logo.png",
      "url": "https://abhishekshah-portfolio.vercel.app/tictactoe",
      "author": { "@id": "https://abhishekshah-portfolio.vercel.app/#person" }
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Chess Game by Abhishek Shah",
      "operatingSystem": "Windows, Linux, Web, Android",
      "applicationCategory": "GameApplication",
      "description": "Chess by Abhishek Shah is a modern, beautiful, and feature-rich cross-platform application with advanced piece movements.",
      "image": "https://abhishekshah-portfolio.vercel.app/chess-logo.png",
      "url": "https://abhishekshah-portfolio.vercel.app/chess",
      "author": { "@id": "https://abhishekshah-portfolio.vercel.app/#person" }
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