import { PERSONAL_INFO } from '../data';
import { Github, Linkedin, Facebook, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
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

  const quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <footer
      id="footer"
      className="py-12 bg-white dark:bg-neutral-950 border-t border-gray-100 dark:border-gray-800/20 text-gray-900 dark:text-gray-100 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Left Column: Branding / Logo */}
        <div id="footer-logo-block" className="md:col-span-4 text-center md:text-left space-y-3">
          <button
            onClick={() => scrollToSection('home')}
            className="font-display font-bold text-lg tracking-wider cursor-pointer group flex items-center justify-center md:justify-start gap-1.5"
          >
            <span className="text-emerald-500 font-extrabold">&lt;</span>
            <span className="dark:text-white text-gray-900 group-hover:text-emerald-500 transition-colors">
              LOYOLA
            </span>
            <span className="text-emerald-500 font-extrabold">/&gt;</span>
          </button>
          <p className="text-xs text-gray-400 dark:text-gray-500 font-light max-w-xs">
            Designing reliable hardware interfaces and crafting modern scalable web applications.
          </p>
        </div>

        {/* Center Column: Quick links list */}
        <div id="footer-links-block" className="md:col-span-5 flex flex-wrap justify-center gap-x-4 gap-y-2">
          {quickLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-xs font-display font-medium text-gray-500 dark:text-gray-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Right Column: Social Channels & Creator Credit */}
        <div id="footer-social-block" className="md:col-span-3 text-center md:text-right space-y-4">
          {/* Socials Row */}
          <div className="flex items-center justify-center md:justify-end gap-3">
            {[
              { id: 'git', href: PERSONAL_INFO.socials.github, icon: <Github size={16} /> },
              { id: 'link', href: PERSONAL_INFO.socials.linkedin, icon: <Linkedin size={16} /> },
              { id: 'fb', href: PERSONAL_INFO.socials.facebook, icon: <Facebook size={16} /> },
              { id: 'inst', href: PERSONAL_INFO.socials.instagram, icon: <Instagram size={16} /> },
              { id: 'mail', href: PERSONAL_INFO.socials.email, icon: <Mail size={16} /> }
            ].map((social) => (
              <a
                key={social.id}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 text-gray-400 hover:text-emerald-500 dark:hover:text-emerald-400 hover:border-emerald-500/20 transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>

          <p className="text-[11px] text-gray-400 dark:text-gray-500 font-light">
            &copy; {currentYear} {PERSONAL_INFO.name}. All Rights Reserved.
            <br />
            <span className="inline-flex items-center gap-1 mt-1 text-gray-400/80 dark:text-gray-500/80">
              Made with <span className="text-emerald-500 animate-pulse">❤️</span> by <span className="font-semibold text-gray-600 dark:text-gray-400">{PERSONAL_INFO.name}</span>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
