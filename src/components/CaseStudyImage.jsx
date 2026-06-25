import { useState } from "react";
import { motion } from "framer-motion";

const images = import.meta.glob("../assets/screenshots/*.{png,jpg,jpeg}", {
  eager: true,
  query: "?url",
  import: "default",
});

function resolveImage(filename) {
  const match = Object.entries(images).find(([path]) => path.endsWith(filename));
  return match ? match[1] : null;
}

export default function CaseStudyImage({ file, caption, primary, accent = "#22d3ee" }) {
  const [loaded, setLoaded] = useState(false);
  const src = resolveImage(file);

  return (
    <motion.figure
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      style={{ boxShadow: `0 0 0 1px ${accent}30`, background: "#111827" }}
      className={`rounded-xl overflow-hidden shadow-lg shadow-black/30 transition-shadow ${
        primary ? "md:col-span-2" : ""
      }`}
    >
      {src ? (
        <img
          src={src}
          alt={caption}
          onLoad={() => setLoaded(true)}
          className={`w-full h-auto block transition-opacity duration-500 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
      ) : (
        <div className="aspect-video flex flex-col items-center justify-center gap-2 text-slate-500 bg-gradient-to-br from-navy-light to-indigo/30 p-6 text-center">
          <span className="text-3xl">🖼️</span>
          <span className="font-mono text-xs">
            Drop <span className="text-cyan">{file}</span> into
            <br />
            src/assets/screenshots/
          </span>
        </div>
      )}
      <figcaption className="px-4 py-2 text-xs font-mono text-slate-400 border-t border-cyan/10">
        {caption}
      </figcaption>
    </motion.figure>
  );
}
