import React from 'react';
import { DEVELOPMENTS, getWhatsAppLink } from '../data/config';
import { 
  MapPin, 
  FileText, 
  MessageSquare, 
  ShieldCheck, 
  Info
} from 'lucide-react';
import { ParkEspanhaFloorPlans } from './park-espanha/ParkEspanhaFloorPlans';
import { ParkEspanhaLeisure } from './park-espanha/ParkEspanhaLeisure';
import { ParkEspanhaImplantation } from './park-espanha/ParkEspanhaImplantation';
import { ParkEspanhaLocation } from './park-espanha/ParkEspanhaLocation';
import { ParkEspanhaCta } from './park-espanha/ParkEspanhaCta';

interface ParkEspanhaSectionProps {
  onOpenLeadForm: (developmentName: string) => void;
}

export const ParkEspanhaSection: React.FC<ParkEspanhaSectionProps> = ({
  onOpenLeadForm,
}) => {
  const data = DEVELOPMENTS['park-espanha'];
  const specsGrid = data.specs || [];

  return (
    <section
      id="park-espanha"
      className="relative py-16 sm:py-20 bg-gradient-to-b from-[#0A0C10] via-[#0E131C] to-[#0A0C10] border-t border-white/5 overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#FF600B]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] bg-[#FF600B]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Tag */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-400">
            <span className="text-[#FF600B] font-bold">EMPREENDIMENTO OFICIAL</span>
            <span>//</span>
            <span>JARDIM ESPANHA • ZONA SUL • UBERLÂNDIA</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#FF600B]/10 border border-[#FF600B]/30 text-xs font-bold text-[#FF8540]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF600B] animate-pulse" />
            <span>LANÇAMENTO INC</span>
          </div>
        </div>

        {/* Hero Section of Park Espanha */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center mb-12">
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="text-xs font-mono uppercase font-bold text-[#FF8540] tracking-widest mb-1.5">
              {data.tagline}
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-display mb-3">
              Park Espanha
            </h2>
            
            <p className="text-lg sm:text-xl font-bold text-neutral-200 mb-3 font-display">
              {data.subtitle}
            </p>
            
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6">
              {data.fullDescription}
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full">
              <button
                id="btn-park-espanha-cta"
                onClick={() => onOpenLeadForm('Park Espanha')}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-[#FF600B] hover:bg-[#E05005] shadow-lg shadow-[#FF600B]/30 transition-all duration-200 cursor-pointer active:scale-95 border border-[#FFA066]/30"
              >
                <FileText className="w-4 h-4" />
                <span>Receber apresentação oficial</span>
              </button>

              <a
                id="btn-park-espanha-wpp"
                href={getWhatsAppLink('Olá Wesley! Gostaria de receber informações sobre o Park Espanha da INC.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-neutral-200 bg-[#161B27] hover:bg-[#1F2637] border border-white/10 hover:border-[#FF600B]/40 transition-all"
              >
                <MessageSquare className="w-4 h-4 text-[#FF600B]" />
                <span>Conversar no WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Visual Display: Official Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-[#121620] shadow-xl group">
              <img
                src="/images/park-espanha/fachada-principal.jpg"
                alt="Perspectiva da Fachada Oficial - Park Espanha"
                className="w-full h-[280px] sm:h-[360px] object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0C10] via-transparent to-black/20" />

              {/* Status Tag */}
              <div className="absolute top-3 right-3 bg-[#090C12]/90 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10 text-[11px] font-mono text-white flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-[#FF600B]" />
                <span>Jardim Espanha (Zona Sul)</span>
              </div>
            </div>
          </div>
        </div>

        {/* ÚNICA SEÇÃO DE FICHA TÉCNICA (Consolidada e sem duplicações) */}
        <div className="rounded-2xl bg-[#121622] p-5 sm:p-7 border border-white/10 shadow-lg mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-5 pb-3 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#FF8540] mb-0.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>DADOS OFICIAIS DO MEMORIAL</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white font-display">
                Ficha Técnica
              </h3>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-neutral-400">
              <Info className="w-3.5 h-3.5 text-[#FF8540]" />
              <span>Consulte a tabela de valores com o consultor</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {specsGrid.map((spec, index) => (
              <div
                key={index}
                className="p-3.5 rounded-xl border transition-all bg-[#171D2B] border-white/5 hover:border-[#FF600B]/40"
              >
                <div className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider mb-0.5">
                  {spec.label}
                </div>
                <div className="text-sm sm:text-base font-bold font-display text-white">
                  {spec.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Plantas Técnicas */}
        <ParkEspanhaFloorPlans onOpenLeadForm={onOpenLeadForm} />

        {/* 3. Lazer & Convivência */}
        <ParkEspanhaLeisure onOpenLeadForm={onOpenLeadForm} />

        {/* 4. Implantação Geral (30 itens) */}
        <ParkEspanhaImplantation onOpenLeadForm={onOpenLeadForm} />

        {/* 5. Localização */}
        <ParkEspanhaLocation onOpenLeadForm={onOpenLeadForm} />

        {/* 6. CTA & Apresentação */}
        <ParkEspanhaCta onOpenLeadForm={onOpenLeadForm} />

      </div>
    </section>
  );
};
