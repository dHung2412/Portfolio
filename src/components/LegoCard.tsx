"use client";

import React from "react";
import { LegoStudRow } from "./LegoStudRow";
import { LegoColor } from "./LegoButton";

interface LegoCardProps {
  children: React.ReactNode;
  headerColor?: LegoColor;
  title?: string;
  badge?: string;
  studCount?: number;
  className?: string;
  bodyClassName?: string;
}

const colorMap: Record<LegoColor, { bg: string; text: string; hex: string }> = {
  red: { bg: "bg-[#D01012]", text: "text-white", hex: "#D01012" },
  blue: { bg: "bg-[#0055BF]", text: "text-white", hex: "#0055BF" },
  yellow: { bg: "bg-[#F5CD2F]", text: "text-black", hex: "#F5CD2F" },
  green: { bg: "bg-[#00852B]", text: "text-white", hex: "#00852B" },
  orange: { bg: "bg-[#FE8A18]", text: "text-white", hex: "#FE8A18" },
  black: { bg: "bg-[#1E1E1E]", text: "text-white", hex: "#1E1E1E" },
  white: { bg: "bg-[#FFFFFF]", text: "text-black", hex: "#FFFFFF" },
};

export function LegoCard({
  children,
  headerColor = "red",
  title,
  badge,
  studCount = 6,
  className = "",
  bodyClassName = "",
}: LegoCardProps) {
  const { bg, text, hex } = colorMap[headerColor];

  return (
    <div
      className={`relative mt-3 flex flex-col bg-white border-4 border-black rounded-md shadow-[6px_6px_0px_#000000] transition-all duration-150 hover:-translate-y-1 hover:shadow-[8px_8px_0px_#000000] ${className}`}
    >
      {/* Top Studs Row protruding above card edge */}
      <div className="lego-studs-top">
        <LegoStudRow count={studCount} colorHex={hex} size="sm" />
      </div>

      {/* Header Bar */}
      {(title || badge) && (
        <div
          className={`flex items-center justify-between px-4 py-2.5 border-b-3 border-black lego-brick-top ${bg} ${text}`}
        >
          {title && (
            <h3 className="font-extrabold text-sm md:text-base tracking-wide uppercase truncate">
              {title}
            </h3>
          )}
          {badge && (
            <span className="ml-2 px-2 py-0.5 text-xs font-mono font-bold bg-black text-white border border-white rounded-none">
              {badge}
            </span>
          )}
        </div>
      )}

      {/* Body Content */}
      <div className={`p-5 flex-1 bg-white ${bodyClassName}`}>{children}</div>
    </div>
  );
}

