import portfolioContent from '../content/portfolioContent';

const About = () => {
    return (
      <section
        className="py-16 px-6 bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100"
        id="about" data-aos="fade-up"
      >
        <h2 className="text-3xl font-bold text-center mb-6">About Me</h2>
        <div className="max-w-4xl mx-auto text-lg leading-relaxed">
          <p className="text-gray-700 dark:text-gray-300 text-center">
          {portfolioContent.about}
            {/*I'm a passionate developer with 2 years of experience in full stack development. 
            My current role at iGuru Portal Services Pvt Ltd involves building scalable, responsive ERP solutions 
            using React, AngularJS, and ASP.NET MVC. I take pride in writing clean, maintainable code and delivering 
            value through great user experiences.*/}
          </p>
        </div>
      </section>
    );
  };
  
  export default About;
  