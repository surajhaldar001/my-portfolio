import { useState } from "react";
import profilePic from "../assets/Profile_Image.jpg";
import { HiOutlineMenu , HiX } from "react-icons/hi";

const navItems = [
  { label: "About", link: "#about" },
  { label: "Skills", link: "#skills" },
  { label: "Projects", link: "#projects" },
  { label: "Experience", link: "#experience" },
  { label: "Contact", link: "#contact" },
];

type Props = {
  dark: boolean;
  toggleDark: () => void;
};

const Header = ({ dark, toggleDark }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const HiMenuAlt3Icon = HiOutlineMenu  as React.FC<React.SVGProps<SVGSVGElement>>;
  const HiXIcon = HiX as React.FC<React.SVGProps<SVGSVGElement>>;

  return (
    <header className="fixed top-0 w-full z-50 bg-white dark:bg-gray-900 shadow">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={profilePic} alt="Profile" className="w-9 h-9 rounded-full" />
          <span className="text-xl font-bold text-blue-700">Suraj Haldar</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.link}
              className="text-sm font-medium text-gray-800 dark:text-white hover:text-blue-600 transition"
            >
              {item.label}
            </a>
          ))}

          {/* Toggle Dark Mode */}
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" checked={dark} onChange={toggleDark} className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 dark:bg-gray-700 rounded-full peer peer-checked:bg-blue-600 transition-all"></div>
            <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow-md transition-all peer-checked:translate-x-5"></div>
          </label>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-2xl text-blue-700">
          {isOpen ? <HiXIcon /> : <HiMenuAlt3Icon />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-4 pb-6 shadow">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.link}
              className="block text-center py-2 text-sm font-medium text-gray-800 dark:text-white hover:text-blue-600 transition"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}

          {/* Dark Mode Toggle */}
          <div className="mt-4 flex justify-center">
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" checked={dark} onChange={toggleDark} className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 dark:bg-gray-700 rounded-full peer peer-checked:bg-blue-600 transition-all"></div>
              <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow-md transition-all peer-checked:translate-x-5"></div>
            </label>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
