"use client";

import { skills } from "../data/skills";
import SkillCard from "../components/layouts/skills/SkillCard";

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-[#1b1f24] text-white py-16 md:py-24 px-4 md:px-6"
    >
      <h2 className="text-center text-3xl md:text-6xl font-semibold tracking-wide mb-6 md:mb-12">
        My <span className="text-[#13bbff]">Skills</span>
      </h2>

      <div className="grid gap-4 md:grid-cols-2 md:gap-8 max-w-6xl mx-auto">
        {skills.map((s, i) => (
          <SkillCard key={i} skill={s} />
        ))}
      </div>
    </section>
  );
}
