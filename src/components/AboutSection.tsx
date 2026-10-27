"use client";

import React from "react";
import { Box, Cpu, Workflow, ShieldCheck } from "lucide-react";

export function AboutSection() {
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

