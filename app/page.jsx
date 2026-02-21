import Hero from "@/app/components/Hero";
import FeaturedProjects from "@/app/components/FeaturedProjects";
import MiniAbout from "@/app/components/MiniAbout";

export const metadata = {
  title: "Home - Abhishek Shah",
  description: "Abhishek Shah - Full-stack developer. Explore projects, skills, and contact details to collaborate on web and app development.",
  alternates: {
    canonical: "https://abhishekshah-portfolio.vercel.app/"
  }
};

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden">
      <h1 className="sr-only">Abhishek Shah | Professional Full-Stack Developer Portfolio on Vercel</h1>
      <Hero />
      <MiniAbout />
      <FeaturedProjects />  
    </main>
  );
}
