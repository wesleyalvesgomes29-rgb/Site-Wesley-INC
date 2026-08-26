import React, { useState, useEffect } from 'react';
import { getWhatsAppLink, CONSULTANT_CONFIG } from '../data/config';
import { MessageSquare, X, Sparkles } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showBubble, setShowBubble] = useState(false);
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    // Show polite bubble prompt after 4 seconds
    const timer = setTimeout(() => {
      if (!closed) {
        setShowBubble(true);
      }
    }, 4000);
    return () => clearTimeout(timer);
  }, [closed]);

  return (
    <div id="floating-whatsapp-widget" className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      
      {/* Speech Bubble Prompt */}
      {showBubble && !closed && (
        <div className="mb-3 max-w-xs bg-[#141824] border border-[#FF600B]/40 shadow-2xl rounded-2xl p-4 text-white relative animate-fade-in">
          <button
            onClick={() => setClosed(true)}
            className="absolute top-2 right-2 text-neutral-400 hover:text-white p-1 rounded-md"
            aria-label="Fechar mensagem"
          >
            <X className="w-3.5 h-3.5" />
          </button>

          <div className="flex items-center gap-2.5 mb-2">
            <div className="w-8 h-8 rounded-full overflow-hidden border border-[#FF600B] bg-neutral-900 shrink-0">
              <img
                src={CONSULTANT_CONFIG.avatarImage}
                alt="Wesley Chibi"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.endsWith('wesley-chibi.jpg')) {
                    target.src = '/images/wesley/wesley-chibi.jpg';
                  }
                }}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="text-xs font-bold text-white font-display">Wesley Alves</div>
              <div className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Online para tirar dúvidas</span>
              </div>
            </div>
          </div>

          <p className="text-xs text-neutral-300 mb-3 leading-snug">
            Olá! Quer saber mais sobre o <strong className="text-white">Park Jardim do Sol</strong> ou <strong className="text-white">Park Espanha</strong>?
          </p>

          <a
            id="floating-bubble-wpp-btn"
            href={getWhatsAppLink('Olá Wesley! Vim pelo site da INC e gostaria de conversar.')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-[#FF600B] hover:bg-[#E05005] font-bold text-xs text-white shadow-md transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>
      )}

      {/* Main Floating Button */}
      <a
        id="floating-whatsapp-trigger"
        href={getWhatsAppLink('Olá Wesley! Gostaria de conversar com você.')}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-[#FF600B] to-[#FF8238] hover:from-[#E05005] hover:to-[#FF600B] text-white shadow-xl shadow-[#FF600B]/40 hover:shadow-[#FF600B]/60 transition-all duration-300 active:scale-95 border-2 border-white/20"
        aria-label="Falar com o consultor Wesley no WhatsApp"
      >
        <MessageSquare className="w-7 h-7 transition-transform group-hover:scale-110" />

        {/* Pulse ring */}
        <span className="absolute -inset-1 rounded-full border-2 border-[#FF600B]/50 animate-ping pointer-events-none" />

        {/* Tiny avatar badge */}
        <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full overflow-hidden border-2 border-[#0B0D11] shadow-md bg-neutral-900">
          <img
            src={CONSULTANT_CONFIG.avatarImage}
            alt="Wesley"
            referrerPolicy="no-referrer"
            onError={(e) => {
              const target = e.currentTarget;
              if (!target.src.endsWith('wesley-chibi.jpg')) {
                target.src = '/images/wesley/wesley-chibi.jpg';
              }
            }}
            className="w-full h-full object-cover"
          />
        </div>
      </a>

    </div>
  );
};
