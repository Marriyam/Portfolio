import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { sceneMap } from "./scenes/sceneMap";

export default function IntroScene({ theme, color, title }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  const Scene = sceneMap[theme];

  return (
    <div ref={ref} className="relative h-[70vh] md:h-[85vh] overflow-hidden bg-[#060810]">
      <motion.div style={{ opacity, scale }} className="absolute inset-0">
        {Scene && <Scene color={color} />}
      </motion.div>

      <motion.div
        style={{ opacity, y: textY }}
        className="absolute inset-0 flex items-center justify-center px-6"
      >
        <motion.h3
          initial={{ opacity: 0, y: 30, letterSpacing: "0.3em" }}
          whileInView={{ opacity: 1, y: 0, letterSpacing: "0.05em" }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="font-mono text-2xl md:text-4xl uppercase text-center"
          style={{ color }}
        >
          {title}
        </motion.h3>
      </motion.div>

      <motion.div
        style={{ opacity }}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-xs"
      >
        <span style={{ color }} className="opacity-60">
          scroll to explore ↓
        </span>
      </motion.div>
    </div>
  );
}
