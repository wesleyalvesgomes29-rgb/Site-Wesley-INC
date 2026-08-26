import React from 'react';
import { DEVELOPMENTS, getWhatsAppLink } from '../../data/config';
import { 
  MapPin, 
  Clock, 
  Navigation, 
  Bus, 
  Trees, 
  GraduationCap, 
  ShoppingBag, 
  Plane, 
  Building2, 
  Store,
  Compass,
  ArrowRight,
  ShieldCheck,
  MessageSquare
} from 'lucide-react';

interface ParkJardimDoSolLocationProps {
  onOpenLeadForm: (devName: string) => void;
}

export const ParkJardimDoSolLocation: React.FC<ParkJardimDoSolLocationProps> = ({
  onOpenLeadForm,
}) => {
  const data = DEVELOPMENTS['jardim-do-sol'];
  const landmarks = data.landmarks || [];

  const getLandmarkIcon = (type: string) => {
    switch (type) {
      case 'transporte': return <Bus className="w-4 h-4 text-[#FF600B]" />;
      case 'lazer': return <Trees className="w-4 h-4 text-emerald-400" />;
      case 'educacao': return <GraduationCap className="w-4 h-4 text-sky-400" />;
      case 'comercio': return <ShoppingBag className="w-4 h-4 text-amber-400" />;
      case 'aeroporto': return <Plane className="w-4 h-4 text-purple-400" />;
      default: return <MapPin className="w-4 h-4 text-[#FF600B]" />;
    }
  };

  return (
    <div className="mt-16 pt-12 border-t border-white/10" id="localizacao-jardim-sol">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF600B]/10 border border-[#FF600B]/30 text-xs font-bold text-[#FF8540] mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>ZONA LESTE • BAIRRO NOVO MUNDO</span>
          </div>
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
            Conectado ao que importa.
          </h3>
          <p className="text-sm sm:text-base text-neutral-300 mt-2 max-w-2xl">
            Localização estratégica em Uberlândia, com acesso rápido às principais avenidas, 
            escolas, compras, lazer e transporte público.
          </p>
        </div>

        {/* Stand de Vendas Pill */}
        <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#121724] border border-white/10 text-xs">
          <div className="w-9 h-9 rounded-xl bg-[#FF600B]/20 flex items-center justify-center shrink-0">
            <Store className="w-5 h-5 text-[#FF600B]" />
          </div>
          <div>
            <div className="font-bold text-white">Stand de Vendas Oficial INC</div>
            <div className="text-neutral-400">Av. Floriano Peixoto, 1037 | Centro</div>
          </div>
        </div>
      </div>

      {/* Main Grid: Visual Map & Proximities List */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Proximities with official travel times from Book */}
        <div className="lg:col-span-7 space-y-3">
          <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2 flex items-center justify-between">
            <span>DISTÂNCIAS & PONTOS CONFIRMADOS NO BOOK:</span>
            <span className="text-[#FF8540] font-bold">10 Referências Oficiais</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {landmarks.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3.5 rounded-2xl bg-gradient-to-r from-[#141A28] to-[#0E121C] border border-white/10 hover:border-[#FF600B]/40 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/5 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getLandmarkIcon(item.type)}
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-white font-display">
                      {item.name}
                    </div>
                    <div className="text-[10px] text-neutral-400 capitalize">
                      {item.type}
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <span className="inline-flex items-center gap-1 font-mono text-xs font-bold text-[#FF8540] bg-[#FF600B]/10 px-2.5 py-1 rounded-lg border border-[#FF600B]/20">
                    <Clock className="w-3 h-3" />
                    <span>{item.time}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Surrounding Streets Tag */}
          <div className="mt-4 p-4 rounded-2xl bg-[#0D111A] border border-white/5 text-xs text-neutral-300">
            <span className="font-bold text-white font-mono uppercase text-[11px] block mb-1">
              Vias de Acesso do Empreendimento:
            </span>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/5 text-[#FF8540]">
                Av. Yuri Resende Miranda
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/5 text-neutral-300">
                Rua Aluísio Azevedo
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/5 text-neutral-300">
                Rua Alfredo Bosi
              </span>
            </div>
          </div>

        </div>

        {/* Right Column: Interactive Map Hub / Summary Card */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="rounded-3xl bg-gradient-to-b from-[#161C2C] via-[#10141F] to-[#0A0D15] p-6 border border-white/15 shadow-2xl relative overflow-hidden">
            
            {/* Top Badge */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF600B] animate-ping" />
                <span className="text-xs font-bold text-white font-display">VETOR DE EXPANSÃO</span>
              </div>
              <span className="text-[11px] font-mono text-neutral-400">UBERLÂNDIA - MG</span>
            </div>

            {/* Visual Radar / Map Graphic Representation */}
            <div className="relative rounded-2xl bg-[#090C12] p-5 border border-white/10 overflow-hidden text-center my-2">
              <div className="absolute inset-0 bg-[radial-gradient(#FF600B_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
              
              <div className="relative z-10 py-4 flex flex-col items-center">
                <div className="w-14 h-14 rounded-2xl bg-[#FF600B] text-white flex items-center justify-center shadow-lg shadow-[#FF600B]/40 mb-3 animate-bounce">
                  <MapPin className="w-7 h-7" />
                </div>
                
                <h5 className="text-base font-bold text-white font-display">
                  Park Jardim do Sol
                </h5>
                <p className="text-xs text-[#FF8540] font-mono mt-0.5">
                  Bairro Novo Mundo • Zona Leste
                </p>

                <div className="mt-4 grid grid-cols-2 gap-2 w-full text-left text-[11px]">
                  <div className="p-2 rounded-lg bg-white/[0.03] border border-white/5">
                    <span className="text-neutral-400 block text-[10px]">Parque do Sabiá</span>
                    <span className="text-emerald-400 font-bold font-mono">5 minutos</span>
                  </div>
                  <div className="p-2 rounded-lg bg-white/[0.03] border border-white/5">
                    <span className="text-neutral-400 block text-[10px]">Terminal Novo Mundo</span>
                    <span className="text-[#FF8540] font-bold font-mono">4 minutos</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action */}
            <div className="mt-4 pt-4 border-t border-white/10">
              <a
                href={getWhatsAppLink('Olá Wesley! Gostaria de receber a localização exata e mapa de acesso do Park Jardim do Sol no Bairro Novo Mundo.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#FF600B] hover:bg-[#E05005] shadow-lg shadow-[#FF600B]/25 transition-all text-center"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Pedir rota e localização no WhatsApp</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
