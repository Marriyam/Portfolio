import { motion } from "framer-motion";

export default function TransitScene({ color }) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute"
        style={{ top: "28%" }}
        initial={{ x: "-20vw", y: 0 }}
        animate={{ x: "120vw", y: -40 }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      >
        <svg width="120" height="60" viewBox="0 0 120 60" fill="none" style={{ transform: "rotate(35deg)" }}>
          <path
            d="M60 4 L66 22 L100 36 L100 40 L66 32 L62 48 L72 54 L72 57 L58 53 L44 57 L44 54 L54 48 L50 32 L16 40 L16 36 L50 22 Z"
            fill={color}
            opacity="0.92"
          />
          <motion.g
            animate={{ opacity: [0.5, 0.1, 0.5] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          >
            <path d="M16 40 L-20 46" stroke={color} strokeWidth="1.5" opacity="0.4" />
            <path d="M16 36 L-20 30" stroke={color} strokeWidth="1.5" opacity="0.4" />
          </motion.g>
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-[30%]"
        initial={{ x: "-10vw" }}
        animate={{ x: "110vw" }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "linear", delay: 1 }}
      >
        <svg width="60" height="50" viewBox="0 0 60 50" fill="none">
          <rect x="8" y="14" width="44" height="28" rx="3" fill={color} opacity="0.85" />
          <rect x="8" y="14" width="44" height="9" fill="#0a0e1a" opacity="0.3" />
          <circle cx="18" cy="44" r="5" fill="#0a0e1a" stroke={color} strokeWidth="2" />
          <circle cx="42" cy="44" r="5" fill="#0a0e1a" stroke={color} strokeWidth="2" />
        </svg>
      </motion.div>

      <motion.div
        animate={{ opacity: [0.1, 0.28, 0.1] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0"
        style={{ background: `radial-gradient(circle at 50% 50%, ${color}25, transparent 60%)` }}
      />
    </div>
  );
}
