import React from 'react';
import { getWhatsAppLink } from '../data/config';
import { MessageSquare, HeartHandshake, CheckCircle2, Compass, ShieldCheck, Sparkles, PhoneCall } from 'lucide-react';

export const WesleyPresentation: React.FC = () => {
  return (
    <section
      id="wesley"
      className="relative py-20 lg:py-28 bg-[#0C0F15] border-y border-white/5 overflow-hidden"
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-[#FF600B]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header Tag */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF600B]/10 border border-[#FF600B]/30 mb-4">
            <HeartHandshake className="w-4 h-4 text-[#FF600B]" />
            <span className="text-xs font-bold text-[#FF8540] tracking-wider uppercase">
              Atendimento Consultivo Humanizado
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display max-w-3xl">
            Você não precisa fazer isso sozinho.
          </h2>
        </div>

        {/* Content Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center rounded-3xl bg-gradient-to-br from-[#131722] via-[#0F131C] to-[#0A0C11] p-6 sm:p-10 lg:p-12 border border-white/10 shadow-2xl relative overflow-hidden">
          
          {/* Laser Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FF600B] to-transparent" />

          {/* Left Column: Wesley Chibi Character - Seamless Integration */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            
            {/* Subtle atmospheric glow behind character */}
            <div className="absolute w-64 h-64 bg-[#FF600B]/15 rounded-full blur-[80px] pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center group">
              <img
                src="/images/wesley/wesley-chibi.png"
                alt="Wesley - Consultor Oficial INC Empreendimentos"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.endsWith('wesley-chibi.jpg')) {
                    target.src = '/images/wesley/wesley-chibi.jpg';
                  }
                }}
                className="w-auto h-auto max-h-[320px] sm:max-h-[360px] object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)] transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />

              {/* Soft ground shadow */}
              <div className="w-40 sm:w-48 h-4 bg-black/60 rounded-full blur-md -mt-2 pointer-events-none" />

              {/* Status and Name Chip */}
              <div className="mt-3 flex flex-col items-center">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-bold text-white">Wesley Alves</span>
                  <span className="text-[#FF8540] font-mono text-[10px]">• INC</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Narrative & Human Connection */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            <p className="text-xl sm:text-2xl text-neutral-200 font-normal leading-relaxed">
              &ldquo;Eu sou Wesley, consultor da INC Empreendimentos. Meu trabalho é entender o que você procura, apresentar as possibilidades e acompanhar você durante o processo.&rdquo;
            </p>

            <p className="text-base text-neutral-300 leading-relaxed">
              Comprar um imóvel ou dar o primeiro passo rumo à casa própria é uma decisão muito importante. Por isso, você conta com um atendimento direto, claro e sem burocracia desnecessária. Vamos analisar juntos o seu momento e encontrar o melhor caminho.
            </p>

            {/* Key Service Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full pt-2">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex items-start gap-3">
                <Compass className="w-5 h-5 text-[#FF600B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Orientação Personalizada</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Apresentação dos empreendimentos de acordo com o que faz sentido para você.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#FF600B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Transparência Real</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Informações oficiais, sem pegadinhas ou termos confusos.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full">
              <a
                id="wesley-section-wpp-btn"
                href={getWhatsAppLink('Olá Wesley! Gostaria de conversar com você sobre as possibilidades de imóveis na INC.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-base text-white bg-[#FF600B] hover:bg-[#E05005] shadow-lg shadow-[#FF600B]/30 hover:shadow-[#FF600B]/50 transition-all duration-300 active:scale-95 border border-[#FFA066]/30"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Falar com Wesley</span>
              </a>

              <span className="text-xs text-neutral-400 flex items-center gap-1.5 self-center sm:self-auto">
                <PhoneCall className="w-3.5 h-3.5 text-[#FF8540]" />
                <span>Conversa direta pelo WhatsApp Oficial</span>
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
