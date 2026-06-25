import { motion } from "framer-motion";

const nodes = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  x: 10 + ((i * 53) % 80),
  y: 15 + ((i * 37) % 70),
  delay: (i * 0.25) % 2,
}));

const links = [
  [0, 1], [1, 2], [2, 3], [0, 4], [4, 5], [5, 6], [6, 7], [3, 8], [8, 9], [1, 9], [2, 6],
];

export default function NetworkScene({ color }) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {links.map(([a, b], i) => {
          const na = nodes[a];
          const nb = nodes[b];
          return (
            <motion.line
              key={i}
              x1={na.x}
              y1={na.y}
              x2={nb.x}
              y2={nb.y}
              stroke={color}
              strokeWidth="0.3"
              initial={{ opacity: 0, pathLength: 0 }}
              animate={{ opacity: [0, 0.5, 0.2], pathLength: 1 }}
              transition={{ duration: 2, delay: i * 0.1, repeat: Infinity, repeatDelay: 3 }}
            />
          );
        })}
        {nodes.map((n) => (
          <motion.circle
            key={n.id}
            cx={n.x}
            cy={n.y}
            r="1.2"
            fill={color}
            initial={{ opacity: 0.3, scale: 0.6 }}
            animate={{ opacity: [0.3, 1, 0.3], scale: [0.6, 1.3, 0.6] }}
            transition={{ duration: 3, delay: n.delay, repeat: Infinity }}
          />
        ))}
      </svg>

      <motion.div
        animate={{ opacity: [0.1, 0.25, 0.1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0"
        style={{ background: `radial-gradient(circle at 50% 50%, ${color}25, transparent 65%)` }}
      />
    </div>
  );
}
