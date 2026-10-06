"use client";

import React from "react";

export type LegoColor = "red" | "blue" | "yellow" | "green" | "orange" | "black" | "white";

interface LegoButtonProps {
  children: React.ReactNode;
  variant?: LegoColor;
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  target?: string;
  rel?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const colorStyles: Record<
  LegoColor,
  { bg: string; text: string; hex: string }
> = {
  red: { bg: "bg-[#D01012] hover:bg-[#B50E10]", text: "text-white", hex: "#D01012" },
  blue: { bg: "bg-[#0055BF] hover:bg-[#0047A0]", text: "text-white", hex: "#0055BF" },
  yellow: { bg: "bg-[#F5CD2F] hover:bg-[#E5BE20]", text: "text-black", hex: "#F5CD2F" },
  green: { bg: "bg-[#00852B] hover:bg-[#007024]", text: "text-white", hex: "#00852B" },
  orange: { bg: "bg-[#FE8A18] hover:bg-[#E0760E]", text: "text-white", hex: "#FE8A18" },
  black: { bg: "bg-[#1E1E1E] hover:bg-[#111111]", text: "text-white", hex: "#1E1E1E" },
  white: { bg: "bg-[#FFFFFF] hover:bg-[#F0F0F0]", text: "text-black", hex: "#FFFFFF" },
};

const sizeStyles = {
  sm: "px-3 py-1.5 text-xs font-bold",
  md: "px-5 py-2.5 text-sm font-bold",
  lg: "px-6 py-3.5 text-base font-extrabold tracking-wide",
};

export function LegoButton({
  children,
  variant = "red",
  size = "md",
  href,
  onClick,
  className = "",
  target,
  rel,
  type = "button",
  disabled = false,
}: LegoButtonProps) {
  const { bg, text } = colorStyles[variant];
  const sizeClass = sizeStyles[size];

  const baseClasses = `
    relative inline-flex items-center justify-center gap-2
    border-3 border-black rounded-sm
    ${bg} ${text} ${sizeClass}
    shadow-[4px_4px_0px_#000000]
    transition-all duration-100 ease-in-out
    hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_#000000]
    active:translate-x-1 active:translate-y-1 active:shadow-[1px_1px_0px_#000000]
    disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-[2px_2px_0px_#000000]
    select-none uppercase cursor-pointer
    ${className}
  `;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={baseClasses}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
    >
      {children}
    </button>
  );
}

