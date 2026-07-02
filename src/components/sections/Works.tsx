"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { MacBookMockup, BrowserMockup, PhoneMockup } from "@/components/ui/Mockups";
import { ProjectScreen } from "@/components/projects/ProjectScreenshots";
import { fadeUp, viewportOnce } from "@/lib/motion";

function ProjectPreview({ project }: { project: (typeof projects)[0] }) {
  return (
    <div className="relative">
      <MacBookMockup gradient={`bg-gradient-to-br ${project.gradient}`}>
        <ProjectScreen projectId={project.id} />
      </MacBookMockup>

      {project.id === "smart-finance-advisor" && (
        <div className="absolute -bottom-8 -right-4 hidden md:block">
          <PhoneMockup className="w-36">
            <div className="flex h-full flex-col items-center justify-center p-4">
              <p className="text-[8px] text-white/50">Savings</p>
              <p className="font-display text-xl font-bold text-green-400">+15%</p>
            </div>
          </PhoneMockup>
        </div>
      )}
    </div>
  );
}

function CaseStudyBlock({
  section,
  index,
}: {
  section: (typeof projects)[0]["caseStudy"][0];
  index: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeUp}
      transition={{ delay: index * 0.05 }}
      className="grid gap-8 border-t border-white/5 py-12 md:grid-cols-[200px_1fr] md:gap-16"
    >
      <h4 className="font-display text-sm font-bold uppercase tracking-[0.15em] text-purple">
        {section.title}
      </h4>
      <div>
        <p className="text-base leading-relaxed text-muted md:text-lg">
          {section.content}
        </p>
        {section.bullets && (
          <ul className="mt-4 space-y-2">
            {section.bullets.map((b) => (
              <li key={b} className="flex items-start gap-2 text-sm text-muted/80">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-blue" />
                {b}
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
}

function ProjectCaseStudy({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  return (
    <div
      id={project.id}
      className="relative min-h-screen py-24 md:py-32"
    >
      <div className="section-padding mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted">
            Project {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="font-display text-5xl font-bold tracking-tight text-white md:text-7xl lg:text-8xl">
            {project.title}
          </h3>
          <p className="mt-2 text-lg text-purple">{project.subtitle}</p>
        </motion.div>

        <div className="my-16 md:my-24">
          <ProjectPreview project={project} />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl text-lg leading-relaxed text-muted md:text-xl"
        >
          {project.description}
        </motion.p>

        <div className="mt-8 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 px-3 py-1 text-xs text-muted"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-8 flex gap-4">
          <Button variant="secondary">
            View Project
            <ArrowRight size={16} />
          </Button>
          <Button variant="ghost">Read Case Study</Button>
        </div>

        <div className="mt-20 md:mt-32">
          {project.id === "ai-resume-sorter" && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <BrowserMockup url="api.resume-sorter.dev/architecture">
                <div className="flex h-full items-center justify-center p-8">
                  <ArchitectureDiagram />
                </div>
              </BrowserMockup>
            </motion.div>
          )}

          {project.caseStudy.map((section, i) => (
            <CaseStudyBlock key={section.title} section={section} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ArchitectureDiagram() {
  const nodes = [
    { label: "API Gateway", x: 50, y: 15 },
    { label: "Ingestion", x: 20, y: 45 },
    { label: "NLP Engine", x: 50, y: 45 },
    { label: "Ranking", x: 80, y: 45 },
    { label: "AWS S3", x: 20, y: 75 },
    { label: "Lambda", x: 50, y: 75 },
    { label: "MySQL", x: 80, y: 75 },
  ];

  return (
    <svg viewBox="0 0 100 90" className="h-full w-full max-w-lg">
      {[
        [50, 15, 20, 45],
        [50, 15, 50, 45],
        [50, 15, 80, 45],
        [20, 45, 20, 75],
        [50, 45, 50, 75],
        [80, 45, 80, 75],
      ].map(([x1, y1, x2, y2], i) => (
        <motion.line
          key={i}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="rgba(109,74,255,0.3)"
          strokeWidth="0.3"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: i * 0.1 }}
        />
      ))}
      {nodes.map((node, i) => (
        <g key={node.label}>
          <motion.rect
            x={node.x - 8}
            y={node.y - 4}
            width="16"
            height="8"
            rx="2"
            fill="rgba(109,74,255,0.15)"
            stroke="rgba(109,74,255,0.5)"
            strokeWidth="0.3"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.08 }}
          />
          <text
            x={node.x}
            y={node.y + 0.8}
            textAnchor="middle"
            fill="rgba(255,255,255,0.7)"
            fontSize="2.5"
          >
            {node.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

export function Works() {
  return (
    <section id="works" className="relative">
      <div className="section-padding mx-auto max-w-7xl pt-32 pb-16">
        <SectionHeading
          label="Portfolio"
          title="Selected Works"
          subtitle="Every project tells a story — from architecture to deployment."
        />
      </div>

      {projects.map((project, i) => (
        <ProjectCaseStudy key={project.id} project={project} index={i} />
      ))}
    </section>
  );
}
