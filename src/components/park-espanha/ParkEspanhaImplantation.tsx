import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  Layers, 
  CheckCircle2, 
  Sparkles, 
  Maximize2, 
  ImageIcon, 
  FileText,
  MessageSquare,
  ShieldCheck,
  Compass
} from 'lucide-react';
import { getWhatsAppLink } from '../../data/config';

interface ParkEspanhaImplantationProps {
  onOpenLeadForm: (devName: string) => void;
}

export const ParkEspanhaImplantation: React.FC<ParkEspanhaImplantationProps> = ({
  onOpenLeadForm,
}) => {
  const [hasImage, setHasImage] = useState<boolean>(false);
  const [activeFilter, setActiveFilter] = useState<string>('todos');

  // Os 30 itens reais apresentados na implantação do Book
  const implantationList = [
    { number: 1, name: 'Guarita', category: 'acesso' },
    { number: 2, name: 'Sala de telecom', category: 'apoio' },
    { number: 3, name: 'Sala de correio', category: 'apoio' },
    { number: 4, name: 'Sala do síndico', category: 'apoio' },
    { number: 5, name: 'Central de gás', category: 'apoio' },
    { number: 6, name: 'Abrigo de lixo', category: 'apoio' },
    { number: 7, name: "Castelos d'água", category: 'apoio' },
    { number: 8, name: 'Pet Place', category: 'lazer' },
    { number: 9, name: 'Salão de festas', category: 'lazer' },
    { number: 10, name: 'Espaço gourmet', category: 'lazer' },
    { number: 11, name: 'Piscina adulto', category: 'lazer' },
    { number: 12, name: 'Piscina infantil', category: 'lazer' },
    { number: 13, name: 'Espaço Zen', category: 'lazer' },
    { number: 14, name: 'Quadra de beach tennis', category: 'lazer' },
    { number: 15, name: 'Playground', category: 'lazer' },
    { number: 16, name: 'Praça', category: 'lazer' },
    { number: 17, name: 'Horta', category: 'lazer' },
    { number: 18, name: 'Pista de cooper', category: 'lazer' },
    { number: 19, name: 'Edifício garagem', category: 'apoio' },
    { number: 20, name: 'Coworking', category: 'lazer' },
    { number: 21, name: 'Academia de musculação', category: 'lazer' },
    { number: 22, name: 'Academia de aeróbico', category: 'lazer' },
    { number: 23, name: 'Brinquedoteca', category: 'lazer' },
    { number: 24, name: 'Lavanderia', category: 'apoio' },
    { number: 25, name: 'Mini Market', category: 'apoio' },
    { number: 26, name: 'Pet Care', category: 'lazer' },
    { number: 27, name: 'Espaço Game + Cinema', category: 'lazer' },
    { number: 28, name: 'Acesso veículos', category: 'acesso' },
    { number: 29, name: 'Acesso pedestres', category: 'acesso' },
    { number: 30, name: 'Acesso torre', category: 'acesso' },
  ];

  const filteredItems = activeFilter === 'todos'
    ? implantationList
    : implantationList.filter(item => item.category === activeFilter);

  return (
    <div className="mt-16 pt-12 border-t border-white/10" id="implantacao-park-espanha">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF600B]/10 border border-[#FF600B]/30 text-xs font-bold text-[#FF8540] mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>IMPLANTAÇÃO GERAL • 30 PONTOS DE DESTAQUE</span>
          </div>
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
            Implantação Completa do Condomínio.
          </h3>
          <p className="text-sm sm:text-base text-neutral-300 mt-2 max-w-2xl">
            Conheça todos os 30 ambientes, acessos e equipamentos distribuídos harmonicamente 
            pelo projeto do Park Espanha no Jardim Espanha.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-2 bg-[#121622] p-1.5 rounded-2xl border border-white/10">
          {[
            { id: 'todos', label: 'Todos (30)' },
            { id: 'lazer', label: 'Lazer & Convivência' },
            { id: 'acesso', label: 'Acessos & Portaria' },
            { id: 'apoio', label: 'Apoio & Serviços' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-[#FF600B] text-white shadow-md'
                  : 'text-neutral-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Container: Slot for future Implantation Image + Full 30 Items Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Visual Area (prepared for /images/park-espanha/implantacao/) */}
        <div className="lg:col-span-6 flex flex-col gap-4">
          <div className="rounded-3xl bg-[#121622] border border-white/10 p-6 sm:p-8 relative overflow-hidden shadow-xl min-h-[420px] flex flex-col justify-between">
            
            {/* Try to load real image if placed manually in public/images/park-espanha/implantacao/ */}
            <div className="relative w-full rounded-2xl overflow-hidden bg-[#0A0D14] border border-white/5 flex items-center justify-center min-h-[300px]">
              <img
                src="/images/park-espanha/implantacao/implantacao-geral.jpg"
                alt="Implantação Geral do Park Espanha"
                className={`w-full h-auto object-contain transition-opacity duration-300 ${hasImage ? 'opacity-100' : 'hidden'}`}
                onLoad={() => setHasImage(true)}
                onError={() => setHasImage(false)}
              />

              {!hasImage && (
                <div className="p-8 text-center flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center mb-4 text-[#FF8540]">
                    <Layers className="w-8 h-8" />
                  </div>
                  <div className="text-base font-bold text-white font-display mb-1">
                    Mapa de Implantação Geral
                  </div>
                  <p className="text-xs text-neutral-400 max-w-sm mb-4">
                    Espaço preparado para receber a perspectiva e o mapa da implantação oficial do Park Espanha.
                  </p>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/10 text-[11px] text-neutral-400 font-mono">
                    <Sparkles className="w-3.5 h-3.5 text-[#FF600B]" />
                    <span>30 Ambientes Mapeados no Book</span>
                  </div>
                </div>
              )}
            </div>

            {/* Subtitle card */}
            <div className="mt-4 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div className="text-neutral-400">
                <span className="text-white font-bold">Estrutura Completa:</span> Torres, Edifício Garagem, Complexo Aquático e Áreas Verdes.
              </div>
              <button
                onClick={() => onOpenLeadForm('Park Espanha')}
                className="text-[#FF8540] hover:text-[#FFA066] font-bold cursor-pointer transition-colors whitespace-nowrap"
              >
                Solicitar Mapa Técnico &rarr;
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive 30 Items List */}
        <div className="lg:col-span-6 space-y-3">
          <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2 flex items-center justify-between">
            <span>LEGENDA DA IMPLANTAÇÃO OFICIAL:</span>
            <span className="text-[#FF8540] font-bold">{filteredItems.length} Ambientes</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-[480px] overflow-y-auto pr-1">
            {filteredItems.map((item) => (
              <div
                key={item.number}
                className="flex items-center gap-3 p-3 rounded-xl bg-[#141A28] border border-white/5 hover:border-[#FF600B]/40 transition-all group"
              >
                <div className="w-7 h-7 rounded-lg bg-[#FF600B]/15 border border-[#FF600B]/30 flex items-center justify-center shrink-0 text-xs font-mono font-bold text-[#FF8540] group-hover:bg-[#FF600B] group-hover:text-white transition-colors">
                  {item.number}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs font-bold text-white font-display truncate">
                    {item.name}
                  </div>
                  <div className="text-[10px] text-neutral-400 capitalize">
                    {item.category === 'lazer' ? 'Lazer & Convivência' : item.category === 'acesso' ? 'Acessos' : 'Apoio / Condomínio'}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom call to action */}
          <div className="mt-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-xs text-neutral-300 text-center sm:text-left">
              Deseja ver a planta baixa ou a localização de uma unidade específica?
            </div>
            <a
              href={getWhatsAppLink('Olá Wesley! Gostaria de entender a implantação e a posição dos apartamentos no Park Espanha.')}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#FF600B] hover:bg-[#E05005] transition-colors whitespace-nowrap"
            >
              Tirar Dúvidas com Wesley
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
