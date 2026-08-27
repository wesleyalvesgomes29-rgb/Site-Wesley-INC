import React from 'react';
import { MapPin, ArrowRight, ShieldCheck, MessageSquare } from 'lucide-react';
import { getWhatsAppLink } from '../data/config';

interface HomeShowcaseProps {
  onSelectDevelopment: (id: 'park-espanha' | 'jardim-do-sol' | 'unique-novo-mundo') => void;
}

export const HomeShowcase: React.FC<HomeShowcaseProps> = ({
  onSelectDevelopment,
}) => {
  const developments = [
    {
      id: 'park-espanha' as const,
      name: 'PARK ESPANHA',
      location: 'Zona Sul — Uberlândia',
      image: '/images/park-espanha/fachada-principal.jpg',
      badge: 'ENTREGA EM 2027',
    },
    {
      id: 'jardim-do-sol' as const,
      name: 'PARK JARDIM DO SOL',
      location: 'Novo Mundo — Uberlândia',
      image: '/images/jardim-do-sol/fachada-principal.jpg',
      badge: 'Lançamento',
    },
    {
      id: 'unique-novo-mundo' as const,
      name: 'UNIQUE NOVO MUNDO',
      location: 'Novo Mundo — Uberlândia',
      image: '/images/unique-novo-mundo/fachada-principal.jpg',
      badge: 'Lançamento',
    },
  ];

  return (
    <section
      id="inicio"
      className="relative pt-20 pb-10 sm:pt-24 sm:pb-12 bg-gradient-to-b from-[#07090C] via-[#0D1016] to-[#080A0E] border-b border-white/5 overflow-hidden"
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#FF600B]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* COMPOSIÇÃO ÚNICA: Chibi + Texto + Empreendimentos */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* LADO ESQUERDO / TOPO: Apresentação Curta + Chibi Compacto */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            
            {/* Tag da Empresa */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 mb-3 shadow-sm self-center lg:self-start">
              <span className="w-2 h-2 rounded-full bg-[#FF600B] animate-pulse" />
              <span className="text-[11px] sm:text-xs font-semibold text-neutral-300 tracking-wide uppercase">
                INC Empreendimentos • Uberlândia
              </span>
            </div>

            {/* Bloco Integrado: Chibi + Chamada */}
            <div className="flex flex-row items-center gap-4 sm:gap-5 mb-4 text-left">
              {/* Chibi Compacto */}
              <div className="shrink-0 relative group">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 sm:w-28 h-24 sm:h-28 bg-[#FF600B]/20 rounded-full blur-xl pointer-events-none" />
                <img
                  src="/images/wesley/wesley-chibi.png"
                  alt="Wesley Alves - Consultor INC"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.endsWith('wesley-chibi.jpg')) {
                      target.src = '/images/wesley/wesley-chibi.jpg';
                    }
                  }}
                  className="w-auto h-auto max-h-[120px] sm:max-h-[140px] lg:max-h-[150px] object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.85)] transition-transform duration-300 group-hover:scale-105"
                  loading="eager"
                />
              </div>

              {/* Título e Breve Descrição */}
              <div>
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight leading-tight font-display mb-1.5">
                  Imóveis e lançamentos
                </h1>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  Conheça os projetos disponíveis e escolha o imóvel ideal para você.
                </p>
                <div className="mt-2 inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[#121622] border border-white/10 text-[10px] text-neutral-300 font-mono">
                  <ShieldCheck className="w-3 h-3 text-[#FF600B]" />
                  <span>Consultor Oficial INC</span>
                </div>
              </div>
            </div>

            {/* Ação rápida de WhatsApp no bloco de apresentação */}
            <div className="flex items-center gap-2.5 pt-1">
              <a
                id="home-showcase-wpp-btn"
                href={getWhatsAppLink('Olá Wesley! Gostaria de informações sobre os empreendimentos da INC em Uberlândia.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-2 px-3.5 rounded-xl font-semibold text-xs text-white bg-[#1A2232] hover:bg-[#253046] border border-white/10 hover:border-[#FF600B]/50 transition-all shadow-sm"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#FF600B]" />
                <span>Falar no WhatsApp: (34) 99824-3737</span>
              </a>
            </div>

          </div>

          {/* LADO DIREITO: "Escolha seu empreendimento" + Cards Compactos */}
          <div id="empreendimentos" className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Header da Seleção */}
            <div className="mb-3.5 text-center lg:text-left">
              <h2 className="text-base sm:text-lg font-bold text-white tracking-tight font-display flex items-center justify-center lg:justify-start gap-2">
                <span>Escolha seu empreendimento</span>
                <span className="text-xs font-normal text-neutral-400">({developments.length} disponíveis)</span>
              </h2>
            </div>

            {/* Grid dos Cards Compactos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-3">
              {developments.map((dev) => (
                <div
                  key={dev.id}
                  id={`card-${dev.id}`}
                  onClick={() => onSelectDevelopment(dev.id)}
                  className="group relative rounded-xl bg-gradient-to-b from-[#131722] to-[#0D1017] border border-white/10 hover:border-[#FF600B]/60 shadow-lg overflow-hidden transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-0.5"
                >
                  <div>
                    {/* Imagem Compacta */}
                    <div className="relative h-32 sm:h-36 w-full overflow-hidden bg-[#0A0D14]">
                      <img
                        src={dev.image}
                        alt={dev.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#131722] via-transparent to-black/20" />
                      
                      {/* Badge Discreto */}
                      <div className="absolute top-2.5 left-2.5">
                        <span className="px-2 py-0.5 rounded-full bg-[#FF600B] text-white text-[10px] font-bold uppercase tracking-wider shadow-md">
                          {dev.badge}
                        </span>
                      </div>
                    </div>

                    {/* Informações Resumidas */}
                    <div className="p-3">
                      <h3 className="text-sm sm:text-base font-black text-white font-display group-hover:text-[#FF8540] transition-colors mb-0.5 line-clamp-1">
                        {dev.name}
                      </h3>

                      <div className="flex items-center gap-1 text-xs text-neutral-300 font-medium">
                        <MapPin className="w-3 h-3 text-[#FF600B] shrink-0" />
                        <span className="truncate">{dev.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Botão de Ação */}
                  <div className="p-3 pt-0">
                    <button
                      id={`btn-explore-${dev.id}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectDevelopment(dev.id);
                      }}
                      className="w-full group/btn flex items-center justify-center gap-1 py-1.5 px-2.5 rounded-lg font-bold text-[11px] text-white bg-[#FF600B] hover:bg-[#E05005] shadow-md shadow-[#FF600B]/20 transition-all cursor-pointer"
                    >
                      <span>Conhecer</span>
                      <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
