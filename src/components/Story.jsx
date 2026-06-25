import { useState } from "react";
import { motion } from "framer-motion";
import { story, profile } from "../data/content";

const images = import.meta.glob("../assets/screenshots/*.{png,jpg,jpeg}", {
  eager: true,
  query: "?url",
  import: "default",
});

function resolvePhoto() {
  const match = Object.entries(images).find(([path]) =>
    /photo|profile|portrait|me\.|headshot/i.test(path)
  );
  return match ? match[1] : null;
}

export default function Story() {
  const [loaded, setLoaded] = useState(false);
  const photoSrc = resolvePhoto();

  return (
    <section id="about" className="relative py-28 px-6 border-t border-cyan/10 overflow-hidden">
      <motion.div
        animate={{ opacity: [0.08, 0.18, 0.08] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 -right-32 w-96 h-96 bg-indigo-400 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_1.4fr] gap-12 items-start relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="md:sticky md:top-28"
        >
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden glow-border bg-gradient-to-br from-navy-light to-indigo/40">
            {photoSrc ? (
              <img
                src={photoSrc}
                alt={profile.name}
                onLoad={() => setLoaded(true)}
                className={`w-full h-full object-cover transition-opacity duration-700 ${
                  loaded ? "opacity-100" : "opacity-0"
                }`}
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center gap-3 text-slate-500 p-6 text-center">
                <span className="text-4xl">📸</span>
                <span className="font-mono text-xs">
                  Drop a photo (named with "photo" in the
                  <br />
                  filename) into src/assets/screenshots/
                </span>
              </div>
            )}
            <div className="absolute inset-0 ring-1 ring-cyan/20 rounded-2xl pointer-events-none" />
          </div>
          <p className="font-mono text-xs text-cyan mt-4 text-center tracking-widest uppercase">
            {profile.location}
          </p>
        </motion.div>

        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-mono text-cyan text-sm tracking-widest uppercase mb-3"
          >
            // about me
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-white mb-8"
          >
            How I got here
          </motion.h2>

          <div className="space-y-5">
            {story.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="text-slate-300 leading-relaxed"
              >
                {p}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
