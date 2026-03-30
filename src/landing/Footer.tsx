import React from "react";

import secLogo from "../assets/logos/sec-logo.png";

// Assets for Desktop

import d_playstoreIcon from "../assets/footer/mmz3lttv-hdrtytr.svg";
import d_appstoreIcon from "../assets/footer/mmz3lttw-vp2sdyk.svg";

import d_social1 from "../assets/footer/mmz3lttw-6brrut5.svg"; // X
import d_social2 from "../assets/footer/mmz3lttw-jf6uts9.svg"; // Facebook
import d_social3 from "../assets/footer/mmz3lttw-52yvy8v.svg"; // Instagram
import d_social4 from "../assets/footer/mmz3lttw-zodzmn5.svg"; // LinkedIn

import d_watermark from "../assets/footer/mmz3lttw-as1z5sq.svg";

// Assets for Mobile

import m_playstoreIcon from "../assets/footer/mmz3meu6-z7jsy9j.svg";
import m_appstoreIcon from "../assets/footer/mmz3meu6-nsfjqbd.svg";

import m_social1 from "../assets/footer/mmz3meu6-041ibz1.svg";
import m_social2 from "../assets/footer/mmz3meu6-ia2prb7.svg";
import m_social3 from "../assets/footer/mmz3meu6-bt2o1ny.svg";
import m_social4 from "../assets/footer/mmz3meu6-0cqmmkk.svg";

import m_watermark from "../assets/footer/mmz3meu5-smq65tg.svg";

const DesktopLogo = () => (
  <div className="flex items-start shrink-0 relative h-[30px]">
    <img
      src={secLogo}
      alt="AidSprint Logo"
      className="h-full w-auto object-contain"
    />
  </div>
);

const MobileLogo = () => (
  <div className="flex items-start shrink-0 relative h-[30px]">
    <img
      src={secLogo}
      alt="AidSprint Logo"
      className="h-full w-auto object-contain"
    />
  </div>
);

