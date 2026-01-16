import { type Skills } from "../../../data/skills";

export default function SkillCard({ skill }: { skill: Skills }) {
  return (
    <div className="bg-[#22282f] rounded-xl p-4 md:p-8 shadow-lg hover:shadow-[0_0_20px_#13bbff] transition-transform hover:scale-101 duration-300 ease-out">
      <h3 className="text-lg md:text-2xl font-bold text-[#13bbff] mb-3 md:mb-4">
        {skill.category}
      </h3>
      <ul className="space-y-1 md:space-y-2 text-gray-300 text-sm md:text-base">
        {skill.items.map((item, j) => (
          <li key={j} className="flex items-start gap-2">
            <span className="text-[#13bbff]">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
