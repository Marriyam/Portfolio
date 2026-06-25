import { motion } from "framer-motion";
import CaseStudyImage from "./CaseStudyImage";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const cards = [
  { key: "problem", label: "Problem", icon: "❓" },
  { key: "approach", label: "Approach", icon: "⚙️" },
  { key: "decision", label: "Key Decision", icon: "🎯" },
  { key: "outcome", label: "Outcome", icon: "🏆" },
];

function StatBadge({ stat }) {
  if (!stat) return null;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex items-center justify-center gap-6 mb-10 font-mono"
    >
      <span className="text-2xl md:text-4xl text-slate-500 line-through">{stat.before}</span>
      <motion.span
        animate={{ x: [0, 6, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="text-cyan text-2xl"
      >
        →
      </motion.span>
      <span className="text-2xl md:text-4xl text-cyan font-bold">{stat.after}</span>
      <span className="text-slate-400 text-sm ml-2 hidden md:inline">{stat.label}</span>
    </motion.div>
  );
}

export default function CaseStudy({ study, index }) {
  const isFeatured = study.tag.toLowerCase().includes("featured");

  return (
    <motion.section
      id={study.id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
      className="relative py-24 px-6 border-t border-cyan/10"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex justify-center mb-4"
        >
          <span
            className={`px-4 py-1 rounded-full text-xs font-mono tracking-widest uppercase ${
              isFeatured
                ? "bg-cyan text-navy font-bold"
                : "bg-cyan/10 text-cyan border border-cyan/30"
            }`}
          >
            {study.tag}
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold text-center text-white mb-4"
        >
          {study.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-slate-400 max-w-2xl mx-auto mb-12"
        >
          {study.oneLiner}
        </motion.p>

        <StatBadge stat={study.stat} />

        {study.images?.length > 0 && (
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {study.images.map((img) => (
              <CaseStudyImage key={img.file} {...img} />
            ))}
          </div>
        )}

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.15 }}
          className="grid md:grid-cols-2 gap-5"
        >
          {cards.map((c) => (
            <motion.div
              key={c.key}
              variants={cardVariants}
              className="glow-border rounded-xl bg-navy-light/60 backdrop-blur-sm p-6"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl">{c.icon}</span>
                <h3 className="font-semibold text-cyan-bright">{c.label}</h3>
              </div>
              <p className="text-slate-300 leading-relaxed">{study[c.key]}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 mt-8"
        >
          {study.stack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-mono rounded-md bg-indigo/30 text-slate-300 border border-indigo/40"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {study.link && (
          <div className="flex justify-center mt-6">
            <a
              href={study.link}
              target="_blank"
              rel="noreferrer"
              className="text-cyan text-sm font-mono underline-offset-4 hover:underline"
            >
              View live →
            </a>
          </div>
        )}
      </div>
    </motion.section>
  );
}
