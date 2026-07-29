import { motion } from "framer-motion";
import type { SkillGroup } from "../types";
import Badge from "./Badge";

interface SkillCardProps {
  group: SkillGroup;
}

export default function SkillCard({ group }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl border border-black/10 bg-bg-light p-6 transition-colors hover:border-accent/40 dark:border-white/10 dark:bg-bg"
    >
      <h3 className="mb-4 font-display text-lg font-semibold text-ink-light dark:text-ink">
        {group.title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <Badge key={skill.name}>{skill.name}</Badge>
        ))}
      </div>
    </motion.div>
  );
}
