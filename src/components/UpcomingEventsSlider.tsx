"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const UpcomingEventsSlider = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    { name: "HTML", src: "https://i.ibb.co/BwZ0F69/png-transparent-logo-html-html5-thumbnail-removebg-preview.png" },
    { name: "CSS", src: "https://i.ibb.co/Lvbw8KV/png-clipart-html-css3-cascading-style-sheets-logo-markup-language-digital-agency-miscellaneous-blue.png" },
    { name: "JavaScript", src: "https://i.ibb.co/cthQ5yz/javascript-1024x341-removebg-preview.png" },
    { name: "TypeScript", src: "https://i.ibb.co/Xk8P0rn/download-removebg-preview.png" },
    { name: "React", src: "https://i.ibb.co/RBf741X/React-icon-svg-removebg-preview.png" },
    { name: "Next.js", src: "https://i.ibb.co/TPtC5jD/1-t-OI6-UC5-Ea-S2f-PIt-Ces-I-AQ-removebg-preview.png" },
    { name: "Express.js", src: "https://i.ibb.co/ZTq2R4Z/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo-removebg-preview.png" },
    { name: "MongoDB", src: "https://i.ibb.co/PZ1Cpf5/1-do-Ag1-f-MQKWFoub-6gw-Ui-Q-removebg-preview.png" },
    {name: "Tailwind CSS", src: "https://i.ibb.co.com/Ld4MvD3j/download.png" },
    {name: "PostgreSQL", src: "https://i.ibb.co.com/nd9h88G/Postgresql-elephant-svg.png" },
    {name: "Prisma ORM", src: "https://i.ibb.co.com/twDV77zb/download-1.png" },
  ];

  const duplicatedSkills = [...skills, ...skills]; // Duplicate for seamless loop

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
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
      className="relative overflow-hidden bg-slate-950/95 py-16 sm:py-20"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.08),_transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <motion.h2
          variants={titleVariants}
          className="mb-12 text-center text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
        >
          <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            My Skills
          </span>
        </motion.h2>

        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/50 p-8 shadow-2xl backdrop-blur-xl">
          <div className="flex space-x-8 overflow-hidden">
            <motion.div
              animate={{
                x: isVisible ? [0, -100 * skills.length] : 0,
                transition: {
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 20,
                  },
                },
              }}
              className="flex space-x-8"
            >
              {duplicatedSkills.map((skill, index) => (
                <motion.div
                  key={`${skill.name}-${index}`}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="flex-shrink-0 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-sm transition-all hover:border-cyan-400/30 hover:shadow-cyan-500/20"
                >
                  <img
                    src={skill.src}
                    alt={`${skill.name} logo`}
                    className="h-16 w-16 object-contain sm:h-20 sm:w-20"
                    loading="lazy"
                  />
                  <p className="mt-3 text-center text-sm font-medium text-white sm:text-base">
                    {skill.name}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-slate-300 sm:text-xl">
            Continuously learning and mastering new technologies to build better experiences.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default UpcomingEventsSlider;
