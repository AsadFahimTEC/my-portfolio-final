"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home", hash: "" },
  { href: "/#about-me", label: "About", hash: "#about-me" },
  { href: "/#projects", label: "Projects", hash: "#projects" },
  { href: "/#contact", label: "Contact", hash: "#contact" },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const updateHash = () => setActiveHash(window.location.hash || "");
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  const downloadResume = () => {
    const content = `MD. Asaduzzaman\nMERN Stack Developer\n\nSkills:\n- MongoDB\n- Express.js\n- React.js\n- Next.js\n- Node.js\n`;

    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "resume.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  const isActive = (hash: string, href: string) => {
    if (hash) {
      return pathname === "/" && activeHash === hash;
    }
    return pathname === "/" && activeHash === "";
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.75 } },
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={headerVariants}
      className="relative sticky top-0 z-50 overflow-hidden border-b border-white/10 bg-slate-950/95 backdrop-blur-xl shadow-xl shadow-slate-950/20"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-28 overflow-hidden">
        <motion.span
          initial={{ x: -320, opacity: 0.16, y: -8 }}
          animate={{ x: 1280 }}
          transition={{ repeat: Infinity, duration: 34 }}
          className="absolute left-0 top-6 inline-block whitespace-nowrap text-4xl font-black uppercase tracking-[0.56em] text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-purple-400"
        >
          #JusticeForHadi
        </motion.span>
        <motion.span
          initial={{ x: 280, opacity: 0.12, y: 10 }}
          animate={{ x: -1040 }}
          transition={{ repeat: Infinity, duration: 38 }}
          className="absolute left-0 top-16 inline-block whitespace-nowrap text-3xl font-black uppercase tracking-[0.42em] text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-purple-400"
        >
          #JusticeForHadi
        </motion.span>
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-500 to-fuchsia-500 text-white shadow-lg shadow-cyan-500/20">
            <span className="text-lg font-bold">MA</span>
          </div>
          <div>
            <p className="text-base font-semibold text-white">MD. Asaduzzaman</p>
            <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Full Stack Web Developer</p>
          </div>
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
            }}
            className="flex items-center gap-6"
          >
            {navLinks.map(({ href, label, hash }) => (
              <motion.div key={href} variants={menuVariants}>
                <Link
                  href={href}
                  onClick={() => setActiveHash(hash)}
                  className={`text-sm font-medium transition ${
                    isActive(hash, href)
                      ? "text-cyan-400"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {label}
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.button
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
            onClick={downloadResume}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 via-violet-500 to-fuchsia-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:brightness-110"
          >
            <Download className="h-4 w-4" />
            Resume
          </motion.button>
        </div>

        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/80 text-slate-200 transition hover:border-cyan-400 hover:text-white md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden border-t border-white/10 bg-slate-950/95 px-5 py-4"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map(({ href, label, hash }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => {
                    setIsOpen(false);
                    setActiveHash(hash);
                  }}
                  className={`rounded-2xl px-4 py-3 text-sm font-medium transition ${
                    isActive(hash, href)
                      ? "bg-cyan-500/10 text-cyan-300"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>

            <button
              onClick={() => {
                downloadResume();
                setIsOpen(false);
              }}
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-3xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:brightness-110"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
