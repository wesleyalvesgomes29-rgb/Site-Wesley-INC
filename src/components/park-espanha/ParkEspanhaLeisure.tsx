import React, { useState } from 'react';
import { DEVELOPMENTS, getWhatsAppLink } from '../../data/config';
import { 
  Sparkles, 
  Waves, 
  Trophy, 
  Utensils, 
  Smile, 
  HeartHandshake, 
  Trees, 
  Dumbbell, 
  Sun, 
  Gamepad2, 
  Tv, 
  Bike, 
  Building2, 
  ShieldCheck, 
  CheckCircle2, 
  MessageSquare, 
  Compass, 
  Layers,
  Wifi,
  Video,
  Zap,
  Flame,
  Wind,
  Trash2
} from 'lucide-react';

interface ParkEspanhaLeisureProps {
  onOpenLeadForm: (devName: string) => void;
}

export const ParkEspanhaLeisure: React.FC<ParkEspanhaLeisureProps> = ({
  onOpenLeadForm,
}) => {
  const data = DEVELOPMENTS['park-espanha'];
  const leisureItems = data.leisureItems || [];
  const [filterCategory, setFilterCategory] = useState<string>('todos');

  // Itens de tecnologia, sustentabilidade e segurança informados no Book
  const securityAndTechItems = [
    { title: 'Sistema de monitoramento por câmeras', desc: 'Segurança eletrônica ativa nas áreas estratégicas', icon: <Video className="w-4 h-4 text-[#FF600B]" /> },
    { title: 'Cerca elétrica', desc: 'Proteção perimetral completa para o condomínio', icon: <Zap className="w-4 h-4 text-amber-400" /> },
    { title: 'Cancela mecânica e motorizada', desc: 'Controle de acesso ágil e seguro para veículos', icon: <ShieldCheck className="w-4 h-4 text-emerald-400" /> },
    { title: 'Infraestrutura para Wi-Fi na área de lazer', desc: 'Conectividade para os moradores nas áreas sociais', icon: <Wifi className="w-4 h-4 text-sky-400" /> },
    { title: 'Lixeiras para coleta seletiva', desc: 'Práticas sustentáveis e destinação consciente', icon: <Trash2 className="w-4 h-4 text-emerald-400" /> },
    { title: 'Sensores de presença', desc: 'Eficiência energética inteligente nos halls e circulações', icon: <Zap className="w-4 h-4 text-amber-400" /> },
    { title: 'Lâmpadas de LED', desc: 'Economia no condomínio e iluminação de alto rendimento', icon: <Zap className="w-4 h-4 text-amber-400" /> },
    { title: 'Ponto para ar-condicionado', desc: 'Infraestrutura planejada para o seu conforto térmico', icon: <Wind className="w-4 h-4 text-sky-400" /> },
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Waves': return <Waves className="w-5 h-5 text-[#FF600B]" />;
      case 'Trophy': return <Trophy className="w-5 h-5 text-[#FF600B]" />;
      case 'Utensils': return <Utensils className="w-5 h-5 text-[#FF600B]" />;
      case 'Smile': return <Smile className="w-5 h-5 text-[#FF600B]" />;
      case 'HeartHandshake': return <HeartHandshake className="w-5 h-5 text-[#FF600B]" />;
      case 'Trees': return <Trees className="w-5 h-5 text-[#FF600B]" />;
      case 'Dumbbell': return <Dumbbell className="w-5 h-5 text-[#FF600B]" />;
      case 'Sun': return <Sun className="w-5 h-5 text-[#FF600B]" />;
      case 'Gamepad2': return <Gamepad2 className="w-5 h-5 text-[#FF600B]" />;
      case 'Bike': return <Bike className="w-5 h-5 text-[#FF600B]" />;
      default: return <Sparkles className="w-5 h-5 text-[#FF600B]" />;
    }
  };

  const filteredItems = filterCategory === 'todos' 
    ? leisureItems 
    : leisureItems.filter(item => item.category === filterCategory);

  return (
    <div className="mt-16 pt-12 border-t border-white/10" id="lazer-park-espanha">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF600B]/10 border border-[#FF600B]/30 text-xs font-bold text-[#FF8540] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>LAZER, CONVIVÊNCIA & BEM-ESTAR</span>
          </div>
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
            Ambientes Funcionais e Acolhedores.
          </h3>
          <p className="text-sm sm:text-base text-neutral-300 mt-2 max-w-2xl">
            Projetado para valorizar a qualidade de vida e a interação entre os moradores, 
            o Park Espanha traz uma estrutura completa para todas as fases da vida.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 bg-[#121622] p-1.5 rounded-2xl border border-white/10 self-start md:self-auto">
          {[
            { id: 'todos', label: 'Todos os Espaços' },
            { id: 'esporte', label: 'Esporte & Saúde' },
            { id: 'convivencia', label: 'Convivência' },
            { id: 'familia', label: 'Família & Pets' },
            { id: 'natureza', label: 'Zen & Natureza' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setFilterCategory(tab.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                filterCategory === tab.id
                  ? 'bg-[#FF600B] text-white shadow-md'
                  : 'text-neutral-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Leisure Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="p-5 rounded-2xl bg-[#131926] border border-white/10 hover:border-[#FF600B]/50 transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center mb-3 group-hover:bg-[#FF600B]/20 transition-colors">
                {getIcon(item.icon)}
              </div>
              <h4 className="text-base font-bold text-white font-display mb-1 group-hover:text-[#FF8540] transition-colors">
                {item.title}
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                {item.tagline}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-neutral-400">
              <span className="capitalize">{item.category}</span>
              <span className="text-[#FF8540] font-mono font-semibold">INC Oficial</span>
            </div>
          </div>
        ))}
      </div>

      {/* Diferenciais de Segurança, Sustentabilidade e Tecnologia */}
      <div className="rounded-3xl bg-gradient-to-b from-[#141A28] to-[#0E131E] p-6 sm:p-8 border border-white/10 shadow-xl mb-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#FF8540] uppercase tracking-wider mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span>TECNOLOGIA, SUSTENTABILIDADE & SEGURANÇA</span>
            </div>
            <h4 className="text-xl font-bold text-white font-display">
              Infraestrutura Inteligente do Empreendimento
            </h4>
          </div>
          <span className="text-xs text-neutral-400 font-mono bg-white/[0.04] px-3 py-1.5 rounded-lg border border-white/5 self-start sm:self-auto">
            Padrão Construtivo INC
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {securityAndTechItems.map((tech, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col justify-between">
              <div className="flex items-start gap-3 mb-2">
                <div className="p-2 rounded-lg bg-white/[0.04] border border-white/10 shrink-0">
                  {tech.icon}
                </div>
                <div>
                  <div className="text-xs font-bold text-white font-display">{tech.title}</div>
                  <div className="text-[11px] text-neutral-400 mt-1 leading-snug">{tech.desc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
