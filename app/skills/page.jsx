export const metadata = {
  title: "Skills - Abhishek Shah",
  description: "Explore Abhishek Shah\'s technical skills including Flutter, React, Node.js, and Modern Web technologies.",
  alternates: {
    canonical: "https://abhishekshah-portfolio.vercel.app/skills",
  }
};

import SkillsClient from "./skillsClient";

export default function page() {
    return <SkillsClient />;
}