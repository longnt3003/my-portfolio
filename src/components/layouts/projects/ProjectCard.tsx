import { FaGithub } from "react-icons/fa";
import { type Project } from "../../../data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const typeBadge = (type: Project["type"]) => {
    switch (type) {
      case "featured":
        return "Featured";
      case "professional":
        return "Professional";
      case "academic":
        return "Academic";
    }
  };

  return (
    <div className="h-full px-2 md:px-4 py-4 md:py-6">
      <div className="h-full rounded-2xl hover:shadow-[0_0_20px_#13bbff] transition-transform hover:scale-101 duration-300 ease-out">
        <div className="flex h-full min-h-105 flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#1b1f24]">
          <img
            src={project.image}
            alt={project.title}
            className="h-32 md:h-40 w-full object-cover"
          />
          <div className="flex flex-1 flex-col p-4 md:p-6">
            <span className="mb-2 md:mb-3 w-fit rounded-full bg-[#13bbff] px-3 py-1 text-xs font-semibold text-[#1b1f24]">
              {typeBadge(project.type)}
            </span>
            <h3 className="mb-2 text-lg md:text-xl font-bold text-[#13bbff]">
              {project.title}
            </h3>
            <p className="mb-3 md:mb-4 text-sm leading-relaxed text-gray-300">
              {project.description}
            </p>
            <div className="mb-3 md:mb-4 flex flex-wrap gap-2">
              {project.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="rounded-full bg-[#13bbff]/20 px-3 py-1 text-xs md:text-sm text-[#13bbff]"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-auto">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#13bbff] hover:underline"
                >
                  <FaGithub /> GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
