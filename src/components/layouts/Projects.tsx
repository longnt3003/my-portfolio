"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaGithub } from "react-icons/fa";

interface Project {
  title: string;
  type: "featured" | "professional" | "academic";
  description: string;
  tech: string[];
  image: string;
  github?: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Project 1",
      type: "featured",
      description:
        "A sample featured project showcasing modern full-stack development.",
      tech: ["ASP.NET Core", "React", "TailwindCSS"],
      image: "https://placehold.co/600x400?text=Project+1",
      github: "https://github.com/yourusername/project1",
    },
    {
      title: "Project 2",
      type: "professional",
      description:
        "Professional experience maintaining enterprise legacy systems.",
      tech: ["ASP.NET Web Forms", "C#", "MSSQL"],
      image: "https://placehold.co/600x400?text=Project+2",
      github: "https://github.com/yourusername/project2",
    },
    {
      title: "Project 3",
      type: "academic",
      description:
        "Academic project built with ASP.NET MVC to practice layered architecture.",
      tech: ["ASP.NET MVC", "C#", "MSSQL"],
      image: "https://placehold.co/600x400?text=Project+3",
      github: "https://github.com/yourusername/project3",
    },
    {
      title: "Project 4",
      type: "featured",
      description: "Sample portfolio website built with React and TailwindCSS.",
      tech: ["React", "TailwindCSS"],
      image: "https://placehold.co/600x400?text=Project+4",
      github: "https://github.com/yourusername/project4",
    },
    {
      title: "Project 5",
      type: "academic",
      description: "Task management app with CRUD features and responsive UI.",
      tech: ["React", "Node.js", "MongoDB"],
      image: "https://placehold.co/600x400?text=Project+5",
      github: "https://github.com/yourusername/project5",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

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
    <section id="projects" className="bg-[#22282f] py-24 px-6 text-white">
      <h2 className="mb-14 text-center text-6xl font-semibold tracking-wide">
        My <span className="text-[#13bbff]">Projects</span>
      </h2>

      <Slider {...settings} className="mx-auto max-w-6xl">
        {projects.map((p, i) => (
          <div key={i} className="px-4 py-6 h-full">
            <div className="h-full rounded-2xl hover:shadow-[0_0_20px_#13bbff] transition-transform hover:scale-101 duration-300 ease-out">
              <div className="flex h-full min-h-105 flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#1b1f24]">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-40 w-full object-cover"
                />

                <div className="flex flex-1 flex-col p-6">
                  <span className="mb-3 w-fit rounded-full bg-[#13bbff] px-3 py-1 text-xs font-semibold text-[#1b1f24]">
                    {typeBadge(p.type)}
                  </span>

                  <h3 className="mb-2 text-xl font-bold text-[#13bbff]">
                    {p.title}
                  </h3>

                  <p className="mb-4 text-sm leading-relaxed text-gray-300">
                    {p.description}
                  </p>

                  <div className="mb-4 flex flex-wrap gap-2">
                    {p.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="rounded-full bg-[#13bbff]/20 px-3 py-1 text-xs text-[#13bbff]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto">
                    {p.github && (
                      <a
                        href={p.github}
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
        ))}
      </Slider>
    </section>
  );
}
