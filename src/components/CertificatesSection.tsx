"use client";

import React from "react";
import Image from "next/image";
import { portfolioData, CertificateItem } from "@/data/portfolioData";
import { LegoStudRow } from "./LegoStudRow";
import { LegoButton } from "./LegoButton";
import { Award, ExternalLink, Calendar, ShieldCheck } from "lucide-react";

export function CertificatesSection() {
  const { certificates } = portfolioData;

  const colorConfig: Record<
    CertificateItem["color"],
    { bg: string; text: string; hex: string }
  > = {
    red: { bg: "bg-[#D01012]", text: "text-white", hex: "#D01012" },
    blue: { bg: "bg-[#0055BF]", text: "text-white", hex: "#0055BF" },
    yellow: { bg: "bg-[#F5CD2F]", text: "text-black", hex: "#F5CD2F" },
    green: { bg: "bg-[#00852B]", text: "text-white", hex: "#00852B" },
    orange: { bg: "bg-[#FE8A18]", text: "text-white", hex: "#FE8A18" },
  };

  return (
    <section id="certificates" className="py-16 bg-[#e3ded2] border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b-3 border-black">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#FE8A18] text-white text-xs font-mono font-bold uppercase mb-2 border border-black shadow-[2px_2px_0px_#000000]">
              <Award className="w-3.5 h-3.5" />
              <span>CHỨNG NHẬN CHUYÊN MÔN</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-black uppercase tracking-tight">
              Bảng Trưng Bày Chứng Chỉ (Certificates)
            </h2>
          </div>
          <div className="mt-2 sm:mt-0 text-xs font-mono font-bold text-neutral-700">
            TỔNG SỐ: {certificates.length} CHỨNG CHỈ ĐÃ XÁC THỰC
          </div>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert) => {
            const conf = colorConfig[cert.color];

            return (
              <div
                key={cert.id}
                className="flex flex-col bg-white relative mt-3 border-4 border-black rounded-md shadow-[6px_6px_0px_#000000] hover:-translate-y-1 hover:shadow-[8px_8px_0px_#000000] transition-all"
              >
                {/* Top Studs Header */}
                <div className="lego-studs-top">
                  <LegoStudRow count={8} colorHex={conf.hex} size="sm" />
                </div>

                {/* Header Bar */}
                <div
                  className={`flex items-center justify-between px-4 py-2.5 border-b-3 border-black lego-brick-top ${conf.bg} ${conf.text}`}
                >
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4" />
                    <span className="font-mono font-black text-xs uppercase tracking-wide">
                      {cert.badgeNumber}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono font-bold bg-black text-white px-2 py-0.5 border border-white/60">
                    VERIFIED
                  </span>
                </div>

                {/* Body Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    {/* Badge Image Display */}
                    {cert.badgeImage && (
                      <div className="flex items-center justify-center p-3 mb-3 bg-neutral-100 border-2 border-black shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]">
                        <Image
                          src={cert.badgeImage}
                          alt={cert.name}
                          width={128}
                          height={128}
                          className="w-32 h-32 object-contain drop-shadow-[4px_4px_0px_rgba(0,0,0,0.9)] transition-transform hover:scale-105"
                        />
                      </div>
                    )}

                    {/* Issuer */}
                    <div className="text-[11px] font-mono font-bold uppercase text-neutral-600 mb-1">
                      Đơn vị cấp: {cert.issuer}
                    </div>

                    {/* Certificate Name with fixed height for even alignment */}
                    <div className="min-h-[72px] flex items-start mb-3">
                      <h3 className="text-base font-black text-black uppercase leading-snug">
                        {cert.name}
                      </h3>
                    </div>

                    {/* Metadata Table */}
                    <div className="space-y-1.5 p-3 bg-neutral-50 border-2 border-black text-xs font-mono">
                      <div className="flex items-center justify-between">
                        <span className="text-neutral-600 flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>Ngày cấp:</span>
                        </span>
                        <span className="font-bold text-black">{cert.issuedDate}</span>
                      </div>
                    </div>
                  </div>

                  {/* Verification Link */}
                  {cert.credentialUrl && (
                    <div className="pt-3 border-t-2 border-black/20">
                      <LegoButton
                        variant={cert.color}
                        size="sm"
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Xác Minh Chứng Chỉ</span>
                      </LegoButton>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
