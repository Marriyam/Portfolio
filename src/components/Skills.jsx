import { motion } from "framer-motion";
import { skills, education, certifications } from "../data/content";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 border-t border-cyan/10">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
        >
          Skills & Background
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.12 }}
          className="grid md:grid-cols-2 gap-5 mb-10"
        >
          {Object.entries(skills).map(([category, items]) => (
            <motion.div
              key={category}
              variants={{
                hidden: { opacity: 0, x: -20 },
                show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
              }}
              className="glow-border rounded-xl bg-navy-light/60 p-6"
            >
              <h3 className="font-mono text-cyan text-sm uppercase tracking-widest mb-3">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 text-sm rounded-md bg-indigo/30 text-slate-200 border border-indigo/40"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
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
