import { motion } from "framer-motion";
import { education } from "../data/content";
import TiltCard from "./TiltCard";
import CertificateFile from "./CertificateFile";

export default function EducationTimeline() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto mb-6"
      >
        <TiltCard
          className="rounded-xl p-6 relative overflow-hidden"
          style={{ background: "rgba(17, 24, 39, 0.6)", boxShadow: "0 0 0 1px #22d3ee30" }}
        >
          <motion.div
            animate={{ opacity: [0.1, 0.25, 0.1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(circle at 20% 20%, #22d3ee30, transparent 60%)" }}
          />

          <div className="flex items-center gap-2 mb-4">
            <motion.span
              animate={{ rotate: [0, 8, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="text-2xl"
            >
              🎓
            </motion.span>
            <h3 className="font-mono text-cyan text-sm uppercase tracking-widest">Education</h3>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-white font-semibold text-lg"
          >
            {education.degree}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="flex flex-wrap items-center gap-2 my-3"
          >
            <span className="text-xs font-mono px-2 py-1 rounded-md bg-cyan/10 text-cyan border border-cyan/20">
              {education.institution}
            </span>
            <span className="text-xs font-mono px-2 py-1 rounded-md bg-white/5 text-slate-300">
              {education.years}
            </span>
            <motion.span
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3, type: "spring" }}
              className="text-xs font-mono px-2 py-1 rounded-md bg-cyan text-navy font-bold"
            >
              {education.gpa}
            </motion.span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-slate-300 text-sm leading-relaxed"
          >
            {education.notes}
          </motion.p>
        </TiltCard>
      </motion.div>

      <CertificateFile />
    </div>
  );
}
