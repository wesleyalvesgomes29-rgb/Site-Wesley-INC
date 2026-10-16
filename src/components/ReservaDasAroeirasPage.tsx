import React from 'react';
import {
  ArrowLeft, ArrowRight, Building2, CheckCircle2, Compass, Dumbbell,
  Heart, MapPin, MessageCircle, PawPrint, Trees, Waves, Baby,
  Clapperboard, Flame, Bike, Sofa, Sparkles, ShieldCheck,
} from 'lucide-react';
import { getWhatsAppLink } from '../data/config';

interface ReservaDasAroeirasPageProps {
  onNavigateToHome: () => void;
}

const WHATSAPP_LINK = getWhatsAppLink(
  'Olá Wesley! Quero conhecer o Reserva das Aroeiras e saber as condições atuais.'
);

const images = {
  tower: 'https://cdn.sanity.io/images/j434ju4g/production/055cf9e6c43ce8828663a836cb856ee291ad1bb4-15000x8439.jpg?rect=2701%2C0%2C9599%2C8439&w=1200&h=1054&fit=crop&fm=webp&q=80',
  cinema: 'https://cdn.sanity.io/images/j434ju4g/production/dba4fe617b9940f96c34b55eafa52ff78d422664-5504x3072.png?rect=1005%2C0%2C3494%2C3072&w=900&h=620&fit=crop&fm=webp&q=80',
  meio: 'https://www.meuinc.com.br/_next/image?q=75&url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fj434ju4g%2Fproduction%2F71195f3f0152f38aeed2201fb6d2932aa81e363b-3000x3000.png%3Fw%3D320%26h%3D320%26fm%3Dwebp&w=640',
  ponta: 'https://www.meuinc.com.br/_next/image?q=75&url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fj434ju4g%2Fproduction%2F779168cecb24a5875db90824a6a026ac0f672aa2-3000x3000.png%3Fw%3D320%26h%3D320%26fm%3Dwebp&w=640',
};

const amenities = [
  { icon: Waves, title: 'Piscina e solarium', text: 'Um espaço para relaxar e aproveitar os dias de sol.' },
  { icon: Sofa, title: 'Espaço gourmet', text: 'Ambiente para reunir a família e os amigos.' },
  { icon: Flame, title: 'Espaço Toscana', text: 'Área de convivência com forno de pizza.' },
  { icon: Clapperboard, title: 'Cinema ao ar livre', text: 'Sessões e momentos especiais sem sair do condomínio.' },
  { icon: PawPrint, title: 'Parcão', text: 'Espaço dedicado para os pets.' },
  { icon: Baby, title: 'Espaço bebê', text: 'Uma área pensada para os pequenos.' },
  { icon: Dumbbell, title: 'Espaço fitness', text: 'Opção para manter o corpo em movimento.' },
  { icon: Trees, title: 'Horta, pomar e redário', text: 'Áreas abertas para descansar e estar perto da natureza.' },
  { icon: Bike, title: 'Bicicletário', text: 'Mais praticidade para a rotina.' },
];

