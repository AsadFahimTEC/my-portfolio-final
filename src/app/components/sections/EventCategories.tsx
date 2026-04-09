"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const EventCategories = () => {
  const projects = [
    {
      id: 1,
      title: "JourneyJive",
      description: "A comprehensive tourist guide platform offering 6 popular packages including JiveDiscover, JiveVoyages, JiveDestiny, JiveOdyssey, JiveWanderlust, and JiveHorizons for seamless travel planning.",
      liveUrl: "https://peoplepro-af1ed.web.app",
      codeUrl: "https://github.com/AsadFahimTEC/b8a12-client-side",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      title: "BookStore",
      description: "A book services platform providing book recommendations, literary events calendar, book club subscriptions, and bookstore loyalty programs for avid readers.",
      liveUrl: "https://654cd7a74cf70141250f52fc--cosmic-crisp-16b882.netlify.app",
      codeUrl: "https://github.com/AsadFahimTEC/b8a11-client-side",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      id: 3,
      title: "Drinko",
      description: "A food and beverage platform featuring 6 major brands including Coca-Cola, McDonald's, Starbucks, PepsiCo, Nestlé, and Kellogg's with an intuitive navigation experience.",
      liveUrl: "https://brand-shop-e0506.web.app",
      codeUrl: "https://github.com/AsadFahimTEC/b8a10-brandshop-client-side",
      gradient: "from-purple-500 to-pink-500",
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

        <motion.div
          variants={containerVariants}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/50 p-6 shadow-2xl backdrop-blur-xl transition-all hover:border-purple-400/30 hover:shadow-purple-500/20"
            >
              <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${project.gradient}`} />

              <div className="relative z-10">
                <div className="mb-4 flex items-center justify-between">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
                    Project {String(project.id).padStart(2, '0')}
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

                <h3 className="mb-3 text-xl font-bold text-white sm:text-2xl">
                  {project.title}
                </h3>

                <p className="text-slate-300 leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-6 flex items-center justify-between">
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
