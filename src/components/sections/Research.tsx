"use client";

import { motion } from "framer-motion";
import { BookOpen, ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const research = {
  title: "VoiceShield AI",
  subtitle: "Real-time Voice Threat Detection and Monitoring",
  mentor: "K. Ishwarya",
  type: "IEEE-style Research Paper",
  abstract:
    "A multimodal AI framework for real-time voice threat detection combining NLP, speech emotion recognition, scam detection, speaker verification, and acoustic analysis for proactive monitoring.",
  topics: [
    "Speech Emotion Recognition",
    "Speaker Verification",
    "NLP-based Scam Detection",
    "Multimodal Threat Analysis",
    "Real-time Monitoring",
  ],
};

export function Research() {
  return (
    <section className="relative py-32 md:py-40">
      <div className="section-padding mx-auto max-w-7xl">
        <SectionHeading
          label="Research"
          title="Publications & Research"
          subtitle="Academic work at the intersection of NLP, speech analysis, and AI security."
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-3xl border border-white/5 bg-surface"
        >
          <div className="grid lg:grid-cols-2">
            <div className="relative min-h-[300px] bg-gradient-to-br from-purple/20 via-blue/10 to-transparent p-10">
              <div className="absolute inset-0 opacity-20">
                <svg viewBox="0 0 400 400" className="h-full w-full">
                  {[...Array(8)].map((_, i) => (
                    <circle
                      key={i}
                      cx={200 + Math.cos(i * 0.785) * 120}
                      cy={200 + Math.sin(i * 0.785) * 120}
                      r="4"
                      fill="rgba(109,74,255,0.5)"
                    />
                  ))}
                  <circle cx="200" cy="200" r="80" fill="none" stroke="rgba(109,74,255,0.2)" strokeWidth="1" />
                  <circle cx="200" cy="200" r="120" fill="none" stroke="rgba(55,93,255,0.15)" strokeWidth="1" />
                </svg>
              </div>
              <div className="relative">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-purple/20 text-purple">
                  <BookOpen size={22} />
                </div>
                <p className="text-xs font-medium uppercase tracking-widest text-purple">
                  {research.type}
                </p>
                <h3 className="mt-2 font-display text-3xl font-bold text-white md:text-4xl">
                  {research.title}
                </h3>
                <p className="mt-2 text-muted">{research.subtitle}</p>
              </div>
            </div>

            <div className="p-10">
              <p className="text-sm leading-relaxed text-muted">{research.abstract}</p>

              <p className="mt-4 text-xs text-muted/60">
                Faculty Mentor: {research.mentor}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {research.topics.map((topic) => (
                  <span
                    key={topic}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-muted"
                  >
                    {topic}
                  </span>
                ))}
              </div>

              <div className="mt-8">
                <Button variant="secondary">
                  Read Paper
                  <ExternalLink size={14} />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
