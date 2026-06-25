import { motion } from "framer-motion";
import ConstellationSkills from "./ConstellationSkills";
import EducationTimeline from "./EducationTimeline";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 border-t border-cyan/10">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center text-white mb-2"
        >
          Skills & Background
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center text-slate-400 mb-10"
        >
          Hover a node to see how it connects.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <ConstellationSkills />
        </motion.div>

        <EducationTimeline />
      </div>
    </section>
  );
}
