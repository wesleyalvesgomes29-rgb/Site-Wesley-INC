import React, { useState } from 'react';
import { DEVELOPMENTS, getWhatsAppLink } from '../../data/config';
import { 
  Maximize2, 
  Bed, 
  CheckCircle2, 
  FileText, 
  MessageSquare,
  ZoomIn,
  X,
  Layers,
  ShieldCheck,
  Accessibility,
  Eye
} from 'lucide-react';

interface ParkJardimDoSolFloorPlansProps {
  onOpenLeadForm: (devName: string) => void;
}

export const ParkJardimDoSolFloorPlans: React.FC<ParkJardimDoSolFloorPlansProps> = ({
  onOpenLeadForm,
}) => {
  const data = DEVELOPMENTS['jardim-do-sol'];
  const plans = data.floorPlans || [];
  const [selectedZoomPlan, setSelectedZoomPlan] = useState<typeof plans[0] | null>(null);

  return (
    <div className="mt-16 pt-12 border-t border-white/10" id="plantas-jardim-sol">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF600B]/10 border border-[#FF600B]/30 text-xs font-bold text-[#FF8540] mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>TIPOLOGIAS OFICIAIS INC</span>
          </div>
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
            Plantas do Park Jardim do Sol
          </h3>
          <p className="text-sm sm:text-base text-neutral-300 mt-2 max-w-2xl font-sans">
            Escolha a planta que combina com o seu momento.
          </p>
        </div>

        {/* Quick helper badge */}
        <div className="flex items-center gap-2 text-xs font-mono text-neutral-300 bg-[#121622] px-4 py-2.5 rounded-xl border border-white/10 shrink-0">
          <ShieldCheck className="w-4 h-4 text-[#FF600B]" />
          <span>4 Plantas Oficiais Confirmadas</span>
        </div>
      </div>

      {/* Grid com os 4 Cards Modernos e Organizados */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.id}
            id={`card-${plan.id}`}
            className="flex flex-col justify-between rounded-2xl bg-gradient-to-b from-[#161C2A] to-[#0F131D] border border-white/10 hover:border-[#FF600B]/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-[#FF600B]/10 overflow-hidden group"
          >
            {/* Card Top Info */}
            <div className="p-5 pb-3">
              <div className="flex items-start justify-between gap-2 mb-2">
                <span className="text-xl sm:text-2xl font-black font-mono text-[#FF8540] tracking-tight">
                  {plan.area}
                </span>
                {plan.badge && (
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#FF600B]/20 text-[#FF8540] border border-[#FF600B]/30 shrink-0">
                    {plan.badge}
                  </span>
                )}
              </div>

              <h4 className="text-lg font-bold text-white font-display group-hover:text-[#FF8540] transition-colors">
                {plan.name}
              </h4>

              <div className="flex items-center gap-1.5 text-xs text-neutral-300 font-medium mt-1">
                {plan.id === 'planta-compacto-pcd' ? (
                  <Accessibility className="w-3.5 h-3.5 text-[#FF600B]" />
                ) : (
                  <Bed className="w-3.5 h-3.5 text-[#FF600B]" />
                )}
                <span>{plan.bedrooms}</span>
              </div>
            </div>

            {/* Imagem Oficial da Planta com object-contain */}
            <div className="px-4 py-2">
              <div 
                className="relative w-full aspect-[4/3] bg-[#0A0D14] rounded-xl border border-white/5 p-3 flex items-center justify-center cursor-pointer group/img overflow-hidden"
                onClick={() => setSelectedZoomPlan(plan)}
                title="Clique para ampliar a planta"
              >
                <img
                  src={plan.image}
                  alt={`${plan.name} - ${plan.area} do Park Jardim do Sol`}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover/img:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Overlay hover para ampliar */}
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-semibold">
                  <div className="px-3 py-1.5 rounded-lg bg-[#FF600B] text-white flex items-center gap-1.5 shadow-lg">
                    <ZoomIn className="w-4 h-4" />
                    <span>Ampliar Planta</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Descrição e Diferenciais */}
            <div className="p-5 pt-3 flex-1 flex flex-col justify-between">
              <div>
                <p className="text-xs text-neutral-300 leading-relaxed mb-4">
                  {plan.description}
                </p>

                <div className="space-y-1.5 pt-3 border-t border-white/5">
                  {plan.highlights.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-[11px] text-neutral-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FF600B] shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Botões de Ação do Card */}
              <div className="mt-5 pt-4 border-t border-white/10 space-y-2">
                <button
                  onClick={() => onOpenLeadForm(`Park Jardim do Sol - ${plan.name} (${plan.area})`)}
                  className="w-full flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl font-bold text-xs text-white bg-[#FF600B] hover:bg-[#E05005] shadow-md shadow-[#FF600B]/20 transition-all cursor-pointer border border-[#FFA066]/30 active:scale-95"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Simular {plan.name}</span>
                </button>

                <a
                  href={getWhatsAppLink(`Olá Wesley! Gostei da ${plan.name} (${plan.area}) do Park Jardim do Sol e gostaria de simular os valores.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl font-semibold text-xs text-neutral-300 bg-white/[0.04] hover:bg-white/[0.08] hover:text-white border border-white/10 hover:border-[#FF600B]/30 transition-all text-center"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#FF600B]" />
                  <span>Falar no WhatsApp</span>
                </a>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Modal de Zoom da Planta */}
      {selectedZoomPlan && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedZoomPlan(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-[#121622] rounded-2xl border border-white/20 p-6 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Modal */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
              <div className="flex items-center gap-3">
                <div className="px-3 py-1 rounded-lg bg-[#FF600B]/10 border border-[#FF600B]/30 text-xs font-mono font-bold text-[#FF8540]">
                  {selectedZoomPlan.area}
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-white font-display">
                    {selectedZoomPlan.name}
                  </h4>
                  <p className="text-xs text-neutral-400">
                    Planta Oficial • Park Jardim do Sol
                  </p>
                </div>
              </div>

              <button
                onClick={() => setSelectedZoomPlan(null)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                title="Fechar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Imagem Ampliada com object-contain */}
            <div className="flex-1 min-h-[300px] sm:min-h-[460px] bg-[#0A0D14] rounded-xl border border-white/5 p-4 flex items-center justify-center overflow-auto">
              <img
                src={selectedZoomPlan.image}
                alt={`${selectedZoomPlan.name} - ${selectedZoomPlan.area}`}
                className="max-h-[60vh] sm:max-h-[65vh] w-auto max-w-full object-contain drop-shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Footer Modal */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 mt-4 border-t border-white/10">
              <div className="text-xs text-neutral-400">
                <span>{selectedZoomPlan.description}</span>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => {
                    const planName = selectedZoomPlan.name;
                    const planArea = selectedZoomPlan.area;
                    setSelectedZoomPlan(null);
                    onOpenLeadForm(`Park Jardim do Sol - ${planName} (${planArea})`);
                  }}
                  className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-[#FF600B] hover:bg-[#E05005] shadow-lg shadow-[#FF600B]/20 transition-all cursor-pointer"
                >
                  <FileText className="w-4 h-4" />
                  <span>Simular Esta Planta</span>
                </button>

                <a
                  href={getWhatsAppLink(`Olá Wesley! Estou vendo a ${selectedZoomPlan.name} (${selectedZoomPlan.area}) do Park Jardim do Sol e quero tirar dúvidas.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs text-white bg-[#161C2A] hover:bg-[#1E2536] border border-white/10 transition-all text-center"
                >
                  <MessageSquare className="w-4 h-4 text-[#FF600B]" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
