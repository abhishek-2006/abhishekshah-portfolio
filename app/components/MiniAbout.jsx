"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Sparkles, Code2, GraduationCap, FolderGit2, Briefcase, ArrowRight } from "lucide-react";

const Typewriter = ({ text, speed = 20, delay = 300 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    if (displayedText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.substring(0, displayedText.length + 1));
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [displayedText, text, speed, started]);

  return (
    <span>
      {displayedText}
      {displayedText.length < text.length && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="inline-block w-1 h-5 ml-1 align-middle bg-cyan-400"
        />
      )}
    </span>
  );
};

export default function MiniAbout() {
  const bioText = "I'm Abhishek Shah, a Full-Stack Developer and Computer Engineering student specializing in scalable web systems and cross-platform mobile apps. I build production-ready applications with Next.js, React, Node.js, and Flutter—combining solid engineering fundamentals with responsive, user-focused design.";

  const highlights = [
    {
      icon: <Code2 className="w-5 h-5 text-cyan-400" />,
      tag: "Core Focus",
      title: "Full-Stack & Mobile",
      desc: "Architecting web systems with MERN / Next.js and cross-platform mobile apps with Flutter.",
      meta: "Next.js • React • Node • Flutter"
    },
    {
      icon: <GraduationCap className="w-5 h-5 text-indigo-400" />,
      tag: "Academic Foundation",
      title: "Computer Engineering",
      desc: "Pursuing B.Tech at Uka Tarsadia University (2025–2028). Completed Diploma in CE with 8.40 CGPA.",
      meta: "Data Structures • System Design"
    },
    {
      icon: <FolderGit2 className="w-5 h-5 text-emerald-400" />,
      tag: "Track Record",
      title: "20+ Shipped Projects",
      desc: "Hands-on experience delivering full-stack web applications, REST APIs, and interactive games.",
      meta: "Web Apps • Utilities • Games"
    },
    {
      icon: <Briefcase className="w-5 h-5 text-amber-400" />,
      tag: "Availability",
      title: "Open to Opportunities",
      desc: "Based in Gujarat, India (IST / Remote). Open for full-time engineering roles, freelance, and collaborations.",
      meta: "Remote Worldwide • Hybrid"
    }
  ];

  return (
    <section className="relative w-full py-24 px-6 overflow-hidden flex flex-col items-center selection:bg-cyan-500/30">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl w-full text-center relative z-10"
      >
        {/* Subtitle Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-bold tracking-[0.2em] uppercase mb-8 shadow-xl text-cyan-400"
        >
          <Sparkles size={14} className="animate-pulse" />
          Professional Overview
        </motion.div>

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-8 bg-linear-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent leading-tight tracking-tight">
          Who Am I?
        </h2>

        {/* Typed Description Card */}
        <div className="relative mb-12 p-px rounded-3xl md:rounded-4xl bg-linear-to-b from-white/10 via-transparent to-transparent">
          <div className="p-6 sm:p-8 md:p-10 rounded-3xl md:rounded-4xl bg-slate-950/60 backdrop-blur-3xl border border-white/5 shadow-2xl">
            <p 
              className="text-base sm:text-lg md:text-xl leading-relaxed text-slate-300 font-medium tracking-tight text-left md:text-center"
              aria-label={bioText}
            >
              <Typewriter 
                text={bioText} 
                speed={18}
              />
            </p>
          </div>
        </div>

        {/* Key Information Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 text-left">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="p-5 md:p-6 rounded-2xl bg-white/5 hover:bg-white/[0.08] border border-white/5 hover:border-cyan-500/20 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-white/5 group-hover:border-cyan-500/30 transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-white/5 border border-white/5 text-slate-400">
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-white font-bold text-base md:text-lg mb-2 group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-4">
                  {item.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 text-[11px] font-mono text-cyan-400/80">
                {item.meta}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-semibold text-sm transition-all hover:scale-105 active:scale-95 shadow-lg shadow-cyan-500/10"
          >
            Read Full Bio & Timeline
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 font-semibold text-sm transition-all hover:scale-105 active:scale-95"
          >
            Get In Touch
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}