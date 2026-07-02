"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

type MacBookMockupProps = {
  children?: React.ReactNode;
  className?: string;
  gradient?: string;
};

export function MacBookMockup({
  children,
  className,
  gradient = "from-purple/30 via-blue/20 to-transparent",
}: MacBookMockupProps) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <motion.div
      style={{ y }}
      className={cn("relative mx-auto w-full max-w-4xl", className)}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ y: -8 }}
      >
        <div className="relative rounded-t-xl border border-white/10 bg-[#1a1a2e] p-2 shadow-2xl shadow-purple/10">
          <div className="flex items-center gap-2 px-3 py-2">
            <div className="h-3 w-3 rounded-full bg-red-500/80" />
            <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
            <div className="h-3 w-3 rounded-full bg-green-500/80" />
          </div>
          <div
            className={cn(
              "relative aspect-[16/10] overflow-hidden rounded-lg bg-gradient-to-br",
              gradient
            )}
          >
            {children || (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="space-y-4 p-8 text-center">
                  <div className="mx-auto h-2 w-32 rounded-full bg-white/20" />
                  <div className="mx-auto h-2 w-48 rounded-full bg-white/10" />
                  <div className="mx-auto h-2 w-24 rounded-full bg-white/10" />
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="mx-auto h-3 w-[102%] -translate-x-[1%] rounded-b-xl bg-gradient-to-b from-[#2a2a3e] to-[#1a1a2e]" />
        <div className="mx-auto mt-1 h-1 w-24 rounded-full bg-white/10" />
      </motion.div>
    </motion.div>
  );
}

type BrowserMockupProps = {
  url?: string;
  children?: React.ReactNode;
  className?: string;
};

export function BrowserMockup({
  url = "app.example.com",
  children,
  className,
}: BrowserMockupProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={cn(
        "overflow-hidden rounded-2xl border border-white/10 bg-surface-elevated shadow-2xl",
        className
      )}
    >
      <div className="flex items-center gap-3 border-b border-white/5 px-4 py-3">
        <div className="flex gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
          <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
          <div className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
        </div>
        <div className="flex-1 rounded-md bg-white/5 px-3 py-1 text-xs text-muted">
          {url}
        </div>
      </div>
      <div className="relative aspect-video bg-gradient-to-br from-purple/10 to-blue/10">
        {children}
      </div>
    </motion.div>
  );
}

type PhoneMockupProps = {
  children?: React.ReactNode;
  className?: string;
};

export function PhoneMockup({ children, className }: PhoneMockupProps) {
  return (
    <motion.div
      initial={{ opacity: 0, rotate: -5, y: 20 }}
      whileInView={{ opacity: 1, rotate: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      whileHover={{ y: -6, rotate: 2 }}
      className={cn(
        "relative mx-auto w-48 rounded-[2rem] border-4 border-white/10 bg-[#0a0a14] p-2 shadow-2xl shadow-purple/20",
        className
      )}
    >
      <div className="absolute left-1/2 top-3 h-1 w-12 -translate-x-1/2 rounded-full bg-white/20" />
      <div className="mt-6 aspect-[9/16] overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-purple/20 to-blue/20">
        {children}
      </div>
    </motion.div>
  );
}
