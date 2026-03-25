import * as React from "react";

interface NavigationProps {
  className?: string;
}

export function Navigation({ className = "" }: NavigationProps) {
  return (
    <nav
      className={`flex relative gap-5 justify-center items-center py-0.5 pr-1 pl-0.5 border border-gray-100 border-solid bg-neutral-50 rounded-[55px] max-md:hidden ${className}`}
    >
      <a
        href="#"
        className="relative gap-2.5 self-stretch px-2 py-2.5 text-sm font-medium text-center no-underline bg-white border border-gray-100 border-solid rounded-[39px] text-slate-900"
      >
        Home
      </a>
      <a
        href="#"
        className="relative gap-2.5 px-2.5 py-2 text-sm no-underline text-zinc-400"
      >
        How it works
      </a>
      <a
        href="#"
        className="relative gap-2.5 px-2.5 py-2 text-sm no-underline text-zinc-400"
      >
        Contact us
      </a>
      <a
        href="#"
        className="relative gap-2.5 px-2.5 py-2 text-sm no-underline text-zinc-400"
      >
        FAQ's{" "}
      </a>
    </nav>
  );
}
