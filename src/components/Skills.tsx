const skills = ["React", "Angular", "ASP.NET MVC", "TypeScript", "JavaScript", "Tailwind CSS", "SQL", "Git"];

const Skills = () => {
  return (
    <section data-aos="fade-up" className="py-16 px-6 bg-gray-50 text-gray-900 dark:bg-gray-800 dark:text-white" id="skills">
  <h2 className="text-3xl font-bold text-center mb-6">Skills</h2>
  <div className="flex flex-wrap justify-center gap-4 text-white">
    {skills.map((skill, i) => (
      <span key={i} className="bg-blue-600 px-4 py-2 rounded-full text-sm shadow-md">
        {skill}
      </span>
    ))}
  </div>
</section>

  );
};

export default Skills;
