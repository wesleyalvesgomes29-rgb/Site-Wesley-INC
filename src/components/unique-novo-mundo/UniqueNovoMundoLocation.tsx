import React from 'react';
import { DEVELOPMENTS, getWhatsAppLink } from '../../data/config';
import { 
  MapPin, 
  Navigation, 
  Bus, 
  Trees, 
  GraduationCap, 
  ShoppingBag, 
  Plane, 
  Compass, 
  MessageSquare
} from 'lucide-react';

interface UniqueNovoMundoLocationProps {
  onOpenLeadForm: (devName: string) => void;
}

export const UniqueNovoMundoLocation: React.FC<UniqueNovoMundoLocationProps> = ({
  onOpenLeadForm,
}) => {
  const data = DEVELOPMENTS['unique-novo-mundo'];
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
    <div className="mt-16 pt-12 border-t border-white/10" id="localizacao-unique-novo-mundo">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF600B]/10 border border-[#FF600B]/30 text-xs font-bold text-[#FF8540] mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>ZONA LESTE • BAIRRO NOVO MUNDO</span>
          </div>
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
            Localização estratégica em Uberlândia
          </h3>
          <p className="text-sm sm:text-base text-neutral-300 mt-2 max-w-2xl">
            Acesso rápido às principais avenidas, comércios, escolas, Parque do Sabiá e transporte público no Bairro Novo Mundo.
          </p>
        </div>
      </div>

      {/* Main Grid: Proximities List */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Proximities with official travel times from Book */}
        <div className="lg:col-span-7 space-y-3">
          <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2 flex items-center justify-between">
            <span>DISTÂNCIAS & PONTOS DE REFERÊNCIA:</span>
            <span className="text-[#FF8540] font-bold">Zona Leste</span>
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

                <div className="text-xs font-mono font-bold text-[#FF8540] bg-[#FF600B]/10 px-2.5 py-1 rounded-lg border border-[#FF600B]/20">
                  {item.time}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Location Card */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="p-6 rounded-3xl bg-gradient-to-b from-[#141A28] to-[#0E121C] border border-white/10 shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#FF600B]/20 flex items-center justify-center">
                <Navigation className="w-5 h-5 text-[#FF600B]" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white font-display">
                  Bairro Novo Mundo
                </h4>
                <p className="text-xs text-neutral-400">
                  Zona Leste de Uberlândia - MG
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
              Uma das regiões que mais se desenvolve em Uberlândia, combinando tranquilidade residencial com facilidade de deslocamento e infraestrutura de comércio e serviços.
            </p>

            <a
              href={getWhatsAppLink('Olá Wesley! Gostaria de receber a localização exata do Unique Novo Mundo.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#1A2232] hover:bg-[#253046] text-white border border-white/10 hover:border-[#FF600B]/50 text-xs font-semibold transition-all text-center"
            >
              <MessageSquare className="w-4 h-4 text-[#FF600B]" />
              <span>Receber localização no WhatsApp</span>
            </a>
          </div>
        </div>

      </div>

    </div>
  );
};
