"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ProjectCard from "../components/layouts/projects/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 1, arrows: false } },
      { breakpoint: 1024, settings: { slidesToShow: 2, arrows: true } },
    ],
  };

  return (
    <section
      id="projects"
      className="bg-[#22282f] py-10 md:py-24 px-4 md:px-6 text-white"
    >
      <h2 className="mb-6 md:mb-14 text-center text-3xl md:text-6xl font-semibold tracking-wide">
        My <span className="text-[#13bbff]">Projects</span>
      </h2>
      <Slider {...settings} className="mx-auto max-w-6xl">
        {projects.map((p, i) => (
          <ProjectCard key={i} project={p} />
        ))}
      </Slider>
    </section>
  );
}
