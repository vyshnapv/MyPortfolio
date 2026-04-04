import { color, motion } from "framer-motion";

const roles = [
  { title: "Web Developer", icon: "🌐", desc: "Crafting responsive, modern websites with clean design and smooth interactions." },
  { title: "React Developer", icon: "⚛️", desc: "Building fast, dynamic UIs with React and component-driven architecture." },
  { title: "Backend Developer", icon: "🛠️", desc: "Designing robust APIs and server-side logic with Node.js and Express." },
  { title: "Fullstack Developer", icon: "🚀", desc: "Connecting the dots — from database to UI, I handle it all end to end." },
];

const skillGroups = [
  {
    label: "Frontend",
    color: "blue",
    skills: [
      { name: "React.js", icon: "⚛️" },
      { name: "Redux", icon: "🔄" },
      { name: "TypeScript", icon: "🔷" },
      { name: "JavaScript", icon: "🟡" },
      { name: "HTML", icon: "🧱" },
      { name: "CSS", icon: "🎨" },
      { name: "Tailwind CSS", icon: "💨" },
      { name: "Bootstrap", icon: "🅱️" },
      { name: "EJS", icon: "📄" },
    ],
  },
  {
    label: "Backend",
    color: "purple",
    skills: [
      { name: "Node.js", icon: "🟢" },
      { name: "Express.js", icon: "🚂" },
      { name: "REST APIs", icon: "🔗" },
      { name: "MVC", icon: "🏗️" },
      { name: "JWT Auth", icon: "🔐" },
      { name: "OAuth 2.0", icon: "🛡️" },
      { name: "Bcrypt", icon: "🔒" },
    ],
  },
  {
    label: "Database & Cloud",
    color: "blue",
    skills: [
      { name: "MongoDB", icon: "🍃" },
      { name: "MySQL", icon: "🐬" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "Firebase", icon: "🔥" },
      { name: "AWS EC2", icon: "☁️" },
      { name: "Nginx", icon: "⚡" },
    ],
  },
  {
    label: "Tools",
    color: "purple",
    skills: [
      { name: "Git", icon: "🌿" },
      { name: "GitHub", icon: "🐙" },
      { name: "Postman", icon: "📮" },
      { name: "Figma", icon: "🎭" },
      { name: "Razorpay", icon: "💳" },
    ],
  },
];

const colorMap = {
  blue: {
    card: "bg-blue-50 dark:bg-blue-500/10 border-blue-200 dark:border-blue-500/30 hover:border-blue-400 dark:hover:border-blue-400",
    label: "bg-blue-500/10 border-blue-400/30 text-blue-600 dark:text-blue-400",
    heading: "text-blue-500",
    underline: "from-blue-500 to-blue-400",
    glow: "from-blue-500/10 to-transparent",
  },
  purple: {
    card: "bg-purple-50 dark:bg-purple-500/10 border-purple-200 dark:border-purple-500/30 hover:border-purple-400 dark:hover:border-purple-400",
    label: "bg-purple-500/10 border-purple-400/30 text-purple-600 dark:text-purple-400",
    heading: "text-purple-500",
    underline: "from-purple-500 to-purple-400",
    glow: "from-purple-500/10 to-transparent",
  },
};

