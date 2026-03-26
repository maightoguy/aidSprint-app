import React from "react";

// Backgrounds
import bgDesktop from "../assets/hero/mmto6wu5-vlel6r3.png";
import bgMobile from "../assets/hero/mmto8yox-p48dey2.png";

// Icons
import badgeIcon from "../assets/hero/mmto6wu5-adf34k3.svg";
import playstoreIcon from "../assets/hero/mmto6wu5-th9wohr.svg";
import appstoreIcon from "../assets/hero/mmto6wu5-tfrctqr.svg";
import notchIcon from "../assets/hero/mmto6wu5-0x6vhks.svg";

// Collage Images
import img1 from "../assets/hero/mmto6wud-umdwqsa.png";
import img2 from "../assets/hero/mmto6wud-nh74a1o.png";
import img3 from "../assets/hero/mmto6wud-nte1vsi.png";
import img4 from "../assets/hero/mmto6wud-me60uat.png";
import img5 from "../assets/hero/mmto6wud-xuk7b3w.png";
import img6 from "../assets/hero/mmto6wud-4we3w9z.png";
import img7 from "../assets/hero/mmto6wud-csbm0b9.png";
import img8 from "../assets/hero/mmto6wud-nb5fp49.png";
import img9 from "../assets/hero/mmto6wud-54ivk4i.png";

// App Screen
import appScreen from "../assets/hero/mmto6wud-5nn0qmp.png";

