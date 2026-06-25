import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BrowserFrame from "./BrowserFrame";
import CountUpStat from "./CountUpStat";
import TiltCard from "./TiltCard";
import IntroScene from "./IntroScene";
import { sceneMap } from "./scenes/sceneMap";

const cards = [
  { key: "problem", label: "Problem", icon: "❓" },
  { key: "approach", label: "Approach", icon: "⚙️" },
  { key: "decision", label: "Key Decision", icon: "🎯" },
  { key: "outcome", label: "Outcome", icon: "🏆" },
];

export default function CaseStudy({ study, index = 0, stacked = false }) {
  const [expanded, setExpanded] = useState(false);
  const isFeatured = study.tag.toLowerCase().includes("featured");
  const c = study.color;
  const heroImage = study.images?.find((i) => i.primary) ?? study.images?.[0];
  const extraImages = study.images?.filter((i) => i !== heroImage) ?? [];
  const BackgroundScene = study.theme ? sceneMap[study.theme] : null;

  return (
    <>
      {study.theme && <IntroScene theme={study.theme} color={c} title={study.title} />}

      <section
        id={study.id}
        className={`${
          stacked ? "sticky top-0" : "snap-start"
        } min-h-screen flex flex-col justify-center relative border-t border-cyan/10 py-10 px-6 overflow-hidden`}
        style={{
          background: stacked
            ? `linear-gradient(135deg, ${c}1a, transparent 60%), #0a0e1a`
            : `linear-gradient(135deg, ${c}1a, transparent 60%)`,
          zIndex: stacked ? index + 1 : "auto",
        }}
      >
        {BackgroundScene && (
          <div className="absolute inset-0 opacity-[0.15] pointer-events-none">
            <BackgroundScene color={c} />
          </div>
        )}

        <div
          className="absolute top-0 left-0 w-full h-1"
          style={{ background: `linear-gradient(90deg, transparent, ${c}, transparent)` }}
        />

        <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-8 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="mb-4"
            >
              <span
                className="px-4 py-1 rounded-full text-xs font-mono tracking-widest uppercase font-bold"
                style={{
                  background: isFeatured ? c : `${c}20`,
                  color: isFeatured ? "#0a0e1a" : c,
                  border: isFeatured ? "none" : `1px solid ${c}50`,
                }}
              >
                {study.tag}
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-white mb-2"
            >
              {study.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-base md:text-lg font-semibold mb-3"
              style={{ color: c }}
            >
              {study.headline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap gap-2 mb-3"
            >
              {study.metaTags?.slice(0, 3).map((t) => (
                <span
                  key={t}
                  className="text-xs font-mono px-2 py-0.5 rounded-md text-slate-300"
                  style={{ background: "rgba(255,255,255,0.05)" }}
                >
                  {t}
                </span>
              ))}
            </motion.div>

            {study.metrics?.length > 0 && (
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ staggerChildren: 0.12 }}
                className="flex flex-wrap gap-6 mb-4"
              >
                {study.metrics.slice(0, 3).map((m, i) => (
                  <motion.div
                    key={i}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                    }}
                  >
                    <CountUpStat {...m} color={c} />
                  </motion.div>
                ))}
              </motion.div>
            )}

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ staggerChildren: 0.1 }}
              className="grid grid-cols-2 gap-3"
            >
              {cards.map((card) => (
                <motion.div
                  key={card.key}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                  }}
                >
                  <TiltCard
                    className="rounded-lg backdrop-blur-sm p-3 h-full"
                    style={{ background: "rgba(17, 24, 39, 0.6)", boxShadow: `0 0 0 1px ${c}26` }}
                  >
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="text-sm">{card.icon}</span>
                      <h3 className="text-xs font-semibold" style={{ color: c }}>
                        {card.label}
                      </h3>
                    </div>
                    <p className="text-slate-300 text-xs leading-snug line-clamp-4">
                      {study[card.key]}
                    </p>
                  </TiltCard>
                </motion.div>
              ))}
            </motion.div>

            <div className="flex items-center gap-4 mt-4">
              <button
                onClick={() => setExpanded(true)}
                className="text-xs font-mono underline-offset-4 hover:underline"
                style={{ color: c }}
              >
                View full details →
              </button>
              {study.link && (
                <a
                  href={study.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-mono text-slate-400 hover:text-slate-200"
                >
                  Live link ↗
                </a>
              )}
            </div>
          </div>

          {heroImage && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <BrowserFrame {...heroImage} accent={c} url={study.link} parallax={false} />
            </motion.div>
          )}
        </div>
      </section>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-navy/95 backdrop-blur-sm overflow-y-auto p-6"
            onClick={() => setExpanded(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl mx-auto bg-navy-light/90 rounded-2xl p-8 my-10"
              style={{ boxShadow: `0 0 0 1px ${c}40` }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-white">{study.title}</h2>
                <button
                  onClick={() => setExpanded(false)}
                  className="text-slate-400 hover:text-white text-xl"
                >
                  ✕
                </button>
              </div>

              <p className="text-slate-300 mb-6">{study.oneLiner}</p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {cards.map((card) => (
                  <div
                    key={card.key}
                    className="rounded-lg p-4"
                    style={{ background: "rgba(255,255,255,0.03)", boxShadow: `0 0 0 1px ${c}26` }}
                  >
                    <h3 className="text-sm font-semibold mb-1" style={{ color: c }}>
                      {card.icon} {card.label}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed">{study[card.key]}</p>
                  </div>
                ))}
              </div>

              {extraImages.length > 0 && (
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {extraImages.map((img) => (
                    <BrowserFrame key={img.file} {...img} accent={c} url={study.link} parallax={false} />
                  ))}
                </div>
              )}

              <div className="flex flex-wrap gap-2">
                {study.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-mono rounded-md text-slate-300"
                    style={{ background: `${c}1a`, border: `1px solid ${c}33` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
