"use client";

import React, { useState } from "react";
import { portfolioData, SkillItem } from "@/data/portfolioData";
import { Wrench, Layers } from "lucide-react";

export function SkillsSection() {
  const { skills } = portfolioData;
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "Tất Cả Linh Kiện", count: skills.length },
    {
      id: "frontend",
      label: "Giao Diện (Frontend)",
      count: skills.filter((s) => s.category === "frontend").length,
    },
    {
      id: "backend",
      label: "Máy Chủ (Backend)",
      count: skills.filter((s) => s.category === "backend").length,
    },
    {
      id: "cloud",
      label: "Điện Toán Đám Mây (AWS)",
      count: skills.filter((s) => s.category === "cloud").length,
    },
    {
      id: "tools",
      label: "Công Cụ & DevOps",
      count: skills.filter((s) => s.category === "tools").length,
    },
  ];

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  const brickColorClasses: Record<
    SkillItem["color"],
    { bg: string; text: string; studHex: string }
  > = {
    red: { bg: "bg-[#D01012]", text: "text-white", studHex: "#D01012" },
    blue: { bg: "bg-[#0055BF]", text: "text-white", studHex: "#0055BF" },
    yellow: { bg: "bg-[#F5CD2F]", text: "text-black", studHex: "#F5CD2F" },
    green: { bg: "bg-[#00852B]", text: "text-white", studHex: "#00852B" },
    orange: { bg: "bg-[#FE8A18]", text: "text-white", studHex: "#FE8A18" },
  };

  return (
    <section id="skills" className="py-16 lego-neutral-bg border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b-3 border-black">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#0055BF] text-white text-xs font-mono font-bold uppercase mb-2">
              <Wrench className="w-3.5 h-3.5" />
              <span>DANH MỤC LINH KIỆN KỸ THUẬT</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-black uppercase tracking-tight">
              Kho Kỹ Năng & Công Nghệ
            </h2>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs font-bold uppercase border-3 border-black cursor-pointer transition-all ${
                  isActive
                    ? "bg-[#D01012] text-white shadow-[4px_4px_0px_#000000] translate-x-0.5 translate-y-0.5"
                    : "bg-white text-black hover:bg-neutral-100 shadow-[3px_3px_0px_#000000]"
                }`}
              >
                {cat.label} ({cat.count})
              </button>
            );
          })}
        </div>

        {/* Skills Brick Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredSkills.map((skill, index) => {
            const { bg, text, studHex } = brickColorClasses[skill.color];

            return (
              <div
                key={index}
                className="group flex flex-col transition-transform duration-100 hover:-translate-y-1"
              >
                {/* Top Studs Row for this Brick */}
                <div className="flex items-center justify-around px-2 py-0.5 bg-black/80 border-t-3 border-x-3 border-black rounded-t-sm">
                  {Array.from({ length: skill.level }).map((_, studIdx) => (
                    <div
                      key={studIdx}
                      className="w-4 h-2 rounded-full border border-black shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),inset_0_-1px_1px_rgba(0,0,0,0.5)]"
                      style={{ backgroundColor: studHex }}
                    />
                  ))}
                </div>

                {/* Main Brick Body */}
                <div
                  className={`p-3.5 border-3 border-black rounded-b-sm shadow-[4px_4px_0px_#000000] ${bg} ${text} flex flex-col justify-between min-h-[90px]`}
                >
                  <div className="font-extrabold text-sm sm:text-base leading-tight uppercase">
                    {skill.name}
                  </div>

                  <div className="mt-3 flex items-center justify-between text-[10px] font-mono font-bold pt-2 border-t border-black/30">
                    <span className="uppercase opacity-80">{skill.category}</span>
                    <span className="bg-black/20 px-1 py-0.5 rounded">
                      {skill.level}/4 Studs
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Explanatory note */}
        <div className="mt-8 p-3 bg-white border-2 border-black text-xs font-mono text-neutral-700 flex items-center gap-2">
          <Layers className="w-4 h-4 text-black shrink-0" />
          <span>
            Quy ước cấu hình: Mỗi khối gạch biểu thị một công nghệ. Số lượng chốt (studs) từ 1 đến 4 biểu thị mức độ nắm vững kỹ thuật và tần suất áp dụng thực tế.
          </span>
        </div>
      </div>
    </section>
  );
}

