import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";

export default function CountUpStat({ end, suffix = "", prefix = "", label, decimals = 0, color = "#22d3ee" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, end, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate: (v) => setValue(v),
    });
    return () => controls.stop();
  }, [inView, end]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-4xl font-bold font-mono" style={{ color }}>
        {prefix}
        {value.toFixed(decimals)}
        {suffix}
      </div>
      <div className="text-xs md:text-sm text-slate-400 mt-1">{label}</div>
    </div>
  );
}
