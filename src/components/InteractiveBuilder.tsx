"use client";

import React, { useState } from "react";
import { LegoButton, LegoColor } from "./LegoButton";
import { Plus, Trash2, RotateCcw, Box } from "lucide-react";

interface BrickBlock {
  id: string;
  color: LegoColor;
  label: string;
  studs: number;
}

const colorHexValues: Record<LegoColor, { bg: string; text: string; hex: string }> = {
  red: { bg: "bg-[#D01012]", text: "text-white", hex: "#D01012" },
  blue: { bg: "bg-[#0055BF]", text: "text-white", hex: "#0055BF" },
  yellow: { bg: "bg-[#F5CD2F]", text: "text-black", hex: "#F5CD2F" },
  green: { bg: "bg-[#00852B]", text: "text-white", hex: "#00852B" },
  orange: { bg: "bg-[#FE8A18]", text: "text-white", hex: "#FE8A18" },
  black: { bg: "bg-[#1E1E1E]", text: "text-white", hex: "#1E1E1E" },
  white: { bg: "bg-[#FFFFFF]", text: "text-black", hex: "#FFFFFF" },
  gray: { bg: "bg-[#A0A5A9]", text: "text-black", hex: "#A0A5A9" },
};

const initialBricks: BrickBlock[] = [
  { id: "1", color: "green", label: "AWS Base Infrastructure (S3 / VPC)", studs: 8 },
  { id: "2", color: "blue", label: "Serverless Compute (AWS Lambda)", studs: 6 },
  { id: "3", color: "yellow", label: "REST / GraphQL Backend API", studs: 6 },
  { id: "4", color: "red", label: "Next.js 15 Client Frontend", studs: 4 },
];

