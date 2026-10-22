import React, { useState } from 'react';
import { ShieldCheck, ChevronDown, CheckCircle2, Lock, FileText } from 'lucide-react';
import { soundFx } from './SoundEffects';

export const SecurityAndFAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'O site e o domínio serão meus ou fico preso à agência?',
      a: '100% seus! Registramos o domínio no seu CPF ou CNPJ. Se um dia você quiser levar seu site para outro lugar ou cancelar, nós entregamos todos os acessos sem nenhuma burocracia, multa de resgate ou pegadinha. Você é dono do seu patrimônio digital.',
      highlight: 'Você nunca fica refém da Sentinel.'
    },
    {
      q: 'Já contratei gente que cobrou caro, atrasou ou sumiu. Por que confiar na Sentinel?',
      a: 'Infelizmente o mercado de tecnologia é cheio de aventureiros que prometem muito e desaparecem. A Sentinel Systems é uma empresa formalizada, com CNPJ ativo, contrato com prazos claros e emissão de nota fiscal. Além disso, nosso modelo é focado em suporte contínuo: nós ganhamos quando você continua com a gente vendo clientes chegarem todo mês.',
      highlight: 'Empresa com CNPJ, contrato formal e suporte contínuo.'
    },
    {
      q: 'Não entendo termos técnicos de informática. Como vou saber se está funcionando?',
      a: 'Você não precisa auditar código ou entender siglas difíceis para saber se o serviço funciona. A auditoria mais fácil do mundo é olhar o seu WhatsApp tocando com clientes novos perguntando preços e fazendo pedidos. Além disso, enviamos relatórios mensais simples em português claro.',
      highlight: 'Sem termos difíceis: o resultado aparece no seu caixa.'
    },
    {
      q: 'Como funciona a taxa de criação e a mensalidade? Tem custo escondido?',
      a: 'Zero custos ocultos. Cobramos uma taxa de implantação única e facilitada para desenhar o site, programar o robô de WhatsApp e cadastrar tudo no Google. Depois disso, você paga apenas a mensalidade fixa contratada para manter a hospedagem no ar, segurança ativa, atualizações de fotos/produtos e suporte direto com nossa equipe.',
      highlight: 'Transparência absoluta desde o primeiro dia.'
    },
    {
      q: 'E se eu precisar trocar um preço, foto ou endereço no site?',
      a: 'Basta mandar uma mensagem para o nosso suporte no WhatsApp! Alterações normais do dia a dia (trocar fotos, atualizar cardápio, mudar horários ou telefones) já estão 100% cobertas pela sua mensalidade. Você não paga nada a mais por isso.',
      highlight: 'Alterações e manutenções já inclusas no pacote.'
    },
    {
      q: 'Se eu quiser cancelar o plano mensal, tem multa de fidelidade?',
      a: 'Não trabalhamos com contratos de fidelidade forçada. Se por qualquer motivo você decidir pausar ou cancelar o acompanhamento mensal, basta nos avisar com 30 dias de antecedência. Você continua conosco porque o serviço dá lucro e se paga sozinho, não por obrigação contratual.',
      highlight: 'Liberdade total para você e seu negócio.'
    }
  ];

  const toggleAccordion = (idx: number) => {
    soundFx.playUiClick();
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="duvidas-seguranca" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-xs font-bold text-emerald-800 mb-4">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>TRANSPARÊNCIA, ÉTICA & SEGURANÇA</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Já teve dor de cabeça com sites antes?{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-purple-600">
              Aqui é diferente.
            </span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Sabemos que quem contrata tecnologia costuma vir ressabiado com promessas vazias. Respondemos às dúvidas e medos mais comuns com total clareza:
          </p>
        </div>

        {/* 3 Pillars of Trust */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center shrink-0">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm mb-0.5">Propriedade Total</h4>
              <p className="text-xs text-slate-600">O site, os dados e o domínio são registrados no seu nome.</p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm mb-0.5">Contrato & Nota Fiscal</h4>
              <p className="text-xs text-slate-600">Empresa formal com CNPJ, prazos e direitos garantidos.</p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm mb-0.5">Sem Fidelidade Presa</h4>
              <p className="text-xs text-slate-600">Você fica porque dá resultado e clientes novos, não por amarra.</p>
            </div>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-slate-200 overflow-hidden transition-all shadow-xs"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/80 transition-colors"
                >
                  <span className="font-bold text-slate-900 text-base sm:text-lg">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-cyan-100 text-cyan-700' : 'text-slate-500'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-700 text-sm sm:text-base leading-relaxed border-t border-slate-100 animate-fade-in">
                    <p className="mb-3">{faq.a}</p>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{faq.highlight}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default SecurityAndFAQ;
