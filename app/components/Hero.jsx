"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  ArrowRight, 
  Sparkles, 
  Database,
  Code2,
  Smartphone
} from "lucide-react";
import { FaXTwitter as Twitter } from "react-icons/fa6";

const Typewriter = ({ strings, typeSpeed = 50, backSpeed = 30, delayBetween = 2000 }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === strings[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), delayBetween);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % strings.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? backSpeed : typeSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, strings, typeSpeed, backSpeed, delayBetween]);

  return (
    <span>
      {strings[index].substring(0, subIndex)}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const PROFILE_SRC = "/profile.jpg";

const floatAnimation = (delay = 0) => ({
  animate: { 
    y: [0, -15, 0],
    rotate: [0, 2, -2, 0]
  },
  transition: { 
    duration: 5, 
    repeat: Infinity, 
    ease: "easeInOut",
    delay: delay 
  },
});

export default function App() {
  const roles = [
    "Next.js Development",
    "Flutter Development",
    "Android App Development",
    "Full-Stack Development",
    "Web Development",
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden py-20 px-6 bg-[#030712] selection:bg-cyan-500/30">
      
      {/* --- BACKGROUND ARCHITECTURE --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3] 
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -top-[10%] -right-[10%] w-[60%] h-[60%] bg-cyan-500/10 blur-[120px] rounded-full"
        />
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2] 
          }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute -bottom-[10%] -left-[10%] w-[60%] h-[60%] bg-indigo-600/10 blur-[120px] rounded-full"
        />
        <div className="absolute inset-0 bg-[url('https://transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] contrast-150" />
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
        body { font-family: 'Plus Jakarta Sans', sans-serif; }
      `}</style>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* --- LEFT CONTENT: VISUAL STACK --- */}
        <div className="lg:col-span-5 flex justify-center lg:justify-start relative">
          <motion.div
            initial={{ scale: 0.8, opacity: 0, x: -50 }}
            animate={{ scale: 1, opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Background Glow Ring */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 blur-[60px] rounded-full scale-125 animate-pulse" />

            {/* Main Profile Container */}
            <div className="relative z-10 p-2 rounded-[3rem] bg-gradient-to-tr from-white/10 to-transparent border border-white/10 backdrop-blur-sm shadow-2xl">
              <div className="relative rounded-[2.8rem] overflow-hidden border-4 border-slate-900 shadow-inner">
                <motion.img
                  src={PROFILE_SRC}
                  alt="Abhishek Shah"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/600x600/1e293b/FFFFFF/png?text=AS";
                  }}
                  className="w-64 h-64 md:w-80 md:h-80 object-cover"
                />
              </div>

              {/* Status Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, type: "spring" }}
                className="absolute -left-6 bottom-12 bg-slate-900/90 backdrop-blur-md border border-white/10 p-4 rounded-2xl shadow-2xl flex items-center gap-3"
              >
                <div className="relative">
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                  <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Status</p>
                  <p className="text-xs font-bold text-white">Available</p>
                </div>
              </motion.div>
            </div>

            {/* --- FLOATING TECH NODES --- */}
            <motion.div 
              {...floatAnimation(0.2)}
              className="absolute -right-8 top-4 p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-xl"
            >
              <Smartphone className="text-cyan-400 w-6 h-6" />
            </motion.div>

            <motion.div 
              {...floatAnimation(0.5)}
              className="absolute left-1/2 -top-10 -translate-x-1/2 p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-xl"
            >
              <Database className="text-purple-400 w-6 h-6" />
            </motion.div>

            <motion.div 
              {...floatAnimation(1.1)}
              className="absolute -right-12 bottom-8 p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-xl"
            >
              <Code2 className="text-blue-400 w-6 h-6" />
            </motion.div>
          </motion.div>
        </div>

        {/* --- RIGHT CONTENT: TEXT & CTA --- */}
        <div className="lg:col-span-7 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold tracking-[0.2em] uppercase text-cyan-400 mb-8 shadow-xl">
              <Sparkles size={14} className="animate-pulse" />
              Open to New Opportunities
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-[1.1] mb-6 text-white tracking-tight">
              Hi, I’m{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
                Abhishek Shah
              </span>
            </h1>

            <div className="text-2xl md:text-3xl text-slate-400 mb-8 font-medium min-h-[40px]">
              Focused on{" "}
              <span className="text-cyan-400 font-bold border-b-2 border-cyan-500/30 pb-1">
                <Typewriter strings={roles} />
              </span>
            </div>

            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed mx-auto lg:mx-0">
              I specialize in creating <span className="text-white">modern web applications</span> and 
              <span className="text-white"> seamless mobile experiences</span>. I love turning ideas into functional, clean, and fast digital realities.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start items-center">
              <motion.a 
                href="/projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl font-bold text-black flex items-center gap-3 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-cyan-500/50 transition-all"
              >
                Explore My Work
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <div className="flex gap-4 items-center px-4">
                {[
                  { icon: <Github size={22} />, url: "https://github.com/abhishek-2006" },
                  { icon: <Linkedin size={22} />, url: "https://www.linkedin.com/in/abhishek-shah-aa1346326/" },
                  { icon: <Twitter size={22} />, url: "https://x.com/shahabhishek409" }
                ].map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.url}
                    whileHover={{ y: -4, color: "#22d3ee" }}
                    className="text-slate-400 transition-colors p-2"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}