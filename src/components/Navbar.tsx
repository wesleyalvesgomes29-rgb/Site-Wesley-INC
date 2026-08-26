import React, { useState, useEffect } from 'react';
import { IncLogo } from './IncLogo';
import { getWhatsAppLink } from '../data/config';
import { MessageSquare, Menu, X, Building2, Calculator, UserCheck, HelpCircle } from 'lucide-react';

interface NavbarProps {
  currentPath: string;
  onNavigateToPath: (path: string) => void;
  onNavigateToSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  currentPath, 
  onNavigateToPath, 
  onNavigateToSection 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', type: 'route', path: '/' },
    { label: 'Empreendimentos', type: 'section', sectionId: 'empreendimentos' },
    { label: 'Park Jardim do Sol', type: 'route', path: '/empreendimentos/jardim-do-sol' },
    { label: 'Park Espanha', type: 'route', path: '/empreendimentos/park-espanha' },
    { label: 'Contato', type: 'section', sectionId: 'contato' },
  ];

  const handleLinkClick = (item: typeof navLinks[0]) => {
    setMobileMenuOpen(false);
    if (item.type === 'route' && item.path) {
      onNavigateToPath(item.path);
    } else if (item.type === 'section' && item.sectionId) {
      if (currentPath !== '/') {
        // If not on home, go home then scroll to section
        onNavigateToPath(`/#${item.sectionId}`);
      } else {
        onNavigateToSection(item.sectionId);
      }
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A0C10]/90 backdrop-blur-md border-b border-white/10 shadow-2xl py-3'
          : 'bg-gradient-to-b from-[#0A0C10]/80 via-[#0A0C10]/40 to-transparent backdrop-blur-sm py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          id="nav-logo-btn"
          onClick={() => {
            setMobileMenuOpen(false);
            onNavigateToPath('/');
          }}
          className="group text-left cursor-pointer focus:outline-none transition-transform active:scale-95"
          aria-label="Ir para o início"
        >
          <IncLogo />
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium text-neutral-300">
          {navLinks.map((link) => {
            const isActive = link.type === 'route' && currentPath === link.path;
            return (
              <button
                key={link.label}
                id={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => handleLinkClick(link)}
                className={`px-3 py-2 rounded-lg transition-all duration-200 cursor-pointer relative group ${
                  isActive ? 'text-white bg-white/10 font-bold' : 'hover:text-white hover:bg-white/5'
                }`}
              >
                <span>{link.label}</span>
                <span className={`absolute bottom-0 left-3 right-3 h-0.5 bg-[#FF600B] rounded-full transition-transform duration-200 origin-left ${
                  isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} />
              </button>
            );
          })}
        </nav>

        {/* Action Button: Falar com Wesley */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            id="nav-whatsapp-cta"
            href={getWhatsAppLink('Olá Wesley! Gostaria de falar diretamente com você sobre os empreendimentos da INC.')}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-[#FF600B] to-[#FF7728] hover:from-[#E05005] hover:to-[#FF600B] shadow-lg shadow-[#FF600B]/25 hover:shadow-[#FF600B]/40 transition-all duration-300 active:scale-95 border border-[#FFA066]/30"
          >
            <MessageSquare className="w-4 h-4 transition-transform group-hover:rotate-12" />
            <span>Falar com Wesley</span>
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            id="nav-mobile-quick-wpp"
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-[#FF600B] text-white shadow-md"
            aria-label="Falar no WhatsApp"
          >
            <MessageSquare className="w-4 h-4" />
          </a>
          <button
            id="nav-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-neutral-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer-menu"
          className="lg:hidden bg-[#0D1017] border-b border-white/10 px-4 pt-3 pb-6 shadow-2xl transition-all"
        >
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                id={`drawer-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => handleLinkClick(link)}
                className="flex items-center justify-between px-4 py-3 rounded-lg text-neutral-200 hover:text-[#FF600B] hover:bg-white/5 text-left text-base font-medium transition-colors"
              >
                <span>{link.label}</span>
                <span className="text-xs text-neutral-500">→</span>
              </button>
            ))}

            <div className="pt-4 mt-2 border-t border-white/10">
              <a
                id="drawer-whatsapp-btn"
                href={getWhatsAppLink('Olá Wesley! Vim pelo site da INC e gostaria de atendimento.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-bold text-white bg-[#FF600B] hover:bg-[#E05005] shadow-lg shadow-[#FF600B]/30"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Falar com Wesley no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
