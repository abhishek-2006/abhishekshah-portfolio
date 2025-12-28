"use client"

import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Zap, 
  Github, 
  ExternalLink, 
  Layers, 
  Code 
} from "lucide-react";

export default function App() {
  const [projects, setProjects] = useState(null);
  const [selectedTag, setSelectedTag] = useState("All");

  useEffect(() => {
    async function load() {
      // Simulation of API call or real fetch
      try {
        const res = await fetch("/api/projects");
        if (!res.ok) throw new Error("API not available");
        const data = await res.json();
        setProjects(data);
      } catch (err) {
        console.error(err);
        // Fallback mock data for preview purposes
        setTimeout(() => {
          setProjects([
            { name: "Neural Network Visualizer", description: "A high-performance Python application for visualizing deep learning layers.", tech: ["Python", "C++", "React"], url: "#", liveUrl: "#" },
            { name: "E-Commerce Dashboard", description: "Modern administrative portal built with Bootstrap and Next.js.", tech: ["Bootstrap", "Next.js", "Firebase"], url: "#", liveUrl: "#" },
            { name: "Java Inventory System", description: "Robust backend system for real-time inventory tracking.", tech: ["Java", "SQL", "Spring Boot"], url: "#" },
            { name: "Portfolio Site", description: "Personal showcase with smooth animations and dark theme.", tech: ["React", "Tailwind CSS", "Framer Motion"], url: "#", liveUrl: "#" },
            { name: "Weather Mobile App", description: "Cross-platform mobile app for real-time weather analytics.", tech: ["Flutter", "Dart", "Node.js"], url: "#" }
          ]);
        }, 800);
      }
    }
    load();
  }, []);

  // Extract unique tags for filtering
  const allTags = useMemo(() => {
    if (!projects) return ["All"];
    const tags = new Set(["All"]);
    projects.forEach(p => p.tech.forEach(t => tags.add(t)));
    return Array.from(tags);
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (!projects) return [];
    if (selectedTag === "All") return projects;
    return projects.filter(p => p.tech.includes(selectedTag));
  }, [projects, selectedTag]);

  return (
    <div className="min-h-screen w-full bg-[#030712] text-white pt-24 pb-20 px-6 relative overflow-hidden selection:bg-cyan-500/30">
      {/* Background Aesthetic Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-600/10 blur-[120px] rounded-full animate-pulse" />
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
        body { font-family: 'Plus Jakarta Sans', sans-serif; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <header className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold tracking-[0.2em] uppercase text-purple-400 mb-6"
          >
            <Zap size={14} className="fill-purple-400" />
            Showcase
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-6xl md:text-8xl font-black py-4 text-center bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent leading-none"
          >
            All Projects
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-slate-400 text-lg md:text-xl max-w-2xl mt-6 font-medium"
          >
            A curated gallery of my work, ranging from <span className="text-white">low-level C++</span> modules to <span className="text-white">dynamic web architectures</span>.
          </motion.p>
        </header>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-16 overflow-x-auto py-2 no-scrollbar">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all border ${
                selectedTag === tag 
                ? 'bg-white text-black border-white shadow-lg shadow-white/10' 
                : 'bg-white/5 text-slate-400 border-white/10 hover:border-white/30 hover:text-white'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* Skeleton Loading */}
          {!projects &&
            [...Array(6)].map((_, i) => (
              <div key={i} className="h-[380px] bg-white/5 rounded-[2rem] border border-white/10 animate-pulse" />
            ))}

          {/* Actual Projects */}
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -10 }}
                className="group relative p-[1px] rounded-[2rem] bg-gradient-to-br from-white/20 via-transparent to-transparent transition-all shadow-2xl overflow-hidden"
              >
                <div className="h-full rounded-[2rem] bg-slate-950/80 backdrop-blur-xl p-8 flex flex-col border border-white/5 min-h-[380px]">
                  
                  {/* Category Indicator */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-cyan-400 shadow-inner">
                      <Code size={20} />
                    </div>
                    <Layers className="text-white/5 w-12 h-12 -mr-4 -mt-4 group-hover:text-white/10 transition-colors duration-500" />
                  </div>

                  <h2 className="text-2xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                    {project.name}
                  </h2>

                  <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3 font-medium">
                    {project.description || "No description provided. This project showcases advanced architectural patterns and clean code principles."}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                    {project.tech.map((lang) => (
                      <span
                        key={lang}
                        className="text-[10px] uppercase tracking-wider px-3 py-1 rounded-lg bg-white/5 text-slate-300 font-bold border border-white/10"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>

                  {/* Links using standard anchor tags */}
                  <div className="flex items-center gap-6 pt-6 border-t border-white/5">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-bold text-white hover:text-cyan-400 transition-colors"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    )}
                    <a
                      href={project.url ?? "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-white transition-colors"
                    >
                      <Github size={16} />
                      Source
                    </a>
                  </div>
                </div>
                
                {/* Interactive Hover Glow */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {projects && filteredProjects.length === 0 && (
          <div className="text-center py-24">
            <div className="inline-block p-4 rounded-full bg-white/5 mb-4">
              <Code className="text-slate-600 w-8 h-8" />
            </div>
            <p className="text-slate-500 text-xl italic font-medium">No projects found for &quot;{selectedTag}&quot; yet.</p>
            <button 
              onClick={() => setSelectedTag("All")}
              className="mt-4 text-cyan-400 font-bold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}