"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { siteConfig } from "@/data/portfolio";
import { Button } from "@/components/ui/Button";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center">
      <div className="section-padding mx-auto w-full max-w-7xl pt-32 pb-20">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-5xl"
        >
          <motion.p
            variants={item}
            className="mb-6 text-lg text-muted md:text-xl"
          >
            Hi,
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display text-[clamp(3rem,10vw,6rem)] font-bold leading-[0.95] tracking-tight"
          >
            <span className="gradient-text">I&apos;m {siteConfig.name.split(" ")[0]}.</span>
          </motion.h1>

          <motion.div variants={item} className="mt-4 space-y-2">
            <p className="font-display text-[clamp(1.5rem,4vw,2.5rem)] font-semibold text-white/90">
              {siteConfig.title}.
            </p>
            <p className="font-display text-[clamp(1.25rem,3vw,2rem)] text-muted">
              {siteConfig.tagline}
            </p>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-10 max-w-xl text-base leading-relaxed text-muted md:text-lg"
          >
            {siteConfig.summary}
          </motion.p>

          <motion.div variants={item} className="mt-12 flex flex-wrap gap-4">
            <Button href="#works" size="lg">
              View My Work
            </Button>
            <Button href="#contact" variant="secondary" size="lg">
              Get in Touch
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-muted"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown size={16} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
