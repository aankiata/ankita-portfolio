"use client";

import { motion } from "framer-motion";
import { experience, education } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Experience() {
  return (
    <section className="relative py-32 md:py-40">
      <div className="section-padding mx-auto max-w-7xl">
        <SectionHeading
          label="Experience"
          title="Where I've built."
          subtitle="From enterprise internships to leading university committees."
        />

        <div className="relative">
          <div className="absolute top-0 bottom-0 left-[7px] w-px bg-gradient-to-b from-purple/50 via-blue/30 to-transparent md:left-1/2" />

          {experience.map((item, i) => (
            <motion.div
              key={item.company}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className={`relative mb-16 grid gap-8 md:grid-cols-2 md:gap-16 ${
                i % 2 === 0 ? "" : "md:[direction:rtl]"
              }`}
            >
              <div className={`${i % 2 === 0 ? "md:text-right" : "md:[direction:ltr]"}`}>
                <div className="absolute left-0 h-4 w-4 rounded-full border-2 border-purple bg-background md:left-1/2 md:-translate-x-1/2" />
                <p className="text-sm font-medium uppercase tracking-widest text-purple">
                  {item.period}
                </p>
                <h3 className="mt-2 font-display text-2xl font-bold text-white md:text-3xl">
                  {item.role}
                </h3>
                <p className="mt-1 text-muted">
                  {item.company} · {item.location}
                </p>
              </div>

              <div className={`${i % 2 === 0 ? "" : "md:[direction:ltr]"}`}>
                <ul className="space-y-3">
                  {item.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2 text-sm leading-relaxed text-muted md:text-base"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blue" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 rounded-3xl border border-white/5 bg-surface p-8 md:p-12"
        >
          <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-purple">
                Education
              </p>
              <h3 className="mt-2 font-display text-2xl font-bold text-white md:text-3xl">
                {education.degree}
              </h3>
              <p className="mt-2 text-muted">{education.school}</p>
              <p className="mt-1 text-sm text-muted/70">{education.period}</p>
              <p className="mt-4 font-display text-3xl font-bold accent-text">
                CGPA {education.cgpa}
              </p>
            </div>
            <div>
              <p className="mb-4 text-sm font-medium text-white/60">
                Relevant Coursework
              </p>
              <div className="flex flex-wrap gap-2">
                {education.coursework.map((c) => (
                  <span
                    key={c}
                    className="rounded-lg border border-white/5 bg-white/5 px-3 py-1.5 text-xs text-muted"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
