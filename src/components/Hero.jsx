import { motion } from "framer-motion";
import { profile } from "../data/content";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.18, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-indigo/40 to-navy pointer-events-none" />

      <motion.div
        animate={{
          opacity: [0.15, 0.35, 0.15],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          opacity: [0.1, 0.25, 0.1],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-400 rounded-full blur-3xl pointer-events-none"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-3xl text-center"
      >
        <motion.p
          variants={item}
          className="font-mono text-cyan text-sm md:text-base tracking-widest uppercase mb-4"
        >
          Hi, I'm
        </motion.p>

        <motion.h1
          variants={item}
          className="text-5xl md:text-7xl font-bold gradient-text mb-6"
        >
          {profile.name}
        </motion.h1>

        <motion.p variants={item} className="text-xl md:text-2xl text-slate-200 font-medium mb-4">
          {profile.tagline}
        </motion.p>

        <motion.p variants={item} className="text-slate-400 max-w-xl mx-auto mb-10">
          {profile.subtitle}
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-4">
          <motion.a
            href="#work"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="px-6 py-3 rounded-lg bg-cyan text-navy font-semibold shadow-lg shadow-cyan/20 transition-shadow hover:shadow-cyan/40"
          >
            View Case Studies
          </motion.a>
          <motion.a
            href={`mailto:${profile.email}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="px-6 py-3 rounded-lg border border-cyan/40 text-cyan font-semibold transition-colors hover:bg-cyan/10"
          >
            Contact Me
          </motion.a>
          <motion.a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="px-6 py-3 rounded-lg border border-slate-600 text-slate-300 font-semibold transition-colors hover:border-cyan/40 hover:text-cyan"
          >
            LinkedIn
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-cyan/60 text-sm font-mono"
      >
        scroll ↓
      </motion.div>
    </section>
  );
}