function About() {
  return (
    <div className="w-full bg-white dark:bg-gray-900 text-black dark:text-white relative overflow-hidden transition-colors duration-300">

      {/* Background blobs */}
      <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-3xl rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-purple-500/20 blur-3xl rounded-full bottom-[-100px] right-[-100px]" />

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-blue-400/40"
          style={{
            width: i % 2 === 0 ? "8px" : "6px",
            height: i % 2 === 0 ? "8px" : "6px",
            top: `${10 + i * 11}%`,
            left: `${5 + i * 11}%`,
          }}
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ repeat: Infinity, duration: 3 + i * 0.4, delay: i * 0.3, ease: "easeInOut" }}
        />
      ))}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`right-${i}`}
          className="absolute rounded-full bg-purple-400/30"
          style={{ width: "6px", height: "6px", top: `${20 + i * 18}%`, right: `${6 + i * 7}%` }}
          animate={{ y: [0, -15, 0], opacity: [0.2, 0.6, 0.2] }}
          transition={{ repeat: Infinity, duration: 4 + i * 0.5, delay: i * 0.4, ease: "easeInOut" }}
        />
      ))}

      {/* ── Who I Am — centered narrow div ── */}
      <div className="max-w-4xl mx-auto px-6 py-24 relative z-10">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            style={{ fontFamily: "'Pacifico', cursive" }}
            className="text-2xl text-blue-500 mb-2"
          >
            About me
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold"
          >
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              Who I Am
            </span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
            style={{ originX: 0.5 }}
            className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mt-4"
          />
        </motion.div>

        {/* About Paragraphs */}
        <div className="space-y-6 text-center">
          {[
            "I am a MERN Stack Developer with a strong foundation in building modern, scalable, and high-performance web applications. I specialize in JavaScript and work with technologies like React, Node.js, Express.js, and MongoDB to create seamless and user-friendly digital experiences. My focus is on writing clean, efficient code and developing applications that are not only functional but also intuitive and visually appealing.",
            "I am passionate about continuous learning and staying updated with the latest industry trends and technologies. I enjoy solving complex problems and transforming ideas into practical, real-world solutions. With a collaborative mindset and strong communication skills, I work closely with clients and teams to understand requirements and deliver impactful products that add real value.",
          ].map((para, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.15, duration: 0.6 }}
              className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
            >
              {para}
            </motion.p>
          ))}
        </div>
      </div>

      {/* ── Roles Section — FULL WIDTH ── */}
      <div className="w-full py-16 relative z-10">

        {/* Roles Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center mb-12"
        >
          <motion.p
            style={{ fontFamily: "'Pacifico', cursive" }}
            className="text-2xl text-blue-500 mb-2"
          >
            What I do
          </motion.p>
          <h3 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              My Roles
            </span>
          </h3>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
            style={{ originX: 0.5 }}
            className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mt-4"
          />
        </motion.div>

        {/* Role Cards — full width 4 col */}
        <div className="px-6 md:px-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map((role, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.15, duration: 0.5, type: "spring", stiffness: 120 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="group relative p-7 rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/60 overflow-hidden cursor-default"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />

              {/* Top accent bar */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-3xl"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.6 + i * 0.15, duration: 0.5, ease: "easeOut" }}
                style={{ originX: 0 }}
              />

              <div className="relative z-10 flex flex-col items-center text-center">
                {/* Icon circle */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-400/20 flex items-center justify-center text-3xl mb-5"
                >
                  {role.icon}
                </motion.div>

                <h4 className="text-lg font-bold mb-3 text-gray-800 dark:text-white group-hover:text-blue-500 transition-colors duration-300">
                  {role.title}
                </h4>

                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                  {role.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Skills Section — FULL WIDTH ── */}
      <div className="w-full py-20 relative z-10">

        {/* Skills Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center mb-16"
        >
          <motion.p
            style={{ fontFamily: "'Pacifico', cursive" }}
            className="text-2xl text-blue-500 mb-2"
          >
            What I know
          </motion.p>
          <h3 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              My Skills
            </span>
          </h3>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
            style={{ originX: 0.5 }}
            className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mt-4"
          />
        </motion.div>

        {/* Skill Groups */}
        <div className="px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillGroups.map((group, gi) => {
            const c = colorMap[group.color];
            return (
              <motion.div
                key={gi}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + gi * 0.15, duration: 0.6, type: "spring", stiffness: 100 }}
                className="relative rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/60 p-8 overflow-hidden"
              >
                {/* Corner glow */}
                <div className={`absolute top-0 left-0 w-40 h-40 bg-gradient-to-br ${c.glow} rounded-full blur-2xl`} />

                {/* Group label */}
                <div className="relative z-10 flex items-center gap-3 mb-6">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.5 + gi * 0.15, duration: 0.5, ease: "easeOut" }}
                    style={{ originX: 0 }}
                    className={`h-0.5 w-8 bg-gradient-to-r ${c.underline} rounded-full`}
                  />
                  <h4 className={`text-sm font-bold uppercase tracking-widest ${c.heading}`}>
                    {group.label}
                  </h4>
                </div>

                {/* Skill pills */}
                <div className="relative z-10 flex flex-wrap gap-3">
                  {group.skills.map((skill, si) => (
                    <motion.div
                      key={si}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        delay: 0.5 + gi * 0.15 + si * 0.06,
                        type: "spring",
                        stiffness: 200,
                      }}
                      whileHover={{ y: -4, scale: 1.08 }}
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-medium cursor-default transition-all duration-200 ${c.card}`}
                    >
                      <span className="text-base leading-none">{skill.icon}</span>
                      <span>{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
        {/* ── Experience Section — FULL WIDTH ── */}
<div className="w-full py-20 relative z-10">

  {/* Experience Heading */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3 }}
    className="text-center mb-16"
  >
    <motion.p
      style={{ fontFamily: "'Pacifico', cursive" }}
      className="text-2xl text-blue-500 mb-2"
    >
      What I've built
    </motion.p>
    <h3 className="text-3xl md:text-4xl font-bold">
      <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
        Experience
      </span>
    </h3>
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
      style={{ originX: 0.5 }}
      className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mt-4"
    />
  </motion.div>

  {/* Timeline */}
  <div className="px-6 md:px-16 relative">
    {/* Center line */}
    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 opacity-20 rounded-full -translate-x-1/2 hidden md:block" />

    {[
      {
        side: "left",
        icon: "🌐",
        title: "Frontend Development",
        sub: "React ecosystem · State management · UI architecture",
        desc:"I have hands-on experience in building modern, responsive, and high-performance user interfaces using React.js and related technologies. I focus on creating clean UI architectures with reusable components, efficient state management using Redux, and type-safe development with TypeScript. I ensure seamless user experiences by implementing responsive designs with Tailwind CSS, optimizing performance, and maintaining scalable frontend structures for real-world applications.",
        tags: [{ label: "React.js", color: "blue" }, {label:"JavaScript",color:"blue"},{label:"Bootstrap",color:"blue"},{ label: "TypeScript", color: "blue" }, { label: "Tailwind CSS", color: "blue" }, { label: "Redux", color: "blue" }],
      },
      {
        side: "right",
        icon: "🛠️",
        title: "Backend Development",
        sub: "Node.js · Express.js · REST APIs",
        desc: "I have experience in building scalable and secure backend systems using Node.js and Express.js. I design and develop RESTful APIs following MVC architecture, ensuring clean code structure and maintainability. I implement robust authentication and authorization using JWT and OAuth 2.0, along with secure password handling using Bcrypt. I also work with databases like MongoDB and SQL to manage data efficiently and optimize performance for real-world applications.",
        tags: [{ label: "Node.js", color: "purple" }, { label: "Express.js", color: "purple" },{label:"EJS",color:"purple"}, { label: "JWT Auth", color: "purple" }, { label: "OAuth 2.0", color: "purple" }],
      },
      {
        side: "left",
        icon: "🏗️",
        title: " Architecture and Design Patterns",
        sub: "MVC · Clean Architecture · Scalable system design",
       desc: "I structure applications using both MVC and Clean Architecture principles to ensure scalability, maintainability, and clear separation of concerns. By organizing code into layers such as controllers, services, and repositories, I create modular and reusable systems. This approach improves code readability, simplifies testing, and allows efficient handling of complex business logic in real-world applications.",
        tags: [{ label: "MVC", color: "teal" }, { label: "Clean", color: "teal" }],
      },
      {
        side: "right",
        icon: "🗄️",
        title: "Database Design",
        sub: "SQL · NoSQL · Schema architecture",
        desc: "I have experience in designing and managing both SQL and NoSQL databases, including MongoDB, MySQL, and PostgreSQL. I create efficient data models, write optimized queries, and implement indexing strategies to improve performance. I focus on ensuring data integrity, scalability, and smooth integration with backend systems for real-world applications.",
        tags: [{ label: "MongoDB", color: "amber" }, { label: "PostgreSQL", color: "amber" }, { label: "MySQL", color: "amber" }, { label: "Firebase", color: "amber" }],
      },
      {
        side: "left",
        icon: "🌿",
        title: "Git & Version Control",
        sub: "Git · GitHub · Team collaboration",
        desc: "I use Git for version control to manage and track changes across projects efficiently. I work with branching strategies, commits, and pull requests to maintain clean code history. I also collaborate using GitHub, handling code reviews, merging, and resolving conflicts to ensure smooth team development workflows.",
        tags: [{ label: "Git", color: "green" }, { label: "GitHub", color: "green" }, { label: "Branching", color: "green" }, { label: "Code Reviews", color: "green" }],
      },
      {
        side: "right",
        icon: "☁️",
        title: "AWS & Nginx Deployment",
        sub: "EC2 · Nginx · Production deployments",
        desc: "I have experience deploying full-stack applications on AWS EC2, configuring servers, and managing application environments. I use Nginx as a reverse proxy to handle client requests, route traffic, and improve performance. I also set up domain routing, SSL certificates, and ensure secure and reliable production deployments.",
        tags: [{ label: "AWS EC2", color: "blue" }, { label: "Nginx", color: "blue" }, { label: "SSL/HTTPS", color: "blue" }],
      },
    ].map((item, i) => {
      const colorMap = {
        blue:   "bg-blue-50 dark:bg-blue-500/10 border-blue-200 dark:border-blue-500/30 text-blue-700 dark:text-blue-300",
        purple: "bg-purple-50 dark:bg-purple-500/10 border-purple-200 dark:border-purple-500/30 text-purple-700 dark:text-purple-300",
        teal:   "bg-teal-50 dark:bg-teal-500/10 border-teal-200 dark:border-teal-500/30 text-teal-700 dark:text-teal-300",
        amber:  "bg-amber-50 dark:bg-amber-500/10 border-amber-200 dark:border-amber-500/30 text-amber-700 dark:text-amber-300",
        green:  "bg-green-50 dark:bg-green-500/10 border-green-200 dark:border-green-500/30 text-green-700 dark:text-green-300",
      };
      const isLeft = item.side === "left";
      const card = (
      <motion.div
          key={i}
          initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            delay: 0.1,
            duration: 0.6,
            type: "spring",
            stiffness: 80
          }}
          whileHover={{ y: -6 }}
          className="w-full md:w-[calc(50%-28px)] rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/60 p-7 relative"
        >
          {/* Top accent */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5 + i * 0.12, duration: 0.5, ease: "easeOut" }}
            style={{ originX: 0 }}
            className="h-0.5 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4"
          />
          <div className="text-3xl mb-2">{item.icon}</div>
          <h4 className="text-base font-bold text-gray-800 dark:text-white mb-1">{item.title}</h4>
          <p className="text-xs text-gray-400 dark:text-gray-500 mb-3">{item.sub}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">{item.desc}</p>
          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag, ti) => (
              <span key={ti} className={`text-xs font-medium px-3 py-1 rounded-full border ${colorMap[tag.color]}`}>
                {tag.label}
              </span>
            ))}
          </div>
        </motion.div>
      );

      return (
        <div key={i} className={`flex items-start gap-4 md:gap-0 mb-10 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} flex-col`}>
          {card}
          {/* Center dot */}
          <div className="hidden md:flex flex-col items-center w-14 flex-shrink-0 pt-6">
            <div className={`w-4 h-4 rounded-full border-2 bg-white dark:bg-gray-900 z-10 ${isLeft ? "border-blue-500" : "border-purple-500"}`} />
          </div>
          <div className="hidden md:block md:w-[calc(50%-28px)]" />
        </div>
      );
    })}
  </div>
  
</div>
      </div>
    </div>
  );
}

export default About;