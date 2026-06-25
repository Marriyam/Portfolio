import { motion } from "framer-motion";

export default function AmbulanceScene({ color }) {
  return (
    <div className="absolute inset-0 overflow-hidden flex items-center">
      <motion.div
        className="absolute bottom-[38%] left-0 right-0 h-[2px]"
        style={{ background: `${color}40` }}
      />
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bottom-[38%] h-[2px] w-10"
          style={{ background: color }}
          initial={{ x: "110vw" }}
          animate={{ x: "-20vw" }}
          transition={{
            duration: 1.4,
            delay: i * 0.18,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      <motion.div
        className="absolute bottom-[30%]"
        initial={{ x: "120vw" }}
        animate={{ x: "-40vw" }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      >
        <svg width="160" height="80" viewBox="0 0 160 80" fill="none">
          <rect x="10" y="20" width="100" height="35" rx="4" fill={color} opacity="0.9" />
          <rect x="100" y="28" width="35" height="27" rx="3" fill={color} opacity="0.7" />
          <rect x="55" y="28" width="20" height="14" fill="white" opacity="0.85" />
          <rect x="61" y="22" width="8" height="26" fill="#ef4444" opacity="0.9" />
          <rect x="51" y="33" width="28" height="4" fill="#ef4444" opacity="0.9" />
          <circle cx="35" cy="58" r="10" fill="#0a0e1a" stroke={color} strokeWidth="2" />
          <circle cx="100" cy="58" r="10" fill="#0a0e1a" stroke={color} strokeWidth="2" />
          <motion.circle
            cx="118"
            cy="35"
            r="4"
            fill="#ef4444"
            animate={{ opacity: [1, 0.2, 1] }}
            transition={{ duration: 0.5, repeat: Infinity }}
          />
        </svg>
      </motion.div>

      <motion.div
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0"
        style={{ background: `radial-gradient(circle at 50% 70%, ${color}25, transparent 60%)` }}
      />
    </div>
  );
}
