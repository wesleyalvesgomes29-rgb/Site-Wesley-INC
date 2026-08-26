import React from 'react';
import { DEVELOPMENTS, getWhatsAppLink } from '../../data/config';
import { 
  MapPin, 
  Clock, 
  Navigation, 
  GraduationCap, 
  ShoppingBag, 
  Building2, 
  Store,
  Compass,
  ArrowRight,
  ShieldCheck,
  MessageSquare,
  Car,
  Utensils,
  Dumbbell,
  HeartPulse,
  School
} from 'lucide-react';

interface ParkEspanhaLocationProps {
  onOpenLeadForm: (devName: string) => void;
}

export const ParkEspanhaLocation: React.FC<ParkEspanhaLocationProps> = ({
  onOpenLeadForm,
}) => {
  const data = DEVELOPMENTS['park-espanha'];
  const landmarks = data.landmarks || [];

  const getLandmarkIcon = (name: string) => {
    const lower = name.toLowerCase();
    if (lower.includes('padaria') || lower.includes('supermercado')) return <ShoppingBag className="w-4 h-4 text-amber-400" />;
    if (lower.includes('restaurante')) return <Utensils className="w-4 h-4 text-orange-400" />;
    if (lower.includes('academia')) return <Dumbbell className="w-4 h-4 text-emerald-400" />;
    if (lower.includes('medical') || lower.includes('umc')) return <HeartPulse className="w-4 h-4 text-rose-400" />;
    if (lower.includes('shopping')) return <Store className="w-4 h-4 text-purple-400" />;
    if (lower.includes('unitri') || lower.includes('escola')) return <GraduationCap className="w-4 h-4 text-sky-400" />;
    if (lower.includes('br-050')) return <Car className="w-4 h-4 text-[#FF600B]" />;
    return <MapPin className="w-4 h-4 text-[#FF600B]" />;
  };

  return (
    <div className="mt-16 pt-12 border-t border-white/10" id="localizacao-park-espanha">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF600B]/10 border border-[#FF600B]/30 text-xs font-bold text-[#FF8540] mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>ZONA SUL • BAIRRO JARDIM ESPANHA</span>
          </div>
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
            Localização Nobre & Estratégica na Zona Sul.
          </h3>
          <p className="text-sm sm:text-base text-neutral-300 mt-2 max-w-2xl">
            O Park Espanha situa-se no Jardim Espanha, uma das regiões mais valorizadas da Zona Sul de Uberlândia, 
            garantindo mobilidade rápida para centros de compras, faculdades, saúde e conveniência.
          </p>
        </div>

        {/* Localização Badge */}
        <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#121724] border border-white/10 text-xs">
          <div className="w-9 h-9 rounded-xl bg-[#FF600B]/20 flex items-center justify-center shrink-0">
            <MapPin className="w-5 h-5 text-[#FF600B]" />
          </div>
          <div>
            <div className="font-bold text-white">Jardim Espanha • Zona Sul</div>
            <div className="text-neutral-400">Uberlândia - MG</div>
          </div>
        </div>
      </div>

      {/* Main Grid: Visual Card & Proximities List */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Proximities with official travel times from Book */}
        <div className="lg:col-span-7 space-y-3">
          <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2 flex items-center justify-between">
            <span>TEMPOS DE DESLOCAMENTO DO BOOK OFICIAL:</span>
            <span className="text-[#FF8540] font-bold">10 Referências Confirmadas</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {landmarks.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3.5 rounded-2xl bg-gradient-to-r from-[#141A28] to-[#0E121C] border border-white/10 hover:border-[#FF600B]/40 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/5 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getLandmarkIcon(item.name)}
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-white font-display">
                      {item.name}
                    </div>
                    <div className="text-[10px] text-neutral-400">
                      Zona Sul e Região
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/10 text-xs font-mono font-bold text-[#FF8540]">
                  <Clock className="w-3 h-3 text-[#FF600B]" />
                  <span>{item.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Localização Context Card */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="rounded-3xl bg-gradient-to-b from-[#131926] to-[#0D121B] p-6 sm:p-8 border border-white/10 relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-36 h-36 bg-[#FF600B]/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="flex items-center gap-2 text-xs font-mono text-[#FF8540] uppercase tracking-wider mb-3">
              <Navigation className="w-4 h-4" />
              <span>Viver na Zona Sul de Uberlândia</span>
            </div>

            <h4 className="text-xl font-bold text-white font-display mb-3">
              Mobilidade e Qualidade de Vida no Jardim Espanha
            </h4>

            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
              A Zona Sul de Uberlândia é referência em infraestrutura, valorização imobiliária constante e comodidade para a rotina diária. O Park Espanha foi idealizado para proporcionar conexão imediata aos pontos mais nobres da cidade.
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-xs text-neutral-300 p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                <ShieldCheck className="w-4 h-4 text-[#FF600B] shrink-0" />
                <span>Bairro planejado, seguro e em pleno desenvolvimento</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-neutral-300 p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                <ShieldCheck className="w-4 h-4 text-[#FF600B] shrink-0" />
                <span>Próximo aos maiores polos comerciais e educacionais</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-neutral-300 p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                <ShieldCheck className="w-4 h-4 text-[#FF600B] shrink-0" />
                <span>Fácil acesso às principais vias expressas e à BR-050</span>
              </div>
            </div>

            {/* Action inside Location */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-3">
              <button
                id="btn-location-espanha-cta"
                onClick={() => onOpenLeadForm('Park Espanha')}
                className="w-full py-3 px-4 rounded-xl text-xs font-bold text-white bg-[#FF600B] hover:bg-[#E05005] shadow-md transition-colors text-center cursor-pointer"
              >
                Consultar Localização Exata
              </button>
              <a
                id="btn-location-espanha-wpp"
                href={getWhatsAppLink('Olá Wesley! Gostaria de saber mais sobre a localização e acessos do Park Espanha no Jardim Espanha.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl text-xs font-bold text-neutral-200 bg-[#171E2D] hover:bg-[#20293D] border border-white/10 text-center transition-colors flex items-center justify-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#FF600B]" />
                <span>Falar no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
