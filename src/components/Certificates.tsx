import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, Eye, X, Calendar, ArrowUpRight } from 'lucide-react';
import { CERTIFICATES } from '../data';
import { Certificate } from '../types';

export default function Certificates() {
  const [activeCertificate, setActiveCertificate] = useState<Certificate | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 90, damping: 15 },
    },
  };

  return (
    <section
      id="certificates"
      className="py-24 bg-white dark:bg-black text-gray-900 dark:text-gray-100 transition-colors duration-500 relative"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div id="certificates-heading" className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-gray-900 dark:text-white">
            Licenses & <span className="text-emerald-500">Certificates</span>
          </h2>
          <div className="w-12 h-1 bg-emerald-500 mx-auto mt-4 rounded-full" />
          <p className="text-gray-500 dark:text-gray-400 font-light mt-4 max-w-lg mx-auto text-sm sm:text-base">
            Professional certifications proving core expertise in systems architecture and backend frameworks.
          </p>
        </div>

        {/* Certificate Card Grid */}
        <motion.div
          id="certificates-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {CERTIFICATES.map((cert) => (
            <motion.div
              key={cert.id}
              id={`certificate-card-${cert.id}`}
              variants={itemVariants}
              className="group rounded-3xl overflow-hidden glass-effect border border-gray-100 dark:border-gray-800/40 hover:border-emerald-500/20 dark:hover:border-emerald-500/20 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="p-4 flex flex-col space-y-4">
                {/* Certificate Image Frame */}
                <div id={`cert-img-frame-${cert.id}`} className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-900/10 dark:bg-gray-900/60 border border-gray-100 dark:border-gray-800/20">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                  {/* Glassy hover overlay */}
                  <div id={`cert-overlay-${cert.id}`} className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      id={`cert-view-btn-overlay-${cert.id}`}
                      onClick={() => setActiveCertificate(cert)}
                      className="p-3 rounded-full bg-white text-black shadow-lg hover:bg-emerald-500 hover:text-white transition-all duration-300 hover:scale-110 cursor-pointer"
                    >
                      <Eye size={20} />
                    </button>
                  </div>
                </div>

                {/* Details */}
                <div id={`cert-details-${cert.id}`} className="px-2 space-y-2">
                  <div className="flex items-center gap-2">
                    <Award size={15} className="text-emerald-500" />
                    <span className="font-mono text-[10px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                      ACCREDITED
                    </span>
                  </div>

                  <h3 className="font-display font-semibold text-base text-gray-900 dark:text-white group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors line-clamp-1">
                    {cert.title}
                  </h3>

                  <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                    {cert.issuer}
                  </p>
                </div>
              </div>

              {/* Action Footer */}
              <div id={`cert-footer-${cert.id}`} className="p-4 border-t border-gray-100 dark:border-gray-800/30 flex items-center justify-between">
                <span className="font-mono text-[11px] text-gray-400 dark:text-gray-500 flex items-center gap-1">
                  <Calendar size={12} />
                  {cert.date}
                </span>

                <button
                  id={`cert-view-btn-${cert.id}`}
                  onClick={() => setActiveCertificate(cert)}
                  className="flex items-center gap-1.5 text-xs font-semibold text-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  View Certificate
                  <ArrowUpRight size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal Overlay */}
      <AnimatePresence>
        {activeCertificate && (
          <motion.div
            id="cert-lightbox-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          >
            {/* Close trigger on background click */}
            <div id="lightbox-bg-trigger" className="absolute inset-0 cursor-zoom-out" onClick={() => setActiveCertificate(null)} />

            <motion.div
              id="lightbox-content-frame"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl rounded-3xl overflow-hidden bg-white dark:bg-neutral-900 border border-white/10 shadow-2xl z-10 flex flex-col"
            >
              {/* Close Button */}
              <button
                id="lightbox-close-btn"
                onClick={() => setActiveCertificate(null)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 text-white hover:bg-emerald-500 hover:text-white transition-all duration-300 z-20 cursor-pointer"
                aria-label="Close Preview"
              >
                <X size={20} />
              </button>

              <div id="lightbox-main" className="grid grid-cols-1 md:grid-cols-12 items-stretch">
                {/* Left col: Image */}
                <div id="lightbox-img-col" className="md:col-span-8 bg-neutral-950 flex items-center justify-center aspect-[4/3] md:aspect-auto">
                  <img
                    src={activeCertificate.image}
                    alt={activeCertificate.title}
                    referrerPolicy="no-referrer"
                    className="max-h-[70vh] object-contain w-full"
                  />
                </div>

                {/* Right col: Meta Descriptions */}
                <div id="lightbox-meta-col" className="md:col-span-4 p-8 flex flex-col justify-between space-y-6 dark:bg-neutral-900 bg-white">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Award size={18} className="text-emerald-500" />
                      <span className="font-mono text-xs font-semibold text-gray-400 dark:text-gray-500 tracking-wider">
                        CERTIFICATE PREVIEW
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-xl sm:text-2xl text-gray-900 dark:text-white leading-snug">
                      {activeCertificate.title}
                    </h3>

                    <div className="space-y-1">
                      <p className="text-xs text-gray-400 dark:text-gray-500 uppercase font-mono tracking-wide">Issuing Body</p>
                      <p className="font-display text-sm font-medium text-gray-800 dark:text-gray-200">{activeCertificate.issuer}</p>
                    </div>

                    <div className="space-y-1">
                      <p className="text-xs text-gray-400 dark:text-gray-500 uppercase font-mono tracking-wide">Date Conferred</p>
                      <p className="font-display text-sm font-medium text-gray-800 dark:text-gray-200">{activeCertificate.date}</p>
                    </div>
                  </div>

                  <button
                    id="lightbox-dismiss-btn"
                    onClick={() => setActiveCertificate(null)}
                    className="w-full py-3.5 rounded-xl bg-emerald-500 text-white font-semibold text-sm hover:bg-emerald-600 transition-colors cursor-pointer shadow-lg shadow-emerald-500/10"
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
