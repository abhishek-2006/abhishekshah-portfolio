"use client"

import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Zap, 
  Github, 
  ExternalLink, 
  Layers, 
  Code,
  Gamepad2,
  Download
} from "lucide-react";

export default function ProjectsPage() {
  const [projects, setProjects] = useState(null);
  const [selectedTag, setSelectedTag] = useState("All");

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/projects");
        let githubData = [];
        
        if (res.ok) {
          githubData = await res.json();
        }

        const processedProjects = githubData.map(repo => {
          if (repo.name.toLowerCase().includes("tictactoe")) {
            return {
              ...repo,
              name: "TicTacToe",
              liveUrl: "/tictactoe",
              isGame: true,
              logo: "/tictactoe-logo.png"
            };
          }
          return {
            ...repo,
            tech: repo.tech || ["Web"],
            isGame: false
          };
        });
        
        processedProjects.sort((a, b) =>
          a.isGame === b.isGame ? 0 : a.isGame ? -1 : 1
        );

        setProjects(processedProjects);

      } catch (err) {
        console.error("Fetch error:", err);
        // Fallback mock data if GitHub API fails
        setProjects([
          { name: "TicTacToe", description: "Premium Android edition with adaptive AI.", tech: ["Flutter", "Dart", "Android"], url: "#", liveUrl: "/tictactoe", isGame: true, logo: "/tictactoe-logo.png" },
          { name: "Hotel Management System", description: "Professional-grade administrative portal.", tech: ["PHP", "MySQL", "Bootstrap"], url: "#", liveUrl: "#" },
          { name: "Currency Converter", description: "Real-time exchange rates via API.", tech: ["JavaScript", "REST API", "Tailwind"], url: "#", liveUrl: "https://abhishek-2006.github.io/currency-converter" }
        ]);
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
      
      {/* Background Aesthetic Glows */}
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
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold tracking-[0.2em] uppercase text-cyan-400 mb-6"
          >
            <Zap size={14} className="fill-cyan-400/20" />
            Project Hub
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-6xl md:text-8xl font-black py-4 text-center bg-linear-to-r from-white via-cyan-100 to-blue-400 bg-clip-text text-transparent leading-none"
          >
            My Projects
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-slate-400 text-lg md:text-xl max-w-2xl mt-6 font-medium leading-relaxed"
          >
            Exploring the intersection of <span className="text-white">Full-Stack engineering</span> and <span className="text-cyan-400 font-bold">mobile game design</span> through the GitHub API.
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
          {!projects &&
            [...Array(6)].map((_, i) => (
              <div key={i} className="h-95 bg-white/5 rounded-4xl border border-white/10 animate-pulse" />
            ))}

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
                className={`group relative p-px rounded-4xl transition-all shadow-2xl overflow-hidden ${
                  project.isGame 
                  ? 'bg-linear-to-br from-cyan-500/40 via-transparent to-transparent border-cyan-500/30' 
                  : 'bg-linear-to-br from-white/20 via-transparent to-transparent border-white/5'
                }`}
              >
                <div className={`h-full rounded-4xl backdrop-blur-xl p-8 flex flex-col border border-white/5 min-h-105 ${
                  project.isGame ? 'bg-cyan-950/20' : 'bg-slate-950/80'
                }`}>
                  
                  {/* Category Indicator */}
                  <div className="flex justify-between items-start mb-6">
                    <div className={`p-3 rounded-2xl border shadow-inner ${
                      project.isGame ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400' : 'bg-white/5 border-white/10 text-cyan-400'
                    }`}>
                      {project.isGame ? <Gamepad2 size={20} /> : <Code size={20} />}
                    </div>
                    <Layers className="text-white/5 w-12 h-12 -mr-4 -mt-4 group-hover:text-white/10 transition-colors duration-500" />
                  </div>

                  <h2 className="text-2xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                    {project.name}
                  </h2>

                  <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-4 font-medium">
                    {project.description || "No description provided."}
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

                  {/* Links */}
                  <div className="flex items-center gap-6 pt-6 border-t border-white/5">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        className="flex items-center gap-2 text-sm font-bold text-white hover:text-cyan-400 transition-colors"
                      >
                        {project.isGame ? <Download size={16} /> : <ExternalLink size={16} />}
                        {project.isGame ? "Download APK" : "Live Demo"}
                      </a>
                    )}
                    <a
                      href={project.url ?? project.html_url ?? "#"}
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
                <div className={`absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-tr ${
                  project.isGame ? 'from-cyan-500/20 to-transparent' : 'from-cyan-500/10 to-transparent'
                }`} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {projects && filteredProjects.length === 0 && (
          <div className="text-center py-24">
            <p className="text-slate-500 text-xl italic font-medium">No projects found for &quot;{selectedTag}&quot;.</p>
            <button onClick={() => setSelectedTag("All")} className="mt-4 text-cyan-400 font-bold hover:underline">
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}