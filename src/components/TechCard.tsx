import { motion } from 'framer-motion';
import { useState } from 'react';

interface TechCardProps {
  name: string;
  icon: string;
  proficiency: number;
  description: string;
}

export default function TechCard({ name, icon, proficiency, description }: TechCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative group"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="bg-white/10 dark:bg-black/30 backdrop-blur-lg rounded-xl p-6 border border-gray-200 dark:border-gray-800 hover:border-red-500 dark:hover:border-red-500 transition-all duration-300 shadow-lg hover:shadow-red-500/20">
        <div className="flex items-center gap-4 mb-4">
          <img src={icon} alt={name} className="w-12 h-12" />
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{name}</h3>
        </div>
        
        <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mb-4">
          <motion.div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-red-600 to-red-400 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${proficiency}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
          className="text-sm text-gray-600 dark:text-gray-400"
        >
          {description}
        </motion.div>

        <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-red-400 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10" />
      </div>
    </motion.div>
  );
}