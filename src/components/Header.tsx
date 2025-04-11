import { Link } from "react-scroll";

interface HeaderProps {
  dark: boolean;
  toggleDark: () => void;
}

const Header = ({ dark, toggleDark }: HeaderProps) => {
  return (
    <header data-aos="fade-up" className="transition-colors duration-500 fixed top-0 w-full bg-white dark:bg-gray-800 shadow z-50">
      <nav className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto">
        <h1 className="text-xl font-bold text-blue-700 dark:text-white">Suraj Haldar</h1>
        <ul className="flex gap-6 text-sm font-medium items-center">
          {["about", "skills", "projects","experience", "contact"].map((section) => (
            <li key={section}>
              <Link
                to={section}
                smooth={true}
                duration={500}
                offset={-60}
                className="cursor-pointer text-gray-800 dark:text-gray-100 hover:text-blue-600"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </li>
          ))}

          {/* Dark mode toggle button inside nav */}
          <button
            onClick={toggleDark}
            className="ml-4 bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700"
          >
            {dark ? "☀️ Light" : "🌙 Dark"}
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
