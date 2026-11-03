"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SignatureBar from "./SignatureBar";
import { ExternalLink, Zap, Github, Gamepad2, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Chess",
    slug: "chess",
    desc: "A modern, beautiful, and feature-rich chess application. Built with Flutter for cross-platform play.",
    tech: ["Flutter", "Dart", "Cross-Platform"],
    githubUrl: "https://github.com/abhishek-2006/Chess", 
    liveUrl: "/chess", 
    category: "Mobile Game",
    isGame: true
  },
  {
    title: "TicTacToe",
    slug: "tictactoe",
    desc: "A premium Android reimagining of the classic game. Features adaptive AI, Neo-Dark UI, and smooth 60FPS animations.",
    tech: ["Flutter", "Dart", "Android"],
    githubUrl: "https://github.com/abhishek-2006/Tictactoe", 
    liveUrl: "/tictactoe", 
    category: "Mobile Game",
    isGame: true
  },
  {
    title: "Currency Converter",
    slug: "currency-converter",
    desc: "A lightning-fast financial tool featuring real-time exchange rates via API integration. Focused on precision and speed.",
    tech: ["JavaScript", "REST API", "TailwindCSS"],
    githubUrl: "https://github.com/abhishek-2006/Currency-Converter",
    liveUrl: "https://abhishek-2006.github.io/Currency-Converter",
    category: "Web Utility"
  }
];

const ProjectCard = ({ project, i }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: i * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className={`group relative p-px rounded-4xl bg-linear-to-b transition-all duration-500 shadow-2xl ${
        project.isGame 
          ? "from-cyan-500/40 via-transparent to-transparent" 
          : "from-white/20 via-transparent to-transparent"
      }`}
    >

      <div className="relative h-full rounded-4xl bg-slate-950/90 backdrop-blur-3xl p-8 flex flex-col border border-white/5 overflow-hidden">
        
        {/* Background Decorative Icon */}
        <div className="absolute -right-4 -top-4 text-white/5 scale-[2.5] group-hover:text-white/10 transition-all duration-700 -rotate-12 group-hover:rotate-0">
          {project.isGame ? <Gamepad2 size={48} /> : <Zap size={48} />}
        </div>

        {/* Category & Links */}
        <div className="flex justify-between items-center mb-6 relative z-10">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-400">
            {project.category}
          </span>
          <div className="flex gap-4">
            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Live Demo"
              >
                <ExternalLink size={18} />
              </a>
            )}
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="GitHub Repository"
            >
              <Github size={18} />
            </a>
          </div>
        </div>

        <Link href={`/projects/${project.slug}`} className="group/title block relative z-10">
          <h3 className="text-2xl font-bold text-white mb-4 group-hover/title:text-cyan-400 transition-colors">
            {project.title}
          </h3>
        </Link>

        <p className="text-slate-400 text-sm leading-relaxed mb-8 grow relative z-10">
          {project.desc}
        </p>

        {/* Tech Stack Chips & Details Link */}
        <div className="flex items-center justify-between pt-6 border-t border-white/5 relative z-10 mt-auto">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t, idx) => (
              <span 
                key={idx} 
                className="px-3 py-1 text-[9px] font-black uppercase tracking-wider rounded-lg bg-white/5 border border-white/10 text-slate-500 group-hover:text-cyan-400 transition-colors"
              >
                {t}
              </span>
            ))}
          </div>

          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-cyan-400 hover:text-cyan-300 transition-colors shrink-0 ml-2"
          >
            Details <ArrowRight size={13} />
          </Link>
        </div>

        {/* Dynamic Hover Glow */}
        <div className="absolute inset-0 pointer-events-none bg-linear-to-tr from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  );
};

export default function FeaturedProjects() {
  return (
    <section className="relative w-full py-24 px-6 overflow-hidden transition-colors duration-500 selection:bg-cyan-500/30">

      <div className="max-w-7xl mx-auto relative z-10">
        <header className="flex flex-col items-center text-center mb-20">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold tracking-[0.2em] uppercase mb-6 text-cyan-400 shadow-2xl"
          >
            <Zap size={14} className="animate-pulse" />
            Curated Showcase
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl py-4 font-black bg-linear-to-r from-white via-slate-200 to-slate-500 bg-clip-text text-transparent leading-none mb-6 tracking-tighter">
            Featured Projects
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl font-medium leading-relaxed">
            A selection of my most impactful work, ranging from <span className="text-white font-bold">mobile gaming</span> to <span className="text-white font-bold">enterprise systems</span>.
          </p>
        </header>

        {/* Project Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} i={i} />
          ))}
        </div>

        {/* View All CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <Link 
            href="/projects" 
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white text-black font-black text-xs tracking-widest uppercase hover:bg-cyan-400 transition-all shadow-xl active:scale-95"
          >
            View All Projects
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>

      {/* Branded Footer Signature */}
      <div className="mt-12">
        <SignatureBar />
      </div>
    </section>
  );
}
