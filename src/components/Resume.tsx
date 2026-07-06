import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, Download, Eye, X, Award, Briefcase, GraduationCap, Server } from 'lucide-react';
import { PERSONAL_INFO, SKILLS, EXPERIENCES } from '../data';

export default function Resume() {
  const [showViewer, setShowViewer] = useState(false);

  // Simple handler to simulate a file download
  const handleDownload = () => {
    // Generate a beautiful plain-text CV to download
    const cvContent = `
=========================================
${PERSONAL_INFO.name.toUpperCase()}
${PERSONAL_INFO.title}
=========================================
Email: ${PERSONAL_INFO.email}
Phone: ${PERSONAL_INFO.phone}
Location: ${PERSONAL_INFO.location}

-----------------------------------------
CAREER OBJECTIVE
-----------------------------------------
${PERSONAL_INFO.careerObjective}

-----------------------------------------
TECHNICAL SKILLS
-----------------------------------------
${SKILLS.map(s => `- ${s.name} (${s.percentage}%)`).join('\n')}

-----------------------------------------
PROFESSIONAL EXPERIENCE
-----------------------------------------
${EXPERIENCES.map(e => `
* ${e.title} at ${e.organization}
  Period: ${e.date}
  Description: ${e.description}
`).join('\n')}

-----------------------------------------
EDUCATION
-----------------------------------------
${PERSONAL_INFO.education.map(ed => `
* ${ed.degree}
  School: ${ed.institution}
  Period: ${ed.period}
  Details: ${ed.details}
`).join('\n')}

-----------------------------------------
Generated with ❤️ from Developer Portfolio
`;

    const blob = new Blob([cvContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${PERSONAL_INFO.name.replace(/\s+/g, '_')}_Resume.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section
      id="resume"
      className="py-24 bg-white dark:bg-neutral-950 text-gray-900 dark:text-gray-100 transition-colors duration-500 relative"
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Heading */}
        <div id="resume-heading" className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-gray-900 dark:text-white">
            Curriculum <span className="text-emerald-500">Vitae</span>
          </h2>
          <div className="w-12 h-1 bg-emerald-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Highlight Card */}
        <motion.div
          id="resume-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ type: 'spring', stiffness: 80, damping: 15 }}
          className="relative rounded-3xl overflow-hidden glass-effect border border-gray-100 dark:border-gray-800/40 p-8 sm:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12"
        >
          {/* Decorative glowing backdrops */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

          {/* Left Column: Visual Icon representation */}
          <div id="resume-icon-block" className="relative p-6 sm:p-8 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
            <FileText size={64} className="animate-pulse" />
          </div>

          {/* Right Column: Copy & Actions */}
          <div id="resume-meta-block" className="flex-1 space-y-6 text-center md:text-left">
            <div className="space-y-2">
              <span className="font-mono text-xs font-bold text-emerald-500 tracking-wider uppercase">
                RESUME SUMMARY
              </span>
              <h3 className="font-display font-semibold text-2xl text-gray-900 dark:text-white">
                Detailed Professional Record
              </h3>
              <p className="text-gray-500 dark:text-gray-400 font-light text-sm sm:text-base leading-relaxed">
                A highly comprehensive summary of structural skills, certifications, and project completions. Always kept up to date for corporate inquiries.
              </p>
            </div>

            <div id="resume-actions-row" className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              {/* View Online Button */}
              <button
                id="resume-view-btn"
                onClick={() => setShowViewer(true)}
                className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-500 text-white font-medium hover:bg-emerald-600 transition-all duration-300 cursor-pointer shadow-lg shadow-emerald-500/15 text-sm"
              >
                <Eye size={18} />
                View Resume
              </button>

              {/* Download File Button */}
              <button
                id="resume-download-btn"
                onClick={handleDownload}
                className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 rounded-xl glass-effect border border-gray-200 dark:border-gray-800 text-gray-800 dark:text-gray-200 hover:text-emerald-500 dark:hover:text-emerald-400 dark:hover:border-emerald-500/40 hover:border-emerald-500/40 transition-all duration-300 font-medium text-sm cursor-pointer"
              >
                <Download size={18} />
                Download Resume
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Interactive Sheet Viewer Modal */}
      <AnimatePresence>
        {showViewer && (
          <motion.div
            id="resume-viewer-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto"
          >
            {/* Click backdrop to exit */}
            <div id="viewer-bg-trigger" className="absolute inset-0 cursor-zoom-out" onClick={() => setShowViewer(false)} />

            <motion.div
              id="viewer-sheet-frame"
              initial={{ scale: 0.95, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 30, opacity: 0 }}
              className="relative w-full max-w-3xl rounded-3xl overflow-hidden bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 shadow-2xl z-10 flex flex-col max-h-[90vh]"
            >
              {/* Header Bar */}
              <div id="viewer-header" className="p-4 sm:p-6 border-b border-gray-100 dark:border-neutral-800 flex items-center justify-between bg-gray-50/50 dark:bg-neutral-900/50">
                <div className="flex items-center gap-2">
                  <FileText className="text-emerald-500" size={20} />
                  <span className="font-display font-semibold text-sm sm:text-base text-gray-900 dark:text-white">
                    Resume Interactive Sheet
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    id="viewer-dl-btn-header"
                    onClick={handleDownload}
                    className="p-2 rounded-lg hover:bg-emerald-500/10 text-gray-500 dark:text-gray-400 hover:text-emerald-500 transition-colors cursor-pointer"
                    title="Download File"
                  >
                    <Download size={18} />
                  </button>
                  <button
                    id="viewer-close-btn-header"
                    onClick={() => setShowViewer(false)}
                    className="p-2 rounded-lg hover:bg-rose-500/10 text-gray-500 dark:text-gray-400 hover:text-rose-500 transition-colors cursor-pointer"
                    title="Close"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* Sheet Paper Body (Scrollable) */}
              <div id="viewer-sheet-body" className="flex-1 overflow-y-auto p-6 sm:p-12 space-y-10 text-gray-900 dark:text-gray-100 bg-white dark:bg-neutral-950 font-sans">
                {/* CV Heading */}
                <div id="sheet-header" className="text-center pb-8 border-b border-gray-100 dark:border-neutral-800 space-y-2">
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-gray-900 dark:text-white uppercase tracking-tight">
                    {PERSONAL_INFO.name}
                  </h3>
                  <p className="font-mono text-xs font-semibold text-emerald-500 tracking-wider">
                    {PERSONAL_INFO.title.toUpperCase()}
                  </p>
                  <p className="text-xs text-gray-400 dark:text-gray-500 font-light pt-1">
                    {PERSONAL_INFO.location} &bull; {PERSONAL_INFO.email} &bull; {PERSONAL_INFO.phone}
                  </p>
                </div>

                {/* Objective */}
                <div id="sheet-section-objective" className="space-y-3">
                  <h4 className="font-display font-semibold text-sm text-emerald-500 uppercase tracking-widest flex items-center gap-2">
                    <Award size={16} />
                    Career Objective
                  </h4>
                  <p className="text-sm font-light text-gray-600 dark:text-gray-300 leading-relaxed">
                    {PERSONAL_INFO.careerObjective}
                  </p>
                </div>

                {/* Education */}
                <div id="sheet-section-education" className="space-y-4">
                  <h4 className="font-display font-semibold text-sm text-emerald-500 uppercase tracking-widest flex items-center gap-2">
                    <GraduationCap size={16} />
                    Educational Timeline
                  </h4>
                  <div className="space-y-4">
                    {PERSONAL_INFO.education.map((edu, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className="flex items-baseline justify-between gap-4 flex-wrap">
                          <h5 className="font-display font-bold text-sm text-gray-900 dark:text-white">
                            {edu.degree}
                          </h5>
                          <span className="font-mono text-xs text-gray-400 dark:text-gray-500">{edu.period}</span>
                        </div>
                        <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">{edu.institution}</p>
                        <p className="text-xs font-light text-gray-500 dark:text-gray-400 leading-relaxed italic">{edu.details}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical Skills */}
                <div id="sheet-section-skills" className="space-y-4">
                  <h4 className="font-display font-semibold text-sm text-emerald-500 uppercase tracking-widest flex items-center gap-2">
                    <Server size={16} />
                    Core Competencies & Stack
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {SKILLS.map((skill) => (
                      <div key={skill.name} className="flex flex-col gap-1.5 p-3 rounded-xl bg-gray-50 dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800">
                        <span className="text-xs font-bold text-gray-800 dark:text-gray-200">{skill.name}</span>
                        <div className="w-full h-1 bg-gray-100 dark:bg-neutral-800 rounded-full overflow-hidden">
                          <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${skill.percentage}%` }} />
                        </div>
                        <span className="font-mono text-[9px] text-emerald-500">{skill.percentage}% expert level</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Professional Experiences */}
                <div id="sheet-section-experience" className="space-y-5">
                  <h4 className="font-display font-semibold text-sm text-emerald-500 uppercase tracking-widest flex items-center gap-2">
                    <Briefcase size={16} />
                    Professional Highlights
                  </h4>
                  <div className="space-y-6">
                    {EXPERIENCES.map((exp) => (
                      <div key={exp.id} className="space-y-2">
                        <div className="flex items-baseline justify-between gap-4 flex-wrap">
                          <h5 className="font-display font-bold text-sm text-gray-900 dark:text-white">
                            {exp.title}
                          </h5>
                          <span className="font-mono text-xs text-gray-400 dark:text-gray-500">{exp.date}</span>
                        </div>
                        <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">{exp.organization}</p>
                        <p className="text-xs font-light text-gray-600 dark:text-gray-300 leading-relaxed">
                          {exp.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Footer Button */}
              <div id="viewer-footer" className="p-4 sm:p-6 border-t border-gray-100 dark:border-neutral-800 flex justify-end bg-gray-50/50 dark:bg-neutral-900/50">
                <button
                  id="viewer-dl-btn-footer"
                  onClick={handleDownload}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 text-white font-medium hover:bg-emerald-600 transition-colors text-sm cursor-pointer shadow-lg shadow-emerald-500/10"
                >
                  <Download size={16} />
                  Download Resume
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
