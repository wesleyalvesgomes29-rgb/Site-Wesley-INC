import React from 'react';
import { Building2, ArrowDown, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onExploreDevelopments: () => void;
  onOpenSimulator?: () => void;
  onOpenConsultant?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreDevelopments }) => {
  return (
    <section
      id="hero"
      className="relative pt-24 pb-8 sm:pt-28 sm:pb-10 lg:pt-32 lg:pb-12 bg-gradient-to-b from-[#07090C] via-[#0D1016] to-[#090B0E] border-b border-white/5 overflow-hidden"
    >
      {/* Subtle Background Lights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[240px] bg-[#FF600B]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
          
          {/* Text Presentation Column */}
          <div className="flex-1 text-center md:text-left">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 mb-3 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#FF600B] animate-pulse" />
              <span className="text-[11px] sm:text-xs font-semibold text-neutral-300 tracking-wide uppercase">
                INC Empreendimentos • Uberlândia - MG
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight mb-2 sm:mb-3 font-display">
              Imóveis e lançamentos <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-[#FF8540]">
                em Uberlândia.
              </span>
            </h1>

            {/* Short Subtitle */}
            <p className="text-sm sm:text-base text-neutral-300 max-w-xl font-normal leading-relaxed mb-5">
              Conheça os projetos disponíveis e escolha o empreendimento ideal para você e sua família.
            </p>

            {/* Direct Action Button */}
            <div className="flex items-center justify-center md:justify-start gap-3">
              <button
                id="hero-btn-conhecer"
                onClick={onExploreDevelopments}
                className="group flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-sm text-white bg-[#FF600B] hover:bg-[#E05005] shadow-lg shadow-[#FF600B]/25 hover:shadow-[#FF600B]/40 transition-all duration-200 cursor-pointer active:scale-95 border border-[#FFA573]/30"
              >
                <Building2 className="w-4 h-4" />
                <span>Ver empreendimentos</span>
                <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
              </button>
            </div>

          </div>

          {/* Compact Wesley Chibi Presentation */}
          <div className="flex flex-col items-center justify-center shrink-0">
            <div className="relative group">
              {/* Subtle halo glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 sm:w-44 h-36 sm:h-44 bg-[#FF600B]/20 rounded-full blur-2xl pointer-events-none" />

              {/* Chibi Image - Compact & Optimized */}
              <img
                src="/images/wesley/wesley-chibi.png"
                alt="Wesley Alves - Consultor INC Empreendimentos"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.endsWith('wesley-chibi.jpg')) {
                    target.src = '/images/wesley/wesley-chibi.jpg';
                  }
                }}
                className="w-auto h-auto max-h-[170px] sm:max-h-[210px] object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.85)] filter transition-transform duration-300 group-hover:scale-105"
                loading="eager"
              />
            </div>

            {/* Small Official Consultant Tag */}
            <div className="mt-1.5 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#121622]/90 border border-white/10 text-[10px] text-neutral-300 font-mono">
              <ShieldCheck className="w-3 h-3 text-[#FF600B]" />
              <span>Consultor Oficial INC</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
