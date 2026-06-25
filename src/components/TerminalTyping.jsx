import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function TerminalTyping({ lines, className = "" }) {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (lineIndex >= lines.length) {
      setDone(true);
      return;
    }
    const current = lines[lineIndex];

    if (charIndex < current.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), 35);
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => {
      setLineIndex((l) => l + 1);
      setCharIndex(0);
    }, 500);
    return () => clearTimeout(t);
  }, [charIndex, lineIndex, lines]);

  return (
    <div
      className={`font-mono text-left bg-[#0d1117]/90 border border-cyan/20 rounded-lg p-5 shadow-2xl shadow-black/40 ${className}`}
    >
      <div className="flex items-center gap-2 mb-3 pb-3 border-b border-cyan/10">
        <span className="w-3 h-3 rounded-full bg-red-400/70" />
        <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
        <span className="w-3 h-3 rounded-full bg-green-400/70" />
        <span className="ml-2 text-xs text-slate-500">marriyam.dev : zsh</span>
      </div>
      {lines.slice(0, lineIndex).map((l, i) => (
        <div key={i} className="text-sm text-slate-300 mb-1">
          <span className="text-cyan">$</span> {l}
        </div>
      ))}
      {lineIndex < lines.length && (
        <div className="text-sm text-slate-300">
          <span className="text-cyan">$</span> {lines[lineIndex].slice(0, charIndex)}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.6, repeat: Infinity }}
            className="inline-block w-2 h-4 bg-cyan ml-0.5 align-middle"
          />
        </div>
      )}
      {done && (
        <div className="text-sm text-cyan-bright mt-1">
          <span className="text-cyan">$</span>{" "}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.6, repeat: Infinity }}
            className="inline-block w-2 h-4 bg-cyan ml-0.5 align-middle"
          />
        </div>
      )}
    </div>
  );
}
