"use client";

import React from "react";
import { portfolioData, ExperienceItem } from "@/data/portfolioData";
import { LegoStudRow } from "./LegoStudRow";
import { Calendar, Briefcase, Award } from "lucide-react";

export function ExperienceSection() {
  const { experiences } = portfolioData;

  const colorStyles: Record<
    ExperienceItem["color"],
    { bg: string; text: string; hex: string }
  > = {
    red: { bg: "bg-[#D01012]", text: "text-white", hex: "#D01012" },
    blue: { bg: "bg-[#0055BF]", text: "text-white", hex: "#0055BF" },
    yellow: { bg: "bg-[#F5CD2F]", text: "text-black", hex: "#F5CD2F" },
    green: { bg: "bg-[#00852B]", text: "text-white", hex: "#00852B" },
  };

  return (
    <section id="experience" className="py-16 lego-neutral-bg border-b-4 border-black">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-4 border-b-3 border-black">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#00852B] text-white text-xs font-mono font-bold uppercase mb-2">
              <Briefcase className="w-3.5 h-3.5" />
              <span>LỊCH SỬ CÔNG TÁC KỸ THUẬT</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-black uppercase tracking-tight">
              Quá Trình Công Tác & Dự Án Thực Tế
            </h2>
          </div>
          <div className="mt-2 sm:mt-0 text-xs font-mono font-bold text-neutral-700">
            CẤU TRÚC THEO TRÌNH TỰ THỜI GIAN
          </div>
        </div>

        {/* Stacked Brick Timeline */}
        <div className="space-y-8 relative">
          {experiences.map((exp, index) => {
            const { bg, text, hex } = colorStyles[exp.color];

            return (
              <div
                key={index}
                className="relative bg-white border-4 border-black rounded-sm shadow-[6px_6px_0px_#000000]"
              >
                {/* Top Studs Row */}
                <div className="w-full bg-neutral-900 pt-1 pb-1 border-b-3 border-black">
                  <LegoStudRow count={8} colorHex={hex} size="sm" />
                </div>

                {/* Header bar */}
                <div
                  className={`flex flex-col sm:flex-row sm:items-center justify-between px-5 py-3 border-b-3 border-black ${bg} ${text} gap-2`}
                >
                  <div className="flex items-center gap-2">
                    <span className="font-black text-base sm:text-lg uppercase">
                      {exp.role}
                    </span>
                    <span className="text-xs font-mono opacity-80">
                      @{exp.company}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono font-bold bg-black text-white px-2.5 py-1 border border-white/50 w-fit">
                    <Calendar className="w-3 h-3 text-[#F5CD2F]" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 space-y-4">
                  <p className="text-sm text-neutral-800 font-medium leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-2 pt-2 border-t border-neutral-200">
                    <div className="text-xs font-mono font-bold uppercase text-neutral-600 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-black" />
                      <span>Kết quả định lượng:</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {exp.achievements.map((ach, aIdx) => (
                        <div
                          key={aIdx}
                          className="p-2.5 bg-neutral-50 border-2 border-black text-xs text-neutral-800 flex items-start gap-2"
                        >
                          <span className="w-2 h-2 rounded-full bg-[#D01012] mt-1 shrink-0" />
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
