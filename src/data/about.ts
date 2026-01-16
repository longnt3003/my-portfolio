import type { IconType } from "react-icons";
import { FaBullseye, FaBookOpen, FaGlobe } from "react-icons/fa";

export interface Vision {
  icon: IconType;
  title: string;
  description: string;
}

export interface TimelineItem {
  date: string;
  title: string;
  subtitle?: string;
  type: string;
}

export const visions: Vision[] = [
  {
    icon: FaBullseye,
    title: "Impactful Development",
    description:
      "To become a developer who builds impactful web applications, combining creativity with technical expertise.",
  },
  {
    icon: FaBookOpen,
    title: "Continuous Learning",
    description:
      "To continuously learn and adapt, embracing new technologies and solving complex problems with innovative solutions.",
  },
  {
    icon: FaGlobe,
    title: "Global Contribution",
    description:
      "To contribute to meaningful projects that improve lives and inspire others in the tech community.",
  },
];

export const educationTimeline: TimelineItem[] = [
  {
    date: "2018 - 2021",
    title: "BTEC FPT International College",
    subtitle: "Diploma in IT",
    type: "Education",
  },
  {
    date: "2022 - 2024",
    title: "University of Greenwich",
    subtitle: "Top-Up Degree Program",
    type: "Education",
  },
  {
    date: "2024 - ?",
    title: "My journey begins",
    type: "Education",
  },
];

export const careerTimeline: TimelineItem[] = [
  {
    date: "2023",
    title: "ABC Company",
    subtitle: "Internship",
    type: "Career",
  },
  {
    date: "2024",
    title: "XYZ Tech",
    subtitle: "Junior Developer",
    type: "Career",
  },
];