export function Footer() {
  return (
    <footer className="relative flex flex-col items-center w-full py-[50px] px-[24px] desktop:py-[70px] desktop:px-[120px] overflow-hidden bg-gradient-to-br from-[#0c3399] to-[#041133] gap-[40px]">
      {/* Background Watermark */}
      <img
        src={d_watermark}
        alt="Watermark"
        className="hidden desktop:block absolute bottom-0 right-[326px] w-[787px] h-[195px] pointer-events-none"
      />
      <img
        src={m_watermark}
        alt="Watermark"
        className="block desktop:hidden absolute bottom-[1px] left-0 w-[381px] h-[95px] pointer-events-none"
      />

      <div className="relative z-10 flex flex-col items-center w-full max-w-[1200px] gap-[64px]">
        {/* Top Section */}
        <div className="flex flex-col items-center gap-[14px]">
          {/* Logo & Subtitle */}
          <div className="flex flex-col items-center gap-[8px]">
            <div className="hidden desktop:block">
              <DesktopLogo />
            </div>
            <div className="block desktop:hidden">
              <MobileLogo />
            </div>
            <p className="text-[#b1b5c0] text-[14px] font-['Inter'] tracking-[-0.2px] text-center mt-[4px]">
              Chat as if you are talking to a human
            </p>
          </div>

          {/* Store Buttons */}
          <div className="flex items-center justify-center gap-[11px] desktop:gap-[14px]">
            <button className="flex items-center justify-center gap-[10px] bg-white rounded-full py-[8px] px-[16px] desktop:py-[10px] desktop:px-[20px] hover:bg-gray-100 transition-colors">
              <img
                src={d_playstoreIcon}
                alt="Play Store"
                className="hidden desktop:block w-[20px] h-[24px]"
              />
              <img
                src={m_playstoreIcon}
                alt="Play Store"
                className="block desktop:hidden w-[9px] h-[11px]"
              />
              <span className="text-[#041133] text-[11px] desktop:text-[14px] font-medium font-['Inter'] tracking-[-0.16px] desktop:tracking-[-0.2px]">
                Get On playstore
              </span>
            </button>
            <button className="flex items-center justify-center gap-[10px] bg-white rounded-full py-[8px] px-[16px] desktop:py-[10px] desktop:px-[20px] hover:bg-gray-100 transition-colors">
              <img
                src={d_appstoreIcon}
                alt="App Store"
                className="hidden desktop:block w-[23px] h-[27px]"
              />
              <img
                src={m_appstoreIcon}
                alt="App Store"
                className="block desktop:hidden w-[9px] h-[11px]"
              />
              <span className="text-[#041133] text-[11px] desktop:text-[14px] font-medium font-['Inter'] tracking-[-0.16px] desktop:tracking-[-0.2px]">
                Get on Appstore
              </span>
            </button>
          </div>
        </div>

        {/* Links and Socials */}
        <div className="flex flex-col desktop:flex-row items-center justify-between w-full gap-[64px] desktop:gap-0">
          <nav className="flex items-center gap-[32px]">
            <a
              href="#home"
              className="text-[#e6e7eb] text-[14px] font-['Inter'] tracking-[-0.2px] hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#contact-us"
              className="text-[#e6e7eb] text-[14px] font-['Inter'] tracking-[-0.2px] hover:text-white transition-colors"
            >
              Contact
            </a>
            <a
              href="#how-it-works"
              className="text-[#e6e7eb] text-[14px] font-['Inter'] tracking-[-0.2px] hover:text-white transition-colors"
            >
              How it works
            </a>
            <a
              href="#faqs"
              className="text-[#e6e7eb] text-[14px] font-['Inter'] tracking-[-0.2px] hover:text-white transition-colors"
            >
              FAQ's
            </a>
          </nav>

          <div className="flex items-center gap-[16px]">
            <a href="#" className="hover:opacity-80 transition-opacity">
              <img
                src={d_social1}
                alt="X"
                className="hidden desktop:block w-[16px] h-[16px]"
              />
              <img
                src={m_social1}
                alt="X"
                className="block desktop:hidden w-[16px] h-[16px]"
              />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <img
                src={d_social2}
                alt="Facebook"
                className="hidden desktop:block w-[16px] h-[16px]"
              />
              <img
                src={m_social2}
                alt="Facebook"
                className="block desktop:hidden w-[16px] h-[16px]"
              />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <img
                src={d_social3}
                alt="Instagram"
                className="hidden desktop:block w-[16px] h-[16px]"
              />
              <img
                src={m_social3}
                alt="Instagram"
                className="block desktop:hidden w-[16px] h-[16px]"
              />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <img
                src={d_social4}
                alt="LinkedIn"
                className="hidden desktop:block w-[16px] h-[16px]"
              />
              <img
                src={m_social4}
                alt="LinkedIn"
                className="block desktop:hidden w-[16px] h-[16px]"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Legal Section */}
      <div className="relative z-10 flex flex-col items-center w-full gap-[24px]">
        <div className="w-full h-[1px] bg-[#eaeaea] opacity-20" />
        <div className="flex items-center gap-[12px]">
          <span className="text-[#e6e7eb] text-[12px] font-['Inter']">
            Copyright Aidsprint Solutions 2026
          </span>
          <div className="w-[2px] h-[2px] rounded-full bg-[#e6e7eb]" />
          <a
            href="#"
            className="text-[#e6e7eb] text-[12px] font-['Inter'] hover:text-white transition-colors"
          >
            Terms
          </a>
          <div className="w-[2px] h-[2px] rounded-full bg-[#e6e7eb]" />
          <a
            href="#"
            className="text-[#e6e7eb] text-[12px] font-['Inter'] hover:text-white transition-colors"
          >
            Privacy
          </a>
        </div>
      </div>
    </footer>
  );
}
