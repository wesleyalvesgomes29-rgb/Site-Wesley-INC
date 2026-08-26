import React, { useState } from 'react';
import { SIMULATOR_URL, getWhatsAppLink } from '../data/config';
import { 
  Calculator, 
  Sparkles, 
  Wallet, 
  PiggyBank, 
  Building, 
  CheckCircle2, 
  MessageSquare, 
  ExternalLink,
  ChevronRight,
  TrendingUp,
  ShieldCheck
} from 'lucide-react';

interface SimulatorSectionProps {
  onOpenLeadForm: (dev: string) => void;
}

export const SimulatorSection: React.FC<SimulatorSectionProps> = ({ onOpenLeadForm }) => {
  // Interactive Simulation State
  const [monthlyIncome, setMonthlyIncome] = useState<number>(4500);
  const [hasFgts, setHasFgts] = useState<boolean>(true);
  const [targetDevelopment, setTargetDevelopment] = useState<'Park Jardim do Sol' | 'Park Espanha' | 'Ainda não decidi'>('Park Jardim do Sol');
  const [estimatedDownPayment, setEstimatedDownPayment] = useState<number>(15000);

  // Approximate mathematical estimation for preview simulation guidance
  const maxInstallment = Math.round(monthlyIncome * 0.3);
  const estimatedFinancing = Math.round(monthlyIncome * 45);
  const estimatedSubsidio = monthlyIncome <= 4400 ? 'Possível subsídio conforme regras governamentais' : 'Enquadramento direto pelo SFH / SBPE';

  const handleSendSimulationToWesley = () => {
    const text = `Olá Wesley! Fiz uma pré-simulação no site da INC:\n\n• Renda Familiar: R$ ${monthlyIncome.toLocaleString('pt-BR')}\n• Possui FGTS: ${hasFgts ? 'Sim' : 'Não'}\n• Entrada Disponível: R$ ${estimatedDownPayment.toLocaleString('pt-BR')}\n• Empreendimento de Interesse: ${targetDevelopment}\n\nGostaria de ver a simulação oficial com você!`;
    window.open(getWhatsAppLink(text), '_blank');
  };

  const handleOpenOfficialSimulator = () => {
    if (SIMULATOR_URL.startsWith('http')) {
      window.open(SIMULATOR_URL, '_blank');
    } else {
      // Scroll to or focus on the current interactive tool
      const element = document.getElementById('simulador-box');
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="simulador"
      className="relative py-24 bg-[#090C12] border-t border-white/5 overflow-hidden"
    >
      {/* Background glow circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#FF600B]/12 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF600B]/10 border border-[#FF600B]/30 mb-4">
            <Calculator className="w-4 h-4 text-[#FF600B]" />
            <span className="text-xs font-bold text-[#FF8540] tracking-wider uppercase">
              Simulador de Viabilidade
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display mb-4">
            Quer descobrir qual pode ser a sua possibilidade?
          </h2>

          <p className="text-base sm:text-lg text-neutral-300">
            Faça uma simulação e veja as possibilidades para o seu perfil.
          </p>
        </div>

        {/* Main Grid Container */}
        <div 
          id="simulador-box"
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center rounded-3xl bg-gradient-to-br from-[#131723] via-[#10141D] to-[#0A0D14] p-6 sm:p-10 border border-white/10 shadow-2xl"
        >
          
          {/* Left Column: Wesley Chibi with original "SIMULAÇÃO" Plaque artwork */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center text-center relative">
            
            {/* Ambient Orange Glow */}
            <div className="absolute w-72 h-72 bg-[#FF600B]/18 rounded-full blur-[90px] pointer-events-none" />

            {/* Seamless Chibi Character */}
            <div className="relative z-10 flex flex-col items-center group">
              <img
                src="/images/wesley/wesley-chibi.png"
                alt="Wesley com Placa de Simulação INC"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.endsWith('wesley-chibi.jpg')) {
                    target.src = '/images/wesley/wesley-chibi.jpg';
                  }
                }}
                className="w-auto h-auto max-h-[340px] sm:max-h-[380px] object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.85)] transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />

              {/* Ground Shadow */}
              <div className="w-44 sm:w-56 h-4 bg-black/60 rounded-full blur-md -mt-2 pointer-events-none" />

              <div className="mt-3">
                <div className="text-sm font-bold text-white font-display">Simulação de Fluxo & Entrada</div>
                <div className="text-xs text-neutral-400 mt-0.5">
                  Descubra as condições reais para o seu perfil
                </div>
              </div>
            </div>

            {/* Direct Official Simulator Button */}
            <div className="mt-6 w-full max-w-[280px] z-10">
              <button
                id="btn-fazer-simulacao-principal"
                onClick={handleOpenOfficialSimulator}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-extrabold text-sm text-white bg-[#FF600B] hover:bg-[#E05005] shadow-lg shadow-[#FF600B]/30 hover:shadow-[#FF600B]/50 transition-all cursor-pointer border border-[#FFA066]/30 active:scale-95"
              >
                <Calculator className="w-4 h-4" />
                <span>Fazer simulação</span>
                {SIMULATOR_URL.startsWith('http') && <ExternalLink className="w-3.5 h-3.5" />}
              </button>
            </div>

          </div>

          {/* Right Column: Interactive Profile Calculator */}
          <div className="lg:col-span-7 bg-[#0C0F16] rounded-2xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between">
            
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                <div className="flex items-center gap-2 text-sm font-bold text-white font-display">
                  <TrendingUp className="w-4 h-4 text-[#FF600B]" />
                  <span>Calculadora Interativa de Perfil</span>
                </div>
                <span className="text-xs text-neutral-400 font-mono">Uberlândia - MG</span>
              </div>

              {/* Field 1: Monthly Income Slider */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold text-neutral-300 uppercase tracking-wider">
                    Renda Familiar Bruta Mensal:
                  </label>
                  <span className="text-base font-extrabold text-[#FF8540] font-mono">
                    R$ {monthlyIncome.toLocaleString('pt-BR')}
                  </span>
                </div>
                <input
                  type="range"
                  min="2000"
                  max="20000"
                  step="500"
                  value={monthlyIncome}
                  onChange={(e) => setMonthlyIncome(Number(e.target.value))}
                  className="w-full h-2 bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-[#FF600B]"
                />
                <div className="flex justify-between text-[10px] text-neutral-500 mt-1 font-mono">
                  <span>R$ 2.000</span>
                  <span>R$ 10.000</span>
                  <span>R$ 20.000+</span>
                </div>
              </div>

              {/* Field 2: Down payment estimate */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold text-neutral-300 uppercase tracking-wider">
                    Previsão de Entrada / Recursos Próprios:
                  </label>
                  <span className="text-base font-extrabold text-white font-mono">
                    R$ {estimatedDownPayment.toLocaleString('pt-BR')}
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100000"
                  step="2500"
                  value={estimatedDownPayment}
                  onChange={(e) => setEstimatedDownPayment(Number(e.target.value))}
                  className="w-full h-2 bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-[#FF600B]"
                />
                <div className="flex justify-between text-[10px] text-neutral-500 mt-1 font-mono">
                  <span>R$ 0 (Entrada facilitada)</span>
                  <span>R$ 50.000</span>
                  <span>R$ 100.000</span>
                </div>
              </div>

              {/* Field 3: Has FGTS */}
              <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-2">
                    Possui FGTS para utilizar?
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setHasFgts(true)}
                      className={`py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        hasFgts
                          ? 'bg-[#FF600B] text-white shadow-md'
                          : 'bg-white/5 text-neutral-300 hover:bg-white/10'
                      }`}
                    >
                      Sim, possuo
                    </button>
                    <button
                      type="button"
                      onClick={() => setHasFgts(false)}
                      className={`py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        !hasFgts
                          ? 'bg-[#FF600B] text-white shadow-md'
                          : 'bg-white/5 text-neutral-300 hover:bg-white/10'
                      }`}
                    >
                      Não possuo
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-2">
                    Empreendimento Preferido:
                  </label>
                  <select
                    value={targetDevelopment}
                    onChange={(e) => setTargetDevelopment(e.target.value as any)}
                    className="w-full bg-[#161B26] border border-white/10 rounded-xl px-3 py-2 text-xs font-semibold text-white focus:outline-none focus:border-[#FF600B]"
                  >
                    <option value="Park Jardim do Sol">Park Jardim do Sol (Zona Leste)</option>
                    <option value="Park Espanha">Park Espanha</option>
                    <option value="Ainda não decidi">Ainda não decidi</option>
                  </select>
                </div>
              </div>

              {/* Projected Estimate Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-xl bg-gradient-to-r from-[#141A27] to-[#10141F] border border-white/10 mb-6">
                <div>
                  <div className="text-[11px] text-neutral-400">Capacidade de Parcela Estimada:</div>
                  <div className="text-lg font-black text-emerald-400 font-mono">
                    Até R$ {maxInstallment.toLocaleString('pt-BR')}/mês
                  </div>
                  <div className="text-[10px] text-neutral-500">Baseado em até 30% da renda</div>
                </div>

                <div>
                  <div className="text-[11px] text-neutral-400">Potencial de Financiamento:</div>
                  <div className="text-lg font-black text-white font-mono">
                    Aprox. R$ {estimatedFinancing.toLocaleString('pt-BR')}
                  </div>
                  <div className="text-[10px] text-[#FF8540]">{estimatedSubsidio}</div>
                </div>
              </div>
            </div>

            {/* Actions for simulation */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <button
                id="btn-send-sim-wpp"
                onClick={handleSendSimulationToWesley}
                className="w-full sm:flex-1 flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold text-sm text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-900/30 transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Enviar Simulação ao Wesley</span>
              </button>

              <button
                id="btn-sim-open-form"
                onClick={() => onOpenLeadForm(targetDevelopment)}
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl font-semibold text-xs text-neutral-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors cursor-pointer"
              >
                Solicitar Contato Formal
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
