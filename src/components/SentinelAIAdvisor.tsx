import React, { useState, useRef, useEffect } from 'react';
import { 
  Sparkles, 
  Send, 
  RotateCcw, 
  X, 
  Bot, 
  User, 
  ArrowRight,
  ShieldCheck,
  Compass,
  Loader2
} from 'lucide-react';
import { soundFx } from './SoundEffects';

interface Message {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  timestamp: string;
}

interface SentinelAIAdvisorProps {
  onOpenContact?: (plan?: string) => void;
  isOpenMobile?: boolean;
  onCloseMobile?: () => void;
}

// Chave da API gratuita (com fallback seguro e suporte a env)
const AI_API_KEY = 
  (typeof import.meta !== 'undefined' && import.meta.env?.VITE_GEMINI_API_KEY) || 
  (typeof import.meta !== 'undefined' && import.meta.env?.VITE_AI_API_KEY) || 
  'AQ.Ab8RN6JmcsRMNDucFUgko__JfZf6zsQui33F2PCTyn0REoosow';

const MODEL_ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent?key=${AI_API_KEY}`;

const SYSTEM_INSTRUCTION = `Você é a inteligência artificial consultiva da Sentinel Systems.
Você é prestativo, altamente inteligente, cortês, analítico e tem conhecimento profundo sobre qualquer assunto — desde estratégias de negócios, vendas, criação de sites de alta performance (Edge Cloud), SEO no Google, Google Maps, automações e robôs no WhatsApp 24h, até tecnologia em geral, programação, cálculos, ciências, redação, cultura e qualquer tipo de pergunta aberta ou fechada que o visitante fizer.

