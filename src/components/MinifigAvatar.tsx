"use client";

import React, { useState } from "react";
import { LegoColor } from "./LegoButton";

interface MinifigAvatarProps {
  initialColor?: LegoColor;
  className?: string;
}

export function MinifigAvatar({
  initialColor = "red",
  className = "",
}: MinifigAvatarProps) {
  const [shirtColor, setShirtColor] = useState<LegoColor>(initialColor);
  const [accessory, setAccessory] = useState<"laptop" | "cloud" | "coffee" | "wrench">("laptop");

  const shirtHexMap: Record<LegoColor, { primary: string; shadow: string }> = {
    red: { primary: "#D01012", shadow: "#9A0B0D" },
    blue: { primary: "#0055BF", shadow: "#003A85" },
    yellow: { primary: "#F5CD2F", shadow: "#C49E10" },
    green: { primary: "#00852B", shadow: "#005E1E" },
    orange: { primary: "#FE8A18", shadow: "#C66408" },
    black: { primary: "#222222", shadow: "#111111" },
    white: { primary: "#ECECEC", shadow: "#BFBFBF" },
  };

  const pantsHexMap: Record<LegoColor, { primary: string; shadow: string }> = {
    red: { primary: "#0055BF", shadow: "#003A85" }, // classic blue jeans
    blue: { primary: "#1A1A1A", shadow: "#000000" },
    yellow: { primary: "#00852B", shadow: "#005E1E" },
    green: { primary: "#0055BF", shadow: "#003A85" },
    orange: { primary: "#0055BF", shadow: "#003A85" },
    black: { primary: "#333333", shadow: "#1C1C1C" },
    white: { primary: "#0055BF", shadow: "#003A85" },
  };

  const currentShirt = shirtHexMap[shirtColor];
  const currentPants = pantsHexMap[shirtColor];

  return (
    <div className={`flex flex-col items-center select-none ${className}`}>
      {/* SVG Minifigure Graphic */}
      <div className="relative w-56 h-72 drop-shadow-[5px_5px_0px_rgba(0,0,0,1)]">
        <svg
          viewBox="0 0 240 320"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* DEFINITIONS FOR GRADIENTS */}
          <defs>
            <linearGradient id="headGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFE066" />
              <stop offset="40%" stopColor="#F5CD2F" />
              <stop offset="100%" stopColor="#D9A81E" />
            </linearGradient>
            <linearGradient id="handGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFE066" />
              <stop offset="100%" stopColor="#D9A81E" />
            </linearGradient>
          </defs>

          {/* HEAD STUD */}
          <rect
            x="102"
            y="26"
            width="36"
            height="14"
            rx="4"
            fill="#F5CD2F"
            stroke="#000000"
            strokeWidth="3.5"
          />

          {/* HEAD */}
          <rect
            x="85"
            y="38"
            width="70"
            height="62"
            rx="16"
            fill="url(#headGrad)"
            stroke="#000000"
            strokeWidth="4"
          />

          {/* EYEBROWS */}
          <path
            d="M 96 56 Q 104 53 110 56"
            stroke="#111111"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 130 56 Q 136 53 144 56"
            stroke="#111111"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />

          {/* EYES */}
          <circle cx="103" cy="65" r="4.5" fill="#111111" />
          <circle cx="102" cy="63.5" r="1.5" fill="#FFFFFF" />

          <circle cx="137" cy="65" r="4.5" fill="#111111" />
          <circle cx="136" cy="63.5" r="1.5" fill="#FFFFFF" />

          {/* SMILE */}
          <path
            d="M 106 78 Q 120 90 134 78"
            stroke="#111111"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
          />

          {/* NECK CONNECTOR */}
          <rect
            x="106"
            y="98"
            width="28"
            height="10"
            fill="#D9A81E"
            stroke="#000000"
            strokeWidth="3.5"
          />

          {/* LEFT ARM & HAND (Rendered behind or alongside torso) */}
          {/* Left Arm */}
          <path
            d="M 68 120 L 40 170 L 52 186 L 76 138 Z"
            fill={currentShirt.primary}
            stroke="#000000"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          {/* Left Hand (C-clamp gripper) */}
          <path
            d="M 38 178 C 30 180, 24 192, 28 202 C 32 212, 44 212, 50 204 C 44 204, 38 198, 38 190 C 38 184, 44 182, 48 182"
            fill="url(#handGrad)"
            stroke="#000000"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* RIGHT ARM & HAND */}
          {/* Right Arm */}
          <path
            d="M 172 120 L 200 170 L 188 186 L 164 138 Z"
            fill={currentShirt.primary}
            stroke="#000000"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          {/* Right Hand */}
          <path
            d="M 202 178 C 210 180, 216 192, 212 202 C 208 212, 196 212, 190 204 C 196 204, 202 198, 202 190 C 202 184, 196 182, 192 182"
            fill="url(#handGrad)"
            stroke="#000000"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* TORSO (Trapezoid) */}
          <polygon
            points="70,110 170,110 182,210 58,210"
            fill={currentShirt.primary}
            stroke="#000000"
            strokeWidth="4"
            strokeLinejoin="round"
          />

          {/* TORSO DECAL / BADGE */}
          <polygon
            points="102,110 138,110 132,130 108,130"
            fill="#FFFFFF"
            stroke="#000000"
            strokeWidth="2"
          />
          <text
            x="120"
            y="152"
            textAnchor="middle"
            fill="#FFFFFF"
            fontSize="18"
            fontWeight="900"
            fontFamily="monospace"
          >
            &lt;/&gt;
          </text>
          <text
            x="120"
            y="178"
            textAnchor="middle"
            fill="#FFD500"
            fontSize="11"
            fontWeight="bold"
            fontFamily="sans-serif"
          >
            AWS CLOUD
          </text>

          {/* HIPS */}
          <rect
            x="60"
            y="208"
            width="120"
            height="26"
            fill={currentPants.primary}
            stroke="#000000"
            strokeWidth="4"
          />
          {/* Hip Center Joint */}
          <polygon
            points="110,208 130,208 126,234 114,234"
            fill="#000000"
          />

          {/* LEFT LEG */}
          <rect
            x="60"
            y="234"
            width="55"
            height="70"
            fill={currentPants.primary}
            stroke="#000000"
            strokeWidth="4"
          />
          {/* Left Foot */}
          <rect
            x="56"
            y="286"
            width="59"
            height="22"
            rx="3"
            fill={currentPants.primary}
            stroke="#000000"
            strokeWidth="3.5"
          />

          {/* RIGHT LEG */}
          <rect
            x="125"
            y="234"
            width="55"
            height="70"
            fill={currentPants.primary}
            stroke="#000000"
            strokeWidth="4"
          />
          {/* Right Foot */}
          <rect
            x="125"
            y="286"
            width="59"
            height="22"
            rx="3"
            fill={currentPants.primary}
            stroke="#000000"
            strokeWidth="3.5"
          />

          {/* ACCESSORY DISPLAY OVERLAY */}
          {accessory === "laptop" && (
            <g transform="translate(160, 155)">
              <rect x="0" y="0" width="46" height="32" rx="2" fill="#333333" stroke="#000000" strokeWidth="3" />
              <rect x="4" y="4" width="38" height="24" fill="#0055BF" />
              <text x="23" y="19" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="bold">NEXT.JS</text>
              <polygon points="-6,32 52,32 46,38 0,38" fill="#555555" stroke="#000000" strokeWidth="2.5" />
            </g>
          )}

          {accessory === "cloud" && (
            <g transform="translate(165, 160)">
              <rect x="0" y="0" width="46" height="30" rx="6" fill="#FE8A18" stroke="#000000" strokeWidth="3" />
              <text x="23" y="19" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="900">AWS</text>
            </g>
          )}

          {accessory === "coffee" && (
            <g transform="translate(175, 165)">
              <rect x="0" y="0" width="26" height="30" rx="3" fill="#FFFFFF" stroke="#000000" strokeWidth="3" />
              <path d="M 26 8 C 34 8, 34 22, 26 22" fill="none" stroke="#000000" strokeWidth="3" />
              <rect x="6" y="8" width="14" height="14" rx="2" fill="#D01012" />
            </g>
          )}

          {accessory === "wrench" && (
            <g transform="translate(178, 145) rotate(25)">
              <rect x="6" y="16" width="10" height="42" rx="2" fill="#A0A5A9" stroke="#000000" strokeWidth="3" />
              <circle cx="11" cy="14" r="12" fill="#A0A5A9" stroke="#000000" strokeWidth="3" />
              <polygon points="6,6 16,6 11,18" fill="#1c2127" />
            </g>
          )}
        </svg>
      </div>

      {/* MINIFIG CUSTOMIZER CONTROLS */}
      <div className="mt-4 p-3 bg-white border-3 border-black rounded-sm shadow-[4px_4px_0px_#000000] w-full max-w-xs">
        <div className="text-xs font-black uppercase text-neutral-800 mb-2 flex items-center justify-between">
          <span>Tùy chỉnh Minifigure:</span>
          <span className="text-[10px] font-mono bg-neutral-200 px-1.5 py-0.5 rounded">ID #FIG-01</span>
        </div>

        {/* Color buttons */}
        <div className="flex items-center justify-center gap-1.5 mb-2.5">
          {(["red", "blue", "yellow", "green", "black"] as LegoColor[]).map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setShirtColor(c)}
              className={`w-6 h-6 rounded-none border-2 border-black transition-transform cursor-pointer ${
                shirtColor === c ? "scale-125 ring-2 ring-black shadow-sm" : "hover:scale-110"
              }`}
              style={{ backgroundColor: shirtHexMap[c].primary }}
              title={`Màu áo: ${c}`}
            />
          ))}
        </div>

        {/* Accessory Selector */}
        <div className="grid grid-cols-4 gap-1 text-[11px] font-bold">
          {(
            [
              { id: "laptop", label: "Laptop" },
              { id: "cloud", label: "AWS" },
              { id: "coffee", label: "Cà phê" },
              { id: "wrench", label: "Cờ lê" },
            ] as const
          ).map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setAccessory(item.id)}
              className={`px-1 py-1 border-2 border-black text-center cursor-pointer transition-all ${
                accessory === item.id
                  ? "bg-[#F5CD2F] text-black font-extrabold shadow-[2px_2px_0px_#000]"
                  : "bg-neutral-100 hover:bg-neutral-200 text-neutral-700"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

