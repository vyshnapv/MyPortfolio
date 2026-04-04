import { useEffect, useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
 
const projects = [
  {
    id: 1,
    title: "Nestoria",
    subtitle: "Furniture E-Commerce Web Application",
    github: "https://github.com/vyshnapv/Nestoria",
    tag: "Full Stack",
    color: "from-blue-500 to-cyan-400",
    icon: "🛋️",
    points: [
      "Developed a full-stack e-commerce platform with user and admin modules.",
      "Implemented product filtering, sorting, cart, wallet, and checkout features.",
      "Integrated Razorpay payment gateway for secure transactions.",
      "Implemented Email OTP and Google OAuth authentication.",
      "Optimized database queries to improve application performance.",
      "Built admin dashboard for order management and sales reporting.",
    ],
    tech: ["Node.js", "Express.js", "MongoDB", "EJS", "JavaScript", "Razorpay API", "HTML", "CSS"],
  },
];
 
const miniProjects = [
  {
    id: 2,
    title: "User Management System",
    tag: "TypeScript",
    github: "https://github.com/vyshnapv/MyUserManagement",
    color: "from-violet-500 to-purple-400",
    icon: "👥",
    points: ["Implemented user authentication and role-based access control."],
  },
  {
    id: 3,
    title: "Netflix Clone",
    tag: "React",
    github: "https://github.com/vyshnapv/netflix-clone",
    color: "from-red-500 to-rose-400",
    icon: "🎬",
    points: [
      "Developed a responsive UI replicating the Netflix interface using React.",
      "Integrated TMDB API to fetch and display dynamic movie and TV show data.",
    ],
  },
  {
    id: 4,
    title: "OLX Clone",
    tag: "React",
    github: "https://github.com/vyshnapv/olx-clone",
    color: "from-teal-500 to-emerald-400",
    icon: "🏷️",
    points: ["Built a classified listing platform with dynamic product display."],
  },
  {
    id: 5,
    title: "Todo Application",
    tag: "React",
    github: "https://github.com/vyshnapv/My-ToDo-",
    color: "from-amber-500 to-yellow-400",
    icon: "✅",
    points: ["Built a task management application with CRUD functionality."],
  },
];
 
const TAG_COLORS = {
  "Full Stack": "bg-blue-500/20 text-blue-400 border-blue-400/30",
  TypeScript: "bg-violet-500/20 text-violet-400 border-violet-400/30",
  React: "bg-cyan-500/20 text-cyan-400 border-cyan-400/30",
};
 
function FeaturedCard({ project, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
 
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      className="relative rounded-3xl overflow-hidden border border-white/10 bg-gray-900/80 backdrop-blur-xl shadow-2xl group"
    >
      {/* Top gradient bar */}
      <div className={`h-1.5 w-full bg-gradient-to-r ${project.color}`} />
 
      {/* Glow on hover */}
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br ${project.color} blur-3xl`}
        style={{ opacity: 0, mixBlendMode: "screen", zIndex: 0 }}
      />
      <motion.div
        className={`absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gradient-to-br ${project.color} opacity-10 group-hover:opacity-20 transition-all duration-700 blur-2xl pointer-events-none`}
      />
 
      <div className="relative z-10 p-8 md:p-10">
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="text-3xl">{project.icon}</span>
              <div>
                <h2 className={`text-2xl md:text-3xl font-black bg-gradient-to-r ${project.color} text-transparent bg-clip-text leading-tight`}>
                  {project.title}
                </h2>
                <p className="text-gray-400 text-sm font-medium mt-0.5">{project.subtitle}</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${TAG_COLORS[project.tag] || "bg-gray-700 text-gray-300 border-gray-600"}`}>
              {project.tag}
            </span>
            <a
              href={project.github}
              className="flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white transition-all duration-200 hover:scale-105"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.9.57.1.78-.25.78-.55v-1.92c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.72-1.53-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.96 10.96 0 0 1 2.87-.39c.97 0 1.95.13 2.87.39 2.19-1.49 3.14-1.18 3.14-1.18.63 1.58.24 2.75.12 3.04.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.78 1.04.78 2.1v3.12c0 .3.2.66.79.55A11.51 11.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
              </svg>
              GitHub
            </a>
          </div>
        </div>
 
        {/* Points */}
        <ul className="space-y-2.5 mb-8">
          {project.points.map((pt, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.08, duration: 0.5, ease: "easeOut" }}
              className="flex items-start gap-2.5 text-sm text-gray-300"
            >
              <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.color} flex-shrink-0`} />
              {pt}
            </motion.li>
          ))}
        </ul>
 
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6 + i * 0.06, duration: 0.35 }}
              className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 font-mono"
            >
              {t}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
 
function MiniCard({ project, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
 
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.97 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="relative rounded-2xl overflow-hidden border border-white/10 bg-gray-900/80 backdrop-blur-xl shadow-xl group cursor-default"
    >
      <div className={`h-1 w-full bg-gradient-to-r ${project.color}`} />
 
      <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
        style={{ background: `linear-gradient(to bottom right, var(--tw-gradient-from), var(--tw-gradient-to))` }}
      />
 
      <div className="p-6 relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-2.5">
            <span className="text-2xl">{project.icon}</span>
            <div>
              <h3 className={`font-bold text-base bg-gradient-to-r ${project.color} text-transparent bg-clip-text`}>
                {project.title}
              </h3>
              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${TAG_COLORS[project.tag] || "bg-gray-700 text-gray-300 border-gray-600"}`}>
                {project.tag}
              </span>
            </div>
          </div>
          <a
            href={project.github}
            className="text-gray-500 hover:text-white transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.9.57.1.78-.25.78-.55v-1.92c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.72-1.53-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.96 10.96 0 0 1 2.87-.39c.97 0 1.95.13 2.87.39 2.19-1.49 3.14-1.18 3.14-1.18.63 1.58.24 2.75.12 3.04.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.78 1.04.78 2.1v3.12c0 .3.2.66.79.55A11.51 11.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
            </svg>
          </a>
        </div>
 
        <ul className="space-y-2">
          {project.points.map((pt, i) => (
            <li key={i} className="flex items-start gap-2 text-xs text-gray-400 leading-relaxed">
              <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.color} flex-shrink-0`} />
              {pt}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
 
const Projects = () => {
  return (
   <div className="w-full min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white relative overflow-hidden transition-colors duration-300">
 
      {/* Background glows */}
     <div className="absolute w-[600px] h-[600px] bg-blue-500/20 blur-3xl rounded-full top-[-150px] left-[-150px]"></div>
     <div className="absolute w-[500px] h-[500px] bg-purple-500/20 blur-3xl rounded-full bottom-[-150px] right-[-150px]"></div>
     
      {/* Floating particles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-blue-400/30"
          style={{
            width: i % 2 === 0 ? "8px" : "5px",
            height: i % 2 === 0 ? "8px" : "5px",
            top: `${8 + i * 9}%`,
            left: `${4 + i * 9}%`,
          }}
          animate={{ y: [0, -22, 0], opacity: [0.2, 0.7, 0.2] }}
          transition={{ repeat: Infinity, duration: 3 + i * 0.4, delay: i * 0.3, ease: "easeInOut" }}
        />
      ))}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`r-${i}`}
          className="absolute rounded-full bg-purple-400/25"
          style={{ width: "6px", height: "6px", top: `${15 + i * 17}%`, right: `${5 + i * 6}%` }}
          animate={{ y: [0, -16, 0], opacity: [0.15, 0.5, 0.15] }}
          transition={{ repeat: Infinity, duration: 4 + i * 0.5, delay: i * 0.4, ease: "easeInOut" }}
        />
      ))}
 
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
 
        {/* Heading */}
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
              My Work,
            </span>
          </motion.p>
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              Projects
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
 
        {/* Featured Project */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-5"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400">Featured Project</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>
          {projects.map((p, i) => (
            <FeaturedCard key={p.id} project={p} index={i} />
          ))}
        </motion.div>
 
        {/* Mini Projects */}
        <div className="mt-14">
          <div className="flex items-center gap-3 mb-7">
            <span className="text-xs font-bold uppercase tracking-widest text-purple-400">Mini Projects</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-5">
            {miniProjects.map((p, i) => (
              <MiniCard key={p.id} project={p} index={i} />
            ))}
          </div>
        </div>
 
      </div>
    </div>
  );
};
 
export default Projects;