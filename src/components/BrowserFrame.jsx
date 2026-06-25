import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import GlitchReveal from "./GlitchReveal";

const images = import.meta.glob("../assets/screenshots/*.{png,jpg,jpeg}", {
  eager: true,
  query: "?url",
  import: "default",
});

function resolveImage(filename) {
  const match = Object.entries(images).find(([path]) => path.endsWith(filename));
  return match ? match[1] : null;
}

export default function BrowserFrame({ file, caption, url, accent = "#22d3ee", primary, parallax = true }) {
  const src = resolveImage(file);
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], parallax ? [40, -40] : [0, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.94, 1, 0.96]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      style={{ boxShadow: `0 0 0 1px ${accent}30, 0 20px 60px -20px ${accent}40` }}
      className={`rounded-xl overflow-hidden bg-[#0d1117] transition-shadow ${
        primary ? "md:col-span-2" : ""
      }`}
    >
      <div className="flex items-center gap-2 px-3 py-2.5 bg-[#161b22] border-b border-white/5">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
        </div>
        <div className="flex-1 mx-2 px-3 py-1 rounded-md bg-black/30 text-[10px] font-mono text-slate-500 truncate text-center">
          {url || caption}
        </div>
      </div>

      <div className="overflow-hidden relative bg-white flex items-center justify-center p-4">
        {src ? (
          <motion.div style={{ y, scale }} className="w-full flex items-center justify-center">
            <GlitchReveal src={src} alt={caption} accent={accent} />
          </motion.div>
        ) : (
          <div className="aspect-video flex flex-col items-center justify-center gap-2 text-slate-500 bg-gradient-to-br from-navy-light to-indigo/30 p-6 text-center">
            <span className="text-3xl">🖼️</span>
            <span className="font-mono text-xs">
              Drop <span style={{ color: accent }}>{file}</span> into
              <br />
              src/assets/screenshots/
            </span>
          </div>
        )}
      </div>

      <div className="px-4 py-2 text-xs font-mono text-slate-400 border-t border-white/5">
        {caption}
      </div>
    </motion.div>
  );
}
