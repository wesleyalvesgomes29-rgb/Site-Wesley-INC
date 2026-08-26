import React from 'react';
import { getWhatsAppLink } from '../data/config';
import { Building2, MessageSquare, Calculator, Sparkles, ChevronRight, CheckCircle2 } from 'lucide-react';

interface FinalCtaProps {
  onExploreDevelopments: () => void;
  onOpenSimulator: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({
  onExploreDevelopments,
  onOpenSimulator,
}) => {
  return (
    <section
      id="cta-final"
      className="relative py-24 lg:py-32 bg-gradient-to-b from-[#080A0E] via-[#10141D] to-[#06080B] border-t border-white/10 overflow-hidden"
    >
      {/* Intense orange glow backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-[#FF600B]/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="rounded-3xl bg-gradient-to-r from-[#141824] via-[#10141D] to-[#141824] p-8 sm:p-12 lg:p-16 border border-white/15 shadow-2xl relative overflow-hidden">
          
          {/* Laser Top Accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FF600B] to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-8 flex flex-col items-start">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF600B]/10 border border-[#FF600B]/30 mb-6">
                <Sparkles className="w-4 h-4 text-[#FF600B]" />
                <span className="text-xs font-bold text-[#FF8540] tracking-wider uppercase">
                  INC Empreendimentos • Uberlândia
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-display mb-4 leading-tight">
                Vamos encontrar uma <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-[#FF8540]">
                  possibilidade para você?
                </span>
              </h2>

              <p className="text-lg text-neutral-300 max-w-2xl font-normal leading-relaxed mb-8">
                Conheça os empreendimentos da INC ou fale diretamente comigo.
              </p>

              {/* Three Buttons requested */}
              <div className="w-full flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-4">
                
                {/* Button 1: Conhecer empreendimentos */}
                <button
                  id="final-cta-conhecer"
                  onClick={onExploreDevelopments}
                  className="flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl font-bold text-sm text-neutral-100 bg-[#161B27] hover:bg-[#1E2536] border border-white/10 hover:border-[#FF600B]/40 shadow-lg transition-all cursor-pointer active:scale-95"
                >
                  <Building2 className="w-4 h-4 text-[#FF600B]" />
                  <span>Conhecer empreendimentos</span>
                </button>

                {/* Button 2: Falar com Wesley */}
                <a
                  id="final-cta-wesley"
                  href={getWhatsAppLink('Olá Wesley! Gostaria de conversar agora sobre os imóveis da INC.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl font-extrabold text-sm text-white bg-[#FF600B] hover:bg-[#E05005] shadow-lg shadow-[#FF600B]/30 hover:shadow-[#FF600B]/50 transition-all cursor-pointer active:scale-95 border border-[#FFA066]/30"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Falar com Wesley</span>
                </a>

                {/* Button 3: Fazer simulação */}
                <button
                  id="final-cta-simulacao"
                  onClick={onOpenSimulator}
                  className="flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl font-bold text-sm text-neutral-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-all cursor-pointer active:scale-95"
                >
                  <Calculator className="w-4 h-4 text-[#FF8540]" />
                  <span>Fazer simulação</span>
                </button>

              </div>

              {/* Badges footer */}
              <div className="mt-8 flex flex-wrap items-center gap-4 text-xs text-neutral-400">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Atendimento sem compromisso</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FF600B]" />
                  <span>Park Jardim do Sol & Park Espanha</span>
                </div>
              </div>

            </div>

            {/* Right Column: Wesley Chibi Spotlight - Seamless Integration */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center relative">
              <div className="relative flex flex-col items-center group">
                
                {/* Subtle back aura */}
                <div className="absolute w-56 h-56 bg-[#FF600B]/20 rounded-full blur-[80px] pointer-events-none" />

                <img
                  src="/images/wesley/wesley-chibi.png"
                  alt="Wesley Consultor INC"
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

                {/* Ground shadow */}
                <div className="w-36 sm:w-44 h-3.5 bg-black/60 rounded-full blur-md -mt-2 pointer-events-none" />

                <div className="mt-2 text-center">
                  <div className="text-xs font-bold text-white font-display">Wesley Alves</div>
                  <p className="text-[10px] text-[#FF8540] font-mono">CONSULTOR OFICIAL INC</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
