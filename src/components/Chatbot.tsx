"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Sparkles, User, Bot } from "lucide-react";

type Msg = { role: "user" | "assistant"; content: string };

const SUGGESTED = [
  "What are Aradhy's skills?",
  "Tell me about his databases",
  "Is he available for freelance?",
  "How can I contact him?",
];

const BOT_RESPONSES: Record<string, string> = {
  skills: "Aradhy Jain is a multidisciplinary Full-Stack Web Developer, E-commerce Specialist & Data Analyst. His core competencies span Next.js, React, TypeScript, Tailwind CSS, Python, SQL, PostgreSQL, MySQL, Technical SEO, marketplace catalog management (Amazon, Flipkart, Meesho), and AI/Robotics data annotation.",
  services: "Aradhy offers 5 configurable service packages: 1) Starter Business Websites (₹18k–₹28k), 2) Custom Business Websites & Portals (₹38k–₹75k), 3) E-commerce & Marketplace Storefronts (₹32k–₹65k), 4) Technical SEO & Optimization (₹16k–₹32k), and 5) Monthly Maintenance & Analytics Retainers (₹8k–₹18k/mo). Quotes are indicative and customized to validated scope.",
  databases: "Aradhy designs and optimizes relational and NoSQL databases including PostgreSQL, MySQL, and MongoDB. He is skilled in schema modeling, query optimization, and automated ETL pipelines.",
  freelance: "Yes! Aradhy is available for freelance client engagements including new website builds, institutional portals, marketplace catalog setups, and technical SEO. You can build an interactive proposal on the site or message him directly on WhatsApp (+91-7351522153) or Email (jainaradhy01@gmail.com)!",
  contact: "You can reach Aradhy Jain directly via email at jainaradhy01@gmail.com, or WhatsApp/phone at +91-7351522153. He is also active on LinkedIn at linkedin.com/in/aradhyjain and GitHub at github.com/Aradhy20.",
  experience: "Aradhy's verified work history includes: 1) Associate – Robotics Data Annotation at Tech Mahindra (June 2026–Present); 2) Data Analyst Intern at Teerthanker Mahaveer University (Jan 2026–March 2026); 3) Web Developer & Digital Growth Partner, Freelance Practice (2025–Present); 4) IT Developer Intern at MathesisLabs Technologies Pvt Ltd (June 2025–December 2025); and 5) Data Analyst Intern, Virtual Internship Programs (Trainity / Cognifyz / Oasis Infobyte, Nov 2024–March 2025).",
  projects: "Key verified work includes: 1) Paras Metal — commercial handicrafts catalog and marketplace listing operations (Amazon, Flipkart, Meesho); 2) DSR College (dsr.college) — institutional portal for B.Ed, D.El.Ed, and 4-Year ITEP with ~457ms TTFB; and 3) Sanmati Journal (sanmatijournal.in) — academic publishing portal with verified ISSN 3108-1819 and CrossRef DOIs.",
};

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "assistant",
      content: "Hi! I'm AJ Assistant 👋 Ask me anything about Aradhy's websites, e-commerce work, freelance services, or technical projects.",
    },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [open]);

  const getSmartReply = (query: string): string => {
    const text = query.toLowerCase();
    if (text.includes("service") || text.includes("offer") || text.includes("hire") || text.includes("pricing") || text.includes("quote")) {
      return BOT_RESPONSES.services;
    }
    if (text.includes("skill") || text.includes("language") || text.includes("stack") || text.includes("tech")) {
      return BOT_RESPONSES.skills;
    }
    if (text.includes("database") || text.includes("mysql") || text.includes("mongo") || text.includes("postgres") || text.includes("sql")) {
      return BOT_RESPONSES.databases;
    }
    if (text.includes("freelance") || text.includes("contract") || text.includes("consult")) {
      return BOT_RESPONSES.freelance;
    }
    if (text.includes("contact") || text.includes("email") || text.includes("phone") || text.includes("whatsapp") || text.includes("reach")) {
      return BOT_RESPONSES.contact;
    }
    if (text.includes("experience") || text.includes("work") || text.includes("intern") || text.includes("background")) {
      return BOT_RESPONSES.experience;
    }
    if (text.includes("project") || text.includes("portfolio") || text.includes("paras") || text.includes("dsr") || text.includes("sanmati") || text.includes("build")) {
      return BOT_RESPONSES.projects;
    }
    return "Thanks for asking! Aradhy Jain is a Full-Stack Developer & Freelance Digital Solutions Provider. He specializes in building fast, responsive websites, e-commerce stores, SEO strategies, and automated data dashboards. Feel free to ask about his projects, services, or contact details!";
  };

  const send = async (text?: string) => {
    const content = (text ?? input).trim();
    if (!content || loading) return;
    setInput("");

    const next: Msg[] = [...messages, { role: "user", content }];
    setMessages(next);
    setLoading(true);

    // Simulate AI thinking and typing latency
    setTimeout(() => {
      const reply = getSmartReply(content);
      setMessages((m) => [...m, { role: "assistant", content: reply }]);
      setLoading(false);
    }, 850);
  };

  return (
    <>
      {/* Floating button */}
      <motion.button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[linear-gradient(135deg,#06b6d4,#3b82f6)] flex items-center justify-center text-white shadow-[0_8px_32px_rgba(6,182,212,0.3)] border border-white/10"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        aria-label={open ? "Close chat" : "Open chat"}
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X className="h-6 w-6" />
            </motion.div>
          ) : (
            <motion.div key="msg" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} className="relative">
              <MessageCircle className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.92 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 260, damping: 25 }}
            className="fixed bottom-24 right-6 z-50 w-[calc(100vw-3rem)] sm:w-96 h-[32rem] bg-white/70 dark:bg-slate-950/80 border border-white/10 shadow-[0_24px_64px_rgba(0,0,0,0.25)] rounded-[2rem] flex flex-col overflow-hidden backdrop-blur-2xl"
          >
            {/* Header */}
            <div className="p-5 border-b border-white/10 flex items-center gap-3 bg-[linear-gradient(135deg,rgba(6,182,212,0.1),rgba(59,130,246,0.1))]">
              <div className="w-10 h-10 rounded-2xl bg-[linear-gradient(135deg,#06b6d4,#3b82f6)] flex items-center justify-center shadow-lg shadow-cyan-500/10">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-foreground leading-tight text-sm sm:text-base">AJ Recruiter Assistant</h3>
                <p className="text-xs text-foreground/50">Conversational profile intelligence</p>
              </div>
            </div>

            {/* Messages Area */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-4">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"} items-start gap-2`}>
                  {m.role === "assistant" && (
                    <div className="w-6 h-6 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0 mt-1">
                      <Bot size={12} className="text-cyan-500" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] rounded-[1.25rem] px-4 py-3 text-sm leading-relaxed ${
                      m.role === "user"
                        ? "bg-[linear-gradient(135deg,#06b6d4,#3b82f6)] text-white rounded-tr-sm shadow-md shadow-cyan-500/5"
                        : "bg-white/50 dark:bg-white/5 text-foreground/90 border border-white/5 rounded-tl-sm"
                    }`}
                  >
                    {m.content}
                  </div>
                  {m.role === "user" && (
                    <div className="w-6 h-6 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 mt-1">
                      <User size={12} className="text-blue-500" />
                    </div>
                  )}
                </div>
              ))}
              
              {loading && (
                <div className="flex justify-start items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
                    <Bot size={12} className="text-cyan-500" />
                  </div>
                  <div className="bg-white/50 dark:bg-white/5 border border-white/5 rounded-[1.25rem] rounded-tl-sm px-4 py-3.5 flex gap-1 items-center">
                    <span className="w-2 h-2 rounded-full bg-cyan-500 animate-bounce" />
                    <span className="w-2 h-2 rounded-full bg-cyan-500 animate-bounce [animation-delay:0.15s]" />
                    <span className="w-2 h-2 rounded-full bg-cyan-500 animate-bounce [animation-delay:0.3s]" />
                  </div>
                </div>
              )}

              {messages.length === 1 && !loading && (
                <div className="pt-2 space-y-2 pl-8">
                  <p className="text-xs text-foreground/40 font-medium uppercase tracking-wider mb-2">Suggested queries</p>
                  {SUGGESTED.map((s) => (
                    <button
                      key={s}
                      onClick={() => send(s)}
                      className="w-full text-left text-xs px-3.5 py-2.5 rounded-xl bg-white/40 dark:bg-white/5 border border-white/5 hover:border-cyan-500/30 hover:bg-cyan-500/5 hover:text-cyan-500 transition-all duration-200"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send();
              }}
              className="p-4 border-t border-white/10 flex gap-2.5 bg-white/20 dark:bg-slate-950/40"
            >
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a profile query..."
                disabled={loading}
                className="flex-1 px-4 py-3 rounded-xl bg-white/30 dark:bg-white/5 border border-white/10 text-sm focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/10 text-foreground placeholder-foreground/30"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="w-11 h-11 rounded-xl bg-[linear-gradient(135deg,#06b6d4,#3b82f6)] text-white flex items-center justify-center disabled:opacity-40 transition-all duration-200 hover:scale-[1.05]"
                aria-label="Send query"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
