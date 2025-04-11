import portfolioContent from '../content/portfolioContent';

const Projects = () => {
    return (
        <section id="projects" className="py-16 px-6 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white transition-colors duration-500">
            <h2 className="text-3xl font-bold text-center mb-6">Projects</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {portfolioContent.projects.map((project, i) => (
                    <div
                        key={i}
                        className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-6 rounded-lg shadow hover:shadow-lg transition"
                        data-aos="fade-up"
                        data-aos-delay={i * 150}
                    >
                        <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-2">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tech.map((techItem, idx) => (
                                <span key={idx} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded dark:bg-blue-800 dark:text-blue-100">
                                    {techItem}
                                </span>
                            ))}
                        </div>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-block text-blue-600 hover:underline"
                        >
                            View Project →
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};


export default Projects