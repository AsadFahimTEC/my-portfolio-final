"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const EventCategories = () => {
  const projects = [
    {
      id: 1,
      title: "JourneyJive",
      description:
        "A comprehensive tourist guide platform offering 6 popular packages including JiveDiscover, JiveVoyages, JiveDestiny, JiveOdyssey, JiveWanderlust, and JiveHorizons for seamless travel planning.",
      liveUrl: "https://peoplepro-af1ed.web.app",
      codeUrl: "https://github.com/AsadFahimTEC/b8a12-client-side",
      gradient: "from-blue-500 to-cyan-500",
      image: "https://s.wordpress.com/mshots/v1/https://peoplepro-af1ed.web.app?w=900",
      imageAlt: "JourneyJive website screenshot",
    },
    {
      id: 2,
      title: "SkillBridge",
      description:
        "SkillBridge is a comprehensive platform that connects skilled freelancers with clients seeking their expertise, offering a wide range of services across various industries for seamless collaboration and project success.",
      liveUrl: "https://skillbridge-client-flame.vercel.app",
      codeUrl: "https://github.com/AsadFahimTEC/skillbridge-client",
      gradient: "from-green-500 to-emerald-500",
      image: "https://s.wordpress.com/mshots/v1/https://skillbridge-client-flame.vercel.app?w=900",
      imageAlt: "SkillBridge website screenshot",
    },
    {
      id: 3,
      title: "Asad Tech BD",
      description:
        "A Digital Product Reselling Platform offering a wide range of digital products, including software licenses, e-books, online courses, and design assets for creative professionals.",
      liveUrl: "https://asadtechbd.netlify.app",
      codeUrl: "https://github.com/AsadFahimTEC/Asad-Tech-BD",
      gradient: "from-purple-500 to-pink-500",
      image: "https://s.wordpress.com/mshots/v1/https://asadtechbd.netlify.app?w=900",
      imageAlt: "Asad Tech BD website screenshot",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <motion.section
      id="projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className="relative overflow-hidden bg-slate-950/95 py-16 sm:py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.08),_transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              My Projects
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-300 sm:text-xl">
            Explore my recent work showcasing modern web development techniques and creative solutions.
          </p>
        </motion.div>

        <motion.div variants={containerVariants} className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/50 shadow-2xl backdrop-blur-xl transition-all hover:border-purple-400/30 hover:shadow-purple-500/20"
            >
              <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${project.gradient}`} />

              <div className="relative overflow-hidden">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="relative block h-56 overflow-hidden rounded-t-3xl bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-slate-950/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-100 shadow-lg">
                    Live snapshot
                  </span>
                </a>
              </div>

              <div className="relative z-10 space-y-5 p-6">
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
                    Project {String(project.id).padStart(2, "0")}
                  </span>
                  <div className="flex space-x-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-400 transition hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-400 transition hover:border-purple-400 hover:bg-purple-400/10 hover:text-purple-300"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="mb-3 text-xl font-bold text-white sm:text-2xl">{project.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{project.description}</p>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div className={`h-2 flex-1 rounded-full bg-gradient-to-r ${project.gradient} opacity-20`} />
                  <div className="ml-4 flex space-x-1">
                    <div className={`h-2 w-2 rounded-full bg-gradient-to-r ${project.gradient}`} />
                    <div className={`h-2 w-2 rounded-full bg-gradient-to-r ${project.gradient} opacity-60`} />
                    <div className={`h-2 w-2 rounded-full bg-gradient-to-r ${project.gradient} opacity-30`} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-400">
            More projects coming soon. Check out my{" "}
            <a
              href="https://github.com/AsadFahimTEC"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 transition"
            >
              GitHub
            </a>{" "}
            for the latest updates.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default EventCategories;
