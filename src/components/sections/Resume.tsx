"use client";

import { motion } from "framer-motion";
import { Download, ExternalLink } from "lucide-react";
import {
  siteConfig,
  highlights,
  skills,
  certifications,
  projects,
  experience,
  education,
} from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function Resume() {
  return (
    <section id="resume" className="relative py-32 md:py-40">
      <div className="section-padding mx-auto max-w-7xl">
        <SectionHeading
          label="Resume"
          title="Ankita Kumari"
          subtitle="Backend & Cloud Engineer · Java · Spring Boot · AWS · Microservices · CI/CD"
        />

        <div className="flex gap-4 mb-12">
          <Button href={siteConfig.resumePdf} download variant="secondary">
            <Download size={16} />
            Download PDF
          </Button>
          <Button href={siteConfig.links.linkedin} external variant="ghost">
            <ExternalLink size={16} />
            View on LinkedIn
          </Button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-3xl border border-white/5 bg-surface shadow-2xl shadow-purple/5"
        >
          <div className="grid lg:grid-cols-[280px_1fr]">
            {/* Sidebar */}
            <div className="bg-[#0a0e22] p-8 md:p-10">
              <div className="mb-8">
                <h3 className="font-display text-2xl font-bold text-white">
                  {siteConfig.name}
                </h3>
                <p className="mt-1 text-sm text-purple">{siteConfig.title}</p>
              </div>

              <div className="space-y-6 text-sm">
                <div>
                  <p className="mb-1 text-xs uppercase tracking-widest text-muted/60">
                    Email
                  </p>
                  <p className="text-muted">{siteConfig.email}</p>
                </div>
                <div>
                  <p className="mb-1 text-xs uppercase tracking-widest text-muted/60">
                    Phone
                  </p>
                  <p className="text-muted">{siteConfig.phone}</p>
                </div>
              </div>

              <div className="mt-10">
                <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-white">
                  Skills
                </h4>
                {skills.map((group) => (
                  <div key={group.category} className="mb-4">
                    <p className="mb-1 text-xs text-purple">{group.category}</p>
                    <p className="text-xs leading-relaxed text-muted">
                      {group.items.join(" · ")}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <h4 className="mb-3 text-xs font-bold uppercase tracking-widest text-white">
                  Certifications
                </h4>
                {certifications.map((c) => (
                  <p key={c} className="mb-1 text-xs text-muted">
                    {c}
                  </p>
                ))}
              </div>
            </div>

            {/* Main content */}
            <div className="p-8 md:p-10">
              <div className="mb-10">
                <h4 className="mb-3 border-b border-purple/30 pb-2 text-xs font-bold uppercase tracking-widest text-purple">
                  Summary
                </h4>
                <p className="text-sm leading-relaxed text-muted">
                  {siteConfig.summary}
                </p>
              </div>

              <div className="mb-10">
                <h4 className="mb-3 border-b border-purple/30 pb-2 text-xs font-bold uppercase tracking-widest text-purple">
                  Highlights
                </h4>
                <ul className="space-y-2">
                  {highlights.map((h) => (
                    <li key={h} className="text-sm text-muted">
                      • {h}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-10">
                <h4 className="mb-4 border-b border-purple/30 pb-2 text-xs font-bold uppercase tracking-widest text-purple">
                  Projects
                </h4>
                {projects.map((p) => (
                  <div key={p.id} className="mb-5">
                    <p className="font-semibold text-white">{p.title}</p>
                    <p className="mt-1 text-xs text-muted">{p.description}</p>
                    <p className="mt-1 text-[10px] text-muted/60">
                      {p.tech.join(" · ")}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mb-10">
                <h4 className="mb-4 border-b border-purple/30 pb-2 text-xs font-bold uppercase tracking-widest text-purple">
                  Experience
                </h4>
                {experience.map((e) => (
                  <div key={e.company} className="mb-4">
                    <p className="font-semibold text-white">{e.role}</p>
                    <p className="text-xs text-muted">
                      {e.company}, {e.location}
                    </p>
                    <ul className="mt-2 space-y-1">
                      {e.highlights.map((h) => (
                        <li key={h} className="text-xs text-muted">
                          • {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div>
                <h4 className="mb-3 border-b border-purple/30 pb-2 text-xs font-bold uppercase tracking-widest text-purple">
                  Education
                </h4>
                <p className="font-semibold text-white">{education.degree}</p>
                <p className="text-xs text-muted">
                  {education.school} · {education.period} · CGPA {education.cgpa}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
