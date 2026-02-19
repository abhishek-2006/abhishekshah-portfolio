"use client";

import { motion } from "framer-motion";
import { ExternalLink, Zap, Github, Gamepad2 } from 'lucide-react';

const COLORS = {
  cyan400: "#22d3ee",
  indigo400: "#818cf8",
  indigo500: "#6366f1",
  slate400: "#94a3b8",
  white: "#ffffff",
  black: "#000000"
};

const projects = [
  {
    title: "TicTacToe",
    desc: "A premium Android reimagining of the classic game. Features adaptive AI, Neo-Dark UI, and smooth 60FPS animations.",
    tech: ["Flutter", "Dart", "Android"],
    githubUrl: "https://github.com/abhishek-2006/Tictactoe", 
    liveUrl: "/tictactoe", 
    category: "Mobile Game",
    isGame: true
  },
  {
    title: "Hotel Management System",
    desc: "A professional-grade booking engine and administrative suite. Handles real-time availability and billing infrastructure.",
    tech: ["PHP", "MySQL", "Bootstrap", "JavaScript", "HTML", "CSS", "TailwindCSS"],
    githubUrl: "https://github.com/abhishek-2006/Hotel-Management-System.git",
    liveUrl: null,
    category: "Full Stack"
  },
  {
    title: "Currency Converter",
    desc: "A lightning-fast financial tool featuring real-time exchange rates via API integration. Focused on precision.",
    tech: ["JavaScript", "REST API", "TailwindCSS", "HTML", "CSS"],
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
      className="group relative p-px rounded-4xl bg-linear-to-b from-white/20 via-transparent to-transparent transition-all duration-500 shadow-2xl"
    >
      <div className="relative h-full rounded-4xl bg-slate-950/80 backdrop-blur-3xl p-8 flex flex-col border border-white/5 overflow-hidden">
        
        <div className="absolute -right-4 -top-4 text-white/5 scale-[2.5] group-hover:text-white/10 transition-all duration-700 -rotate-12 group-hover:rotate-0">
          {project.isGame ? <Gamepad2 size={48} /> : <Zap size={48} />}
        </div>

        <div className="flex justify-between items-center mb-6 relative z-10">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-white/5 border border-white/10" style={{ color: COLORS.cyan400 }}>
            {project.category}
          </span>
          <div className="flex gap-4">
            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                className="text-slate-400 hover:text-white transition-colors"
              >
                <ExternalLink size={18} />
              </a>
            )}
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Github size={18} />
            </a>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors relative z-10">
          {project.title}
        </h3>

        <p className="text-slate-400 text-sm leading-relaxed mb-8 grow relative z-10">
          {project.desc}
        </p>

        <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5 relative z-10">
          {project.tech.map((t, idx) => (
            <span key={idx} className="px-3 py-1 text-[10px] font-bold rounded-lg bg-white/5 border border-white/5 text-slate-400">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export const metadata = {
  title: "Featured Projects - Abhishek Shah",
  description: "A curated showcase of my standout projects, highlighting my expertise in full-stack development and mobile game design. Explore detailed descriptions, tech stacks, and links to GitHub repositories and live demos."
};

export default function App() {
  return (
    <section className="relative w-full py-24 px-6 overflow-hidden bg-[#030712] selection:bg-cyan-500/30">
      <div className="max-w-7xl mx-auto relative z-10">
        <header className="flex flex-col items-center text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold tracking-[0.2em] uppercase mb-6 text-cyan-400">
            <Zap size={14} className="animate-pulse" />
            Curated Showcase
          </div>
          <h2 className="text-5xl md:text-7xl py-4 font-black bg-linear-to-r from-white via-slate-200 to-slate-500 bg-clip-text text-transparent leading-none mb-6">
            Featured Projects
          </h2>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}