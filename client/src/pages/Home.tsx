import { useState } from 'react';
import { Button } from '@/components/ui/button';
import ChatBot from '@/components/ChatBot';
import Header from '@/components/Header';
import FeatureCard from '@/components/FeatureCard';
import CTAButton from '@/components/CTAButton';
import { CheckCircle, Lock, Smartphone, Zap } from 'lucide-react';

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0B0F1A] text-white overflow-hidden">
      <Header onSimulateClick={() => setIsChatOpen(true)} />

      {/* Hero Section - Refined */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
        {/* Background with geometric lines */}
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310419663030068499/nsn32NQj46JZoJdTENEPY6/hero-background-fKrdrDDPhuCxawtQv9wPq9.webp"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
            {/* Left: Content */}
            <div className="flex-1 space-y-8 text-center lg:text-left">
            <div className="animate-fade-in-slide-up">
              <h1 className="text-5xl lg:text-7xl font-bold leading-[1.15] mb-8" style={{ letterSpacing: '-0.5px', fontWeight: 700 }}>
                Simule e contrate<br />
                <span className="text-[#C6D600]">seu crédito agora</span>
              </h1>
              <p className="text-lg lg:text-xl text-[#B0B0B0] leading-relaxed max-w-2xl" style={{ fontWeight: 400, opacity: 0.85 }}>
                Resposta imediata, sem burocracia e com aprovação rápida. Tudo 100% digital e seguro.
              </p>
            </div>

            <div className="flex flex-col gap-6 pt-4">
              <CTAButton onClick={() => setIsChatOpen(true)} size="lg">
                Simular agora
              </CTAButton>

              {/* Social Proof */}
              <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-5">
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-[#C6D600] flex-shrink-0" size={18} />
                  <span className="text-sm" style={{ fontWeight: 400, opacity: 0.9 }}>+2.500 clientes aprovados</span>
                </div>
                <div className="hidden lg:block w-1.5 h-1.5 rounded-full bg-[#C6D600]/60" />
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-[#C6D600] flex-shrink-0" size={18} />
                  <span className="text-sm" style={{ fontWeight: 400, opacity: 0.9 }}>resposta imediata</span>
                </div>
                <div className="hidden lg:block w-1.5 h-1.5 rounded-full bg-[#C6D600]/60" />
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-[#C6D600] flex-shrink-0" size={18} />
                  <span className="text-sm" style={{ fontWeight: 400, opacity: 0.9 }}>sem burocracia</span>
                </div>
              </div>
            </div>
          </div>
            </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-[#C6D600]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Value Proposition */}
      <section id="features" className="py-20 bg-[#1a1f2e] border-t border-[#C6D600]/10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16" style={{ fontWeight: 700, letterSpacing: '-0.3px' }}>
            Por que escolher a <span className="text-[#C6D600]">Zuri Capital</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Zap className="text-[#C6D600]" size={24} />}
              title="Aprovação Rápida"
              description="Resposta em minutos. Sem esperas, sem burocracia. Você sabe na hora se foi aprovado."
            />
            <FeatureCard
              icon={<Smartphone className="text-[#C6D600]" size={24} />}
              title="100% Digital"
              description="Tudo pelo app. Simule, envie documentos e finalize sua contratação sem sair de casa."
            />
            <FeatureCard
              icon={<CheckCircle className="text-[#C6D600]" size={24} />}
              title="Sem Burocracia"
              description="Processo simplificado. Menos documentos, menos etapas. Apenas o essencial."
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-[#0B0F1A]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16" style={{ fontWeight: 700, letterSpacing: '-0.3px' }}>
            Como <span className="text-[#C6D600]">funciona</span>
          </h2>

          <div className="max-w-3xl mx-auto space-y-8">
            {/* Step 1 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#C6D600] text-[#0B0F1A] font-bold text-lg">
                  1
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2" style={{ fontWeight: 600 }}>Faça sua simulação</h3>
                <p className="text-[#A0A0A0]" style={{ fontWeight: 400 }}>
                  Abra o chat, informe o valor que precisa e escolha o prazo.
                  <br />
                  Leva menos de 2 minutos.
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="h-8 flex justify-center">
              <div className="w-1 bg-gradient-to-b from-[#C6D600] to-transparent" />
            </div>

            {/* Step 2 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#C6D600] text-[#0B0F1A] font-bold text-lg">
                  2
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2" style={{ fontWeight: 600 }}>Receba sua proposta</h3>
                <p className="text-[#A0A0A0]" style={{ fontWeight: 400 }}>
                  Analisamos seu perfil e te mostramos as melhores opções de crédito, com taxas e prazos personalizados.
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="h-8 flex justify-center">
              <div className="w-1 bg-gradient-to-b from-[#C6D600] to-transparent" />
            </div>

            {/* Step 3 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#C6D600] text-[#0B0F1A] font-bold text-lg">
                  3
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2" style={{ fontWeight: 600 }}>Formalize e receba seu crédito</h3>
                <p className="text-[#A0A0A0]" style={{ fontWeight: 400 }}>
                  Envie seus dados pelo atendimento, finalize a contratação e receba o valor na sua conta.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <CTAButton onClick={() => setIsChatOpen(true)} size="md">
              Começar agora
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section id="security" className="py-20 bg-[#1a1f2e] border-t border-[#C6D600]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center" style={{ fontWeight: 700, letterSpacing: '-0.3px' }}>
              Segurança em <span className="text-[#C6D600]">primeiro lugar</span>
            </h2>

            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Lock className="text-[#C6D600]" size={24} />
                  <h3 className="text-lg font-bold" style={{ fontWeight: 600 }}>Criptografia de Dados</h3>
                </div>
                <p className="text-[#A0A0A0] ml-9" style={{ fontWeight: 400 }}>
                  Seus dados são protegidos com a mais alta tecnologia de criptografia do mercado.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle className="text-[#C6D600]" size={24} />
                  <h3 className="text-lg font-bold" style={{ fontWeight: 600 }}>Conformidade LGPD</h3>
                </div>
                <p className="text-[#A0A0A0] ml-9" style={{ fontWeight: 400 }}>
                  Estamos em total conformidade com a Lei Geral de Proteção de Dados.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Lock className="text-[#C6D600]" size={24} />
                  <h3 className="text-lg font-bold" style={{ fontWeight: 600 }}>Ambiente Seguro</h3>
                </div>
                <p className="text-[#A0A0A0] ml-9" style={{ fontWeight: 400 }}>
                  Infraestrutura de classe empresarial com certificações internacionais.
                </p>
              </div>
            </div>

            {/* Stats Section */}
            <div className="mt-16 pt-16 border-t border-[#C6D600]/20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#C6D600] mb-2" style={{ fontWeight: 700, letterSpacing: '-0.5px' }}>
                    +2.500
                  </div>
                  <p className="text-[#A0A0A0] text-sm" style={{ fontWeight: 400 }}>clientes aprovados</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#C6D600] mb-2" style={{ fontWeight: 700, letterSpacing: '-0.5px' }}>
                    +R$ 12M
                  </div>
                  <p className="text-[#A0A0A0] text-sm" style={{ fontWeight: 400 }}>liberados</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#C6D600] mb-2" style={{ fontWeight: 700, letterSpacing: '-0.5px' }}>
                    +98%
                  </div>
                  <p className="text-[#A0A0A0] text-sm" style={{ fontWeight: 400 }}>de satisfação</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Footer */}
      <footer className="bg-[#0B0F1A] border-t border-[#C6D600]/10 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663030068499/nsn32NQj46JZoJdTENEPY6/Group1(1)_b8172d56.png"
                alt="Zuri Capital"
                className="h-12 w-auto mb-4"
              />
              <p className="text-[#A0A0A0] text-sm" style={{ fontWeight: 400 }}>
                Crédito rápido, seguro e inteligente para você.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4" style={{ fontWeight: 600 }}>Links</h4>
              <ul className="space-y-2 text-[#A0A0A0] text-sm">
                <li><a href="#" className="hover:text-[#C6D600] transition-colors" style={{ fontWeight: 400 }}>Sobre</a></li>
                <li><a href="#" className="hover:text-[#C6D600] transition-colors" style={{ fontWeight: 400 }}>Blog</a></li>
                <li><a href="#" className="hover:text-[#C6D600] transition-colors" style={{ fontWeight: 400 }}>Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4" style={{ fontWeight: 600 }}>Legal</h4>
              <ul className="space-y-2 text-[#A0A0A0] text-sm">
                <li><a href="#" className="hover:text-[#C6D600] transition-colors" style={{ fontWeight: 400 }}>Termos</a></li>
                <li><a href="/privacy" className="hover:text-[#C6D600] transition-colors" style={{ fontWeight: 400 }}>Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-[#C6D600] transition-colors" style={{ fontWeight: 400 }}>Cookies</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4" style={{ fontWeight: 600 }}>Suporte</h4>
              <ul className="space-y-2 text-[#A0A0A0] text-sm">
                <li><a href="#" className="hover:text-[#C6D600] transition-colors" style={{ fontWeight: 400 }}>FAQ</a></li>
                <li><a href="#" className="hover:text-[#C6D600] transition-colors" style={{ fontWeight: 400 }}>Ajuda</a></li>
                <li><a href="#" className="hover:text-[#C6D600] transition-colors" style={{ fontWeight: 400 }}>Suporte</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#C6D600]/10 pt-8">
            <p className="text-[#A0A0A0] text-sm text-center" style={{ fontWeight: 400 }}>
              © 2026 Zuri Capital. Todos os direitos reservados. | Crédito responsável. Consulte sempre as condições antes de contratar.
            </p>
          </div>
        </div>
      </footer>

      {/* Chat Bot */}
      <ChatBot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
}
