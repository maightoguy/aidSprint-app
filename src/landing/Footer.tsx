import React from "react";

// Assets for Desktop
import d_vector1 from "../assets/footer/mmz3lttv-aoktajo.svg";
import d_vector2 from "../assets/footer/mmz3lttv-1d8wmgq.svg";
import d_vector3 from "../assets/footer/mmz3lttv-77e9zjd.svg";
import d_vector4 from "../assets/footer/mmz3lttv-f1iwjc1.svg";
import d_vector5 from "../assets/footer/mmz3lttv-gdmin11.svg";
import d_vector6 from "../assets/footer/mmz3lttv-jl3w3sx.svg";
import d_vector7 from "../assets/footer/mmz3lttv-2up5hxh.svg";
import d_vector8 from "../assets/footer/mmz3lttv-cy5ghv3.svg";
import d_logoIcon from "../assets/footer/mmz3lttv-nhrx1ln.svg";

import d_playstoreIcon from "../assets/footer/mmz3lttv-hdrtytr.svg";
import d_appstoreIcon from "../assets/footer/mmz3lttw-vp2sdyk.svg";

import d_social1 from "../assets/footer/mmz3lttw-6brrut5.svg"; // X
import d_social2 from "../assets/footer/mmz3lttw-jf6uts9.svg"; // Facebook
import d_social3 from "../assets/footer/mmz3lttw-52yvy8v.svg"; // Instagram
import d_social4 from "../assets/footer/mmz3lttw-zodzmn5.svg"; // LinkedIn

import d_watermark from "../assets/footer/mmz3lttw-as1z5sq.svg";

// Assets for Mobile
import m_vector1 from "../assets/footer/mmz3meu5-o8y9ag3.svg";
import m_vector2 from "../assets/footer/mmz3meu5-d1s5pnd.svg";
import m_vector3 from "../assets/footer/mmz3meu5-fz4cddw.svg";
import m_vector4 from "../assets/footer/mmz3meu5-qtl0d2b.svg";
import m_vector5 from "../assets/footer/mmz3meu5-tdx05m0.svg";
import m_vector6 from "../assets/footer/mmz3meu5-uwvi5yn.svg";
import m_vector7 from "../assets/footer/mmz3meu6-o33p640.svg";
import m_vector8 from "../assets/footer/mmz3meu6-htznlf3.svg";
import m_logoIcon from "../assets/footer/mmz3meu5-c8rtwsf.svg";

import m_playstoreIcon from "../assets/footer/mmz3meu6-z7jsy9j.svg";
import m_appstoreIcon from "../assets/footer/mmz3meu6-nsfjqbd.svg";

import m_social1 from "../assets/footer/mmz3meu6-041ibz1.svg";
import m_social2 from "../assets/footer/mmz3meu6-ia2prb7.svg";
import m_social3 from "../assets/footer/mmz3meu6-bt2o1ny.svg";
import m_social4 from "../assets/footer/mmz3meu6-0cqmmkk.svg";

import m_watermark from "../assets/footer/mmz3meu5-smq65tg.svg";

const DesktopLogo = () => (
  <div className="flex items-start shrink-0 relative h-[30px]">
    <img src={d_vector1} className="mt-[6px] w-[16px] h-[17px]" alt="" />
    <img
      src={d_vector2}
      className="mt-[6px] ml-[1px] w-[3px] h-[18px]"
      alt=""
    />
    <img
      src={d_vector3}
      className="mt-[6px] ml-[1px] w-[12px] h-[18px]"
      alt=""
    />
    <img
      src={d_vector4}
      className="mt-[6px] ml-[2px] w-[13px] h-[18px]"
      alt=""
    />
    <img
      src={d_vector5}
      className="mt-[10px] ml-[2px] w-[12px] h-[19px]"
      alt=""
    />
    <img
      src={d_vector6}
      className="mt-[10px] ml-[2px] w-[7px] h-[13px]"
      alt=""
    />
    <img
      src={d_vector2}
      className="mt-[6px] ml-[1px] w-[3px] h-[18px]"
      alt=""
    />
    <img
      src={d_vector7}
      className="mt-[10px] ml-[2px] w-[11px] h-[13px]"
      alt=""
    />
    <img
      src={d_vector8}
      className="mt-[7px] ml-[1px] w-[7px] h-[16px]"
      alt=""
    />
    <img
      src={d_logoIcon}
      className="ml-[6px] w-[29px] h-[29px]"
      alt="Logo Icon"
    />
  </div>
);

const MobileLogo = () => (
  <div className="flex items-start shrink-0 relative h-[30px]">
    <img src={m_vector1} className="mt-[6px] w-[16px] h-[17px]" alt="" />
    <img
      src={m_vector2}
      className="mt-[6px] ml-[1px] w-[3px] h-[18px]"
      alt=""
    />
    <img
      src={m_vector3}
      className="mt-[6px] ml-[1px] w-[12px] h-[18px]"
      alt=""
    />
    <img
      src={m_vector4}
      className="mt-[6px] ml-[2px] w-[13px] h-[18px]"
      alt=""
    />
    <img
      src={m_vector5}
      className="mt-[10px] ml-[2px] w-[12px] h-[19px]"
      alt=""
    />
    <img
      src={m_vector6}
      className="mt-[10px] ml-[2px] w-[7px] h-[13px]"
      alt=""
    />
    <img
      src={m_vector2}
      className="mt-[6px] ml-[1px] w-[3px] h-[18px]"
      alt=""
    />
    <img
      src={m_vector7}
      className="mt-[10px] ml-[2px] w-[11px] h-[13px]"
      alt=""
    />
    <img
      src={m_vector8}
      className="mt-[7px] ml-[1px] w-[7px] h-[16px]"
      alt=""
    />
    <img
      src={m_logoIcon}
      className="ml-[6px] w-[29px] h-[29px]"
      alt="Logo Icon"
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
            © 2099 Palm UI
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
