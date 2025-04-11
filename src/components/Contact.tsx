import * as MdIcons from 'react-icons/md';
import portfolioContent from '../content/portfolioContent';

const MdEmail = MdIcons.MdEmail as React.FC<React.SVGProps<SVGSVGElement>>;
const MdPhone = MdIcons.MdPhone as React.FC<React.SVGProps<SVGSVGElement>>;
const MdLink = MdIcons.MdLink as React.FC<React.SVGProps<SVGSVGElement>>;
const MdLocationOn = MdIcons.MdLocationOn as React.FC<React.SVGProps<SVGSVGElement>>;

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-6 bg-white dark:bg-gray-900 text-gray-800 dark:text-white transition-colors duration-500">
      <h2 className="text-3xl font-bold text-center mb-4">Contact Me</h2>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto leading-relaxed">
        Let’s connect — whether it's a project, job opportunity, or just to say hi.
      </p>

      <div className="max-w-lg mx-auto space-y-4 text-center">
        <p className="flex items-center justify-center gap-2">
          <MdEmail className="text-blue-600 text-lg" />
          <a href={`mailto:${portfolioContent.email}`} className="text-blue-600 hover:text-blue-800 underline transition duration-200">
            {portfolioContent.email}
          </a>
        </p>
        <p className="flex items-center justify-center gap-2">
          <MdPhone className="text-red-600 text-lg" />
          <a href={`tel:${portfolioContent.phone}`} className="text-blue-600 hover:text-blue-800 underline transition duration-200">
            {portfolioContent.phone}
          </a>
        </p>
        <p className="flex items-center justify-center gap-2">
          <MdLink className="text-gray-500 text-lg" />
          <a href={portfolioContent.linkedin} target="_blank" rel="noreferrer" className="text-blue-600 hover:text-blue-800 underline transition duration-200">
            Connect on LinkedIn
          </a>
        </p>
        <p className="flex items-center justify-center gap-2">
          <MdLocationOn className="text-pink-500 text-lg" />
          <span>{portfolioContent.location}</span>
        </p>
      </div>
    </section>
  );
};

export default Contact;
