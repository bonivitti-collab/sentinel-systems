import React, { useState, useRef, useEffect } from 'react';
import { 
  Sparkles, 
  Send, 
  RotateCcw, 
  X, 
  Bot, 
  User, 
  Check, 
  ArrowRight,
  ShieldCheck,
  Compass
} from 'lucide-react';
import { soundFx } from './SoundEffects';

interface Message {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  bulletPoints?: string[];
  suggestedFollowUps?: string[];
  timestamp: string;
}

interface SentinelAIAdvisorProps {
  onOpenContact: (plan?: string) => void;
  isOpenMobile?: boolean;
  onCloseMobile?: () => void;
}

// Respostas inteligentes e corteses por tópico
const generateAiResponse = (query: string): { text: string; bulletPoints?: string[]; followUps?: string[] } => {
  const q = query.toLowerCase().trim();

  // 1. Cumprimentos
  if (q.startsWith('ola') || q.startsWith('olá') || q.startsWith('oi') || q.startsWith('bom dia') || q.startsWith('boa tarde') || q.startsWith('boa noite')) {
    return {
      text: 'Olá! É um prazer receber você aqui. Sou a assistente de consultoria da Sentinel Systems. Estou à disposição para analisar seu projeto, tirar dúvidas sobre SEO e Google Maps, demonstrar automações de WhatsApp ou dar sugestões estratégicas para o seu negócio. Como posso te orientar hoje?',
      bulletPoints: [
        'Dúvidas sobre criação e velocidade de sites (Edge Cloud)',
        'Estratégias de ranqueamento no topo do Google',
        'Fluxos de robô e triagem inteligente no WhatsApp 24h'
      ],
      followUps: [
        'Como colocar minha empresa no topo do Google?',
        'Por que ter um site além do Instagram?',
        'Como funciona o robô de WhatsApp 24h?'
      ]
    };
  }

  // 2. Google & SEO Local
  if (q.includes('google') || q.includes('seo') || q.includes('ranquear') || q.includes('topo') || q.includes('busca') || q.includes('maps')) {
    return {
      text: 'Estar bem posicionado no Google é a forma mais sólida de gerar vendas diárias, porque quem pesquisa já está no momento de compra. Para colocar sua empresa na primeira página, trabalhamos três pilares fundamentais:',
      bulletPoints: [
        'SEO Técnico com Schema.org: Código estruturado que avisa ao Google exatamente qual é o seu serviço, sua cidade e seu horário de atendimento.',
        'Velocidade Mobile abaixo de 0.8s: O Google prioriza sites ultrarrápidos para buscas feitas no celular.',
        'Sincronia com Google Maps: Otimização do Perfil da Empresa para aparecer no bloco de mapas local quando alguém pesquisa na sua região.'
      ],
      followUps: [
        'Qual a diferença entre tráfego pago e SEO orgânico?',
        'Quanto tempo leva para ranquear no Google?',
        'Como funciona o robô de WhatsApp após o clique no site?'
      ]
    };
  }

  // 3. Instagram vs Site Próprio
  if (q.includes('instagram') || q.includes('rede social') || q.includes('redes') || q.includes('depender')) {
    return {
      text: 'O Instagram é uma excelente vitrine de engajamento, mas depender unicamente dele traz grandes gargalos comerciais:',
      bulletPoints: [
        'Intenção de compra: No Instagram o público quer distração; no Google, ele pesquisa com urgência para contratar ou comprar.',
        'Algoritmo oscilante: Posts orgânicos no feed atingem menos de 6% dos seguidores, a menos que você invista continuamente em anúncios.',
        'Autoridade e Propriedade: Um site próprio com domínio oficial transmite profissionalismo imediato e você é o dono definitivo do canal, sem risco de bloqueios de conta.'
      ],
      followUps: [
        'Como unir Instagram, Google e WhatsApp no mesmo fluxo?',
        'Quanto custa manter um site profissional?',
        'Como o robô atende clientes que vêm do Instagram?'
      ]
    };
  }

  // 4. WhatsApp & Automação 24h
  if (q.includes('whatsapp') || q.includes('robô') || q.includes('robo') || q.includes('automação') || q.includes('automacao') || q.includes('atendimento')) {
    return {
      text: 'O consumidor moderno desiste da compra se esperar mais de 5 a 10 minutos por uma resposta no WhatsApp. A automação inteligente resolve esse gargalo sem desumanizar o contato:',
      bulletPoints: [
        'Resposta em 2 segundos: O robô cumprimenta o cliente na hora, mesmo de madrugada ou em finais de semana.',
        'Triagem & Qualificação: Identifica o que a pessoa precisa, envia cardápio, catálogo ou tabela de serviços e recolhe os dados principais.',
        'Direcionamento Preciso: Transfere a conversa para o atendente humano já com as informações organizadas, economizando tempo operacional da sua equipe.'
      ],
      followUps: [
        'O robô funciona no WhatsApp normal ou precisa de Business?',
        'Posso personalizar as mensagens com o meu estilo?',
        'Como testar o simulador de WhatsApp?'
      ]
    };
  }

  // 5. Nichos específicos: Restaurantes / Delivery
  if (q.includes('restaurante') || q.includes('delivery') || q.includes('comida') || q.includes('pizzaria') || q.includes('hamburgueria') || q.includes('lanche')) {
    return {
      text: 'Para gastronomia e delivery, o maior objetivo é proteger a margem de lucro e fidelizar o cliente:',
      bulletPoints: [
        'Cardápio Digital PWA: Abre instantaneamente no celular do cliente sem precisar baixar aplicativo nas lojas.',
        'Zero Comissões Abusivas: Cada pedido direto no seu cardápio economiza até 27% que seriam retidos por plataformas intermediárias.',
        'Comanda Formatada: O robô de WhatsApp recebe o pedido completo com endereço, forma de pagamento e envia direto para a cozinha.'
      ],
      followUps: [
        'Como incentivar clientes a pedirem direto pelo meu site?',
        'Como funciona a impressão de comandas?',
        'Qual o prazo para colocar o cardápio no ar?'
      ]
    };
  }

  // 6. Nichos específicos: Pousadas & Hotéis
  if (q.includes('pousada') || q.includes('hotel') || q.includes('turismo') || q.includes('reserva') || q.includes('hospedagem')) {
    return {
      text: 'Para hotelaria e turismo, o foco é converter visitantes noturnos e evitar perdas com comissões de OTAs:',
      bulletPoints: [
        'Galeria Imersiva: Apresenta fotos de alta qualidade das acomodações, café da manhã e áreas de lazer com carregamento ultrarrápido.',
        'Cotação 24h no WhatsApp: Muitos hóspedes planejam viagens tarde da noite; o robô informa valores de diárias e disponibilidade imediatamente.',
        'Reserva Direta com Sinal PIX: Incentivo com benefício exclusivo pelo site oficial para garantir a estadia sem repassar 18% a 25% a intermediários.'
      ],
      followUps: [
        'Como integrar as cotações de alta e baixa temporada?',
        'Posso receber sinal de reserva automaticamente?',
        'Como atrair turistas pelo Google da minha cidade?'
      ]
    };
  }

  // 7. Nichos específicos: Clínicas & Saúde
  if (q.includes('clinica') || q.includes('clínica') || q.includes('médic') || q.includes('dentista') || q.includes('saúde') || q.includes('psicolog')) {
    return {
      text: 'Na área de saúde e estética, a chave é transmitir credibilidade técnica e reduzir ausências nas consultas:',
      bulletPoints: [
        'Posicionamento de Autoridade: Apresentação da equipe médica, especialidades, registro profissional e avaliações de pacientes.',
        'Triagem de Convênios & Particular: O robô esclarece de antemão quais planos são aceitos e as especialidades atendidas.',
        'Lembretes Pré-Consulta: Confirmação automática de presença no dia anterior para diminuir a taxa de não comparecimento.'
      ],
      followUps: [
        'Como o robô realiza a triagem de agendamento?',
        'O site segue as normas éticas de conselhos de classe?',
        'Como pacientes encontram meu consultório no Google Maps?'
      ]
    };
  }

  // 8. Velocidade de carregamento & Engenharia
  if (q.includes('velocidade') || q.includes('rápido') || q.includes('0.4') || q.includes('tecnologia') || q.includes('performance') || q.includes('hospedagem')) {
    return {
      text: 'A velocidade de carregamento é um fator crítico para a conversão de vendas. Cada 1 segundo de atraso pode reduzir em até 20% a taxa de conversão:',
      bulletPoints: [
        'Edge Cloud Global: O site é distribuído em dezenas de servidores ao redor do mundo, abrindo em cerca de 0.4s em qualquer cidade brasileira.',
        'Código Moderno & Limpo: Sem temas pesados ou plugins inchados que travam celulares com conexões 3G/4G.',
        'Nota Máxima no Google PageSpeed: Garante privilégio algorítmico em relação aos concorrentes que utilizam estruturas ultrapassadas.'
      ],
      followUps: [
        'Vocês entregam o domínio registrado no meu CPF?',
        'Como são feitas as alterações e manutenções do site?',
        'Qual o prazo de implantação do projeto?'
      ]
    };
  }

  // 9. Processo, Prazos & Contratação
  if (q.includes('prazo') || q.includes('como funciona') || q.includes('contratar') || q.includes('processo') || q.includes('tempo')) {
    return {
      text: 'Nosso processo de trabalho foi desenhado para ser transparente, ágil e sem nenhuma sobrecarga para você:',
      bulletPoints: [
        'Passo 1 (Briefing Rápido): Coletamos suas fotos, serviços, diferenciais e preferências em uma conversa rápida de 15 minutos.',
        'Passo 2 (Desenvolvimento): Nossa engenharia cria o layout, programa as páginas e configura as regras do robô em até 7 dias úteis.',
        'Passo 3 (Homologação & Ativação): Você avalia tudo no ar, fazemos os ajustes finais e conectamos o domínio oficial no seu nome.',
        'Suporte Contínuo: Cuidamos da segurança, hospedagem e atualizações rotineiras para você manter o foco no seu negócio.'
      ],
      followUps: [
        'O domínio fica 100% no meu nome?',
        'Como funciona a Central de Atendimento?',
        'Quero iniciar meu projeto com a Sentinel'
      ]
    };
  }

  // Resposta padrão analítica e cortês
  return {
    text: `Excelente pergunta! Analisando sob a ótica de engenharia web e conversão de clientes para "${query}":`,
    bulletPoints: [
      'Estrutura com carregamento instantâneo (0.4s) para evitar que o visitante abandone o site.',
      'Otimização semântica para posicionar seus termos prioritários de busca no Google.',
      'Fluxo de atendimento integrado com WhatsApp para converter visitantes em conversas qualificadas.'
    ],
    followUps: [
      'Como funciona a criação de sites em 7 dias?',
      'Como o robô de WhatsApp qualifica os clientes?',
      'Quais são os diferenciais da Sentinel Systems?'
    ]
  };
};

