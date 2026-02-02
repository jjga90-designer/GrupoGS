import React, { useState, useEffect } from 'react';
import { BarChart3, Menu, X, LogIn } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll Spy Logic
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Trigger when element crosses the middle of viewport
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Select all sections that correspond to navigation links
    // Including "metodologias" which is a div ID inside the Services component
    const sections = document.querySelectorAll('section[id], div[id="metodologias"]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Metodologías', href: '#metodologias' },
    { name: 'Cobertura', href: '#cobertura' },
    { name: 'Nosotros', href: '#nosotros' },
  ];

  // Function to handle smooth scrolling and prevent default anchor behavior (which causes white screen on some setups)
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Only intercept internal hash links
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMobileMenuOpen(false);
      }
    }
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className={`p-2 rounded-full transition-colors ${isScrolled ? 'bg-[#8B1D21] text-white' : 'bg-white text-[#8B1D21]'}`}>
               <BarChart3 className="h-6 w-6" />
            </div>
            <div className="flex flex-col">
              <span className={`text-2xl font-extrabold tracking-tighter leading-none ${isScrolled ? 'text-[#8B1D21]' : 'text-white'}`}>
                GRUPO GS
              </span>
              <span className={`text-[9px] font-bold tracking-[0.2em] uppercase ${isScrolled ? 'text-slate-800' : 'text-slate-200'}`}>
                Confianza que inicia el mercado
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-sm font-bold uppercase tracking-wide transition-colors hover:text-[#8B1D21] ${
                    isActive 
                      ? 'text-[#8B1D21]' // Color Active (Guinda)
                      : isScrolled ? 'text-slate-700' : 'text-slate-100' // Colors Inactive
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            
            <div className="flex items-center gap-3 ml-4">
              <a 
                href="https://portal.grupogs.com.pe"
                target="_blank"
                rel="noopener noreferrer"
                className={`px-6 py-2.5 text-sm font-bold rounded-full transition-all shadow-lg transform hover:-translate-y-0.5 flex items-center gap-2 ${
                  isScrolled 
                    ? 'bg-[#0F172A] text-white hover:bg-slate-800' 
                    : 'bg-white/10 backdrop-blur-md text-white border border-white/30 hover:bg-white/20'
                }`}
              > 
              
                <LogIn className="w-4 h-4" />
                Login
              </a>
              <a 
                href="#contacto"
                onClick={(e) => handleNavClick(e, '#contacto')}
                className="px-6 py-2.5 bg-[#8B1D21] text-white text-sm font-bold rounded-full hover:bg-[#681518] transition-all shadow-lg hover:shadow-red-900/30 transform hover:-translate-y-0.5"
              >
                Cotizar
              </a>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? 
              <X className={isScrolled ? "text-slate-900" : "text-white"} /> : 
              <Menu className={isScrolled ? "text-slate-900" : "text-white"} />
            }
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-xl py-4 animate-fade-in">
          <div className="flex flex-col space-y-4 px-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`font-bold uppercase text-sm ${
                    isActive ? 'text-[#8B1D21]' : 'text-slate-800 hover:text-[#8B1D21]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <div className="border-t border-slate-100 pt-4 mt-2 flex flex-col gap-3">
              <a 
                href="https://portal.grupogs.com.pe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-700 font-bold uppercase text-sm flex items-center gap-2 hover:text-[#0F172A]"
              >
                <LogIn className="w-4 h-4" /> Login
              </a>
               <a 
                href="#contacto"
                onClick={(e) => handleNavClick(e, '#contacto')}
                className="text-[#8B1D21] font-bold uppercase text-sm"
              >
                Cotizar Proyecto
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;