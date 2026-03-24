import React from 'react';

interface CTAButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function CTAButton({
  onClick,
  children,
  variant = 'primary',
  size = 'md',
  className = '',
}: CTAButtonProps) {
  const baseClasses = 'font-bold rounded-[10px] transition-all duration-300 ease-out active:scale-95 font-mono w-fit hover:scale-[1.03] shadow-[0_0_15px_rgba(198,214,0,0.15)]';

  const variantClasses = {
    primary: 'bg-[#C6D600] hover:bg-[#B8C700] text-[#0B0F1A] hover:shadow-[0_0_25px_rgba(198,214,0,0.35)]',
    secondary: 'bg-[#2A2A2A] hover:bg-[#3A3A3A] text-[#E8E8E8] hover:shadow-[0_0_15px_rgba(198,214,0,0.1)]',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-7 py-3.5 text-base',
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {children}
    </button>
  );
}
