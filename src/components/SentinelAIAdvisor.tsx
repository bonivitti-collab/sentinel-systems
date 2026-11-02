import React, { useState, useRef, useEffect } from 'react';
import { 
  Bot, 
  Send, 
  Sparkles, 
  RotateCcw, 
  ArrowRight, 
  MessageCircle, 
  X
} from 'lucide-react';
import { soundFx } from './SoundEffects';

interface Message {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  time: string;
  suggestions?: string[];
  cta?: {
    label: string;
    actionMessage: string;
  };
}

interface SentinelAIAdvisorProps {
  onOpenContact: (plan?: string) => void;
  isOpenMobile?: boolean;
  onCloseMobile?: () => void;
}

export const SentinelAIAdvisor: React.FC<SentinelAIAdvisorProps> = ({ 
  onOpenContact: _onOpenContact,
  onCloseMobile 
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome-1',
      sender: 'ai',
      text: 'Olá! Sou a **Sentinel AI**, especialista em Vendas, Marketing Online e SEO para empresas em todo o Brasil. 🚀\n\nEstou aqui gratuitamente para analisar o seu negócio e te mostrar como atrair clientes prontos para comprar no Google e fechar pedidos no WhatsApp 24h por dia.\n\n**Qual é o seu nicho ou tipo de empresa?**',
      time: 'Agora',
      suggestions: [
        '🍕 Tenho um Restaurante / Delivery',
        '🌊 Tenho uma Pousada / Hotel',
        '🩺 Tenho uma Clínica / Consultório',
        '📐 Sou Prestador de Serviços / Engenharia',
        '👗 Tenho Loja / Comércio Varejista'
      ]
    }
  ]);

  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Inteligência de Vendas e Marketing Online especializada para PMEs no Brasil
  const generateAIResponse = (userQuery: string): Message => {
    const q = userQuery.toLowerCase();
    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // 1. Restaurante / Gastronomia / Delivery
    if (q.includes('restaurante') || q.includes('pizzaria') || q.includes('hamburgueria') || q.includes('delivery') || q.includes('bar') || q.includes('comida') || q.includes('lanchonete')) {
      return {
        id: Date.now().toString(),
        sender: 'ai',
        time: now,
        text: `Excelente nicho! O maior gargalo de restaurantes e delivery no Brasil hoje é a **dependência abusiva de aplicativos que cobram 20% a 27% de comissão** e a demora para atender clientes no WhatsApp à noite.\n\n### 💡 Estratégia Recomendada para o seu Negócio:\n1. **Cardápio Digital Próprio:** Um site com fotos reais dos pratos em alta definição. O cliente abre no celular em 0.4s, sem precisar baixar apps pesados.\n2. **Robô de Pedidos no WhatsApp:** Envia o cardápio em 2 segundos quando o cliente manda "boa noite". A comanda chega impressa ou formatada no seu balcão com nome, endereço e itens.\n3. **Google Meu Negócio Local:** Quando alguém pesquisa *"onde comer perto de mim"* ou *"melhor pizza da cidade"*, você aparece no mapa com fotos e botão de WhatsApp direto.\n\n*Resultado prático:* Uma economia média de R$ 1.800 a R$ 3.500/mês em taxas de plataformas e 4x mais pedidos diretos!`,
        suggestions: [
          '🤖 Como seria o script do robô no WhatsApp?',
          '🔍 Quais palavras os clientes buscam no Google?',
          '💰 Quanto custa criar essa estrutura para meu restaurante?'
        ],
        cta: {
          label: 'Quero esse ecossistema no meu restaurante',
          actionMessage: 'Olá! A IA da Sentinel analisou meu restaurante e quero implantar o site com robô de cardápio!'
        }
      };
    }

    // 2. Pousadas / Hotéis / Turismo
    if (q.includes('pousada') || q.includes('hotel') || q.includes('reserva') || q.includes('turismo') || q.includes('hospedagem') || q.includes('temporada')) {
      return {
        id: Date.now().toString(),
        sender: 'ai',
        time: now,
        text: `O setor de hotelaria tem uma das maiores oportunidades de lucro líquido do Brasil!\n\n### 💡 Diagnóstico para Pousadas & Hotéis:\n* **O Grande Problema:** Pagar de 18% a 25% de taxa por cada hóspede que reserva em sites intermediários (Booking, Airbnb), além de perder hóspedes que mandam mensagem de madrugada e não recebem resposta.\n* **A Solução Sentinel:**\n  1. **Site com Galeria Imersiva:** Fotos deslumbrantes das suítes, café da manhã e comodidades com carregamento ultra-rápido;\n  2. **Motor de Reservas no WhatsApp 24h:** O turista pergunta o valor da diária para o feriado e o robô responde em 2 segundos com as opções, fotos da suíte e chave PIX para garantir 50% de sinal;\n  3. **Desconto de Reserva Direta:** Ao oferecer 10% de desconto reservando pelo site oficial, você ainda economiza 15% que deixaria para plataformas.\n\n*Resultado:* Mesas e suítes cheias, com o dinheiro caindo direto na sua conta bancária!`,
        suggestions: [
          '🤖 Ver demonstração do robô de reservas',
          '📈 Como ranquear na frente no Google Turismo?',
          'Qual o prazo para colocar no ar?'
        ],
        cta: {
          label: 'Quero receber reservas diretas sem comissões',
          actionMessage: 'Olá! A IA da Sentinel me mostrou como economizar comissões na minha pousada. Gostaria de uma proposta!'
        }
      };
    }

    // 3. Clínicas / Médicos / Dentistas / Saúde / Estética
    if (q.includes('clínica') || q.includes('clinica') || q.includes('médic') || q.includes('medic') || q.includes('dentista') || q.includes('odonto') || q.includes('psicolog') || q.includes('estética') || q.includes('saúde') || q.includes('fisioterap')) {
      return {
        id: Date.now().toString(),
        sender: 'ai',
        time: now,
        text: `Na área da saúde, **autoridade imediata e agilidade no agendamento** são os dois fatores que decidem se o paciente marca com você ou com a clínica ao lado.\n\n### 💡 O que sua clínica precisa para lotar a agenda:\n1. **Site Institucional de Rigor Médico:** Design limpo, apresentação do corpo clínico, especialidades, fotos do consultório e convênios aceitos.\n2. **Triagem Automática 24/7:** Mais de 40% das pessoas procuram agendar consulta após as 20h ou antes das 8h. O robô pergunta se é convênio ou particular, passa as datas disponíveis e pré-agenda na hora.\n3. **Redução de No-Show (Faltas):** Envio automático de confirmação e lembrete de consulta na véspera pelo WhatsApp, reduzindo em até 50% as faltas que deixam a sala vazia.\n4. **Google Maps 5 Estrelas:** Otimização para quem pesquisa *"dentista perto de mim"* ou *"clínica de dermatologia"* na sua região.`,
        suggestions: [
          '🤖 Como o robô faz a triagem de convênios?',
          'Como funciona a proteção de dados (LGPD)?',
          'Quero agendar uma reunião técnica'
        ],
        cta: {
          label: 'Quero estruturar a presença da minha clínica',
          actionMessage: 'Olá! A IA da Sentinel analisou minha clínica de saúde e quero estruturar meu site com agendamento automático!'
        }
      };
    }

    // 4. Engenharia / Reformas / Serviços Técnicos / B2B
    if (q.includes('engenharia') || q.includes('reforma') || q.includes('construção') || q.includes('construcao') || q.includes('arquiteto') || q.includes('eletricista') || q.includes('oficina') || q.includes('serviço') || q.includes('advocacia') || q.includes('contabilidade')) {
      return {
        id: Date.now().toString(),
        sender: 'ai',
        time: now,
        text: `Para prestadores de serviços e empresas de engenharia/consultoria, **um único contrato fechado no mês já paga o ano inteiro de infraestrutura digital.**\n\n### 💡 Estratégia para Atrair Clientes de Alto Ticket:\n1. **Eliminar a Imagem Amadora:** Um cliente que vai pagar R$ 10.000 ou R$ 80.000 por uma obra ou serviço corporativo não fecha com quem só tem um Instagram genérico. Ele pesquisa no Google para checar credibilidade.\n2. **Portfólio com Prova Social:** Fotos de projetos entregues, depoimentos reais e certificações técnicas com visual de alto nível internacional.\n3. **Filtro de Orçamentos Qualificados:** O robô coleta antecipadamente o tamanho do projeto, o prazo e o telefone do tomador de decisão, para que seu comercial gaste tempo apenas com quem tem orçamento para fechar.`,
        suggestions: [
          'Como o Case Grupo Vitti obteve 39 páginas no Google?',
          'Quais termos meus clientes pesquisam?',
          'Como funciona o suporte mensal?'
        ],
        cta: {
          label: 'Quero captar contratos de alto valor',
          actionMessage: 'Olá! A IA da Sentinel me recomendou estruturar a captação de clientes para minha empresa de serviços/engenharia!'
        }
      };
    }

    // 5. Instagram vs Site / Dependência de Redes
    if (q.includes('instagram') || q.includes('feed') || q.includes('post') || q.includes('algoritmo') || q.includes('redes')) {
      return {
        id: Date.now().toString(),
        sender: 'ai',
        time: now,
        text: `Você tocou no ponto mais crucial do marketing atual!\n\n**O Problema do Instagram:** As pessoas entram lá para se entreter, ver fotos de amigos e passar o tempo. Quando você posta, o algoritmo só entrega para 3% a 5% dos seus seguidores, a menos que você pague anúncios diários.\n\n**O Poder do Google:** Quando alguém digita no Google *"conserto de ar condicionado urgente"*, *"pousada para o fim de semana"* ou *"clínica perto de mim"*, essa pessoa **já está com a carteira na mão precisando comprar AGORA**.\n\n*Conclusão da IA:* O Instagram constrói relacionamento, mas o **Google + Robô de WhatsApp é o que traz o cliente quente para o fechamento imediato.** Ter os dois trabalhando juntos é a fórmula vencedora.`,
        suggestions: [
          'Como colocar minha empresa no topo do Google Maps?',
          'Quanto custa um site rápido com a Sentinel?',
          'Quero ver os modelos de sites'
        ],
        cta: {
          label: 'Quero parar de depender só do Instagram',
          actionMessage: 'Olá! A IA da Sentinel me explicou por que preciso estar no Google. Quero uma proposta para meu negócio!'
        }
      };
    }

    // 6. Palavras-chave / SEO / Google
    if (q.includes('palavra') || q.includes('termo') || q.includes('busca') || q.includes('google') || q.includes('ranquear') || q.includes('seo') || q.includes('posicionar')) {
      return {
        id: Date.now().toString(),
        sender: 'ai',
        time: now,
        text: `Para ranquear no topo do Google no Brasil, existem 3 regras de ouro que a Sentinel Systems aplica em todos os projetos:\n\n1. **Intenção Comercial Explícita:** Ranquear para termos como *"[Serviço] + [Sua Cidade]"* e *"[Produto] + perto de mim"*. Quem busca isso tem 85% mais probabilidade de comprar do que quem busca termos genéricos.\n2. **Velocidade de Carregamento (Core Web Vitals):** O Google pune sites que demoram mais de 2.5 segundos para abrir no celular. Nossos sites carregam em **menos de 0.8s**, garantindo nota máxima técnica.\n3. **Estrutura de Schema.org (JSON-LD):** Código invisível que ensina aos robôs do Google exatamente seu telefone, horário de funcionamento, serviços e avaliações.`,
        suggestions: [
          'Quero um Raio-X gratuito do meu Google atual',
          'Como funciona a mensalidade com alterações?',
          'Falar com especialista no WhatsApp'
        ],
        cta: {
          label: 'Fazer Raio-X gratuito da minha empresa',
          actionMessage: 'Olá! A IA da Sentinel sugeriu uma auditoria gratuita no meu Google Meu Negócio. Como podemos fazer?'
        }
      };
    }

    // 7. Resposta Genérica / Abrangente para qualquer outro nicho
    return {
      id: Date.now().toString(),
      sender: 'ai',
      time: now,
      text: `Excelente pergunta! Analisando seu cenário, o segredo para crescer no Brasil hoje consiste em um tripé simples e altamente lucrativo:\n\n1. **Presença Ativa no Google:** Quando o cliente da sua cidade ou do país tiver a dor que você resolve, sua empresa deve ser a resposta oficial número 1;\n2. **Site Ultrarrápido e Mobile-First:** 80% das visitas virão pelo celular. O site precisa ser direto ao ponto, elegante e carregar em menos de 1 segundo;\n3. **Velocidade de Resposta no WhatsApp:** Se você demorar 10 minutos para responder um cliente potencial, ele já chamou e comprou no seu concorrente. O robô inteligente 24h elimina essa perda.\n\nQual é a sua maior dúvida ou objetivo hoje? Posso te sugerir a melhor estrutura para o seu segmento!`,
      suggestions: [
        '💡 Sugerir uma headline para o meu site',
        '🤖 Como automatizar meu WhatsApp hoje?',
        '💰 Ver os planos e valores da Sentinel'
      ],
      cta: {
        label: 'Conversar com a diretoria técnica no WhatsApp',
        actionMessage: `Olá! Estive conversando com a IA da Sentinel Systems sobre: "${userQuery}" e gostaria de uma orientação personalizada!`
      }
    };
  };

  const handleSendMessage = (textToSend?: string) => {
    const messageText = textToSend || input;
    if (!messageText.trim()) return;

    soundFx.playUiClick();
    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: messageText,
      time: now
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Efeito de processamento inteligente em tempo real (~700ms)
    setTimeout(() => {
      const aiReply = generateAIResponse(messageText);
      setMessages((prev) => [...prev, aiReply]);
      setIsTyping(false);
      soundFx.playUiClick();
    }, 750);
  };

  const handleSuggestionClick = (suggestion: string) => {
    handleSendMessage(suggestion);
  };

  const handleResetChat = () => {
    soundFx.playUiClick();
    setMessages([
      {
        id: 'welcome-reset',
        sender: 'ai',
        text: 'Chat reiniciado! 🔄 Me diga: qual é o seu tipo de negócio e como posso te ajudar a vender mais hoje?',
        time: 'Agora',
        suggestions: [
          '🍕 Restaurante / Delivery',
          '🌊 Pousada / Hotel',
          '🩺 Clínica / Consultório',
          '📐 Engenharia & Serviços',
          'Como parar de depender só do Instagram?'
        ]
      }
    ]);
  };

  return (
    <div className="flex flex-col h-full bg-slate-950 text-slate-100 border-l border-slate-800 shadow-2xl relative overflow-hidden font-sans">
      
      {/* Header do Copilot */}
      <div className="px-4 py-3.5 bg-slate-900/95 border-b border-slate-800 flex items-center justify-between shrink-0 backdrop-blur-md">
        <div className="flex items-center gap-2.5">
          <div className="relative">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-500 via-sky-500 to-indigo-600 flex items-center justify-center text-slate-950 font-black shadow-md shadow-cyan-500/20">
              <Bot className="w-5 h-5 text-slate-950" />
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-slate-900 animate-pulse" />
          </div>

          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-xs text-white tracking-tight">Sentinel AI</span>
              <span className="px-1.5 py-0.2 rounded bg-cyan-950 border border-cyan-500/40 text-[9px] font-bold text-cyan-400 uppercase tracking-wider">
                Copilot
              </span>
            </div>
            <div className="text-[10px] text-slate-400">
              Estrategista de Vendas Online &bull; Gratuito
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={handleResetChat}
            title="Reiniciar conversa"
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Reiniciar chat"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>

          {onCloseMobile && (
            <button
              onClick={onCloseMobile}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer lg:hidden"
              aria-label="Fechar painel"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Live Badge */}
      <div className="px-4 py-1.5 bg-gradient-to-r from-cyan-950/60 to-slate-900 border-b border-slate-800/60 flex items-center justify-between text-[10px] text-cyan-300">
        <span className="flex items-center gap-1.5">
          <Sparkles className="w-3 h-3 text-cyan-400 shrink-0" />
          <span>Inteligência Comercial em Tempo Real</span>
        </span>
        <span className="text-slate-400 font-mono text-[9px]">v2.5 Brasil</span>
      </div>

      {/* Messages Stream Area */}
      <div className="flex-1 p-3.5 overflow-y-auto space-y-3.5 scrollbar-thin scrollbar-thumb-slate-800">
        {messages.map((msg) => {
          const isAi = msg.sender === 'ai';
          return (
            <div key={msg.id} className={`flex flex-col ${isAi ? 'items-start' : 'items-end'}`}>
              <div
                className={`max-w-[92%] rounded-2xl p-3.5 text-xs leading-relaxed shadow-sm ${
                  isAi
                    ? 'bg-slate-900 border border-slate-800 text-slate-200'
                    : 'bg-gradient-to-r from-cyan-600 to-sky-600 text-white font-medium'
                }`}
              >
                {/* Renderização rica de texto e Markdown simples */}
                <div className="space-y-2 whitespace-pre-line">
                  {msg.text.split('\n\n').map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>

                <div className={`mt-1.5 text-[9px] flex items-center justify-end ${isAi ? 'text-slate-500' : 'text-cyan-100'}`}>
                  <span>{msg.time}</span>
                </div>

                {/* Botão de Chamada para Ação contextual gerado pela IA */}
                {msg.cta && (
                  <div className="mt-3 pt-3 border-t border-slate-800">
                    <a
                      href={`https://wa.me/5522999726069?text=${encodeURIComponent(msg.cta.actionMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => soundFx.playUiClick()}
                      className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-[11px] tracking-wide flex items-center justify-center gap-1.5 shadow-md transition-all cursor-pointer"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>{msg.cta.label}</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                )}
              </div>

              {/* Suggestions chips right under AI message */}
              {msg.suggestions && msg.suggestions.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-1.5 max-w-[95%]">
                  {msg.suggestions.map((sug, sIdx) => (
                    <button
                      key={sIdx}
                      onClick={() => handleSuggestionClick(sug)}
                      className="px-2.5 py-1 rounded-full bg-slate-900 hover:bg-slate-800 text-cyan-300 hover:text-white border border-slate-800 hover:border-cyan-500/50 text-[10px] font-semibold transition-all cursor-pointer text-left flex items-center gap-1"
                    >
                      <span>{sug}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}

        {/* Typing indicator */}
        {isTyping && (
          <div className="flex items-center gap-2 text-xs text-cyan-400 bg-slate-900 border border-slate-800 px-3.5 py-2 rounded-2xl w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: '0ms' }} />
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: '150ms' }} />
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: '300ms' }} />
            <span className="text-[10px] text-slate-400 ml-1">Sentinel AI analisando oportunidades...</span>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input bar */}
      <div className="p-3 bg-slate-900/90 border-t border-slate-800 shrink-0">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="flex items-center gap-2"
        >
          <input
            type="text"
            placeholder="Qual é a sua dúvida ou tipo de empresa?..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
          />
          <button
            type="submit"
            disabled={!input.trim()}
            className="w-9 h-9 rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:opacity-30 disabled:hover:bg-cyan-500 text-slate-950 font-black flex items-center justify-center transition-all cursor-pointer shrink-0"
            aria-label="Enviar mensagem"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>

        <div className="flex items-center justify-between mt-2 text-[9px] text-slate-500 px-1">
          <span>IA Especialista em Vendas Online</span>
          <span>Gratuito & Ilimitado</span>
        </div>
      </div>

    </div>
  );
};

export default SentinelAIAdvisor;
