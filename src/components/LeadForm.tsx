import React, { useState } from 'react';
import { getWhatsAppLink } from '../data/config';
import { LeadFormData } from '../types';
import { MessageSquare, Send, CheckCircle2, User, Phone, MapPin, DollarSign, HelpCircle, ShieldCheck } from 'lucide-react';

interface LeadFormProps {
  initialDevelopment?: string;
}

export const LeadForm: React.FC<LeadFormProps> = ({ initialDevelopment = 'Park Jardim do Sol' }) => {
  const [formData, setFormData] = useState<LeadFormData>({
    name: '',
    whatsapp: '',
    city: 'Uberlândia',
    developmentInterest: (initialDevelopment as any) || 'Park Jardim do Sol',
    monthlyIncome: 'R$ 4.000 a R$ 7.000',
    hasFgts: 'Sim',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Save lead in localStorage for CRM export / retrieval
    try {
      const existingLeads = JSON.parse(localStorage.getItem('inc_leads_crm') || '[]');
      const newLead = {
        ...formData,
        id: `lead_${Date.now()}`,
        createdAt: new Date().toISOString(),
      };
      localStorage.setItem('inc_leads_crm', JSON.stringify([...existingLeads, newLead]));
    } catch (err) {
      console.warn('LocalStorage error:', err);
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleOpenWhatsAppLead = () => {
    const text = `*Novo Contato via Site INC Empreendimentos*\n\n` +
      `👤 *Nome:* ${formData.name}\n` +
      `📱 *WhatsApp:* ${formData.whatsapp}\n` +
      `📍 *Cidade:* ${formData.city}\n` +
      `🏢 *Empreendimento:* ${formData.developmentInterest}\n` +
      `💰 *Renda Familiar:* ${formData.monthlyIncome}\n` +
      `💼 *Possui FGTS:* ${formData.hasFgts}\n` +
      (formData.message ? `💬 *Mensagem:* ${formData.message}` : '');

    window.open(getWhatsAppLink(text), '_blank');
  };

  return (
    <section
      id="contato"
      className="relative py-24 bg-[#080A0E] border-t border-white/5 overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#FF600B]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF600B]/10 border border-[#FF600B]/30 mb-4">
            <MessageSquare className="w-4 h-4 text-[#FF600B]" />
            <span className="text-xs font-bold text-[#FF8540] tracking-wider uppercase">
              Atendimento Direto & Exclusivo
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display mb-4">
            Formulário de Interesse
          </h2>

          <p className="text-base text-neutral-400 max-w-xl mx-auto">
            Preencha seus dados para receber a apresentação completa e a simulação personalizada com o Wesley.
          </p>
        </div>

        {/* Form Card */}
        <div className="rounded-3xl bg-gradient-to-b from-[#131722] to-[#0D1017] p-6 sm:p-10 border border-white/10 shadow-2xl relative">
          
          {submitted ? (
            <div className="text-center py-12 space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white font-display">
                  Informações registradas com sucesso!
                </h3>
                <p className="text-sm text-neutral-300 max-w-md mx-auto mt-2">
                  O Wesley recebeu seu interesse no <strong className="text-white">{formData.developmentInterest}</strong>.
                </p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleOpenWhatsAppLead}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-sm text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-900/30 transition-all cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Continuar conversa no WhatsApp</span>
                </button>

                <button
                  onClick={() => setSubmitted(false)}
                  className="w-full sm:w-auto px-6 py-4 rounded-xl font-semibold text-xs text-neutral-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
                >
                  Enviar outra mensagem
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                
                {/* Nome */}
                <div>
                  <label htmlFor="lead-name" className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-2">
                    Nome Completo *
                  </label>
                  <div className="relative">
                    <input
                      id="lead-name"
                      type="text"
                      required
                      placeholder="Ex: João da Silva"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#181E2B] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#FF600B] transition-colors"
                    />
                  </div>
                </div>

                {/* WhatsApp */}
                <div>
                  <label htmlFor="lead-whatsapp" className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-2">
                    WhatsApp / Telefone *
                  </label>
                  <div className="relative">
                    <input
                      id="lead-whatsapp"
                      type="tel"
                      required
                      placeholder="(34) 99999-9999"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      className="w-full bg-[#181E2B] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#FF600B] transition-colors"
                    />
                  </div>
                </div>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                
                {/* Cidade */}
                <div>
                  <label htmlFor="lead-city" className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-2">
                    Cidade *
                  </label>
                  <input
                    id="lead-city"
                    type="text"
                    required
                    placeholder="Ex: Uberlândia"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-[#181E2B] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#FF600B] transition-colors"
                  />
                </div>

                {/* Empreendimento de Interesse */}
                <div>
                  <label htmlFor="lead-development" className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-2">
                    Empreendimento de Interesse *
                  </label>
                  <select
                    id="lead-development"
                    value={formData.developmentInterest}
                    onChange={(e) => setFormData({ ...formData, developmentInterest: e.target.value as any })}
                    className="w-full bg-[#181E2B] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#FF600B] transition-colors"
                  >
                    <option value="Park Jardim do Sol">Park Jardim do Sol (Novo Mundo - Zona Leste)</option>
                    <option value="Park Espanha">Park Espanha (Jardim Espanha - Zona Sul)</option>
                    <option value="Unique Novo Mundo">Unique Novo Mundo (Novo Mundo - Zona Leste)</option>
                    <option value="Ainda não sei">Ainda não sei (Quero orientação)</option>
                  </select>
                </div>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                
                {/* Renda Familiar */}
                <div>
                  <label htmlFor="lead-income" className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-2">
                    Renda Familiar Estimada
                  </label>
                  <select
                    id="lead-income"
                    value={formData.monthlyIncome}
                    onChange={(e) => setFormData({ ...formData, monthlyIncome: e.target.value })}
                    className="w-full bg-[#181E2B] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#FF600B] transition-colors"
                  >
                    <option value="Até R$ 3.000">Até R$ 3.000</option>
                    <option value="R$ 3.000 a R$ 5.000">R$ 3.000 a R$ 5.000</option>
                    <option value="R$ 5.000 a R$ 8.000">R$ 5.000 a R$ 8.000</option>
                    <option value="R$ 8.000 a R$ 12.000">R$ 8.000 a R$ 12.000</option>
                    <option value="Acima de R$ 12.000">Acima de R$ 12.000</option>
                  </select>
                </div>

                {/* Possui FGTS? */}
                <div>
                  <label htmlFor="lead-fgts" className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-2">
                    Possui FGTS?
                  </label>
                  <select
                    id="lead-fgts"
                    value={formData.hasFgts}
                    onChange={(e) => setFormData({ ...formData, hasFgts: e.target.value as any })}
                    className="w-full bg-[#181E2B] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#FF600B] transition-colors"
                  >
                    <option value="Sim">Sim, possuo saldo</option>
                    <option value="Não">Não possuo</option>
                    <option value="Não tenho certeza">Não tenho certeza</option>
                  </select>
                </div>

              </div>

              {/* Mensagem Opcional */}
              <div>
                <label htmlFor="lead-message" className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-2">
                  Mensagem ou Dúvida (Opcional)
                </label>
                <textarea
                  id="lead-message"
                  rows={3}
                  placeholder="Gostaria de saber sobre metragens, entrada e visita..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#181E2B] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#FF600B] transition-colors resize-none"
                />
              </div>

              {/* Privacy note */}
              <div className="flex items-center gap-2 text-xs text-neutral-400">
                <ShieldCheck className="w-4 h-4 text-[#FF600B] shrink-0" />
                <span>Seus dados são protegidos e utilizados exclusivamente para atendimento da INC Empreendimentos.</span>
              </div>

              {/* Submit Button */}
              <button
                id="btn-lead-submit"
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-extrabold text-base text-white bg-[#FF600B] hover:bg-[#E05005] shadow-lg shadow-[#FF600B]/30 hover:shadow-[#FF600B]/50 transition-all duration-300 cursor-pointer active:scale-95 border border-[#FFA066]/30 disabled:opacity-50"
              >
                <MessageSquare className="w-5 h-5" />
                <span>{isSubmitting ? 'Registrando...' : 'Quero falar com Wesley'}</span>
              </button>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
