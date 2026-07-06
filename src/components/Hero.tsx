import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Facebook, Instagram, Mail, ArrowRight, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    'Full-Stack Developer',
    'IoT Architect',
    'Software Engineer',
    'Hardware Integrator'
  ];

  // Typing effect loop
  useEffect(() => {
    const currentRole = roles[roleIndex];
    let typingSpeed = isDeleting ? 40 : 100;

    if (!isDeleting && charIndex === currentRole.length) {
      // Pause before starting to delete
      typingSpeed = 2000;
      setIsDeleting(true);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    const timer = setTimeout(() => {
      setTypedText(
        isDeleting
          ? currentRole.substring(0, charIndex - 1)
          : currentRole.substring(0, charIndex + 1)
      );
      setCharIndex((prev) => (isDeleting ? prev - 1 : prev + 1));
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = contactSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-grid-pattern dark:bg-black bg-white transition-colors duration-500"
    >
      {/* Decorative Blur Orbs */}
      <div id="orb-1" className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
      <div id="orb-2" className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-teal-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left column: Text Information */}
        <motion.div
          id="hero-text-col"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6"
        >
          <motion.div
            id="hero-greeting"
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-effect border border-emerald-500/20 text-emerald-500 text-sm font-semibold tracking-wide"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Available for Opportunities
          </motion.div>

          <motion.h1
            id="hero-title"
            variants={itemVariants}
            className="font-display font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight text-gray-900 dark:text-white leading-tight"
          >
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">{PERSONAL_INFO.name}</span>
          </motion.h1>

          <motion.div
            id="hero-typing-container"
            variants={itemVariants}
            className="h-10 sm:h-12 flex items-center"
          >
            <p className="font-mono text-lg sm:text-2xl text-gray-600 dark:text-gray-300">
              I build <span className="text-emerald-500 font-semibold">{typedText}</span>
              <span className="inline-block w-[3px] h-[20px] sm:h-[26px] bg-emerald-500 ml-1 animate-pulse" />
            </p>
          </motion.div>

          <motion.p
            id="hero-desc"
            variants={itemVariants}
            className="text-gray-600 dark:text-gray-400 max-w-xl text-base sm:text-lg leading-relaxed font-light"
          >
            {PERSONAL_INFO.shortIntro}
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            id="hero-actions"
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <button
              id="hero-contact-btn"
              onClick={scrollToContact}
              className="group flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-500 text-white font-medium hover:bg-emerald-600 shadow-lg shadow-emerald-500/20 transition-all duration-300 cursor-pointer text-sm sm:text-base"
            >
              Contact Me
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              id="hero-download-btn"
              href="#resume"
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 rounded-xl glass-effect border border-gray-200 dark:border-gray-800 text-gray-800 dark:text-gray-200 hover:text-emerald-500 dark:hover:text-emerald-400 dark:hover:border-emerald-500/40 hover:border-emerald-500/40 transition-all duration-300 text-sm sm:text-base font-medium"
            >
              Download Resume
              <Download size={18} />
            </a>
          </motion.div>

          {/* Socials Grid */}
          <motion.div
            id="hero-socials"
            variants={itemVariants}
            className="flex items-center gap-4 pt-4"
          >
            {[
              { id: 'git', href: PERSONAL_INFO.socials.github, icon: <Github size={20} />, label: 'GitHub' },
              { id: 'link', href: PERSONAL_INFO.socials.linkedin, icon: <Linkedin size={20} />, label: 'LinkedIn' },
              { id: 'fb', href: PERSONAL_INFO.socials.facebook, icon: <Facebook size={20} />, label: 'Facebook' },
              { id: 'inst', href: PERSONAL_INFO.socials.instagram, icon: <Instagram size={20} />, label: 'Instagram' },
              { id: 'mail', href: PERSONAL_INFO.socials.email, icon: <Mail size={20} />, label: 'Email' }
            ].map((social) => (
              <a
                key={social.id}
                id={`hero-social-${social.id}`}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="p-3 rounded-xl glass-effect text-gray-600 dark:text-gray-400 dark:hover:text-emerald-400 hover:text-emerald-500 dark:hover:border-emerald-500/20 hover:border-emerald-500/20 hover:scale-105 transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right column: Beautiful profile avatar with glass decoration */}
        <motion.div
          id="hero-avatar-col"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.4 }}
          className="lg:col-span-5 flex justify-center items-center"
        >
          <div id="avatar-frame" className="relative group">
            {/* Outer rotating decorative border */}
            <div id="avatar-bg-glow" className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-emerald-500 to-teal-500 opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500" />
            <div id="avatar-border" className="absolute -inset-0.5 rounded-3xl bg-gradient-to-tr from-emerald-500 to-teal-500 opacity-30 group-hover:scale-[1.02] transition-transform duration-500" />

            {/* Main Avatar Container */}
            <div id="avatar-container" className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-3xl overflow-hidden glass-effect border border-white/10">
              <img
                id="avatar-img"
                src={PERSONAL_INFO.avatar}
                alt={PERSONAL_INFO.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
              />
            </div>

            {/* floating badges */}
            <div
              id="badge-iot"
              className="absolute -bottom-5 -left-5 p-3.5 sm:p-4 rounded-2xl glass-effect border border-emerald-500/20 shadow-xl flex items-center gap-2 hover:scale-105 transition-transform"
            >
              <span className="flex h-3.5 w-3.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500" />
              </span>
              <span className="font-mono text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200">IoT Ecosystems</span>
            </div>

            <div
              id="badge-fullstack"
              className="absolute -top-5 -right-5 p-3.5 sm:p-4 rounded-2xl glass-effect border border-emerald-500/20 shadow-xl flex items-center gap-2 hover:scale-105 transition-transform"
            >
              <span className="text-emerald-500 text-sm font-bold">&lt;/&gt;</span>
              <span className="font-mono text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200">Full-Stack Dev</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating scroll down indicator */}
      <div id="scroll-indicator" className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 rounded-full border-2 border-gray-400 dark:border-gray-600 flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
        </motion.div>
      </div>
    </section>
  );
}
