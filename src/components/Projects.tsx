import { motion } from 'motion/react';
import { Github, ExternalLink, Code2 } from 'lucide-react';
import { PROJECTS } from '../data';

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 80, damping: 15 },
    },
  };

  return (
    <section
      id="projects"
      className="py-24 bg-white dark:bg-black text-gray-900 dark:text-gray-100 transition-colors duration-500 relative"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div id="projects-heading" className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-gray-900 dark:text-white">
            Featured <span className="text-emerald-500">Projects</span>
          </h2>
          <div className="w-12 h-1 bg-emerald-500 mx-auto mt-4 rounded-full" />
          <p className="text-gray-500 dark:text-gray-400 font-light mt-4 max-w-lg mx-auto text-sm sm:text-base">
            A selective collection of web applications, desktop dashboards, and embedded hardware/IoT modules.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <motion.div
          id="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {PROJECTS.map((project) => (
            <motion.div
              key={project.id}
              id={`project-card-${project.id}`}
              variants={cardVariants}
              className="group rounded-3xl overflow-hidden glass-effect border border-gray-100 dark:border-gray-800/40 hover:border-emerald-500/20 dark:hover:border-emerald-500/20 hover:shadow-2xl hover:shadow-emerald-950/5 transition-all duration-300 flex flex-col"
            >
              {/* Card Image Container (Aspect Ratio 4:3) */}
              <div id={`project-img-container-${project.id}`} className="relative aspect-video w-full overflow-hidden bg-gray-900/10 dark:bg-gray-900/60 border-b border-gray-100 dark:border-gray-800/30">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out"
                />
                
                {/* Overlay with active icons */}
                <div id={`project-img-overlay-${project.id}`} className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View code for ${project.title} on GitHub`}
                      className="p-3.5 rounded-full bg-black/70 hover:bg-emerald-500 hover:text-white text-white border border-white/10 transition-all duration-300 hover:scale-110"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View live demo of ${project.title}`}
                      className="p-3.5 rounded-full bg-black/70 hover:bg-emerald-500 hover:text-white text-white border border-white/10 transition-all duration-300 hover:scale-110"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              {/* Card Content Information */}
              <div id={`project-info-container-${project.id}`} className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Code2 size={16} className="text-emerald-500" />
                    <span className="font-mono text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                      SYSTEM BUILD
                    </span>
                  </div>

                  <h3 className="font-display font-semibold text-xl sm:text-2xl text-gray-900 dark:text-white group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 font-light text-sm sm:text-base leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Technology Tags */}
                  <div id={`project-tags-${project.id}`} className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 font-mono text-[11px] font-medium rounded-md bg-gray-50 dark:bg-gray-900 text-gray-600 dark:text-gray-400 border border-gray-100 dark:border-gray-800/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions Row */}
                  <div id={`project-actions-${project.id}`} className="flex items-center gap-4 pt-4 border-t border-gray-100 dark:border-gray-800/30">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
                      >
                        <Github size={16} />
                        Source Code
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors ml-auto"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
