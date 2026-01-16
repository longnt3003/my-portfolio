import { useState, useEffect } from "react";

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
        if (id && top >= offset && top < offset + height) {
          current = id;
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const headerOffset = 80;
    const offsetPosition = el.offsetTop - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

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
        {/* Logo */}
        <button
          onClick={() => handleScrollTo("home")}
          className="text-2xl font-extrabold transition-all duration-300 ease-in-out hover:[text-shadow:0_0_15px_#13bbff]"
        >
          <span className="text-white">LongNT</span>
          <span className="text-[#13bbff]">.Dev</span>
        </button>

        {/* Mobile toggle */}
        <button
          className="text-[#13bbff] text-2xl md:hidden"
          onClick={() => setOpen(!open)}
        >
          <i className={`fa-solid ${open ? "fa-x" : "fa-bars"}`}></i>
        </button>

        {/* Navigation */}
        <nav
          className={`md:flex md:gap-6 ${
            open ? "block" : "hidden"
          } md:block bg-black/80 md:bg-transparent md:static absolute right-0 top-full w-1/2 md:w-auto rounded-bl-2xl md:rounded-none backdrop-blur-lg md:backdrop-blur-0`}
        >
          <button onClick={() => handleScrollTo("home")} className={linkClass("home")}>Home</button>
          <button onClick={() => handleScrollTo("about")} className={linkClass("about")}>About</button>
          <button onClick={() => handleScrollTo("skills")} className={linkClass("skills")}>Skills</button>
          <button onClick={() => handleScrollTo("projects")} className={linkClass("projects")}>Projects</button>
          <button onClick={() => handleScrollTo("contact")} className={linkClass("contact")}>Contact</button>
        </nav>
      </div>
    </header>
  );
}
