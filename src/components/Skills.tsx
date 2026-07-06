import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SKILLS } from '../data';
import { Skill } from '../types';

type CategoryFilter = 'all' | 'frontend' | 'backend' | 'iot' | 'tools';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('all');

  const categories = [
    { key: 'all', label: 'All Tech' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend & DBs' },
    { key: 'iot', label: 'Hardware & IoT' },
    { key: 'tools', label: 'Tools' },
  ];

  const filteredSkills = SKILLS.filter(
    (skill) => selectedCategory === 'all' || skill.category === selectedCategory
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 15 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  };

  // Helper to render beautiful circular progress for key skills, linear for others
  const isCircularSkill = (name: string) => {
    return ['Laravel', 'ESP32', 'JavaScript', 'Tailwind CSS'].includes(name);
  };

  return (
    <section
      id="skills"
      className="py-24 bg-white dark:bg-neutral-950 text-gray-900 dark:text-gray-100 transition-colors duration-500 relative overflow-hidden"
    >
      {/* Background Decorative Mesh */}
      <div id="skills-bg-mesh" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 dark:bg-emerald-500/3 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div id="skills-heading" className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-gray-900 dark:text-white">
            Professional <span className="text-emerald-500">Skills</span>
          </h2>
          <div className="w-12 h-1 bg-emerald-500 mx-auto mt-4 rounded-full" />
          <p className="text-gray-500 dark:text-gray-400 font-light mt-4 max-w-lg mx-auto text-sm sm:text-base">
            Demonstrating experience in modern web languages, full-stack MVC design, and embedded IoT architectures.
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div id="skills-tabs" className="flex flex-wrap justify-center items-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              id={`skills-tab-${cat.key}`}
              onClick={() => setSelectedCategory(cat.key as CategoryFilter)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-display font-medium tracking-wide transition-all duration-300 cursor-pointer ${
                selectedCategory === cat.key
                  ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/10'
                  : 'glass-effect border border-gray-200/50 dark:border-gray-800 text-gray-600 dark:text-gray-300 dark:hover:text-emerald-400 hover:text-emerald-500'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          id="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill: Skill) => (
              <motion.div
                key={skill.name}
                id={`skill-card-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                variants={itemVariants}
                layout
                exit={{ opacity: 0, scale: 0.95, y: -15, transition: { duration: 0.2 } }}
                className="p-6 rounded-2xl glass-effect border border-gray-100 dark:border-gray-800/40 hover:border-emerald-500/20 dark:hover:border-emerald-500/20 hover:shadow-xl dark:hover:shadow-emerald-950/10 transition-all duration-300 group flex flex-col justify-between"
              >
                {isCircularSkill(skill.name) ? (
                  /* Circular progress style for standout skills */
                  <div className="flex items-center justify-between w-full">
                    <div>
                      <span className="font-mono text-xs font-semibold uppercase tracking-wider text-emerald-500">
                        {skill.category.toUpperCase()}
                      </span>
                      <h3 className="font-display font-semibold text-lg text-gray-900 dark:text-white mt-1">
                        {skill.name}
                      </h3>
                      <p className="text-xs text-gray-400 dark:text-gray-500 font-light mt-1">Core Domain Competency</p>
                    </div>

                    <div className="relative w-16 h-16 flex items-center justify-center">
                      <svg className="w-full h-full transform -rotate-90">
                        {/* Background Track */}
                        <circle
                          cx="32"
                          cy="32"
                          r="26"
                          className="stroke-gray-100 dark:stroke-gray-800"
                          strokeWidth="4"
                          fill="transparent"
                        />
                        {/* Filled Progress */}
                        <motion.circle
                          cx="32"
                          cy="32"
                          r="26"
                          className="stroke-emerald-500"
                          strokeWidth="4"
                          fill="transparent"
                          strokeDasharray={2 * Math.PI * 26}
                          initial={{ strokeDashoffset: 2 * Math.PI * 26 }}
                          whileInView={{
                            strokeDashoffset: 2 * Math.PI * 26 * (1 - skill.percentage / 100),
                          }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: 'easeOut' }}
                        />
                      </svg>
                      <span className="absolute font-mono text-xs font-bold text-gray-800 dark:text-gray-200">
                        {skill.percentage}%
                      </span>
                    </div>
                  </div>
                ) : (
                  /* Linear Progress style for general skills */
                  <div className="w-full">
                    <div className="flex items-center justify-between mb-3.5">
                      <div>
                        <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-emerald-500">
                          {skill.category.toUpperCase()}
                        </span>
                        <h3 className="font-display font-semibold text-base text-gray-900 dark:text-white mt-0.5">
                          {skill.name}
                        </h3>
                      </div>
                      <span className="font-mono text-xs font-semibold text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-900 px-2 py-1 rounded-md">
                        {skill.percentage}%
                      </span>
                    </div>

                    {/* Progress Bar Container */}
                    <div className="w-full h-2 rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                      />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
