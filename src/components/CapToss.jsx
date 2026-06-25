import { useState } from "react";
import { motion } from "framer-motion";

const particles = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  angle: (i / 8) * 360,
  distance: 40 + (i % 3) * 15,
  delay: 0.5 + i * 0.03,
}));

export default function CapToss({ onSettled }) {
  const [thrown, setThrown] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      onViewportEnter={() => setThrown(true)}
      viewport={{ once: true, amount: 0.5 }}
      className="relative h-28 flex items-center justify-center"
    >
      <motion.div
        initial={{ y: 0, rotate: 0, scale: 1, opacity: 1 }}
        animate={
          thrown
            ? {
                y: [0, -70, -10],
                rotate: [0, 200, 360],
                scale: [1, 1.15, 1],
              }
            : {}
        }
        transition={{ duration: 1.1, times: [0, 0.55, 1], ease: "easeOut" }}
        onAnimationComplete={() => onSettled?.()}
        className="relative z-10"
      >
        <svg width="56" height="56" viewBox="0 0 64 64" fill="none">
          <path d="M32 14 L60 26 L32 38 L4 26 Z" fill="#22d3ee" />
          <path d="M16 30 V42 C16 47 24 50 32 50 C40 50 48 47 48 42 V30" stroke="#22d3ee" strokeWidth="2" fill="none" opacity="0.7" />
          <circle cx="56" cy="26" r="2.5" fill="#22d3ee" />
          <line x1="56" y1="26" x2="56" y2="40" stroke="#22d3ee" strokeWidth="1.5" />
          <circle cx="56" cy="42" r="2.5" fill="#67e8f9" />
        </svg>
      </motion.div>

      {thrown &&
        particles.map((p) => {
          const rad = (p.angle * Math.PI) / 180;
          const x = Math.cos(rad) * p.distance;
          const y = Math.sin(rad) * p.distance - 40;

          return (
            <motion.span
              key={p.id}
              initial={{ x: 0, y: -20, opacity: 0, scale: 0.5 }}
              animate={{ x, y, opacity: [0, 1, 0], scale: [0.5, 1, 0.3] }}
              transition={{ duration: 0.9, delay: p.delay, ease: "easeOut" }}
              className="absolute w-1.5 h-1.5 rounded-full bg-cyan"
              style={{ left: "50%", top: "50%" }}
            />
          );
        })}
    </motion.div>
  );
}
