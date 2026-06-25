import { motion } from "framer-motion";
import { profile } from "../data/content";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-32 px-6 border-t border-cyan/10 grid-bg overflow-hidden"
    >
      <motion.div
        animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.1, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan rounded-full blur-3xl pointer-events-none"
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-2xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Let's <span className="gradient-text">work together</span>
        </h2>
        <p className="text-slate-400 mb-10">
          Ready to talk about reliable AI, fraud detection, or shipping product. Reach out.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <motion.a
            href={`mailto:${profile.email}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="px-6 py-3 rounded-lg bg-cyan text-navy font-semibold shadow-lg shadow-cyan/20"
          >
            {profile.email}
          </motion.a>
          <motion.a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="px-6 py-3 rounded-lg border border-cyan/40 text-cyan font-semibold"
          >
            LinkedIn
          </motion.a>
        </div>

        <p className="font-mono text-xs text-slate-500">
          {profile.phone} · {profile.location}
        </p>
      </motion.div>
    </section>
  );
}
