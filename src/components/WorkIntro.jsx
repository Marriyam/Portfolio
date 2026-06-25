import { motion } from "framer-motion";

export default function WorkIntro() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center px-6 border-t border-cyan/10 overflow-hidden">
      <motion.div
        animate={{ opacity: [0.08, 0.2, 0.08] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0"
        style={{ background: "radial-gradient(circle at 50% 50%, #22d3ee20, transparent 65%)" }}
      />

      <div className="relative z-10 text-center max-w-2xl">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-mono text-cyan text-sm tracking-widest uppercase mb-4"
        >
          // selected work
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold text-white mb-4"
        >
          Where the work <span className="gradient-text">speaks for itself</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-slate-400"
        >
          Six systems, six domains, one habit: build the thing that earns trust.
        </motion.p>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="mt-10 text-cyan/60 font-mono text-sm"
        >
          scroll ↓
        </motion.div>
      </div>
    </section>
  );
}
