import TicTacToePage from "./TicTacToePage";

export const metadata = {
    title: 'Tic Tac Toe Game | Abhishek Shah',
    description: "TicTacToe by Abhishek Shah is a clean, fast, and strategic game. Play against AI or friends and enjoy a smooth classic gameplay experience.",
    alternates: {
      canonical: "https://abhishekshah-portfolio.vercel.app/tictactoe"
    },
    openGraph: {
        title: 'Tic Tac Toe Game | Abhishek Shah',
        description: "TicTacToe by Abhishek Shah is a clean, fast, and strategic game. Play against AI or friends and enjoy a smooth classic gameplay experience.",
        url: "https://abhishekshah-portfolio.vercel.app/tictactoe",
        locale: "en_US",
        images: ["https://abhishekshah-portfolio.vercel.app/tictactoe-logo.png"],
        siteName: "Abhishek Shah Portfolio"
    },
    keywords: [
        "Tic Tac Toe",
        "Abhishek Shah Tic Tac Toe",
        "Abhishek Shah Tic Tac Toe Game",
        "Tic Tac Toe game by Abhishek Shah",
        "Tic Tac Toe offline game",
        "Tic Tac Toe Game",
        "Tic Tac Toe by Abhishek Shah",
        "Tic Tac Toe offline",
        "Offline Tic Tac Toe",
        "Tic Tac Toe AI opponent",
        "Tic Tac Toe multiplayer",
        "Tic Tac Toe strategy",
        "Tic Tac Toe classic game",
        "Tic Tac Toe for Android",
        "Tic Tac Toe for Windows",
        "Tic Tac Toe free game",
        "Tic Tac Toe download",
        "Tic Tac Toe app",
        "xoxo game",
        "xoxo game online",
        "Tic Tac Toe fun game",
        "Tic Tac Toe competitive game",
        "xxo game online",
    ],
    twitter: {
        card: "summary_large_image",
        title: 'Tic Tac Toe Game | Abhishek Shah',
        description: "TicTacToe by Abhishek Shah is a clean, fast, and strategic game. Play against AI or friends and enjoy a smooth classic gameplay experience.",
        images: ["https://abhishekshah-portfolio.vercel.app/tictactoe-logo.png"],
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
        "name": "TicTacToe Game",
        "description": "TicTacToe by Abhishek Shah is a clean, fast, and strategic game. Play against AI or friends and enjoy a smooth classic gameplay experience.",
        "operatingSystem": ["Android", "Windows", "Web"],
        "applicationCategory": "GameApplication",
        "image": "https://abhishekshah-portfolio.vercel.app/tictactoe-logo.png",
        "url": "https://abhishekshah-portfolio.vercel.app/tictactoe",
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
        }
    };

    return (
        <>
            <script type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <TicTacToePage />
        </>
    );
}