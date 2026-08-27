import React from 'react';
import { SIMULATOR_URL, getWhatsAppLink } from '../../data/config';
import { 
  Calculator, 
  MessageSquare, 
  CheckCircle2
} from 'lucide-react';

interface UniqueNovoMundoCtaProps {
  onOpenLeadForm: (devName: string) => void;
}

export const UniqueNovoMundoCta: React.FC<UniqueNovoMundoCtaProps> = ({
  onOpenLeadForm,
}) => {
  return (
    <div className="mt-16 pt-8 border-t border-white/10" id="cta-unique-novo-mundo">
      <div className="relative rounded-3xl bg-gradient-to-r from-[#141A28] via-[#1A2234] to-[#141A28] border border-[#FF600B]/30 p-8 sm:p-12 overflow-hidden shadow-2xl">
        
        {/* Glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF600B]/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          
          <span className="text-xs font-mono uppercase tracking-widest text-[#FF8540] font-bold">
            ATENDIMENTO PERSONALIZADO
          </span>

          <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-display mt-2 mb-4">
            Pronto para dar o próximo passo no Unique Novo Mundo?
          </h3>

          <p className="text-sm sm:text-base text-neutral-300 mb-8 leading-relaxed">
            Consulte disponibilidade, valores e simule as condições de financiamento Caixa com o consultor Wesley.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              id="btn-unique-bottom-simular"
              onClick={() => onOpenLeadForm('Unique Novo Mundo')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#FF600B] hover:bg-[#E05005] text-white font-bold text-sm shadow-xl shadow-[#FF600B]/30 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 border border-[#FFA066]/30"
            >
              <Calculator className="w-5 h-5" />
              <span>Fazer simulação gratuita</span>
            </button>

            <a
              id="btn-unique-bottom-wpp"
              href={getWhatsAppLink('Olá Wesley! Gostaria de uma simulação do Unique Novo Mundo (Bairro Novo Mundo).')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#161B27] hover:bg-[#1F2637] text-neutral-200 hover:text-white border border-white/10 hover:border-[#FF600B]/40 font-semibold text-sm transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-5 h-5 text-[#FF600B]" />
              <span>Falar diretamente no WhatsApp</span>
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 pt-6 border-t border-white/10 text-xs text-neutral-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#FF600B]" />
              Atendimento sem compromisso
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#FF600B]" />
              Condições Minha Casa Minha Vida
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#FF600B]" />
              Consultoria oficial INC
            </span>
          </div>

        </div>
      </div>
    </div>
  );
};
