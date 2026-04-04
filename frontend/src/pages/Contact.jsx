import { motion } from "framer-motion";
 
// Animated "Send Message" envelope SVG illustration
function EnvelopeIllustration() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.8 }}
      className="flex justify-center mb-10"
    >
      <svg
        width="220"
        height="160"
        viewBox="0 0 220 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Envelope body */}
        <motion.rect
          x="20" y="40" width="180" height="110" rx="10"
          fill="url(#envGrad)"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          style={{ originX: "50%" }}
        />
 
        {/* Envelope flap (top triangle) */}
        <motion.path
          d="M20 50 L110 100 L200 50"
          stroke="#818cf8"
          strokeWidth="2.5"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        />
 
        {/* Left crease */}
        <motion.path
          d="M20 150 L80 100"
          stroke="#818cf8"
          strokeWidth="1.5"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        />
 
        {/* Right crease */}
        <motion.path
          d="M200 150 L140 100"
          stroke="#818cf8"
          strokeWidth="1.5"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        />
 
        {/* Floating star 1 */}
        <motion.circle
          cx="55" cy="25" r="3"
          fill="#60a5fa"
          animate={{ y: [0, -8, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 2.5, delay: 0 }}
        />
        {/* Floating star 2 */}
        <motion.circle
          cx="170" cy="18" r="2"
          fill="#a78bfa"
          animate={{ y: [0, -10, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ repeat: Infinity, duration: 3, delay: 0.5 }}
        />
        {/* Floating star 3 */}
        <motion.circle
          cx="195" cy="35" r="3.5"
          fill="#38bdf8"
          animate={{ y: [0, -6, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 2, delay: 1 }}
        />
 
        {/* Paper inside envelope (peeking out) */}
        <motion.rect
          x="75" y="10" width="70" height="50" rx="4"
          fill="white"
          stroke="#c7d2fe"
          strokeWidth="1.5"
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: [60, 10, 10], opacity: [0, 1, 1] }}
          transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
        />
        {/* Lines on paper */}
        <motion.line
          x1="85" y1="25" x2="135" y2="25"
          stroke="#a5b4fc" strokeWidth="2" strokeLinecap="round"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        />
        <motion.line
          x1="85" y1="33" x2="125" y2="33"
          stroke="#a5b4fc" strokeWidth="2" strokeLinecap="round"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7 }}
        />
        <motion.line
          x1="85" y1="41" x2="130" y2="41"
          stroke="#a5b4fc" strokeWidth="2" strokeLinecap="round"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.9 }}
        />
 
        {/* Gradient def */}
        <defs>
          <linearGradient id="envGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#dbeafe" />
            <stop offset="100%" stopColor="#ede9fe" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
}
 
function Contact() {
  return (
    <div className="w-full min-h-screen bg-white dark:bg-gray-900 relative overflow-hidden transition-colors duration-300 flex flex-col">
 
      {/* Background blobs */}
      <div className="absolute w-[600px] h-[600px] bg-blue-500/20 blur-3xl rounded-full top-[-150px] left-[-150px]" />
      <div className="absolute w-[500px] h-[500px] bg-purple-500/20 blur-3xl rounded-full bottom-[-150px] right-[-150px]" />
 
      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-blue-400/40"
          style={{
            top: `${10 + i * 10}%`,
            left: `${5 + i * 12}%`,
          }}
          animate={{
            y: [0, -25, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            repeat: Infinity,
            duration: 3 + i * 0.4,
            delay: i * 0.3,
          }}
        />
      ))}
 
      {/* Main content grows to fill space */}
      <div className="relative z-10 flex flex-col flex-1">
 
        {/* Heading Section */}
        <div className="text-center pt-20 px-6">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-14 text-center"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-gray-400 mb-2"
            >
              <span
                style={{ fontFamily: "'Pacifico', cursive" }}
                className="text-2xl text-blue-400"
              >
                Let's Talk,
              </span>
            </motion.p>
            <h1 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                Get In Touch
              </span>
            </h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
              style={{ originX: 0.5 }}
              className="h-1 w-28 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 rounded-full mx-auto mt-4"
            />
          </motion.div>
        </div>
 
        {/* Animated Envelope Illustration */}
        <EnvelopeIllustration />
 
        {/* Content */}
        <div className="flex justify-center items-center px-6">
          <div className="text-center max-w-xl">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-gray-600 dark:text-gray-300 text-lg md:text-xl mb-10"
            >
              Whether you have a project idea, collaboration, or just want to say hello — feel free to reach out anytime.
            </motion.p>
 
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex justify-center gap-4 flex-wrap"
            >
              <motion.a
                href="mailto:vyshnapvvyshu@gmail.com"
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition shadow-lg shadow-blue-500/30"
              >
                Email Me
              </motion.a>
 
              <motion.a
                href="https://www.linkedin.com/in/vyshna-p-v/"
                whileHover={{ scale: 1.07}}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition shadow-lg shadow-blue-500/30"
              >
                LinkedIn
              </motion.a>
            </motion.div>
          </div>
        </div>
 
        {/* Spacer to push footer down */}
        <div className="flex-1" />
 
        {/* Footer Divider + End Line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="relative z-10 px-6 pb-8 pt-12 text-center"
        >
          {/* Horizontal gradient line */}
          <div className="relative flex items-center justify-center mb-6">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-60" />
            {/* Center sparkle */}
            <motion.span
              animate={{ rotate: [0, 180, 360] }}
              transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
              className="mx-3 text-blue-400 text-lg select-none"
            >
              ✦
            </motion.span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-60" />
          </div>
 
          {/* Footer text */}
          <p className="text-sm text-gray-400 dark:text-gray-500">
            <span className="text-blue-400">♥</span> — © {new Date().getFullYear()} VYSHNA P V
          </p>
        </motion.div>
 
      </div>
    </div>
  );
}
 
export default Contact;