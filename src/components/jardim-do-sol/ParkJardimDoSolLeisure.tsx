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
  Gamepad2, 
  Tv, 
  Bike, 
  Film,
  Building2,
  ShieldCheck,
  CheckCircle2,
  MessageSquare,
  Compass,
  Layers
} from 'lucide-react';

interface ParkJardimDoSolLeisureProps {
  onOpenLeadForm: (devName: string) => void;
}

export const ParkJardimDoSolLeisure: React.FC<ParkJardimDoSolLeisureProps> = ({
  onOpenLeadForm,
}) => {
  const data = DEVELOPMENTS['jardim-do-sol'];
  const leisureItems = data.leisureItems || [];
  const [filterCategory, setFilterCategory] = useState<string>('todos');
  const [showImplantationList, setShowImplantationList] = useState<boolean>(false);

  const implantationItems = [
    { number: 1, name: 'Bicicletário', category: 'esporte' },
    { number: 2, name: 'Guarita de Segurança', category: 'apoio' },
    { number: 3, name: 'Apoio Administrativo', category: 'apoio' },
    { number: 4, name: 'Abrigo de Gás', category: 'apoio' },
    { number: 5, name: 'Abrigo de Lixo', category: 'apoio' },
    { number: 6, name: 'Parcão (Pet Place)', category: 'familia' },
    { number: 7, name: 'Redário', category: 'natureza' },
    { number: 8, name: 'Horta e Pomar', category: 'natureza' },
    { number: 9, name: 'Cinema ao Ar Livre', category: 'convivencia' },
    { number: 10, name: 'Espaço Piquenique', category: 'natureza' },
    { number: 11, name: 'Quadra de Areia', category: 'esporte' },
    { number: 12, name: 'Espaço Fitness', category: 'esporte' },
    { number: 13, name: 'Espaço de Jogos', category: 'convivencia' },
    { number: 14, name: 'Parquinho Infantil', category: 'familia' },
    { number: 15, name: 'Espaço Gourmet com Churrasqueira', category: 'convivencia' },
    { number: 16, name: 'Banheiros de Apoio', category: 'apoio' },
    { number: 17, name: 'Espaço Conecta (Salão de Jogos / TV)', category: 'convivencia' },
    { number: 18, name: 'Piscina Adulto e Infantil', category: 'esporte' },
    { number: 19, name: 'Solarium com Deck', category: 'esporte' },
    { number: 20, name: 'Abrigo de Bombas', category: 'apoio' },
    { number: 21, name: 'Reservatório Inferior', category: 'apoio' },
    { number: 22, name: 'Edifício Garagem', category: 'apoio' },
  ];

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
      case 'Gamepad2': return <Gamepad2 className="w-5 h-5 text-[#FF600B]" />;
      case 'Tv': return <Tv className="w-5 h-5 text-[#FF600B]" />;
      case 'Bike': return <Bike className="w-5 h-5 text-[#FF600B]" />;
      case 'Film': return <Film className="w-5 h-5 text-[#FF600B]" />;
      default: return <Sparkles className="w-5 h-5 text-[#FF600B]" />;
    }
  };

  const filteredItems = filterCategory === 'todos' 
    ? leisureItems 
    : leisureItems.filter(item => item.category === filterCategory);

  return (
    <div className="mt-16 pt-12 border-t border-white/10" id="lazer-jardim-sol">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF600B]/10 border border-[#FF600B]/30 text-xs font-bold text-[#FF8540] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>LAZER & ÁREAS COMUNS CONFIRMADAS</span>
          </div>
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
            Um projeto pensado para viver bem.
          </h3>
          <p className="text-sm sm:text-base text-neutral-300 mt-2 max-w-2xl">
            Um condomínio moderno, seguro e com lazer completo para toda a família. 
            Mais de 12 espaços entregues equipados e decorados pela INC.
          </p>
        </div>

        {/* Filter categories */}
        <div className="flex flex-wrap gap-2">
          {[
            { id: 'todos', label: 'Todos os Espaços' },
            { id: 'esporte', label: 'Esporte & Saúde' },
            { id: 'convivencia', label: 'Convivência' },
            { id: 'natureza', label: 'Natureza & Pet' },
            { id: 'familia', label: 'Família & Kids' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilterCategory(tab.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                filterCategory === tab.id
                  ? 'bg-[#FF600B] text-white shadow-md'
                  : 'bg-[#121622] text-neutral-400 hover:text-neutral-200 border border-white/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Leisure Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="group relative rounded-2xl bg-gradient-to-b from-[#151B29] to-[#0E121B] p-5 border border-white/10 hover:border-[#FF600B]/50 transition-all duration-300 shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#FF600B]/10 border border-[#FF600B]/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {getIcon(item.icon)}
                </div>
                {item.number && (
                  <span className="text-[11px] font-mono text-neutral-400 bg-white/[0.04] px-2 py-0.5 rounded border border-white/5">
                    Item #{item.number}
                  </span>
                )}
              </div>

              <h4 className="font-bold text-base sm:text-lg text-white font-display group-hover:text-[#FF8540] transition-colors">
                {item.title}
              </h4>

              <p className="text-xs text-neutral-300 mt-2 leading-relaxed italic">
                "{item.tagline}"
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-neutral-400">
              <span className="capitalize">{item.category}</span>
              <span className="text-[#FF8540] font-semibold">Oficial INC</span>
            </div>
          </div>
        ))}
      </div>

      {/* Complete Implantation Accordion / Showcase (22 itens) */}
      <div className="mt-10 rounded-3xl bg-[#111520] p-6 sm:p-8 border border-white/10 shadow-xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <h4 className="text-lg sm:text-xl font-bold text-white font-display">
                Implantação Geral do Condomínio (22 Itens Oficiais)
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">
              Organização completa da torre residencial, áreas de lazer, acessos e edifício garagem.
            </p>
          </div>

          <button
            onClick={() => setShowImplantationList(!showImplantationList)}
            className="px-4 py-2 rounded-xl text-xs font-bold text-neutral-200 bg-[#1A2234] hover:bg-[#222C42] border border-white/10 transition-colors cursor-pointer"
          >
            {showImplantationList ? 'Ocultar Lista Detalhada' : 'Ver Todos os 22 Itens'}
          </button>
        </div>

        {/* 3 Access Gates Highlight */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#FF600B]/15 flex items-center justify-center shrink-0">
              <span className="text-xs font-bold text-[#FF600B]">1</span>
            </div>
            <div>
              <div className="text-xs font-bold text-white">Acesso Pedestres</div>
              <div className="text-[11px] text-neutral-400">Av. Yuri Resende Miranda</div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#FF600B]/15 flex items-center justify-center shrink-0">
              <span className="text-xs font-bold text-[#FF600B]">2</span>
            </div>
            <div>
              <div className="text-xs font-bold text-white">Acesso Veículos</div>
              <div className="text-[11px] text-neutral-400">Direto ao Edifício Garagem</div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#FF600B]/15 flex items-center justify-center shrink-0">
              <span className="text-xs font-bold text-[#FF600B]">3</span>
            </div>
            <div>
              <div className="text-xs font-bold text-white">Acesso à Torre</div>
              <div className="text-[11px] text-neutral-400">Hall integrado e seguro</div>
            </div>
          </div>
        </div>

        {/* Expanded 22 Items Table */}
        {showImplantationList && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 pt-4 border-t border-white/5 animate-fadeIn">
            {implantationItems.map((item) => (
              <div
                key={item.number}
                className="flex items-center gap-2.5 p-2.5 rounded-lg bg-black/30 border border-white/5 text-xs text-neutral-300"
              >
                <span className="w-6 h-6 rounded-md bg-[#FF600B]/20 text-[#FF8540] font-mono font-bold flex items-center justify-center text-[10px] shrink-0">
                  {item.number}
                </span>
                <span className="truncate">{item.name}</span>
              </div>
            ))}
          </div>
        )}

      </div>

    </div>
  );
};
