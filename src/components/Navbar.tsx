"use client";

import React, { useState } from "react";
import { LegoStudRow } from "./LegoStudRow";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "Hướng Dẫn Lắp Ráp" },
    { href: "#skills", label: "Kho Linh Kiện (Skills)" },
    { href: "#certificates", label: "Chứng Chỉ (Certificates)" },
    { href: "#projects", label: "Bộ Mô Hình (Projects)" },
    { href: "#experience", label: "Tiến Trình (Timeline)" },
    { href: "#contact", label: "Liên Hệ" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#D01012] border-b-4 border-black shadow-[0_4px_0px_#000000]">
      {/* Top Studs across full width */}
      <div className="w-full bg-[#B50E10] pt-1 pb-1 border-b-2 border-black/40">
        <LegoStudRow count={16} colorHex="#D01012" size="sm" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-white font-black group"
          >
            <div className="flex items-center justify-center bg-[#F5CD2F] text-black border-3 border-black px-2.5 py-1 shadow-[3px_3px_0px_#000000] group-hover:scale-105 transition-transform">
              <span className="text-base font-black tracking-tighter">LEGO</span>
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-black tracking-tight leading-none text-white">
                DEV.PORTFOLIO
              </span>
              <span className="text-[10px] font-mono text-yellow-300 font-bold leading-none mt-0.5">
                SET #2026-AWS
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-xs font-black uppercase text-white hover:bg-black/25 active:bg-black/40 border-2 border-transparent hover:border-black rounded-sm transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 border-2 border-black bg-[#F5CD2F] text-black shadow-[2px_2px_0px_#000000] cursor-pointer"
              aria-label="Mở menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="lg:hidden border-t-3 border-black bg-[#D01012] px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-xs font-black uppercase text-white bg-black/20 border-2 border-black shadow-[2px_2px_0px_#000000]"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
