import { motion } from "framer-motion";
import profile from "../assets/profile.jpeg";

function Home() {
  return (
    <div className="w-full min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white flex items-center relative overflow-hidden transition-colors duration-300">

      <div className="absolute w-[600px] h-[600px] bg-blue-500/20 blur-3xl rounded-full top-[-150px] left-[-150px]"></div>
      <div className="absolute w-[500px] h-[500px] bg-purple-500/20 blur-3xl rounded-full bottom-[-150px] right-[-150px]"></div>

      {/* Animated floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-blue-400/40"
          style={{
            top: `${15 + i * 14}%`,
            left: `${5 + i * 8}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            repeat: Infinity,
            duration: 3 + i * 0.5,
            delay: i * 0.4,
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-700 dark:text-gray-300 mb-7 -ml-20"
          >
            <span
              style={{ fontFamily: "'Pacifico', cursive" }}
              className="text-2xl text-blue-500"
            >
              Hello,
            </span>
            <span className="text-lg ml-2">I'm</span>
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              Vyshna P V
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
          >
            I build modern, scalable full-stack web applications using the MERN stack.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex gap-4"
          >
            <motion.button
  whileHover={{ scale: 1.07 }}
  whileTap={{ scale: 0.95 }}
  onClick={() => window.open("/resume.pdf", "_blank")}
  className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
>
  View Resume
</motion.button>

            <a href="/resume.pdf" download>
  <button className="bg-blue-600 text-white px-8 py-3 rounded-lg">
    Download Resume
  </button>
</a>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE — Large Professional Square Image */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex justify-end items-center"
        >
          <div className="relative">

            {/* Spinning ring around image */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
              className="absolute -inset-3 rounded-2xl border-2 border-dashed border-blue-400/40 z-0"
            />

            {/* Second slower spin ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 16, ease: "linear" }}
              className="absolute -inset-6 rounded-3xl border border-purple-400/20 z-0"
            />

            {/* Pulsing glow */}
            <motion.div
              animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-2xl z-0"
            />

            {/* Main Image — larger size */}
            <motion.img
              src={profile}
              alt="Vyshna P V"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              whileHover={{ scale: 1.03 }}
              className="relative z-10 w-[26rem] h-[26rem] md:w-[30rem] md:h-[30rem] object-cover object-top rounded-2xl shadow-2xl border border-blue-400/40"
            />
          </div>
        </motion.div>

      </div>
    </div>
  );
}

export default Home;