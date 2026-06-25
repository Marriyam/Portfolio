import { motion } from "framer-motion";

const leaves = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  left: (i * 137) % 100,
  delay: (i * 0.37) % 2.5,
  duration: 6 + (i % 5),
  size: 14 + (i % 4) * 6,
  drift: (i % 2 === 0 ? 1 : -1) * (20 + (i % 3) * 10),
}));

export default function HerbsScene({ color }) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {leaves.map((leaf) => (
        <motion.div
          key={leaf.id}
          className="absolute"
          style={{ left: `${leaf.left}%`, top: 0 }}
          initial={{ y: -40, opacity: 0, rotate: 0, x: 0 }}
          animate={{
            y: 700,
            opacity: [0, 0.8, 0.8, 0],
            rotate: 360,
            x: [0, leaf.drift, 0],
          }}
          transition={{
            duration: leaf.duration,
            delay: leaf.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg width={leaf.size} height={leaf.size} viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2C7 2 3 7 3 12C3 17 7 22 12 22C17 22 21 17 21 12C21 7 17 2 12 2Z"
              fill={color}
              opacity="0.5"
            />
            <path d="M12 2C12 2 12 12 12 22" stroke={color} strokeWidth="0.5" opacity="0.7" />
          </svg>
        </motion.div>
      ))}

      <motion.div
        animate={{ opacity: [0.15, 0.35, 0.15] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 50% 60%, ${color}30, transparent 65%)`,
        }}
      />
    </div>
  );
}
