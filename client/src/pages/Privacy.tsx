import Header from '@/components/Header';
import { ArrowLeft } from 'lucide-react';
import { useLocation } from 'wouter';

export default function Privacy() {
  const [, navigate] = useLocation();
  return (
    <div className="min-h-screen bg-[#0B0F1A] text-white">
      <Header onSimulateClick={() => {}} />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-[#C6D600] hover:text-[#B8C700] transition-colors mb-8 font-medium"
          >
            <ArrowLeft size={20} />
            Voltar
          </button>

          <article className="prose prose-invert max-w-none">
            <h1 className="text-4xl font-bold mb-4" style={{ fontWeight: 700, letterSpacing: '-0.3px' }}>
              Política de Privacidade
            </h1>

            <p className="text-[#A0A0A0] mb-8" style={{ fontWeight: 400 }}>
              Última atualização: 24 de março de 2026
            </p>

            <div className="space-y-8 text-[#B0B0B0]" style={{ fontWeight: 400, lineHeight: 1.6 }}>
              <section>
                <p>
                  A MD E VEIGA SERVICOS DE COBRANCAS E INF, inscrita no CNPJ sob o nº 34.257.934/0001-25 ("Zuri Capital", "nós" ou "empresa"), tem o compromisso de proteger a privacidade e os dados pessoais dos usuários que acessam nossa plataforma.
                </p>
                <p>
                  Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4" style={{ fontWeight: 700 }}>
                  1. Coleta de Dados
                </h2>
                <p className="mb-4">
                  Coletamos dados pessoais fornecidos diretamente por você, incluindo:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>Nome completo</li>
                  <li>CPF</li>
                  <li>Número de telefone (WhatsApp)</li>
                  <li>E-mail</li>
                  <li>Dados necessários para simulação de crédito</li>
                </ul>
                <p className="mb-4">
                  Também podemos coletar automaticamente:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Endereço IP</li>
                  <li>Informações de navegação</li>
                  <li>Dados de dispositivo e navegador</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4" style={{ fontWeight: 700 }}>
                  2. Uso das Informações
                </h2>
                <p className="mb-4">
                  Os dados coletados são utilizados para:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Realizar simulações de crédito</li>
                  <li>Oferecer produtos financeiros compatíveis com seu perfil</li>
                  <li>Entrar em contato via WhatsApp, telefone ou e-mail</li>
                  <li>Melhorar a experiência do usuário na plataforma</li>
                  <li>Cumprir obrigações legais e regulatórias</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4" style={{ fontWeight: 700 }}>
                  3. Compartilhamento de Dados
                </h2>
                <p className="mb-4">
                  Seus dados podem ser compartilhados com:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>Instituições financeiras parceiras</li>
                  <li>Correspondentes bancários</li>
                  <li>Provedores de tecnologia e serviços (como hospedagem e CRM)</li>
                </ul>
                <p>
                  O compartilhamento ocorre apenas quando necessário para a prestação dos serviços.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4" style={{ fontWeight: 700 }}>
                  4. Armazenamento e Segurança
                </h2>
                <p className="mb-4">
                  Adotamos medidas técnicas e organizacionais para proteger seus dados contra:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>Acessos não autorizados</li>
                  <li>Perda ou vazamento de informações</li>
                  <li>Uso indevido</li>
                </ul>
                <p>
                  Seus dados são armazenados em ambientes seguros e controlados.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4" style={{ fontWeight: 700 }}>
                  5. Cookies e Tecnologias de Rastreamento
                </h2>
                <p className="mb-4">
                  Utilizamos cookies para:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>Melhorar a navegação</li>
                  <li>Analisar comportamento do usuário</li>
                  <li>Personalizar ofertas</li>
                </ul>
                <p>
                  Você pode desativar os cookies nas configurações do seu navegador.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4" style={{ fontWeight: 700 }}>
                  6. Direitos do Usuário
                </h2>
                <p className="mb-4">
                  Nos termos da Lei Geral de Proteção de Dados (LGPD), você pode:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>Solicitar acesso aos seus dados</li>
                  <li>Corrigir dados incompletos ou desatualizados</li>
                  <li>Solicitar exclusão de dados</li>
                  <li>Revogar consentimento</li>
                </ul>
                <p>
                  Para exercer seus direitos, entre em contato conosco.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4" style={{ fontWeight: 700 }}>
                  7. Retenção de Dados
                </h2>
                <p>
                  Seus dados serão armazenados pelo tempo necessário para:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Cumprimento de obrigações legais</li>
                  <li>Execução de contratos</li>
                  <li>Atendimento das finalidades descritas nesta política</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4" style={{ fontWeight: 700 }}>
                  8. Alterações nesta Política
                </h2>
                <p>
                  Podemos atualizar esta Política de Privacidade a qualquer momento. Recomendamos a revisão periódica desta página.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4" style={{ fontWeight: 700 }}>
                  9. Contato
                </h2>
                <p>
                  Empresa: MD E VEIGA SERVICOS DE COBRANCAS E INF<br />
                  CNPJ: 34.257.934/0001-25<br />
                  E-mail: contato@zuricapital.com.br
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4" style={{ fontWeight: 700 }}>
                  10. Consentimento
                </h2>
                <p>
                  Ao utilizar nossa plataforma, você declara estar ciente e de acordo com esta Política de Privacidade.
                </p>
              </section>
            </div>
          </article>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#0B0F1A] border-t border-[#C6D600]/10 py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-[#A0A0A0] text-sm" style={{ fontWeight: 400 }}>
            © 2026 Zuri Capital. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
