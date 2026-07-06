import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Calendar, Award, Compass, GraduationCap } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function About() {
  const infoItems = [
    { id: 'email', icon: <Mail size={18} className="text-emerald-500" />, label: 'Email', value: PERSONAL_INFO.email, href: PERSONAL_INFO.socials.email },
    { id: 'phone', icon: <Phone size={18} className="text-emerald-500" />, label: 'Phone', value: PERSONAL_INFO.phone },
    { id: 'location', icon: <MapPin size={18} className="text-emerald-500" />, label: 'Location', value: PERSONAL_INFO.location },
    { id: 'status', icon: <Calendar size={18} className="text-emerald-500" />, label: 'Age', value: '24 Years Old' },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 80, damping: 15 }
    }
  };

  return (
    <section
      id="about"
      className="py-24 bg-white dark:bg-black text-gray-900 dark:text-gray-100 transition-colors duration-500 relative"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div id="about-heading" className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-gray-900 dark:text-white">
            About <span className="text-emerald-500">Me</span>
          </h2>
          <div className="w-12 h-1 bg-emerald-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Bento Grid Layout */}
        <div id="about-bento-grid" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Story & Career Objective (8 cols on lg) */}
          <motion.div
            id="about-story-card"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="lg:col-span-8 p-8 rounded-3xl glass-effect border border-gray-100 dark:border-gray-800/40 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-500">
                  <Compass size={22} />
                </div>
                <h3 className="font-display font-semibold text-xl text-gray-900 dark:text-white">My Journey & Purpose</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-light mb-6">
                {PERSONAL_INFO.aboutLong}
              </p>
            </div>

            <div className="mt-4 pt-6 border-t border-gray-100 dark:border-gray-800/30">
              <h4 className="font-display font-medium text-sm text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-3">Career Objective</h4>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed font-light italic">
                "{PERSONAL_INFO.careerObjective}"
              </p>
            </div>
          </motion.div>

          {/* Quick Info Parameters (4 cols on lg) */}
          <motion.div
            id="about-info-card"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="lg:col-span-4 p-8 rounded-3xl glass-effect border border-gray-100 dark:border-gray-800/40 flex flex-col justify-between"
          >
            <div className="w-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-500">
                  <Award size={22} />
                </div>
                <h3 className="font-display font-semibold text-xl text-gray-900 dark:text-white">Personal Information</h3>
              </div>

              <div id="info-items-list" className="space-y-6">
                {infoItems.map((item) => (
                  <div key={item.id} id={`about-info-item-${item.id}`} className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gray-50 dark:bg-gray-900/60 border border-gray-100 dark:border-gray-800/40">
                      {item.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="font-mono text-xs text-gray-400 uppercase tracking-wider">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-display text-sm text-gray-700 dark:text-gray-200 hover:text-emerald-500 dark:hover:text-emerald-400 font-medium transition-colors break-words"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-display text-sm text-gray-700 dark:text-gray-200 font-medium break-words">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Education Timeline (6 cols on lg) */}
          <motion.div
            id="about-education-card"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="lg:col-span-6 p-8 rounded-3xl glass-effect border border-gray-100 dark:border-gray-800/40"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-500">
                <GraduationCap size={22} />
              </div>
              <h3 className="font-display font-semibold text-xl text-gray-900 dark:text-white">Education History</h3>
            </div>

            <div id="education-timeline" className="relative pl-6 border-l border-gray-100 dark:border-gray-800/60 space-y-8">
              {PERSONAL_INFO.education.map((edu, idx) => (
                <div key={idx} id={`about-edu-item-${idx}`} className="relative">
                  {/* Timeline dot */}
                  <span className="absolute -left-[31px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-white dark:bg-black border-2 border-emerald-500">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  </span>

                  <p className="font-mono text-xs font-semibold text-emerald-500 tracking-wider mb-1">{edu.period}</p>
                  <h4 className="font-display font-semibold text-base text-gray-900 dark:text-white leading-snug">{edu.degree}</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-medium mt-0.5">{edu.institution}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-light mt-2 leading-relaxed">
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Personal Interests Grid (6 cols on lg) */}
          <motion.div
            id="about-interests-card"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="lg:col-span-6 p-8 rounded-3xl glass-effect border border-gray-100 dark:border-gray-800/40 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-500">
                  <Compass size={22} />
                </div>
                <h3 className="font-display font-semibold text-xl text-gray-900 dark:text-white">Personal Interests</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-light mb-8">
                In my spare time, I explore technology outside pure web development. I love building physical prototypes, hacking routers, and studying the convergence of embedded firmware and beautiful frontend experiences.
              </p>
            </div>

            <div id="interests-tags-grid" className="flex flex-wrap gap-3">
              {PERSONAL_INFO.interests.map((interest, idx) => (
                <span
                  key={idx}
                  id={`about-interest-tag-${idx}`}
                  className="px-4 py-2 text-xs sm:text-sm rounded-xl bg-gray-50 dark:bg-gray-900/40 border border-gray-100 dark:border-gray-800/30 font-medium text-gray-700 dark:text-gray-300 hover:text-emerald-500 dark:hover:text-emerald-400 hover:border-emerald-500/30 dark:hover:border-emerald-500/30 transition-all duration-300"
                >
                  {interest}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
