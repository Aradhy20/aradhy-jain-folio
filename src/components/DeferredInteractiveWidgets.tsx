"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const Chatbot = dynamic(
  () => import("@/components/Chatbot").then((mod) => mod.Chatbot),
  { ssr: false }
);

const WhatsAppPopup = dynamic(
  () => import("@/components/WhatsAppPopup").then((mod) => mod.WhatsAppPopup),
  { ssr: false }
);

export function DeferredInteractiveWidgets() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const trigger = () => {
      setShouldLoad(true);
    };

    if ("requestIdleCallback" in window) {
      (window as unknown as { requestIdleCallback: (cb: () => void, opts?: { timeout: number }) => number }).requestIdleCallback(
        trigger,
        { timeout: 4000 }
      );
    } else {
      timer = setTimeout(trigger, 3500);
    }

    const events = ["scroll", "keydown", "pointerdown", "touchstart"];
    const handleInteraction = () => {
      setShouldLoad(true);
      events.forEach((e) => window.removeEventListener(e, handleInteraction));
    };

    events.forEach((e) => window.addEventListener(e, handleInteraction, { once: true, passive: true }));

    return () => {
      clearTimeout(timer);
      events.forEach((e) => window.removeEventListener(e, handleInteraction));
    };
  }, []);

  if (!shouldLoad) return null;

  return (
    <>
      <Chatbot />
      <WhatsAppPopup />
    </>
  );
}
