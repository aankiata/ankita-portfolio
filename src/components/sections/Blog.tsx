"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import { blogPosts } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Blog() {
  return (
    <section id="blog" className="relative py-32 md:py-40">
      <div className="section-padding mx-auto max-w-7xl">
        <SectionHeading
          label="Blog"
          title="Thoughts & Writing"
          subtitle="Technical deep-dives on backend engineering, cloud architecture, and DevOps."
        />

        <div className="space-y-4">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ x: 4 }}
              className="group flex cursor-pointer items-center justify-between gap-6 rounded-2xl border border-white/5 bg-surface/50 p-6 transition-all hover:border-white/10 hover:bg-surface md:p-8"
            >
              <div className="flex-1">
                <div className="mb-2 flex items-center gap-3 text-xs text-muted">
                  <span>{post.date}</span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-white transition-colors group-hover:text-purple md:text-2xl">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-muted md:text-base">
                  {post.excerpt}
                </p>
              </div>
              <ArrowUpRight
                size={20}
                className="shrink-0 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
