import React from "react";

// The logo in the contact us section seems to be built from multiple SVGs like the header.
// For simplicity and maintainability, I'll use a single text block or the main logo asset.
// But to follow the design exactly, I'll construct the logo if required, or just use text for now since it's an image in the mockup.
// Wait, looking at the provided figma JSX for 22565_1214, it imports multiple SVGs for the logo at the bottom.

import vector1 from "../assets/contact/mmz2vohe-a9i7iql.svg";
import vector2 from "../assets/contact/mmz2vohe-4jgnhuo.svg";
import vector3 from "../assets/contact/mmz2vohe-nu6vb68.svg";
import vector4 from "../assets/contact/mmz2vohf-vg89igb.svg";
import vector5 from "../assets/contact/mmz2vohf-rbgo21x.svg";
import vector6 from "../assets/contact/mmz2vohg-7lburfb.svg";
import vector7 from "../assets/contact/mmz2vohg-c9n82lq.svg";
import vector8 from "../assets/contact/mmz2vohg-bscpvw7.svg";
import vector9 from "../assets/contact/mmz2vohg-wzwk0np.svg";
import logoIcon from "../assets/contact/mmz2vohe-8jdtf2t.svg";

// Background pattern
import bgPattern from "../assets/contact/mmz2vohe-8t3n4tp.png";

