"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsVisible(false), 1600);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.45, ease: "easeInOut" } }}
          className="pointer-events-none fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          <div className="relative flex flex-col items-center gap-5">
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative flex h-20 w-20 items-center justify-center rounded-[28px] border border-white/10 bg-white/10 text-2xl font-semibold text-foreground shadow-2xl backdrop-blur-xl dark:bg-white/5"
            >
              AJ
              <div className="absolute inset-0 rounded-[28px] bg-[linear-gradient(135deg,rgba(103,232,249,0.22),rgba(59,130,246,0.12),transparent)]" />
            </motion.div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 220 }}
              transition={{ duration: 1.1, ease: "easeInOut", delay: 0.2 }}
              className="h-1.5 overflow-hidden rounded-full bg-foreground/10"
            >
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1.1, ease: "easeInOut", delay: 0.2 }}
                className="h-full rounded-full bg-[linear-gradient(90deg,#22d3ee,#2563eb,#8b5cf6)]"
              />
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