export const ReservaDasAroeirasPage: React.FC<ReservaDasAroeirasPageProps> = ({ onNavigateToHome }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = el.getBoundingClientRect().top + window.pageYOffset - 112;
    window.scrollTo({ top: offset, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#080A0E] text-neutral-100 pt-20">
      <div className="sticky top-[68px] z-40 border-b border-white/10 bg-[#0D1017]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <button onClick={onNavigateToHome} className="inline-flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2 text-sm font-medium text-neutral-300 transition hover:bg-white/10 hover:text-white">
            <ArrowLeft className="h-4 w-4 text-[#FF600B]" /> Início
          </button>
          <div className="flex flex-wrap items-center gap-1.5">
            {[
              ['sobre', 'Sobre'],
              ['lazer', 'Lazer'],
              ['plantas', 'Plantas'],
              ['localizacao', 'Localização'],
            ].map(([id, label]) => (
              <button key={id} onClick={() => scrollTo(id)} className="rounded-lg border border-white/5 bg-[#141824] px-3 py-2 text-xs font-semibold text-neutral-300 transition hover:border-[#FF600B] hover:bg-[#FF600B] hover:text-white">
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section id="sobre" className="relative overflow-hidden border-b border-white/5 bg-gradient-to-br from-[#0C111A] via-[#101621] to-[#080A0E]">
        <div className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-[#FF600B]/15 blur-[110px]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:px-8 lg:py-20">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#FF600B]/30 bg-[#FF600B]/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#FF8540]">
              <span className="h-2 w-2 rounded-full bg-[#FF600B]" /> Lançamento INC · Uberlândia
            </div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-neutral-400">Novo Mundo · Uberlândia/MG</p>
            <h1 className="max-w-2xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Reserva das <span className="text-[#FF600B]">Aroeiras</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-neutral-300">
              Viva a vida no seu ritmo. Um condomínio com torre única, plantas funcionais e espaços de lazer para diferentes momentos da rotina.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#FF600B] px-5 py-3.5 font-bold text-white shadow-lg shadow-[#FF600B]/20 transition hover:bg-[#E65308]">
                <MessageCircle className="h-5 w-5" /> Falar com Wesley
              </a>
              <button onClick={() => scrollTo('plantas')} className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3.5 font-bold text-neutral-100 transition hover:border-[#FF600B]/60 hover:bg-white/10">
                Conhecer as plantas <ArrowRight className="h-4 w-4 text-[#FF600B]" />
              </button>
            </div>
            <p className="mt-4 max-w-xl text-xs leading-relaxed text-neutral-500">
              Imagens ilustrativas. Valores, disponibilidade e condições devem ser confirmados com a equipe comercial.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-3 rounded-[2rem] border border-[#FF600B]/25" />
            <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#111722] shadow-2xl">
              <img src={images.tower} alt="Imagem ilustrativa da torre do Reserva das Aroeiras" className="h-[390px] w-full object-cover sm:h-[520px]" loading="eager" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#080A0E] via-[#080A0E]/65 to-transparent p-5 pt-20 sm:p-7 sm:pt-24">
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  <MapPin className="h-4 w-4 text-[#FF600B]" /> Bairro Novo Mundo · Uberlândia
                </div>
                <p className="mt-1 text-xs text-neutral-300">Projeto da INC Empreendimentos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-2 gap-3 px-4 py-7 sm:px-6 md:grid-cols-4 lg:px-8">
        {[
          ['336', 'apartamentos'],
          ['26', 'pavimentos · térreo + 25'],
          ['5', 'elevadores'],
          ['37,98–41,20 m²', 'metragem das plantas'],
        ].map(([value, label]) => (
          <div key={label} className="rounded-2xl border border-white/10 bg-gradient-to-b from-[#151A25] to-[#0D1017] p-4 sm:p-5">
            <p className="text-2xl font-black tracking-tight text-[#FF600B] sm:text-3xl">{value}</p>
            <p className="mt-1 text-xs leading-relaxed text-neutral-300 sm:text-sm">{label}</p>
          </div>
        ))}
      </section>

      <section id="lazer" className="border-y border-white/5 bg-[#0D1017] py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#FF600B]">Mais momentos no seu dia</p>
              <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">Lazer para viver e compartilhar</h2>
            </div>
            <p className="max-w-lg text-sm leading-relaxed text-neutral-400">O material comercial descreve 18 espaços de lazer. Veja alguns dos ambientes previstos no projeto.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {amenities.map(({ icon: Icon, title, text }) => (
              <div key={title} className="group flex gap-4 rounded-2xl border border-white/10 bg-[#111722] p-5 transition hover:border-[#FF600B]/40">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FF600B]/10 text-[#FF600B] transition group-hover:bg-[#FF600B] group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-neutral-400">{text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <img src={images.cinema} alt="Imagem ilustrativa de área de cinema ao ar livre" className="h-64 w-full rounded-2xl border border-white/10 object-cover" loading="lazy" />
            <div className="flex flex-col justify-center rounded-2xl border border-white/10 bg-[#111722] p-6 sm:p-8">
              <div className="mb-3 flex items-center gap-2 text-[#FF600B]"><Sparkles className="h-5 w-5" /><span className="text-xs font-bold uppercase tracking-[0.18em]">Condomínio-clube</span></div>
              <h3 className="text-2xl font-black text-white">Espaços para diferentes estilos de vida</h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-400">Piscina, espaço gourmet, praça da fogueira, redário, horta e pomar, espaço de jogos e áreas para crianças e pets estão entre os ambientes apresentados no material do empreendimento.</p>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex w-fit items-center gap-2 font-bold text-[#FF8540] hover:text-white">Perguntar sobre o lazer <ArrowRight className="h-4 w-4" /></a>
            </div>
          </div>
        </div>
      </section>

      <section id="plantas" className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 max-w-3xl">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#FF600B]">Seu espaço, seu jeito</p>
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">Conheça as plantas</h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-400">As plantas abaixo seguem as informações divulgadas na página oficial do empreendimento. Consulte a equipe para confirmar tipologia e disponibilidade de cada unidade.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {[
              { title: 'Planta Meio', area: '39,02 m²', description: 'Planta de 2 dormitórios com distribuição funcional dos ambientes.', image: images.meio },
              { title: 'Planta Ponta', area: '41,20 m²', description: 'Planta de 2 dormitórios com metragem maior entre as opções divulgadas.', image: images.ponta },
            ].map((plan) => (
              <article key={plan.title} className="overflow-hidden rounded-2xl border border-white/10 bg-[#111722]">
                <div className="flex h-72 items-center justify-center bg-white p-3 sm:h-80">
                  <img src={plan.image} alt={plan.title + ' do Reserva das Aroeiras'} className="h-full w-full object-contain" loading="lazy" />
                </div>
                <div className="p-5 sm:p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div><h3 className="text-xl font-black text-white">{plan.title}</h3><p className="mt-1 text-sm text-neutral-400">{plan.description}</p></div>
                    <span className="rounded-lg bg-[#FF600B]/10 px-3 py-1.5 text-sm font-black text-[#FF8540]">{plan.area}</span>
                  </div>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#FF8540] hover:text-white">Consultar disponibilidade <ArrowRight className="h-4 w-4" /></a>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-5 rounded-2xl border border-[#FF600B]/20 bg-[#FF600B]/5 p-5">
            <div className="flex gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#FF600B]" />
              <div><p className="font-bold text-white">Outras tipologias no material comercial</p><p className="mt-1 text-sm leading-relaxed text-neutral-300">A apresentação também identifica a planta Núcleo, com 37,98 m², e a versão Núcleo PCD. Peça ao consultor as plantas completas e a disponibilidade atualizada.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section id="localizacao" className="border-t border-white/5 bg-[#0D1017] py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#FF600B]">Novo Mundo · Uberlândia/MG</p>
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">Uma localização conectada à cidade</h2>
            <p className="mt-4 leading-relaxed text-neutral-300">O Reserva das Aroeiras fica na Rua Antônio Cândido, Lote 1A, Quadra 19, no bairro Novo Mundo, em Uberlândia/MG. O terreno tem fundos para a Rua Aluísio Azevedo.</p>
            <div className="mt-5 flex items-start gap-3 rounded-xl border border-white/10 bg-[#111722] p-4">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#FF600B]" />
              <div><p className="font-bold text-white">Endereço do empreendimento</p><p className="mt-1 text-sm text-neutral-400">Rua Antônio Cândido, Lote 1A, Quadra 19 · Novo Mundo · Uberlândia/MG</p></div>
            </div>
            <a href="https://www.google.com/maps/search/?api=1&query=Rua+Ant%C3%B4nio+C%C3%A2ndido+Lote+1A+Quadra+19+Novo+Mundo+Uberl%C3%A2ndia+MG" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-xl border border-white/15 px-4 py-3 text-sm font-bold text-white transition hover:border-[#FF600B]/60 hover:bg-white/5">
              <Compass className="h-4 w-4 text-[#FF600B]" /> Abrir localização no mapa
            </a>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#111722] p-6 sm:p-8">
            <div className="flex items-center gap-3"><div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FF600B]/10 text-[#FF600B]"><Building2 className="h-6 w-6" /></div><div><p className="font-bold text-white">Reserva das Aroeiras</p><p className="text-sm text-neutral-400">INC Empreendimentos</p></div></div>
            <div className="mt-6 space-y-4">
              {[
                ['Torre única residencial', '336 apartamentos · 26 pavimentos'],
                ['Circulação vertical', '5 elevadores até o último pavimento'],
                ['Estacionamento', '181 vagas descobertas de uso comum: 170 para carros e 11 para motos'],
              ].map(([title, detail]) => (
                <div key={title} className="flex gap-3 border-b border-white/5 pb-4 last:border-0 last:pb-0">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#FF600B]" />
                  <div><p className="text-sm font-bold text-white">{title}</p><p className="mt-1 text-sm leading-relaxed text-neutral-400">{detail}</p></div>
                </div>
              ))}
            </div>
            <p className="mt-5 text-xs leading-relaxed text-neutral-500">As vagas são de uso comum e não representam garantia de uma vaga exclusiva por apartamento. Confirme as regras de uso com a INC.</p>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-6 rounded-3xl border border-[#FF600B]/25 bg-gradient-to-br from-[#171B25] to-[#0D1017] p-6 sm:flex-row sm:items-center sm:p-10">
          <div>
            <div className="mb-2 flex items-center gap-2 text-[#FF600B]"><Heart className="h-4 w-4" /><span className="text-xs font-bold uppercase tracking-[0.18em]">Seu próximo capítulo</span></div>
            <h2 className="text-2xl font-black text-white sm:text-3xl">Quer conhecer o Reserva das Aroeiras?</h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-neutral-400">Fale comigo para consultar valores, condições de financiamento e disponibilidade atualizada.</p>
          </div>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#FF600B] px-5 py-3.5 font-bold text-white transition hover:bg-[#E65308]">
            <MessageCircle className="h-5 w-5" /> Chamar no WhatsApp <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </div>
  );
};
