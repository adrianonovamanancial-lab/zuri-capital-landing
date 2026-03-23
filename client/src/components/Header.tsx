import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onSimulateClick: () => void;
}

export default function Header({ onSimulateClick }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#0B0F1A]/95 backdrop-blur-md border-b border-[#C6D600]/10">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
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
            className="bg-[#C6D600] hover:bg-[#B8C700] text-[#0B0F1A] font-bold px-6 py-2 rounded-lg transition-all duration-300 ease-out text-sm"
          >
            Simular
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#1a1f2e] border-t border-[#C6D600]/10 p-4 space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
          <a
            href="#features"
            className="block text-[#A0A0A0] hover:text-[#C6D600] transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Por que Zuri
          </a>
          <a
            href="#how-it-works"
            className="block text-[#A0A0A0] hover:text-[#C6D600] transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Como funciona
          </a>
          <a
            href="#security"
            className="block text-[#A0A0A0] hover:text-[#C6D600] transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Segurança
          </a>
          <button
            onClick={() => {
              onSimulateClick();
              setIsMobileMenuOpen(false);
            }}
            className="w-full bg-[#C6D600] hover:bg-[#B8C700] text-[#0B0F1A] font-bold px-6 py-2 rounded-lg transition-all duration-300 ease-out"
          >
            Simular agora
          </button>
        </div>
      )}
    </header>
  );
}
