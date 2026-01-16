export interface Project {
  title: string;
  type: "featured" | "professional" | "academic";
  description: string;
  tech: string[];
  image: string;
  github?: string;
}

export const projects: Project[] = [
  {
    title: "Project 1",
    type: "featured",
    description: "A sample featured project showcasing modern full-stack development.",
    tech: ["ASP.NET Core", "React", "TailwindCSS"],
    image: "https://placehold.co/600x400?text=Project+1",
    github: "https://github.com/yourusername/project1",
  },
  {
    title: "Project 2",
    type: "professional",
    description: "Professional experience maintaining enterprise legacy systems.",
    tech: ["ASP.NET Web Forms", "C#", "MSSQL"],
    image: "https://placehold.co/600x400?text=Project+2",
    github: "https://github.com/yourusername/project2",
  },
  {
    title: "Project 3",
    type: "academic",
    description: "Academic project built with ASP.NET MVC to practice layered architecture.",
    tech: ["ASP.NET MVC", "C#", "MSSQL"],
    image: "https://placehold.co/600x400?text=Project+3",
    github: "https://github.com/yourusername/project3",
  },
  {
    title: "Project 4",
    type: "featured",
    description: "Sample portfolio website built with React and TailwindCSS.",
    tech: ["React", "TailwindCSS"],
    image: "https://placehold.co/600x400?text=Project+4",
    github: "https://github.com/yourusername/project4",
  },
  {
    title: "Project 5",
    type: "academic",
    description: "Task management app with CRUD features and responsive UI.",
    tech: ["React", "Node.js", "MongoDB"],
    image: "https://placehold.co/600x400?text=Project+5",
    github: "https://github.com/yourusername/project5",
  },
];
