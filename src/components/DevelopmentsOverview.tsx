import React from 'react';
import { DEVELOPMENTS } from '../data/config';
import { Building2, MapPin, ArrowRight } from 'lucide-react';

interface DevelopmentsOverviewProps {
  onSelectDevelopment: (id: 'jardim-do-sol' | 'park-espanha') => void;
}

export const DevelopmentsOverview: React.FC<DevelopmentsOverviewProps> = ({
  onSelectDevelopment,
}) => {
  const jardimDoSol = DEVELOPMENTS['jardim-do-sol'];
  const parkEspanha = DEVELOPMENTS['park-espanha'];

  return (
    <section
      id="empreendimentos"
      className="relative py-20 lg:py-24 bg-[#090B0E] overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#FF600B]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 mb-3">
            <Building2 className="w-4 h-4 text-[#FF600B]" />
            <span className="text-xs font-bold text-neutral-300 tracking-wider uppercase">
              Empreendimentos Disponíveis
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display mb-3">
            Escolha o seu novo endereço
          </h2>

          <p className="text-base text-neutral-400">
            Conheça os projetos da INC em Uberlândia e encontre o imóvel ideal para você e sua família.
          </p>
        </div>

        {/* Two Showcase Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          
          {/* Card 1: Park Jardim do Sol */}
          <div
            id="card-jardim-do-sol"
            onClick={() => onSelectDevelopment('jardim-do-sol')}
            className="group relative rounded-2xl bg-gradient-to-b from-[#141824] to-[#0D1017] border border-white/10 hover:border-[#FF600B]/60 shadow-xl overflow-hidden transition-all duration-300 flex flex-col justify-between cursor-pointer"
          >
            <div>
              {/* Imagem Principal */}
              <div className="relative h-60 sm:h-64 w-full overflow-hidden bg-[#0A0D14]">
                <img
                  src="/images/jardim-do-sol/fachada-principal.jpg"
                  alt="Park Jardim do Sol - Fachada Oficial"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141824] via-transparent to-black/20" />
                
                {/* Localização Badge na Imagem */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#FF600B] text-white text-xs font-bold uppercase tracking-wider shadow-md">
                    {jardimDoSol.status}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#090C12]/85 backdrop-blur-md text-white text-xs font-medium border border-white/10 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#FF600B]" />
                    <span>{jardimDoSol.location.neighborhood} • {jardimDoSol.location.city}</span>
                  </span>
                </div>
              </div>

              {/* Informações Resumidas */}
              <div className="p-6 sm:p-7">
                {/* Nome */}
                <h3 className="text-2xl font-black text-white font-display mb-2 group-hover:text-[#FF8540] transition-colors">
                  {jardimDoSol.name}
                </h3>
                
                {/* Localização texto */}
                <div className="flex items-center gap-1.5 text-xs font-medium text-[#FF8540] mb-3">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{jardimDoSol.location.neighborhood} (Zona Leste)</span>
                </div>

                {/* Descrição Extremamente Curta */}
                <p className="text-neutral-300 text-sm leading-relaxed mb-6">
                  {jardimDoSol.shortDescription}
                </p>
              </div>
            </div>

            {/* Botão Conhecer Empreendimento */}
            <div className="p-6 sm:p-7 pt-0">
              <button
                id="btn-explore-jardim-do-sol"
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectDevelopment('jardim-do-sol');
                }}
                className="w-full group/btn flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold text-sm text-white bg-[#FF600B] hover:bg-[#E05005] shadow-lg shadow-[#FF600B]/25 transition-all duration-300 cursor-pointer"
              >
                <span>Conhecer empreendimento</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Card 2: Park Espanha */}
          <div
            id="card-park-espanha"
            onClick={() => onSelectDevelopment('park-espanha')}
            className="group relative rounded-2xl bg-gradient-to-b from-[#141824] to-[#0D1017] border border-white/10 hover:border-[#FF600B]/60 shadow-xl overflow-hidden transition-all duration-300 flex flex-col justify-between cursor-pointer"
          >
            <div>
              {/* Imagem Principal */}
              <div className="relative h-60 sm:h-64 w-full overflow-hidden bg-[#0A0D14]">
                <img
                  src="/images/park-espanha/fachada-principal.jpg"
                  alt="Park Espanha - Fachada Oficial"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141824] via-transparent to-black/20" />
                
                {/* Localização Badge na Imagem */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#FF600B] text-white text-xs font-bold uppercase tracking-wider shadow-md">
                    {parkEspanha.status}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#090C12]/85 backdrop-blur-md text-white text-xs font-medium border border-white/10 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#FF600B]" />
                    <span>{parkEspanha.location.addressDescription}</span>
                  </span>
                </div>
              </div>

              {/* Informações Resumidas */}
              <div className="p-6 sm:p-7">
                {/* Nome */}
                <h3 className="text-2xl font-black text-white font-display mb-2 group-hover:text-[#FF8540] transition-colors">
                  {parkEspanha.name}
                </h3>

                {/* Localização texto */}
                <div className="flex items-center gap-1.5 text-xs font-medium text-[#FF8540] mb-3">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{parkEspanha.location.neighborhood} (Zona Sul)</span>
                </div>

                {/* Descrição Extremamente Curta */}
                <p className="text-neutral-300 text-sm leading-relaxed mb-6">
                  {parkEspanha.shortDescription}
                </p>
              </div>
            </div>

            {/* Botão Conhecer Empreendimento */}
            <div className="p-6 sm:p-7 pt-0">
              <button
                id="btn-explore-park-espanha"
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectDevelopment('park-espanha');
                }}
                className="w-full group/btn flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold text-sm text-white bg-[#FF600B] hover:bg-[#E05005] shadow-lg shadow-[#FF600B]/25 transition-all duration-300 cursor-pointer"
              >
                <span>Conhecer empreendimento</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
