import React, { useState } from 'react';
import { MessageCircle, Send, CheckCheck, RefreshCw } from 'lucide-react';
import { soundFx } from './SoundEffects';

interface FlowStep {
  sender: 'user' | 'bot';
  text: string;
  time: string;
  options?: string[];
}

interface AutomationFlow {
  id: string;
  title: string;
  badge: string;
  description: string;
  steps: FlowStep[];
}

const FLOWS: AutomationFlow[] = [
  {
    id: 'restaurante',
    title: 'Restaurante & Delivery',
    badge: 'Cardápio Digital & Pedidos',
    description: 'O cliente manda mensagem à noite e em 2 segundos já recebe o cardápio e faz o pedido sem filas.',
    steps: [
      { sender: 'user', text: 'Boa noite! Vocês ainda estão entregando hoje?', time: '21:14' },
      {
        sender: 'bot',
        text: 'Olá! Seja muito bem-vindo ao Parrilla Prime! 🥩🔥\n\nSim, estamos abertos e com entregas a todo vapor até as 23h30!',
        time: '21:14'
      },
      {
        sender: 'bot',
        text: 'Como posso te atender agora?\n1️⃣ Ver Cardápio & Fazer Pedido\n2️⃣ Saber Taxa de Entrega\n3️⃣ Reservar Mesa para Amanhã\n4️⃣ Falar com o Balcão',
        time: '21:14',
        options: ['1️⃣ Ver Cardápio & Pedir', '3️⃣ Reservar Mesa']
      },
      { sender: 'user', text: '1️⃣ Ver Cardápio & Pedir', time: '21:15' },
      {
        sender: 'bot',
        text: 'Perfeito! Acesse nosso cardápio com fotos reais dos pratos:\n👉 https://cardapio.parrillaprime.com.br\n\nBasta escolher seus itens e a sua comanda já chega impressa direto na nossa cozinha!',
        time: '21:15'
      }
    ]
  },
  {
    id: 'pousada',
    title: 'Pousadas & Hotéis',
    badge: 'Cotação de Diárias 24h',
    description: 'Responde turistas de madrugada com fotos das suítes e valores exatos das diárias.',
    steps: [
      { sender: 'user', text: 'Olá, gostaria de saber valor de diária para o próximo feriado.', time: '23:42' },
      {
        sender: 'bot',
        text: 'Olá! Que prazer receber seu contato na Pousada Costa do Sol! 🌊☀️\n\nSou o assistente digital 24h da pousada. Para te passar as melhores opções com desconto direto:',
        time: '23:42'
      },
      {
        sender: 'bot',
        text: 'Qual suíte você prefere conhecer?\n1️⃣ Suíte Master com Hidro e Vista Mar\n2️⃣ Suíte Luxo Casal\n3️⃣ Quarto Família (até 4 pessoas)',
        time: '23:42',
        options: ['1️⃣ Suíte Master Hidro', '2️⃣ Suíte Luxo Casal']
      },
      { sender: 'user', text: '1️⃣ Suíte Master Hidro', time: '23:43' },
      {
        sender: 'bot',
        text: 'Excelente escolha! A Suíte Master tem cama King, varanda panorâmica e hidromassagem dupla.\n\nPara o feriado temos as últimas 2 unidades com 15% OFF reservando direto aqui: R$ 580/diária com café artesanal incluso.\n\nDeseja pré-reservar suas datas agora?',
        time: '23:43'
      }
    ]
  },
  {
    id: 'clinica',
    title: 'Clínicas & Consultórios',
    badge: 'Triagem & Agendamento',
    description: 'Qualifica o paciente, confere o convênio e agenda o melhor horário automaticamente.',
    steps: [
      { sender: 'user', text: 'Bom dia, vocês aceitam convênio Bradesco Saúde?', time: '07:18' },
      {
        sender: 'bot',
        text: 'Bom dia! Bem-vindo à Clínica Integrada de Saúde. 🩺✨\n\nSim, aceitamos Bradesco Saúde, Unimed, SulAmérica e consultas particulares com reembolso!',
        time: '07:18'
      },
      {
        sender: 'bot',
        text: 'Para qual especialidade médica você busca atendimento hoje?',
        time: '07:18',
        options: ['Cardiologia', 'Dermatologia', 'Ortopedia']
      },
      { sender: 'user', text: 'Dermatologia', time: '07:19' },
      {
        sender: 'bot',
        text: 'Ótimo! Temos a Dra. Camila com horários disponíveis nesta quinta-feira (14:30) e sexta-feira (10:00).\n\nQual desses horários fica melhor para você confirmar?',
        time: '07:19'
      }
    ]
  },
  {
    id: 'orcamento',
    title: 'Orçamentos & Prestadores',
    badge: 'Qualificação Instantânea',
    description: 'Coleta metragem, tipo de serviço e envia estimativa preliminar para o seu comercial.',
    steps: [
      { sender: 'user', text: 'Olá, preciso de um orçamento para reforma e pintura do meu apartamento.', time: '13:05' },
      {
        sender: 'bot',
        text: 'Olá! Obrigado pelo contato com a Vitti Engenharia & Reformas! 📐🏗️\n\nVou te fazer 3 perguntas rápidas de 30 segundos para montarmos sua estimativa técnica:',
        time: '13:05'
      },
      {
        sender: 'bot',
        text: 'Qual é o tamanho aproximado do imóvel?',
        time: '13:05',
        options: ['Até 70 m²', 'De 70 a 150 m²', 'Mais de 150 m²']
      },
      { sender: 'user', text: 'De 70 a 150 m²', time: '13:06' },
      {
        sender: 'bot',
        text: 'Perfeito! Já registramos a metragem. Nosso engenheiro técnico já recebeu seus dados e entrará em contato em instantes com o cronograma de visita!\n\nSe tiver fotos da planta, pode enviar aqui mesmo.',
        time: '13:06'
      }
    ]
  }
];

