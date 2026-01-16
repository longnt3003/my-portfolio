import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="grid grid-cols-1 md:grid-cols-2 min-h-screen text-white pt-16 font-fira"
    >
      <div className="relative h-screen">
        <img
          src="/img/bg.png"
          alt="profile background"
          className="absolute inset-0 w-full h-full object-cover object-[center_10%]"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      <div className="flex flex-col justify-center px-8 md:px-16 bg-[#1b1f24]">
        <h3 className="text-2xl md:text-3xl font-semibold mb-2 text-gray-300">
          Hello world!
        </h3>
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
          I'm <span className="text-[#13bbff]">Nguyen Thanh Long</span>,
          <br />a Web Developer
        </h1>
        <p className="mt-4 text-lg md:text-xl font-normal text-gray-400">
          Learning to grow — from zero to hero
        </p>

        {/* Social */}
        <div className="flex gap-4 mt-6">
          <a
            href="https://www.facebook.com/Longnt2k"
            className="w-12 h-12 flex items-center justify-center border-2 border-[#13bbff] rounded-full text-[#13bbff] hover:bg-[#13bbff] hover:text-[#1b1f24] transition duration-300 ease-in-out hover:scale-110"
          >
            <FaFacebook className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/2kThanhLong"
            className="w-12 h-12 flex items-center justify-center border-2 border-[#13bbff] rounded-full text-[#13bbff] hover:bg-[#13bbff] hover:text-[#1b1f24] transition duration-300 ease-in-out hover:scale-110"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/nguyễn-long-473a0631a"
            className="w-12 h-12 flex items-center justify-center border-2 border-[#13bbff] rounded-full text-[#13bbff] hover:bg-[#13bbff] hover:text-[#1b1f24] transition duration-300 ease-in-out hover:scale-110"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
        </div>

        {/* CV button */}
        <a
          href="/CV.pdf"
          className="self-start inline-block mt-6 px-6 py-3 bg-[#13bbff] text-[#1b1f24] font-semibold rounded-4xl border-2 border-[#13bbff] hover:bg-transparent hover:text-[#13bbff] hover:shadow-[0_0_10px_#13bbff] transition duration-200 ease-in-out hover:scale-102"
        >
          View CV
        </a>
      </div>
    </section>
  );
}
