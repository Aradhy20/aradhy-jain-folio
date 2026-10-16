"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play, RefreshCw, Terminal, Info } from "lucide-react";

type ConsoleTab = "sql" | "ml" | "etl";

export function DashboardSection() {
  const [activeTab, setActiveTab] = useState<ConsoleTab>("sql");
  const [isRunning, setIsRunning] = useState(false);
  const [consoleLines, setConsoleLines] = useState<string[]>([
    "Ready for demonstration run.",
    "Select a tab above and click 'Run Interactive Demo' to trace execution steps.",
  ]);

  const runSimulation = (tabToRun: ConsoleTab) => {
    if (isRunning) return;
    setIsRunning(true);
    setConsoleLines(["[INITIALIZING DEMO EXECUTION]..."]);

    let lines: string[] = [];
    if (tabToRun === "sql") {
      lines = [
        "Connecting to PostgreSQL database: aradhy_portfolio...",
        "STATUS: Connection established (SSL enabled).",
        "RUNNING QUERY: SELECT skill, avg(impact_score) FROM platform_metrics GROUP BY skill ORDER BY avg(impact_score) DESC LIMIT 4;",
        "SCANNING: 25,000+ benchmark record rows analyzed in memory...",
        "FETCH COMPLETED (24ms). Resulting breakdown:",
        "  ✦ Full-Stack Web Development  ----> Performance Index: 98%",
        "  ✦ E-commerce Architecture    ----> Catalog Optimization: 95%",
        "  ✦ Technical SEO & Vitals     ----> Core Web Vitals Pass: 100%",
        "  ✦ Python Data Automation     ----> Manual Effort Saved: ~40%",
        "STATUS: Query execution complete.",
      ];
    } else if (tabToRun === "ml") {
      lines = [
        "Initializing Scikit-learn & Transformers NLP Pipeline...",
        "LOADING: Sentiment classifier model weights...",
        "PREPARING: Tokenizing text strings into TF-IDF vector embeddings...",
        "EVALUATION: Precision: 0.94 | Recall: 0.92 | F1-Score: 0.93",
        "INFERENCE TEST: 'Extremely fast checkout and gorgeous brass finishing.'",
        "OUTPUT: Positive Sentiment (Confidence: 97.8%)",
        "STATUS: Pipeline test completed successfully.",
      ];
    } else {
      lines = [
        "Triggering Python ETL Workflow: sync_institutional_reporting...",
        "EXTRACTING: Sourcing student data records via REST endpoints...",
        "TRANSFORMING: Cleansing missing values and normalizing schema formats with Pandas...",
        "VALIDATION: Resolved 400+ null/duplicate entries across 5 department tables.",
        "LOADING: Refreshing Power BI gateway and synchronizing SQL metrics...",
        "SUCCESS: Institutional analytics pipeline synchronized.",
      ];
    }

    let i = 0;
    const interval = setInterval(() => {
      if (i < lines.length) {
        setConsoleLines((prev) => [...prev, lines[i]]);
        i++;
      } else {
        clearInterval(interval);
        setIsRunning(false);
      }
    }, 280);
  };

  const handleTabChange = (tab: ConsoleTab) => {
    setActiveTab(tab);
    runSimulation(tab);
  };

  return (
    <section id="dashboard" className="py-24 sm:py-32 relative overflow-hidden bg-foreground/[0.01]">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center mb-14"
        >
          <div className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold text-cyan-700 dark:text-cyan-300 mb-3">
            <Info size={14} />
            <span>Interactive Architecture Demonstration</span>
          </div>
          <h2 className="section-title">Interactive Code & Pipeline Console</h2>
          <p className="section-copy">
            A transparent demonstration visualizer illustrating the SQL queries, NLP classifiers, and ETL pipelines I build. Switch tabs or trigger a demo run below.
          </p>
        </motion.div>

        {/* Console Box */}
        <div className="max-w-4xl mx-auto rounded-[2rem] border border-border/80 bg-slate-950 p-6 sm:p-8 shadow-2xl text-slate-100 relative overflow-hidden">
          {/* Subtle Top Glow */}
          <div className="absolute top-0 right-1/4 h-32 w-64 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

          {/* Console Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-5">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-red-500/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <span className="h-3 w-3 rounded-full bg-green-500/80" />
              </div>
              <span className="ml-3 font-mono text-xs text-slate-400 flex items-center gap-1.5">
                <Terminal size={14} className="text-cyan-400" />
                aradhy-console :: interactive-demo
              </span>
            </div>

            {/* Tab Controls */}
            <div className="flex rounded-xl bg-slate-900 p-1 border border-slate-800">
              <button
                onClick={() => handleTabChange("sql")}
                className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all ${
                  activeTab === "sql"
                    ? "bg-cyan-500 text-white shadow-sm"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                SQL Query
              </button>
              <button
                onClick={() => handleTabChange("ml")}
                className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all ${
                  activeTab === "ml"
                    ? "bg-cyan-500 text-white shadow-sm"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                NLP Model
              </button>
              <button
                onClick={() => handleTabChange("etl")}
                className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all ${
                  activeTab === "etl"
                    ? "bg-cyan-500 text-white shadow-sm"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                ETL Pipeline
              </button>
            </div>
          </div>

          {/* Console Output Screen */}
          <div className="mt-6 min-h-[200px] rounded-xl bg-slate-900/90 p-5 font-mono text-xs leading-relaxed text-slate-300 border border-slate-800/80 overflow-x-auto space-y-1.5">
            {consoleLines.map((line, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <span className="text-cyan-400 select-none">&gt;</span>
                <span className={line.includes("SUCCESS") || line.includes("✦") ? "text-cyan-300 font-semibold" : ""}>
                  {line}
                </span>
              </div>
            ))}
            {isRunning && (
              <div className="flex items-center gap-2 text-cyan-400 animate-pulse">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                <span>executing step...</span>
              </div>
            )}
          </div>

          {/* Footer Bar */}
          <div className="mt-5 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800/80 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-semibold text-emerald-400">
                Sample Sandbox
              </span>
              <span>Demonstration of pipeline logging & data transformation.</span>
            </div>

            <button
              onClick={() => runSimulation(activeTab)}
              disabled={isRunning}
              className="inline-flex items-center gap-2 rounded-xl bg-slate-800 px-4 py-2 text-xs font-semibold text-slate-200 hover:bg-slate-700 disabled:opacity-50 transition-colors"
            >
              {isRunning ? (
                <>
                  <RefreshCw size={13} className="animate-spin" />
                  <span>Running...</span>
                </>
              ) : (
                <>
                  <Play size={13} className="text-cyan-400 fill-current" />
                  <span>Re-run Demo</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