export function InteractiveBuilder() {
  const [bricks, setBricks] = useState<BrickBlock[]>(initialBricks);
  const [selectedColor, setSelectedColor] = useState<LegoColor>("red");
  const [selectedStuds, setSelectedStuds] = useState<number>(6);
  const [brickLabel, setBrickLabel] = useState<string>("Tầng Dịch Vụ Mới");

  const handleAddBrick = (e: React.FormEvent) => {
    e.preventDefault();
    if (!brickLabel.trim()) return;

    const newBrick: BrickBlock = {
      id: Date.now().toString(),
      color: selectedColor,
      label: brickLabel.trim(),
      studs: selectedStuds,
    };

    setBricks((prev) => [...prev, newBrick]);
  };

  const handleRemoveTop = () => {
    if (bricks.length > 0) {
      setBricks((prev) => prev.slice(0, prev.length - 1));
    }
  };

  const handleReset = () => {
    setBricks(initialBricks);
  };

  return (
    <section id="builder" className="py-16 bg-[#3b7c32] border-b-4 border-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b-3 border-black text-white">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-black text-[#F5CD2F] text-xs font-mono font-bold uppercase mb-2">
              <Box className="w-3.5 h-3.5" />
              <span>CÔNG CỤ TƯƠNG TÁC TRỰC QUAN</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight">
              Bàn Thử Nghiệm Ghép Khối Module
            </h2>
          </div>
          <div className="mt-2 sm:mt-0 text-xs font-mono font-bold text-yellow-300">
            SỐ TẦNG ĐANG LẮP: {bricks.length} KHỐI
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Form */}
          <div className="lg:col-span-5 bg-white border-4 border-black p-5 rounded-sm shadow-[6px_6px_0px_#000000]">
            <h3 className="text-sm font-black uppercase text-black mb-4 flex items-center justify-between pb-2 border-b-2 border-black">
              <span>Bảng Điều Khiển Cấu Hình Khối</span>
              <span className="text-[11px] font-mono text-neutral-500 font-bold">
                BUILDER 1.0
              </span>
            </h3>

            <form onSubmit={handleAddBrick} className="space-y-4">
              {/* Brick Label */}
              <div>
                <label className="block text-xs font-mono font-bold uppercase text-neutral-800 mb-1">
                  Nhãn tên module / dịch vụ:
                </label>
                <input
                  type="text"
                  value={brickLabel}
                  onChange={(e) => setBrickLabel(e.target.value)}
                  className="w-full px-3 py-2 border-3 border-black text-xs font-bold text-black focus:outline-none focus:bg-yellow-50"
                  maxLength={40}
                  placeholder="Ví dụ: Cache Layer (Redis)"
                />
              </div>

              {/* Color Picker */}
              <div>
                <label className="block text-xs font-mono font-bold uppercase text-neutral-800 mb-1.5">
                  Màu khối gạch:
                </label>
                <div className="flex flex-wrap gap-2">
                  {(["red", "blue", "yellow", "green", "orange", "black", "white"] as LegoColor[]).map(
                    (color) => (
                      <button
                        key={color}
                        type="button"
                        onClick={() => setSelectedColor(color)}
                        className={`w-7 h-7 border-2 border-black cursor-pointer transition-transform ${
                          selectedColor === color
                            ? "scale-115 ring-2 ring-black shadow-sm"
                            : "hover:scale-105"
                        }`}
                        style={{ backgroundColor: colorHexValues[color].hex }}
                        title={color}
                      />
                    )
                  )}
                </div>
              </div>

              {/* Studs Count (Width) */}
              <div>
                <label className="block text-xs font-mono font-bold uppercase text-neutral-800 mb-1.5">
                  Chiều rộng khối (Số lượng chốt studs):
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[2, 4, 6, 8].map((studCount) => (
                    <button
                      key={studCount}
                      type="button"
                      onClick={() => setSelectedStuds(studCount)}
                      className={`py-1.5 border-2 border-black text-xs font-bold font-mono cursor-pointer ${
                        selectedStuds === studCount
                          ? "bg-black text-white"
                          : "bg-neutral-100 hover:bg-neutral-200 text-black"
                      }`}
                    >
                      {studCount} studs
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col gap-2">
                <LegoButton
                  variant="yellow"
                  size="md"
                  type="submit"
                  className="w-full"
                >
                  <Plus className="w-4 h-4 text-black" />
                  <span>Thêm Khối Module Lên Tháp</span>
                </LegoButton>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={handleRemoveTop}
                    disabled={bricks.length === 0}
                    className="flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-bold uppercase border-2 border-black bg-neutral-200 hover:bg-neutral-300 text-black disabled:opacity-50 cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Bỏ Tầng Trên Cùng</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-bold uppercase border-2 border-black bg-neutral-200 hover:bg-neutral-300 text-black cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Đặt Lại Ban Đầu</span>
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Interactive Stack Visualization */}
          <div className="lg:col-span-7 bg-[#2f6628] border-4 border-black p-6 rounded-sm shadow-[6px_6px_0px_#000000] min-h-[380px] flex flex-col justify-end">
            <div className="text-center font-mono font-bold text-xs text-white uppercase mb-4 bg-black/40 py-1 px-3 border border-black/40 self-center">
              MÔ HÌNH KIẾN TRÚC THÁP ĐÃ LẮP GHÉP
            </div>

            {/* Stack of bricks in reverse (bottom up) */}
            <div className="flex flex-col-reverse items-center gap-1 w-full max-w-lg mx-auto">
              {bricks.map((b, idx) => {
                const conf = colorHexValues[b.color];
                const widthPercent =
                  b.studs === 8
                    ? "w-full"
                    : b.studs === 6
                    ? "w-5/6"
                    : b.studs === 4
                    ? "w-4/6"
                    : "w-3/6";

                return (
                  <div
                    key={b.id}
                    className={`${widthPercent} flex flex-col transition-all duration-200`}
                  >
                    {/* Studs row */}
                    <div className="flex items-center justify-around px-2 py-0.5 bg-black/70 border-t-2 border-x-2 border-black rounded-t-sm">
                      {Array.from({ length: b.studs }).map((_, sIdx) => (
                        <div
                          key={sIdx}
                          className="w-3.5 h-2 rounded-full border border-black shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)]"
                          style={{ backgroundColor: conf.hex }}
                        />
                      ))}
                    </div>

                    {/* Brick body */}
                    <div
                      className={`px-3 py-2 border-3 border-black rounded-b-sm shadow-[3px_3px_0px_#000000] ${conf.bg} ${conf.text} flex items-center justify-between text-xs font-bold`}
                    >
                      <span className="truncate">{b.label}</span>
                      <span className="text-[10px] font-mono opacity-80 shrink-0 ml-2 bg-black/30 px-1 py-0.5 rounded">
                        L#{idx + 1}
                      </span>
                    </div>
                  </div>
                );
              })}

              {/* Baseplate Footer Brick */}
              <div className="w-full mt-2 pt-2 border-t-4 border-black flex items-center justify-center">
                <div className="bg-[#1c2127] text-white text-[11px] font-mono font-bold px-4 py-1.5 border-2 border-black shadow-[2px_2px_0px_#000000] uppercase">
                  TẦNG CƠ SỞ (BASEPLATE #00) - AWS CLOUD FOUNDATION
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
