"use client";

import { PORTFOLIO_DATA } from "@/data";
import Image from "next/image";
import { useState } from "react";

export function ProfileAvatar() {
  const [hasError, setHasError] = useState(false);

  if (!hasError) {
    return (
      // Use the supplied portfolio image when it exists, and gracefully fall back if it does not.
      <Image
        src={PORTFOLIO_DATA.personalInfo.profileImage}
        alt={PORTFOLIO_DATA.personalInfo.name}
        fill
        sizes="(max-width: 768px) 80vw, 420px"
        priority
        className="object-cover"
        onError={() => setHasError(true)}
      />
    );
  }

  return (
    <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-[radial-gradient(circle_at_top,_rgba(103,232,249,0.55),_transparent_40%),linear-gradient(140deg,rgba(15,23,42,0.92),rgba(37,99,235,0.82),rgba(6,182,212,0.78))]">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(15,23,42,0.22)_48%,rgba(15,23,42,0.74))]" />
      <div className="absolute inset-x-0 bottom-0 p-6 text-left text-white">
        <p className="text-xs uppercase tracking-[0.35em] text-cyan-100/80">Portfolio</p>
        <h3 className="mt-2 text-3xl font-semibold">{PORTFOLIO_DATA.personalInfo.name}</h3>
        <p className="mt-2 max-w-[16rem] text-sm leading-6 text-slate-100/85">
          Data-focused builder blending analytics, AI, and product thinking.
        </p>
      </div>
      <div className="absolute left-6 top-6 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.3em] text-white/80 backdrop-blur-xl">
        AI + Analytics
      </div>
      <div className="absolute right-5 top-5 h-16 w-16 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl" />
      <div className="absolute right-12 top-20 h-5 w-5 rounded-full bg-cyan-300/80 blur-[2px]" />
      <div className="absolute left-10 top-24 h-28 w-28 rounded-full bg-blue-400/20 blur-2xl" />
    </div>
  );
}
