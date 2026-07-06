import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll Progress and Scrolled background state
  useEffect(() => {
    const handleScroll = () => {
      // Background color opacity on scroll
      setIsScrolled(window.scrollY > 50);

      // Scroll progress percentage
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer to highlight active section
  useEffect(() => {
    const observers = NAV_ITEMS.map((item) => {
      const element = document.getElementById(item.id);
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(item.id);
          }
        },
        {
          rootMargin: '-30% 0px -60% 0px', // Target middle of the screen
        }
      );

      observer.observe(element);
      return { observer, element };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) obs.observer.unobserve(obs.element);
      });
    };
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      id="navbar-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-effect shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      {/* Scroll Progress Bar */}
      <div
        id="scroll-progress-bar"
        className="absolute top-0 left-0 h-1 bg-emerald-500 transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          id="navbar-logo-btn"
          onClick={() => scrollToSection('home')}
          className="font-display font-bold text-xl tracking-wider cursor-pointer group flex items-center gap-1.5"
        >
          <span className="text-emerald-500 font-extrabold">&lt;</span>
          <span className="text-white group-hover:text-emerald-500 transition-colors">
            LOYOLA
          </span>
          <span className="text-emerald-500 font-extrabold">/&gt;</span>
        </button>

        {/* Desktop Navigation */}
        <nav id="desktop-nav" className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              id={`nav-item-${item.id}`}
              onClick={() => scrollToSection(item.id)}
              className={`relative px-4 py-2 font-display text-sm font-medium rounded-full cursor-pointer transition-all duration-300 ${
                activeSection === item.id
                  ? 'text-emerald-500'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.span
                  layoutId="activeNavIndicator"
                  className="absolute inset-0 border border-emerald-500/20 bg-emerald-500/10 rounded-full -z-10"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* Right Actions: Hamburger */}
        <div className="flex items-center gap-3">
          {/* Mobile Menu Toggler */}
          <button
            id="mobile-menu-toggler"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2.5 rounded-full glass-effect text-gray-300 hover:text-emerald-400 hover:bg-gray-800/60 cursor-pointer transition-all duration-300"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden w-full border-t border-gray-200/10 glass-effect absolute left-0 top-[100%] shadow-2xl overflow-hidden"
          >
            <div id="mobile-nav-container" className="flex flex-col p-6 gap-3">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  id={`mobile-nav-item-${item.id}`}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full py-3 px-4 rounded-xl text-left font-display font-medium text-sm transition-all duration-300 flex items-center justify-between ${
                    activeSection === item.id
                      ? 'bg-emerald-500/10 text-emerald-500 border-l-4 border-emerald-500 pl-3'
                      : 'text-gray-300 hover:bg-gray-800/40'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
