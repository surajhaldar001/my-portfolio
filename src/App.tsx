import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState,useEffect  } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from './components/Experience';
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      offset: 120,
      once: true,
    });
  }, []);
  
  return (
    <div className={dark ? "dark" : ""}>
    <div className="min-h-screen transition-colors duration-500 bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-white">
  
        {/* Toggle Button 
        <button
          onClick={() => setDark(!dark)}
          className="fixed top-4 right-4 z-[999] bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
        >
          {dark ? "☀️ Light" : "🌙 Dark"}
        </button>
*/}
        <Header dark={dark} toggleDark={() => setDark(!dark)} />

        <main className="pt-16">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience/>
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
