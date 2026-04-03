interface LogoProps {
  className?: string;
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Geometric Icon */}
      <div className="relative w-10 h-10">
        <svg viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* M4 geometric shapes */}
          <rect x="0" y="0" width="4" height="20" fill="#FAFAFA" />
          <rect x="4" y="4" width="4" height="4" fill="#FAFAFA" />
          <rect x="8" y="8" width="4" height="4" fill="#FAFAFA" />
          <rect x="12" y="4" width="4" height="4" fill="#FAFAFA" />
          <rect x="16" y="0" width="4" height="20" fill="#FAFAFA" />
          {/* 4 shape */}
          <rect x="22" y="0" width="4" height="10" fill="#FAFAFA" />
          <rect x="26" y="6" width="6" height="4" fill="#FAFAFA" />
          <rect x="28" y="0" width="4" height="20" fill="#FAFAFA" />
          {/* Accent dots */}
          <g opacity="0.6">
            <circle cx="10" cy="18" r="1" fill="#6366F1" />
            <circle cx="14" cy="18" r="1" fill="#6366F1" />
            <circle cx="18" cy="18" r="1" fill="#6366F1" />
            <circle cx="22" cy="18" r="1" fill="#6366F1" />
          </g>
        </svg>
      </div>
      {/* Text */}
      <div className="flex flex-col">
        <span className="text-[18px] font-semibold text-[#fafafa] tracking-tight leading-none">M4B</span>
        <span className="text-[10px] text-[#a3a3a3] tracking-widest uppercase leading-none">Investments</span>
      </div>
    </div>
  );
}
