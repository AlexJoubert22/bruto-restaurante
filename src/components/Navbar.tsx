import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { lang, setLang, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  
  const location = useLocation();
  const isMenuPage = location.pathname === '/menu';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuPage) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -40% 0px' }
    );

    const sections = ['concept', 'menu', 'wine', 'team', 'contact'];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isMenuPage]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (location.pathname === '/' && href.startsWith('/#')) {
      e.preventDefault();
      const id = href.replace('/#', '');
      const el = document.getElementById(id);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: 'smooth' });
        window.history.pushState(null, '', href);
        setIsMobileMenuOpen(false);
      }
    }
  };

  const navLinks = [
    { name: t('nav.concept'), href: '/#concept' },
    { name: t('nav.menu'), href: '/#menu' },
    { name: t('nav.essence'), href: '/#team' },
    { name: t('nav.contact'), href: '/#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || isMenuPage ? 'py-4' : 'py-6'
      }`}
    >
      {/* Separate background layer to prevent mix-blend-mode issues with backdrop-filter */}
      <div className={`absolute inset-0 transition-colors duration-500 ${
        isScrolled || isMenuPage ? 'bg-black/90 backdrop-blur-md' : 'bg-transparent'
      }`} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-1 flex justify-start">
          <a href="/" className="flex items-center justify-center">
            <img 
              src="/logosinfondo1.png" 
              alt="Bruto" 
              className="h-8 md:h-10 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </a>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex flex-1 justify-center">
          <div className="flex space-x-8">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('/#', '');
              const isActive = activeSection === sectionId && !isMenuPage;
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={(e) => handleNavClick(e as any, link.href)}
                  className={`relative text-sm uppercase tracking-widest transition-colors duration-300 ${
                    isActive ? 'text-[#c5a059]' : 'text-white/70 hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="navIndicator"
                      className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#c5a059] rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex flex-1 justify-end items-center space-x-8">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setLang('ES')}
              className={`text-xs tracking-widest transition-colors ${
                lang === 'ES' ? 'text-white font-medium' : 'text-white/50 hover:text-white'
              }`}
            >
              ES
            </button>
            <span className="text-white/20">|</span>
            <button
              onClick={() => setLang('EN')}
              className={`text-xs tracking-widest transition-colors ${
                lang === 'EN' ? 'text-white font-medium' : 'text-white/50 hover:text-white'
              }`}
            >
              EN
            </button>
          </div>

          {isMenuPage ? (
            <Link
              to="/"
              className="border border-white/30 px-6 py-2 text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-300"
            >
              {t('nav.back')}
            </Link>
          ) : (
            <Link
              to="/menu"
              className="border border-[#c5a059] px-6 py-2 text-xs uppercase tracking-widest text-[#c5a059] hover:bg-[#c5a059] hover:text-black transition-colors duration-300"
            >
              {t('nav.fullMenu')}
            </Link>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex-1 flex justify-end">
          <button
            className="text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed inset-0 top-[72px] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-8"
          >
            {navLinks.map((link) => {
              const sectionId = link.href.replace('/#', '');
              const isActive = activeSection === sectionId && !isMenuPage;
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={(e) => handleNavClick(e as any, link.href)}
                  className={`text-2xl font-serif tracking-widest transition-colors ${
                    isActive ? 'text-[#c5a059]' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            {isMenuPage && (
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-serif tracking-widest text-white/80 hover:text-white transition-colors mt-4"
              >
                {t('nav.backHome')}
              </Link>
            )}

            <div className="flex items-center space-x-6 pt-8 border-t border-white/10 w-48 justify-center">
              <button
                onClick={() => setLang('ES')}
                className={`text-sm tracking-widest ${
                  lang === 'ES' ? 'text-white' : 'text-white/50'
                }`}
              >
                ES
              </button>
              <span className="text-white/20">|</span>
              <button
                onClick={() => setLang('EN')}
                className={`text-sm tracking-widest ${
                  lang === 'EN' ? 'text-white' : 'text-white/50'
                }`}
              >
                EN
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
