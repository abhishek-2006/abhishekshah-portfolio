"use client";

import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  ArrowRight, 
  Sparkles, 
  Database,
  Code2,
  Smartphone,
} from "lucide-react";

import Image from "next/image";
import { FaXTwitter as Twitter } from "react-icons/fa6";
import Snowfall from "react-snowfall";

const Typewriter = ({ strings, typeSpeed = 50, backSpeed = 30, delayBetween = 2000 }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (subIndex === strings[index].length + 1 && !reverse) {
        setReverse(true);
        return;
      }
      if (subIndex === 0 && reverse) {
        setReverse(false);
        setIndex((prev) => (prev + 1) % strings.length);
        return;
      }
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? backSpeed : (subIndex === strings[index].length ? delayBetween : typeSpeed));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, strings, typeSpeed, backSpeed, delayBetween]);

  return (
    <span>
      {strings[index].substring(0, subIndex)}
      <span className="animate-pulse ml-0.5 border-r-2 border-cyan-400" />
    </span>
  );
};

export default function App() {
  const roles = useMemo(() => [
    "Next.js Development",
    "Flutter Development",
    "Android App Development",
    "Full-Stack Development",
    "Web Development",
  ], []);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden py-12 md:py-20 px-6 bg-[#030712] selection:bg-cyan-500/30">
      <Snowfall 
        snowflakeCount={100} 
        style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }} 
        speed={[0.5, 1.5]} 
        wind={[-0.5, 0.5]} 
      />
      
      {/* --- OPTIMIZED BACKGROUND --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] -right-[10%] w-[70%] h-[60%] bg-cyan-500/10 blur-[60px] md:blur-[80px] rounded-full animate-pulse will-change-transform" />
        <div className="absolute -bottom-[10%] -left-[10%] w-[70%] h-[60%] bg-indigo-600/10 blur-[60px] md:blur-[80px] rounded-full animate-pulse will-change-transform" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 bg-[url('https://transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.02]" />
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
        body { font-family: 'Plus Jakarta Sans', sans-serif; overflow-x: hidden; }
        .gpu-accelerate { transform: translateZ(0); backface-visibility: hidden; will-change: transform; }
      `}</style>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-16 items-center relative z-10">
        
        {/* --- LEFT: PROFILE (VISUAL) --- */}
        <div className="lg:col-span-5 flex justify-center lg:justify-start relative">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="relative gpu-accelerate"
          >
            {/* Glow beneath profile */}
            <div className="absolute inset-0 bg-cyan-500/15 blur-[40px] rounded-full animate-pulse" />

            <div className="relative z-10 p-1.5 md:p-2 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="relative rounded-[2.3rem] overflow-hidden border-2 md:border-4 border-slate-900 bg-slate-800 w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80">
                <Image
                  src="/profile.jpg"
                  alt="Abhishek Shah"
                  width={700}
                  height={700}
                  className="w-full h-full object-cover"
                  loading="eager"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/600x600/1e293b/FFFFFF/png?text=AS";
                  }}
                />
              </div>

              {/* Status Badge */}
              <div className="absolute -left-4 bottom-8 bg-slate-900/95 border border-white/10 p-2.5 md:p-3.5 rounded-xl shadow-2xl flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-ping" />
                <div className="text-left leading-tight">
                  <p className="text-[8px] text-slate-500 font-bold uppercase">Status</p>
                  <p className="text-[10px] md:text-xs font-bold text-white">Available</p>
                </div>
              </div>
            </div>

            {/* --- SIMPLIFIED FLOATING NODES --- */}
            <div className="absolute -right-10 top-6 p-3 md:p-4 rounded-xl bg-slate-900/50 border border-white/10 shadow-xl animate-bounce [animation-duration:4s] gpu-accelerate">
              <Smartphone className="text-cyan-400 w-5 h-5 md:w-6 md:h-6" />
            </div>

            <div className="absolute left-1/2 -top-9 -translate-x-1/2 p-3 md:p-4 rounded-xl bg-slate-900/50 border border-white/10 shadow-xl animate-bounce [animation-duration:3.5s] gpu-accelerate">
              <Database className="text-purple-400 w-5 h-5 md:w-6 md:h-6" />
            </div>

            <div className="absolute -right-10 bottom-6 p-3 md:p-4 rounded-xl bg-slate-900/50 border border-white/10 shadow-xl animate-bounce [animation-duration:5s] gpu-accelerate">
              <Code2 className="text-blue-400 w-5 h-5 md:w-6 md:h-6" />
            </div>
          </motion.div>
        </div>

        {/* --- RIGHT: TEXT CONTENT --- */}
        <div className="lg:col-span-7 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-cyan-400 mb-6 shadow-sm">
              <Sparkles size={12} className="animate-pulse" />
              Open to New Opportunities
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-[1.1] mb-6 text-white tracking-tight">
              Hi, I’m{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
                Abhishek Shah
              </span>
            </h1>

            <div className="text-xl md:text-3xl text-slate-400 mb-8 font-medium min-h-[40px]">
              Focused on{" "}
              <span className="text-cyan-400 font-bold border-b-2 border-cyan-500/20 pb-1">
                <Typewriter strings={roles} />
              </span>
            </div>

            <p className="text-slate-400 text-base md:text-xl max-w-2xl mb-10 leading-relaxed mx-auto lg:mx-0">
              I specialize in creating <span className="text-white font-semibold">modern web applications</span> and 
              <span className="text-white font-semibold"> seamless mobile experiences</span>. I love turning ideas into functional realities.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start items-center">
              <a 
                href="/projects"
                className="group w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-bold text-[#030712] flex items-center justify-center gap-2 shadow-lg transition-all active:scale-95"
              >
                Explore My Work
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <div className="flex gap-6 items-center px-4 py-2">
                {[
                  { icon: <Github size={22} />, url: "https://github.com/abhishek-2006" },
                  { icon: <Linkedin size={22} />, url: "https://www.linkedin.com/in/abhishek-shah-aa1346326/" },
                  { icon: <Twitter size={20} />, url: "https://x.com/shahabhishek409" }
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                    aria-label="Social Link"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}