"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItem = (href: string, label: string) => (
    <Link
      href={href}
      onClick={() => setIsOpen(false)}
      className={`relative px-4 py-2 transition duration-300 ${
        pathname === href
          ? "text-yellow-400 font-semibold"
          : "hover:text-cyan-400"
      }`}
    >
      {label}
    </Link>
  );

  const downloadResume = () => {
    const content = `
MD. Asaduzzaman
MERN Stack Developer

Skills:
- MongoDB
- Express.js
- React.js
- Next.js
- Node.js
    `;

    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "resume.txt";
    a.click();
  };

  return (
    <header className="relative z-50 w-full">
      <nav className="flex items-center justify-between px-6 py-4 bg-black/80 backdrop-blur-lg text-white shadow-lg">
        {/* LED Animated Title */}
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-extrabold tracking-widest"
        >
          <motion.span
            animate={{
              textShadow: [
                "0 0 10px cyan",
                "0 0 20px magenta",
                "0 0 10px cyan",
              ],
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="bg-gradient-to-r from-red-400 via-green-500 to-red-500 bg-clip-text text-transparent"
          >
            MD. Asaduzzaman
          </motion.span>
        </motion.div>
 
    <motion.div
      initial={{ x: -600, y: 250 }}
      animate={{ x: 1600 }}
      transition={{
        duration: 30,
        repeat: Infinity,
        ease: 'linear'
      }}
      className="absolute top-1/3 text-4xl md:text-6xl font-extrabold pointer-events-none z-0"
    >
      <span className="bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-600 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(255,0,255,0.8)] animate-pulse">
        #JusticeForHadi
      </span>
    </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          {navItem("/", "Home")}
          {navItem("/about", "About")}
          {navItem("/contact", "Contact")}
          <button
            onClick={downloadResume}
            className="hover:text-green-400 transition"
          >
            Download Resume
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex flex-col md:hidden bg-black/95 px-6 py-4 gap-4 text-white">
          {navItem("/", "Home")}
          {navItem("/about", "About")}
          {navItem("/contact", "Contact")}
          <button onClick={downloadResume}>Download Resume</button>
        </div>
      )}
    </header>
  );
}
