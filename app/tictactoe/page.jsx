export const metadata = {
    "@context": "https://schema.org",
    "@type" : "SoftwareApplication",
    title: 'Tic Tac Toe Game',
    description: "TicTacToe by Abhishek Shah is a clean, fast, and strategic game. Play against AI or friends and enjoy a smooth classic gameplay experience.",
    name : "TicTacToe Game",
    operatingSystem : "Android",
    applicationCategory : "Game",
    image : "https://abhishekshah-portfolio.vercel.app/tictactoe-logo.png",
    alternates : "https://abhishekshah-portfolio.vercel.app/tictactoe"
};

import TicTacToePage from "./TicTacToePage";

export default function page() {
    return <TicTacToePage />
}