import React from 'react';
import { MessageSquare, Users, Cpu, KeyRound, Sparkles, ArrowRight } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Você demonstra interesse.',
      description: 'Envie uma mensagem, solicite uma simulação ou preencha o formulário rápido pelo site.',
      icon: MessageSquare,
      accent: 'from-[#FF600B] to-[#FF8238]',
    },
    {
      number: '02',
      title: 'Conversamos sobre o que você procura.',
      description: 'O Wesley entra em contato para entender seus objetivos, localização ideal e planejamento.',
      icon: Users,
      accent: 'from-[#FF8238] to-[#FFA066]',
    },
    {
      number: '03',
      title: 'Analisamos as possibilidades disponíveis.',
      description: 'Apresentação detalhada do Park Jardim do Sol e Park Espanha com simulação de fluxo real.',
      icon: Cpu,
      accent: 'from-[#FFA066] to-[#FF600B]',
    },
    {
      number: '04',
      title: 'Você conhece o empreendimento e recebe orientação para seguir com a aquisição.',
      description: 'Apresentação do projeto oficial e acompanhamento completo em todas as etapas até as chaves.',
      icon: KeyRound,
      accent: 'from-[#FF600B] to-[#E05005]',
    },
  ];

  return (
    <section
      id="como-funciona"
      className="relative py-24 bg-[#0A0D13] border-t border-white/5 overflow-hidden"
    >
      {/* Background glow beam */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[350px] bg-[#FF600B]/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 mb-4">
            <Sparkles className="w-4 h-4 text-[#FF600B]" />
            <span className="text-xs font-bold text-neutral-300 tracking-wider uppercase">
              Etapas Claras e Transparentes
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display mb-4">
            Como funciona?
          </h2>

          <p className="text-base sm:text-lg text-neutral-400">
            Um processo consultivo simples, moderno e focado na melhor escolha para o seu futuro.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                id={`step-card-${step.number}`}
                className="group relative rounded-3xl bg-gradient-to-b from-[#131722] to-[#0D1017] p-6 sm:p-7 border border-white/10 hover:border-[#FF600B]/50 transition-all duration-300 shadow-xl flex flex-col justify-between"
              >
                {/* Step Number Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl sm:text-4xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500 group-hover:from-[#FF600B] group-hover:to-[#FFA066] transition-all">
                    {step.number}
                  </span>

                  <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#FF600B] group-hover:bg-[#FF600B] group-hover:text-white transition-all shadow-md">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white font-display mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Bottom line accent */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center text-[11px] font-mono text-[#FF8540]">
                  <span>FASE {step.number} DO PROCESSO</span>
                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
