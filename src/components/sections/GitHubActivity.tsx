"use client";

import { motion } from "framer-motion";
import { Github, GitCommit } from "lucide-react";
import { siteConfig } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";

const contributions = [
  { day: 0, count: 0 },
  { day: 1, count: 2 },
  { day: 2, count: 1 },
  { day: 3, count: 3 },
  { day: 4, count: 0 },
  { day: 5, count: 4 },
  { day: 6, count: 2 },
  { day: 7, count: 1 },
  { day: 8, count: 0 },
  { day: 9, count: 3 },
  { day: 10, count: 2 },
  { day: 11, count: 4 },
  { day: 12, count: 1 },
  { day: 13, count: 0 },
  { day: 14, count: 2 },
  { day: 15, count: 3 },
  { day: 16, count: 1 },
  { day: 17, count: 0 },
  { day: 18, count: 2 },
  { day: 19, count: 4 },
  { day: 20, count: 3 },
  { day: 21, count: 1 },
  { day: 22, count: 0 },
  { day: 23, count: 2 },
  { day: 24, count: 3 },
  { day: 25, count: 1 },
  { day: 26, count: 4 },
  { day: 27, count: 2 },
  { day: 28, count: 0 },
  { day: 29, count: 1 },
  { day: 30, count: 3 },
  { day: 31, count: 2 },
  { day: 32, count: 4 },
  { day: 33, count: 1 },
  { day: 34, count: 0 },
  { day: 35, count: 2 },
  { day: 36, count: 3 },
  { day: 37, count: 1 },
  { day: 38, count: 0 },
  { day: 39, count: 4 },
  { day: 40, count: 2 },
  { day: 41, count: 1 },
  { day: 42, count: 3 },
  { day: 43, count: 0 },
  { day: 44, count: 2 },
  { day: 45, count: 4 },
  { day: 46, count: 1 },
  { day: 47, count: 0 },
  { day: 48, count: 3 },
  { day: 49, count: 2 },
];

const stats = [
  { label: "Repositories", value: "12+" },
  { label: "Languages", value: "Java · Python · TS" },
  { label: "Focus", value: "Backend & Cloud" },
];

function getIntensity(count: number) {
  if (count === 0) return "bg-white/5";
  if (count === 1) return "bg-purple/20";
  if (count === 2) return "bg-purple/40";
  if (count === 3) return "bg-purple/60";
  return "bg-purple/80";
}

export function GitHubActivity() {
  return (
    <section className="relative py-32 md:py-40">
      <div className="section-padding mx-auto max-w-7xl">
        <SectionHeading
          label="GitHub"
          title="Open Source Activity"
          subtitle="Building in public — backend services, cloud infrastructure, and NLP tooling."
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-white/5 bg-surface p-8 md:p-12"
        >
          <div className="mb-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-white transition-colors group-hover:bg-purple/20 group-hover:text-purple">
                <Github size={22} />
              </div>
              <div>
                <p className="font-display text-lg font-bold text-white">
                  @ankita-kumari
                </p>
                <p className="text-sm text-muted">View profile on GitHub</p>
              </div>
            </a>

            <div className="flex gap-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-xl font-bold text-white">
                    {s.value}
                  </p>
                  <p className="text-xs text-muted">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-4 flex items-center gap-2 text-xs text-muted">
            <GitCommit size={14} />
            Contribution activity
          </div>

          <div className="grid grid-cols-[repeat(25,minmax(0,1fr))] gap-1 sm:grid-cols-[repeat(50,minmax(0,1fr))]">
            {contributions.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.01 }}
                className={`aspect-square rounded-sm ${getIntensity(c.count)}`}
                title={`${c.count} contributions`}
              />
            ))}
          </div>

          <div className="mt-4 flex items-center justify-end gap-2 text-xs text-muted">
            <span>Less</span>
            {[0, 1, 2, 3, 4].map((level) => (
              <div
                key={level}
                className={`h-3 w-3 rounded-sm ${getIntensity(level)}`}
              />
            ))}
            <span>More</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
