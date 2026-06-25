import { motion } from "framer-motion";
import { otherProjects } from "../data/content";
import CaseStudyImage from "./CaseStudyImage";
import TiltCard from "./TiltCard";

export default function OtherProjects() {
  return (
    <section id="projects" className="py-24 px-6 border-t border-cyan/10">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center text-white mb-2"
        >
          Other Notable Work
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center text-slate-400 mb-12"
        >
          Smaller in scope, still shipped.
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.15 }}
          className="grid md:grid-cols-3 gap-5"
        >
          {otherProjects.map((p) => (
            <motion.div
              key={p.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              <TiltCard
                className="rounded-xl p-6 h-full"
                style={{ background: "rgba(17, 24, 39, 0.6)", boxShadow: `0 0 0 1px ${p.color}30` }}
              >
                <h3 className="font-semibold mb-3" style={{ color: p.color }}>
                  {p.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">{p.description}</p>
                {p.images?.length > 0 && (
                  <div className="grid grid-cols-2 gap-2">
                    {p.images.map((img) => (
                      <CaseStudyImage key={img.file} {...img} accent={p.color} />
                    ))}
                  </div>
                )}
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
