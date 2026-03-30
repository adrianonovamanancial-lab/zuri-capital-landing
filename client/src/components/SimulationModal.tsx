import { useState, useRef, useEffect } from 'react';
import { X, MessageCircle, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SimulationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: { name: string; whatsapp: string; cpf: string; cep: string }) => void;
}

export default function SimulationModal({ isOpen, onClose, onSubmit }: SimulationModalProps) {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [cpf, setCpf] = useState('');
  const [cep, setCep] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const cpfInputRef = useRef<HTMLInputElement>(null);

  // Auto-focus no primeiro campo de cada etapa
  useEffect(() => {
    if (isOpen && step === 1 && nameInputRef.current) {
      setTimeout(() => nameInputRef.current?.focus(), 100);
    }
  }, [isOpen, step]);

  useEffect(() => {
    if (isOpen && step === 2 && cpfInputRef.current) {
      setTimeout(() => cpfInputRef.current?.focus(), 100);
    }
  }, [step]);

  const formatWhatsApp = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 2) return numbers;
    if (numbers.length <= 7) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
  };

  const formatCPF = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 3) return numbers;
    if (numbers.length <= 6) return `${numbers.slice(0, 3)}.${numbers.slice(3)}`;
    if (numbers.length <= 9) return `${numbers.slice(0, 3)}.${numbers.slice(3, 6)}.${numbers.slice(6)}`;
    return `${numbers.slice(0, 3)}.${numbers.slice(3, 6)}.${numbers.slice(6, 9)}-${numbers.slice(9, 11)}`;
  };

  const formatCEP = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 5) return numbers;
    return `${numbers.slice(0, 5)}-${numbers.slice(5, 8)}`;
  };

  const handleStep1Submit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !whatsapp.trim()) {
      return;
    }

    setIsTransitioning(true);
    setTimeout(() => {
      setStep(2);
      setIsTransitioning(false);
    }, 300);
  };

  const handleKeyDown = (e: React.KeyboardEvent, isLastField: boolean) => {
    if (e.key === 'Enter' && isLastField) {
      e.preventDefault();
      if (step === 1) {
        handleStep1Submit(e as any);
      } else if (step === 2) {
        handleStep2Submit(e as any);
      }
    }
  };

  const handleStep2Submit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!cpf.trim() || !cep.trim()) {
      return;
    }

    setIsSubmitting(true);

    // Salvar dados completos
    const simulationData = {
      name: name.trim(),
      whatsapp: whatsapp.trim(),
      cpf: cpf.replace(/\D/g, ''),
      cep: cep.replace(/\D/g, ''),
      ref: new URLSearchParams(window.location.search).get('ref') || '',
      origin: document.referrer || 'direct',
      timestamp: new Date().toISOString(),
    };

    // Log para debug (em produção, enviar para API)
    console.log('Complete simulation data:', simulationData);

    // Simular delay de envio
    setTimeout(() => {
      onSubmit({ name, whatsapp, cpf, cep });
      setIsSubmitting(false);
      // Reset para próxima abertura
      setStep(1);
      setName('');
      setWhatsapp('');
      setCpf('');
      setCep('');
    }, 500);
  };

  const handleBack = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setStep(1);
      setIsTransitioning(false);
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-[#1a1f2e] rounded-lg shadow-2xl max-w-md w-full border border-[#C6D600]/20">
        {/* Header com indicador de etapa */}
        <div className="flex items-center justify-between p-6 border-b border-[#C6D600]/10">
          <div className="flex-1">
            <h2 className="text-xl font-bold text-white mb-3">
              {step === 1 ? 'Inicie sua simulação' : 'Agora vamos buscar as melhores ofertas'}
            </h2>
            {/* Indicador de progresso */}
            <div className="flex items-center gap-2 text-xs text-[#B0B0B0] mb-2">
              <span className={`transition-colors ${step >= 1 ? 'text-[#C6D600]' : 'text-[#666]'}`}>●</span>
              <span>Etapa {step} de 2</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-[#B0B0B0] hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Form com transição */}
        <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
          {step === 1 ? (
            // ETAPA 1
            <form onSubmit={handleStep1Submit} className="p-6 space-y-4">
              <p className="text-sm text-[#B0B0B0] mb-4">Leva menos de 1 minuto</p>

              {/* Nome */}
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Nome completo
                </label>
                <input
                  ref={nameInputRef}
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Seu nome"
                  className="w-full px-4 py-3 bg-[#0B0F1A] border border-[#C6D600]/20 rounded-lg text-white placeholder-[#666] focus:outline-none focus:border-[#C6D600] transition-colors"
                  disabled={isSubmitting}
                />
              </div>

              {/* WhatsApp */}
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  WhatsApp
                </label>
                <input
                  type="tel"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(formatWhatsApp(e.target.value))}
                  onKeyDown={(e) => handleKeyDown(e, true)}
                  placeholder="Seu WhatsApp com DDD"
                  className="w-full px-4 py-3 bg-[#0B0F1A] border border-[#C6D600]/20 rounded-lg text-white placeholder-[#666] focus:outline-none focus:border-[#C6D600] transition-colors"
                  disabled={isSubmitting}
                />
              </div>

              {/* Helper */}
              <p className="text-xs text-[#B0B0B0] flex items-center gap-1">
                <Lock size={12} />
                Seus dados são protegidos e usados apenas para atendimento
              </p>

              {/* Microcopy legal */}
              <p className="text-xs text-[#888] leading-relaxed">
                Utilizamos suas informações apenas para dar continuidade ao seu atendimento
              </p>

              {/* Button */}
              <Button
                type="submit"
                disabled={!name.trim() || !whatsapp.trim() || isSubmitting}
                className="w-full bg-[#C6D600] hover:bg-[#D4E600] text-black font-semibold py-3 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <MessageCircle size={18} />
                {isSubmitting ? 'Enviando...' : 'Quero simular agora'}
              </Button>
            </form>
          ) : (
            // ETAPA 2
            <form onSubmit={handleStep2Submit} className="p-6 space-y-4">
              <p className="text-sm text-[#B0B0B0] mb-4">Precisamos de alguns dados para consultar os bancos</p>

              {/* CPF */}
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  CPF
                </label>
                <input
                  ref={cpfInputRef}
                  type="text"
                  value={cpf}
                  onChange={(e) => setCpf(formatCPF(e.target.value))}
                  placeholder="000.000.000-00"
                  className="w-full px-4 py-3 bg-[#0B0F1A] border border-[#C6D600]/20 rounded-lg text-white placeholder-[#666] focus:outline-none focus:border-[#C6D600] transition-colors"
                  disabled={isSubmitting}
                />
              </div>

              {/* Helper CPF */}
              <p className="text-xs text-[#B0B0B0] flex items-center gap-1">
                <Lock size={12} />
                Seus dados são protegidos e usados apenas para análise de crédito
              </p>

              {/* CEP */}
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  CEP
                </label>
                <input
                  type="text"
                  value={cep}
                  onChange={(e) => setCep(formatCEP(e.target.value))}
                  onKeyDown={(e) => handleKeyDown(e, true)}
                  placeholder="00000-000"
                  className="w-full px-4 py-3 bg-[#0B0F1A] border border-[#C6D600]/20 rounded-lg text-white placeholder-[#666] focus:outline-none focus:border-[#C6D600] transition-colors"
                  disabled={isSubmitting}
                />
              </div>

              {/* Trust message */}
              <p className="text-xs text-[#B0B0B0]">
                Sem impacto no seu score
              </p>

              {/* Buttons */}
              <Button
                type="submit"
                disabled={!cpf.trim() || !cep.trim() || isSubmitting}
                className="w-full bg-[#C6D600] hover:bg-[#D4E600] text-black font-semibold py-3 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Processando...' : 'Ver ofertas'}
              </Button>

              <button
                type="button"
                onClick={handleBack}
                className="w-full text-[#B0B0B0] hover:text-white text-sm font-medium py-2 transition-colors"
              >
                Voltar
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
