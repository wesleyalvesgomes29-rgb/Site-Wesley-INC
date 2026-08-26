import React from 'react';
import { SIMULATOR_URL, getWhatsAppLink, CONSULTANT_CONFIG } from '../../data/config';
import { 
  Calculator, 
  MessageSquare, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  FileText 
} from 'lucide-react';

interface ParkEspanhaCtaProps {
  onOpenLeadForm: (devName: string) => void;
}

export const ParkEspanhaCta: React.FC<ParkEspanhaCtaProps> = ({
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
    <div className="mt-16 pt-12 border-t border-white/10" id="simulacao-park-espanha">
      <div className="relative rounded-3xl bg-gradient-to-r from-[#171E2D] via-[#121622] to-[#0D1017] p-8 sm:p-12 border border-[#FF600B]/30 shadow-2xl overflow-hidden">
        
        {/* Glow backdrop */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF600B]/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="flex flex-col items-start relative z-10">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF600B]/20 border border-[#FF600B]/40 text-xs font-bold text-[#FF8540] mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>CONSULTORIA & SIMULAÇÃO PERSONALIZADA</span>
          </div>

          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-display tracking-tight leading-tight">
            Quer conhecer as condições exclusivas do Park Espanha?
          </h3>

          <p className="text-sm sm:text-base text-neutral-300 mt-3 max-w-2xl leading-relaxed">
            Faça uma análise detalhada do seu perfil, fluxo de pagamento e opções de financiamento para apresentar a melhor condição no Jardim Espanha.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-neutral-300">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#FF600B]" />
              <span>Atendimento consultivo gratuito</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Condições e tabelas oficiais da INC</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            <button
              id="btn-park-espanha-modal-form"
              onClick={() => onOpenLeadForm('Park Espanha')}
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-black text-sm sm:text-base text-white bg-[#FF600B] hover:bg-[#E05005] shadow-lg shadow-[#FF600B]/30 hover:shadow-[#FF600B]/50 transition-all cursor-pointer border border-[#FFA066]/30 active:scale-95 text-center"
            >
              <FileText className="w-5 h-5" />
              <span>Quero uma Proposta do Park Espanha</span>
            </button>

            <a
              id="btn-park-espanha-wpp-direct"
              href={getWhatsAppLink('Olá Wesley! Gostaria de receber uma simulação e proposta para o Park Espanha (Jardim Espanha).')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-sm text-neutral-200 bg-[#141A28] hover:bg-[#1E2638] border border-white/10 hover:border-[#FF600B]/40 transition-all text-center"
            >
              <MessageSquare className="w-4 h-4 text-[#FF600B]" />
              <span>Conversar no WhatsApp</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};
