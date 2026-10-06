"use client";

import React from "react";

interface LegoStudRowProps {
  count?: number;
  colorHex?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function LegoStudRow({
  count = 6,
  colorHex,
  size = "md",
  className = "",
}: LegoStudRowProps) {
  const sizeClasses = {
    sm: "w-4 h-2.5 my-[-5px]",
    md: "w-6 h-3 my-[-6px]",
    lg: "w-8 h-4 my-[-8px]",
  };

  const dotClasses = sizeClasses[size];

  return (
    <div
      className={`flex items-center justify-around w-full px-2 pointer-events-none select-none z-10 ${className}`}
    >
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className={`${dotClasses} rounded-full border-2 border-black flex items-center justify-center`}
          style={{
            backgroundColor: colorHex || "inherit",
            background: colorHex
              ? `radial-gradient(circle at 45% 35%, rgba(255,255,255,0.7) 0%, ${colorHex} 60%, rgba(0,0,0,0.4) 100%)`
              : undefined,
            boxShadow:
              "inset 0 1px 2px rgba(255,255,255,0.8), inset 0 -1px 2px rgba(0,0,0,0.5), 0 2px 0px #000000",
          }}
        >
          <div className="w-1.5 h-1 rounded-full bg-white/40 blur-[0.5px]" />
        </div>
      ))}
    </div>
  );
}

