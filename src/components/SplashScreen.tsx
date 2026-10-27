"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

// GIF is 32 frames / s per loop; play it once before revealing the page
const GIF_LOOP_MS = 900;
const DISPLAY_MS = GIF_LOOP_MS;
const FADE_MS = 500;
// Reveal the page even if the GIF never finishes loading
const MAX_WAIT_MS = 6000;

export function SplashScreen() {
  const [phase, setPhase] = useState<"loading" | "playing" | "fading" | "done">("loading");

  useEffect(() => {
    if (phase === "done") return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [phase]);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined;
    if (phase === "loading") timer = setTimeout(() => setPhase("fading"), MAX_WAIT_MS);
    if (phase === "playing") timer = setTimeout(() => setPhase("fading"), DISPLAY_MS);
    if (phase === "fading") timer = setTimeout(() => setPhase("done"), FADE_MS);
    return () => clearTimeout(timer);
  }, [phase]);

  if (phase === "done") return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#FD1E27] cursor-pointer transition-opacity ease-out ${
        phase === "fading" ? "opacity-0" : "opacity-100"
      }`}
      style={{ transitionDuration: `${FADE_MS}ms` }}
      onClick={() => setPhase("fading")}
      role="presentation"
    >
      <Image
        src="/data_engineer_glitch_animation.gif"
        alt="Data Engineer"
        width={800}
        height={600}
        priority
        unoptimized
        onLoad={() => setPhase((p) => (p === "loading" ? "playing" : p))}
        className="w-full max-w-[800px] h-auto"
      />
    </div>
  );
}
