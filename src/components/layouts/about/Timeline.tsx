import { type TimelineItem } from "../../../data/about";
import { FaHistory, FaBriefcase } from "react-icons/fa";

export default function Timeline({
  items,
  type,
}: {
  items: TimelineItem[];
  type: "education" | "career";
}) {
  return (
    <div className="relative border-l-2 border-[#13bbff] pl-12 md:pl-16">
      {items.map((item, i) => (
        <div key={i} className="mb-8 md:mb-10 relative">
          {/* Icon */}
          <div className="absolute -left-10 md:-left-12 top-0 w-7 h-7 md:w-9 md:h-9 rounded-full bg-[#13bbff] flex items-center justify-center shadow-[0_0_6px_rgba(19,187,255,0.3)]">
            {type === "education" ? (
              <FaHistory className="text-white text-sm md:text-base" />
            ) : (
              <FaBriefcase className="text-white text-sm md:text-base" />
            )}
          </div>

          {/* Content */}
          <div>
            <div className="text-[#13bbff] font-bold text-sm md:text-base">
              {item.date}
            </div>
            <h3 className="text-base md:text-lg font-semibold">{item.title}</h3>
            {item.subtitle && (
              <span className="block text-gray-400 text-xs md:text-sm">
                {item.subtitle}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