export const WhatsAppSimulator: React.FC = () => {
  const [activeFlowId, setActiveFlowId] = useState<string>(FLOWS[0].id);
  const [stepIndex, setStepIndex] = useState<number>(3); // starts with initial messages visible

  const currentFlow = FLOWS.find((f) => f.id === activeFlowId) || FLOWS[0];

  const handleSelectFlow = (id: string) => {
    soundFx.playUiClick();
    setActiveFlowId(id);
    setStepIndex(3);
  };

  const handleNextStep = () => {
    soundFx.playUiClick();
    if (stepIndex < currentFlow.steps.length) {
      setStepIndex((prev) => prev + 1);
    } else {
      setStepIndex(2);
    }
  };

  const handleReset = () => {
    soundFx.playUiClick();
    setStepIndex(2);
  };

  const visibleSteps = currentFlow.steps.slice(0, stepIndex);

  return (
    <div className="w-full">
      {/* Flow Selection Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
        {FLOWS.map((flow) => {
          const isSelected = flow.id === currentFlow.id;
          return (
            <button
              key={flow.id}
              onClick={() => handleSelectFlow(flow.id)}
              className={`px-4 py-2.5 rounded-full text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                isSelected
                  ? 'bg-emerald-600 text-white shadow-md scale-105 ring-2 ring-emerald-400'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <span>{flow.title}</span>
              {isSelected && <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />}
            </button>
          );
        })}
      </div>

      {/* Simulator Container */}
      <div className="max-w-md mx-auto bg-slate-900 rounded-[38px] p-3 border-4 border-slate-800 shadow-2xl relative overflow-hidden">
        {/* Notch */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-4 bg-slate-950 rounded-full z-20 flex items-center justify-center">
          <span className="w-2.5 h-2.5 rounded-full bg-slate-800" />
        </div>

        {/* WhatsApp App Screen */}
        <div className="bg-[#0b141a] rounded-[28px] overflow-hidden pt-8 flex flex-col h-[560px] text-slate-100 relative">
          {/* WhatsApp Header */}
          <div className="bg-[#202c33] px-3.5 py-2.5 flex items-center justify-between border-b border-[#2a3942] z-10">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs border border-emerald-400/40">
                <MessageCircle className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <div className="text-xs font-bold text-white leading-tight flex items-center gap-1.5">
                  <span>{currentFlow.title}</span>
                  <span className="text-[9px] px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-400 font-normal">
                    Robô IA
                  </span>
                </div>
                <div className="text-[10px] text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>online 24h &bull; responde em segundos</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleReset}
              title="Reiniciar simulação"
              className="p-1.5 rounded-full hover:bg-slate-700/60 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Messages Body */}
          <div className="flex-1 p-3 overflow-y-auto space-y-2.5 bg-[#0b141a] bg-opacity-90">
            <div className="text-center my-2">
              <span className="px-2.5 py-1 rounded-md bg-[#182229] text-[10px] text-slate-400 font-medium">
                Hoje &bull; Atendimento Automático Sentinel
              </span>
            </div>

            {visibleSteps.map((step, idx) => {
              const isUser = step.sender === 'user';
              return (
                <div key={idx} className={`flex ${isUser ? 'justify-end' : 'justify-start'} animate-fade-in`}>
                  <div
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2 text-xs shadow-sm relative ${
                      isUser
                        ? 'bg-[#005c4b] text-[#e9edef] rounded-tr-xs'
                        : 'bg-[#202c33] text-[#d1d7db] rounded-tl-xs'
                    }`}
                  >
                    <p className="whitespace-pre-line leading-relaxed">{step.text}</p>
                    <div className="flex items-center justify-end gap-1 mt-1 text-[9px] text-slate-400">
                      <span>{step.time}</span>
                      {isUser && <CheckCheck className="w-3.5 h-3.5 text-[#53bdeb]" />}
                    </div>

                    {/* Interactive Options Chips */}
                    {step.options && stepIndex <= idx + 1 && (
                      <div className="mt-2.5 pt-2 border-t border-[#2a3942] flex flex-wrap gap-1.5">
                        {step.options.map((opt, oIdx) => (
                          <button
                            key={oIdx}
                            onClick={handleNextStep}
                            className="px-2.5 py-1 rounded-full bg-emerald-500/20 hover:bg-emerald-500 text-emerald-300 hover:text-slate-950 font-bold text-[10px] transition-all border border-emerald-500/30 cursor-pointer"
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* WhatsApp Bottom Input Bar */}
          <div className="bg-[#202c33] px-3 py-2 flex items-center gap-2 border-t border-[#2a3942]">
            <div className="flex-1 bg-[#2a3942] rounded-full px-4 py-2 text-xs text-slate-400">
              {stepIndex < currentFlow.steps.length
                ? 'Toque nas opções acima ou continue...'
                : 'Fluxo concluído com sucesso! ✅'}
            </div>
            <button
              onClick={handleNextStep}
              className="w-8 h-8 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center hover:bg-emerald-400 transition-transform hover:scale-105 cursor-pointer shrink-0"
              title="Avançar conversa"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      <div className="text-center mt-4">
        <p className="text-xs text-slate-500">
          * Demonstração real do comportamento do robô em ação. O fluxo é 100% personalizado com as regras e produtos do seu negócio.
        </p>
      </div>
    </div>
  );
};

export default WhatsAppSimulator;
