import React, { useState } from 'react';
import { 
  Building2, 
  Maximize2, 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  MessageSquare, 
  FileText, 
  X, 
  ZoomIn, 
  Info,
  ShieldCheck,
  Compass,
  ArrowRight,
  ImageIcon
} from 'lucide-react';
import { DEVELOPMENTS, getWhatsAppLink } from '../../data/config';

interface ParkEspanhaFloorPlansProps {
  onOpenLeadForm: (devName: string) => void;
}

export const ParkEspanhaFloorPlans: React.FC<ParkEspanhaFloorPlansProps> = ({
  onOpenLeadForm,
}) => {
  const data = DEVELOPMENTS['park-espanha'];
  const floorPlans = data.floorPlans || [];

  const [modalPlan, setModalPlan] = useState<typeof floorPlans[0] | null>(null);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (planId: string) => {
    setImageErrors(prev => ({ ...prev, [planId]: true }));
  };

  return (
    <div className="mt-16 pt-12 border-t border-white/10" id="plantas-park-espanha">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF600B]/10 border border-[#FF600B]/30 text-xs font-bold text-[#FF8540] mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>TIPOLOGIAS OFICIAIS • PARK ESPANHA</span>
          </div>
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
            Plantas Projetadas para o seu Conforto
          </h3>
          <p className="text-sm sm:text-base text-neutral-300 mt-2 max-w-2xl">
            Conheça as duas tipologias apresentadas no book do Park Espanha: <strong>Planta Tipo Canto</strong> e <strong>Planta Tipo Meio</strong>.
          </p>
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-mono text-[#FF8540]">
          <span>2 Opções de Disposição</span>
        </div>
      </div>

      {/* Two Dedicated Cards Grid (Side-by-Side) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {floorPlans.map((plan) => (
          <div
            key={plan.id}
            id={`card-plan-${plan.id}`}
            className="rounded-3xl bg-[#121622] border border-white/10 hover:border-[#FF600B]/40 p-6 sm:p-8 shadow-2xl flex flex-col justify-between transition-all duration-300 relative overflow-hidden group"
          >
            {/* Top Badge */}
            <div className="flex items-center justify-between gap-4 mb-5">
              <span className="px-3.5 py-1 rounded-full bg-[#FF600B]/20 border border-[#FF600B]/40 text-xs font-bold font-mono text-[#FF8540]">
                {plan.badge || plan.name}
              </span>
              <span className="text-xs text-neutral-400 font-mono">
                Park Espanha • INC
              </span>
            </div>

            {/* Visual Container for Floor Plan Image / Placeholder */}
            <div className="relative w-full rounded-2xl overflow-hidden bg-[#0A0D14] border border-white/5 p-4 flex items-center justify-center min-h-[260px] sm:min-h-[300px] mb-6">
              {!imageErrors[plan.id] && plan.image ? (
                <img
                  src={plan.image}
                  alt={`${plan.name} - Park Espanha`}
                  referrerPolicy="no-referrer"
                  className="w-full max-h-[300px] object-contain transition-transform duration-500 group-hover:scale-105"
                  onError={() => handleImageError(plan.id)}
                />
              ) : (
                <div className="p-6 text-center flex flex-col items-center justify-center">
                  <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center mb-3 text-[#FF8540]">
                    <Layers className="w-7 h-7" />
                  </div>
                  <div className="text-base font-bold text-white font-display mb-1">
                    {plan.name}
                  </div>
                  <p className="text-xs text-neutral-400 max-w-xs mb-3">
                    Espaço preparado para receber a imagem técnica oficial da {plan.name}.
                  </p>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/10 text-[11px] text-neutral-400 font-mono">
                    <Sparkles className="w-3 h-3 text-[#FF600B]" />
                    <span>Tipologia do Book Oficial</span>
                  </div>
                </div>
              )}

              {/* Expand button if image is available */}
              {!imageErrors[plan.id] && plan.image && (
                <button
                  onClick={() => setModalPlan(plan)}
                  className="absolute bottom-3 right-3 p-2 rounded-xl bg-[#090C12]/90 hover:bg-[#FF600B] text-white border border-white/10 transition-colors shadow-lg cursor-pointer flex items-center gap-1.5 text-xs font-mono"
                  title="Ampliar Planta"
                >
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>Ampliar</span>
                </button>
              )}
            </div>

            {/* Plan Info & Highlights */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h4 className="text-2xl font-black text-white font-display mb-2">
                  {plan.name}
                </h4>
                <p className="text-sm text-neutral-300 leading-relaxed mb-5">
                  {plan.description}
                </p>

                <div className="space-y-2.5 mb-6">
                  <div className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                    Diferenciais do Layout:
                  </div>
                  {plan.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-200">
                      <CheckCircle2 className="w-4 h-4 text-[#FF600B] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons for this Plan */}
              <div className="space-y-2.5 pt-5 border-t border-white/10 mt-4">
                <button
                  id={`btn-plan-${plan.id}-cta`}
                  onClick={() => onOpenLeadForm(`Park Espanha - ${plan.name}`)}
                  className="w-full py-3.5 px-5 rounded-xl font-bold text-sm text-white bg-[#FF600B] hover:bg-[#E05005] shadow-lg shadow-[#FF600B]/30 transition-all cursor-pointer text-center active:scale-98"
                >
                  Quero Simular com {plan.name}
                </button>

                <a
                  id={`btn-plan-${plan.id}-wpp`}
                  href={getWhatsAppLink(`Olá Wesley! Gostaria de receber a planta e valores da ${plan.name} do Park Espanha.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl font-semibold text-xs text-neutral-200 bg-[#171E2D] hover:bg-[#20293D] border border-white/10 transition-all text-center flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#FF600B]" />
                  <span>Consultar Disponibilidade com Wesley</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for full visual zoom */}
      {modalPlan && !imageErrors[modalPlan.id] && modalPlan.image && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setModalPlan(null)}
        >
          <div 
            className="relative max-w-5xl w-full bg-[#121622] rounded-3xl border border-white/10 p-6 sm:p-8 flex flex-col max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
              <div>
                <h3 className="text-xl font-bold text-white font-display">{modalPlan.name}</h3>
                <p className="text-xs text-neutral-400">Park Espanha • INC Empreendimentos</p>
              </div>
              <button
                onClick={() => setModalPlan(null)}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-auto flex items-center justify-center bg-[#090C12] rounded-2xl p-4 min-h-[300px]">
              <img
                src={modalPlan.image}
                alt={modalPlan.name}
                referrerPolicy="no-referrer"
                className="max-h-[65vh] w-auto object-contain"
              />
            </div>

            <div className="mt-4 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-neutral-400">Consulte condições e disponibilidade com Wesley Alves.</span>
              <button
                onClick={() => {
                  setModalPlan(null);
                  onOpenLeadForm(`Park Espanha - ${modalPlan.name}`);
                }}
                className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-[#FF600B] hover:bg-[#E05005] transition-colors cursor-pointer"
              >
                Simular Financiamento com Wesley
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
