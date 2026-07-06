import { motion } from 'motion/react';
import { Briefcase, Milestone, Users, BookOpen, GraduationCap } from 'lucide-react';
import { EXPERIENCES } from '../data';
import { ExperienceType } from '../types';

export default function Experience() {
  const getIcon = (type: ExperienceType) => {
    switch (type) {
      case 'OJT':
        return <Milestone size={18} className="text-emerald-500" />;
      case 'Internship':
        return <Briefcase size={18} className="text-emerald-500" />;
      case 'Freelance':
        return <GraduationCap size={18} className="text-emerald-500" />;
      case 'Organization':
        return <Users size={18} className="text-emerald-500" />;
      case 'Seminar':
        return <BookOpen size={18} className="text-emerald-500" />;
      default:
        return <Briefcase size={18} className="text-emerald-500" />;
    }
  };

  const getBadgeStyles = (type: ExperienceType) => {
    switch (type) {
      case 'OJT':
        return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
      case 'Internship':
        return 'bg-purple-500/10 text-purple-500 border-purple-500/20';
      case 'Freelance':
        return 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20';
      case 'Organization':
        return 'bg-amber-500/10 text-amber-500 border-amber-500/20';
      case 'Seminar':
        return 'bg-rose-500/10 text-rose-500 border-rose-500/20';
      default:
        return 'bg-gray-500/10 text-gray-500 border-gray-500/20';
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', stiffness: 80, damping: 15 },
    },
  };

  return (
    <section
      id="experience"
      className="py-24 bg-white dark:bg-neutral-950 text-gray-900 dark:text-gray-100 transition-colors duration-500 relative"
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Heading */}
        <div id="experience-heading" className="text-center mb-20">
          <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-gray-900 dark:text-white">
            Professional <span className="text-emerald-500">Timeline</span>
          </h2>
          <div className="w-12 h-1 bg-emerald-500 mx-auto mt-4 rounded-full" />
          <p className="text-gray-500 dark:text-gray-400 font-light mt-4 max-w-lg mx-auto text-sm sm:text-base">
            A history of technical milestones, academic positions, seminars, and corporate developments.
          </p>
        </div>

        {/* Timeline Container */}
        <motion.div
          id="timeline-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="relative pl-6 sm:pl-10 border-l border-gray-200 dark:border-gray-800/80 space-y-12"
        >
          {EXPERIENCES.map((exp) => (
            <motion.div
              key={exp.id}
              id={`experience-item-${exp.id}`}
              variants={itemVariants}
              className="relative group"
            >
              {/* Timeline Bullet Anchor */}
              <div
                id={`timeline-bullet-${exp.id}`}
                className="absolute -left-[39px] sm:-left-[55px] top-1 flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-white dark:bg-black border border-gray-200 dark:border-gray-800 text-gray-500 dark:text-gray-400 group-hover:border-emerald-500/50 group-hover:text-emerald-400 transition-colors shadow-sm"
              >
                {getIcon(exp.type)}
              </div>

              {/* Glass Card content */}
              <div
                id={`experience-card-${exp.id}`}
                className="p-6 sm:p-8 rounded-3xl glass-effect border border-gray-100 dark:border-gray-800/40 hover:border-emerald-500/20 dark:hover:border-emerald-500/20 hover:shadow-xl dark:hover:shadow-emerald-950/5 transition-all duration-300"
              >
                {/* Meta Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-4">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span
                      className={`px-3 py-1 text-[10px] font-mono font-semibold tracking-wider uppercase rounded-full border ${getBadgeStyles(
                        exp.type
                      )}`}
                    >
                      {exp.type}
                    </span>
                    <span className="font-mono text-xs text-gray-400 dark:text-gray-500">
                      {exp.date}
                    </span>
                  </div>

                  {exp.location && (
                    <span className="font-display text-xs text-gray-500 dark:text-gray-400 font-light flex items-center gap-1">
                      <span className="w-1 h-1 rounded-full bg-gray-400 dark:bg-gray-600" />
                      {exp.location}
                    </span>
                  )}
                </div>

                {/* Job Title and Organization */}
                <h3 className="font-display font-semibold text-lg sm:text-xl text-gray-900 dark:text-white leading-snug group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                  {exp.title}
                </h3>
                <h4 className="font-display text-sm font-medium text-gray-500 dark:text-gray-400 mt-1">
                  {exp.organization}
                </h4>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 font-light text-sm sm:text-base leading-relaxed mt-4">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
