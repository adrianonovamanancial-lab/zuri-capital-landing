import { useState, useRef, useEffect } from 'react';
import { Send, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface ChatBotProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ChatBot({ isOpen, onClose }: ChatBotProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Oi! Vou te ajudar a encontrar a melhor opção de crédito agora. Quanto você precisa?',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simulate bot response delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: simulateBotResponse(input),
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsLoading(false);
    }, 800);
  };

  const simulateBotResponse = (userInput: string): string => {
    const responses: { [key: string]: string } = {
      'R$': 'Perfeito! Vou processar sua simulação. Com esse valor, você pode ter acesso a diferentes prazos e taxas. Qual é a melhor duração para você?',
      'mês': 'Excelente! Geramos sua proposta com as melhores condições. Você pode visualizar todos os detalhes no app. Quer continuar?',
      'sim': 'Ótimo! Você será redirecionado para finalizar sua contratação com segurança. Tudo pronto! 🎉',
      'não': 'Sem problemas! Você pode voltar a simular quando quiser. Estou aqui para ajudar!',
      default: 'Entendi! Deixa eu processar isso para você. Um momento...',
    };

    for (const [key, response] of Object.entries(responses)) {
      if (userInput.toLowerCase().includes(key.toLowerCase())) {
        return response;
      }
    }

    return responses.default;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center md:justify-end md:p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm md:hidden"
        onClick={onClose}
      />

      {/* Chat Container */}
      <div className="relative w-full h-full md:h-auto md:w-96 md:rounded-2xl bg-[#1a1f2e] border border-[#C6D600]/20 flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-[#C6D600]/10 bg-gradient-to-r from-[#0B0F1A] to-[#1a1f2e]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C6D600] to-[#6B7F00] flex items-center justify-center">
              <span className="text-[#0B0F1A] font-bold text-sm">Z</span>
            </div>
            <div>
              <h3 className="text-white font-semibold text-sm">Zuri Capital</h3>
              <p className="text-[#A0A0A0] text-xs">Online agora</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-lg transition-all duration-300 ease-out text-[#A0A0A0] hover:text-white"
          >
            <X size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#0B0F1A]">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender === 'user' ? 'justify-end' : 'justify-start'
              } animate-in fade-in slide-in-from-bottom-2 duration-300`}
            >
              <div
                className={`max-w-xs px-4 py-2 rounded-2xl ${
                  message.sender === 'user'
                    ? 'bg-[#C6D600] text-[#0B0F1A] rounded-br-none'
                    : 'bg-[#2A2A2A] text-[#E8E8E8] rounded-bl-none'
                }`}
              >
                <p className="text-sm leading-relaxed">{message.text}</p>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-[#2A2A2A] text-[#E8E8E8] px-4 py-3 rounded-2xl rounded-bl-none">
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#C6D600] animate-bounce" />
                  <div className="w-2 h-2 rounded-full bg-[#C6D600] animate-bounce" style={{ animationDelay: '0.1s' }} />
                  <div className="w-2 h-2 rounded-full bg-[#C6D600] animate-bounce" style={{ animationDelay: '0.2s' }} />
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form
          onSubmit={handleSendMessage}
          className="p-4 border-t border-[#C6D600]/10 bg-[#1a1f2e]"
        >
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Digite sua mensagem..."
              className="flex-1 bg-[#2A2A2A] text-[#E8E8E8] placeholder-[#A0A0A0] px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-[#C6D600]/50 transition-all duration-300 ease-out"
              disabled={isLoading}
            />
            <Button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="bg-[#C6D600] hover:bg-[#B8C700] text-[#0B0F1A] rounded-full p-2 h-auto transition-all duration-300 ease-out disabled:opacity-50"
            >
              <Send size={18} />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
