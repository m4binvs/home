import { InputHTMLAttributes, TextareaHTMLAttributes, ReactNode } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export function Input({ label, className = '', ...props }: InputProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block mb-2 text-[#fafafa]">
          {label}
        </label>
      )}
      <input
        className={`w-full px-4 py-3 bg-[#27272A] border border-[#262626] rounded text-[#fafafa] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:border-transparent ${className}`}
        {...props}
      />
    </div>
  );
}

export function Textarea({ label, className = '', ...props }: TextareaProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block mb-2 text-[#fafafa]">
          {label}
        </label>
      )}
      <textarea
        className={`w-full px-4 py-3 bg-[#27272A] border border-[#262626] rounded text-[#fafafa] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:border-transparent resize-none ${className}`}
        {...props}
      />
    </div>
  );
}

export function Select({
  label,
  className = '',
  children,
  ...props
}: InputProps & { children: ReactNode }) {
  return (
    <div className="w-full">
      {label && (
        <label className="block mb-2 text-[#fafafa]">
          {label}
        </label>
      )}
      <select
        className={`w-full px-4 py-3 bg-[#27272A] border border-[#262626] rounded text-[#fafafa] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:border-transparent ${className}`}
        {...props}
      >
        {children}
      </select>
    </div>
  );
}
