"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { LegoButton } from "./LegoButton";
import { LegoCard } from "./LegoCard";
import { Send, Mail, MapPin, CheckCircle, MessageSquare } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

export function ContactSection() {
  const { profile } = portfolioData;
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 bg-[#e6e1d4] border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b-3 border-black">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#D01012] text-white text-xs font-mono font-bold uppercase mb-2">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>KÊNH TIẾP NHẬN THÔNG TIN</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-black uppercase tracking-tight">
              Liên Hệ & Trao Đổi Kỹ Thuật
            </h2>
          </div>
          <div className="mt-2 sm:mt-0 text-xs font-mono font-bold text-neutral-700">
            PHẢN HỒI TRONG 24H LÀM VIỆC
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-5">
            <LegoCard
              headerColor="blue"
              title="Thông Tin Kỹ Thuật Viên"
              badge="DIRECT CONTACT"
            >
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3 bg-neutral-50 border-2 border-black">
                  <Mail className="w-5 h-5 text-[#D01012] mt-0.5 shrink-0" />
                  <div>
                    <div className="text-[11px] font-mono font-bold uppercase text-neutral-600">
                      Địa chỉ Hòm thư điện tử:
                    </div>
                    <a
                      href={`mailto:${profile.email}`}
                      className="text-sm font-bold text-black hover:underline"
                    >
                      {profile.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-neutral-50 border-2 border-black">
                  <MapPin className="w-5 h-5 text-[#00852B] mt-0.5 shrink-0" />
                  <div>
                    <div className="text-[11px] font-mono font-bold uppercase text-neutral-600">
                      Khu vực làm việc:
                    </div>
                    <div className="text-sm font-bold text-black">
                      {profile.location}
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-2">
                  <div className="text-xs font-mono font-bold uppercase text-neutral-700 mb-2">
                    Các liên kết mã nguồn & hồ sơ:
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <LegoButton
                      variant="black"
                      size="sm"
                      href={profile.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                    </LegoButton>

                    <LegoButton
                      variant="blue"
                      size="sm"
                      href={profile.linkedin}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <LinkedinIcon className="w-3.5 h-3.5" />
                      <span>LinkedIn</span>
                    </LegoButton>
                  </div>
                </div>
              </div>
            </LegoCard>

            {/* AWS Hosting Notice */}
            <div className="p-4 bg-[#1E1E1E] text-white border-3 border-black shadow-[4px_4px_0px_#000000]">
              <div className="text-xs font-mono font-bold text-[#FE8A18] uppercase mb-1">
                Hạ tầng triển khai:
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed font-mono">
                Ứng dụng này được xây dựng bằng Next.js 15 và cấu hình xuất bản tự động trên AWS Amplify Hosting thông qua file amplify.yml.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <LegoCard
              headerColor="yellow"
              title="Biểu Mẫu Gửi Thông Tin Dự Án"
              badge="FORM #01"
            >
              {isSubmitted ? (
                <div className="p-8 text-center space-y-4">
                  <div className="w-14 h-14 bg-[#00852B] text-white mx-auto flex items-center justify-center border-3 border-black shadow-[4px_4px_0px_#000000]">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-black text-black uppercase">
                    Thông tin đã được ghi nhận
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-700">
                    Cảm ơn bạn đã gửi liên hệ. Phản hồi sẽ được gửi lại qua địa chỉ email của bạn trong thời gian sớm nhất.
                  </p>
                  <LegoButton
                    variant="yellow"
                    size="sm"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: "", email: "", subject: "", message: "" });
                    }}
                  >
                    Gửi tin nhắn khác
                  </LegoButton>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase text-neutral-800 mb-1">
                        Họ và tên người gửi: *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Nguyễn Văn A"
                        className="w-full px-3 py-2 border-3 border-black text-xs font-bold text-black focus:outline-none focus:bg-yellow-50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold uppercase text-neutral-800 mb-1">
                        Địa chỉ Email liên hệ: *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="email@example.com"
                        className="w-full px-3 py-2 border-3 border-black text-xs font-bold text-black focus:outline-none focus:bg-yellow-50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase text-neutral-800 mb-1">
                      Chủ đề công việc / dự án:
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      placeholder="Trao đổi về dự án Next.js & AWS Amplify"
                      className="w-full px-3 py-2 border-3 border-black text-xs font-bold text-black focus:outline-none focus:bg-yellow-50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase text-neutral-800 mb-1">
                      Nội dung chi tiết: *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Mô tả yêu cầu kỹ thuật, phạm vi công việc hoặc thời gian triển khai..."
                      className="w-full px-3 py-2 border-3 border-black text-xs font-bold text-black focus:outline-none focus:bg-yellow-50 resize-y"
                    />
                  </div>

                  <div className="pt-2">
                    <LegoButton
                      variant="red"
                      size="md"
                      type="submit"
                      className="w-full sm:w-auto"
                    >
                      <Send className="w-4 h-4" />
                      <span>Xác Nhận Gửi Tin Nhắn</span>
                    </LegoButton>
                  </div>
                </form>
              )}
            </LegoCard>
          </div>
        </div>
      </div>
    </section>
  );
}
