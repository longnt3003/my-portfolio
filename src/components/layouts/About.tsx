import { useState } from "react";
import {
  FaHistory,
  FaBriefcase,
  FaGlobe,
  FaBookOpen,
  FaBullseye,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

interface TimelineItem {
  date: string;
  title: string;
  type: string;
}

export default function AboutMe() {
  const [tab, setTab] = useState<"education" | "career">("education");
  const [direction, setDirection] = useState(0);

  const education: TimelineItem[] = [
    {
      date: "2018 - 2021",
      title: "BTEC FPT International College (Diploma in IT)",
      type: "Education",
    },
    {
      date: "2022 - 2024",
      title: "University of Greenwich (Top-Up Degree Program)",
      type: "Education",
    },
    { date: "2024 - ?", title: "My journey begins", type: "Education" },
  ];

  const career: TimelineItem[] = [
    { date: "2023", title: "Internship at ABC Company", type: "Career" },
    { date: "2024", title: "Junior Developer at XYZ Tech", type: "Career" },
  ];

  const timeline = tab === "education" ? education : career;

  const onSwitch = (next: "education" | "career") => {
    if (tab === "education" && next === "career") setDirection(1);
    if (tab === "career" && next === "education") setDirection(-1);
    setTab(next);
  };

  const swipeVariants = {
    initial: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? 200 : -200,
    }),
    animate: {
      opacity: 1,
      x: 0,
    },
    exit: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? -200 : 200,
    }),
  };

  return (
    <section
      id="about"
      className="bg-[#22282f] text-white min-h-screen flex flex-col"
    >
      <div className="py-12">
        <h2 className="text-center text-6xl font-semibold">
          About <span className="text-[#13bbff]">Me</span>
        </h2>
      </div>

      <motion.div
        layout
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto px-6 flex-1"
      >
        {/* Left: My Visions */}
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <h3 className="text-3xl font-semibold mb-8 text-[#13bbff]">
            My Visions
          </h3>
          <div className="space-y-6">
            <div className="bg-[#2a2f36] p-5 rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-2">
                <FaBullseye className="text-[#13bbff] text-2xl" />
                <h4 className="text-lg font-semibold text-white">
                  Impactful Development
                </h4>
              </div>
              <p className="text-gray-300 text-sm">
                To become a developer who builds impactful web applications,
                combining creativity with technical expertise.
              </p>
            </div>
            <div className="bg-[#2a2f36] p-5 rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-2">
                <FaBookOpen className="text-[#13bbff] text-2xl" />
                <h4 className="text-lg font-semibold text-white">
                  Continuous Learning
                </h4>
              </div>
              <p className="text-gray-300 text-sm">
                To continuously learn and adapt, embracing new technologies and
                solving complex problems with innovative solutions.
              </p>
            </div>
            <div className="bg-[#2a2f36] p-5 rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-2">
                <FaGlobe className="text-[#13bbff] text-2xl" />
                <h4 className="text-lg font-semibold text-white">
                  Global Contribution
                </h4>
              </div>
              <p className="text-gray-300 text-sm">
                To contribute to meaningful projects that improve lives and
                inspire others in the tech community.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right: Tabs + Timeline */}
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="flex flex-col min-h-100"
        >
          <div className="flex border-b border-gray-600 mb-8">
            <button
              onClick={() => onSwitch("education")}
              className={`px-6 py-2 -mb-px border-b-2 transition-colors ${
                tab === "education"
                  ? "border-[#13bbff] text-[#13bbff]"
                  : "border-transparent text-gray-400 hover:text-white"
              }`}
            >
              Education
            </button>
            <button
              onClick={() => onSwitch("career")}
              className={`px-6 py-2 -mb-px border-b-2 transition-colors ${
                tab === "career"
                  ? "border-[#13bbff] text-[#13bbff]"
                  : "border-transparent text-gray-400 hover:text-white"
              }`}
            >
              Career
            </button>
          </div>
          <div className="flex-1">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={tab}
                custom={direction}
                variants={swipeVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="relative border-l-2 border-[#13bbff] pl-16"
              >
                {timeline.map((item, i) => (
                  <div key={i} className="mb-10 relative">
                    <div className="absolute -left-12 top-0 w-9 h-9 rounded-full bg-[#13bbff] flex items-center justify-center shadow-[0_0_6px_rgba(19,187,255,0.3)]">
                      {tab === "education" ? (
                        <FaHistory className="text-white text-base" />
                      ) : (
                        <FaBriefcase className="text-white text-base" />
                      )}
                    </div>
                    <div>
                      <div className="text-[#13bbff] font-bold">
                        {item.date}
                      </div>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <span className="text-gray-400 text-sm">{item.type}</span>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
