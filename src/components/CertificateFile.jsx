import { useState } from "react";
import { motion } from "framer-motion";
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

export default function CertificateFile() {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      onViewportEnter={() => setOpen(true)}
      className="relative py-16 flex flex-col items-center"
    >
      <h3 className="font-mono text-cyan text-sm uppercase tracking-widest mb-2">
        Certifications &amp; Recognition
      </h3>
      <p className="text-slate-500 text-xs font-mono mb-10">
        {open ? "tap a certificate to view" : "opening the file..."}
      </p>

      <div className="relative w-full max-w-3xl h-[280px] md:h-[340px] flex items-center justify-center">
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
          const rotation = fanRotations[i % fanRotations.length];
          const offset = fanOffsets[i % fanOffsets.length];

          return (
            <motion.a
              key={cert.title}
              href={src}
              target="_blank"
              rel="noreferrer"
              initial={{ y: 20, opacity: 0, rotate: 0, x: 0 }}
              animate={
                open
                  ? { y: -40, opacity: 1, rotate: rotation, x: offset }
                  : { y: 20, opacity: 0, rotate: 0, x: 0 }
              }
              transition={{ duration: 0.7, delay: 0.3 + i * 0.1, ease: "easeOut" }}
              whileHover={{ y: -70, scale: 1.08, zIndex: 20, transition: { duration: 0.25 } }}
              className="absolute w-32 md:w-40 cursor-pointer"
              style={{ zIndex: i }}
            >
              <div
                className="rounded-md overflow-hidden bg-white"
                style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.45)" }}
              >
                {src ? (
                  <img src={src} alt={cert.title} className="w-full h-auto block" />
                ) : (
                  <div className="aspect-[4/3] flex items-center justify-center text-slate-400 text-xs p-2 text-center">
                    {cert.image}
                  </div>
                )}
              </div>
              <p className="text-[10px] text-slate-300 font-mono text-center mt-2 leading-tight">
                {cert.title}
              </p>
            </motion.a>
          );
        })}
      </div>
    </motion.div>
  );
}
