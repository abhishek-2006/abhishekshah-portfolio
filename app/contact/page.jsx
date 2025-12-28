"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Github, 
  Instagram, 
  Linkedin, 
  CheckCircle2,
  Sparkles
} from "lucide-react";

export default function App() {
  const [formState, setFormState] = useState("idle"); // idle | sending | success

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState("sending");
    // Simulate API delay
    setTimeout(() => setFormState("success"), 2000);
    // Reset after some time
    setTimeout(() => setFormState("idle"), 5000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="min-h-[100svh] w-full bg-[#030712] text-white pt-20 md:pt-32 pb-16 px-4 md:px-8 relative overflow-x-hidden selection:bg-blue-500/30 font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Background Aesthetic Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-5%] left-[-10%] w-[60%] h-[40%] bg-blue-600/10 blur-[80px] md:blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-5%] right-[-10%] w-[60%] h-[40%] bg-purple-600/10 blur-[80px] md:blur-[120px] rounded-full animate-pulse" />
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
        body { overflow-x: hidden; }
      `}</style>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-blue-400 mb-4 md:mb-6">
            <Sparkles size={12} className="animate-pulse" />
            Let&apos;s Collaborate
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-4 md:mb-6 bg-gradient-to-r from-white via-blue-100 to-slate-400 bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-base md:text-xl text-slate-400 leading-relaxed font-medium px-4">
            Have a project idea or just want to discuss the future of tech? 
            <span className="text-white"> My inbox is always open.</span>
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12"
        >
          
          {/* LEFT: Info Card Side */}
          <motion.div variants={itemVariants}>
            <div className="h-full p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] bg-white/5 backdrop-blur-3xl border border-white/10 shadow-2xl relative overflow-hidden group">
              <div className="absolute -right-10 -top-10 w-32 h-32 md:w-40 md:h-40 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-colors duration-700" />
              
              <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-10 flex items-center gap-3">
                Contact Info
                <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
              </h2>

              <div className="space-y-4 md:space-y-8">
                {[
                  { icon: <Mail className="text-blue-400 w-5 h-5 md:w-6 md:h-6" />, label: "Email", value: "shahabhishek051@gmail.com", href: "mailto:shahabhishek051@gmail.com" },
                  { icon: <Phone className="text-green-400 w-5 h-5 md:w-6 md:h-6" />, label: "Phone", value: "+91 78610 53202", href: "tel:+917861053202" },
                  { icon: <MapPin className="text-rose-400 w-5 h-5 md:w-6 md:h-6" />, label: "Location", value: "Gujarat, India", href: "#" }
                ].map((item, idx) => (
                  <motion.a
                    key={idx}
                    href={item.href}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-6 md:gap-6 p-3 md:p-4 rounded-xl md:rounded-2xl hover:bg-white/5 transition-all border border-transparent hover:border-white/5"
                  >
                    <div className="w-10 h-10 md:w-14 md:h-14 rounded-lg md:rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 shadow-inner shrink-0">
                      {item.icon}
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-slate-500 text-[10px] md:text-xs font-bold uppercase tracking-wider mb-0.5">{item.label}</p>
                      <p className="text-sm md:text-lg font-semibold text-slate-200 truncate">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Connections */}
              <div className="mt-8 md:mt-12 pt-8 md:pt-10 border-t border-white/5">
                <h3 className="text-[10px] md:text-sm font-bold tracking-[0.2em] text-slate-500 uppercase mb-6 text-center lg:text-left">Find me on</h3>
                <div className="flex flex-wrap gap-3 md:gap-4 justify-center lg:justify-start">
                  {[
                    { icon: <Github size={18} />, label: "GitHub", url: "https://github.com/abhishek-2006" },
                    { icon: <Instagram size={18} />, label: "Instagram", url: "https://instagram.com/abhishekshah_112" },
                    { icon: <Linkedin size={18} />, label: "LinkedIn", url: "https://linkedin.com/in/abhishek-shah-aa1346326/" }
                  ].map((social, idx) => (
                    <motion.a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 text-[11px] md:text-sm font-bold text-slate-300 hover:text-white transition-all shadow-lg"
                    >
                      {social.icon}
                      {social.label}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Form Card Side */}
          <motion.div variants={itemVariants}>
            <form 
              onSubmit={handleSubmit}
              className="h-full p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] bg-slate-950/50 backdrop-blur-3xl border border-white/10 shadow-2xl relative"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Send a Message</h2>
              
              <div className="space-y-4 md:space-y-6">
                <div className="relative group">
                  <input
                    required
                    type="text"
                    placeholder="Your Full Name"
                    className="w-full p-4 md:p-5 text-sm md:text-base rounded-xl md:rounded-2xl bg-white/5 border border-white/10 focus:border-blue-500/50 outline-none transition-all placeholder:text-slate-600 font-medium focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>

                <div className="relative group">
                  <input
                    required
                    type="email"
                    placeholder="Your Email Address"
                    className="w-full p-4 md:p-5 text-sm md:text-base rounded-xl md:rounded-2xl bg-white/5 border border-white/10 focus:border-blue-500/50 outline-none transition-all placeholder:text-slate-600 font-medium focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>

                <div className="relative group">
                  <textarea
                    required
                    placeholder="Tell me about your project..."
                    rows="5"
                    className="w-full p-4 md:p-5 text-sm md:text-base rounded-xl md:rounded-2xl bg-white/5 border border-white/10 focus:border-blue-500/50 outline-none transition-all placeholder:text-slate-600 font-medium focus:ring-4 focus:ring-blue-500/10 resize-none"
                  ></textarea>
                </div>

                <motion.button
                  disabled={formState !== "idle"}
                  type="submit"
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 md:py-5 rounded-xl md:rounded-2xl font-bold text-base md:text-lg flex items-center justify-center gap-2 md:gap-3 transition-all shadow-xl relative overflow-hidden ${
                    formState === "success" 
                      ? "bg-green-500 text-white" 
                      : "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-blue-500/20"
                  }`}
                >
                  <AnimatePresence mode="wait">
                    {formState === "idle" && (
                      <motion.div key="idle" className="flex items-center gap-2" initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -10, opacity: 0 }}>
                        Send Message <Send size={18} />
                      </motion.div>
                    )}
                    {formState === "sending" && (
                      <motion.div key="sending" className="flex items-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Transmitting...
                      </motion.div>
                    )}
                    {formState === "success" && (
                      <motion.div key="success" className="flex items-center gap-2" initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
                        Success! <CheckCircle2 size={18} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </div>

              <p className="mt-6 md:mt-8 text-center text-slate-500 text-[10px] md:text-xs font-medium italic">
                I typically respond within 24-48 hours.
              </p>
            </form>
          </motion.div>

        </motion.div>

        {/* Closing Footnote */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 md:mt-24 text-center text-slate-600 font-bold tracking-[0.3em] uppercase text-[8px] md:text-[10px]"
        >
          Built with precision
        </motion.div>
      </div>
    </div>
  );
}