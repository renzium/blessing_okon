"use client";

import content from "../data/portfolio.json";
import useScrollY from "../hooks/useScrollY";

import BackgroundGlows from "./BackgroundGlows";
import HeroSection from "./HeroSection";
import SkillsSection from "./SkillsSection";
import ExperienceSection from "./ExperienceSection";
import ToolsSection from "./ToolsSection";
import EducationSection from "./EducationSection";
import FooterSection from "./FooterSection";

export default function ParallaxCarousel() {
  const scrollY = useScrollY();
  const { site, hero, skills, experience, tools, education, footer } = content;

  return (
    <div className="relative w-full bg-[#030712] text-white selection:bg-emerald-500/30 overflow-x-hidden">
      <BackgroundGlows scrollY={scrollY} />

      <div className="relative z-10">
        <HeroSection data={hero} email={site.email} scrollY={scrollY} />
        <SkillsSection data={skills} />
        <ExperienceSection data={experience} scrollY={scrollY} />
        <ToolsSection data={tools} />
        <EducationSection data={education} />
      </div>

      <FooterSection data={footer} email={site.email} />
    </div>
  );
}
