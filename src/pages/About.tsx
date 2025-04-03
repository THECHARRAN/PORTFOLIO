import { motion } from 'framer-motion';
import SkillBar from '../components/SkillBar';
import { skills } from '../data/skills';

export default function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-black py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-400">
            About Me
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            I am a 2nd-year Computer Science student with a passion for Web Development, 
            UI/UX Design, and Machine Learning. I love crafting seamless digital experiences 
            with a mix of aesthetics and functionality. Always experimenting, always learning.
          </p>
        </motion.div>

        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill) => (
              <SkillBar key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}