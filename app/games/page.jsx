import GamesPage from "./GamesPage";

export const metadata = {
  title: "Games by Abhishek Shah | Tic Tac Toe, Chess & More",
  description: "Play interactive games built by Abhishek Shah including Tic Tac Toe, Chess, and more. Play online against AI or friends with multiplayer support.",
  alternates: {
    canonical: "https://abhishekshah-portfolio.vercel.app/games"
  },
  keywords: [
    "Games by Abhishek Shah",
    "Games by Abhishek",
    "Abhishek Shah game",
    "Abhishek Shah games",
    "Offline games",
    "Tic Tac Toe game",
    "Chess game",
    "Interactive games",
    "Multiplayer games",
    "AI games",
    "Strategy games",
    "Play online games",
    "Game collection",
    "Free offline games",
    "Games by developer",
    "Games by Abhishek Shah Portfolio",
    "Games by Abhishek Shah website",
    "Games by Abhishek Shah offline",
    "Games by Abhishek Shah free",
    "Games by Abhishek Shah play",
    "Games by Abhishek Shah AI",
    "Games by Abhishek Shah multiplayer",
  ],
  openGraph: {
    title: "Games by Abhishek Shah | Tic Tac Toe, Chess & More",
    description: "Play interactive games built by Abhishek Shah including Tic Tac Toe, Chess, and more. Play online against AI or friends with multiplayer support.",
    url: "https://abhishekshah-portfolio.vercel.app/games",
    siteName: "Abhishek Shah Portfolio",
    locale: "en_US",
    images: [
      {
        url: "https://abhishekshah-portfolio.vercel.app/abhishek-shah-full-stack-developer.jpg",
        width: 1200,
        height: 630,
        alt: "Games by Abhishek Shah",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Games by Abhishek Shah | Tic Tac Toe, Chess & More",
    description: "Play interactive games built by Abhishek Shah with AI and multiplayer support.",
    images: ["https://abhishekshah-portfolio.vercel.app/abhishek-shah-full-stack-developer.jpg"],
    creator: "@shahabhishek409",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
    bingBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  authors: [{ name: "Abhishek Shah", url: "https://abhishekshah-portfolio.vercel.app" }],
};

function GamesJsonLd() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Games by Abhishek Shah",
      "description": "A collection of interactive games built by Abhishek Shah.",
      "url": "https://abhishekshah-portfolio.vercel.app/games",
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
      "copyrightYear": new Date().getFullYear(),
      "copyrightNotice": "Copyright © Abhishek Shah. All rights reserved."
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
          "name": "Games",
          "item": "https://abhishekshah-portfolio.vercel.app/games"
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

export default function Page() {
  return (
    <>
      <GamesJsonLd />
      <GamesPage />
    </>
  );
}
