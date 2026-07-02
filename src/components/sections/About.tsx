"use client";

import { motion } from "framer-motion";
import { highlights, skills, certifications } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="relative py-32 md:py-40">
      <div className="section-padding mx-auto max-w-7xl">
        <SectionHeading
          label="About"
          title="Engineering systems that scale."
          subtitle="I design and build cloud-native backends — from REST APIs and microservices to automated CI/CD pipelines on AWS."
        />

        <div className="grid gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-sm font-medium uppercase tracking-[0.2em] text-purple">
              Highlights
            </h3>
            <ul className="space-y-4">
              {highlights.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3 text-muted"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple" />
                  <span className="text-base leading-relaxed md:text-lg">{item}</span>
                </motion.li>
              ))}
            </ul>

            <div className="pt-6">
              <h3 className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-purple">
                Certifications
              </h3>
              <div className="flex flex-wrap gap-3">
                {certifications.map((cert) => (
                  <span
                    key={cert}
                    className="rounded-full border border-white/10 px-4 py-2 text-sm text-muted"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {skills.map((group, i) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="group rounded-2xl border border-white/5 bg-surface p-6 transition-shadow hover:shadow-lg hover:shadow-purple/5"
              >
                <div
                  className={`mb-4 h-1 w-8 rounded-full bg-gradient-to-r ${group.color}`}
                />
                <h4 className="mb-3 font-display text-lg font-semibold text-white">
                  {group.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg bg-white/5 px-2.5 py-1 text-xs text-muted transition-colors group-hover:text-white/80"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
