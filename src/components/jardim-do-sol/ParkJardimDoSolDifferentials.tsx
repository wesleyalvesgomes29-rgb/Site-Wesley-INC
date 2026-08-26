import React from 'react';
import { DEVELOPMENTS, getWhatsAppLink } from '../../data/config';
import { 
  Award, 
  ShieldCheck, 
  Building2, 
  Banknote, 
  Car, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  TrendingUp,
  FileText,
  MessageSquare
} from 'lucide-react';

interface ParkJardimDoSolDifferentialsProps {
  onOpenLeadForm: (devName: string) => void;
}

export const ParkJardimDoSolDifferentials: React.FC<ParkJardimDoSolDifferentialsProps> = ({
  onOpenLeadForm,
}) => {
  const differentials = [
    {
      icon: <Award className="w-6 h-6 text-[#FF600B]" />,
      badge: 'Solidez Nacional',
      title: '15ª Maior Construtora do Brasil',
      description: 'A INC Empreendimentos nasceu em 2008 e é reconhecida com Selo GPTW, Selo Azul Caixa, Listagem na B3 e auditoria KPMG.',
      metrics: 'Desde 2008 • Selo GPTW • B3',
    },
    {
      icon: <Banknote className="w-6 h-6 text-[#FF600B]" />,
      badge: 'Facilidade',
      title: 'Minha Casa Minha Vida & Caixa',
      description: 'Financiamento facilitado pela Caixa Econômica Federal com subsídios do programa, uso do FGTS e fluxo de entrada flexível.',
      metrics: 'Caixa Econômica • FGTS • MCMV',
    },
    {
      icon: <Car className="w-6 h-6 text-[#FF600B]" />,
      badge: 'Mobilidade & Conforto',
      title: 'Edifício Garagem Integrado',
      description: 'Vagas protegidas e organizadas em edifício garagem dedicado, com acesso independente de veículos e pedestres.',
      metrics: 'Acesso Segregado • Mais Segurança',
    },
    {
      icon: <Sparkles className="w-6 h-6 text-[#FF600B]" />,
      badge: 'Lazer Completo',
      title: '12+ Ambientes Entregues Equipados',
      description: 'Piscina, quadra de areia, espaço gourmet com churrasqueira, cinema ao ar livre, pet place e espaço conecta prontos para uso.',
      metrics: 'Piscina • Gourmet • Quadra Areia',
    },
  ];

  return (
    <div className="mt-16 pt-12 border-t border-white/10" id="diferenciais-jardim-sol">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF600B]/10 border border-[#FF600B]/30 text-xs font-bold text-[#FF8540] mb-3">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>DIFERENCIAIS CONFIRMADOS DO PROJETO</span>
        </div>
        <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
          Por que o Park Jardim do Sol é a escolha certa?
        </h3>
        <p className="text-sm sm:text-base text-neutral-300 mt-2">
          Um projeto com a assinatura e solidez da INC Empreendimentos, combinando inovação, segurança e custo-benefício real.
        </p>
      </div>

      {/* Differentials Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {differentials.map((item, index) => (
          <div
            key={index}
            className="group relative rounded-3xl bg-gradient-to-b from-[#141A28] to-[#0D111A] p-6 sm:p-8 border border-white/10 hover:border-[#FF600B]/50 transition-all duration-300 shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FF600B]/10 border border-[#FF600B]/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <span className="text-[11px] font-mono font-bold text-[#FF8540] bg-[#FF600B]/10 px-3 py-1 rounded-full border border-[#FF600B]/20">
                  {item.badge}
                </span>
              </div>

              <h4 className="text-xl font-bold text-white font-display group-hover:text-[#FF8540] transition-colors">
                {item.title}
              </h4>

              <p className="text-sm text-neutral-300 mt-3 leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-neutral-400 font-mono">
              <span>{item.metrics}</span>
              <CheckCircle2 className="w-4 h-4 text-[#FF600B]" />
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
