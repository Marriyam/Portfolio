import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { certifications } from "../data/content";

const images = import.meta.glob("../assets/screenshots/*.{png,jpg,jpeg}", {
  eager: true,
  query: "?url",
  import: "default",
});

function resolveImage(filename) {
  const match = Object.entries(images).find(([path]) => path.endsWith(filename));
  return match ? match[1] : null;
}

const fanRotations = [-18, -9, 0, 9, 18];
const fanOffsets = [-120, -60, 0, 60, 120];
const fanOffsetsCompact = [-40, -20, 0, 20, 40];

export default function CertificateFile() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      onViewportEnter={() => setOpen(true)}
      className="relative py-16"
    >
      <h3 className="font-mono text-cyan text-sm uppercase tracking-widest mb-2 text-center">
        Certifications &amp; Recognition
      </h3>
      <p className="text-slate-500 text-xs font-mono mb-10 text-center">
        {open ? "click a certificate to view" : "opening the file..."}
      </p>

      <div
        className={`relative flex items-center transition-all duration-500 ${
          selected ? "md:justify-start gap-4 md:gap-8" : "justify-center"
        }`}
      >
        <div
          className={`relative h-[280px] md:h-[340px] flex items-center justify-center transition-all duration-500 ${
            selected ? "w-full md:w-[40%] shrink-0" : "w-full max-w-3xl"
          }`}
        >
          <motion.div
            initial={{ scaleY: 1 }}
            animate={{ scaleY: open ? 0.3 : 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ transformOrigin: "bottom" }}
            className="absolute bottom-0 w-64 h-40 rounded-b-lg rounded-tr-lg"
          >
            <div
              className="absolute inset-0 rounded-b-lg rounded-tr-lg"
              style={{
                background: "linear-gradient(160deg, #d4a574, #b8895a)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
              }}
            />
            <div
              className="absolute -top-3 left-0 w-28 h-5 rounded-t-md"
              style={{ background: "#d4a574" }}
            />
          </motion.div>

          {certifications.map((cert, i) => {
            const src = resolveImage(cert.image);
            const rotation = selected ? 0 : fanRotations[i % fanRotations.length];
            const offset = selected
              ? fanOffsetsCompact[i % fanOffsetsCompact.length]
              : fanOffsets[i % fanOffsets.length];
            const isActive = selected?.title === cert.title;

            return (
              <motion.button
                key={cert.title}
                type="button"
                onClick={() => src && setSelected(cert)}
                initial={{ y: 20, opacity: 0, rotate: 0, x: 0 }}
                animate={
                  open
                    ? {
                        y: isActive ? -55 : -40,
                        opacity: 1,
                        rotate: rotation,
                        x: offset,
                        scale: isActive ? 1.1 : 1,
                      }
                    : { y: 20, opacity: 0, rotate: 0, x: 0 }
                }
                transition={{ duration: 0.5, delay: open && !selected ? 0.3 + i * 0.1 : 0, ease: "easeOut" }}
                whileHover={{ y: -70, scale: 1.08, zIndex: 20, transition: { duration: 0.25 } }}
                className="absolute w-24 md:w-32 cursor-pointer text-left"
                style={{ zIndex: isActive ? 30 : i }}
              >
                <div
                  className="rounded-md overflow-hidden bg-white"
                  style={{
                    boxShadow: isActive
                      ? "0 0 0 2px #22d3ee, 0 8px 24px rgba(0,0,0,0.45)"
                      : "0 8px 24px rgba(0,0,0,0.45)",
                  }}
                >
                  {src ? (
                    <img src={src} alt={cert.title} className="w-full h-auto block" />
                  ) : (
                    <div className="aspect-[4/3] flex items-center justify-center text-slate-400 text-xs p-2 text-center">
                      {cert.image}
                    </div>
                  )}
                </div>
                {!selected && (
                  <p className="text-[10px] text-slate-300 font-mono text-center mt-2 leading-tight">
                    {cert.title}
                  </p>
                )}
              </motion.button>
            );
          })}
        </div>

        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex-1 min-w-0"
            >
              <div className="flex justify-end mb-3">
                <button
                  onClick={() => setSelected(null)}
                  className="text-slate-300 hover:text-white text-xl px-2"
                >
                  ✕
                </button>
              </div>
              <div
                className="rounded-lg overflow-hidden bg-white"
                style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.5)" }}
              >
                <img
                  src={resolveImage(selected.image)}
                  alt={selected.title}
                  className="w-full h-auto block"
                />
              </div>
              <p className="text-center text-slate-300 text-sm font-mono mt-3">{selected.title}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
