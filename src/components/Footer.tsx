import React from 'react';
import { IncLogo } from './IncLogo';
import { INSTAGRAM_URL, getWhatsAppLink, CONSULTANT_CONFIG } from '../data/config';
import { MessageSquare, Instagram, MapPin, Building2, Calculator, Mail, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigateToPath: (path: string) => void;
  onNavigateToSection: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateToPath, onNavigateToSection }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#06080B] text-neutral-400 border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          
          {/* Brand & City Description (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <button 
              onClick={() => onNavigateToPath('/')}
              className="text-left cursor-pointer focus:outline-none"
            >
              <IncLogo />
            </button>
            
            <p className="text-sm text-neutral-400 leading-relaxed max-w-sm pt-2">
              Transformando a experiência imobiliária com tecnologia, sofisticação e atendimento humano em Uberlândia-MG.
            </p>

            <div className="flex items-center gap-2 text-xs text-neutral-400 pt-1">
              <MapPin className="w-4 h-4 text-[#FF600B] shrink-0" />
              <span>Uberlândia - MG • Brasil</span>
            </div>

            {/* Social Channels Prepared */}
            <div className="flex items-center gap-3 pt-3">
              <a
                id="footer-instagram-link"
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#FF600B] hover:text-white text-neutral-300 border border-white/10 flex items-center justify-center transition-all duration-200"
                aria-label="Instagram da INC Empreendimentos"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                id="footer-whatsapp-link"
                href={getWhatsAppLink('Olá Wesley! Vim pelo rodapé do site da INC.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-emerald-600 hover:text-white text-neutral-300 border border-white/10 flex items-center justify-center transition-all duration-200"
                aria-label="WhatsApp do Wesley"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Empreendimentos Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Empreendimentos
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => onNavigateToPath('/empreendimentos/jardim-do-sol')}
                  className="hover:text-[#FF8540] transition-colors cursor-pointer text-left"
                >
                  Park Jardim do Sol (Novo Mundo)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateToPath('/empreendimentos/park-espanha')}
                  className="hover:text-[#FF8540] transition-colors cursor-pointer text-left"
                >
                  Park Espanha (Jardim Espanha)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateToPath('/empreendimentos/unique-novo-mundo')}
                  className="hover:text-[#FF8540] transition-colors cursor-pointer text-left"
                >
                  Unique Novo Mundo (Novo Mundo)
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigateToPath('/');
                    setTimeout(() => onNavigateToSection('empreendimentos'), 100);
                  }}
                  className="hover:text-[#FF8540] transition-colors cursor-pointer text-left"
                >
                  Ver Todos os Projetos
                </button>
              </li>
            </ul>
          </div>

          {/* Navegação Rápida (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Navegação
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => onNavigateToPath('/')} className="hover:text-white transition-colors cursor-pointer">
                  Início
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateToSection('empreendimentos')} className="hover:text-white transition-colors cursor-pointer">
                  Empreendimentos
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateToSection('contato')} className="hover:text-white transition-colors cursor-pointer">
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Atendimento com Wesley (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Atendimento
            </h4>
            <div className="text-xs text-neutral-400 space-y-1">
              <div className="text-white font-semibold">{CONSULTANT_CONFIG.name}</div>
              <div>{CONSULTANT_CONFIG.role}</div>
              <div className="text-neutral-300 font-mono text-[11px] pt-1">
                Tel: <a href={`tel:${CONSULTANT_CONFIG.phoneFormatted.replace(/\D/g, '')}`} className="hover:text-white transition-colors">{CONSULTANT_CONFIG.phoneFormatted}</a>
              </div>
              <div className="text-[#FF8540] font-mono pt-0.5">Uberlândia - MG</div>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-4 inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white bg-white/5 hover:bg-white/10 px-3 py-2 rounded-lg border border-white/10 transition-colors cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Voltar ao topo</span>
            </button>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © {new Date().getFullYear()} INC Empreendimentos • Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-4">
            <span>Uberlândia - MG</span>
            <span>•</span>
            <span>Atendimento com Wesley</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
