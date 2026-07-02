"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { siteConfig } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function Contact() {
  return (
    <section id="contact" className="relative py-32 md:py-40">
      <div className="section-padding mx-auto max-w-7xl">
        <SectionHeading
          label="Contact"
          title="Let's connect."
          subtitle="Open to backend engineering roles, cloud projects, and research collaborations."
          align="center"
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl"
        >
          <div className="rounded-3xl border border-white/5 bg-surface p-8 md:p-12">
            <div className="grid gap-6 sm:grid-cols-2">
              <a
                href={`mailto:${siteConfig.email}`}
                className="group flex items-center gap-4 rounded-2xl border border-white/5 p-4 transition-all hover:border-purple/30 hover:bg-purple/5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple/10 text-purple">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-xs text-muted">Email</p>
                  <p className="text-sm text-white group-hover:text-purple transition-colors">
                    {siteConfig.email}
                  </p>
                </div>
              </a>

              <a
                href={`tel:${siteConfig.phone}`}
                className="group flex items-center gap-4 rounded-2xl border border-white/5 p-4 transition-all hover:border-purple/30 hover:bg-purple/5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue/10 text-blue">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-xs text-muted">Phone</p>
                  <p className="text-sm text-white">{siteConfig.phone}</p>
                </div>
              </a>

              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-white/5 p-4 transition-all hover:border-purple/30 hover:bg-purple/5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple/10 text-purple">
                  <Linkedin size={18} />
                </div>
                <div>
                  <p className="text-xs text-muted">LinkedIn</p>
                  <p className="text-sm text-white">Connect with me</p>
                </div>
              </a>

              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-white/5 p-4 transition-all hover:border-purple/30 hover:bg-purple/5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue/10 text-blue">
                  <Github size={18} />
                </div>
                <div>
                  <p className="text-xs text-muted">GitHub</p>
                  <p className="text-sm text-white">View repositories</p>
                </div>
              </a>
            </div>

            <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted">
              <MapPin size={14} />
              Chennai, India · Available for remote
            </div>

            <div className="mt-8 flex justify-center">
              <Button href={`mailto:${siteConfig.email}`} size="lg">
                Send a Message
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
