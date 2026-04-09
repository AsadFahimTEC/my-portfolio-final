"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Facebook,
  Linkedin,
  Instagram,
  MessageCircle,
  Twitter,
} from "lucide-react";

const footerVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delayChildren: 0.15,
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
    },
  },
};

const Footer = () => {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={footerVariants}
      className="relative overflow-hidden border-t border-white/10 bg-slate-950/95 py-14 px-6 sm:px-8 lg:px-14"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.12),_transparent_42%)]" />
      <motion.span
        initial={{ x: -280, opacity: 0.12, y: -4 }}
        animate={{ x: 1180 }}
        transition={{ repeat: Infinity, duration: 34 }}
        className="pointer-events-none absolute left-0 top-10 z-0 inline-block whitespace-nowrap text-4xl font-black uppercase tracking-[0.5em] text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-purple-400"
      >
        #JusticeForHadi
      </motion.span>
      <motion.span
        initial={{ x: 280, opacity: 0.1, y: 10 }}
        animate={{ x: -980 }}
        transition={{ repeat: Infinity, duration: 38 }}
        className="pointer-events-none absolute left-0 top-24 z-0 inline-block whitespace-nowrap text-3xl font-black uppercase tracking-[0.4em] text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-cyan-300 to-pink-300"
      >
        #JusticeForHadi
      </motion.span>
      <div className="relative mx-auto flex max-w-6xl flex-col gap-12">
        <motion.div variants={itemVariants} className="grid gap-8 lg:grid-cols-[1.6fr_1fr] xl:gap-12">
          <div className="rounded-[2rem] border border-white/10 bg-slate-900/75 p-8 shadow-[0_35px_70px_rgba(15,23,42,0.25)] backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Stay connected</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              Let’s keep your next project moving.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
              Discover polished interactions, fast responsiveness, and a confident footer experience across every device.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-900/75 p-7 shadow-[0_35px_70px_rgba(15,23,42,0.18)] backdrop-blur-xl">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <h3 className="text-xl font-semibold text-white">Navigation</h3>
              <Link href="/#contact" className="inline-flex items-center rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 px-5 py-2 text-sm font-semibold text-white transition hover:scale-[1.02]">
                Contact Me
              </Link>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                { label: "Home", url: "/" },
                { label: "About", url: "/#about-me" },
                { label: "Projects", url: "/#projects" },
                { label: "Contact", url: "/#contact" },
                // { label: "Terms", url: "/terms" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.url}
                  className="rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-slate-200 transition hover:border-cyan-400 hover:text-white hover:shadow-lg hover:shadow-cyan-500/10"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="grid gap-10 xl:grid-cols-[2fr_1fr] xl:items-end">
          <div className="rounded-[2rem] border border-white/10 bg-slate-900/75 p-8 shadow-[0_35px_70px_rgba(15,23,42,0.20)] backdrop-blur-xl">
            <h4 className="text-lg font-semibold text-white">Contact details</h4>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-950/85 p-5 text-center shadow-inner shadow-slate-950/10">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Email</p>
                <a href="mailto:fah485434@gmail.com" className="mt-3 block text-base font-medium text-white hover:text-cyan-400">
                  fah485434@gmail.com
                </a>
              </div>
              <div className="rounded-3xl bg-slate-950/85 p-5 text-center shadow-inner shadow-slate-950/10">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Phone</p>
                <a href="tel:+8801790833542" className="mt-3 block text-base font-medium text-white hover:text-cyan-400">
                  +880 179 083 3542
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-900/75 p-8 shadow-[0_35px_70px_rgba(15,23,42,0.20)] backdrop-blur-xl">
            <h4 className="text-lg font-semibold text-white">Follow me</h4>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:justify-start">
              {[
                { href: "https://facebook.com", icon: Facebook, label: "Facebook", color: "text-cyan-400/90", hover: "hover:bg-cyan-500/15 hover:text-cyan-300" },
                { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn", color: "text-purple-400/90", hover: "hover:bg-purple-500/15 hover:text-purple-300" },
                { href: "https://instagram.com", icon: Instagram, label: "Instagram", color: "text-pink-400/90", hover: "hover:bg-pink-500/15 hover:text-pink-300" },
                { href: "https://messenger.com", icon: MessageCircle, label: "Messenger", color: "text-cyan-300/90", hover: "hover:bg-cyan-500/15 hover:text-cyan-300" },
                { href: "https://twitter.com", icon: Twitter, label: "Twitter", color: "text-sky-400/90", hover: "hover:bg-sky-500/15 hover:text-sky-300" },
              ].map(({ href, icon: Icon, label, color, hover }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-slate-950/80 text-slate-200 transition ${hover}`}
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col gap-4 border-t border-white/10 pt-6 text-center text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p className="text-sm">
            © {new Date().getFullYear()} MD. <span className="text-fuchsia-400">Asaduzzaman</span>. All rights reserved.
          </p>
          <p className="text-sm">
            Designed for modern portfolios with clean responsiveness and animated polish.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
