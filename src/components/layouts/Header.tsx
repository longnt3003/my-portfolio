"use client";

import { useState, useEffect } from "react";
import { navLinks } from "../../data/nav";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const handleScroll = () => {
      let current = "home";
      sections.forEach((sec) => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute("id");
        if (id && top >= offset && top < offset + height) current = id;
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
    setOpen(false);
  };

  const linkClass = (id: string) =>
    `relative inline-block pb-1 transition-all duration-300 ease-in-out ${
      activeSection === id
        ? "text-[#13bbff] after:w-full"
        : "text-white hover:text-[#13bbff] after:w-0 hover:after:w-full"
    } after:block after:h-[2px] after:bg-[#13bbff] after:transition-all after:duration-300 after:ease-in-out after:mt-0.5`;

  return (
    <header className="fixed top-0 left-0 w-full bg-[#1b1f24] border-b border-gray-700 z-50">
      <div className="flex items-center justify-between px-6 py-4">
        <button
          onClick={() => handleScrollTo("home")}
          className="text-2xl font-extrabold transition-all duration-300 ease-in-out hover:[text-shadow:0_0_15px_#13bbff]"
        >
          <span className="text-white">LongNT</span>
          <span className="text-[#13bbff]">.Dev</span>
        </button>
        <button
          className="text-[#13bbff] text-2xl md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
        <nav
          className={`absolute right-0 top-full w-1/2 bg-black/80 rounded-bl-2xl backdrop-blur-lg md:static md:w-auto md:bg-transparent md:rounded-none md:backdrop-blur-0 flex flex-col gap-4 p-4 md:flex md:flex-row md:gap-6 md:p-0 transform transition-transform duration-300 ease-in-out ${
            open ? "translate-x-0" : "translate-x-full"
          } md:translate-x-0 md:transform-none`}
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleScrollTo(link.id)}
              className={linkClass(link.id)}
            >
              {link.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
