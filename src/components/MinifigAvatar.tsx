"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Briefcase, Mountain } from "lucide-react";

interface MinifigAvatarProps {
  className?: string;
}

export function MinifigAvatar({ className = "" }: MinifigAvatarProps) {
  const [activeFigure, setActiveFigure] = useState<"work" | "hiking">("work");

  const figures = {
    work: {
      id: "work",
      src: "/work-lego.png",
      alt: "Lego Minifigure - Data Engineer tại bàn làm việc",
      title: "LẬP TRÌNH & HỆ THỐNG",
      tag: "WORK MODE #01",
      badgeColor: "bg-[#0055BF] text-white",
    },
    hiking: {
      id: "hiking",
      src: "/hiking-lego.png",
      alt: "Lego Minifigure - Dã ngoại leo núi",
      title: "DÃ NGOẠI & LEO NÚI",
      tag: "HIKING MODE #02",
      badgeColor: "bg-[#D01012] text-white",
    },
  };

  const current = figures[activeFigure];

  return (
    <div className={`flex flex-col items-center w-full max-w-sm select-none ${className}`}>
      {/* Minifigure Image Card */}
      <div className="w-full bg-white border-4 border-black rounded-sm shadow-[6px_6px_0px_#000000] overflow-hidden">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-3 py-1.5 bg-[#1E1E1E] text-white border-b-3 border-black">
          <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-neutral-300">
            {current.title}
          </span>
          <span className={`text-[10px] font-mono font-black px-1.5 py-0.5 border border-black ${current.badgeColor}`}>
            {current.tag}
          </span>
        </div>

        {/* Display Image (Square aspect ratio) */}
        <div className="relative w-full aspect-square bg-neutral-900 border-b-3 border-black">
          <Image
            src={current.src}
            alt={current.alt}
            fill
            sizes="(max-width: 640px) 100vw, 420px"
            priority
            className="object-cover"
          />
        </div>

        {/* Toggle Switcher Buttons */}
        <div className="p-3 bg-neutral-100 flex items-center justify-between gap-2">
          <button
            type="button"
            onClick={() => setActiveFigure("work")}
            className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-2 text-xs font-mono font-bold uppercase border-2 border-black cursor-pointer transition-all ${
              activeFigure === "work"
                ? "bg-[#F5CD2F] text-black shadow-[3px_3px_0px_#000000] translate-x-0.5 translate-y-0.5"
                : "bg-white hover:bg-neutral-200 text-neutral-800 shadow-[2px_2px_0px_#000000]"
            }`}
          >
            <Briefcase className="w-3.5 h-3.5 shrink-0" />
            <span>Làm Việc</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveFigure("hiking")}
            className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-2 text-xs font-mono font-bold uppercase border-2 border-black cursor-pointer transition-all ${
              activeFigure === "hiking"
                ? "bg-[#F5CD2F] text-black shadow-[3px_3px_0px_#000000] translate-x-0.5 translate-y-0.5"
                : "bg-white hover:bg-neutral-200 text-neutral-800 shadow-[2px_2px_0px_#000000]"
            }`}
          >
            <Mountain className="w-3.5 h-3.5 shrink-0" />
            <span>Dã Ngoại</span>
          </button>
        </div>
      </div>
    </div>
  );
}
