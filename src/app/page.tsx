import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { CertificatesSection } from "@/components/CertificatesSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { SplashScreen } from "@/components/SplashScreen";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#ece8df] text-black">
      <SplashScreen />
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <CertificatesSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
