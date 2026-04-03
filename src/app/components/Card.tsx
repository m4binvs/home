import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = false }: CardProps) {
  return (
    <div
      className={`bg-[#18181B] border border-[#262626] rounded-lg p-8 ${
        hover ? 'transition-all duration-300 hover:border-[#6366f1] hover:shadow-lg hover:shadow-[#6366f1]/10' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
