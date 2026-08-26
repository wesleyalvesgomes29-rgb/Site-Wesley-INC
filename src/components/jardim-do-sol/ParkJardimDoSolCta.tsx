import React from 'react';
import { SIMULATOR_URL, getWhatsAppLink, CONSULTANT_CONFIG } from '../../data/config';
import { 
  Calculator, 
  MessageSquare, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight,
  CheckCircle2,
  FileText
} from 'lucide-react';

interface ParkJardimDoSolCtaProps {
  onOpenLeadForm: (devName: string) => void;
}

export const ParkJardimDoSolCta: React.FC<ParkJardimDoSolCtaProps> = ({
  onOpenLeadForm,
}) => {
  const handleScrollToSimulator = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('simulador');
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="mt-16 pt-12 border-t border-white/10" id="simulacao-jardim-sol">
      <div className="relative rounded-3xl bg-gradient-to-r from-[#171E2D] via-[#121622] to-[#0D1017] p-8 sm:p-12 border border-[#FF600B]/30 shadow-2xl overflow-hidden">
        
        {/* Glow backdrop */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF600B]/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          
          {/* Left Column: CTA Content */}
          <div className="lg:col-span-8 flex flex-col items-start">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF600B]/20 border border-[#FF600B]/40 text-xs font-bold text-[#FF8540] mb-3">
              <Calculator className="w-3.5 h-3.5" />
              <span>SIMULAÇÃO PERSONALIZADA & SEM COMPROMISSO</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-black text-white font-display tracking-tight leading-tight">
              Quer descobrir qual pode ser a sua possibilidade no Park Jardim do Sol?
            </h3>

            <p className="text-sm sm:text-base text-neutral-300 mt-3 max-w-xl leading-relaxed">
              O Wesley faz uma análise rápida e personalizada da sua renda, uso de FGTS e subsídios Caixa para encontrar as parcelas ideais para você.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-neutral-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#FF600B]" />
                <span>Atendimento 100% gratuito</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Simulação oficial Minha Casa Minha Vida</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a
                id="btn-jardim-sol-simulador"
                href={SIMULATOR_URL}
                onClick={handleScrollToSimulator}
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-black text-sm sm:text-base text-white bg-[#FF600B] hover:bg-[#E05005] shadow-lg shadow-[#FF600B]/30 hover:shadow-[#FF600B]/50 transition-all cursor-pointer border border-[#FFA066]/30 active:scale-95 text-center"
              >
                <Calculator className="w-5 h-5" />
                <span>Fazer simulação</span>
              </a>

              <a
                id="btn-jardim-sol-wpp-direct"
                href={getWhatsAppLink('Olá Wesley! Quero fazer uma simulação de financiamento para o Park Jardim do Sol.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-sm text-neutral-200 bg-[#141A28] hover:bg-[#1E2638] border border-white/10 hover:border-[#FF600B]/40 transition-all text-center"
              >
                <MessageSquare className="w-4 h-4 text-[#FF600B]" />
                <span>Falar com Wesley no WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Right Column: Wesley Chibi Original Artwork seamlessly integrated */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center relative">
            <div className="relative flex flex-col items-center group">
              <img
                src={CONSULTANT_CONFIG.avatarImage}
                alt="Wesley Alves - Consultor INC Empreendimentos"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.endsWith('wesley-chibi.jpg')) {
                    target.src = '/images/wesley/wesley-chibi.jpg';
                  }
                }}
                className="w-auto h-auto max-h-[260px] sm:max-h-[300px] object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.85)] transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="w-36 sm:w-44 h-3.5 bg-black/60 rounded-full blur-md -mt-2 pointer-events-none" />
              
              <div className="mt-2 text-center">
                <div className="text-xs font-bold text-white font-display">Wesley Alves</div>
                <div className="text-[10px] text-[#FF8540] font-mono">CONSULTOR OFICIAL INC</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
