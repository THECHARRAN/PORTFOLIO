import { motion } from 'framer-motion';
import type { TechStack } from '../types';

interface SkillBarProps {
  skill: TechStack;
}

export default function SkillBar({ skill }: SkillBarProps) {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <img src={skill.icon} alt={skill.name} className="w-6 h-6" />
          <span className="font-medium text-gray-900 dark:text-white">
            {skill.name}
          </span>
        </div>
        <span className="text-gray-600 dark:text-gray-400">
          {skill.proficiency}%
        </span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.proficiency}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full bg-red-600 rounded-full"
        />
      </div>
    </div>
  );
}