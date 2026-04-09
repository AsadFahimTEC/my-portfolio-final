"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, LayoutGrid, Mail, Sparkles } from "lucide-react";

const Banner = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        when: "beforeChildren",
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
      },
    },
  };

  return (
    <motion.section
      id="about-me"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={containerVariants}
      className="relative overflow-hidden bg-slate-950/95 py-16 sm:py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(239,68,68,0.14),_transparent_0%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.18),_transparent_0%)]" />
      <div className="pointer-events-none absolute right-[-120px] top-24 h-72 w-72 rounded-full bg-red-500/10 blur-3xl" />
      <div className="pointer-events-none absolute left-[-120px] bottom-20 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-6 sm:px-8 lg:flex-row lg:items-center lg:gap-16">
        <motion.div
          variants={itemVariants}
          className="group relative flex-1 overflow-hidden rounded-[36px] border border-white/10 bg-slate-950/70 p-5 shadow-2xl shadow-slate-950/40 backdrop-blur-xl sm:p-6 lg:p-8"
        >
          <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-red-500/10 blur-3xl" />
          <div className="absolute -left-16 bottom-10 h-52 w-52 rounded-full bg-emerald-400/10 blur-3xl" />

          <div className="relative z-10 rounded-[32px] bg-slate-950 p-3 shadow-[0_30px_90px_-45px_rgba(0,0,0,0.8)]">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-red-500/20 via-transparent to-emerald-500/20 p-1"
            >
              <div className="relative overflow-hidden rounded-[26px] bg-slate-950">
                <img
                  src="https://i.ibb.co/nBYsmzS/Asad.png"
                  alt="Portrait of MD. Asaduzzaman"
                  className="h-[340px] w-full object-cover object-top"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top_left,_rgba(239,68,68,0.22),_transparent_42%),radial-gradient(circle_at_top_right,_rgba(16,185,129,0.18),_transparent_42%)]" />
              </div>
            </motion.div>
          </div>

          <div className="relative z-10 mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-slate-900/90 px-4 py-5 text-center transition hover:-translate-y-1 hover:border-red-400/30">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Name</p>
              <p className="mt-3 text-sm font-semibold text-white">MD. Asaduzzaman</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-900/90 px-4 py-5 text-center transition hover:-translate-y-1 hover:border-emerald-400/30">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Nationality</p>
              <p className="mt-3 text-sm font-semibold text-white">Bangladeshi</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-900/90 px-4 py-5 text-center transition hover:-translate-y-1 hover:border-cyan-400/30">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Role</p>
              <p className="mt-3 text-sm font-semibold text-white">Web Developer</p>
            </div>
          </div>

          <div className="absolute right-4 top-6 hidden rounded-full border border-white/5 bg-white/5 px-4 py-2 text-xs text-slate-200 shadow-lg backdrop-blur md:block">
            <span className="inline-flex items-center gap-2 text-slate-100">
              <Sparkles className="h-4 w-4 text-cyan-300" />
              1+ year building polished UI
            </span>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="flex-1 text-white">
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium uppercase tracking-[0.22em] text-cyan-200 shadow-sm shadow-cyan-500/10">
            About Me
          </span>
          <motion.h2
            variants={itemVariants}
            className="mt-6 text-3xl font-semibold leading-tight text-white sm:text-4xl xl:text-5xl"
          >
            Professional web development with a modern, responsive design.
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg"
          >
            I build polished user interfaces and experiences that feel intuitive,
            fast, and beautiful. My focus is on working with clean code, responsive
            layouts, and modern interaction patterns that look great on every device.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-8 grid gap-4 sm:grid-cols-2"
          >
            <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-5">
              <p className="text-sm text-slate-400">Primary focus</p>
              <p className="mt-3 text-lg font-semibold text-white">UI / UX, performance, accessibility</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-5">
              <p className="text-sm text-slate-400">What I deliver</p>
              <p className="mt-3 text-lg font-semibold text-white">Fast, modern websites with polished interactions</p>
            </div>
          </motion.div>

          <motion.ul
            variants={itemVariants}
            className="mt-8 space-y-4"
          >
            <li className="flex items-start gap-3 rounded-3xl border border-white/10 bg-slate-900/80 p-4">
              <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-red-500/10 text-red-300">
                <Code2 className="h-5 w-5" />
              </span>
              <div>
                <p className="font-semibold text-white">Clean, maintainable code</p>
                <p className="mt-1 text-sm text-slate-400">Component-first React code with responsive Tailwind styling.</p>
              </div>
            </li>
            <li className="flex items-start gap-3 rounded-3xl border border-white/10 bg-slate-900/80 p-4">
              <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-300">
                <LayoutGrid className="h-5 w-5" />
              </span>
              <div>
                <p className="font-semibold text-white">Responsive across all screen sizes</p>
                <p className="mt-1 text-sm text-slate-400">Layouts that adapt smoothly from mobile to desktop.</p>
              </div>
            </li>
          </motion.ul>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <a
              href="mailto:fah485434@gmail.com"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-red-500 via-fuchsia-500 to-emerald-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20 transition hover:scale-[1.01] sm:w-auto"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </a>
            <a
              href="#projects"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-300 sm:w-auto"
            >
              See My Work
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Banner;
