import React from 'react';
import { getWhatsAppLink } from '../data/config';
import { Building2, Calculator, MessageSquare, Sparkles, ShieldCheck, MapPin, ChevronRight } from 'lucide-react';

interface HeroProps {
  onExploreDevelopments: () => void;
  onOpenSimulator: () => void;
  onOpenConsultant: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreDevelopments,
  onOpenSimulator,
  onOpenConsultant,
}) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#07090C] via-[#0D1016] to-[#0A0C10]"
    >
      {/* Background Futuristic Grid & Ambient Orange Glows */}
      <div className="absolute inset-0 bg-futuristic-grid opacity-30 pointer-events-none" />
      
      {/* Radial Orange Glow Light Beams */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#FF600B]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-[450px] h-[450px] bg-[#FF600B]/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Cyber Corner Lines Accent */}
      <div className="absolute top-24 left-8 hidden lg:block opacity-20 text-[#FF600B] font-mono text-[10px] tracking-widest pointer-events-none">
        <div>SYS.INC // UBERLANDIA_MG</div>
        <div>LAT: -18.9186 | LONG: -48.2772</div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text & Content Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#FF600B] animate-pulse" />
              <span className="text-xs font-semibold text-neutral-300 tracking-wide uppercase">
                INC Empreendimentos • Uberlândia - MG
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6 font-display">
              Seu próximo endereço <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-[#FF8540]">
                começa aqui.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-neutral-300 max-w-2xl font-normal leading-relaxed mb-8">
              Conheça os empreendimentos da INC em Uberlândia e encontre uma possibilidade que faça sentido para você.
            </p>

            {/* Call to Actions (Primary, Secondary, Consultant) */}
            <div className="w-full flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-8">
              {/* Button 1: Conhecer empreendimentos */}
              <button
                id="hero-btn-conhecer"
                onClick={onExploreDevelopments}
                className="group flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl font-bold text-base text-white bg-[#FF600B] hover:bg-[#E05005] shadow-lg shadow-[#FF600B]/30 hover:shadow-[#FF600B]/50 transition-all duration-300 cursor-pointer active:scale-95 border border-[#FFA573]/30"
              >
                <Building2 className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
                <span>Conhecer empreendimentos</span>
                <ChevronRight className="w-4 h-4 text-white/70 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Button 2: Fazer uma simulação */}
              <button
                id="hero-btn-simulacao"
                onClick={onOpenSimulator}
                className="group flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl font-bold text-base text-neutral-100 bg-[#151922] hover:bg-[#1C2230] border border-white/10 hover:border-[#FF600B]/50 shadow-md transition-all duration-300 cursor-pointer active:scale-95"
              >
                <Calculator className="w-5 h-5 text-[#FF600B]" />
                <span>Fazer uma simulação</span>
              </button>
            </div>

            {/* Third Direct Button: Falar com Wesley */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                id="hero-btn-wesley"
                href={getWhatsAppLink('Olá Wesley! Estou no site da INC e gostaria de tirar dúvidas sobre os imóveis.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#FF8540] hover:text-white px-4 py-2 rounded-lg bg-[#FF600B]/10 hover:bg-[#FF600B] border border-[#FF600B]/30 transition-all duration-200"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Falar com Wesley</span>
                <span className="text-xs bg-[#FF600B]/30 text-white px-2 py-0.5 rounded-full font-mono">WhatsApp Online</span>
              </a>

              <div className="flex items-center gap-2 text-xs text-neutral-400">
                <MapPin className="w-3.5 h-3.5 text-[#FF600B]" />
                <span>Park Jardim do Sol (Zona Leste) & Park Espanha</span>
              </div>
            </div>

          </div>

          {/* Wesley Chibi Visual Showcase Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative mt-8 lg:mt-0">
            
            {/* Subtle INC Orange Atmospheric Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-[#FF600B]/20 rounded-full blur-[100px] pointer-events-none" />
            
            {/* Holographic HUD Badge on Top */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#131722]/80 border border-white/10 backdrop-blur-md mb-3 z-10 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] font-bold text-white font-display">WESLEY ALVES</span>
              <span className="text-[10px] text-[#FF8540] font-mono">• CONSULTOR INC</span>
            </div>

            {/* Wesley Chibi Original Artwork - Integrated seamlessly on dark background */}
            <div className="relative z-10 flex flex-col items-center group">
              <img
                src="/images/wesley/wesley-chibi.png"
                alt="Wesley Consultor INC Empreendimentos"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.endsWith('wesley-chibi.jpg')) {
                    target.src = '/images/wesley/wesley-chibi.jpg';
                  }
                }}
                className="w-auto h-auto max-h-[380px] sm:max-h-[460px] lg:max-h-[500px] object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.85)] filter transition-transform duration-500 group-hover:scale-[1.02]"
                loading="eager"
              />

              {/* Natural Ground Contact Shadow */}
              <div className="w-48 sm:w-64 h-5 bg-black/70 rounded-full blur-md -mt-3 pointer-events-none" />
            </div>

            {/* Floating Glass Pill Indicator */}
            <div className="mt-4 flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0F131C]/90 border border-white/10 backdrop-blur-md shadow-xl z-10">
              <ShieldCheck className="w-4 h-4 text-[#FF600B] shrink-0" />
              <span className="text-xs font-semibold text-neutral-200">
                Atendimento humano & exclusivo em Uberlândia
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
