import ChessPage from "./chessPage";

export const metadata = {
    title: 'Chess Game | Abhishek Shah',
    description: "Chess by Abhishek Shah is a clean, fast, and strategic game. Play against AI or friends and enjoy a smooth classic gameplay experience.",
    alternates: {
      canonical: "https://abhishekshah-portfolio.vercel.app/chess"
    },
    openGraph: {
        title: 'Chess Game | Abhishek Shah',
        description: "Chess by Abhishek Shah is a clean, fast, and strategic game. Play against AI or friends and enjoy a smooth classic gameplay experience.",
        url: "https://abhishekshah-portfolio.vercel.app/chess",
        locale: "en_US",
        images: ["https://abhishekshah-portfolio.vercel.app/chess-logo.png"],
        siteName: "Abhishek Shah Portfolio"
    },
    keywords: [
        "Chess Game",
        "Abhishek Shah Chess",
        "Chess by Abhishek Shah",
        "Chess Game by Abhishek Shah",
        "Abhishek's Chess Game",
        "Abhishek's Chess",
        "Abhishek Shah Chess Game",
        "Shatranj Game",
        "Play Chess offline",
        "Offline Chess Game",
        "Offline chess download",
        "Chess offline",
        "Offline Chess",
        "Chess AI opponent",
        "Chess multiplayer",
        "Chess strategy",
        "Chess classic game",
        "Chess for Android",
        "Chess for Windows",
        "Chess free game",
        "Chess download",
        "Chess app",
        "Chess fun game",
        "Chess competitive game",
        "Download chess offline",
        "play chess offline",
        "best chess game",
        "shatranj game",
        "chess game by abhishek shah",
        "chess game for android",
        "Chess download for windows",
        "Chess multiplayer game",
    ],
    twitter: {
        card: "summary_large_image",
        title: 'Chess Game | Abhishek Shah',
        description: "Chess by Abhishek Shah is a clean, fast, and strategic game. Play against AI or friends and enjoy a smooth classic gameplay experience.",
        images: ["https://abhishekshah-portfolio.vercel.app/chess-logo.png"],
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

export default function page() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Chess Game",
        "description": "Chess by Abhishek Shah is a clean, fast, and strategic game. Play against AI or friends and enjoy a smooth classic gameplay experience.",
        "operatingSystem": ["Android", "Windows", "Web", "Linux"],
        "applicationCategory": "GameApplication",
        "image": "https://abhishekshah-portfolio.vercel.app/chess-logo.png",
        "url": "https://abhishekshah-portfolio.vercel.app/chess",
        "author": {
            "@type": "Person",
            "name": "Abhishek Shah",
            "email": "shahabhishek051@gmail.com",
            "url": "https://abhishekshah-portfolio.vercel.app",
            "sameAs": [
                "https://github.com/abhishek-2006",
                "https://www.linkedin.com/in/abhishekshah-dev/",
                "https://x.com/shahabhishek409",
                "https://www.instagram.com/abhishekshah_112/"
            ]
        }
    };

    return (
        <>
            <script type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <ChessPage />
        </>
    );
}