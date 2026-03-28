import { MessageCircle } from 'lucide-react';

interface StickyBottomCTAProps {
  onClick: () => void;
}

export default function StickyBottomCTA({ onClick }: StickyBottomCTAProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 lg:hidden bg-gradient-to-t from-[#0B0F1A] to-[#0B0F1A]/80 backdrop-blur-sm border-t border-[#C6D600]/20 p-4 z-40">
      <button
        onClick={onClick}
        className="w-full bg-[#C6D600] hover:bg-[#B8C700] text-black font-bold py-3 rounded-lg transition-all flex items-center justify-center gap-2 active:scale-95 shadow-[0_0_15px_rgba(198,214,0,0.15)] hover:shadow-[0_0_25px_rgba(198,214,0,0.35)]"
      >
        <MessageCircle size={20} />
        Simular agora
      </button>
    </div>
  );
}
