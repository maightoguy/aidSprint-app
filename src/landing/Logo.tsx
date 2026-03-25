import * as React from "react";

interface LogoProps {
  className?: string;
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <img
      src="https://api.builder.io/api/v1/image/assets/TEMP/eddf1e994642930171765be7804dc5a5d0a35538?width=257"
      alt="AidSprint Logo"
      className={`relative shrink-0 w-32 h-[29px] max-sm:h-auto max-sm:w-[100px] ${className}`}
    />
  );
}
