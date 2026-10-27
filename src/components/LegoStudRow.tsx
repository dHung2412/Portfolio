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
  colorHex = "#A0A5A9",
  size = "md",
  className = "",
}: LegoStudRowProps) {
  return (
    <div
      data-size={size}
      className={`lego-stud-row flex items-end justify-around w-full px-2 pointer-events-none select-none ${className}`}
      style={{ "--stud": colorHex } as React.CSSProperties}
      aria-hidden="true"
    >
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="lego-stud" />
      ))}
    </div>
  );
}
