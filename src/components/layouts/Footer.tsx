import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

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
        <div className="flex gap-6">
          <a href="https://www.facebook.com/Longnt2k" target="_blank" rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#13bbff] text-[#13bbff] transition-all duration-300 hover:bg-[#13bbff] hover:text-[#1b1f24] hover:shadow-[0_0_25px_rgba(19,187,255,0.8)] hover:scale-110">
            <FaFacebookF size={20} />
          </a>
          <a href="https://github.com/2kThanhLong" target="_blank" rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#13bbff] text-[#13bbff] transition-all duration-300 hover:bg-[#13bbff] hover:text-[#1b1f24] hover:shadow-[0_0_25px_rgba(19,187,255,0.8)] hover:scale-110">
            <FaGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/nguy%E1%BB%85n-long-473a0631a" target="_blank" rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#13bbff] text-[#13bbff] transition-all duration-300 hover:bg-[#13bbff] hover:text-[#1b1f24] hover:shadow-[0_0_25px_rgba(19,187,255,0.8)] hover:scale-110">
            <FaLinkedinIn size={20} />
          </a>
        </div>

        <ul className="flex gap-8 text-base text-gray-300">
          <li><button onClick={() => handleScrollTo("about")} className="relative transition hover:text-[#13bbff] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-[#13bbff] after:transition-all hover:after:w-full">About</button></li>
          <li><button onClick={() => handleScrollTo("skills")} className="relative transition hover:text-[#13bbff] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-[#13bbff] after:transition-all hover:after:w-full">Skills</button></li>
          <li><button onClick={() => handleScrollTo("projects")} className="relative transition hover:text-[#13bbff] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-[#13bbff] after:transition-all hover:after:w-full">Projects</button></li>
          <li><button onClick={() => handleScrollTo("contact")} className="relative transition hover:text-[#13bbff] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-[#13bbff] after:transition-all hover:after:w-full">Contact</button></li>
        </ul>
      </div>

      <hr className="w-full border-t border-white/10 mt-6" />

      <p className="text-center text-sm text-gray-400 mt-4">
        &copy; Nguyen Thanh Long | All Rights Reserved.
      </p>
    </footer>
  );
}
