import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';

interface DevelopmentsOverviewProps {
  onSelectDevelopment: (id: 'park-espanha' | 'jardim-do-sol' | 'unique-novo-mundo') => void;
}

export const DevelopmentsOverview: React.FC<DevelopmentsOverviewProps> = ({
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
      id="empreendimentos"
      className="py-10 sm:py-14 bg-[#090B0E]"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Title */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight font-display">
            Escolha seu empreendimento
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 mt-1">
            Clique no projeto para ver fotos, plantas e localização completa.
          </p>
        </div>

        {/* Compact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {developments.map((dev) => (
            <div
              key={dev.id}
              id={`card-${dev.id}`}
              onClick={() => onSelectDevelopment(dev.id)}
              className="group relative rounded-2xl bg-gradient-to-b from-[#131722] to-[#0D1017] border border-white/10 hover:border-[#FF600B]/60 shadow-lg overflow-hidden transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1"
            >
              <div>
                {/* Compact Image */}
                <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-[#0A0D14]">
                  <img
                    src={dev.image}
                    alt={dev.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131722] via-transparent to-black/20" />
                  
                  {/* Discrete Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full bg-[#FF600B] text-white text-[10px] font-bold uppercase tracking-wider shadow-md">
                      {dev.badge}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4 sm:p-5">
                  <h3 className="text-lg font-black text-white font-display group-hover:text-[#FF8540] transition-colors mb-1">
                    {dev.name}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs text-neutral-300 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#FF600B] shrink-0" />
                    <span>{dev.location}</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-4 sm:p-5 pt-0">
                <button
                  id={`btn-explore-${dev.id}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectDevelopment(dev.id);
                  }}
                  className="w-full group/btn flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-bold text-xs text-white bg-[#FF600B] hover:bg-[#E05005] shadow-md shadow-[#FF600B]/20 transition-all cursor-pointer"
                >
                  <span>Conhecer empreendimento</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
