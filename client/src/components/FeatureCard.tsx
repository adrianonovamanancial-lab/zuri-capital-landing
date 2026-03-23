import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="group relative bg-[#0B0F1A] border border-[#C6D600]/20 p-8 rounded-xl transition-all duration-300 hover:border-[#C6D600]/50 hover:shadow-[0_0_20px_rgba(198,214,0,0.1)]">
      {/* Hover gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#C6D600]/5 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300 pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10">
        <div className="w-12 h-12 bg-[#C6D600]/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#C6D600]/30 transition-colors duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3 font-mono">{title}</h3>
        <p className="text-[#A0A0A0] group-hover:text-[#B0B0B0] transition-colors duration-300">
          {description}
        </p>
      </div>
    </div>
  );
}
