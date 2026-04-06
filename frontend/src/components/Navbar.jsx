import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const links = ["about", "projects", "contact"];

  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") setDarkMode(true);
  }, []);

  // Apply theme
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full flex justify-between items-center 
      px-4 md:px-8 py-4 md:py-5
      bg-gradient-to-r from-[#1e3a5f] via-[#0f172a] to-[#020617]
      dark:from-[#020617] dark:via-[#020617] dark:to-[#020617]
      backdrop-blur-md z-50 border-b border-white/10"
    >

      {/* Background blur */}
      <div className="absolute w-60 h-60 md:w-72 md:h-72 bg-blue-500/20 blur-3xl rounded-full -top-20 -left-20"></div>
      <div className="absolute w-60 h-60 md:w-72 md:h-72 bg-purple-500/20 blur-3xl rounded-full -top-20 right-0"></div>

      {/* LOGO */}
      <h1 className="text-xl md:text-3xl font-bold relative z-10">
        <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
          MERN Developer
        </span>
      </h1>

      {/* DESKTOP MENU */}
      <div className="hidden md:flex items-center gap-8 relative z-10">
        {links.map((item) => (
          <a
            key={item}
            href={`#${item}`}
            className="relative text-lg font-medium text-gray-200 hover:text-blue-400 transition"
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}

            {/* underline */}
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 hover:w-full"></span>
          </a>
        ))}

        {/* DARK MODE */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-3 py-1 border rounded-lg hover:scale-110 transition"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>

      {/* MOBILE CONTROLS */}
      <div className="md:hidden flex items-center gap-3 z-10">
        {/* DARK MODE */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-2 py-1 border rounded-lg text-white"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        {/* MENU BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl text-white"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[70px] left-0 w-full 
            bg-[#020617]/95 backdrop-blur-md
            flex flex-col items-center gap-6 py-6 
            md:hidden z-[999]"
          >
            {links.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => setMenuOpen(false)}
                className="text-lg text-white hover:text-blue-400"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

    </motion.nav>
  );
}

export default Navbar;