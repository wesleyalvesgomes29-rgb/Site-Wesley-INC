import React from 'react';
import { getWhatsAppLink } from '../data/config';
import { MessageSquare, Phone, MapPin, ShieldCheck, ArrowRight } from 'lucide-react';

export const HomeContactSection: React.FC = () => {
  const whatsappNumber = '(34) 99824-3737';
  const phoneNumber = '(34) 99209-9245';
  const phoneClean = '34992099245';

  return (
    <section id="contato" className="relative py-12 sm:py-16 bg-[#07090D] border-t border-white/10 overflow-hidden">
      {/* Background Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-[#FF600B]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 mb-2.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#FF600B]" />
            <span className="text-[11px] font-bold text-neutral-300 tracking-wider uppercase">
              Atendimento Oficial INC
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display tracking-tight mb-2">
            Fale com nosso consultor
          </h2>
          
          <p className="text-xs sm:text-sm text-neutral-400">
            Tire dúvidas, faça simulações ou agende uma apresentação exclusiva dos empreendimentos.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          
          {/* Card 1: WhatsApp Oficial */}
          <div className="rounded-2xl bg-gradient-to-b from-[#131824] to-[#0D1018] p-5 sm:p-6 border border-white/10 hover:border-[#FF600B]/50 transition-all flex flex-col justify-between shadow-lg group">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#FF600B]/10 border border-[#FF600B]/30 flex items-center justify-center text-[#FF600B] mb-4 group-hover:scale-105 transition-transform">
                <MessageSquare className="w-5 h-5" />
              </div>
              
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#FF8540] font-bold mb-0.5">
                WhatsApp Oficial
              </div>
              
              <div className="text-xl font-black text-white font-display mb-1.5">
                {whatsappNumber}
              </div>
              
              <p className="text-xs text-neutral-400 mb-5">
                Atendimento rápido para tirar dúvidas e simular condições de financiamento.
              </p>
            </div>

            <a
              id="home-contact-whatsapp-btn"
              href={getWhatsAppLink('Olá Wesley! Gostaria de atendimento sobre os empreendimentos da INC.')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#FF600B] hover:bg-[#E05005] shadow-md shadow-[#FF600B]/20 transition-all"
            >
              <span>Conversar no WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 2: Telefone para Contato */}
          <div className="rounded-2xl bg-gradient-to-b from-[#131824] to-[#0D1018] p-5 sm:p-6 border border-white/10 hover:border-white/25 transition-all flex flex-col justify-between shadow-lg group">
            <div>
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-4 group-hover:scale-105 transition-transform">
                <Phone className="w-5 h-5 text-[#FF600B]" />
              </div>
              
              <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 font-bold mb-0.5">
                Telefone para Contato
              </div>
              
              <div className="text-xl font-black text-white font-display mb-1.5">
                {phoneNumber}
              </div>
              
              <p className="text-xs text-neutral-400 mb-5">
                Ligação direta com o consultor Wesley Alves em horário comercial.
              </p>
            </div>

            <a
              id="home-contact-phone-btn"
              href={`tel:${phoneClean}`}
              className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm text-neutral-200 bg-[#1A2130] hover:bg-[#252E42] border border-white/10 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#FF600B]" />
              <span>Ligar agora</span>
            </a>
          </div>

        </div>

        {/* Location & Footnote */}
        <div className="mt-8 text-center text-[11px] text-neutral-400 flex items-center justify-center gap-1.5">
          <MapPin className="w-3 h-3 text-[#FF600B]" />
          <span>Atendimento exclusivo INC Empreendimentos • Uberlândia - MG</span>
        </div>

      </div>
    </section>
  );
};
