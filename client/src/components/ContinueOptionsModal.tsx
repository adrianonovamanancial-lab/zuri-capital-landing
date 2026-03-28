import { X, MessageCircle, MessageSquare, Download, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ContinueOptionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onWhatsApp: () => void;
  onChat: () => void;
  onApp: () => void;
}

export default function ContinueOptionsModal({
  isOpen,
  onClose,
  onWhatsApp,
  onChat,
  onApp,
}: ContinueOptionsModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-[#1a1f2e] rounded-lg shadow-2xl max-w-md w-full border border-[#C6D600]/20">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#C6D600]/10">
          <h2 className="text-xl font-bold text-white">Como prefere continuar?</h2>
          <button
            onClick={onClose}
            className="text-[#B0B0B0] hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Options */}
        <div className="p-6 space-y-3">
          {/* WhatsApp */}
          <Button
            onClick={onWhatsApp}
            className="w-full bg-[#25D366] hover:bg-[#20BA58] text-white font-semibold py-3 rounded-lg transition-all flex items-center justify-center gap-2"
          >
            <MessageCircle size={20} />
            Conversar no WhatsApp
          </Button>

          {/* Chat */}
          <Button
            onClick={onChat}
            className="w-full bg-[#C6D600] hover:bg-[#D4E600] text-black font-semibold py-3 rounded-lg transition-all flex items-center justify-center gap-2"
          >
            <MessageSquare size={20} />
            Conversar aqui
          </Button>

          {/* App */}
          <div>
            <Button
              onClick={onApp}
              className="w-full bg-[#2a3f5f] hover:bg-[#3a4f6f] text-white font-semibold py-3 rounded-lg transition-all flex items-center justify-center gap-2 border border-[#C6D600]/20"
            >
              <Smartphone size={20} />
              Baixar nosso aplicativo
            </Button>
            <div className="flex items-center justify-center gap-4 mt-4 w-full">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                alt="Google Play" 
                className="h-10 opacity-100"
              />
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                alt="App Store" 
                className="h-10 opacity-100"
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 pb-6 pt-3 border-t border-[#C6D600]/10">
          <p className="text-xs text-[#B0B0B0] text-center">
            Escolha a forma mais conveniente para você
          </p>
        </div>
      </div>
    </div>
  );
}
