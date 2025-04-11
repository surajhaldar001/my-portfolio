import portfolioContent from '../content/portfolioContent';

const Experience = () => {
  return (
    <section id="experience" className="py-16 px-6 bg-white dark:bg-gray-900 text-gray-800 dark:text-white transition-colors duration-500" data-aos="fade-up">
      <h2 className="text-3xl font-bold text-center mb-10">Experience</h2>
      <div className="max-w-4xl mx-auto space-y-8">
        {portfolioContent.experience.map((job, i) => (
          <div key={i} className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">{job.role}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{job.company} – {job.location}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{job.period}</p>
            <ul className="list-disc pl-6 space-y-1">
              {job.responsibilities.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience