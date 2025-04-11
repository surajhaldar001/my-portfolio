import portfolioContent from '../content/portfolioContent';

const Hero = () => {
  return (
    <section
      id="hero"
      className="pt-24 min-h-[80vh] bg-gradient-to-r from-indigo-400 to-cyan-400 dark:from-gray-800 dark:to-gray-900 text-white text-center transition-colors duration-500"
      data-aos="fade-up"
    >
      <h1 className="text-5xl font-bold">{portfolioContent.name}</h1>
      <p className="mt-4 text-xl max-w-xl mx-auto">{portfolioContent.title}</p>
      <a
        href={portfolioContent.resumeLink}
        download
        className="mt-6 inline-block bg-white text-blue-600 font-semibold px-6 py-2 rounded hover:bg-gray-100"
      >
        📄 Download Resume
      </a>
    </section>
  );
};

export default Hero;
