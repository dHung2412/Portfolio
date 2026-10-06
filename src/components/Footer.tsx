"use client";

import React from "react";
import { LegoStudRow } from "./LegoStudRow";
import { ArrowUp, Cloud } from "lucide-react";

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Col 1: System info */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 bg-[#D01012] text-white font-black text-sm border-2 border-white">
                LEGO
              </span>
              <span className="font-mono font-bold text-base tracking-tight">
                PORTFOLIO SYSTEM #2026
              </span>
            </div>
            <p className="text-xs text-neutral-400 font-mono">
              Hệ thống mã nguồn mở phát triển trên Next.js và triển khai đám mây với AWS Amplify.
            </p>
          </div>

          {/* Col 2: Deployment badge */}
          <div className="flex flex-col items-center justify-center p-3 bg-black/40 border-2 border-neutral-700">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#FE8A18]">
              <Cloud className="w-4 h-4" />
              <span>AWS AMPLIFY HOSTING CONFIGURATION</span>
            </div>
            <div className="text-[11px] text-neutral-300 font-mono mt-1">
              SSR / SSG Hybrid Deployment Pipeline
            </div>
          </div>

          {/* Col 3: Back to top button */}
          <div className="flex justify-start md:justify-end">
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 bg-[#F5CD2F] text-black font-extrabold text-xs uppercase border-3 border-black shadow-[3px_3px_0px_#000000] hover:bg-[#E5BE20] active:translate-x-0.5 active:translate-y-0.5 cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
              <span>Lên Đầu Trang</span>
            </button>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="mt-8 pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 font-mono gap-2">
          <div>
            © {new Date().getFullYear()} Đặng Ngọc Hưng (Deck). Mã nguồn tuân thủ tiêu chuẩn module hóa.
          </div>
          <div className="flex items-center gap-4">
            <span>Next.js 15</span>
            <span>•</span>
            <span>TypeScript</span>
            <span>•</span>
            <span>Tailwind CSS v4</span>
            <span>•</span>
            <span>AWS Amplify</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

