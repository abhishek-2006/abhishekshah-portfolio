"use client";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { AnimatePresence, m } from "framer-motion";
import TiltWrapper from "./TiltWrapper";

export default function ContactForm({ formState, handleSubmit, colors }) {
    return (
    <TiltWrapper className="h-full" depth={20}>
        <form
          onSubmit={handleSubmit}
          className="h-full p-6 md:p-10 rounded-4xl md:rounded-[2.5rem] bg-black/40 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(37,99,235,0.15)] relative"
          style={{ transformStyle: "preserve-3d" }}
        >
            <h2 className="cursor-pointer text-2xl md:text-3xl font-semibold mb-6 md:mb-8 drop-shadow-md">Send a Message</h2>

            {/* Anti-spam honeypot */}
            <input
              type="text"
              name="_gotcha"
              tabIndex={-1}
              autoComplete="off"
              className="hidden absolute -left-[9999px]"
              aria-hidden="true"
            />

            <div className="space-y-4 md:space-y-6" style={{ perspective: 800 }}>
                <TiltWrapper isClickable={true} depth={10}>
                    <label htmlFor="name" className="sr-only">
                        Full Name
                    </label>
                    <input
                        required
                        aria-label="Full Name"
                        name="name"
                        title="Enter Your Name"
                        type="text"
                        placeholder="Your Full Name"
                        className="w-full p-4 md:p-5 text-sm md:text-base rounded-xl md:rounded-2xl bg-black/50 border border-white/10 focus:border-blue-500/50 outline-none transition-colors placeholder:text-slate-500 font-medium focus:ring-4 focus:ring-blue-500/10 text-white shadow-inner"
                    />
                </TiltWrapper>

                <TiltWrapper isClickable={true} depth={10}>
                  <label htmlFor="email" className="sr-only">
                    Email Address
                  </label>
                  <input
                    required
                    aria-label="Email Address"
                    title="Enter Your Email Address"
                    name="email"
                    type="email"
                    placeholder="Your Email Address"
                    className="w-full p-4 md:p-5 text-sm md:text-base rounded-xl md:rounded-2xl bg-black/50 border border-white/10 focus:border-blue-500/50 outline-none transition-colors placeholder:text-slate-500 font-medium focus:ring-4 focus:ring-blue-500/10 text-white shadow-inner"
                  />
                </TiltWrapper>

                <TiltWrapper isClickable={true} depth={10}>
                  <label htmlFor="subject" className="sr-only">
                    Subject
                  </label>
                  <input
                    required
                    aria-label="Message Subject"
                    title="Enter Message Subject"
                    name="subject"
                    type="text"
                    placeholder="Subject"
                    className="w-full p-4 md:p-5 text-sm md:text-base rounded-xl md:rounded-2xl bg-black/50 border border-white/10 focus:border-blue-500/50 outline-none transition-colors placeholder:text-slate-500 font-medium focus:ring-4 focus:ring-blue-500/10 text-white shadow-inner"
                  />
                </TiltWrapper>

                <TiltWrapper isClickable={true} depth={10}>
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    required
                    title="Enter Your Message"
                    aria-label="Your Message"
                    name="message"
                    placeholder="Tell me about your project..."
                    rows="4"
                    className="w-full p-4 md:p-5 text-sm md:text-base rounded-xl md:rounded-2xl bg-black/50 border border-white/10 focus:border-blue-500/50 outline-none transition-colors placeholder:text-slate-500 font-medium focus:ring-4 focus:ring-blue-500/10 resize-none text-white shadow-inner"
                    ></textarea>
                </TiltWrapper>

                <TiltWrapper isClickable={true} depth={25}>
                  <m.button
                    disabled={formState !== "idle"}
                    type="submit"
                    initial={false}
                    animate={{
                      backgroundColor: formState === "success" ? colors.green500 : formState === "error" ? colors.red500 : colors.blue600,
                    }}
                    className="cursor-pointer w-full py-4 md:py-5 rounded-xl md:rounded-2xl font-bold text-base md:text-lg flex items-center justify-center gap-2 md:gap-3 transition-shadow shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] relative overflow-hidden text-white"
                  >
                    <AnimatePresence mode="wait">
                      {formState === "idle" && (
                        <m.div key="idle" className="flex items-center gap-2" initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -10, opacity: 0 }}>
                          Send Message <Send size={18} />
                        </m.div>
                      )}
                        {formState === "sending" && (
                        <m.div key="sending" className="flex items-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                          <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Transmitting…
                        </m.div>
                      )}
                        {formState === "success" && (
                        <m.div key="success" className="flex items-center gap-2" initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
                          Success! <CheckCircle2 size={18} />
                        </m.div>
                      )}
                      {formState === "error" && (
                        <m.div key="error" className="flex items-center gap-2" initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
                            Failed to Send <AlertCircle size={18} />
                        </m.div>
                      )}
                    </AnimatePresence>
                  </m.button>
                </TiltWrapper>
            </div>

            {/* Status Message Display */}
            <AnimatePresence>
                {formState === "success" && (
                    <m.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="mt-6 p-4 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center gap-3 text-green-400 text-sm font-medium"
                    >
                        <CheckCircle2 size={20} />
                        <span>Your message has been delivered! Thank you for reaching out. I’ll get back to you soon.</span>
                    </m.div>
                )}
                {formState === "error" && (
                    <m.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="mt-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center gap-3 text-red-400 text-sm font-medium"
                        >
                    <AlertCircle size={20} />
                    <span>Failed to send message. Please check your connection or reach me via social links.</span>
                    </m.div>
                )}
            </AnimatePresence>

            <p className="mt-6 md:mt-8 text-center text-slate-400 text-[10px] md:text-xs font-medium italic drop-shadow-sm">
                I typically respond within 24-48 hours.
            </p>
        </form>
    </TiltWrapper>
    );
}