export function Hero() {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden flex flex-col items-center pt-[140px] md:pt-[170px] pb-0 px-6 md:px-[120px] bg-gradient-to-br from-[#0c3399] to-[#041133] min-h-[791px] md:min-h-[841px]"
    >
      {/* Background Patterns */}
      <img
        src={bgDesktop}
        alt=""
        className="hidden md:block absolute top-0 left-0 w-full h-full object-cover mix-blend-overlay opacity-60"
      />
      <img
        src={bgMobile}
        alt=""
        className="block md:hidden absolute top-0 left-0 w-full h-full object-cover mix-blend-overlay opacity-60"
      />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-250 gap-6 md:gap-8">
        {/* Badge */}
        <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-[#02071566] rounded-full">
          <img src={badgeIcon} alt="Badge Icon" className="w-5 h-5" />
          <span className="text-white text-sm font-medium tracking-[-0.2px]">
            Innovative Emergency service provider platform
          </span>
        </div>

        {/* Text Area */}
        <div className="flex flex-col items-center gap-3.5">
          <h1 className="text-white text-[24px] md:text-[48px] font-bold text-center leading-tight max-w-236 font-['Space_Grotesk']">
            Your Fastest Way to Find Trusted Professionals for Urgent Home
            Problems
          </h1>
          <p className="text-[#e6e7eb] text-[14px] md:text-[16px] text-center max-w-191 font-['Space_Grotesk'] leading-relaxed">
            Connect instantly with verified plumbers, electricians, locksmiths,
            cleaners, and other professionals near you. Request help, track
            arrival in real time, and pay securely all from your phone.
          </p>
        </div>

        {/* Store Buttons */}
        <div className="flex items-center justify-center gap-3 md:gap-4 mt-2">
          <button className="flex items-center gap-2 bg-white rounded-full px-4 md:px-5 py-2 md:py-2.5 hover:bg-gray-100 transition-colors">
            <img
              src={playstoreIcon}
              alt="Play Store"
              className="w-3.75 md:w-5 h-4.5 md:h-6"
            />
            <span className="text-[#041133] text-[11px] md:text-sm font-medium tracking-[-0.2px]">
              Get On playstore
            </span>
          </button>
          <button className="flex items-center gap-2 bg-white rounded-full px-4 md:px-5 py-2 md:py-2.5 hover:bg-gray-100 transition-colors">
            <img
              src={appstoreIcon}
              alt="App Store"
              className="w-4.25 md:w-5.75 h-5 md:h-6.75"
            />
            <span className="text-[#041133] text-[11px] md:text-sm font-medium tracking-[-0.2px]">
              Get on Appstore
            </span>
          </button>
        </div>
      </div>

      {/* Collage and Phone Section */}
      <div className="relative z-10 mt-10 md:mt-12.5 w-full max-w-250.5 h-65 md:h-85.75 rounded-t-[20px] bg-[#02071533] pt-6 md:pt-9 flex justify-center overflow-hidden">
        {/* Collage Images */}
        <div className="absolute w-[800px] md:w-[1341px] flex flex-col gap-2 md:gap-[9px] opacity-70">
          <div className="flex gap-2 md:gap-[11px] ml-10 md:ml-[79px]">
            <img
              src={img1}
              alt=""
              className="w-[150px] md:w-[259px] h-[80px] md:h-[138px] rounded-[12px] md:rounded-[20px] object-cover"
            />
            <img
              src={img2}
              alt=""
              className="w-[150px] md:w-[259px] h-[80px] md:h-[138px] rounded-[12px] md:rounded-[20px] object-cover"
            />
            <img
              src={img3}
              alt=""
              className="w-37.5 md:w-64.75 h-20 md:h-34.5 rounded-xl md:rounded-[20px] object-cover"
            />
            <img
              src={img4}
              alt=""
              className="w-37.5 md:w-64.75 h-20 md:h-34.5 rounded-xl md:rounded-[20px] object-cover"
            />
          </div>
          <div className="flex gap-2 md:gap-2.75">
            <img
              src={img5}
              alt=""
              className="w-37.5 md:w-64.75 h-20 md:h-34.5 rounded-xl md:rounded-[20px] object-cover"
            />
            <img
              src={img6}
              alt=""
              className="w-37.5 md:w-64.75 h-20 md:h-34.5 rounded-xl md:rounded-[20px] object-cover"
            />
            <img
              src={img7}
              alt=""
              className="w-37.5 md:w-[259px] h-[80px] md:h-[138px] rounded-[12px] md:rounded-[20px] object-cover"
            />
            <img
              src={img8}
              alt=""
              className="w-[150px] md:w-[259px] h-[80px] md:h-[138px] rounded-[12px] md:rounded-[20px] object-cover"
            />
            <img
              src={img9}
              alt=""
              className="w-[150px] md:w-[259px] h-[80px] md:h-[138px] rounded-[12px] md:rounded-[7px] object-cover"
            />
          </div>
        </div>

        {/* iPhone Mockup */}
        <div className="absolute bottom-[-200px] md:bottom-[-273px] left-1/2 -translate-x-1/2 w-[222px] md:w-[275px] h-[453px] md:h-[562px] z-20">
          <div className="w-[216px] md:w-[268px] h-[450px] md:h-[558px] bg-[#000000] rounded-[31px] md:rounded-[38px] p-[1px] shadow-[0_16px_50px_-8px_rgba(12,12,13,0.5)] relative mx-auto flex items-center justify-center">
            {/* Screen Wrapper */}
            <div className="relative w-[201px] md:w-[249px] h-[435px] md:h-[540px] bg-white rounded-[23px] md:rounded-[29px] overflow-hidden border-4 border-black">
              <img
                src={appScreen}
                alt="App Interface"
                className="w-full h-full object-cover"
              />
              {/* Notch */}
              <img
                src={notchIcon}
                alt="notch"
                className="absolute top-[3px] md:top-[4px] left-1/2 -translate-x-1/2 w-[160px] md:w-[200px]"
              />
            </div>

            {/* Side Buttons (Simulated) */}
            <div className="absolute top-[80px] md:top-[100px] -left-[2px] w-[2px] h-[17px] md:h-[21px] bg-[#1a1a1a] rounded-l"></div>
            <div className="absolute top-[110px] md:top-[140px] -left-[2px] w-[2px] h-[34px] md:h-[42px] bg-[#1a1a1a] rounded-l"></div>
            <div className="absolute top-[150px] md:top-[190px] -left-[2px] w-[2px] h-[34px] md:h-[42px] bg-[#1a1a1a] rounded-l"></div>
            <div className="absolute top-[130px] md:top-[160px] -right-[2px] w-[2px] h-[45px] md:h-[60px] bg-[#1a1a1a] rounded-r"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
