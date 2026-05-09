"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CursorGlow() {
  const [isVisible, setIsVisible] = useState(false);
  
  // Custom Motion values for smooth, spring-based cursor tracking
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 220, mass: 0.6 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Glowing Ring */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-50 hidden h-8 w-8 rounded-full border border-cyan-500/30 bg-cyan-500/5 mix-blend-screen shadow-[0_0_15px_rgba(6,182,212,0.15)] sm:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      />
      {/* Inner Glowing Core */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-50 hidden h-2 w-2 -translate-x-[-12px] -translate-y-[-12px] rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)] sm:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      />
    </>
  );
}
