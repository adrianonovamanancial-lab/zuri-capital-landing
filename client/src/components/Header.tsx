import { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';

interface HeaderProps {
  onSimulateClick: () => void;
}

export default function Header({ onSimulateClick }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#0B0F1A]/95 backdrop-blur-md border-b border-[#C6D600]/10">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 hover:opacity-80 transition-opacity md:justify-start justify-center flex-1 md:flex-none">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310419663030068499/nsn32NQj46JZoJdTENEPY6/Group1(1)_b8172d56.png"
            alt="Zuri Capital"
            className="h-10 w-auto"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-[#A0A0A0] hover:text-[#C6D600] transition-colors text-sm">
            Por que Zuri
          </a>
          <a href="#how-it-works" className="text-[#A0A0A0] hover:text-[#C6D600] transition-colors text-sm">
            Como funciona
          </a>
          <a href="#security" className="text-[#A0A0A0] hover:text-[#C6D600] transition-colors text-sm">
            Segurança
          </a>
          <button
            onClick={onSimulateClick}
            className="bg-[#C6D600] hover:bg-[#B8C700] text-[#0B0F1A] font-bold px-6 py-2 rounded-lg transition-all duration-300 ease-out text-sm flex items-center gap-2"
          >
            <MessageCircle size={16} />
            Começar agora
          </button>
        </nav>

        {/* Mobile Menu Button - REMOVED */}
      </div>

      {/* Mobile Menu - REMOVED */}
    </header>
  );
}