export const SentinelAIAdvisor: React.FC<SentinelAIAdvisorProps> = ({ 
  onCloseMobile 
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome-msg',
      sender: 'ai',
      text: 'Olá! Sou a inteligência de consultoria da Sentinel Systems. Estou à disposição para tirar dúvidas sobre criação de sites, SEO no Google, automações no WhatsApp ou sugerir estratégias para o seu nicho. Como posso te orientar hoje?',
      suggestedFollowUps: [
        'Como colocar minha empresa na 1ª página do Google?',
        'Por que não depender apenas do Instagram?',
        'Como um robô no WhatsApp pode aumentar minhas vendas?',
        'Qual a estrutura recomendada para o meu negócio?'
      ],
      timestamp: 'Agora'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatBottomRef.current) {
      chatBottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  const handleSendMessage = (textToSend?: string) => {
    const query = (textToSend || inputValue).trim();
    if (!query) return;

    soundFx.playUiClick();

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const response = generateAiResponse(query);
      const aiMsg: Message = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: response.text,
        bulletPoints: response.bulletPoints,
        suggestedFollowUps: response.followUps,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 450);
  };

  const handleResetChat = () => {
    soundFx.playUiClick();
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        sender: 'ai',
        text: 'Conversa reiniciada. Sou a assistente de cortesia da Sentinel Systems. Escolha uma das sugestões abaixo ou digite qualquer dúvida que tiver:',
        suggestedFollowUps: [
          'Como funciona a criação de sites em 7 dias?',
          'Como colocar minha empresa na 1ª página do Google?',
          'Por que um site rápido vende mais que redes sociais?',
          'Como o robô atende clientes no WhatsApp 24h?'
        ],
        timestamp: 'Agora'
      }
    ]);
  };

  return (
    <div className="flex flex-col h-full bg-white text-slate-800 border-l border-slate-200/90 shadow-sm relative overflow-hidden font-sans">
      
      {/* 1. HEADER (Limpo, Elegante e Sóbrio - Sem badge de vendas) */}
      <div className="p-3.5 bg-white border-b border-slate-100 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-600 via-sky-600 to-indigo-600 flex items-center justify-center text-white shadow-2xs">
            <Sparkles className="w-4 h-4" />
          </div>

          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-xs text-slate-900 tracking-tight">Sentinel AI</span>
            </div>
            <div className="text-[10px] text-slate-500 flex items-center gap-1 mt-0.5 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Consultoria & Orientação Técnica</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={handleResetChat}
            className="p-1.5 rounded-md text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer"
            title="Reiniciar conversa"
            aria-label="Reiniciar conversa"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>

          {onCloseMobile && (
            <button
              onClick={onCloseMobile}
              className="p-1.5 rounded-md text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer lg:hidden"
              aria-label="Fechar painel"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* 2. CHAT STREAM (Espaço de diálogo limpo e cortês) */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-0 scrollbar-thin scrollbar-thumb-slate-200">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'} space-y-1.5`}
          >
            <div className="flex items-center gap-1.5 text-[10px] text-slate-400 px-1 font-medium">
              {msg.sender === 'user' ? (
                <>
                  <span>Você</span>
                  <User className="w-3 h-3 text-slate-400" />
                </>
              ) : (
                <>
                  <Bot className="w-3 h-3 text-cyan-600" />
                  <span className="text-cyan-800 font-semibold">Sentinel AI</span>
                </>
              )}
              <span>•</span>
              <span>{msg.timestamp}</span>
            </div>

            <div
              className={`max-w-[92%] p-3.5 rounded-xl text-xs leading-relaxed transition-all ${
                msg.sender === 'user'
                  ? 'bg-slate-900 text-white rounded-tr-none shadow-2xs font-medium'
                  : 'bg-slate-50 border border-slate-200/90 text-slate-800 rounded-tl-none shadow-2xs space-y-2.5'
              }`}
            >
              <p className="whitespace-pre-line">{msg.text}</p>

              {msg.bulletPoints && msg.bulletPoints.length > 0 && (
                <div className="space-y-1.5 pt-1 border-t border-slate-200/60 mt-2">
                  {msg.bulletPoints.map((bp, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-[11px] text-slate-700">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{bp}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Sugestões dinâmicas de continuação (Instigando o uso) */}
            {msg.suggestedFollowUps && msg.suggestedFollowUps.length > 0 && (
              <div className="pt-2 w-full space-y-1.5 pl-1">
                <div className="text-[10px] font-semibold text-slate-400 flex items-center gap-1">
                  <Compass className="w-3 h-3 text-cyan-600" />
                  <span>Sugestões para explorar:</span>
                </div>
                <div className="flex flex-col gap-1.5">
                  {msg.suggestedFollowUps.map((fu, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSendMessage(fu)}
                      className="text-left px-3 py-2 rounded-md bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 hover:text-slate-950 text-[11px] font-medium transition-all shadow-2xs flex items-center justify-between group cursor-pointer"
                    >
                      <span className="line-clamp-2">{fu}</span>
                      <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-cyan-600 group-hover:translate-x-0.5 transition-all shrink-0 ml-1.5" />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Indicador de Digitação */}
        {isTyping && (
          <div className="flex items-center gap-2 text-xs text-slate-500 pl-1 py-1">
            <div className="w-6 h-6 rounded-md bg-cyan-50 border border-cyan-200 flex items-center justify-center">
              <Bot className="w-3.5 h-3.5 text-cyan-600" />
            </div>
            <span className="text-[11px] font-medium animate-pulse">Digitando resposta...</span>
          </div>
        )}

        <div ref={chatBottomRef} />
      </div>

      {/* 3. INPUT BAR (Estilo Minimalista, Sofisticado e Funcional) */}
      <div className="p-3 bg-white border-t border-slate-100 shrink-0">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="relative flex items-center"
        >
          <input
            type="text"
            placeholder="Pergunte qualquer coisa sobre sites, SEO ou WhatsApp..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-md pl-3 pr-11 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-400 focus:bg-white transition-all"
          />
          <button
            type="submit"
            disabled={!inputValue.trim()}
            className="absolute right-1.5 p-1.5 rounded-md bg-slate-900 hover:bg-slate-800 disabled:opacity-20 disabled:hover:bg-slate-900 text-white transition-all cursor-pointer"
            aria-label="Enviar mensagem"
          >
            <Send className="w-3.5 h-3.5" />
          </button>
        </form>

        <div className="flex items-center justify-between mt-2 text-[9px] text-slate-400 px-1 font-medium">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3 h-3 text-emerald-600" />
            <span>IA Consultiva de Cortesia</span>
          </span>
          <span>Sentinel Systems Brasil</span>
        </div>
      </div>

    </div>
  );
};

export default SentinelAIAdvisor;
