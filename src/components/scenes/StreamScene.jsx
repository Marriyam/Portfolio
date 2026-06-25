import { motion } from "framer-motion";

export default function StreamScene({ color }) {
  return (
    <div className="absolute inset-0 overflow-hidden flex items-center justify-center bg-black/40">
      <motion.div
        initial={{ scaleY: 0.2, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <svg width="180" height="180" viewBox="0 0 200 200" fill="none">
          <motion.path
            d="M55 30 V170 M55 30 L145 170 M145 30 V170"
            stroke={color}
            strokeWidth="22"
            strokeLinecap="square"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
          />
        </svg>
      </motion.div>

      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${10 + i * 11}%`,
            top: 0,
            bottom: 0,
            width: "1px",
            background: `linear-gradient(180deg, transparent, ${color}50, transparent)`,
          }}
          animate={{ opacity: [0, 0.6, 0] }}
          transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
        />
      ))}

      <motion.div
        animate={{ opacity: [0.05, 0.2, 0.05] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0"
        style={{ background: `radial-gradient(circle at 50% 50%, ${color}25, transparent 60%)` }}
      />
    </div>
  );
}
