import React from 'react';
import { DEVELOPMENTS, getWhatsAppLink } from '../data/config';
import { 
  Building2, 
  MapPin, 
  Sparkles, 
  CheckCircle2, 
  FileText, 
  MessageSquare, 
  Info, 
  ShieldCheck, 
  Layers, 
  ArrowRight,
  BadgeCheck
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
      className="relative py-24 bg-gradient-to-b from-[#0A0C10] via-[#0E131C] to-[#0A0C10] border-t border-white/5 overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#FF600B]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] bg-[#FF600B]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Breadcrumb / Tag */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-400">
            <span className="text-[#FF600B] font-bold">EMPREENDIMENTO OFICIAL</span>
            <span>//</span>
            <span>JARDIM ESPANHA • ZONA SUL • UBERLÂNDIA</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF600B]/10 border border-[#FF600B]/30 text-xs font-bold text-[#FF8540]">
            <span className="w-2 h-2 rounded-full bg-[#FF600B] animate-ping" />
            <span>LANÇAMENTO OFICIAL INC</span>
          </div>
        </div>

        {/* Hero Section of Park Espanha */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-14">
          <div className="lg:col-span-6 flex flex-col items-start">
            
            <div className="text-xs font-mono uppercase font-bold text-[#FF8540] tracking-widest mb-2">
              {data.tagline}
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight font-display mb-4">
              Park Espanha
            </h2>
            
            <p className="text-xl sm:text-2xl font-bold text-[#FF8540] mb-4 font-display">
              {data.subtitle}
            </p>
            
            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed mb-6">
              {data.fullDescription}
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-8">
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-xs sm:text-sm font-semibold text-neutral-200">
                <MapPin className="w-4 h-4 text-[#FF600B]" />
                <span>Jardim Espanha (Zona Sul)</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-xs sm:text-sm font-semibold text-neutral-200">
                <ShieldCheck className="w-4 h-4 text-[#FF600B]" />
                <span>Garantia INC Empreendimentos</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-xs sm:text-sm font-semibold text-neutral-200">
                <Layers className="w-4 h-4 text-[#FF600B]" />
                <span>Planta Canto & Planta Meio</span>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full">
              <button
                id="btn-park-espanha-cta"
                onClick={() => onOpenLeadForm('Park Espanha')}
                className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-base text-white bg-[#FF600B] hover:bg-[#E05005] shadow-lg shadow-[#FF600B]/30 hover:shadow-[#FF600B]/50 transition-all duration-300 cursor-pointer active:scale-95 border border-[#FFA066]/30"
              >
                <FileText className="w-5 h-5" />
                <span>Quero conhecer o Park Espanha</span>
              </button>

              <a
                id="btn-park-espanha-wpp"
                href={getWhatsAppLink('Olá Wesley! Gostaria de receber informações sobre o Park Espanha da INC.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-4 rounded-xl font-semibold text-sm text-neutral-200 bg-[#161B27] hover:bg-[#1F2637] border border-white/10 hover:border-[#FF600B]/40 transition-all"
              >
                <MessageSquare className="w-4 h-4 text-[#FF600B]" />
                <span>WhatsApp com Wesley</span>
              </a>
            </div>
          </div>

          {/* Right Visual Display: Official Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-[#121620] shadow-2xl group">
              <img
                src="/images/park-espanha/fachada-principal.jpg"
                alt="Perspectiva da Fachada Oficial - Park Espanha - INC Empreendimentos"
                className="w-full h-[360px] sm:h-[440px] object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0C10] via-transparent to-black/20" />

              {/* Status Tag */}
              <div className="absolute top-4 right-4 bg-[#090C12]/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-xs font-mono text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FF600B]" />
                <span>INC EMPREENDIMENTOS</span>
              </div>

              {/* Bottom Info HUD */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#090C12]/85 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-xs text-neutral-400 font-mono">EMPREENDIMENTO</div>
                  <div className="text-sm font-bold text-white">Park Espanha • Jardim Espanha</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-[#FF8540] font-mono">CONSULTORIA</div>
                  <div className="text-sm font-bold text-white">Wesley Alves</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Structured Specs Grid */}
        <div className="rounded-3xl bg-[#121622] p-6 sm:p-8 border border-white/10 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
            <div>
              <h3 className="text-xl font-bold text-white font-display">
                Ficha Técnica & Estrutura Oficial
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mt-0.5">
                Especificações do Park Espanha no Jardim Espanha, Zona Sul de Uberlândia.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs text-neutral-400 bg-white/[0.03] px-3 py-1.5 rounded-lg border border-white/5">
              <Info className="w-4 h-4 text-[#FF8540]" />
              <span>Consulte tabela e plantas diretamente com o consultor</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {specsGrid.map((spec, index) => (
              <div
                key={index}
                className="p-4 rounded-2xl border transition-all bg-[#171D2B] border-white/10"
              >
                <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1">
                  {spec.label}
                </div>
                <div className="text-base font-bold font-display text-white">
                  {spec.value}
                </div>
                <div className="text-[11px] text-[#FF8540] mt-1">
                  Oficial INC
                </div>
              </div>
            ))}
          </div>

          {/* Prepared Slots List */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-4">
              DOCUMENTAÇÃO E MATERIAIS DISPONÍVEIS VIA CONSULTORIA:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {data.featuresPrepared.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-neutral-300 bg-white/[0.02] p-2.5 rounded-xl border border-white/5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FF600B] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Action */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-gradient-to-r from-[#1A2233] to-[#121622] border border-[#FF600B]/30">
            <div className="text-center sm:text-left">
              <div className="text-sm font-bold text-white">Quer saber os valores e condições do Park Espanha?</div>
              <div className="text-xs text-neutral-400">O Wesley apresenta as melhores opções de fluxo de pagamento para você.</div>
            </div>
            <button
              id="park-espanha-inline-btn"
              onClick={() => onOpenLeadForm('Park Espanha')}
              className="px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#FF600B] hover:bg-[#E05005] shadow-md transition-colors cursor-pointer whitespace-nowrap"
            >
              Solicitar Apresentação Oficial
            </button>
          </div>

        </div>

        {/* 2. Plantas Técnicas */}
        <ParkEspanhaFloorPlans onOpenLeadForm={onOpenLeadForm} />

        {/* 3. Lazer & Convivência */}
        <ParkEspanhaLeisure onOpenLeadForm={onOpenLeadForm} />

        {/* 4. Implantação Geral (30 itens) */}
        <ParkEspanhaImplantation onOpenLeadForm={onOpenLeadForm} />

        {/* 5. Localização (10 tempos reais do Book) */}
        <ParkEspanhaLocation onOpenLeadForm={onOpenLeadForm} />

        {/* 6. CTA & Apresentação */}
        <ParkEspanhaCta onOpenLeadForm={onOpenLeadForm} />

      </div>
    </section>
  );
};

