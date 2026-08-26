import React from 'react';
import { DEVELOPMENTS, getWhatsAppLink } from '../data/config';
import { ParkJardimDoSolSection } from './ParkJardimDoSolSection';
import { ParkEspanhaSection } from './ParkEspanhaSection';
import { SimulatorSection } from './SimulatorSection';
import { LeadForm } from './LeadForm';
import { FaqSection } from './FaqSection';
import { 
  ArrowLeft, 
  Building2, 
  MapPin, 
  Sparkles, 
  Layers, 
  MessageSquare,
  ChevronRight,
  Info,
  Compass,
  PhoneCall
} from 'lucide-react';

interface DevelopmentDetailPageProps {
  developmentId: 'jardim-do-sol' | 'park-espanha';
  onNavigateToHome: () => void;
  onNavigateToDevelopment: (id: 'jardim-do-sol' | 'park-espanha') => void;
}

export const DevelopmentDetailPage: React.FC<DevelopmentDetailPageProps> = ({
  developmentId,
  onNavigateToHome,
  onNavigateToDevelopment,
}) => {
  const currentDev = DEVELOPMENTS[developmentId] || DEVELOPMENTS['jardim-do-sol'];
  const otherDevId = developmentId === 'jardim-do-sol' ? 'park-espanha' : 'jardim-do-sol';
  const otherDev = DEVELOPMENTS[otherDevId];

  const scrollToAnchor = (anchorType: 'sobre' | 'lazer' | 'plantas' | 'localizacao' | 'contato') => {
    let targetId = '';
    if (anchorType === 'sobre') {
      targetId = developmentId === 'jardim-do-sol' ? 'jardim-do-sol' : 'park-espanha';
    } else if (anchorType === 'lazer') {
      targetId = developmentId === 'jardim-do-sol' ? 'lazer-jardim-sol' : 'lazer-park-espanha';
    } else if (anchorType === 'plantas') {
      targetId = developmentId === 'jardim-do-sol' ? 'plantas-jardim-sol' : 'plantas-park-espanha';
    } else if (anchorType === 'localizacao') {
      targetId = developmentId === 'jardim-do-sol' ? 'localizacao-jardim-sol' : 'localizacao-park-espanha';
    } else if (anchorType === 'contato') {
      targetId = 'contato-detalhe';
    }

    const el = document.getElementById(targetId);
    if (el) {
      const navOffset = 135;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const handleOpenLeadForm = (targetName: string) => {
    scrollToAnchor('contato');
  };

  const handleScrollToSimulator = () => {
    const el = document.getElementById('simulador-detalhe');
    if (el) {
      const navOffset = 135;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const anchorItems: Array<{ id: 'sobre' | 'lazer' | 'plantas' | 'localizacao' | 'contato'; label: string; icon: React.ReactNode }> = [
    { id: 'sobre', label: 'Sobre', icon: <Info className="w-3.5 h-3.5" /> },
    { id: 'lazer', label: 'Lazer', icon: <Sparkles className="w-3.5 h-3.5" /> },
    { id: 'plantas', label: 'Plantas', icon: <Layers className="w-3.5 h-3.5" /> },
    { id: 'localizacao', label: 'Localização', icon: <Compass className="w-3.5 h-3.5" /> },
    { id: 'contato', label: 'Contato', icon: <PhoneCall className="w-3.5 h-3.5" /> },
  ];

  return (
    <div className="min-h-screen bg-[#080A0E] text-neutral-100 flex flex-col pt-20">
      {/* Top Sticky Bar: Breadcrumb + Quick Section Anchor Navigation */}
      <div className="bg-[#0D1017]/95 border-b border-white/10 sticky top-[68px] z-40 backdrop-blur-md shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex flex-wrap items-center justify-between gap-3">
          
          {/* Back to Home & Current Development Tag */}
          <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm">
            <button
              id="btn-back-to-home"
              onClick={onNavigateToHome}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white transition-all cursor-pointer font-medium"
            >
              <ArrowLeft className="w-4 h-4 text-[#FF600B]" />
              <span>Início</span>
            </button>
            
            <span className="text-neutral-600 hidden sm:inline">/</span>
            
            <div className="hidden sm:flex items-center gap-1.5 text-neutral-400 font-mono text-xs">
              <Building2 className="w-3.5 h-3.5 text-[#FF600B]" />
              <span className="text-white font-bold">{currentDev.name}</span>
            </div>
          </div>

          {/* Quick Anchor Navigation Buttons (Sobre | Lazer | Plantas | Localização | Contato) */}
          <div className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto py-1 max-w-full">
            {anchorItems.map((anchor) => (
              <button
                key={anchor.id}
                id={`anchor-btn-${anchor.id}`}
                onClick={() => scrollToAnchor(anchor.id)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141824] hover:bg-[#FF600B] text-neutral-300 hover:text-white border border-white/5 hover:border-[#FF600B] text-xs font-semibold transition-all cursor-pointer whitespace-nowrap active:scale-95 shadow-sm"
              >
                {anchor.icon}
                <span>{anchor.label}</span>
              </button>
            ))}
          </div>

          {/* Quick Switch to other development */}
          <div className="hidden lg:flex items-center gap-2">
            <span className="text-xs text-neutral-400">Ver também:</span>
            <button
              id={`btn-switch-to-${otherDevId}`}
              onClick={() => onNavigateToDevelopment(otherDevId)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white border border-white/10 text-xs font-medium transition-all cursor-pointer"
            >
              <span>{otherDev.name}</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#FF600B]" />
            </button>
          </div>

        </div>
      </div>

      {/* Main Development Section */}
      <div className="flex-1">
        {developmentId === 'jardim-do-sol' ? (
          <ParkJardimDoSolSection onOpenLeadForm={handleOpenLeadForm} />
        ) : (
          <ParkEspanhaSection onOpenLeadForm={handleOpenLeadForm} />
        )}

        {/* Dedicated Contextualized Simulator Section */}
        <div id="simulador-detalhe">
          <SimulatorSection onOpenLeadForm={handleOpenLeadForm} />
        </div>

        {/* Dedicated Lead Form Section */}
        <div id="contato-detalhe">
          <LeadForm initialDevelopment={currentDev.name} />
        </div>

        {/* FAQ Section */}
        <FaqSection />
      </div>
    </div>
  );
};
