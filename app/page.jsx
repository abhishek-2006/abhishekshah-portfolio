import Hero from "@/app/components/Hero";
import FeaturedProjects from "@/app/components/FeaturedProjects";
import MiniAbout from "@/app/components/MiniAbout";

export const metadata = {
  title: "Home - Abhishek Shah",
  description: "Welcome to my portfolio! I'm Abhishek Shah, a passionate full-stack developer and mobile game designer. Explore my projects, skills, and get in touch to collaborate on exciting ventures.",
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
