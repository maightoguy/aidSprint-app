import React, { useState } from "react";

// Assets
import logoPng from "../assets/logos/primary-logo.png";
import m_menu from "../assets/header/mmtor1us-jkedjjg.svg";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleLogoClick = () => {
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Desktop Header */}
      <header className="hidden desktop:flex fixed top-0 left-0 right-0 z-50 items-center justify-between px-[120px] py-[20px] bg-white shadow-[0_4px_50px_0_rgba(0,0,0,0.1)] h-[82px]">
        {/* Logo */}
        <button
          type="button"
          onClick={handleLogoClick}
          className="flex items-center shrink-0"
        >
          <img
            src={logoPng}
            alt="AidSprint Logo"
            className="h-[30px] w-auto object-contain"
          />
        </button>

        {/* Navigation Wrapper */}
        <div className="flex items-center justify-center gap-[20px] bg-[#fafafa] border border-[#f0f1f2] rounded-[55px] p-[1px_3px_1px_1px]">
          {/* Active State (Home) */}
          <div className="flex items-center justify-center bg-white border border-[#f0f1f2] rounded-[39px] py-[9px] px-[7px]">
            <a
              href="#home"
              className="text-[#041133] text-[14px] font-medium font-['Space_Grotesk']"
            >
              Home
            </a>
          </div>

          {/* Inactive States */}
          <a
            href="#how-it-works"
            className="text-[#9ca1aa] text-[14px] font-['Space_Grotesk'] py-[8px] px-[10px] hover:text-[#041133] transition-colors"
          >
            How it works
          </a>
          <a
            href="#contact-us"
            className="text-[#9ca1aa] text-[14px] font-['Space_Grotesk'] py-[8px] px-[10px] hover:text-[#041133] transition-colors"
          >
            Contact us
          </a>
          <a
            href="#faqs"
            className="text-[#9ca1aa] text-[14px] font-['Space_Grotesk'] py-[8px] px-[10px] hover:text-[#041133] transition-colors"
          >
            FAQ’s
          </a>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="flex desktop:hidden fixed top-0 left-0 right-0 z-50 items-center justify-between px-[24px] py-[20px] bg-white shadow-[0_4px_10px_0_rgba(0,0,0,0.1)] h-[64px]">
        <button
          type="button"
          onClick={handleLogoClick}
          className="flex items-center shrink-0"
        >
          <img
            src={logoPng}
            alt="AidSprint Logo"
            className="h-[24px] w-auto object-contain"
          />
        </button>
        <button
          className="flex items-center justify-center w-[24px] h-[24px] shrink-0"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <img
            src={m_menu}
            alt="Menu"
            className="w-full h-full object-contain"
          />
        </button>
      </header>

      {/* Mobile Menu Overlay (Optional, if needed for functionality) */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-[64px] bg-white z-40 desktop:hidden flex flex-col p-6 gap-4 shadow-inner">
          <a
            href="#home"
            className="text-[#041133] text-[18px] font-medium font-['Space_Grotesk'] py-2 border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#how-it-works"
            className="text-[#646a77] text-[18px] font-['Space_Grotesk'] py-2 border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            How it works
          </a>
          <a
            href="#contact-us"
            className="text-[#646a77] text-[18px] font-['Space_Grotesk'] py-2 border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact us
          </a>
          <a
            href="#faqs"
            className="text-[#646a77] text-[18px] font-['Space_Grotesk'] py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            FAQ's
          </a>
        </div>
      )}
    </>
  );
}

export default Header;
