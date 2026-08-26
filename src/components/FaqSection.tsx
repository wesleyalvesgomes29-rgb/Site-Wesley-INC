import React, { useState } from 'react';
import { FAQ_ITEMS, getWhatsAppLink } from '../data/config';
import { HelpCircle, ChevronDown, MessageSquare, Sparkles } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      className="relative py-24 bg-[#090C12] border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 mb-4">
            <HelpCircle className="w-4 h-4 text-[#FF600B]" />
            <span className="text-xs font-bold text-neutral-300 tracking-wider uppercase">
              Tire Suas Dúvidas
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display mb-4">
            Perguntas Frequentes
          </h2>

          <p className="text-base text-neutral-400">
            Respostas diretas e transparentes sobre o processo de aquisição e consultoria.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                id={`faq-item-${index}`}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#141926] border-[#FF600B]/40 shadow-xl'
                    : 'bg-[#0E121A] border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-white font-display pr-4">
                    {item.question}
                  </span>
                  <div className={`p-2 rounded-xl transition-transform duration-200 shrink-0 ${isOpen ? 'bg-[#FF600B] text-white rotate-180' : 'bg-white/5 text-neutral-400'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-neutral-300 text-sm leading-relaxed border-t border-white/5 pt-4">
                    <p>{item.answer}</p>
                    
                    <div className="mt-4 pt-3 flex items-center justify-between text-xs text-neutral-400">
                      <span>Categoria: <strong className="text-neutral-200">{item.category}</strong></span>
                      <a
                        href={getWhatsAppLink(`Olá Wesley! Tenho uma dúvida sobre: ${item.question}`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#FF8540] hover:text-[#FF600B] font-semibold flex items-center gap-1"
                      >
                        Perguntar ao Wesley →
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions note */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-white/[0.02] border border-white/5">
          <p className="text-sm text-neutral-300">
            Ficou com alguma dúvida específica sobre o <strong className="text-white">Park Jardim do Sol</strong> ou <strong className="text-white">Park Espanha</strong>?
          </p>
          <a
            id="faq-ask-wesley-btn"
            href={getWhatsAppLink('Olá Wesley! Gostaria de tirar uma dúvida específica.')}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#FF8540] hover:text-white bg-[#FF600B]/10 hover:bg-[#FF600B] px-4 py-2 rounded-xl border border-[#FF600B]/30 transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Falar diretamente com o consultor Wesley</span>
          </a>
        </div>

      </div>
    </section>
  );
};
