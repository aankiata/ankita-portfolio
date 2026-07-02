"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-16">
      <div className="section-padding mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="font-display text-2xl font-bold text-white">
              {siteConfig.name.split(" ")[0]}
              <span className="text-purple">.</span>
            </p>
            <p className="mt-2 text-sm text-muted">
              Backend & Cloud Engineer · Building at scale
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-muted transition-colors hover:border-purple/50 hover:text-white"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-muted transition-colors hover:border-purple/50 hover:text-white"
            >
              <Github size={18} />
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-muted transition-colors hover:border-purple/50 hover:text-white"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col items-center gap-6 text-center"
        >
          <p className="font-display text-3xl font-bold text-white md:text-5xl">
            Let&apos;s build something
            <span className="accent-text"> extraordinary</span>
          </p>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-muted transition-colors hover:text-white"
          >
            Get in touch
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </motion.div>

        <p className="mt-16 text-center text-xs text-muted/60">
          © {new Date().getFullYear()} {siteConfig.name}. Crafted with precision.
        </p>
      </div>
    </footer>
  );
}
