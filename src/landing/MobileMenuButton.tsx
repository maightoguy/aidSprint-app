import * as React from "react";

interface MobileMenuButtonProps {
  className?: string;
  onClick?: () => void;
}

export function MobileMenuButton({
  className = "",
  onClick,
}: MobileMenuButtonProps) {
  return (
    <button
      aria-label="Menu"
      onClick={onClick}
      className={`hidden flex-col gap-1 justify-center items-center p-2 cursor-pointer border-[none] max-md:flex ${className}`}
    >
      <div className="w-6 h-0.5 rounded-sm bg-slate-900" />
      <div className="w-6 h-0.5 rounded-sm bg-slate-900" />
      <div className="w-6 h-0.5 rounded-sm bg-slate-900" />
    </button>
  );
}