export function ContactUs() {
  return (
    <section
      id="contact-us"
      className="relative flex flex-col items-center w-full py-[50px] px-[24px] desktop:py-[70px] desktop:px-[120px] overflow-hidden gap-[30px] bg-gradient-to-br from-[#0c3399] to-[#041133]"
    >
      {/* Background Pattern */}
      <img
        src={bgPattern}
        alt=""
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[729px] desktop:min-w-[1039px] h-[729px] desktop:h-[1040px] object-cover pointer-events-none opacity-50 mix-blend-overlay rotate-180"
      />

      {/* Header */}
      <div className="relative z-10 flex flex-col items-center gap-[14px] w-full text-center">
        <h2 className="text-white text-[24px] desktop:text-[30px] font-bold font-['Space_Grotesk']">
          Need more enquires
        </h2>
        <p className="text-[#b1b5c0] text-[14px] font-['Space_Grotesk']">
          Kindly contact us using . the form/process below
        </p>
      </div>

      {/* Contact Form Container */}
      <div className="relative z-10 flex flex-col desktop:flex-row items-start w-full max-w-[1200px] bg-[#020715] rounded-[10px] desktop:rounded-[24px] p-[16px] desktop:p-[64px] gap-[40px] desktop:gap-[60px]">
        {/* Left Column: Contact Info */}
        <div className="flex flex-col justify-between w-full desktop:w-1/2 h-full desktop:min-h-[400px]">
          <div className="flex flex-col gap-[40px] desktop:gap-[60px]">
            {/* Contact Title */}
            <div className="flex flex-col gap-[12px]">
              <h3 className="text-white text-[16px] font-medium font-['Space_Grotesk']">
                Contact us
              </h3>
              <p className="text-[#7c7c7c] text-[14px] font-['Inter'] tracking-[-0.2px] max-w-[295px]">
                We’d love to hear from you. Please fill out this form.
              </p>
            </div>

            {/* Contact Details */}
            <div className="flex flex-col gap-[30px] md:gap-[40px]">
              {/* Email */}
              <div className="flex flex-col gap-[8px]">
                <div className="flex flex-col gap-[4px]">
                  <span className="text-white text-[16px] font-medium font-['Space_Grotesk']">
                    Email
                  </span>
                  <span className="text-[#b1b5c0] text-[14px] font-['Space_Grotesk']">
                    Get the latest updates and offers.
                  </span>
                </div>
                <span className="text-[#b1b5c0] text-[12px] font-medium font-['Space_Grotesk'] mt-[4px]">
                  hey@AidSprint.com
                </span>
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-[8px]">
                <div className="flex flex-col gap-[4px]">
                  <span className="text-white text-[16px] font-medium font-['Space_Grotesk']">
                    Phone
                  </span>
                  <span className="text-[#b1b5c0] text-[14px] font-['Space_Grotesk']">
                    Speak to our team for support.
                  </span>
                </div>
                <span className="text-[#b1b5c0] text-[12px] font-medium font-['Space_Grotesk'] mt-[4px]">
                  +1 (415) 123-456
                </span>
              </div>
            </div>
          </div>

          {/* Logo (Desktop only - shown at bottom left of contact info in design) */}
          <div className="hidden desktop:flex items-end mt-[60px]">
            <div className="flex items-start shrink-0 relative w-[130px] h-[30px]">
              <img
                src={vector1}
                className="mt-[5px] -ml-[1px] w-[14px] h-[16px]"
                alt=""
              />
              <img
                src={vector2}
                className="mt-[5px] ml-[1px] w-[3px] h-[16px]"
                alt=""
              />
              <img
                src={vector3}
                className="mt-[5px] ml-[1px] w-[11px] h-[16px]"
                alt=""
              />
              <img
                src={vector4}
                className="mt-[5px] ml-[1px] w-[12px] h-[16px]"
                alt=""
              />
              <img
                src={vector5}
                className="mt-[9px] ml-[2px] w-[11px] h-[17px]"
                alt=""
              />
              <img
                src={vector6}
                className="mt-[9px] ml-[2px] w-[6px] h-[12px]"
                alt=""
              />
              <img
                src={vector7}
                className="mt-[5px] ml-[1px] w-[3px] h-[16px]"
                alt=""
              />
              <img
                src={vector8}
                className="mt-[9px] ml-[2px] w-[10px] h-[12px]"
                alt=""
              />
              <img
                src={vector9}
                className="mt-[7px] ml-[1px] w-[7px] h-[15px]"
                alt=""
              />
              <img
                src={logoIcon}
                className="ml-[5px] w-[27px] h-[27px]"
                alt="Logo Icon"
              />
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="flex flex-col w-full desktop:w-1/2 gap-[24px] desktop:gap-[32px]">
          {/* Name Input */}
          <div className="flex flex-col gap-[8px]">
            <label className="text-[#b1b5c0] text-[14px] font-medium font-['Space_Grotesk']">
              Name
            </label>
            <div className="w-full bg-[#041133] border border-[#040f2e] rounded-[14px] p-[14px] px-[12px]">
              <input
                type="text"
                placeholder="Jacob Moore"
                className="w-full bg-transparent text-white placeholder:text-[#e6e7eb] placeholder:opacity-30 text-[16px] font-medium font-['Space_Grotesk'] outline-none"
              />
            </div>
          </div>

          {/* Email Input */}
          <div className="flex flex-col gap-[8px]">
            <label className="text-[#b1b5c0] text-[14px] font-medium font-['Space_Grotesk']">
              Email
            </label>
            <div className="w-full bg-[#041133] border border-[#040f2e] rounded-[14px] p-[14px] px-[12px]">
              <input
                type="email"
                placeholder="name@email.com"
                className="w-full bg-transparent text-white placeholder:text-[#e6e7eb] placeholder:opacity-30 text-[16px] font-medium font-['Space_Grotesk'] outline-none"
              />
            </div>
          </div>

          {/* Message Input */}
          <div className="flex flex-col gap-[8px]">
            <label className="text-[#b1b5c0] text-[14px] font-medium font-['Space_Grotesk']">
              Message
            </label>
            <div className="w-full h-[132px] bg-[#041133] border border-[#041133] rounded-[12px] p-[8px] px-[12px]">
              <textarea
                placeholder="Leave us a message..."
                className="w-full h-full resize-none bg-transparent text-white placeholder:text-[#48516a] text-[16px] font-['Inter'] tracking-[-0.3px] leading-[24px] outline-none"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button className="w-full bg-white rounded-full py-[10px] px-[20px] flex items-center justify-center hover:bg-gray-100 transition-colors mt-[8px]">
            <span className="text-[#041133] text-[16px] font-medium font-['Inter'] tracking-[-0.3px]">
              Send message
            </span>
          </button>
        </div>

        {/* Logo (Mobile only - shown at bottom of the entire card in design) */}
        <div className="flex desktop:hidden items-center mt-[20px]">
            <div className="flex items-start shrink-0 relative w-[130px] h-[30px]">
            <img
              src={vector1}
              className="mt-[5px] -ml-[1px] w-[14px] h-[16px]"
              alt=""
            />
            <img
              src={vector2}
              className="mt-[5px] ml-[1px] w-[3px] h-[16px]"
              alt=""
            />
            <img
              src={vector3}
              className="mt-[5px] ml-[1px] w-[11px] h-[16px]"
              alt=""
            />
            <img
              src={vector4}
              className="mt-[5px] ml-[1px] w-[12px] h-[16px]"
              alt=""
            />
            <img
              src={vector5}
              className="mt-[9px] ml-[2px] w-[11px] h-[17px]"
              alt=""
            />
            <img
              src={vector6}
              className="mt-[9px] ml-[2px] w-[6px] h-[12px]"
              alt=""
            />
            <img
              src={vector7}
              className="mt-[5px] ml-[1px] w-[3px] h-[16px]"
              alt=""
            />
            <img
              src={vector8}
              className="mt-[9px] ml-[2px] w-[10px] h-[12px]"
              alt=""
            />
            <img
              src={vector9}
              className="mt-[7px] ml-[1px] w-[7px] h-[15px]"
              alt=""
            />
            <img
              src={logoIcon}
              className="ml-[5px] w-[27px] h-[27px]"
              alt="Logo Icon"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
