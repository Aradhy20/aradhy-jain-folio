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
  skills: "Aradhy Jain is a versatile Data Analyst and AI/NLP specialist. His core skillset includes Python, SQL, R, Pandas, NumPy, Scikit-learn, Transformers, and Prompt Engineering. He is also proficient in dashboard design and dashboard automation.",
  databases: "Aradhy works extensively with modern relational and NoSQL databases, including PostgreSQL, MySQL, and MongoDB. He is skilled in database design, schema optimization, and ETL data pipelines.",
  freelance: "Yes! Aradhy is available for freelance projects and consultations. He specializes in designing custom Power BI and Google Sheets dashboards, database schema design, and deploying custom AI/ML text classification workflows. You can hire him through the Freelance page or contact him directly!",
  contact: "You can reach Aradhy Jain directly via email at jainaradhy123@gmail.com, or call him at +91 7351522153. He is also active on LinkedIn at linkedin.com/in/aradhyjain and GitHub at github.com/Aradhy20.",
  experience: "Aradhy is currently a Data Analyst Intern and B.Tech Computer Science student. He has completed Deloitte Australia's Data Analytics simulation, built automated reports with TCS, and engineered advanced data and ML solutions.",
  projects: "Aradhy has built several premium data analytics and AI projects, including custom Power BI Business Intelligence suites, Automated NLP pipelines, exploratory data analyzers with Pandas & Seaborn, and fully-featured interactive database models.",
};

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "assistant",
      content: "Hi! I'm AJ Assistant 👋 Ask me anything about Aradhy's skills, databases, freelance services, or projects.",
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
    if (text.includes("skill") || text.includes("language") || text.includes("programming")) {
      return BOT_RESPONSES.skills;
    }
    if (text.includes("database") || text.includes("mysql") || text.includes("mongo") || text.includes("postgres")) {
      return BOT_RESPONSES.databases;
    }
    if (text.includes("freelance") || text.includes("hire") || text.includes("consult")) {
      return BOT_RESPONSES.freelance;
    }
    if (text.includes("contact") || text.includes("email") || text.includes("phone") || text.includes("reach")) {
      return BOT_RESPONSES.contact;
    }
    if (text.includes("experience") || text.includes("work") || text.includes("intern")) {
      return BOT_RESPONSES.experience;
    }
    if (text.includes("project") || text.includes("portfolio") || text.includes("build")) {
      return BOT_RESPONSES.projects;
    }
    return "That's a great question! Aradhy is a B.Tech Computer Science student & Data Analyst Intern skilled in Python, SQL, PostgreSQL, MongoDB, Power BI, and Machine Learning. He loves building premium data products and is open to internships and freelance roles. Feel free to ask about his skills, experience, or databases!";
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
