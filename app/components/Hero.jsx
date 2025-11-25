"use client";

import { useEffect } from "react";
import { motion, useCycle } from "framer-motion";
import { Github, Linkedin, Instagram} from "lucide-react";
import { FaXTwitter as Twitter } from "react-icons/fa6";
import Lottie from "lottie-react";
import {ReactTyped} from "react-typed";

/*
  Image usage:
  - If you placed profile.jpg in public/: use src="/profile.jpg"
  - If you imported from src: `import profile from "@/components/profile.jpg"` and use src={profile}
*/
const PROFILE_SRC = "/profile.jpg";

// small Lottie placeholder JSON can be replaced by your own lottie file
// If you add a lottie JSON in /public/lottie/dev.json, use: import devAnim from "/lottie/dev.json";
const DemoLottieUrl =
  "https://assets10.lottiefiles.com/packages/lf20_jtbfg2nb.json"; // subtle dev animation

const floatY = {
  animate: { y: [0, -12, 0] },
  transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
};

export default function Hero() {
  // small heading animation cycle example
  const [mode, cycleMode] = useCycle("a", "b");

  useEffect(() => {
    // just to show mode toggle example (not necessary)
    const t = setInterval(() => cycleMode(), 7000);
    return () => clearInterval(t);
  }, [cycleMode]);

  return (
    <section className="relative overflow-hidden py-24 px-6 bg-gradient-to-b from-[#061025] to-[#07132a]">
      {/* subtle blurred blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          className="absolute left-10 top-8 w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl"
          {...floatY}
        />
        <motion.div
          className="absolute right-8 bottom-10 w-96 h-96 rounded-full bg-violet-500/8 blur-3xl"
          animate={{ opacity: [0.15, 0.35, 0.15] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-10 items-center">
        {/* PROFILE (left) */}
        <div className="md:col-span-4 flex justify-center md:justify-start">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative rounded-full p-1 bg-gradient-to-tr from-cyan-400 to-indigo-500 shadow-2xl"
          >
            <motion.img
              src={PROFILE_SRC}
              alt="Abhishek Shah"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://placehold.co/400x400/171717/FFFFFF/png?text=A.S";
              }}
              className="w-60 h-60 md:w-64 md:h-64 object-cover rounded-full border-4 border-black/50"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* small floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -right-4 -bottom-4 bg-black/60 backdrop-blur rounded-xl px-3 py-2 flex items-center gap-2 border border-white/6"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-cyan-400">
                <path d="M12 2l2.5 5.5L20 9l-4 3.5L17 20l-5-3-5 3 1-7.5L2 9l5.5-1.5L12 2z" fill="currentColor" />
              </svg>
              <span className="text-xs text-cyan-300 font-medium">Full-stack</span>
            </motion.div>
          </motion.div>
        </div>

        {/* TEXT (right) */}
        <div className="md:col-span-8">
          <motion.h1
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-extrabold leading-tight mb-3 text-white"
          >
            Hi, I’m{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-400">
              Abhishek Shah
            </span>
          </motion.h1>

          {/* Typed roles */}
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="text-xl text-cyan-200 mb-6 font-mono max-w-xl"
          >
            <ReactTyped
              strings={[
                "Full Stack Developer",
                "Next.js Developer",
                "Flutter Developer",
                "Open Source Contributor",
              ]}
              typeSpeed={50}
              backSpeed={35}
              loop
              smartBackspace
            />
          </motion.div>

          <motion.p
            className="text-gray-300 max-w-2xl mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
          >
            I design & build responsive web and mobile apps. I like clean UI, realtime performance and small delightful
            animations — all tuned for speed and accessibility.
          </motion.p>

          {/* floating logos (Flutter + Android) */}
          <div className="flex gap-4 items-center mb-6">
            <motion.div
              className="flex items-center gap-3 bg-white/5 p-2 rounded-xl border border-white/5"
              whileHover={{ scale: 1.08 }}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Flutter SVG (simplified) */}
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                <path d="M2 12L12 2l4 4-10 10-4-4z" fill="#02569B" />
                <path d="M12 2l8 8-4 4L8 6l4-4z" fill="#42A5F5" />
              </svg>
              <span className="text-sm text-gray-200">Flutter</span>
            </motion.div>

            <motion.div
              className="flex items-center gap-3 bg-white/5 p-2 rounded-xl border border-white/5"
              whileHover={{ scale: 1.08 }}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Android simplified */}
              <svg className="w-8 h-8" viewBox="0 0 24 24">
                <path fill="#3DDC84" d="M6 8h12v10H6z" />
                <circle cx="8.5" cy="10.5" r="0.9" fill="#fff" />
                <circle cx="15.5" cy="10.5" r="0.9" fill="#fff" />
              </svg>
              <span className="text-sm text-gray-200">Android</span>
            </motion.div>

            {/* small Lottie micro animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="w-20 h-20"
            >
              <Lottie
                animationData={undefined}
                path={DemoLottieUrl}
                loop
                style={{ width: "100%", height: "100%" }}
              />
            </motion.div>
          </div>

          {/* CTA and social */}
          <div className="flex gap-4 items-center">
            <a className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-black shadow-md hover:bg-cyan-400 transition" href="/projects">
              View Projects
            </a>

            <a className="rounded-lg border border-white/10 px-5 py-3 text-gray-200 hover:border-white/30 transition" href="/resume.zip">
              Download Zip
            </a>

            <div className="ml-auto hidden md:flex gap-3 items-center">
              <a href="https://github.com/abhishek-2006" className="text-gray-300 hover:text-cyan-300 transition">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/abhishek-shah-aa1346326/" className="text-gray-300 hover:text-cyan-300 transition">
                <Linkedin size={20} />
              </a>
              <a href="https://x.com/shahabhishek409" className="text-gray-300 hover:text-cyan-300 transition">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
