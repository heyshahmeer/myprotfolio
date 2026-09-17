"use client";

import CombinedHero from "./components/CombinedHero";
import CapabilitiesSection from "./components/CapabilitiesSection";
import ProjectsSection from "./components/ProjectsSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";

import AnimatedBackground from "./components/AnimatedBackground";
import ParticleEffect from "./components/ParticleEffect";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans selection:bg-blue-500/50">
      {/* Merged Hero Section with Shared Fixed Background */}
      <div
        className="relative bg-fixed bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: "url('/hero_office.png')" }}
      >
        <CombinedHero />
        <ParticleEffect />
      </div>

      <AnimatedBackground />
      <CapabilitiesSection id="capabilities" />
      <ProjectsSection id="project" />

      <AboutSection id="about" />
      <ContactSection id="contact" />
    </main>
  );
}
