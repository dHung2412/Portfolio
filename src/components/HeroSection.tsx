"use client";

import React from "react";
import { MinifigAvatar } from "./MinifigAvatar";
import { LegoButton } from "./LegoButton";
import { portfolioData } from "@/data/portfolioData";
import { FileText, Send, Layers, Server, ShieldCheck, Cpu, Award } from "lucide-react";

export function HeroSection() {
  const { profile } = portfolioData;

  const stats = [
    {
      label: "Kinh nghiệm thực tế",
      value: `${profile.experienceYears} Năm`,
      color: "bg-[#D01012] text-white",
      icon: Layers,
    },
    {
      label: "Dự án đã bàn giao",
      value: `${profile.completedProjects}+ Hệ thống`,
      color: "bg-[#F5CD2F] text-black",
      icon: Server,
    },
    {
      label: "Chứng chỉ chuyên môn",
      value: `${portfolioData.certificates.length} Chứng nhận`,
      color: "bg-[#0055BF] text-white",
      icon: ShieldCheck,
    },
    {
      label: "Kiến trúc dữ liệu",
      value: "Lakehouse / ETL",
      color: "bg-[#00852B] text-white",
      icon: Cpu,
    },
  ];

  return (
    <section className="relative py-12 md:py-20 lego-neutral-bg border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Information */}
          <div className="lg:col-span-7 space-y-6">
            {/* Header Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1E1E1E] text-white border-2 border-black rounded-sm shadow-[3px_3px_0px_#000000]">
              <span className="w-2.5 h-2.5 bg-[#00852B] rounded-full border border-black" />
              <span className="text-xs font-mono font-bold tracking-wider uppercase">
                {profile.status}
              </span>
              <span className="text-neutral-500 font-mono">|</span>
              <span className="text-xs font-mono text-[#F5CD2F]">
                {profile.location}
              </span>
            </div>

            {/* Main Title */}
            <div className="space-y-2">
              <div className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-600">
                PORTFOLIO HỒ SƠ NĂNG LỰC CÁ NHÂN
              </div>
              <h1 className="text-3xl sm:text-5xl font-black text-black tracking-tight uppercase leading-tight">
                {profile.name}
              </h1>
              <div className="text-lg sm:text-2xl font-black text-[#D01012]">
                {profile.role}
              </div>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-neutral-800 font-medium leading-relaxed bg-white/90 p-4 border-3 border-black shadow-[4px_4px_0px_#000000]">
              {profile.bio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <LegoButton variant="red" size="md" href="#projects">
                <Layers className="w-4 h-4" />
                <span>Xem Danh Sách Dự Án</span>
              </LegoButton>

              <LegoButton variant="orange" size="md" href="#certificates">
                <Award className="w-4 h-4" />
                <span>Xem Chứng Chỉ</span>
              </LegoButton>

              <LegoButton variant="blue" size="md" href="#contact">
                <Send className="w-4 h-4" />
                <span>Liên Hệ Trực Tiếp</span>
              </LegoButton>

              <LegoButton
                variant="yellow"
                size="md"
                href="#about"
              >
                <FileText className="w-4 h-4 text-black" />
                <span>Quy Trình Pipeline</span>
              </LegoButton>
            </div>
          </div>

          {/* Right Column: Minifig Avatar Display */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative p-6 bg-[#3b7c32] border-4 border-black rounded-sm shadow-[8px_8px_0px_#000000] w-full max-w-md">
              <div className="text-center font-mono font-bold text-xs text-white uppercase mb-3 bg-black/40 py-1 px-2 border border-black">
                MÔ HÌNH NHÂN VẬT ĐẠI DIỆN (MINIFIGURE)
              </div>
              <MinifigAvatar initialColor="red" />
            </div>
          </div>
        </div>

        {/* Stats Grid - 4 Lego Bricks */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={idx}
                className={`p-4 border-3 border-black rounded-sm shadow-[4px_4px_0px_#000000] ${stat.color} flex flex-col justify-between`}
              >
                <div className="flex items-center justify-between mb-2">
                  <IconComponent className="w-5 h-5 opacity-90" />
                  <span className="text-[10px] font-mono font-bold uppercase opacity-80">
                    STAT #{idx + 1}
                  </span>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black tracking-tight leading-none">
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold mt-1 uppercase tracking-wide opacity-90">
                    {stat.label}
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

