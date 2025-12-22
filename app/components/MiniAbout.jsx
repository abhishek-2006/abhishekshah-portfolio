"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles, Zap, Layout, Terminal } from "lucide-react";

const Typewriter = ({ text, speed = 30, delay = 500 }) => {
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
          className="inline-block w-1 h-5 ml-1 align-middle"
          style={{ backgroundColor: "#22d3ee" }}
        />
      )}
    </span>
  );
};

export default function MiniAbout() {
  const pillars = [
    {
      icon: <Zap className="w-5 h-5 text-yellow-400" />,
      title: "Performance",
      desc: "Blazing fast load times."
    },
    {
      icon: <Layout className="w-5 h-5 text-cyan-400" />,
      title: "UI/UX",
      desc: "Delightful user journeys."
    },
    {
      icon: <Terminal className="w-5 h-5 text-purple-400" />,
      title: "Clean Code",
      desc: "Scalable & maintainable."
    }
  ];

  return (
    <section className="relative w-full py-24 px-6 overflow-hidden bg-[#030712] flex flex-col items-center selection:bg-cyan-500/30">
      
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-20 blur-[120px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(79, 70, 229, 0.15) 0%, transparent 70%)" }}
        />
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
        body { font-family: 'Plus Jakarta Sans', sans-serif; }
      `}</style>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl w-full text-center relative z-10"
      >
        {/* Subtitle Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold tracking-[0.2em] uppercase mb-8 shadow-xl"
          style={{ color: "#22d3ee" }}
        >
          <Sparkles size={14} className="animate-pulse" />
          The Developer Behind the Code
        </motion.div>

        {/* Heading */}
        <h2 className="text-5xl md:text-7xl font-black mb-10 bg-gradient-to-r from-white via-slate-200 to-slate-500 bg-clip-text text-transparent leading-tight tracking-tight">
          Who Am I?
        </h2>

        {/* Typed Description Card */}
        <div className="relative mb-16 p-[1px] rounded-[2rem] bg-gradient-to-b from-white/10 via-transparent to-transparent">
          <div className="p-8 md:p-12 rounded-[2rem] bg-slate-950/40 backdrop-blur-3xl border border-white/5 shadow-2xl">
            <p className="text-lg md:text-2xl leading-relaxed text-slate-300 font-medium tracking-tight">
              <Typewriter 
                text="I'm a developer who genuinely enjoys the craft—building apps, websites, and systems that matter. If it involves code, I'm already interested. I focus on turning complex problems into clean, smooth, and highly practical digital experiences." 
                speed={25}
              />
            </p>
          </div>
        </div>

        {/* Philosophical Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + (index * 0.1) }}
              viewport={{ once: true }}
              whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
              className="p-6 rounded-2xl bg-white/5 border border-white/5 transition-all text-left group"
            >
              <div className="mb-4 p-3 rounded-xl bg-slate-900 w-fit border border-white/5 group-hover:border-cyan-500/30 transition-colors">
                {pillar.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-1">{pillar.title}</h3>
              <p className="text-slate-500 text-sm font-medium">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Secondary Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16 text-slate-500 text-sm font-bold tracking-[0.3em] uppercase"
        >
          Driven by Curiosity • Powered by Logic
        </motion.p>
      </motion.div>
    </section>
  );
}