"use client";

import { motion } from "framer-motion";
import { FlaskConical, ArrowUpRight } from "lucide-react";
import { labs } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";

const statusColors: Record<string, string> = {
  Active: "text-green-400 bg-green-400/10 border-green-400/20",
  "In Progress": "text-blue bg-blue/10 border-blue/20",
  "Coming Soon": "text-muted bg-white/5 border-white/10",
};

export function Labs() {
  return (
    <section id="labs" className="relative py-32 md:py-40">
      <div className="section-padding mx-auto max-w-7xl">
        <SectionHeading
          label="Labs"
          title="Experiments & Playgrounds"
          subtitle="Side projects, architecture explorations, and technical sandboxes."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {labs.map((lab, i) => (
            <motion.div
              key={lab.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-surface p-8 transition-shadow hover:shadow-xl hover:shadow-purple/5"
            >
              <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-purple/5 blur-2xl transition-all group-hover:bg-purple/10" />

              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-purple/10 text-purple">
                <FlaskConical size={22} />
              </div>

              <h3 className="font-display text-xl font-bold text-white">
                {lab.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {lab.description}
              </p>

              <div className="mt-6 flex items-center justify-between">
                <span
                  className={`rounded-full border px-3 py-1 text-xs font-medium ${statusColors[lab.status]}`}
                >
                  {lab.status}
                </span>
                <ArrowUpRight
                  size={16}
                  className="text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
