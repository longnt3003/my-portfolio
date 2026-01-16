"use client";

import SocialLinks from "../components/common/SocialLinks";
import { heroData } from "../data/hero";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen pt-16 md:grid md:grid-cols-2 font-fira text-white"
    >
      {/* Background */}
      <div className="relative h-full">
        <img
          src={heroData.background}
          alt="profile background"
          className="absolute inset-0 h-full w-full object-cover object-[center_10%]"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="absolute inset-0 z-10 flex flex-col justify-start pt-[53vh] px-6 text-center md:static md:z-auto md:justify-center md:pt-0 md:px-16 md:text-left md:bg-[#1b1f24]">
        <div className="rounded-2xl bg-black/50 p-4 md:bg-transparent md:p-0">
          <h3 className="mb-2 text-lg font-semibold text-gray-300 md:text-3xl">
            {heroData.greeting}
          </h3>
          <h1 className="text-2xl font-semibold leading-tight md:text-5xl">
            I'm <span className="text-[#13bbff]">{heroData.name}</span>,
            <br /> a {heroData.role}
          </h1>
          <p className="mt-4 text-sm text-gray-400 md:text-xl">
            {heroData.tagline}
          </p>
          <SocialLinks className="mt-6 justify-center md:justify-start" />

          {/* CV Button */}
          <a
            href={heroData.cvLink}
            className="mt-6 inline-block self-center md:self-start rounded-4xl border-2 border-[#13bbff] bg-[#13bbff] px-4 py-2 font-semibold text-[#1b1f24] transition-all duration-200 hover:scale-102 hover:bg-transparent hover:text-[#13bbff] hover:shadow-[0_0_10px_rgba(19,187,255,0.9)] md:px-6 md:py-3"
          >
            View CV
          </a>
        </div>
      </div>
    </section>
  );
}
