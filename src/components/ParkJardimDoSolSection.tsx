import React, { useState } from 'react';
import { DEVELOPMENTS, getWhatsAppLink } from '../data/config';
import { 
  Building2, 
  MapPin, 
  Sparkles, 
  Compass, 
  Layers, 
  Car, 
  Maximize2, 
  Calendar, 
  FileText, 
  MessageSquare, 
  CheckCircle2, 
  ShieldAlert,
  ArrowRight,
  Info,
  ShieldCheck,
  Store,
  BadgeCheck,
  Navigation
} from 'lucide-react';
import { ParkJardimDoSolFloorPlans } from './jardim-do-sol/ParkJardimDoSolFloorPlans';
import { ParkJardimDoSolLeisure } from './jardim-do-sol/ParkJardimDoSolLeisure';
import { ParkJardimDoSolLocation } from './jardim-do-sol/ParkJardimDoSolLocation';
import { ParkJardimDoSolDifferentials } from './jardim-do-sol/ParkJardimDoSolDifferentials';
import { ParkJardimDoSolCta } from './jardim-do-sol/ParkJardimDoSolCta';

interface ParkJardimDoSolSectionProps {
  onOpenLeadForm: (developmentName: string) => void;
}

export const ParkJardimDoSolSection: React.FC<ParkJardimDoSolSectionProps> = ({
  onOpenLeadForm,
}) => {
  const data = DEVELOPMENTS['jardim-do-sol'];

  const specsGrid = data.specs || [];

  return (
    <section
      id="jardim-do-sol"
      className="relative py-24 bg-gradient-to-b from-[#0A0C10] via-[#10141E] to-[#0A0C10] border-t border-white/5 overflow-hidden"
    >
      {/* Background glow lines */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-[#FF600B]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-[#FF600B]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Breadcrumb / Badge */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-400">
            <span className="text-[#FF600B] font-bold">EMPREENDIMENTO OFICIAL</span>
            <span>//</span>
            <span>NOVO MUNDO • ZONA LESTE • UBERLÂNDIA</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF600B]/10 border border-[#FF600B]/30 text-xs font-bold text-[#FF8540]">
            <span className="w-2 h-2 rounded-full bg-[#FF600B] animate-ping" />
            <span>LANÇAMENTO OFICIAL INC</span>
          </div>
        </div>

        {/* 1. Hero & Abertura Oficial: PARK JARDIM DO SOL */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-14">
          
          <div className="lg:col-span-6 flex flex-col items-start">
            
            <div className="text-xs font-mono uppercase font-bold text-[#FF8540] tracking-widest mb-2">
              {data.tagline}
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight font-display mb-4">
              Park Jardim do Sol
            </h2>

            <p className="text-xl sm:text-2xl font-bold text-[#FF8540] mb-4 font-display">
              {data.subtitle}
            </p>

            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed mb-6">
              {data.fullDescription}
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-8">
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-semibold text-neutral-200">
                <MapPin className="w-4 h-4 text-[#FF600B]" />
                <span>Bairro Novo Mundo (Zona Leste)</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-semibold text-neutral-200">
                <BadgeCheck className="w-4 h-4 text-[#FF600B]" />
                <span>Minha Casa Minha Vida / Caixa</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-semibold text-neutral-200">
                <Layers className="w-4 h-4 text-[#FF600B]" />
                <span>Plantas de 37,24m² a 41,20m²</span>
              </div>
            </div>

            {/* Quick Action Button */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full">
              <button
                id="btn-jardim-sol-cta"
                onClick={() => onOpenLeadForm('Park Jardim do Sol')}
                className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-base text-white bg-[#FF600B] hover:bg-[#E05005] shadow-lg shadow-[#FF600B]/30 hover:shadow-[#FF600B]/50 transition-all duration-300 cursor-pointer active:scale-95 border border-[#FFA066]/30"
              >
                <FileText className="w-5 h-5" />
                <span>Quero conhecer o Park Jardim do Sol</span>
              </button>

              <a
                id="btn-jardim-sol-wpp"
                href={getWhatsAppLink('Olá Wesley! Tenho interesse no Park Jardim do Sol (Bairro Novo Mundo). Poderia me passar a apresentação oficial?')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-4 rounded-xl font-semibold text-sm text-neutral-200 bg-[#161B27] hover:bg-[#1F2637] border border-white/10 hover:border-[#FF600B]/40 transition-all text-center"
              >
                <MessageSquare className="w-4 h-4 text-[#FF600B]" />
                <span>Falar com Wesley</span>
              </a>
            </div>
          </div>

          {/* Right Visual Display: Official Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-[#121620] shadow-2xl group">
              
              <img
                src="/images/jardim-do-sol/fachada-principal.jpg"
                alt="Perspectiva da Fachada Oficial - Park Jardim do Sol - INC Empreendimentos"
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
                  <div className="text-sm font-bold text-white">Park Jardim do Sol • Bairro Novo Mundo</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-[#FF8540] font-mono">CONSULTORIA</div>
                  <div className="text-sm font-bold text-white">Wesley Alves</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 2. Informações do Empreendimento (Ficha Técnica Confirmada) */}
        <div className="rounded-3xl bg-[#121622] p-6 sm:p-8 border border-white/10 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-white/[0.04] text-[11px] font-mono text-[#FF8540] mb-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>DADOS CONFIRMADOS NO BOOK OFICIAL</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                Ficha Técnica do Empreendimento
              </h3>
            </div>

            <div className="flex items-center gap-2 text-xs text-neutral-400 bg-white/[0.03] px-3 py-1.5 rounded-lg border border-white/5">
              <Info className="w-4 h-4 text-[#FF8540]" />
              <span>Informações 100% fiéis ao memorial oficial</span>
            </div>
          </div>

          {/* Specs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {specsGrid.map((spec, index) => (
              <div
                key={index}
                className="p-4 rounded-2xl bg-[#171D2B] border border-white/10 hover:border-[#FF600B]/40 transition-all group"
              >
                <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1">
                  {spec.label}
                </div>
                <div className="text-base font-bold font-display text-white group-hover:text-[#FF8540] transition-colors">
                  {spec.value}
                </div>
              </div>
            ))}
          </div>

          {/* Destaques em Lista */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-4">
              PONTOS FORTES CONFIRMADOS DO PARK JARDIM DO SOL:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {data.highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs text-neutral-200 bg-white/[0.02] p-3 rounded-xl border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-[#FF600B] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3. Seção "Escolha a planta que combina com você" (Plantas Oficiais) */}
        <ParkJardimDoSolFloorPlans onOpenLeadForm={onOpenLeadForm} />

        {/* 4. Seção "Um projeto pensado para viver bem." (Lazer e Áreas Comuns) */}
        <ParkJardimDoSolLeisure onOpenLeadForm={onOpenLeadForm} />

        {/* 5. Seção "Conectado ao que importa." (Localização) */}
        <ParkJardimDoSolLocation onOpenLeadForm={onOpenLeadForm} />

        {/* 6. Seção Diferenciais Reais do Empreendimento */}
        <ParkJardimDoSolDifferentials onOpenLeadForm={onOpenLeadForm} />

        {/* 7. Seção Simulação com o Wesley e CTA Oficial */}
        <ParkJardimDoSolCta onOpenLeadForm={onOpenLeadForm} />

      </div>
    </section>
  );
};
