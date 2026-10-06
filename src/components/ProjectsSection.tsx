"use client";

import React from "react";
import { portfolioData, ProjectItem } from "@/data/portfolioData";
import { LegoButton } from "./LegoButton";
import { LegoStudRow } from "./LegoStudRow";
import { ExternalLink, Box, Check, Hash } from "lucide-react";
import { GithubIcon } from "./SocialIcons";

export function ProjectsSection() {
  const { projects } = portfolioData;

  const colorConfig: Record<
    ProjectItem["color"],
    { bg: string; text: string; hex: string; accent: string }
  > = {
    red: {
      bg: "bg-[#D01012]",
      text: "text-white",
      hex: "#D01012",
      accent: "bg-red-50",
    },
    blue: {
      bg: "bg-[#0055BF]",
      text: "text-white",
      hex: "#0055BF",
      accent: "bg-blue-50",
    },
    yellow: {
      bg: "bg-[#F5CD2F]",
      text: "text-black",
      hex: "#F5CD2F",
      accent: "bg-yellow-50",
    },
    green: {
      bg: "bg-[#00852B]",
      text: "text-white",
      hex: "#00852B",
      accent: "bg-green-50",
    },
    black: {
      bg: "bg-[#1E1E1E]",
      text: "text-white",
      hex: "#1E1E1E",
      accent: "bg-neutral-100",
    },
  };

  return (
    <section id="projects" className="py-16 bg-[#e7e2d6] border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b-3 border-black">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#D01012] text-white text-xs font-mono font-bold uppercase mb-2">
              <Box className="w-3.5 h-3.5" />
              <span>HỆ THỐNG MÃ NGUỒN HOÀN THIỆN</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-black uppercase tracking-tight">
              Danh Mục Bộ Dự Án (Official Sets)
            </h2>
          </div>
          <div className="mt-2 sm:mt-0 text-xs font-mono font-bold text-neutral-700">
            ĐÃ TRIỂN KHAI TRÊN CLOUD
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => {
            const colors = colorConfig[project.color];

            return (
              <div
                key={project.id}
                className="flex flex-col bg-white border-4 border-black rounded-sm shadow-[6px_6px_0px_#000000] hover:-translate-y-1 hover:shadow-[8px_8px_0px_#000000] transition-all"
              >
                {/* Top Studs Header */}
                <div className="w-full bg-neutral-900 pt-1 pb-1 border-b-3 border-black">
                  <LegoStudRow count={10} colorHex={colors.hex} size="sm" />
                </div>

                {/* Box Header Bar */}
                <div
                  className={`flex items-center justify-between px-5 py-3 border-b-3 border-black ${colors.bg} ${colors.text}`}
                >
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-black text-sm tracking-widest bg-black text-white px-2 py-0.5 border border-white">
                      {project.setNumber}
                    </span>
                    <span className="text-xs font-bold font-mono">
                      {project.piecesCount} MÃ LẮP RÁP (COMMITS)
                    </span>
                  </div>
                  <div className="text-[10px] font-mono font-bold bg-white/20 px-2 py-0.5 border border-black/30">
                    RELEASED
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <div>
                    <h3 className="text-xl font-black text-black uppercase tracking-tight mb-2.5">
                      {project.title}
                    </h3>
                    <p className="text-sm text-neutral-700 font-medium leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Technical Highlights */}
                    <div className="space-y-1.5 mb-5 bg-neutral-50 p-3 border-2 border-black">
                      <div className="text-[11px] font-mono font-bold uppercase text-neutral-600 mb-1 flex items-center gap-1">
                        <Hash className="w-3 h-3" />
                        <span>Thông số triển khai chính:</span>
                      </div>
                      {project.highlights.map((item, hIdx) => (
                        <div
                          key={hIdx}
                          className="flex items-start gap-2 text-xs text-neutral-800"
                        >
                          <Check className="w-3.5 h-3.5 text-[#00852B] mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Tags as mini bricks */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 text-xs font-mono font-bold bg-neutral-100 text-black border-2 border-black shadow-[2px_2px_0px_#000000]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t-2 border-black/20 flex flex-wrap items-center gap-3">
                    {project.demoUrl && (
                      <LegoButton
                        variant={project.color}
                        size="sm"
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Xem Trực Tiếp</span>
                      </LegoButton>
                    )}

                    {project.githubUrl && (
                      <LegoButton
                        variant="black"
                        size="sm"
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>Kho Mã Nguồn</span>
                      </LegoButton>
                    )}
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
