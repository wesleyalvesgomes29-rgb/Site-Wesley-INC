import React, { useState } from 'react';
import { DEVELOPMENTS, getWhatsAppLink } from '../../data/config';
import { 
  Sparkles, 
  Waves, 
  Trophy, 
  Utensils, 
  Smile, 
  HeartHandshake, 
  Trees, 
  Dumbbell, 
  Sun, 
  Tv, 
  Bike, 
  ShieldCheck, 
  MessageSquare
} from 'lucide-react';

interface UniqueNovoMundoLeisureProps {
  onOpenLeadForm: (devName: string) => void;
}

export const UniqueNovoMundoLeisure: React.FC<UniqueNovoMundoLeisureProps> = ({
  onOpenLeadForm,
}) => {
  const data = DEVELOPMENTS['unique-novo-mundo'];
  const leisureItems = data.leisureItems || [];
  const [filterCategory, setFilterCategory] = useState<string>('todos');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Waves': return <Waves className="w-5 h-5 text-[#FF600B]" />;
      case 'Trophy': return <Trophy className="w-5 h-5 text-[#FF600B]" />;
      case 'Utensils': return <Utensils className="w-5 h-5 text-[#FF600B]" />;
      case 'Smile': return <Smile className="w-5 h-5 text-[#FF600B]" />;
      case 'HeartHandshake': return <HeartHandshake className="w-5 h-5 text-[#FF600B]" />;
      case 'Trees': return <Trees className="w-5 h-5 text-[#FF600B]" />;
      case 'Dumbbell': return <Dumbbell className="w-5 h-5 text-[#FF600B]" />;
      case 'Sun': return <Sun className="w-5 h-5 text-[#FF600B]" />;
      case 'Tv': return <Tv className="w-5 h-5 text-[#FF600B]" />;
      case 'Bike': return <Bike className="w-5 h-5 text-[#FF600B]" />;
      default: return <Sparkles className="w-5 h-5 text-[#FF600B]" />;
    }
  };

  const filteredItems = filterCategory === 'todos' 
    ? leisureItems 
    : leisureItems.filter(item => item.category === filterCategory);

  return (
    <div className="mt-16 pt-12 border-t border-white/10" id="lazer-unique-novo-mundo">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF600B]/10 border border-[#FF600B]/30 text-xs font-bold text-[#FF8540] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>LAZER & CONVIVÊNCIA</span>
          </div>
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
            Lazer e bem-estar no Unique Novo Mundo
          </h3>
          <p className="text-sm sm:text-base text-neutral-300 mt-2 max-w-2xl">
            Um condomínio moderno com lazer completo, seguro e planejado para transformar a rotina da sua família.
          </p>
        </div>

        {/* Quick helper badge */}
        <div className="flex items-center gap-2 text-xs font-mono text-neutral-300 bg-[#121622] px-4 py-2.5 rounded-xl border border-white/10 shrink-0">
          <ShieldCheck className="w-4 h-4 text-[#FF600B]" />
          <span>Áreas Entregues Equipadas</span>
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6">
        {[
          { id: 'todos', label: 'Todos os Ambientes' },
          { id: 'esporte', label: 'Esporte & Saúde' },
          { id: 'convivencia', label: 'Convivência & Gourmet' },
          { id: 'familia', label: 'Família & Pets' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setFilterCategory(tab.id)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
              filterCategory === tab.id
                ? 'bg-[#FF600B] text-white shadow-md shadow-[#FF600B]/20'
                : 'bg-[#141926] text-neutral-300 hover:bg-[#1C2335] hover:text-white border border-white/5'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Grid of Leisure Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="group p-5 rounded-2xl bg-gradient-to-b from-[#141926] to-[#0E121B] border border-white/5 hover:border-[#FF600B]/40 transition-all duration-300 shadow-md flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#1A2234] border border-white/10 flex items-center justify-center mb-3.5 group-hover:scale-110 transition-transform">
                {getIcon(item.icon)}
              </div>
              <h4 className="text-base font-bold text-white font-display group-hover:text-[#FF8540] transition-colors mb-1">
                {item.title}
              </h4>
              <p className="text-xs text-neutral-300 leading-relaxed">
                {item.tagline}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-neutral-400">
              <span className="uppercase tracking-wider text-[#FF8540] font-semibold">
                {item.category}
              </span>
              <span>INC Padrão</span>
            </div>
          </div>
        ))}
      </div>

      {/* WhatsApp CTA Bar */}
      <div className="mt-10 p-5 rounded-2xl bg-[#121622] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#FF600B]/10 border border-[#FF600B]/30 flex items-center justify-center shrink-0">
            <Sparkles className="w-5 h-5 text-[#FF600B]" />
          </div>
          <div>
            <h5 className="text-sm font-bold text-white">
              Quer conhecer todos os detalhes das áreas comuns?
            </h5>
            <p className="text-xs text-neutral-400">
              Fale com Wesley para receber o catálogo completo com especificações do Unique Novo Mundo.
            </p>
          </div>
        </div>

        <a
          href={getWhatsAppLink('Olá Wesley! Gostaria de mais detalhes sobre as áreas de lazer do Unique Novo Mundo.')}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1A2232] hover:bg-[#253046] text-neutral-200 hover:text-white border border-white/10 hover:border-[#FF600B]/40 text-xs font-semibold transition-all shrink-0"
        >
          <MessageSquare className="w-4 h-4 text-[#FF600B]" />
          <span>Falar no WhatsApp</span>
        </a>
      </div>

    </div>
  );
};
