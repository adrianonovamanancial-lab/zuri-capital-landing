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

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
        {/* Background with geometric lines */}
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310419663030068499/nsn32NQj46JZoJdTENEPY6/hero-background-fKrdrDDPhuCxawtQv9wPq9.webp"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="space-y-8">
              <div className="animate-fade-in-slide-up">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-4 font-mono">
                  Simule e contrate seu
                  <span className="text-[#C6D600] block">crédito agora</span>
                </h1>
                <p className="text-xl text-[#A0A0A0] leading-relaxed">
                  Resposta imediata, sem burocracia e com aprovação rápida. Tudo 100% digital e seguro.
                </p>
              </div>

              <CTAButton onClick={() => setIsChatOpen(true)} size="lg">
                Simular agora
              </CTAButton>

              {/* Trust indicators */}
              <div className="flex items-center gap-4 pt-4">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-[#C6D600] border-2 border-[#0B0F1A]" />
                  <div className="w-10 h-10 rounded-full bg-[#6B7F00] border-2 border-[#0B0F1A]" />
                  <div className="w-10 h-10 rounded-full bg-[#3F4A00] border-2 border-[#0B0F1A]" />
                </div>
                <p className="text-sm text-[#A0A0A0]">
                  <span className="text-[#C6D600] font-semibold">+2.500</span> clientes já aprovados
                </p>
              </div>
            </div>

            {/* Right: Phone Mockup */}
            <div className="hidden lg:flex justify-center items-center animate-float">
              <div className="relative">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310419663030068499/nsn32NQj46JZoJdTENEPY6/phone-mockup-illustration-RJ5PqUvfFxNMa6UzeUtSMu.webp"
                  alt="Phone Mockup"
                  className="w-80 h-auto drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#C6D600] rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-[#C6D600] rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section id="features" className="py-20 bg-[#1a1f2e] border-t border-[#C6D600]/10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 font-mono">
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
          <h2 className="text-4xl font-bold text-center mb-16 font-mono">
            Como <span className="text-[#C6D600]">funciona</span>
          </h2>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {/* Step 1 */}
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#C6D600] text-[#0B0F1A] font-bold text-lg font-mono">
                    1
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 font-mono">Faça sua simulação</h3>
                  <p className="text-[#A0A0A0]">
                    Abra o chat, informe o valor que precisa e escolha o prazo. Leva menos de 2 minutos.
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="flex justify-center">
                <div className="w-1 h-8 bg-gradient-to-b from-[#C6D600] to-transparent" />
              </div>

              {/* Step 2 */}
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#C6D600] text-[#0B0F1A] font-bold text-lg font-mono">
                    2
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 font-mono">Receba sua proposta</h3>
                  <p className="text-[#A0A0A0]">
                    Veja as melhores opções de crédito com taxas e prazos personalizados para você.
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="flex justify-center">
                <div className="w-1 h-8 bg-gradient-to-b from-[#C6D600] to-transparent" />
              </div>

              {/* Step 3 */}
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#C6D600] text-[#0B0F1A] font-bold text-lg font-mono">
                    3
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 font-mono">Acompanhe tudo pelo app</h3>
                  <p className="text-[#A0A0A0]">
                    Envie documentos, acompanhe sua aprovação e finalize a contratação com segurança.
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
        </div>
      </section>

      {/* Security Section */}
      <section id="security" className="py-20 bg-[#1a1f2e] border-t border-[#C6D600]/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="hidden lg:flex justify-center">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663030068499/nsn32NQj46JZoJdTENEPY6/security-pattern-MeTBiFDfJdxXbTthXnipxb.webp"
                alt="Security"
                className="w-full max-w-md"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-4xl font-bold mb-8 font-mono">
                Segurança em <span className="text-[#C6D600]">primeiro lugar</span>
              </h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Lock className="text-[#C6D600]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Criptografia de Dados</h3>
                    <p className="text-[#A0A0A0]">
                      Seus dados são protegidos com a mais alta tecnologia de criptografia do mercado.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="text-[#C6D600]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Conformidade LGPD</h3>
                    <p className="text-[#A0A0A0]">
                      Estamos em total conformidade com a Lei Geral de Proteção de Dados.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Smartphone className="text-[#C6D600]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Ambiente Seguro</h3>
                    <p className="text-[#A0A0A0]">
                      Infraestrutura de classe empresarial com certificações internacionais.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <section className="py-20 bg-[#0B0F1A] border-t border-[#C6D600]/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 font-mono">
            Baixe o app <span className="text-[#C6D600]">Zuri</span>
          </h2>
          <p className="text-[#A0A0A0] max-w-2xl mx-auto mb-12 text-lg">
            O app Zuri é usado para acompanhar sua proposta, enviar documentos e finalizar sua contratação com segurança. Disponível em iOS e Android.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#0B0F1A] font-bold px-8 py-4 rounded-lg hover:bg-[#E8E8E8] transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.38-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.38C2.79 15.25 3.51 7.59 9.05 7.31c1.35.05 2.29.89 3.04.89.9 0 2.29-1.16 3.86-1.01 1.63.15 3.17.97 3.98 2.45-3.81 2.33-3.14 7.16.27 8.96-.5 1.38-1.48 2.4-2.85 3.12z" />
              </svg>
              App Store
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#0B0F1A] font-bold px-8 py-4 rounded-lg hover:bg-[#E8E8E8] transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3.2 5.5c-.1 0-.2.1-.2.2v13c0 .1.1.2.2.2h17.6c.1 0 .2-.1.2-.2v-13c0-.1-.1-.2-.2-.2H3.2zm9.6 12.1L3.6 6.3h16.8L12.8 17.6z" />
              </svg>
              Google Play
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0B0F1A] border-t border-[#C6D600]/10 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4 font-mono">Zuri Capital</h4>
              <p className="text-[#A0A0A0] text-sm">
                Crédito rápido, seguro e inteligente para você.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 font-mono">Links</h4>
              <ul className="space-y-2 text-[#A0A0A0] text-sm">
                <li><a href="#" className="hover:text-[#C6D600] transition-colors">Sobre</a></li>
                <li><a href="#" className="hover:text-[#C6D600] transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-[#C6D600] transition-colors">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 font-mono">Legal</h4>
              <ul className="space-y-2 text-[#A0A0A0] text-sm">
                <li><a href="#" className="hover:text-[#C6D600] transition-colors">Termos</a></li>
                <li><a href="#" className="hover:text-[#C6D600] transition-colors">Privacidade</a></li>
                <li><a href="#" className="hover:text-[#C6D600] transition-colors">Cookies</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 font-mono">Suporte</h4>
              <ul className="space-y-2 text-[#A0A0A0] text-sm">
                <li><a href="#" className="hover:text-[#C6D600] transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-[#C6D600] transition-colors">Ajuda</a></li>
                <li><a href="#" className="hover:text-[#C6D600] transition-colors">Suporte</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#C6D600]/10 pt-8">
            <p className="text-[#A0A0A0] text-sm text-center">
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
