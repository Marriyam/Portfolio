import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function GlitchReveal({ src, alt, className = "", style = {}, onLoad }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const [resolved, setResolved] = useState(false);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`} style={style}>
      <img
        src={src}
        alt={alt}
        onLoad={() => {
          onLoad?.();
          setResolved(true);
        }}
        className="w-full h-auto block max-w-full max-h-[420px] mx-auto"
        style={{ opacity: inView ? 1 : 0 }}
      />

      {inView && resolved && (
        <>
          <motion.img
            src={src}
            alt=""
            aria-hidden
            initial={{ opacity: 0.9, x: 0 }}
            animate={{ opacity: 0, x: -6 }}
            transition={{ duration: 0.5, times: [0, 1], delay: 0 }}
            className="absolute inset-0 w-full h-auto max-h-[420px] mx-auto mix-blend-screen pointer-events-none"
            style={{ filter: "brightness(1) saturate(3) hue-rotate(-30deg)" }}
          />
          <motion.img
            src={src}
            alt=""
            aria-hidden
            initial={{ opacity: 0.9, x: 0 }}
            animate={{ opacity: 0, x: 6 }}
            transition={{ duration: 0.5, delay: 0 }}
            className="absolute inset-0 w-full h-auto max-h-[420px] mx-auto mix-blend-screen pointer-events-none"
            style={{ filter: "brightness(1) saturate(3) hue-rotate(150deg)" }}
          />

          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0.5, scaleY: 1 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="absolute left-0 right-0 bg-cyan/40 pointer-events-none"
              style={{
                top: `${(i / 6) * 100}%`,
                height: "3px",
              }}
            />
          ))}

          <motion.div
            initial={{ opacity: 0.6 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.45 }}
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "repeating-linear-gradient(0deg, rgba(255,255,255,0.08) 0px, transparent 1px, transparent 2px, rgba(255,255,255,0.08) 3px)",
            }}
          />
        </>
      )}
    </div>
  );
}
