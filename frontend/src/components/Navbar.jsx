import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") setDarkMode(true);
  }, []);

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
      className="relative flex justify-between items-center px-8 py-5
          bg-gradient-to-r from-[#1e3a5f] via-[#0f172a] to-[#020617]
          dark:from-[#020617] dark:via-[#020617] dark:to-[#020617]
          backdrop-blur-md
          sticky top-0 z-50 overflow-hidden border-b border-white/10"
    >

      <div className="absolute w-72 h-72 bg-blue-500/20 blur-3xl rounded-full -top-20 -left-20"></div>
      <div className="absolute w-72 h-72 bg-purple-500/20 blur-3xl rounded-full -top-20 right-0"></div>

      {/* LOGO */}
      <h1 className="text-2xl md:text-3xl font-bold relative z-10">
        <span className="bg-gradient-to-r from-blue-700 to-purple-700 text-transparent bg-clip-text">
          MERN Stack Developer
        </span>
      </h1>

      {/* LINKS */}
      <div className="flex items-center gap-8 relative z-10">
        {["about", "projects", "contact"].map((item) => (
          <a
            key={item}
            href={`#${item}`}
            className="relative text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-blue-500 transition"
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}

            {/* 🔥 underline animation */}
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 hover:w-full"></span>
          </a>
        ))}

        {/* DARK MODE BUTTON */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-3 py-1 border rounded-lg hover:scale-110 transition relative z-10"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </motion.nav>
  );
}

export default Navbar;