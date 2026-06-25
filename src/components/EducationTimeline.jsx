import { motion } from "framer-motion";
import { education } from "../data/content";
import TiltCard from "./TiltCard";
import CertificateFile from "./CertificateFile";
import CapToss from "./CapToss";

const images = import.meta.glob("../assets/screenshots/*.{png,jpg,jpeg}", {
  eager: true,
  query: "?url",
  import: "default",
});

function resolveImage(filename) {
  const match = Object.entries(images).find(([path]) => path.endsWith(filename));
  return match ? match[1] : null;
}

const logoSrc = resolveImage("uet-logo.jpg");

export default function EducationTimeline() {
  return (
    <div>
      <CapToss />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mb-6"
      >
        <TiltCard
          className="rounded-xl relative overflow-hidden flex items-stretch"
          style={{ background: "rgba(17, 24, 39, 0.6)", boxShadow: "0 0 0 1px #22d3ee30" }}
        >
          <motion.div
            animate={{ opacity: [0.1, 0.25, 0.1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(circle at 20% 20%, #22d3ee30, transparent 60%)" }}
          />

          <div className="flex-1 min-w-0 p-6">
            <h3 className="font-mono text-cyan text-sm uppercase tracking-widest mb-2">
              Education
            </h3>

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
          </div>

          {logoSrc && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative w-28 md:w-40 shrink-0 overflow-hidden"
            >
              <img
                src={logoSrc}
                alt="UET Lahore logo"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(17,24,39,0.95), rgba(17,24,39,0.1))",
                }}
              />
            </motion.div>
          )}
        </TiltCard>
      </motion.div>

      <CertificateFile />
    </div>
  );
}
