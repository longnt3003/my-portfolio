"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import VisionCard from "../components/layouts/about/VisionCard";
import Timeline from "../components/layouts/about/Timeline";
import { visions, educationTimeline, careerTimeline } from "../data/about";

export default function About() {
  const [tab, setTab] = useState<"education" | "career">("education");
  const [direction, setDirection] = useState(0);

  const timeline = tab === "education" ? educationTimeline : careerTimeline;

  const onSwitch = (next: "education" | "career") => {
    if (tab === "education" && next === "career") setDirection(1);
    if (tab === "career" && next === "education") setDirection(-1);
    setTab(next);
  };

  const swipeVariants = {
    initial: (dir: number) => ({ opacity: 0, x: dir > 0 ? 200 : -200 }),
    animate: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -200 : 200 }),
  };

  return (
    <section
      id="about"
      className="bg-[#22282f] text-white md:h-screen flex flex-col md:justify-center"
    >
      <div className="py-10 md:py-12">
        <h2 className="text-center text-3xl md:text-6xl font-semibold">
          About <span className="text-[#13bbff]">Me</span>
        </h2>
      </div>

      <motion.div
        layout
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="grid gap-10 md:gap-12 max-w-6xl mx-auto px-4 md:grid-cols-2 md:px-6 flex-1"
      >
        {/* Left: My Visions */}
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <h3 className="text-xl md:text-3xl font-semibold mb-6 md:mb-8 text-[#13bbff]">
            My Visions
          </h3>
          <div className="space-y-4 md:space-y-6">
            {visions.map((v, i) => (
              <VisionCard key={i} vision={v} />
            ))}
          </div>
        </motion.div>

        {/* Right: Tabs + Timeline */}
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="flex flex-col"
        >
          <div className="flex border-b border-gray-600 mb-6 md:mb-8">
            <button
              onClick={() => onSwitch("education")}
              className={`flex-1 text-center px-3 py-1 text-sm md:px-6 md:py-2 md:text-base -mb-px border-b-2 transition-colors ${
                tab === "education"
                  ? "border-[#13bbff] text-[#13bbff]"
                  : "border-transparent text-gray-400 hover:text-white"
              }`}
            >
              Education
            </button>
            <button
              onClick={() => onSwitch("career")}
              className={`flex-1 text-center px-3 py-1 text-sm md:px-6 md:py-2 md:text-base -mb-px border-b-2 transition-colors ${
                tab === "career"
                  ? "border-[#13bbff] text-[#13bbff]"
                  : "border-transparent text-gray-400 hover:text-white"
              }`}
            >
              Career
            </button>
          </div>

          <div>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={tab}
                custom={direction}
                variants={swipeVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <Timeline items={timeline} type={tab} />
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
