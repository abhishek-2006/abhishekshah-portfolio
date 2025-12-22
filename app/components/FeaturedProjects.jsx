"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Zap, Github, ArrowRight, Code } from 'lucide-react';

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
    title: "Hotel Management System",
    desc: "A professional-grade booking engine and administrative suite. Handles real-time availability, guest records, and billing infrastructure.",
    tech: ["PHP", "MySQL", "Bootstrap"],
    githubUrl: "https://github.com/abhishek-2006/Hotel-Management-System.git",
    liveUrl: null,
    category: "Full Stack"
  },
  {
    title: "Currency Converter",
    desc: "A lightning-fast financial tool featuring real-time exchange rates via API integration. Built with a focus on precision and minimal latency.",
    tech: ["JavaScript", "REST API", "Tailwind"],
    githubUrl: "https://github.com/abhishek-2006/Currency-Converter",
    liveUrl: "https://abhishek-2006.github.io/Currency-Converter",
    category: "Web Utility"
  },
  {
    title: "Portfolio Website",
    desc: "The very site you are viewing. A high-performance showcase utilizing modern architectural patterns, smooth framer-motion interactions, and optimized delivery.",
    tech: ["Next.js", "React", "Framer Motion"],
    githubUrl: "https://github.com/abhishek-2006/my-portfolio.git",
    liveUrl: "https://my-portfolio-jade-seven-42.vercel.app/",
    category: "Frontend"
  },
];

const ProjectCard = ({ project, i }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: i * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group relative p-[1px] rounded-[2rem] bg-gradient-to-b from-white/20 via-transparent to-transparent transition-all duration-500 shadow-2xl"
    >
      {/* Glassmorphism Inner Container */}
      <div className="relative h-full rounded-[2rem] bg-slate-950/80 backdrop-blur-3xl p-8 flex flex-col border border-white/5 overflow-hidden">
        
        {/* Background Decorative Icon */}
        <div className="absolute -right-4 -top-4 text-white/5 scale-[2.5] group-hover:text-white/10 transition-all duration-700 -rotate-12 group-hover:rotate-0">
          <Code size={48} />
        </div>

        {/* Category & Links */}
        <div className="flex justify-between items-center mb-6 relative z-10">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-white/5 border border-white/10" style={{ color: COLORS.cyan400 }}>
            {project.category}
          </span>
          <div className="flex gap-4">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" 
                 className="text-slate-400 hover:text-white transition-colors">
                <ExternalLink size={18} />
              </a>
            )}
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" 
               className="text-slate-400 hover:text-white transition-colors">
              <Github size={18} />
            </a>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors relative z-10">
          {project.title}
        </h3>

        <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow relative z-10">
          {project.desc}
        </p>

        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5 relative z-10">
          {project.tech.map((t, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-[10px] font-bold rounded-lg bg-white/5 border border-white/5 transition-colors group-hover:border-cyan-500/30"
              style={{ color: COLORS.slate400 }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Interactive Hover Glow */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  );
};

export default function FeaturedProjects() {
  return (
    <section className="relative w-full py-24 px-6 overflow-hidden bg-[#030712] selection:bg-cyan-500/30">
      
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-20 blur-[120px]"
          style={{ background: "radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%)" }}
        />
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
        body { font-family: 'Plus Jakarta Sans', sans-serif; }
      `}</style>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <header className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold tracking-[0.2em] uppercase mb-6 shadow-xl"
            style={{ color: COLORS.cyan400 }}
          >
            <Zap size={14} className="animate-pulse" />
            Curated Showcase
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-white via-slate-200 to-slate-500 bg-clip-text text-transparent leading-none mb-6">
            Featured Code
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl font-medium">
            A selection of projects where <span className="text-white">logic meets design</span>. From complex backend systems to high-performance frontend interfaces.
          </p>
        </header>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} i={i} />
          ))}
        </div>
        
        {/* Footer Link */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <a 
            href="/projects" 
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all text-sm font-bold text-white group"
          >
            View All Projects
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}