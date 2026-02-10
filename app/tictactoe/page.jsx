"use client";

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { 
  Download, 
  ChevronLeft, 
  ShieldCheck, 
  Smartphone,
  Gamepad2,
  Info,
  CheckCircle2,
  Trophy,
  Zap,
  Activity,
  Cpu,
  Layers,
  Settings,
} from 'lucide-react';

export default function TicTacToePage() {
  const [isDownloading, setIsDownloading] = useState(false);

  // --- CONFIGURATION ---
  const game = {
    title: "TicTacToe",
    version: "v1.3.0-stable",
    size: "45 MB",
    logo: "/tictactoe-logo.png",
    apkPath: "/downloads/tictactoe.apk",
    tags: ["No Ads", "Offline", "AI Powered"],
    features: [
      {
        icon: <Cpu className="w-5 h-5 text-cyan-400" />,
        title: "Advanced AI",
        desc: "Neural-based difficulty levels that adapt to your playstyle."
      },
      {
        icon: <Layers className="w-5 h-5 text-indigo-400" />,
        title: "Neo-Dark UI",
        desc: "Custom-built interface with smooth 60FPS animations."
      },
      {
        icon: <Zap className="w-5 h-5 text-amber-400" />,
        title: "Instant Play",
        desc: "Zero loading screens. Jump straight into the action."
      },
      {
        icon: <Gamepad2 className="w-5 h-5 text-rose-400" />,
        title: "Local PvP",
        desc: "Challenge your friends in the classic 1v1 local mode."
      }
    ]
  };

  // --- LOGO & FAVICON DYNAMIC LOGIC ---
  useEffect(() => {
    const originalFavicon = document.querySelector("link[rel*='icon']")?.href;
    const favicon = document.querySelector("link[rel*='icon']");
    
    // Set Game Branding as Favicon
    if (favicon && game.logo) {
      favicon.href = game.logo;
    }

    return () => {
      // Restore Portfolio Branding on Exit
      if (favicon && originalFavicon) {
        favicon.href = originalFavicon;
      }
    };
  }, [game.logo]);

  const handleNativeDownload = () => {
    setIsDownloading(true);
    
    // Native Browser Download Trigger
    const anchor = document.createElement('a');
    anchor.href = game.apkPath;
    anchor.download = "TicTacToe_Enhanced.apk"; 
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);

    // Provide visual feedback
    setTimeout(() => setIsDownloading(false), 6000);
  };

  return (
    <div className="min-h-screen bg-[#030712] text-white selection:bg-cyan-500/30 font-['Plus_Jakarta_Sans',sans-serif] overflow-x-hidden">
      
      {/* Background Mesh Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-150 h-150 bg-cyan-600/10 blur-[140px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-150 h-150 bg-indigo-600/10 blur-[140px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 relative z-10">
        
        {/* Navigation Header */}
        <header className="flex justify-between items-center mb-20">
          <button 
            onClick={() => window.history.back()} 
            className="group flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all backdrop-blur-md active:scale-95"
          >
            <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform text-cyan-400" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Back to Portfolio</span>
          </button>
          
          <div className="flex items-center gap-3">
             <div className="text-right hidden sm:block">
                <p className="text-[8px] font-black text-slate-500 uppercase tracking-widest leading-none">Developer</p>
                <p className="text-[10px] font-bold text-slate-300">Abhishek Shah</p>
             </div>
             <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center p-2">
                <Image
                  src="/favicon.ico" 
                  width={32}
                  height={32}
                  alt="A.S" 
                  className="w-full h-full grayscale opacity-50 object-contain" 
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
             </div>
          </div>
        </header>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32">
          
          {/* Visual Showcase (Logo)*/}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative flex justify-center lg:justify-start"
          >
            <div className="absolute inset-0 bg-cyan-500/20 blur-[100px] rounded-full scale-75" />
            <div className="relative group">
              <div className="absolute -inset-1 bg-linear-to-tr from-cyan-500 to-indigo-600 rounded-[4rem] blur opacity-30 group-hover:opacity-60 transition duration-1000" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-[4rem] bg-slate-900 border border-white/10 p-2 overflow-hidden shadow-2xl">
                <Image
                  src={game.logo} 
                  width={320}
                  height={320}
                  alt="Game Icon" 
                  className="w-full h-full object-cover rounded-[3.8rem]"
                  onError={(e) => {
                    e.target.src = "https://placehold.co/600x600/1e293b/FFFFFF/png?text=TIC+TAC+TOE";
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8 text-center lg:text-left"
          >
            <div className="space-y-2">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-black tracking-widest uppercase mb-4"
              >
                <Zap size={12} className="fill-current" />
                Latest Enhancement Pack
              </motion.div>
              <h1 className="bg-linear-to-r from-white via-cyan-100 to-indigo-400 bg-clip-text text-transparent text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] italic">
                {game.title}<br/>
                <span className="text-cyan-400 opacity-90">{game.subtitle}</span>
              </h1>
              <p className="text-slate-400 text-lg md:text-xl font-medium max-w-xl mx-auto lg:mx-0 pt-4">
                A modern reimagining of the world&apos;s most famous game. Built with <span className="text-white font-bold">Flutter</span> for seamless Android performance and visual depth.
              </p>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
               <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
                  <Smartphone size={14} className="text-cyan-400" />
                  Android 11+
               </div>
               <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
                  <Activity size={14} className="text-indigo-400" />
                  {game.size}
               </div>
               <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
                  <ShieldCheck size={14} className="text-green-400" />
                  Stable
               </div>
            </div>
          </motion.div>
        </div>

        {/* Download Hub */}
        <div className="grid lg:grid-cols-12 gap-8 mb-32">
          
          {/* Primary Action */}
          <div className="lg:col-span-8 p-px rounded-[3rem] bg-linear-to-br from-white/20 via-transparent to-transparent shadow-2xl">
            <div className="relative bg-slate-950/60 backdrop-blur-3xl border border-white/5 rounded-[3rem] p-10 md:p-16 overflow-hidden">
              <div className="absolute top-0 right-0 p-10 opacity-5">
                <Download size={200} />
              </div>

              <div className="relative z-10 max-w-lg">
                <h2 className="text-4xl font-black mb-4 tracking-tight">Get Your APK Now</h2>
                <p className="text-slate-400 text-lg mb-10 leading-relaxed font-medium">
                  Get the compiled APK directly from my repository. Fast, secure, and optimized for immediate installation on mobile devices.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 items-center">
                  <motion.button
                    onClick={handleNativeDownload}
                    disabled={isDownloading}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className={`group relative w-full sm:w-auto px-12 py-6 rounded-4xl font-black text-sm tracking-[0.2em] flex items-center justify-center gap-4 transition-all shadow-2xl ${
                      isDownloading ? 'bg-green-500 text-white' : 'bg-white text-black hover:bg-cyan-400'
                    }`}
                  >
                    <AnimatePresence mode="wait">
                      {!isDownloading ? (
                        <motion.div key="idle" className="flex items-center gap-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                          <Download size={20} className="group-hover:translate-y-1 transition-transform" />
                          DOWNLOAD APK
                        </motion.div>
                      ) : (
                        <motion.div key="active" className="flex items-center gap-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                          <CheckCircle2 size={20} className="animate-bounce" />
                          DOWNLOADING...
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>
                  
                  <div className="flex items-center gap-2 text-green-400 font-black text-[10px] uppercase tracking-widest bg-green-400/10 px-4 py-2 rounded-full border border-green-400/20">
                    <ShieldCheck size={14} />
                    Verified Build
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats Panel */}
          <div className="lg:col-span-4 space-y-6">
             <div className="h-full p-8 rounded-[3rem] bg-white/5 border border-white/5 flex flex-col justify-center space-y-6 backdrop-blur-sm">
                <div className="space-y-4">
                   <h3 className="text-xs font-black uppercase tracking-[0.3em] text-slate-500">Technical Specs</h3>
                   <div className="space-y-3">
                      {[
                        { label: "Build Type", val: "Stable", icon: <Settings size={14}/> },
                        { label: "Architecture", val: "Universal", icon: <Layers size={14}/> },
                        { label: "Status", val: "Verified", icon: <Trophy size={14}/> }
                      ].map((item, i) => (
                        <div key={i} className="flex justify-between items-center py-3 border-b border-white/5">
                           <span className="text-[10px] font-bold text-slate-400 flex items-center gap-2">
                              {item.icon} {item.label}
                           </span>
                           <span className="text-[10px] font-black uppercase text-cyan-400">{item.val}</span>
                        </div>
                      ))}
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* Enhancements Feature Grid */}
        <div className="space-y-12 mb-32">
          <div className="flex items-center gap-6">
            <h3 className="text-3xl font-black italic uppercase tracking-tighter">Enhancements</h3>
            <div className="h-px flex-1 bg-linear-to-r from-white/10 to-transparent" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {game.features.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-[2.5rem] bg-white/5 border border-white/5 hover:bg-white/[0.07] transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:border-cyan-500/30 group-hover:bg-cyan-500/10 transition-all">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold mb-2 tracking-tight">{feature.title}</h4>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Support Section / Installation Guide */}
        <div className="p-10 rounded-[3.5rem] bg-indigo-500/5 border border-indigo-500/10 flex flex-col md:flex-row gap-10 items-center">
           <div className="w-20 h-20 rounded-[2.2rem] bg-indigo-500/10 flex items-center justify-center shrink-0 border border-indigo-500/20 shadow-inner">
              <Info className="text-indigo-400" size={32} />
           </div>
           <div className="space-y-2">
              <h4 className="text-xl font-bold tracking-tight">Installation Protocol</h4>
              <p className="text-slate-400 text-sm leading-relaxed max-w-2xl font-medium">
                Independent APK files are not distributed via the Play Store. Android will prompt you with an <strong>&quot;Unknown Sources&quot;</strong> warning. Simply tap &quot;Allow&quot; or &quot;Download Anyway&quot; to proceed. This build is clean, signed, and safe for your device.
              </p>
           </div>
        </div>
      </div>
    </div>
  );
}