"use client";

import { motion } from "framer-motion";

export function ResumeSorterScreen() {
  const candidates = [
    { name: "Sarah Chen", score: 94, role: "Senior Backend" },
    { name: "Marcus Lee", score: 87, role: "Cloud Engineer" },
    { name: "Priya Sharma", score: 82, role: "Full Stack" },
    { name: "Alex Rivera", score: 76, role: "DevOps" },
  ];

  return (
    <div className="absolute inset-0 bg-[#0c0e1a] p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-widest text-purple/80">
            AI Resume Sorter
          </p>
          <p className="text-lg font-semibold text-white">Candidate Dashboard</p>
        </div>
        <div className="rounded-lg bg-purple/20 px-3 py-1 text-[10px] text-purple">
          5,247 processed
        </div>
      </div>

      <div className="mb-4 grid grid-cols-3 gap-3">
        {[
          { label: "Match Rate", value: "94%" },
          { label: "Avg. Score", value: "8.4" },
          { label: "Time Saved", value: "60%" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-white/5 bg-white/[0.03] p-3"
          >
            <p className="text-[9px] text-white/40">{stat.label}</p>
            <p className="text-sm font-bold text-white">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="space-y-2">
        {candidates.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] p-3"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-purple/40 to-blue/40 text-[10px] font-bold text-white">
                {c.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div>
                <p className="text-xs font-medium text-white">{c.name}</p>
                <p className="text-[9px] text-white/40">{c.role}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-16 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-purple to-blue"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${c.score}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.8 }}
                />
              </div>
              <span className="text-xs font-bold text-purple">{c.score}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function FinanceAdvisorScreen() {
  return (
    <div className="absolute inset-0 bg-[#0a1020] p-6">
      <div className="mb-5">
        <p className="text-[10px] uppercase tracking-widest text-blue/80">
          Smart Finance Advisor
        </p>
        <p className="text-lg font-semibold text-white">Savings Overview</p>
      </div>

      <div className="mb-5 rounded-2xl border border-white/5 bg-gradient-to-br from-blue/10 to-purple/5 p-4">
        <p className="text-[9px] text-white/40">Total Savings Improvement</p>
        <p className="font-display text-3xl font-bold text-white">+15.2%</p>
        <div className="mt-3 flex items-end gap-1 h-12">
          {[40, 55, 48, 62, 58, 72, 68, 85, 78, 92, 88, 95].map((h, i) => (
            <motion.div
              key={i}
              className="flex-1 rounded-sm bg-gradient-to-t from-blue/60 to-purple/40"
              initial={{ height: 0 }}
              whileInView={{ height: `${h}%` }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.05, duration: 0.5 }}
            />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {[
          { title: "Reduce Subscriptions", save: "₹2,400/mo" },
          { title: "Optimize Investments", save: "₹5,100/mo" },
          { title: "Budget Reallocation", save: "₹1,800/mo" },
          { title: "Emergency Fund", save: "₹3,200/mo" },
        ].map((rec, i) => (
          <motion.div
            key={rec.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.08 }}
            className="rounded-xl border border-white/5 bg-white/[0.02] p-3"
          >
            <p className="text-[9px] text-white/50">{rec.title}</p>
            <p className="mt-1 text-xs font-semibold text-green-400">{rec.save}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function VoiceShieldScreen() {
  return (
    <div className="absolute inset-0 bg-[#0d0a18] p-6">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-widest text-purple/80">
            VoiceShield AI
          </p>
          <p className="text-lg font-semibold text-white">Threat Monitor</p>
        </div>
        <div className="flex items-center gap-1.5">
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="h-2 w-2 rounded-full bg-green-400"
          />
          <span className="text-[9px] text-green-400">Live</span>
        </div>
      </div>

      <div className="relative mb-5 flex h-20 items-center justify-center overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02]">
        <svg viewBox="0 0 300 60" className="w-full px-4">
          {[...Array(40)].map((_, i) => (
            <motion.rect
              key={i}
              x={i * 7.5}
              y={30 - Math.sin(i * 0.5) * 20}
              width="3"
              height={Math.abs(Math.sin(i * 0.5)) * 40 + 4}
              rx="1.5"
              fill="rgba(109,74,255,0.6)"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.02, duration: 0.4 }}
              style={{ originY: 1 }}
            />
          ))}
        </svg>
      </div>

      <div className="space-y-2">
        {[
          { label: "Emotion Analysis", status: "Normal", color: "text-green-400" },
          { label: "Speaker Verification", status: "Verified", color: "text-green-400" },
          { label: "Scam Pattern NLP", status: "Clear", color: "text-green-400" },
          { label: "Threat Score", status: "Low (12%)", color: "text-blue" },
        ].map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.08 }}
            className="flex items-center justify-between rounded-lg border border-white/5 px-3 py-2"
          >
            <span className="text-[10px] text-white/60">{item.label}</span>
            <span className={`text-[10px] font-medium ${item.color}`}>
              {item.status}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

const screens: Record<string, React.ComponentType> = {
  "ai-resume-sorter": ResumeSorterScreen,
  "smart-finance-advisor": FinanceAdvisorScreen,
  "voiceshield-ai": VoiceShieldScreen,
};

export function ProjectScreen({ projectId }: { projectId: string }) {
  const Screen = screens[projectId];
  if (!Screen) return null;
  return <Screen />;
}
