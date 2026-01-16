"use client";

import SocialLinks from "../common/SocialLinks";
import { navLinks } from "../../data/nav";

export default function Footer() {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const headerOffset = 80;
    const offsetPosition = el.offsetTop - headerOffset;
    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#22282f] pt-12 pb-6 px-6 text-white">
      <div className="mx-auto max-w-6xl flex flex-col items-center gap-6">
        {/* Social */}
        <SocialLinks className="gap-6" />

        {/* Navigation */}
        <ul className="flex flex-wrap justify-center gap-6 text-sm text-gray-300 md:gap-8 md:text-base">
          {navLinks
            .filter((link) => link.id !== "home")
            .map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleScrollTo(link.id)}
                  className="relative transition hover:text-[#13bbff] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-[#13bbff] after:transition-all hover:after:w-full"
                >
                  {link.label}
                </button>
              </li>
            ))}
        </ul>
      </div>
      <hr className="w-full border-t border-white/10 mt-6" />
      <p className="text-center text-xs text-gray-400 mt-4 md:text-sm">
        &copy; Nguyen Thanh Long | All Rights Reserved.
      </p>
    </footer>
  );
}
