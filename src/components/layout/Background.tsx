"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function Background() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 2000], [0, -400]);
  const y2 = useTransform(scrollY, [0, 2000], [0, -200]);
  const y3 = useTransform(scrollY, [0, 2000], [0, -600]);
  const rotate = useTransform(scrollY, [0, 3000], [0, 45]);

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[#07091B]" />

      <motion.div style={{ y: y1 }} className="absolute inset-0">
        <div className="absolute -top-1/4 -right-1/4 h-[800px] w-[800px] rounded-full bg-purple/8 blur-[120px]" />
        <div className="absolute top-1/2 -left-1/4 h-[600px] w-[600px] rounded-full bg-blue/6 blur-[100px]" />
      </motion.div>

      <motion.div style={{ y: y2 }} className="absolute inset-0">
        <svg
          className="absolute top-[20%] right-[10%] h-96 w-96 opacity-[0.03]"
          viewBox="0 0 400 400"
        >
          <motion.path
            d="M0,200 Q100,100 200,200 T400,200"
            fill="none"
            stroke="white"
            strokeWidth="1"
            animate={{ d: ["M0,200 Q100,100 200,200 T400,200", "M0,200 Q100,300 200,200 T400,200", "M0,200 Q100,100 200,200 T400,200"] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </motion.div>

      <motion.div style={{ y: y3, rotate }} className="absolute inset-0">
        <span className="absolute top-[15%] left-[5%] font-display text-[20rem] font-bold leading-none text-white/[0.02] select-none">
          A
        </span>
        <span className="absolute bottom-[10%] right-[5%] font-display text-[15rem] font-bold leading-none text-white/[0.015] select-none">
          K
        </span>
      </motion.div>

      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#07091B]/80" />
    </div>
  );
}
