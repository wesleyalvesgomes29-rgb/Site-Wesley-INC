import React from 'react';
import { DEVELOPMENTS, getWhatsAppLink } from '../data/config';
import { 
  MapPin, 
  FileText, 
  MessageSquare, 
  ShieldCheck, 
  Info
} from 'lucide-react';
import { UniqueNovoMundoFloorPlans } from './unique-novo-mundo/UniqueNovoMundoFloorPlans';
import { UniqueNovoMundoLeisure } from './unique-novo-mundo/UniqueNovoMundoLeisure';
import { UniqueNovoMundoLocation } from './unique-novo-mundo/UniqueNovoMundoLocation';
import { UniqueNovoMundoDifferentials } from './unique-novo-mundo/UniqueNovoMundoDifferentials';
import { UniqueNovoMundoCta } from './unique-novo-mundo/UniqueNovoMundoCta';

interface UniqueNovoMundoSectionProps {
  onOpenLeadForm: (developmentName: string) => void;
}

export const UniqueNovoMundoSection: React.FC<UniqueNovoMundoSectionProps> = ({
  onOpenLeadForm,
}) => {
  const data = DEVELOPMENTS['unique-novo-mundo'];
  const specsGrid = data.specs || [];

  return (
    <section
      id="unique-novo-mundo"
      className="relative py-16 sm:py-20 bg-gradient-to-b from-[#0A0C10] via-[#10141E] to-[#0A0C10] border-t border-white/5 overflow-hidden"
    >
      {/* Background glow lines */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-[#FF600B]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-[#FF600B]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Tag */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-400">
            <span className="text-[#FF600B] font-bold">EMPREENDIMENTO OFICIAL</span>
            <span>//</span>
            <span>NOVO MUNDO • UBERLÂNDIA</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#FF600B]/10 border border-[#FF600B]/30 text-xs font-bold text-[#FF8540]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF600B] animate-pulse" />
            <span>LANÇAMENTO INC</span>
          </div>
        </div>

        {/* 1. Hero Oficial: UNIQUE NOVO MUNDO */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center mb-12">
          
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="text-xs font-mono uppercase font-bold text-[#FF8540] tracking-widest mb-1.5">
              {data.tagline}
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-display mb-3">
              Unique Novo Mundo
            </h2>

            <p className="text-lg sm:text-xl font-bold text-neutral-200 mb-3 font-display">
              {data.subtitle}
            </p>

            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6">
              {data.fullDescription}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full">
              <button
                id="btn-unique-cta"
                onClick={() => onOpenLeadForm('Unique Novo Mundo')}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-[#FF600B] hover:bg-[#E05005] shadow-lg shadow-[#FF600B]/30 transition-all duration-200 cursor-pointer active:scale-95 border border-[#FFA066]/30"
              >
                <FileText className="w-4 h-4" />
                <span>Receber apresentação oficial</span>
              </button>

              <a
                id="btn-unique-wpp"
                href={getWhatsAppLink('Olá Wesley! Tenho interesse no Unique Novo Mundo (Bairro Novo Mundo). Poderia me passar a apresentação oficial?')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-neutral-200 bg-[#161B27] hover:bg-[#1F2637] border border-white/10 hover:border-[#FF600B]/40 transition-all text-center"
              >
                <MessageSquare className="w-4 h-4 text-[#FF600B]" />
                <span>Conversar no WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Visual Display: Official Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-[#121620] shadow-xl group">
              <img
                src="/images/unique-novo-mundo/fachada-principal.jpg"
                alt="Perspectiva da Fachada Oficial - Unique Novo Mundo"
                className="w-full h-[280px] sm:h-[360px] object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0C10] via-transparent to-black/20" />

              {/* Status Tag */}
              <div className="absolute top-3 right-3 bg-[#090C12]/90 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10 text-[11px] font-mono text-white flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-[#FF600B]" />
                <span>Bairro Novo Mundo</span>
              </div>
            </div>
          </div>

        </div>

        {/* 2. FICHA TÉCNICA */}
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
              <span>Consulte a disponibilidade com o consultor</span>
            </div>
          </div>

          {/* Specs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {specsGrid.map((spec, index) => (
              <div
                key={index}
                className="p-3.5 rounded-xl bg-[#171D2B] border border-white/5 hover:border-[#FF600B]/40 transition-all"
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

        {/* 3. Plantas */}
        <UniqueNovoMundoFloorPlans onOpenLeadForm={onOpenLeadForm} />

        {/* 4. Lazer */}
        <UniqueNovoMundoLeisure onOpenLeadForm={onOpenLeadForm} />

        {/* 5. Localização */}
        <UniqueNovoMundoLocation onOpenLeadForm={onOpenLeadForm} />

        {/* 6. Diferenciais */}
        <UniqueNovoMundoDifferentials onOpenLeadForm={onOpenLeadForm} />

        {/* 7. CTA de Fechamento */}
        <UniqueNovoMundoCta onOpenLeadForm={onOpenLeadForm} />

      </div>
    </section>
  );
};
