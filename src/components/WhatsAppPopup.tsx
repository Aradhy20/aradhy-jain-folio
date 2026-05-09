"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send } from "lucide-react";

export function WhatsAppPopup() {
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState("Hi Aradhy, I saw your portfolio and would love to collaborate on a data/analytics project!");

  const whatsappUrl = `https://wa.me/917351522153?text=${encodeURIComponent(msg)}`;

  return (
    <>
      {/* Floating Left Button */}
      <motion.button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-[0_8px_32px_rgba(37,211,102,0.3)] border border-white/10"
        whileHover={{ scale: 1.1, rotate: -5 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.2, type: "spring" }}
        aria-label={open ? "Close WhatsApp chat" : "Open WhatsApp chat"}
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X className="h-6 w-6" />
            </motion.div>
          ) : (
            <motion.div key="wa" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} className="relative">
              {/* WhatsApp custom vector icon */}
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.665.989 3.3 1.472 5.36 1.473 5.4 0 9.795-4.393 9.798-9.795.002-2.618-1.01-5.08-2.856-6.93C17.094 2.05 14.636 1.029 12.01 1.029c-5.4 0-9.797 4.393-9.8 9.797-.001 2.032.527 3.743 1.528 5.392l-.999 3.649 3.738-.981zM18.156 14.854c-.337-.17-1.996-.985-2.305-1.098-.31-.113-.536-.17-.76.17-.226.338-.875 1.098-1.072 1.324-.197.226-.395.254-.732.085-.336-.17-1.423-.524-2.711-1.672-1.002-.893-1.678-2.0-1.874-2.339-.197-.338-.021-.52.15-.688.152-.152.338-.395.507-.593.169-.197.226-.338.338-.564.112-.226.056-.423-.028-.593-.084-.17-.76-1.832-1.042-2.509-.275-.662-.55-.572-.76-.583-.197-.01-.423-.012-.648-.012-.226 0-.593.085-.903.423-.31.338-1.185 1.157-1.185 2.822 0 1.665 1.213 3.272 1.382 3.498.169.226 2.386 3.644 5.782 5.109.807.349 1.438.558 1.93.714.81.258 1.548.222 2.13.135.65-.098 1.996-.816 2.278-1.606.282-.79.282-1.467.197-1.606-.084-.14-.31-.225-.648-.395z" />
              </svg>
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Popover Terminal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.92 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 260, damping: 25 }}
            className="fixed bottom-24 left-6 z-50 w-[calc(100vw-3rem)] sm:w-80 bg-white/75 dark:bg-slate-950/80 border border-white/10 shadow-[0_24px_64px_rgba(0,0,0,0.2)] rounded-[2rem] flex flex-col overflow-hidden backdrop-blur-2xl"
          >
            {/* Popover Header */}
            <div className="p-5 border-b border-white/10 flex items-center gap-3 bg-[linear-gradient(135deg,rgba(37,211,102,0.1),rgba(37,211,102,0.05))]">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-green-500 flex items-center justify-center text-white shadow-lg">
                  <MessageSquare size={18} />
                </div>
                <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-green-500 border-2 border-slate-950" />
              </div>
              <div>
                <h3 className="font-bold text-foreground leading-tight text-sm">Aradhy Jain</h3>
                <p className="text-xs text-green-600 dark:text-green-400 font-semibold animate-pulse">Online & Active</p>
              </div>
            </div>

            {/* Prompt Area */}
            <div className="p-5 space-y-4">
              <div className="rounded-2xl bg-white/50 dark:bg-white/5 border border-white/5 p-4 text-xs sm:text-sm text-foreground/80 leading-relaxed">
                👋 Hi there! Drop me a WhatsApp message if you want to collaborate on databases, Power BI, or AI automation.
              </div>

              <div>
                <label htmlFor="wa-message" className="block text-[10px] font-bold uppercase tracking-wider text-foreground/50 mb-1.5">Pre-filled Message</label>
                <textarea
                  id="wa-message"
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                  rows={3}
                  className="w-full text-xs rounded-xl border border-white/10 bg-white/30 dark:bg-white/5 p-3 text-foreground outline-none focus:border-green-500/50 focus:ring-1 focus:ring-green-500/10 placeholder-foreground/30 resize-none"
                />
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3 text-xs font-bold text-white shadow-lg shadow-green-500/20 transition-all duration-200 hover:scale-[1.02]"
              >
                <Send size={12} />
                Initiate Chat
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
