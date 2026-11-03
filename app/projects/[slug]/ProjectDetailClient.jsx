"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SignatureBar from "../../components/SignatureBar";
import SkillsThreeScene from "../../components/SkillsThreeScene";
import { LazyMotion, domAnimation } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Download,
  Gamepad2,
  Code,
  Layers,
  Zap,
  CheckCircle2,
  Cpu,
  Star,
  GitFork,
  Share2,
  Check,
  ShieldCheck,
  Terminal,
  Sparkles,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

export default function ProjectDetailClient({ project, relatedProjects = [] }) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    try {
      if (typeof window !== "undefined") {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      }
    } catch {
      // Ignore clipboard write failures gracefully
    }
  };

  const isGame = project.isGame || project.categoryType === "game";

  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen w-full bg-[#030712] text-white pt-24 pb-20 px-6 relative overflow-hidden selection:bg-cyan-500/30">
        {/* Background Aesthetic Glows */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] size-[55%] rounded-full animate-pulse bg-[radial-gradient(circle,rgba(37,99,235,0.15)_0%,transparent_60%)]" />
          <div
            className="absolute bottom-[-10%] left-[-10%] size-[55%] rounded-full animate-pulse bg-[radial-gradient(circle,rgba(147,51,234,0.15)_0%,transparent_60%)]"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <SkillsThreeScene />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Breadcrumb & Back Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center justify-between gap-4 mb-10 flex-wrap">
            <div className="flex items-center gap-2 text-xs md:text-sm text-slate-400 font-medium">
              <Link href="/" className="hover:text-cyan-400 transition-colors">
                Home
              </Link>
              <ChevronRight size={14} className="text-slate-600" />
              <Link href="/projects" className="hover:text-cyan-400 transition-colors">
                Projects
              </Link>
              <ChevronRight size={14} className="text-slate-600" />
              <span className="text-cyan-400 font-semibold truncate max-w-[200px] md:max-w-none">
                {project.name}
              </span>
            </div>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold text-slate-300 hover:text-white transition-all group"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
              Back to Projects
            </Link>
          </nav>

          {/* Hero Header */}
          <header className="relative mb-14 p-8 md:p-12 rounded-4xl bg-linear-to-b from-white/10 via-slate-950/80 to-slate-950/90 border border-white/10 backdrop-blur-2xl shadow-2xl overflow-hidden">
            {/* Background Decorative Icon */}
            <div className="absolute -right-6 -bottom-6 text-white/5 scale-[3] pointer-events-none rotate-12">
              {isGame ? <Gamepad2 size={64} /> : <Code size={64} />}
            </div>

            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="max-w-3xl">
                {/* Category & Status Badges */}
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-bold tracking-wider uppercase text-cyan-400 shadow-sm">
                    {isGame ? <Gamepad2 size={14} /> : <Zap size={14} />}
                    {project.category || "Project"}
                  </span>

                  {project.status && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-semibold text-emerald-400">
                      <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      {project.status}
                    </span>
                  )}

                  {project.stats?.platform && (
                    <span className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400 font-medium">
                      {project.stats.platform}
                    </span>
                  )}
                </div>

                {/* Project Title */}
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight bg-linear-to-r from-white via-cyan-100 to-blue-400 bg-clip-text text-transparent mb-6 leading-[1.1]">
                  {project.name}
                </h1>

                {/* Tagline */}
                <p className="text-slate-300 text-lg md:text-xl font-medium leading-relaxed mb-6">
                  {project.tagline || project.description}
                </p>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech?.map((t) => (
                    <span
                      key={t}
                      className="text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-xl bg-white/5 text-slate-200 font-bold border border-white/10 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Logo / Thumbnail Preview (if applicable) */}
              {project.logo && (
                <div className="shrink-0 flex items-center justify-center size-28 md:size-36 rounded-3xl bg-white/5 border border-white/15 p-4 shadow-xl backdrop-blur-md">
                  <Image
                    src={project.logo}
                    alt={`${project.name} logo`}
                    width={96}
                    height={96}
                    className="w-full h-full object-contain filter drop-shadow-md"
                  />
                </div>
              )}
            </div>

            {/* Quick Action CTAs */}
            <div className="relative z-10 flex flex-wrap items-center gap-4 pt-8 mt-8 border-t border-white/10">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target={project.liveUrl.startsWith("http") ? "_blank" : "_self"}
                  rel={project.liveUrl.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-2xl bg-cyan-400 text-black font-extrabold text-sm tracking-wider uppercase hover:bg-cyan-300 active:scale-95 transition-all shadow-lg shadow-cyan-400/20"
                >
                  {isGame ? <Download size={18} /> : <ExternalLink size={18} />}
                  {isGame ? "Play / Download APK" : "Live Demo"}
                </a>
              )}

              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 text-white font-bold text-sm tracking-wider uppercase active:scale-95 transition-all"
                >
                  <Github size={18} />
                  Source Code
                </a>
              )}

              <button
                type="button"
                onClick={handleShare}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white font-semibold text-xs tracking-wider uppercase transition-all ml-auto cursor-pointer"
                aria-label="Share project"
              >
                {copied ? <Check size={16} className="text-emerald-400" /> : <Share2 size={16} />}
                {copied ? "Copied Link!" : "Share"}
              </button>
            </div>
          </header>

          {/* Main Content Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left 2 Columns: Overview, Highlights, Features, Architecture */}
            <div className="lg:col-span-2 space-y-10">
              {/* Overview Section */}
              <section className="p-8 md:p-10 rounded-3xl bg-slate-950/70 border border-white/10 backdrop-blur-xl shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                    <Sparkles size={20} />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">Project Overview</h2>
                </div>
                <div className="text-slate-300 text-base md:text-lg leading-relaxed font-normal space-y-4">
                  <p>{project.overview || project.description}</p>
                </div>
              </section>

              {/* Key Features Grid */}
              {project.features && project.features.length > 0 && (
                <section className="p-8 md:p-10 rounded-3xl bg-slate-950/70 border border-white/10 backdrop-blur-xl shadow-xl">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                      <Layers size={20} />
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-white">Key Features</h2>
                      <p className="text-slate-400 text-xs md:text-sm mt-1">Core capabilities and architectural highlights</p>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    {project.features.map((feat, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all hover:bg-white/8 group"
                      >
                        <div className="flex items-center gap-2 mb-2 text-cyan-400 font-bold text-base group-hover:text-cyan-300">
                          <CheckCircle2 size={16} className="shrink-0 text-cyan-400" />
                          <span>{feat.title}</span>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed pl-6">
                          {feat.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Highlights & Milestones */}
              {project.highlights && project.highlights.length > 0 && (
                <section className="p-8 md:p-10 rounded-3xl bg-slate-950/70 border border-white/10 backdrop-blur-xl shadow-xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                      <ShieldCheck size={20} />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white">Technical Highlights</h2>
                  </div>

                  <ul className="space-y-3.5">
                    {project.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-300 text-sm md:text-base">
                        <Check size={18} className="text-cyan-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Architecture & Engineering Breakdown */}
              {project.architecture && (
                <section className="p-8 md:p-10 rounded-3xl bg-slate-950/70 border border-white/10 backdrop-blur-xl shadow-xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                      <Cpu size={20} />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white">Architecture & Design</h2>
                  </div>

                  {typeof project.architecture === "string" ? (
                    <p className="text-slate-300 text-base leading-relaxed">{project.architecture}</p>
                  ) : (
                    <div className="grid sm:grid-cols-2 gap-4">
                      {Object.entries(project.architecture).map(([key, val]) => (
                        <div key={key} className="p-4 rounded-2xl bg-white/5 border border-white/10">
                          <span className="text-[10px] font-black uppercase tracking-wider text-cyan-400 block mb-1">
                            {key.replace(/([A-Z])/g, " $1")}
                          </span>
                          <span className="text-slate-300 text-sm font-medium">{val}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </section>
              )}
            </div>

            {/* Right Column Sidebar: Quick Specs, Repo Info, Author Details */}
            <aside className="space-y-8">
              {/* Quick Specs Card */}
              <div className="p-6 md:p-8 rounded-3xl bg-slate-950/80 border border-white/10 backdrop-blur-xl shadow-xl">
                <div className="flex items-center gap-2 mb-6 text-sm font-bold tracking-wider uppercase text-cyan-400">
                  <Terminal size={16} />
                  <span>Project Specs</span>
                </div>

                <dl className="space-y-4 text-sm">
                  <div className="flex justify-between py-2 border-b border-white/5">
                    <dt className="text-slate-400">Category</dt>
                    <dd className="text-white font-medium">{project.category || "Software"}</dd>
                  </div>

                  <div className="flex justify-between py-2 border-b border-white/5">
                    <dt className="text-slate-400">Status</dt>
                    <dd className="text-emerald-400 font-semibold">{project.status || "Active"}</dd>
                  </div>

                  {project.stats?.license && (
                    <div className="flex justify-between py-2 border-b border-white/5">
                      <dt className="text-slate-400">License</dt>
                      <dd className="text-slate-200 font-medium">{project.stats.license}</dd>
                    </div>
                  )}

                  {project.stats?.platform && (
                    <div className="flex justify-between py-2 border-b border-white/5">
                      <dt className="text-slate-400">Platform</dt>
                      <dd className="text-slate-200 font-medium text-right">{project.stats.platform}</dd>
                    </div>
                  )}

                  <div className="flex justify-between py-2 border-b border-white/5">
                    <dt className="text-slate-400">Primary Code</dt>
                    <dd className="text-slate-200 font-medium">
                      {project.tech && project.tech[0] ? project.tech[0] : "Multi-stack"}
                    </dd>
                  </div>

                  <div className="flex justify-between py-2">
                    <dt className="text-slate-400">Open Source</dt>
                    <dd className="text-cyan-400 font-semibold">{project.url ? "Yes" : "Private"}</dd>
                  </div>
                </dl>
              </div>

              {/* GitHub Metrics Card (if available) */}
              {project.stats && (project.stats.stars !== undefined || project.stats.forks !== undefined) && (
                <div className="p-6 md:p-8 rounded-3xl bg-slate-950/80 border border-white/10 backdrop-blur-xl shadow-xl">
                  <div className="flex items-center gap-2 mb-4 text-sm font-bold tracking-wider uppercase text-slate-300">
                    <Github size={16} />
                    <span>Repository Stats</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                      <div className="flex items-center justify-center gap-1.5 text-amber-400 mb-1">
                        <Star size={16} className="fill-amber-400/20" />
                        <span className="text-2xl font-black">{project.stats.stars || 0}</span>
                      </div>
                      <span className="text-[11px] uppercase tracking-wider text-slate-400 font-bold">Stars</span>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                      <div className="flex items-center justify-center gap-1.5 text-cyan-400 mb-1">
                        <GitFork size={16} />
                        <span className="text-2xl font-black">{project.stats.forks || 0}</span>
                      </div>
                      <span className="text-[11px] uppercase tracking-wider text-slate-400 font-bold">Forks</span>
                    </div>
                  </div>

                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white transition-colors"
                    >
                      <Github size={14} /> Star on GitHub
                    </a>
                  )}
                </div>
              )}

              {/* Developer Callout */}
              <div className="p-6 md:p-8 rounded-3xl bg-linear-to-br from-cyan-950/40 via-slate-950 to-slate-950 border border-cyan-500/20 backdrop-blur-xl shadow-xl text-center">
                <div className="size-16 rounded-full mx-auto mb-4 p-0.5 bg-linear-to-tr from-cyan-400 to-blue-600">
                  <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center text-cyan-400 font-black text-xl">
                    AS
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-1">Abhishek Shah</h3>
                <p className="text-xs text-slate-400 mb-4">Full-Stack Developer & Software Engineer</p>
                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  Interested in collaborating or discussing this project? Feel free to reach out.
                </p>
                <div className="flex gap-2">
                  <Link
                    href="/contact"
                    className="flex-1 py-2.5 rounded-xl bg-cyan-400 text-black font-bold text-xs tracking-wider uppercase hover:bg-cyan-300 transition-colors shadow-md shadow-cyan-400/20"
                  >
                    Get in Touch
                  </Link>
                  <Link
                    href="/about"
                    className="flex-1 py-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white font-bold text-xs tracking-wider uppercase transition-colors"
                  >
                    About Me
                  </Link>
                </div>
              </div>
            </aside>
          </div>

          {/* Related Projects Section */}
          {relatedProjects && relatedProjects.length > 0 && (
            <section className="mt-24 pt-16 border-t border-white/10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400 block mb-2">
                    More Creations
                  </span>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-white">Explore Other Projects</h2>
                </div>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 text-sm font-bold text-cyan-400 hover:text-cyan-300 transition-colors group"
                >
                  View All Projects
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProjects.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/projects/${rel.slug}`}
                    className="group p-6 rounded-3xl bg-slate-950/80 border border-white/5 hover:border-cyan-500/30 transition-all hover:-translate-y-1 shadow-xl flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-white/5 text-cyan-400 border border-white/10">
                          {rel.category || "Project"}
                        </span>
                        <ArrowRight size={16} className="text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-2">
                        {rel.name}
                      </h3>
                      <p className="text-slate-400 text-xs leading-relaxed line-clamp-3 mb-6">
                        {rel.description || rel.tagline}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                      {rel.tech?.slice(0, 3).map((t) => (
                        <span key={t} className="text-[9px] uppercase tracking-wider px-2 py-0.5 rounded bg-white/5 text-slate-400">
                          {t}
                        </span>
                      ))}
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Footer Signature */}
        <div className="mt-20">
          <SignatureBar />
        </div>
      </div>
    </LazyMotion>
  );
}

