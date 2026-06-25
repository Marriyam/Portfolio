import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { skillGraph } from "../data/content";

const groupColor = {
  ai: "#a855f7",
  web: "#22d3ee",
  data: "#10b981",
};

function layout(nodes) {
  const groups = { ai: [], web: [], data: [] };
  nodes.forEach((n) => groups[n.group].push(n));

  const centers = {
    ai: { x: 0.27, y: 0.32 },
    web: { x: 0.72, y: 0.32 },
    data: { x: 0.5, y: 0.78 },
  };

  const positioned = [];
  Object.entries(groups).forEach(([group, list]) => {
    const center = centers[group];
    const radius = 0.19;
    list.forEach((node, i) => {
      const angle = (i / list.length) * Math.PI * 2 + (group === "web" ? 0.4 : 0);
      positioned.push({
        ...node,
        x: center.x + Math.cos(angle) * radius * (0.6 + (i % 3) * 0.2),
        y: center.y + Math.sin(angle) * radius * (0.6 + (i % 3) * 0.2),
      });
    });
  });
  return positioned;
}

export default function ConstellationSkills() {
  const [hovered, setHovered] = useState(null);
  const containerRef = useRef(null);
  const [size, setSize] = useState({ w: 900, h: 560 });

  const nodes = useMemo(() => layout(skillGraph.nodes), []);
  const nodeMap = useMemo(() => Object.fromEntries(nodes.map((n) => [n.id, n])), [nodes]);

  const connectedIds = useMemo(() => {
    if (!hovered) return new Set();
    const set = new Set([hovered]);
    skillGraph.links.forEach(([a, b]) => {
      if (a === hovered) set.add(b);
      if (b === hovered) set.add(a);
    });
    return set;
  }, [hovered]);

  useEffect(() => {
    function onResize() {
      if (containerRef.current) {
        setSize({
          w: containerRef.current.offsetWidth,
          h: containerRef.current.offsetHeight,
        });
      }
    }
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[560px] md:h-[620px] rounded-2xl overflow-hidden bg-[#0a0e1a] glow-border"
    >
      <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: "none" }}>
        {skillGraph.links.map(([a, b], i) => {
          const na = nodeMap[a];
          const nb = nodeMap[b];
          if (!na || !nb) return null;
          const active = hovered && connectedIds.has(a) && connectedIds.has(b);
          const dim = hovered && !active;
          return (
            <motion.line
              key={i}
              x1={na.x * size.w}
              y1={na.y * size.h}
              x2={nb.x * size.w}
              y2={nb.y * size.h}
              stroke={active ? groupColor[na.group] : "#334155"}
              strokeWidth={active ? 1.8 : 1}
              initial={{ opacity: 0 }}
              animate={{ opacity: dim ? 0.08 : active ? 0.9 : 0.35 }}
              transition={{ duration: 0.3 }}
            />
          );
        })}
      </svg>

      {nodes.map((node) => {
        const active = hovered === node.id;
        const connected = connectedIds.has(node.id);
        const dim = hovered && !connected;
        const color = groupColor[node.group];

        return (
          <motion.div
            key={node.id}
            className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center cursor-pointer"
            style={{ left: `${node.x * 100}%`, top: `${node.y * 100}%` }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: Math.random() * 0.4 }}
            onMouseEnter={() => setHovered(node.id)}
            onMouseLeave={() => setHovered(null)}
            animate={{
              opacity: dim ? 0.25 : 1,
            }}
          >
            <motion.div
              animate={
                active
                  ? { scale: 1.6, boxShadow: `0 0 24px 6px ${color}` }
                  : { scale: 1, boxShadow: `0 0 8px 1px ${color}80` }
              }
              transition={{ duration: 0.25 }}
              className="w-3 h-3 rounded-full"
              style={{ background: color, border: `1px solid ${color}` }}
            />
            <span
              className="mt-2 text-[11px] md:text-xs font-mono whitespace-nowrap px-1.5 py-0.5 rounded"
              style={{
                color: active || connected ? "#fff" : "#94a3b8",
                background: active ? `${color}30` : "transparent",
              }}
            >
              {node.label}
            </span>
          </motion.div>
        );
      })}

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-xs text-slate-500">
        {hovered ? `${nodeMap[hovered]?.label} → ${connectedIds.size - 1} connections` : "hover any node"}
      </div>
    </div>
  );
}
