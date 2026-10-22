import React from 'react';
import { Coffee, Printer, Hotel, Wrench, ArrowRight, Check } from 'lucide-react';
import { soundFx } from './SoundEffects';

interface LocalClientsProps {
  onOpenContact: () => void;
}

export const LocalClients: React.FC<LocalClientsProps> = ({ onOpenContact }) => {
  const examples = [
    {
      icon: Printer,
      title: 'A Gráfica & Comunicação Visual',
      location: 'Comércio & Serviços',
      pain: 'O cliente precisa de panfletos, faixas ou cartões com urgência e pesquisa no Google.',
      solution: 'Seu site aparece em 1º lugar com o botão do WhatsApp direto pro seu balcão.',
      result: 'Até 4x mais orçamentos diários sem depender de postar no feed todo dia.'
    },
    {
      icon: Coffee,
      title: 'O Café & Gastronomia',
      location: 'Bares & Restaurantes',
      pain: 'Clientes e turistas procurando onde comer bem e querendo ver o cardápio com agilidade.',
      solution: 'Site elegante com fotos dos pratos, mapa de localização e cardápio interativo.',
      result: 'Mesas cheias, visibilidade no Google Maps e pedidos de delivery pelo WhatsApp.'
    },
    {
      icon: Hotel,
      title: 'Pousadas & Hospedagem',
      location: 'Turismo & Temporada',
      pain: 'Pagar 18% a 25% de comissão abusiva para plataformas de reserva online.',
      solution: 'Site próprio lindo com fotos em alta definição e botão de reserva direta no WhatsApp.',
      result: 'Mais lucro líquido no seu bolso e contato direto com o hóspede sem taxas.'
    },
    {
      icon: Wrench,
      title: 'Clínicas, Consultórios & Serviços',
      location: 'Saúde & Manutenção',
      pain: 'Clientes chamando fora de hora ou desistindo pela demora na resposta.',
      solution: 'Robô inteligente que passa horários disponíveis, valores e qualifica o cliente 24h.',
      result: 'Agenda cheia sem você precisar ficar preso ao telefone o dia todo.'
    }
  ];

  return (
    <section id="quem-atendemos" className="py-20 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Exemplos Reais de Quem{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-purple-600">
              Vende Mais com a Sentinel
            </span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Não importa se você tem uma loja de bairro ou um negócio de alto padrão: nossa estrutura foi desenhada para colocar dinheiro no seu caixa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {examples.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200 hover:border-cyan-400 transition-all duration-300 shadow-xs hover:shadow-lg flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-[10px] font-bold tracking-wider uppercase text-cyan-700 block mb-1">
                    {item.location}
                  </span>

                  <h3 className="font-extrabold text-slate-900 text-base mb-3">
                    {item.title}
                  </h3>

                  <div className="space-y-2 text-xs text-slate-600 mb-4">
                    <p><strong>Cenário:</strong> {item.pain}</p>
                    <p><strong>O que fazemos:</strong> {item.solution}</p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200">
                  <div className="text-[11px] font-bold text-emerald-700 flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 shrink-0" />
                    <span>{item.result}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => {
              soundFx.playUiClick();
              onOpenContact();
            }}
            className="inline-flex items-center gap-2 text-xs font-bold text-cyan-700 hover:text-cyan-800 transition-colors cursor-pointer"
          >
            <span>Ver como podemos aplicar essa estrutura no seu segmento</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
export default LocalClients;
