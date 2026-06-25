import { motion } from "framer-motion";

const blips = [
  { x: 65, y: 38, delay: 0.8 },
  { x: 40, y: 60, delay: 1.6 },
  { x: 70, y: 65, delay: 2.4 },
  { x: 35, y: 35, delay: 3.2 },
];

export default function RadarScene({ color }) {
  return (
    <div className="absolute inset-0 overflow-hidden flex items-center justify-center">
      <div className="relative w-[340px] h-[340px]">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {[1, 2, 3, 4].map((r) => (
            <circle
              key={r}
              cx="50"
              cy="50"
              r={r * 12}
              fill="none"
              stroke={color}
              strokeWidth="0.3"
              opacity="0.3"
            />
          ))}
          <line x1="50" y1="2" x2="50" y2="98" stroke={color} strokeWidth="0.2" opacity="0.2" />
          <line x1="2" y1="50" x2="98" y2="50" stroke={color} strokeWidth="0.2" opacity="0.2" />

          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "50px 50px" }}
          >
            <path
              d="M50 50 L50 2 A48 48 0 0 1 83 16 Z"
              fill={color}
              opacity="0.15"
            />
            <line x1="50" y1="50" x2="50" y2="2" stroke={color} strokeWidth="0.6" opacity="0.7" />
          </motion.g>

          {blips.map((b, i) => (
            <motion.circle
              key={i}
              cx={b.x}
              cy={b.y}
              r="1.5"
              fill="#ef4444"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0, 1, 1, 0], scale: [0, 1.5, 1, 0] }}
              transition={{ duration: 4, delay: b.delay, repeat: Infinity }}
            />
          ))}
        </svg>
      </div>

      <motion.div
        animate={{ opacity: [0.1, 0.25, 0.1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0"
        style={{ background: `radial-gradient(circle at 50% 50%, ${color}25, transparent 65%)` }}
      />
    </div>
  );
}
