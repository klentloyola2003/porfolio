import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default function App() {
  // Sync standard dark mode on mount
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.add('dark');
    root.classList.remove('light');
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-gray-100 selection:bg-emerald-500/30">
      {/* Persistent Navigation Panel */}
      <Navbar />

      {/* Main Structural Layout Sections */}
      <main className="relative">
        {/* Home Hero Section */}
        <Hero />

        {/* About Biography Section */}
        <About />

        {/* Skills Competency Dashboard */}
        <Skills />

        {/* Projects Grid Panel */}
        <Projects />

        {/* Experience Milestone Tracker */}
        <Experience />

        {/* Licenses & Certificates Grid */}
        <Certificates />

        {/* Resume CV Section */}
        <Resume />

        {/* Contact Form Details */}
        <Contact />
      </main>

      {/* Branding and Social Links Footer */}
      <Footer />

      {/* Floating Action Floating Back-To-Top Anchor */}
      <BackToTop />
    </div>
  );
}

