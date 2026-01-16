export default function Skills() {
  const skills = [
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

  return (
    <section id="skills" className="bg-[#1b1f24] text-white py-20 px-6">
      <h2 className="text-center text-6xl font-semibold tracking-wide mb-12">
        My <span className="text-[#13bbff]">Skills</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {skills.map((s, i) => (
          <div
            key={i}
            className="bg-[#22282f] rounded-xl p-8 shadow-lg hover:shadow-[0_0_20px_#13bbff] transition-transform hover:scale-101 duration-300 ease-out"
          >
            <h3 className="text-2xl font-bold text-[#13bbff] mb-4">
              {s.category}
            </h3>
            <ul className="space-y-2 text-gray-300">
              {s.items.map((item, j) => (
                <li key={j} className="flex items-start gap-2">
                  <span className="text-[#13bbff]">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
