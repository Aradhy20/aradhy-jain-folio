"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Database, Sparkles, RefreshCw, Terminal, CheckCircle2 } from "lucide-react";

type ConsoleTab = "sql" | "ml" | "etl";

export function DashboardSection() {
  const [activeTab, setActiveTab] = useState<ConsoleTab>("sql");
  const [isRunning, setIsRunning] = useState(false);
  const [consoleLines, setConsoleLines] = useState<string[]>([]);
  const [recordsCount, setRecordsCount] = useState(24850);
  const [trainingLoss, setTrainingLoss] = useState(0.082);

  // Live ticking records count to simulate a live data stream
  useEffect(() => {
    const interval = setInterval(() => {
      setRecordsCount((prev) => prev + Math.floor(Math.random() * 3) + 1);
      setTrainingLoss((prev) => Math.max(0.02, +(prev - (Math.random() * 0.001)).toFixed(4)));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const runSimulation = () => {
    if (isRunning) return;
    setIsRunning(true);
    setConsoleLines([]);

    let lines: string[] = [];
    if (activeTab === "sql") {
      lines = [
        "Connecting to PostgreSQL database: aradhy_portfolio...",
        "STATUS: Connected successfully.",
        "RUNNING QUERY: SELECT skill, avg(impact) FROM skills_metrics GROUP BY skill ORDER BY avg(impact) DESC LIMIT 4;",
        "SCANNING: 24,850 data rows analyzed...",
        "FETCH COMPLETED. Generating bento metric outputs:",
        "📊 Python Data Processing ----> Avg Impact: 96%",
        "📊 PostgreSQL Schema Analytics ----> Avg Impact: 92%",
        "📊 LangChain NLP Pipeline   ----> Avg Impact: 88%",
        "📊 Power BI Dashboarding    ----> Avg Impact: 91%",
      ];
    } else if (activeTab === "ml") {
      lines = [
        "Initializing TensorFlow NLP Pipeline...",
        "LOADING: HuggingFace Transformers Model (aj-bert-classifier)...",
        "PREPARING: Parsing validation strings on GPU-0...",
        "TRAINING RUN: Epoch 1/3 - Loss: 0.145 - Accuracy: 0.912",
        "TRAINING RUN: Epoch 2/3 - Loss: 0.096 - Accuracy: 0.964",
        "TRAINING RUN: Epoch 3/3 - Loss: 0.082 - Accuracy: 0.985",
        "STATUS: Model convergence achieved. Saving model weights to huggingface://Aradhy20/...",
      ];
    } else {
      lines = [
        "Triggering Apache Airflow DAG: etl_google_sheets_dashboard...",
        "EXTRACTING: Sourcing row records via custom Google API...",
        "TRANSFORMING: Cleansing null structures and casting schemas via Pandas...",
        "STATUS: Resolved 412 missing duplicate values in 12ms.",
        "LOADING: Uploading clean datasets to PostgreSQL production server...",
        "REFRESHING: Pushing live API reload command to Power BI Gateway...",
        "SUCCESS: Business Intelligence pipelines perfectly synchronized.",
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
    }, 450);
  };

  useEffect(() => {
    runSimulation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab]);

  return (
    <section id="dashboard" className="py-24 sm:py-28 relative overflow-hidden bg-[radial-gradient(ellipse_at_bottom,rgba(6,182,212,0.06),transparent)]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center mb-16"
        >
          <p className="section-kicker">Interactive Console</p>
          <h2 className="section-title">Live Data & AI Analytics Dashboard</h2>
          <p className="section-copy">
            A real-time proof-of-concept visualizer. Switch tabs below to execute live database queries, train custom NLP classifiers, or run pipeline ETL workflows.
          </p>
        </motion.div>

        {/* Live Metrics Grid */}
        <div className="grid gap-6 sm:grid-cols-3 mb-10">
          <motion.article
            whileHover={{ y: -4 }}
            className="panel border-border/70 bg-white/45 p-6 shadow-xl backdrop-blur-xl dark:bg-white/5 rounded-2xl relative overflow-hidden group"
          >
            <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-cyan-500/10 blur-xl group-hover:bg-cyan-500/20 transition-all duration-300" />
            <span className="text-xs font-semibold uppercase tracking-wider text-foreground/50">Records Processed</span>
            <div className="mt-2 text-3xl font-bold font-mono text-cyan-600 dark:text-cyan-400">
              {recordsCount.toLocaleString()}
            </div>
            <p className="text-xs text-foreground/40 mt-1">Live streaming raw data</p>
          </motion.article>

          <motion.article
            whileHover={{ y: -4 }}
            className="panel border-border/70 bg-white/45 p-6 shadow-xl backdrop-blur-xl dark:bg-white/5 rounded-2xl relative overflow-hidden group"
          >
            <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-purple-500/10 blur-xl group-hover:bg-purple-500/20 transition-all duration-300" />
            <span className="text-xs font-semibold uppercase tracking-wider text-foreground/50">Model Converge Loss</span>
            <div className="mt-2 text-3xl font-bold font-mono text-purple-600 dark:text-purple-400">
              {trainingLoss}
            </div>
            <p className="text-xs text-foreground/40 mt-1">Simulating validation training</p>
          </motion.article>

          <motion.article
            whileHover={{ y: -4 }}
            className="panel border-border/70 bg-white/45 p-6 shadow-xl backdrop-blur-xl dark:bg-white/5 rounded-2xl relative overflow-hidden group"
          >
            <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-blue-500/10 blur-xl group-hover:bg-blue-500/20 transition-all duration-300" />
            <span className="text-xs font-semibold uppercase tracking-wider text-foreground/50">Refresh Latency</span>
            <div className="mt-2 text-3xl font-bold font-mono text-blue-600 dark:text-blue-400">
              12ms
            </div>
            <p className="text-xs text-foreground/40 mt-1">Airflow orchestrator response</p>
          </motion.article>
        </div>

        {/* Live Interactive Control Console */}
        <div className="grid gap-8 lg:grid-cols-[0.35fr_0.65fr] items-stretch">
          
          {/* Side Controls */}
          <div className="flex flex-col gap-3 justify-center">
            <button
              onClick={() => !isRunning && setActiveTab("sql")}
              disabled={isRunning}
              className={`flex items-center gap-3 px-5 py-4 rounded-2xl text-sm font-semibold transition-all duration-200 text-left border ${
                activeTab === "sql"
                  ? "bg-[linear-gradient(135deg,#06b6d4,#3b82f6)] text-white shadow-lg border-transparent shadow-cyan-500/10"
                  : "bg-white/40 dark:bg-white/5 border-white/10 text-foreground/75 hover:bg-white/60 hover:dark:bg-white/10"
              }`}
            >
              <Database size={18} />
              <div>
                <span className="block">PostgreSQL Query</span>
                <span className="text-[10px] opacity-75 font-normal">Extract skills avg impact</span>
              </div>
            </button>

            <button
              onClick={() => !isRunning && setActiveTab("ml")}
              disabled={isRunning}
              className={`flex items-center gap-3 px-5 py-4 rounded-2xl text-sm font-semibold transition-all duration-200 text-left border ${
                activeTab === "ml"
                  ? "bg-[linear-gradient(135deg,#a855f7,#3b82f6)] text-white shadow-lg border-transparent shadow-purple-500/10"
                  : "bg-white/40 dark:bg-white/5 border-white/10 text-foreground/75 hover:bg-white/60 hover:dark:bg-white/10"
              }`}
            >
              <Sparkles size={18} />
              <div>
                <span className="block">ML Classify Training</span>
                <span className="text-[10px] opacity-75 font-normal">Run HuggingFace bert epoch</span>
              </div>
            </button>

            <button
              onClick={() => !isRunning && setActiveTab("etl")}
              disabled={isRunning}
              className={`flex items-center gap-3 px-5 py-4 rounded-2xl text-sm font-semibold transition-all duration-200 text-left border ${
                activeTab === "etl"
                  ? "bg-[linear-gradient(135deg,#3b82f6,#06b6d4)] text-white shadow-lg border-transparent shadow-blue-500/10"
                  : "bg-white/40 dark:bg-white/5 border-white/10 text-foreground/75 hover:bg-white/60 hover:dark:bg-white/10"
              }`}
            >
              <RefreshCw size={18} />
              <div>
                <span className="block">ETL Airflow DAG</span>
                <span className="text-[10px] opacity-75 font-normal">Push clean Sheets metrics</span>
              </div>
            </button>
          </div>

          {/* Terminal Display */}
          <div className="flex flex-col rounded-3xl bg-slate-950 border border-white/10 overflow-hidden shadow-2xl min-h-[18rem]">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-5 py-3.5 bg-slate-900 border-b border-white/5">
              <div className="flex items-center gap-2">
                <Terminal size={14} className="text-cyan-400" />
                <span className="text-[11px] font-mono text-foreground/60">aj_data_console.sh</span>
              </div>
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              </div>
            </div>

            {/* Terminal Output */}
            <div className="flex-1 p-5 font-mono text-xs sm:text-sm text-green-400/90 space-y-2.5 overflow-y-auto">
              <AnimatePresence>
                {consoleLines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex items-start gap-2 leading-relaxed"
                  >
                    <span className="text-foreground/30 shrink-0 select-none">&gt;</span>
                    <span>{line}</span>
                  </motion.div>
                ))}
              </AnimatePresence>

              {isRunning && (
                <div className="flex items-center gap-1.5 text-foreground/45 mt-2 animate-pulse">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span className="text-[10px] font-mono">Running process queries...</span>
                </div>
              )}

              {!isRunning && consoleLines.length > 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center gap-1.5 text-green-500/80 text-xs mt-4 bg-green-500/5 border border-green-500/10 rounded-lg p-2.5 w-max"
                >
                  <CheckCircle2 size={14} />
                  <span>Execution finalized successfully.</span>
                </motion.div>
              )}
            </div>

            {/* Execute Button */}
            <div className="p-3 bg-slate-900 border-t border-white/5 flex justify-end">
              <button
                onClick={runSimulation}
                disabled={isRunning}
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 px-4 py-2.5 text-xs font-semibold text-cyan-400 transition-all hover:bg-cyan-500/20 disabled:opacity-40"
              >
                <Play size={12} fill="currentColor" />
                Execute Pipeline
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
