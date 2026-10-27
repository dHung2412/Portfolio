"use client";

import React from "react";
import { LegoStudRow } from "./LegoStudRow";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#1c2127] text-white border-t-4 border-black">
      {/* Top Studs Row */}
      <div className="w-full bg-[#111418] pt-1 pb-1 border-b-2 border-black">
        <LegoStudRow count={20} colorHex="#3A3D40" size="sm" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between gap-4">
        <span className="px-2 py-0.5 bg-[#D01012] text-white font-black text-sm border-2 border-white">
          LEGO
        </span>

        <button
          type="button"
          onClick={scrollToTop}
          className="flex items-center gap-2 px-4 py-2 bg-[#F5CD2F] text-black font-extrabold text-xs uppercase border-3 border-black shadow-[3px_3px_0px_#000000] hover:bg-[#E5BE20] active:translate-x-0.5 active:translate-y-0.5 cursor-pointer"
        >
          <ArrowUp className="w-4 h-4" />
          <span>Lên Đầu Trang</span>
        </button>
      </div>
    </footer>
  );
}

