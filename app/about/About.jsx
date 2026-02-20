"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Zap, Clock, GraduationCap, School, BookOpen, Award, ChevronRight } from 'lucide-react';

const COLORS = {
  cyan400: "#22d3ee",
  blue600: "#2563eb",
  indigo500: "#6366f1",
  slate400: "#94a3b8",
  slate900: "#0f172a",
  white: "#ffffff"
};

const Typewriter = ({ strings, typeSpeed = 50, backSpeed = 30 }) => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(typeSpeed);

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % strings.length;
      const fullText = strings[i];

      setDisplayText(
        isDeleting
          ? fullText.substring(0, displayText.length - 1)
          : fullText.substring(0, displayText.length + 1)
      );

      setTypingSpeed(isDeleting ? backSpeed : typeSpeed);

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, strings, typingSpeed, typeSpeed, backSpeed]);

  return (
    <span className="text-gray-200">
      {displayText}
      <span className="animate-pulse border-r-2 border-cyan-400 ml-1"></span>
      <motion.span animate={{ opacity: [1, 0] }} transition={{ duration: 0.8, repeat: Infinity }} style={{ color: COLORS.cyan400 }}>|</motion.span>
    </span>
  );
};


const Card = ({ children, delay }) => {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay },
    },
  };

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="p-px rounded-2xl bg-linear-to-r from-cyan-500/40 to-blue-500/20 
        shadow-2xl hover:shadow-cyan-500/30 transition-shadow duration-500 w-full overflow-hidden"
    >
      <div className="bg-gray-900/80 backdrop-blur-xl rounded-2xl p-6 md:p-8 
        border border-indigo-700/20 hover:border-cyan-500/50 
        transition-colors duration-500">
        {children}
      </div>
    </motion.div>
  );
};

export default function AboutPage() {
  const education = [
    {
      title: "B. Tech in Computer Engineering",
      inst: "Uka Tarsadia University",
      year: "2025 – 2028",
      detail: "Anticipated Graduation",
      icon: <GraduationCap />,
      iconColor: COLORS.cyan400
    },
    {
      title: "Diploma in Computer Engineering",
      inst: "Gujarat Technological University",
      year: "2022 – 2025",
      detail: "CGPA: 8.40",
      icon: <School />,
      iconColor: COLORS.indigo500
    },
    {
      title: "Secondary (10th)",
      inst: "Gujarat Board",
      year: "Completed in 2022",
      detail: "Percentile: 75.23 PR",
      icon: <BookOpen />,
      iconColor: COLORS.slate400
    },
  ];

  return (
    <div className="min-h-screen w-full overflow-hidden text-gray-100 pt-10 pb-20 sm:px-6 bg-slate-950 font-sans selection:bg-cyan-500/30 transition-colors duration-500">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
        body { font-family: 'Plus Jakarta Sans', sans-serif; overflow-x: hidden; }
      `}</style>

      <div className="max-w-7xl mx-auto relative z-10 px-4">
        {/* PAGE TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-7xl font-extrabold py-4 text-center 
            bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text
            text-transparent leading-light"
        >
          My Story
        </motion.h1>

        {/* BIO SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center md:items-start md:justify-center gap-10 md:gap-16 mt-10"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative"
          >
            <div className="w-40 h-40 md:w-52 md:h-52 rounded-full p-px bg-linear-to-r from-cyan-400 to-blue-500 shadow-2xl shadow-cyan-500/20">
              <div className="w-full h-full rounded-full overflow-hidden bg-slate-800 border-4 border-slate-900">
                <Image
                  src="/profile.jpg"
                  alt="Profile"
                  width={208}
                  height={208}
                  className="w-full h-full object-cover transition-all duration-700"
                />
              </div>
            </div>
            {/* Status Indicator */}
            <div className="absolute bottom-4 right-4 w-5 h-5 bg-green-500 rounded-full border-4 border-slate-900 animate-pulse"></div>
          </motion.div>

          {/* Right Side Text */}
          <div className="flex flex-col max-w-2xl text-center md:text-left min-w-0">
            <div className="flex items-center justify-center md:justify-start mb-6 text-cyan-400">
              <Zap className="w-5 h-5 mr-2 fill-cyan-400" />
              <h2 className="text-sm font-bold tracking-[0.2em] uppercase">Bio</h2>
            </div>

            <div className="text-lg md:text-2xl text-gray-300 leading-relaxed min-h-40 md:min-h-30">
              <Typewriter
                strings={[
                  "I'm Abhishek, a Computer Engineering student who loves building clean UI, smooth apps, and fast backends.",
                  "I enjoy working with Flutter, Next.js, Android XML, PHP, and Node.js.",
                  "I'm deeply passionate about designing modern systems and pixel-perfect UIs."
                ]}
              />
            </div>
          </div>
        </motion.div>

        {/* SEPARATOR */}
        <div className="my-16 md:my-24 flex items-center justify-center w-full max-w-4xl mx-auto px-4 gap-4 overflow-hidden">
          <div className="h-[2px] min-w-[60px] flex-1 bg-linear-to-r from-transparent via-indigo-500/40 to-indigo-500/80"></div>
          <Award className="w-8 h-8 text-indigo-500 shrink-0" />
          <div className="h-[2px] flex-1 min-w-[60px] bg-linear-to-l from-transparent via-indigo-500/40 to-indigo-500/80"></div>
        </div>

        {/* Background Aesthetic Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/5 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/5 blur-[120px] rounded-full animate-pulse" />
        </div>

        {/* EDUCATION TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mt-16 mb-16 text-indigo-400 
          text-center flex items-center justify-center gap-3"
        >
          <GraduationCap className="w-8 h-8 md:w-10 md:h-10" />
          Academic Timeline
        </motion.h2>

        {/* EDUCATION CARDS */}
        <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
          {education.map((edu, i) => (
            <Card key={i} delay={0.1 * i}>
              <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                <div className="flex items-start gap-4 md:gap-6 group min-w-0 full">
                  {/* Icon Container */}
                  <div className={`p-3 md:p-4 rounded-2xl bg-linear-to-br ${edu.color} border border-white/5 shadow-xl shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    {edu.icon}
                  </div>
                  
                  <div className="flex flex-col min-w-0 flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 leading-light">
                      {edu.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-2 text-gray-400">
                      <div className="w-1.5 h-1.5 shrink-0 rounded-full bg-indigo-500"></div>
                      <span className="text-base md:text-lg font-medium truncate">{edu.inst}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row md:flex-col items-start sm:items-center md:items-end justify-between w-full md:w-auto gap-4 shrink-0">
                <div 
                  className="w-fit inline-flex items-center gap-2 px-3 md:px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase whitespace-nowrap"
                  style={{ color: edu.iconColor }}
                >
                  <Clock size={12} />
                  {edu.year}
                </div>
                  <span className="text-gray-500 text-xs font-bold uppercase tracking-widest bg-slate-800/50 px-3 py-1 rounded">
                    {edu.detail}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 md:mt-24 text-center">
          <a 
            href="/projects" 
            className="group relative inline-flex items-center justify-center px-8 md:px-10 py-4 font-bold text-white transition-all duration-300 bg-linear-to-r from-cyan-600 to-blue-700 rounded-full hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]"
          >
            <span className="relative flex items-center gap-2">
              See My Projects
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}