DIRETRIZES ESSENCIAIS DE IDENTIDADE (SIGA ESTRITAMENTE):
1. NUNCA mencione que você é "Gemini", que foi desenvolvido pelo "Google" ou que é um modelo do Google.
2. Se o usuário perguntar quem você é ou como foi criado, responda com cordialidade e simpatia que você é o assistente virtual inteligente da Sentinel Systems, pronto para ajudar em qualquer dúvida, estratégia ou conversa.
3. Responda em português com clareza, tom respeitoso, amigável e profissional.
4. Estruture suas respostas com boa legibilidade: use quebras de parágrafo, destaque termos importantes com negrito e use marcadores quando for útil para organizar ideias.
5. Você tem total liberdade e capacidade para responder a QUALQUER pergunta do usuário, sobre qualquer assunto do mundo, aberta ou fechada.`;

// Formatador leve de Markdown para exibição agradável
const renderFormattedText = (rawText: string) => {
  const paragraphs = rawText.split('\n\n');

  return (
    <div className="space-y-2">
      {paragraphs.map((p, pIdx) => {
        const lines = p.split('\n');
        return (
          <div key={pIdx} className="space-y-1">
            {lines.map((line, lIdx) => {
              const trimmed = line.trim();
              const isBullet = trimmed.startsWith('* ') || trimmed.startsWith('- ') || trimmed.startsWith('• ');
              const content = isBullet ? trimmed.replace(/^[*•-]\s+/, '') : trimmed;

              // Parse básico de **negrito**
              const parts = content.split(/(\*\*[^*]+\*\*)/g);
              const renderedContent = parts.map((part, partIdx) => {
                if (part.startsWith('**') && part.endsWith('**')) {
                  return <strong key={partIdx} className="font-bold text-slate-900">{part.slice(2, -2)}</strong>;
                }
                return part;
              });

              if (isBullet) {
                return (
                  <div key={lIdx} className="flex items-start gap-2 pl-1 text-[11px] text-slate-700 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mt-1.5 shrink-0" />
                    <span>{renderedContent}</span>
                  </div>
                );
              }

              return (
                <p key={lIdx} className="text-xs leading-relaxed text-slate-800">
                  {renderedContent}
                </p>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export const SentinelAIAdvisor: React.FC<SentinelAIAdvisorProps> = ({ 
  onCloseMobile 
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome-msg',
      sender: 'ai',
      text: 'Olá! Sou a inteligência artificial da Sentinel Systems. Estou à disposição para tirar dúvidas, analisar estratégias para o seu negócio, criar ideias de campanhas, explicar sobre SEO no Google e WhatsApp, ou responder a qualquer pergunta aberta que você tiver. Como posso ajudar agora?',
      timestamp: 'Agora'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatBottomRef = useRef<HTMLDivElement>(null);

  const initialSuggestions = [
    'Como colocar minha empresa na 1ª página do Google?',
    'Por que ter um site próprio além do Instagram?',
    'Como um robô no WhatsApp pode aumentar minhas vendas?',
    'Sugira ideias para atrair mais clientes locais',
    'Explique como funciona a arquitetura da Sentinel'
  ];

  useEffect(() => {
    if (chatBottomRef.current) {
      chatBottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isLoading]);

  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || inputValue).trim();
    if (!query || isLoading) return;

    soundFx.playUiClick();

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const newHistory = [...messages, userMessage];
    setMessages(newHistory);
    setInputValue('');
    setIsLoading(true);

    try {
      // Monta o histórico recente para contexto multi-turn da conversa
      const contentsForApi = newHistory
        .filter((m) => m.id !== 'welcome-msg')
        .slice(-10)
        .map((m) => ({
          role: m.sender === 'user' ? 'user' : 'model',
          parts: [{ text: m.text }]
        }));

      const payload = {
        systemInstruction: {
          parts: [{ text: SYSTEM_INSTRUCTION }]
        },
        contents: contentsForApi,
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 2048
        }
      };

      const response = await fetch(MODEL_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error(`Status ${response.status}`);
      }

      const data = await response.json();
      const answerText = 
        data?.candidates?.[0]?.content?.parts?.[0]?.text || 
        'Compreendo perfeitamente. Como posso aprofundar mais essa resposta para você?';

      const aiMessage: Message = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: answerText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (err) {
      console.warn('Falha na resposta da IA:', err);
      // Fallback cortês e prestativo
      const fallbackAiMessage: Message = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: 'Olá! Tive uma pequena oscilação temporária de conexão com nossos servidores. Estou pronto para ajudar você com qualquer dúvida sobre sites, estratégias no Google, automações no WhatsApp ou qualquer outro tema. Por favor, envie novamente sua pergunta!',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, fallbackAiMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetChat = () => {
    soundFx.playUiClick();
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        sender: 'ai',
        text: 'Conversa reiniciada. Sou o assistente virtual da Sentinel Systems. Estou pronto para responder a qualquer dúvida aberta, analisar estratégias para o seu negócio ou orientar seu projeto. Como posso te ajudar?',
        timestamp: 'Agora'
      }
    ]);
  };

  return (
    <div className="flex flex-col h-full bg-white text-slate-800 border-l border-slate-200/90 shadow-sm relative overflow-hidden font-sans">
      
      {/* 1. HEADER (Sóbrio, Limpo e Sem Menções) */}
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
              <span>Inteligência Consultiva Pronta para Tudo</span>
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

      {/* 2. CHAT STREAM */}
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
                  : 'bg-slate-50 border border-slate-200/90 text-slate-800 rounded-tl-none shadow-2xs space-y-2'
              }`}
            >
              {msg.sender === 'user' ? (
                <p className="whitespace-pre-line">{msg.text}</p>
              ) : (
                renderFormattedText(msg.text)
              )}
            </div>
          </div>
        ))}

        {/* Sugestões Iniciais para Instigar o Uso */}
        {messages.length <= 1 && (
          <div className="pt-2 space-y-2">
            <div className="text-[10px] font-semibold text-slate-400 flex items-center gap-1 pl-1">
              <Compass className="w-3 h-3 text-cyan-600" />
              <span>Sugestões para começar (ou faça qualquer pergunta aberta):</span>
            </div>
            <div className="flex flex-col gap-1.5">
              {initialSuggestions.map((sug, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(sug)}
                  className="text-left px-3 py-2 rounded-md bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 hover:text-slate-950 text-[11px] font-medium transition-all shadow-2xs flex items-center justify-between group cursor-pointer"
                >
                  <span className="line-clamp-2">{sug}</span>
                  <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-cyan-600 group-hover:translate-x-0.5 transition-all shrink-0 ml-1.5" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Indicador de Carregamento */}
        {isLoading && (
          <div className="flex items-center gap-2 text-xs text-slate-500 pl-1 py-1">
            <div className="w-6 h-6 rounded-md bg-cyan-50 border border-cyan-200 flex items-center justify-center">
              <Loader2 className="w-3.5 h-3.5 text-cyan-600 animate-spin" />
            </div>
            <span className="text-[11px] font-medium text-slate-600">Pensando na resposta...</span>
          </div>
        )}

        <div ref={chatBottomRef} />
      </div>

      {/* 3. INPUT BAR (Prompt Livre para Qualquer Pergunta) */}
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
            placeholder="Faça qualquer pergunta aberta ou sobre o seu projeto..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            disabled={isLoading}
            className="w-full bg-slate-50 border border-slate-200 rounded-md pl-3 pr-11 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-400 focus:bg-white transition-all disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={!inputValue.trim() || isLoading}
            className="absolute right-1.5 p-1.5 rounded-md bg-slate-900 hover:bg-slate-800 disabled:opacity-20 disabled:hover:bg-slate-900 text-white transition-all cursor-pointer"
            aria-label="Enviar mensagem"
          >
            {isLoading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Send className="w-3.5 h-3.5" />}
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
