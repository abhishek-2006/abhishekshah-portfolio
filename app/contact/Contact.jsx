"use client";
import { useState } from "react";
import { m, domAnimation, LazyMotion } from "framer-motion";
import { FaXTwitter as Twitter } from "react-icons/fa6";
import { Mail, Phone,  MapPin, Github,  Instagram, Linkedin, Sparkles } from "lucide-react";
import SignatureBar from "../components/SignatureBar";
import ContactThreeScene from "../components/ContactThreeScene";
import ContactForm from "../components/ContactForm";
import TiltWrapper from "../components/TiltWrapper";

export default function ContactPage() {
  const [formState, setFormState] = useState("idle");

  const colors = {
    blue400: "#60a5fa",
    blue600: "#2563eb",
    indigo600: "#4f46e5",
    green500: "#22c55e",
    rose400: "#fb7185",
    green400: "#4ade80",
    red500: "#ef4444"
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState("sending");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
      _gotcha: formData.get("_gotcha"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setFormState("success");
        e.target.reset();
        setTimeout(() => setFormState("idle"), 8000);
      } else {
        setFormState("error");
        setTimeout(() => setFormState("idle"), 5000);
      }
    } catch (err) {
      console.error("Submission failed:", err);
      setFormState("error");
      setTimeout(() => setFormState("idle"), 5000);
    }
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
    <LazyMotion features={domAnimation}>
      <div className="min-h-svh w-full text-white pt-20 md:pt-32 pb-16 px-4 md:px-8 relative overflow-hidden selection:bg-blue-500/30 font-['Plus_Jakarta_Sans',sans-serif]">

        {/* 3D Background Scene */}
        <ContactThreeScene />

        <style>{`
          body { overflow-x: hidden; }
        `}</style>

        <div className="max-w-6xl mx-auto relative z-10" style={{ perspective: 1200 }}>

          {/* Header Section */}
          <m.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-2xl mx-auto mb-12 md:mb-20"
          >
            <TiltWrapper className="inline-block" depth={30}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-4 md:mb-6" style={{ color: colors.blue400 }}>
                <Sparkles size={12} className="animate-pulse" />
                Let&apos;s Collaborate
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold mb-4 md:mb-6 bg-linear-to-r from-white via-blue-100 to-slate-400 bg-clip-text text-transparent drop-shadow-2xl">
                Get in Touch
              </h1>
              <p className="text-base md:text-xl text-slate-300 leading-relaxed font-medium px-4 drop-shadow-lg">
                Have a project idea or just want to discuss the future of tech?
                <span className="text-white"> My inbox is always open.</span>
              </p>
            </TiltWrapper>
          </m.div>

          <m.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12"
            style={{ transformStyle: "preserve-3d" }}
          >

            {/* Info Card */}
            <m.div variants={itemVariants} style={{ transformStyle: "preserve-3d" }}>
              <TiltWrapper className="h-full" depth={20}>
                <div className="h-full p-6 md:p-10 rounded-4xl md:rounded-[2.5rem] bg-black/40 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(37,99,235,0.15)] relative overflow-hidden group">
                  <div className="absolute -right-10 -top-10 w-32 h-32 md:w-40 md:h-40 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-colors duration-700" />

                  <h2 className="text-2xl md:text-3xl font-semibold mb-8 md:mb-10 flex items-center gap-3 drop-shadow-md">
                    Contact Info
                    <div className="h-px flex-1 bg-linear-to-r from-white/20 to-transparent" />
                  </h2>

                  <div className="space-y-4 md:space-y-6">
                    {[
                      { icon: <Mail style={{ color: colors.blue400 }} className="w-5 h-5 md:w-6 md:h-6" />, label: "Email", value: "shahabhishek051@gmail.com", href: "mailto:shahabhishek051@gmail.com" },
                      { icon: <Phone style={{ color: colors.green400 }} className="w-5 h-5 md:w-6 md:h-6" />, label: "Phone", value: "+91 78610 53202", href: "tel:+917861053202" },
                      { icon: <MapPin style={{ color: colors.rose400 }} className="w-5 h-5 md:w-6 md:h-6" />, label: "Location", value: "Bardoli, Gujarat, India", href: "#" }
                    ].map((item) => (
                      <TiltWrapper key={item.label} isClickable={true} depth={15}>
                        <a
                          href={item.href}
                          className="flex items-center gap-4 md:gap-6 p-3 md:p-4 rounded-xl md:rounded-2xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5 hover:border-white/10 shadow-lg"
                        >
                          <div className="w-10 h-10 md:w-14 md:h-14 rounded-lg md:rounded-2xl bg-black/30 flex items-center justify-center border border-white/10 shadow-inner shrink-0">
                            {item.icon}
                          </div>
                          <div className="overflow-hidden">
                            <p className="text-slate-400 text-[10px] md:text-xs font-bold uppercase tracking-wider mb-0.5">{item.label}</p>
                            <p className="text-sm md:text-lg font-semibold text-slate-100 truncate">{item.value}</p>
                          </div>
                        </a>
                      </TiltWrapper>
                    ))}
                  </div>

                  {/* Social Connections */}
                  <div className="mt-8 md:mt-12 pt-8 md:pt-10 border-t border-white/5">
                    <h3 className="text-[10px] md:text-sm font-semibold tracking-[0.2em] text-slate-400 uppercase mb-6 text-center lg:text-left drop-shadow-md">Find me on</h3>
                    <div className="flex flex-wrap gap-3 md:gap-4 justify-center lg:justify-start" style={{ perspective: 600 }}>
                      {[
                        { icon: <Github size={18} />, label: "GitHub", url: "https://github.com/abhishek-2006" },
                        { icon: <Instagram size={18} />, label: "Instagram", url: "https://instagram.com/abhishekshah_112" },
                        { icon: <Linkedin size={18} />, label: "LinkedIn", url: "https://linkedin.com/in/abhishekshah-dev/" },
                        { icon: <Twitter size={18} />, label: "Twitter", url: "https://twitter.com/shahabhishek409" }

                      ].map((social) => (
                        <TiltWrapper key={social.label} isClickable={true} depth={20}>
                          <a
                            href={social.url}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 rounded-xl md:rounded-2xl bg-black/40 border border-white/10 text-[11px] md:text-sm font-bold text-slate-300 hover:text-white hover:bg-white/10 transition-colors shadow-xl"
                          >
                            {social.icon}
                            {social.label}
                          </a>
                        </TiltWrapper>
                      ))}
                    </div>
                  </div>
                </div>
              </TiltWrapper>
            </m.div>

            {/* Form Card */}
            <m.div variants={itemVariants} style={{ transformStyle: "preserve-3d" }}>
              <ContactForm formState={formState} handleSubmit={handleSubmit} colors={colors} />
            </m.div>

          </m.div>

          {/* Closing Footnote */}
          <m.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-16 md:mt-24 text-center text-slate-500 font-bold tracking-[0.3em] uppercase text-[8px] md:text-[10px]"
          >
            Built with precision
          </m.div>
        </div>
        <SignatureBar />
      </div>
    </LazyMotion>
  );
}