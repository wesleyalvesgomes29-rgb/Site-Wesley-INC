import React, { useState } from 'react';
import { DEVELOPMENTS, getWhatsAppLink } from '../../data/config';
import { 
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

interface UniqueNovoMundoFloorPlansProps {
  onOpenLeadForm: (devName: string) => void;
}

export const UniqueNovoMundoFloorPlans: React.FC<UniqueNovoMundoFloorPlansProps> = ({
  onOpenLeadForm,
}) => {
  const data = DEVELOPMENTS['unique-novo-mundo'];
  const plans = data.floorPlans || [];
  const [selectedZoomPlan, setSelectedZoomPlan] = useState<typeof plans[0] | null>(null);

  return (
    <div className="mt-16 pt-12 border-t border-white/10" id="plantas-unique-novo-mundo">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF600B]/10 border border-[#FF600B]/30 text-xs font-bold text-[#FF8540] mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>TIPOLOGIAS OFICIAIS INC</span>
          </div>
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
            Plantas do Unique Novo Mundo
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
                  alt={`${plan.name} - ${plan.area} do Unique Novo Mundo`}
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
                    <div key={idx} className="flex items-center gap-2 text-xs text-neutral-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FF600B] shrink-0" />
                      <span className="line-clamp-1">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Botões de Ação */}
              <div className="mt-5 pt-3 border-t border-white/10 flex flex-col gap-2">
                <button
                  id={`btn-plan-open-${plan.id}`}
                  onClick={() => setSelectedZoomPlan(plan)}
                  className="w-full py-2 px-3 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-200 hover:text-white border border-white/10 text-xs font-medium transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5 text-[#FF600B]" />
                  <span>Ver Detalhes da Planta</span>
                </button>

                <button
                  id={`btn-plan-interest-${plan.id}`}
                  onClick={() => onOpenLeadForm(`Unique Novo Mundo - ${plan.name} (${plan.area})`)}
                  className="w-full py-2.5 px-3 rounded-lg bg-[#FF600B] hover:bg-[#E05005] text-white font-bold text-xs shadow-md shadow-[#FF600B]/20 transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Tenho interesse nesta planta</span>
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* MODAL DE ZOOM / VISUALIZAÇÃO AMPLIADA DA PLANTA */}
      {selectedZoomPlan && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedZoomPlan(null)}
        >
          <div 
            className="relative w-full max-w-4xl bg-[#10141E] border border-white/15 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between bg-[#151B28]">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-[#FF8540] uppercase">
                    Unique Novo Mundo
                  </span>
                  <span className="text-neutral-500">•</span>
                  <span className="text-xs text-neutral-300 font-medium">
                    {selectedZoomPlan.bedrooms}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-black text-white font-display">
                  {selectedZoomPlan.name} — {selectedZoomPlan.area}
                </h3>
              </div>

              <button
                id="btn-close-zoom-modal"
                onClick={() => setSelectedZoomPlan(null)}
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body: Imagem com visualização completa */}
            <div className="p-4 sm:p-6 flex-1 overflow-auto bg-[#07090E] flex items-center justify-center min-h-[300px]">
              <img
                src={selectedZoomPlan.image}
                alt={`${selectedZoomPlan.name} ${selectedZoomPlan.area}`}
                className="max-h-[60vh] w-auto max-w-full object-contain rounded-lg shadow-lg"
              />
            </div>

            {/* Modal Footer: Informações + CTA */}
            <div className="p-4 sm:p-5 border-t border-white/10 bg-[#121622] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-left">
                <p className="text-xs text-neutral-300 max-w-md">
                  {selectedZoomPlan.description}
                </p>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <a
                  id="btn-modal-wpp"
                  href={getWhatsAppLink(`Olá Wesley! Gostaria de tirar dúvidas sobre a ${selectedZoomPlan.name} (${selectedZoomPlan.area}) do Unique Novo Mundo.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-[#181F2E] hover:bg-[#20293D] text-neutral-200 border border-white/10 hover:border-[#FF600B]/40 font-semibold text-xs transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-[#FF600B]" />
                  <span>Dúvidas no WhatsApp</span>
                </a>

                <button
                  id="btn-modal-simular"
                  onClick={() => {
                    setSelectedZoomPlan(null);
                    onOpenLeadForm(`Unique Novo Mundo - ${selectedZoomPlan.name}`);
                  }}
                  className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-[#FF600B] hover:bg-[#E05005] text-white font-bold text-xs shadow-lg shadow-[#FF600B]/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <FileText className="w-4 h-4" />
                  <span>Simular esta planta</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
