"use client";

import React from "react";
import { LegoCard } from "./LegoCard";
import { portfolioData } from "@/data/portfolioData";
import { BookOpen, CheckCircle2, Box, Cpu, Workflow, ShieldCheck } from "lucide-react";

export function AboutSection() {
  const { assemblySteps, profile } = portfolioData;

  const principles = [
    {
      title: "Kiến Trúc Module Hóa",
      desc: "Tách biệt rõ ràng giữa tầng hiển thị UI, logic nghiệp vụ và tầng truy vấn dữ liệu.",
      icon: Box,
      color: "border-[#D01012] bg-red-50",
    },
    {
      title: "An Toàn Kiểu Dữ Liệu",
      desc: "Áp dụng TypeScript kiểm soát kiểu dữ liệu từ API contract đến client component.",
      icon: ShieldCheck,
      color: "border-[#0055BF] bg-blue-50",
    },
    {
      title: "Tối Ưu Điện Toán Đám Mây",
      desc: "Sử dụng tài nguyên serverless trên AWS nhằm tự động co giãn và kiểm soát chi phí vận hành.",
      icon: Cpu,
      color: "border-[#00852B] bg-green-50",
    },
    {
      title: "Tự Động Hóa CI/CD",
      desc: "Thiết lập pipeline kiểm thử và xuất bản tự động qua GitHub Actions và AWS Amplify Hosting.",
      icon: Workflow,
      color: "border-[#FE8A18] bg-orange-50",
    },
  ];

  return (
    <section id="about" className="py-16 bg-[#e4dfd3] border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b-3 border-black">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-black text-[#F5CD2F] text-xs font-mono font-bold uppercase mb-2">
              <BookOpen className="w-3.5 h-3.5" />
              <span>HỒ SƠ KỸ THUẬT</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-black uppercase tracking-tight">
              Sổ Tay Hướng Dẫn Kỹ Thuật (Manual #101)
            </h2>
          </div>
          <div className="mt-2 sm:mt-0 text-xs font-mono font-bold text-neutral-700">
            QUY TRÌNH PHÁT TRIỂN 4 GIAI ĐOẠN
          </div>
        </div>

        {/* Personal Bio Box */}
        <div className="mb-10 bg-white border-4 border-black p-6 shadow-[6px_6px_0px_#000000]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b-2 border-black mb-4 gap-2">
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 bg-[#D01012] border border-black inline-block" />
              <h3 className="text-base sm:text-lg font-black uppercase text-black">
                Giới Thiệu Bản Thân (About Me)
              </h3>
            </div>
            <span className="text-xs font-mono font-bold bg-[#F5CD2F] text-black px-2.5 py-1 border-2 border-black w-fit">
              KỸ SƯ NỀN TẢNG DỮ LIỆU
            </span>
          </div>
          <p className="text-sm sm:text-base text-neutral-800 font-medium leading-relaxed bg-neutral-50 p-4 border-2 border-black/40">
            {profile.bio}
          </p>
        </div>

        {/* Assembly Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {assemblySteps.map((stepItem) => {
            const colors = ["red", "yellow", "blue", "green"] as const;
            const cardColor = colors[stepItem.step - 1] || "red";

            return (
              <LegoCard
                key={stepItem.step}
                headerColor={cardColor}
                title={`BƯỚC 0${stepItem.step}`}
                badge="STAGE"
                className="h-full"
              >
                <div className="space-y-3">
                  <h4 className="font-extrabold text-base text-neutral-900 leading-snug">
                    {stepItem.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                    {stepItem.content}
                  </p>
                  <div className="pt-2 flex items-center gap-1.5 text-xs font-bold text-black border-t border-neutral-200">
                    <CheckCircle2 className="w-4 h-4 text-[#00852B]" />
                    <span>Tiêu chuẩn hoàn tất</span>
                  </div>
                </div>
              </LegoCard>
            );
          })}
        </div>

        {/* Principles Section */}
        <div className="bg-white border-4 border-black p-6 sm:p-8 shadow-[6px_6px_0px_#000000]">
          <h3 className="text-lg sm:text-xl font-black uppercase text-black mb-6 flex items-center gap-2">
            <span className="w-4 h-4 bg-[#D01012] inline-block border border-black" />
            <span>Tiêu Chuẩn Thiết Kế & Xây Dựng Ứng Dụng</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {principles.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className={`p-4 border-3 border-black ${item.color} shadow-[3px_3px_0px_#000000] flex flex-col justify-between`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <IconComp className="w-5 h-5 text-black" />
                      <span className="text-[10px] font-mono font-bold text-neutral-600">
                        SPEC #{idx + 1}
                      </span>
                    </div>
                    <div className="font-extrabold text-sm text-black mb-1.5 uppercase">
                      {item.title}
                    </div>
                    <div className="text-xs text-neutral-700 leading-normal">
                      {item.desc}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

