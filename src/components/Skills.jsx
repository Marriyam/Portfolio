import { motion } from "framer-motion";
import { education, certifications } from "../data/content";
import ConstellationSkills from "./ConstellationSkills";

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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glow-border rounded-xl bg-navy-light/60 p-6 mb-6"
        >
          <h3 className="font-mono text-cyan text-sm uppercase tracking-widest mb-2">Education</h3>
          <p className="text-white font-semibold">{education.degree}</p>
          <p className="text-slate-400 text-sm mb-2">
            {education.institution} · {education.years} · {education.gpa}
          </p>
          <p className="text-slate-300 text-sm leading-relaxed">{education.notes}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glow-border rounded-xl bg-navy-light/60 p-6"
        >
          <h3 className="font-mono text-cyan text-sm uppercase tracking-widest mb-3">
            Certifications & Recognition
          </h3>
          <ul className="space-y-2">
            {certifications.map((c) => (
              <li key={c} className="text-slate-300 text-sm flex items-start gap-2">
                <span className="text-cyan mt-0.5">▸</span>
                {c}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
