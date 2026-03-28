import { useState } from 'react';
import { X, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SimulationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: { name: string; whatsapp: string }) => void;
}

export default function SimulationModal({ isOpen, onClose, onSubmit }: SimulationModalProps) {
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !whatsapp.trim()) {
      return;
    }

    setIsSubmitting(true);

    // Salvar dados
    const simulationData = {
      name: name.trim(),
      whatsapp: whatsapp.trim(),
      ref: new URLSearchParams(window.location.search).get('ref') || '',
      origin: document.referrer || 'direct',
      timestamp: new Date().toISOString(),
    };

    // Log para debug (em produção, enviar para API)
    console.log('Simulation data:', simulationData);

    // Simular delay de envio
    setTimeout(() => {
      onSubmit({ name, whatsapp });
      setIsSubmitting(false);
    }, 500);
  };

  const formatWhatsApp = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 2) return numbers;
    if (numbers.length <= 7) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-[#1a1f2e] rounded-lg shadow-2xl max-w-md w-full border border-[#C6D600]/20">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#C6D600]/10">
          <h2 className="text-xl font-bold text-white">Inicie sua simulação</h2>
          <button
            onClick={onClose}
            className="text-[#B0B0B0] hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Nome */}
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Nome completo
            </label>
            <input
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
              placeholder="(11) 99999-9999"
              className="w-full px-4 py-3 bg-[#0B0F1A] border border-[#C6D600]/20 rounded-lg text-white placeholder-[#666] focus:outline-none focus:border-[#C6D600] transition-colors"
              disabled={isSubmitting}
            />
          </div>

          {/* Microcopy */}
          <p className="text-xs text-[#B0B0B0] leading-relaxed">
            Seus dados são utilizados apenas para dar continuidade ao seu atendimento
          </p>

          {/* Button */}
          <Button
            type="submit"
            disabled={!name.trim() || !whatsapp.trim() || isSubmitting}
            className="w-full bg-[#C6D600] hover:bg-[#D4E600] text-black font-semibold py-3 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            <MessageCircle size={18} />
            {isSubmitting ? 'Enviando...' : 'Continuar'}
          </Button>
        </form>
      </div>
    </div>
  );
}
