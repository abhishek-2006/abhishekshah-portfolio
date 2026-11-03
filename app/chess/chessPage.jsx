"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { LazyMotion, domAnimation, m, AnimatePresence } from "framer-motion";
import { Download, Cpu, ChevronLeft, ShieldCheck, Smartphone, Monitor, Gamepad2, Info, Github, Zap, Activity, Layers, ExternalLink, Star } from "lucide-react";
import TiltCard from "../components/TiltCard";
import { useReducer } from "react";

export default function App() {
  const [isAnimating, setIsAnimating] = useState(false);
  function reducer(state, action) {
    switch (action.type) {
      case "SET_DOWNLOADING_TYPE":
        return {
          ...state,
          downloadingType: action.payload,
        };

      case "SET_APK_DATA":
        return {
          ...state,
          apkData: action.payload,
        };

      case "SET_WIN_DATA":
        return {
          ...state,
          winData: action.payload,
        };

      case "SET_VERSION":
        return {
          ...state,
          version: action.payload,
        };

      case "SET_MOUNTED":
        return {
          ...state,
          isMounted: action.payload,
        };

      case "SET_PREVIEW_IMAGE":
        return {
          ...state,
          previewImage: action.payload,
        };

      case "SET_OS":
        return {
          ...state,
          os: action.payload,
        };

      default:
        return state;
    }
  }
  const initialState = {
    downloadingType: null,
    apkData: {
      url: "",
      size: "4.2 MB",
      downloads: 0,
    },
    winData: {
      url: "",
      size: "Unknown",
      downloads: 0,
    },
    version: "v2.0.0",
    isMounted: false,
    previewImage: null,
    os: "android",
  };
  
  const [state, dispatch] = useReducer(reducer, initialState);

  const {
    downloadingType,
    apkData,
    winData,
    version,
    isMounted,
    previewImage,
    os,
  } = state;

  const game = {
    title: "Chess",
    tagline: "Enhanced Edition",
    logo: "/chess-logo.png",
    developer: "Abhishek Shah",
    tags: ["No Ads", "Offline", "Multiplayer"],

    features: [
      {
        icon: <Cpu className="size-6 text-cyan-500" />,
        title: "Adaptive AI",
        desc: "Four difficulty levels with a unique adaptive algorithm that learns and evolves with your playstyle.",
      },
      {
        icon: <Layers className="size-6 text-indigo-500" />,
        title: "Dark UI",
        desc: "A custom-built, battery-efficient interface with buttery smooth 60FPS animations.",
      },
      {
        icon: <Zap className="size-6 text-amber-500" />,
        title: "Instant Play",
        desc: "Optimized binary size for near-zero loading times. Jump straight into the action.",
      },
      {
        icon: <Gamepad2 className="size-6 text-rose-500" />,
        title: "Local PvP",
        desc: "Challenge friends in the classic 1v1 local mode with haptic feedback.",
      },
    ],
  };

  useEffect(() => {
    dispatch({ type: "SET_MOUNTED", payload: true });
    if (typeof window !== "undefined") {
      const ua = window.navigator.userAgent.toLowerCase();
      if (ua.includes("windows")) dispatch({ type: "SET_OS", payload: "windows" });
      else if (ua.includes("android")) dispatch({ type: "SET_OS", payload: "android" });
      else dispatch({ type: "SET_OS", payload: "other" });
    }

    const fetchRelease = async () => {
      try {
        const res = await fetch(
          "https://api.github.com/repos/abhishek-2006/chess/releases/latest"
        );
        const data = await res.json();
        if (data && data.tag_name) {
          dispatch({ type: "SET_VERSION", payload: data.tag_name });

          const apkAsset = data.assets?.find((a) => a.name.endsWith(".apk"));
          if (apkAsset) {
            dispatch({ type: "SET_APK_DATA", payload: {
              url: apkAsset.browser_download_url,
              size: (apkAsset.size / (1024 * 1024)).toFixed(1) + " MB",
              downloads: apkAsset.download_count || 0
            },});
          }

          const winAsset = data.assets?.find((a) => a.name.endsWith(".exe") || a.name.endsWith(".zip") || a.name.toLowerCase().includes("windows"));
          if (winAsset) {
            dispatch({ type: "SET_WIN_DATA", payload: {
              url: winAsset.browser_download_url,
              size: (winAsset.size / (1024 * 1024)).toFixed(1) + " MB",
              downloads: winAsset.download_count || 0
            },});
          } else {
            dispatch({ type: "SET_WIN_DATA", payload: {
              url: data.html_url,
              size: (winAsset.size / (1024 * 1024)).toFixed(1) + " MB",
              downloads: 0
            },});
          }
        }
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };
    fetchRelease();

  }, []);

  // Favicon Swap Logic
  useEffect(() => {
    if (typeof window === "undefined") return;
    const favicon = document.querySelector("link[rel*='icon']");
    const originalHref = favicon?.href;
    if (favicon) favicon.href = game.logo;
    return () => {
      if (favicon && originalHref) favicon.href = originalHref;
    };
  }, [game.logo]);

  const handleDownload = (type) => {
    const targetUrl = type === 'android' ? apkData.url : winData.url;
    if (!targetUrl) return;

    if (targetUrl.includes("github.com") && !targetUrl.includes("/download/")) {
      window.open(targetUrl, "_blank");
      return;
    }

    dispatch({ type: "SET_DOWNLOADING_TYPE", payload: type });
    const a = document.createElement("a");
    a.href = targetUrl;
    a.download = type === 'android' ? "Chess_Abhishek.apk" : "Chess_Abhishek.exe";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => dispatch({ type: "SET_DOWNLOADING_TYPE", payload: null }), 5000);
  };

  if (!isMounted) return null;

  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen bg-[#030712] text-white overflow-x-hidden selection:bg-cyan-500/30 font-sans">
        {/* Styles & Performance Keyframes */}
        <style>{`
          .no-scrollbar::-webkit-scrollbar { display: none; }
          .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
          
          @keyframes float1 {
            0% { transform: rotateX(0deg) rotateY(0deg) translateY(0px); }
            50% { transform: rotateX(180deg) rotateY(180deg) translateY(-50px); }
            100% { transform: rotateX(360deg) rotateY(360deg) translateY(0px); }
          }
          @keyframes float2 {
            0% { transform: rotateX(0deg) rotateY(0deg) translateY(0px); }
            50% { transform: rotateX(-180deg) rotateY(180deg) translateY(50px); }
            100% { transform: rotateX(-360deg) rotateY(360deg) translateY(0px); }
          }
          @keyframes float3 {
            0% { transform: rotateX(0deg) rotateZ(0deg) translateX(0px); }
            50% { transform: rotateX(180deg) rotateZ(180deg) translateX(50px); }
            100% { transform: rotateX(360deg) rotateZ(360deg) translateX(0px); }
          }
          @keyframes float4 {
            0% { transform: rotateX(0deg) rotateY(0deg) scale(1); }
            50% { transform: rotateX(180deg) rotateY(180deg) scale(1.2); }
            100% { transform: rotateX(360deg) rotateY(360deg) scale(1); }
          }
          @keyframes heroGlow {
            0%, 100% { transform: scale(1) translateZ(-30px); opacity: 0.4; }
            50% { transform: scale(1.05) translateZ(-30px); opacity: 0.6; }
          }

          .anim-float1 { animation: float1 20s linear infinite; }
          .anim-float2 { animation: float2 25s linear infinite; }
          .anim-float3 { animation: float3 15s linear infinite; }
          .anim-float4 { animation: float4 30s linear infinite; }
          .anim-hero-glow { animation: heroGlow 3s ease-in-out infinite; }
        `}</style>

        {/* Background Ambience */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" style={{ perspective: 1000 }}>
          <div className="absolute top-[-10%] right-[-10%] size-[600px] rounded-full animate-pulse bg-[radial-gradient(circle,rgba(8,145,178,0.15)_0%,transparent_60%)]" />
          <div className="absolute bottom-[-10%] left-[-10%] size-[600px] rounded-full animate-pulse bg-[radial-gradient(circle,rgba(79,70,229,0.15)_0%,transparent_60%)]" style={{ animationDelay: '2s' }} />

          {/* Floating 3D Shapes */}
          <div
            className="absolute top-[20%] left-[10%] size-32 bg-linear-to-tr from-cyan-500/20 to-transparent border border-cyan-500/20 rounded-3xl backdrop-blur-sm anim-float1"
            style={{ transformStyle: "preserve-3d", willChange: isAnimating ? "transform" : undefined }}
          />
          <div
            className="absolute top-[60%] right-[10%] size-48 bg-linear-to-br from-indigo-500/10 to-transparent border border-indigo-500/10 rounded-full backdrop-blur-sm anim-float2"
            style={{ transformStyle: "preserve-3d", willChange: isAnimating ? "transform" : undefined }}
          />
          <div
            className="absolute top-[80%] left-[30%] size-24 bg-linear-to-bl from-rose-500/10 to-transparent border border-rose-500/10 rounded-xl backdrop-blur-sm anim-float3"
            style={{ transformStyle: "preserve-3d", willChange: isAnimating ? "transform" : undefined }}
          />
          <div
            className="absolute top-[40%] left-[60%] size-64 border-[1px] border-cyan-500/10 rounded-full backdrop-blur-xs anim-float4"
            style={{ transformStyle: "preserve-3d", willChange: isAnimating ? "transform" : undefined }}
          >
            <div className="absolute inset-0 border-[1px] border-indigo-500/10 rounded-full" style={{ transform: "rotateX(90deg)" }}></div>
            <div className="absolute inset-0 border-[1px] border-rose-500/10 rounded-full" style={{ transform: "rotateY(90deg)" }}></div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-10 relative z-10">

          {/* NAVIGATION */}
          <header className="flex justify-between items-center mb-16 md:mb-24">
            <m.a href="./"
              whileHover={{ x: -4 }}
              className="flex items-center gap-3 hover:px-5 hover:py-2.5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all backdrop-blur-xl"
            >
              <ChevronLeft size={18} className="text-cyan-400" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Portfolio</span>
            </m.a>

            <div className="flex items-center gap-4">
              <div className="text-right hidden sm:block">
                <p className="text-[8px] uppercase tracking-[0.3em] text-slate-500 font-black">Lead Developer</p>
                <p className="text-xs font-bold text-slate-200">{game.developer}</p>
              </div>
              <div className="size-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center p-1.5 shadow-inner">
                <Image src="/favicon.ico" alt="Abhishek Shah Portfolio Logo" width={32} height={32} className="w-full h-full grayscale opacity-60" />
              </div>
            </div>
          </header>

          {/* HERO SECTION */}
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center mb-24 md:mb-40">
            <m.div
              initial={{ opacity: 0, scale: 0.8, rotateY: -30, z: -100 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0, z: 0 }}
              transition={{ duration: 1, type: "spring", bounce: 0.4 }}
              className="lg:col-span-5 flex justify-center lg:justify-start"
              style={{ perspective: 1200 }}
            >
              <TiltCard tiltStrength={20} className="relative group w-full max-w-sm">
                <div
                  className="absolute -inset-6 bg-linear-to-tr from-cyan-500/50 to-indigo-500/50 rounded-[4.5rem] blur-2xl group-hover:opacity-80 transition duration-1000 anim-hero-glow"
                />
                <div className="relative">
                  <Image src={game.logo} priority={true} alt="Chess Game Logo" width={320} height={320} className="w-64 h-64 md:w-80 md:h-80 rounded-[3.5rem] object-cover" />
                </div>
              </TiltCard>
            </m.div>

            <m.div
              initial={{ opacity: 0, x: 40, rotateY: 15 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 1, type: "spring", bounce: 0.3, delay: 0.2 }}
              className="lg:col-span-7 space-y-8 text-center lg:text-left"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-black tracking-widest uppercase shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                  <Star size={12} className="fill-current" /> High Fidelity
                </div>
                <h1 className="text-6xl md:text-8xl font-semibold tracking-tighter leading-none italic uppercase text-white">
                  <m.span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-indigo-300 to-cyan-300 inline-block"
                    animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                    transition={{ duration: 6, ease: "linear", repeat: Infinity }}
                    style={{ backgroundSize: "200% auto" }}
                  >
                    Chess
                  </m.span>
                  <span className="block text-3xl md:text-5xl not-italic font-medium text-slate-500 mt-2">{game.tagline}</span>
                </h1>
              </div>

              <p className="text-slate-400 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
                Experience the classic game redefined for {os === 'windows' ? 'Windows' : 'Android'}. Built with <span className="text-cyan-400 font-bold">Flutter</span> for ultimate performance.
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                {[
                  { icon: os === 'windows' ? <Monitor size={14} /> : <Smartphone size={14} />, label: "Device", value: os === 'windows' ? "Windows 10+" : "Android 8+" },
                  { icon: <Activity size={14} />, label: "Size", value: os === 'windows' ? winData.size : apkData.size },
                  { icon: <ShieldCheck size={14} />, label: "Version", value: version },
                  { icon: <Download size={14} />, label: "Downloads", value: (os === 'windows' ? winData.downloads : apkData.downloads) || 0 },
                ].map((stat) => (
                  <div key={stat.label} className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-3.5 rounded-2xl shadow-xl backdrop-blur-md">
                    <div className="text-cyan-400">{stat.icon}</div>
                    <div className="text-left">
                      <p className="text-[8px] uppercase tracking-widest text-slate-500 font-black leading-none mb-1">{stat.label}</p>
                      <p className="text-[11px] font-bold text-slate-200">{stat.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </m.div>
          </div>

          {/* DOWNLOAD CTA */}
          <m.div
            initial={{ opacity: 0, y: 50, rotateX: -15, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="mb-32 p-10 md:p-20 rounded-[4rem] bg-linear-to-br from-slate-900 to-black border border-white/5 shadow-2xl relative overflow-hidden group text-center md:text-left"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="absolute top-0 right-0 p-16 opacity-5 scale-150 group-hover:rotate-12 transition-transform duration-1000 pointer-events-none">
              <Download size={250} />
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-6xl font-semibold tracking-tight uppercase italic leading-none">Download {os === 'windows' ? 'for Windows' : 'for Android'}</h2>
                <p className="text-slate-400 text-lg font-medium max-w-md">Retrieve the latest verified build directly from the official source.</p>
                <div className="flex items-center justify-center md:justify-start gap-5 text-[9px] font-bold uppercase tracking-[0.3em] text-slate-500">
                  <span className="flex items-center gap-1.5"><ShieldCheck size={14} className="text-green-500" /> Secure</span>
                  <span className="flex items-center gap-1.5"><Zap size={14} className="text-amber-500" /> Ads Free</span>
                </div>
              </div>

              <div className="flex flex-col items-center md:items-end gap-4">
                <m.button
                  onClick={() => handleDownload(os === 'windows' ? 'windows' : 'android')}
                  disabled={os === 'windows' ? !winData.url : !apkData.url}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-14 py-8 rounded-[2rem] font-black text-xs tracking-[0.2em] cursor-pointer flex items-center gap-4 transition-all shadow-[0_20px_50px_rgba(0,0,0,0.3)] ${downloadingType === (os === 'windows' ? 'windows' : 'android')
                      ? "bg-green-600 text-white"
                      : "bg-white text-black hover:bg-cyan-400 transition-colors"
                    }`}
                >
                  <AnimatePresence mode="wait">
                    {downloadingType !== (os === 'windows' ? 'windows' : 'android') ? (
                      <m.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-3">
                        <Download size={20} /> DOWNLOAD FOR {os === 'windows' ? 'WINDOWS' : 'ANDROID'}
                      </m.div>
                    ) : (
                      <m.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-3">
                        <div className="size-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                        STARTING…
                      </m.div>
                    )}
                  </AnimatePresence>
                </m.button>

                <button
                  type="button"
                  onClick={() => handleDownload(os === 'windows' ? 'android' : 'windows')}
                  disabled={os === 'windows' ? !apkData.url : !winData.url}
                  className="text-[10px] text-slate-400 hover:text-cyan-400 underline decoration-white/20 underline-offset-4 uppercase tracking-widest font-bold transition-colors flex items-center gap-2 mt-2"
                >
                  {downloadingType === (os === 'windows' ? 'android' : 'windows') ? (
                    <span className="flex items-center gap-2">
                      <div className="size-3 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
                      STARTING…
                    </span>
                  ) : (
                    <span className="cursor-pointer">
                      Download for {os === 'windows' ? 'Android' : 'Windows'}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </m.div>

          {/* FEATURES GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
            {game.features.map((f) => (
              <TiltCard key={f.title} tiltStrength={15} className="h-full">
                <m.div
                  initial={{ opacity: 0, y: 40, rotateX: 30 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: f.delay, duration: 0.8, type: "spring", bounce: 0.4 }}
                  className="p-8 rounded-[2.5rem] bg-white/5 border border-white/5 hover:border-cyan-500/40 transition-all group backdrop-blur-sm shadow-2xl h-full flex flex-col"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div style={{ transform: "translateZ(30px)" }}>
                    <div className="size-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-inner">
                      {f.icon}
                    </div>
                    <h4 className="text-xl font-medium mb-3 uppercase tracking-tight text-white">{f.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed font-medium">{f.desc}</p>
                  </div>
                </m.div>
              </TiltCard>
            ))}
          </div>

          {/* SECURITY NOTE */}
          <m.div
            initial={{ opacity: 0, rotateX: -20, y: 30 }}
            whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, type: "spring" }}
            className="p-10 rounded-[3rem] bg-white/2 border border-white/5 flex flex-col md:flex-row gap-8 items-center text-center md:text-left backdrop-blur-2xl shadow-2xl"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="size-16 rounded-full bg-cyan-500/10 flex items-center justify-center shrink-0" style={{ transform: "translateZ(20px)" }}>
              <div className="p-3 bg-cyan-400/10 rounded-full">
                <Info className="text-cyan-400" size={28} />
              </div>
            </div>
            <div className="space-y-1" style={{ transform: "translateZ(10px)" }}>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-400">Security Note</p>
              <p className="text-slate-400 text-sm font-medium leading-relaxed">
                Standard {os === 'windows' ? 'Windows Defender' : 'Android security'} may flag independent {os === 'windows' ? 'executables' : 'apk'}. This build is clean and verified by the developer. Tap <span className="text-white font-bold">&quot;{os === 'windows' ? 'Run Anyway' : 'Install Anyway'}&quot;</span> to begin playing.
              </p>
            </div>
          </m.div>

          {/* FOOTER */}
          <footer className="mt-40 pt-16 border-t border-white/5 text-center flex flex-col items-center gap-10">
            <div className="flex gap-10 items-center transition-all duration-700">
              <div className="relative group">
                <div className="absolute inset-0 bg-cyan-500/20 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Image src="/favicon.ico" alt="Abhishek Shah Portfolio Logo" width={32} height={32} className="size-8 relative z-10 opacity-80 hover:opacity-100 transition-opacity" />
              </div>
              <div className="w-px h-6 bg-slate-800"></div>
              <a href="https://github.com/abhishek-2006" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">
                <Github size={24} className="text-white" />
              </a>
            </div>

            <div className="space-y-4">
              <p className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-600">
                © 2026 ABHISHEK SHAH • NEXT-GEN MOBILE SYSTEMS
              </p>
              <div className="flex justify-center gap-6 text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">
                <a href="https://github.com/abhishek-2006/chess" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">Repository <ExternalLink size={10} /></a>
                <span className="text-slate-900">|</span>
                <Link href="/contact" className="hover:text-cyan-400 transition-colors">Inquiries</Link>
              </div>
            </div>
          </footer>
        </div>

        {/* IMAGE PREVIEW */}
        <AnimatePresence>
          {previewImage && (
            <m.div
              initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
              animate={{ opacity: 1, backdropFilter: "blur(2px)" }}
              exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
              onClick={() => setPreviewImage(null)}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 cursor-pointer"
            >
              <m.div
                initial={{ scale: 0.8, y: 50, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.9, y: 20, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className="relative rounded-[2rem] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] border border-white/20 cursor-default"
                style={{ height: "min(85vh, 850px)", aspectRatio: "9/16", maxWidth: "90vw" }}
              >
                <Image src={previewImage.url} alt={previewImage.title} fill sizes="(max-width: 768px) 90vw, 500px" className="object-cover" />
                <div className="absolute top-6 right-6 px-4 py-2 bg-black/50 backdrop-blur-md rounded-full border border-white/10 text-white text-xs font-bold tracking-widest uppercase">
                  {previewImage.title}
                </div>
              </m.div>
            </m.div>
          )}
        </AnimatePresence>
      </div>
    </LazyMotion>
  );
}