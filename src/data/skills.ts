export interface Skills {
  category: string;
  items: string[];
}

export const skills: Skills[] = [
  {
    category: "Backend Development",
    items: [
      "C#/.NET (Web Forms, MVC, Core Web API)",
      "RESTful API design",
      "Bug fixing & business logic implementation",
    ],
  },
  {
    category: "Database Management",
    items: [
      "Microsoft SQL Server (MSSQL)",
      "Queries, joins, stored procedures",
      "Data integrity & optimization",
    ],
  },
  {
    category: "Frontend Development",
    items: [
      "React + TailwindCSS",
      "Basic UI implementation in ASP.NET Web Forms",
      "API integration",
    ],
  },
  {
    category: "Collaboration & Problem Solving",
    items: [
      "Git, TFS (Azure DevOps)",
      "Working with large legacy codebases",
      "Debugging & adapting existing logic",
    ],
  },
];
