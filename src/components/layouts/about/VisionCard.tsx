import { type Vision } from "../../../data/about";

export default function VisionCard({ vision }: { vision: Vision }) {
  const Icon = vision.icon;
  return (
    <div className="bg-[#2a2f36] p-4 md:p-5 rounded-lg shadow-md">
      <div className="flex items-center gap-3 mb-2">
        <Icon className="text-[#13bbff] text-xl md:text-2xl" />
        <h4 className="text-base md:text-lg font-semibold text-white">
          {vision.title}
        </h4>
      </div>
      <p className="text-gray-300 text-sm">{vision.description}</p>
    </div>
  );
}
