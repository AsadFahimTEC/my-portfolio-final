"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      degree: "BSC in Computer Science & Engineering",
      institution: "University of Rajshahi",
      period: "2017 - 2022",
      description: "Focused on software development, algorithms, data structures, and web technologies. Gained comprehensive knowledge in programming languages, database management, and software engineering principles.",
      achievements: ["Dean's List", "Programming Club Member", "Final Year Project: Web Application"],
    },
    {
      degree: "Higher Secondary School Certificate",
      institution: "Joypurhat Govt. College",
      period: "2013 - 2015",
      description: "Completed intermediate education with emphasis on science subjects including Mathematics, Physics, Chemistry, and Biology. Developed strong analytical and problem-solving skills.",
      achievements: ["Science Stream", "District Level Science Fair Participant"],
    },
    {
      degree: "Secondary School Certificate",
      institution: "Omar Garten Academy",
      period: "2004 - 2013",
      description: "Completed primary and secondary education with excellent academic performance. Built foundation in core subjects and developed interest in technology and science.",
      achievements: ["Academic Excellence Award", "School Prefect"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
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
              My Education Journey
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-300 sm:text-xl">
            A timeline of my academic achievements and the foundation that shaped my career in technology.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 via-pink-500 to-red-500 sm:left-1/2 sm:-ml-0.5" />

          <motion.div
            variants={containerVariants}
            className="space-y-12"
          >
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex flex-col sm:flex-row sm:items-center ${
                  index % 2 === 0 ? "sm:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 flex h-4 w-4 items-center justify-center rounded-full border-4 border-slate-950 bg-purple-400 sm:left-1/2 sm:-ml-2">
                  <div className="h-2 w-2 rounded-full bg-white" />
                </div>

                {/* Content */}
                <div className={`ml-16 sm:ml-0 sm:w-1/2 ${
                  index % 2 === 0 ? "sm:pr-12" : "sm:pl-12"
                }`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="rounded-3xl border border-white/10 bg-slate-900/50 p-6 shadow-2xl backdrop-blur-xl transition-all hover:border-purple-400/30 hover:shadow-purple-500/20"
                  >
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/10 text-purple-400">
                        <GraduationCap className="h-6 w-6" />
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-400">
                        <Calendar className="h-4 w-4" />
                        {edu.period}
                      </div>
                    </div>

                    <h3 className="mb-2 text-xl font-bold text-white sm:text-2xl">
                      {edu.degree}
                    </h3>

                    <p className="mb-4 text-purple-400 font-medium">
                      {edu.institution}
                    </p>

                    <p className="mb-4 text-slate-300 leading-relaxed">
                      {edu.description}
                    </p>

                    <div className="space-y-2">
                      <p className="text-sm font-medium text-slate-400">Key Achievements:</p>
                      <ul className="space-y-1">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                            <Award className="h-3 w-3 text-purple-400 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="rounded-3xl border border-white/10 bg-slate-900/50 p-8 backdrop-blur-xl">
            <h3 className="mb-4 text-xl font-bold text-white">Continuous Learning</h3>
            <p className="text-slate-300">
              Beyond formal education, I stay updated with the latest technologies through online courses,
              workshops, and hands-on projects. My journey in tech is ongoing and ever-evolving.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Education;