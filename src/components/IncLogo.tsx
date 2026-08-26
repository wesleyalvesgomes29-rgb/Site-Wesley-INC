import React from 'react';

interface IncLogoProps {
  className?: string;
  variant?: 'orange-bg' | 'dark-bg' | 'inline-light';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const IncLogo: React.FC<IncLogoProps> = ({
  className = '',
  variant = 'dark-bg',
  size = 'md',
}) => {
  const sizeClasses = {
    sm: 'h-7',
    md: 'h-9',
    lg: 'h-12',
    xl: 'h-16',
  };

  if (variant === 'orange-bg') {
    return (
      <div className={`inline-flex flex-col items-center justify-center bg-[#FF600B] text-white px-4 py-2 rounded-xl shadow-lg ${className}`}>
        <div className="flex items-center gap-1">
          <span className="font-extrabold text-2xl tracking-tighter font-display leading-none">INC</span>
        </div>
        <span className="text-[9px] tracking-[0.25em] font-semibold text-white/90 uppercase mt-0.5">
          EMPREENDIMENTOS
        </span>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* INC Monogram Emblem */}
      <div className="relative flex items-center justify-center">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF600B] to-[#D94F04] flex items-center justify-center shadow-lg shadow-[#FF600B]/30 border border-[#FF8238]/40">
          <svg viewBox="0 0 100 100" className="w-6 h-6 text-white fill-current" aria-label="INC Logo">
            <path d="M18 20 H30 V80 H18 Z" />
            <path d="M38 20 H48 L72 70 V20 H82 V80 H72 L48 30 V80 H38 Z" fillRule="evenodd" />
            <path d="M78 20 H88 V30 H78 Z" opacity="0.1" />
          </svg>
        </div>
        {/* Glow light effect */}
        <div className="absolute -inset-1 bg-[#FF600B]/20 rounded-xl blur-sm -z-10" />
      </div>

      {/* Brand Text Typography */}
      <div className="flex flex-col">
        <div className="flex items-baseline">
          <span className="font-black text-2xl tracking-tight text-white font-display">
            INC
          </span>
          <span className="w-2 h-2 rounded-full bg-[#FF600B] ml-1 mb-1 animate-pulse" />
        </div>
        <span className="text-[10px] tracking-[0.28em] font-medium text-neutral-400 uppercase -mt-1">
          EMPREENDIMENTOS
        </span>
      </div>
    </div>
  );
};
