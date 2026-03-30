import React, { useMemo, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import d_cleaning from "../assets/services/mmtpwiu8-4x9eqv6.svg";
import d_psw from "../assets/services/mmtpwiu8-k0rwc9r.svg";
import d_plumbing from "../assets/services/mmtpwiu8-4d3uwwv.svg";
import d_locksmith from "../assets/services/mmtpwiu8-vm71i5l.svg";
import d_electrician from "../assets/services/mmtpwiu8-kmkvij7.svg";
import d_babysitting from "../assets/services/mmtpwiu8-fqsp9hj.svg";
import d_petsitter from "../assets/services/mmtpwiu8-we8qzht.svg";
import d_handyman from "../assets/services/mmtpwiu8-rrs1u7y.svg";

import d_phone1 from "../assets/services/mmtpwiun-hxbgli7.png";
import d_phone2 from "../assets/services/mmtpwiun-p22b7na.png";
import d_phone3 from "../assets/services/mmtpwiun-a0elekh.png";
import d_notch1 from "../assets/services/mmtpwiu8-nfd3h13.svg";
import d_notch2 from "../assets/services/mmtpwiu8-dyzp5dl.svg";
import d_notch3 from "../assets/services/mmtpwiu8-x67j7dg.svg";

import d_avatar1 from "../assets/services/mmtpwiun-aotp8yq.png";
import d_avatar2 from "../assets/services/mmtpwiun-4ar0k25.png";
import d_avatar3 from "../assets/services/mmtpwiun-9r96mc3.png";
import d_avatar4 from "../assets/services/mmtpwiun-at17vbc.png";

import m_comm1 from "../assets/services/mmtpy8d8-z9kc60m.png";
import m_comm2 from "../assets/services/mmtpy8d8-5yptojx.png";
import m_comm3 from "../assets/services/mmtpy8d8-pghqu72.png";
import m_comm4 from "../assets/services/mmtpy8d8-hm4a1wj.png";
import m_comm5 from "../assets/services/mmtpy8d8-bv4bkjk.png";
import m_comm6 from "../assets/services/mmtpy8d8-biwamg2.png";
import m_comm7 from "../assets/services/mmtpy8d8-suobowb.png";
import m_comm8 from "../assets/services/mmtpy8d8-di00lba.png";
import m_comm9 from "../assets/services/mmtpy8d8-c4fn5bc.png";

type ServiceItem = {
  icon: string;
  label: string;
};

function PhoneMock({
  className,
  screenSrc,
  notchSrc,
  notchClassName,
  frameClassName,
}: {
  className: string;
  screenSrc: string;
  notchSrc: string;
  notchClassName: string;
  frameClassName: string;
}) {
  return (
    <div className={className}>
      <div className={frameClassName}>
        <img src={screenSrc} alt="" className="w-full h-full object-cover" />
        <img src={notchSrc} alt="" className={notchClassName} />
      </div>
    </div>
  );
}

function CommunityTile({ src, className }: { src: string; className: string }) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`bg-[#d1d5db] ${className}`}>
      {!hasError && (
        <img
          src={src}
          alt=""
          className="w-full h-full object-cover"
          onError={() => setHasError(true)}
          decoding="async"
        />
      )}
    </div>
  );
}

export function Services() {
  const serviceItems = useMemo<ServiceItem[]>(
    () => [
      { icon: d_cleaning, label: "Cleaning" },
      { icon: d_plumbing, label: "Plumbing" },
      { icon: d_locksmith, label: "Locksmith" },
      { icon: d_electrician, label: "Electrician" },
      { icon: d_babysitting, label: "Babysitting" },
      { icon: d_petsitter, label: "Petsitter" },
      { icon: d_handyman, label: "Handyman" },
      { icon: d_psw, label: "PSW care" },
    ],
    [],
  );

  const [servicesRef] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({
      delay: 7000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  ]);

  const [communityRef] = useEmblaCarousel(
    { loop: true, align: "start", dragFree: true },
    [
      Autoplay({
        delay: 7000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ],
  );

  return (
    <section className="flex flex-col items-center w-full bg-[#fafafa] py-[50px] px-[24px] desktop:py-[100px] desktop:px-[120px] gap-[30px]">
      {/* <div className="flex flex-col items-center text-center gap-[14px] w-full max-w-[944px]">
        <h2 className="text-[#000000] text-[24px] desktop:text-[30px] font-bold font-['Space_Grotesk']">
          Why us AidSprint?&nbsp;
        </h2>
        <p className="text-[#6b7280] text-[14px] desktop:text-[16px] font-['Space_Grotesk']">
          Connect instantly with verified plumbers, electricians, locksmiths,
          cleaners, and other professionals near you. Request help, track
          arrival in real time, and pay securely all from your phone.
        </p>
      </div> */}

      <div className="flex flex-col w-full max-w-[1200px] gap-[12px]">
        <div className="flex flex-col desktop:flex-row items-stretch gap-[12px] w-full">
          {/* Services Icons - Moved to the left/top position */}
          <div className="flex flex-col flex-1 border border-[#f0f1f2] rounded-[20px] bg-white overflow-hidden">
            <div className="flex flex-col gap-[8px] p-[32px]">
              <h3 className="text-[#000000] text-[24px] font-bold font-['Space_Grotesk']">
                Services
              </h3>
              <p className="text-[#6b7280] text-[14px] font-['Space_Grotesk']">
                Everything you need, we help you get it done quickly and
                effortlessly.
              </p>
            </div>

            <div className="bg-[#e6e7eb] pt-[32px] overflow-hidden">
              <div className="relative h-[320px] overflow-hidden desktop:h-[420px] desktop:px-[160px] flex justify-center">
                <div className="relative w-[275px] h-[562px]">
                  <PhoneMock
                    className="absolute top-[53px] left-[-126px] w-[215px] h-[440px] z-10"
                    frameClassName="relative w-full h-full rounded-[30px] bg-black p-[7px]"
                    screenSrc={d_phone3}
                    notchSrc={d_notch3}
                    notchClassName="absolute top-[3px] left-1/2 -translate-x-1/2 w-[195px]"
                  />
                  <PhoneMock
                    className="absolute top-[54px] right-[-141px] w-[218px] h-[446px] z-10"
                    frameClassName="relative w-full h-full rounded-[30px] bg-black p-[7px]"
                    screenSrc={d_phone2}
                    notchSrc={d_notch2}
                    notchClassName="absolute top-[3px] left-1/2 -translate-x-1/2 w-[198px]"
                  />
                  <PhoneMock
                    className="absolute top-0 left-0 w-[275px] h-[562px] z-20 shadow-[0_16px_60px_-8px_rgba(12,12,13,0.7)]"
                    frameClassName="relative w-full h-full rounded-[38px] bg-black p-[9px]"
                    screenSrc={d_phone1}
                    notchSrc={d_notch1}
                    notchClassName="absolute top-[4px] left-1/2 -translate-x-1/2 w-[249px]"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center py-[32px] overflow-hidden">
              <div className="relative w-full max-w-[520px] overflow-hidden px-[32px] mx-auto">
                <div ref={servicesRef} className="overflow-hidden">
                  <div className="flex items-start gap-[20px]">
                    {serviceItems.map((service, idx) => (
                      <div
                        key={service.label}
                        data-service-item
                        className="flex flex-col items-center gap-[8px] shrink-0 w-[59px] cursor-pointer select-none"
                      >
                        <div className="flex items-center justify-center border border-[#b1b5c0] rounded-[41px] bg-[#e6e7eb] p-[4px] shadow-[0px_4px_30px_rgba(0,0,0,0.14)]">
                          <div className="flex items-center justify-center rounded-[41px] bg-white p-[9px]">
                            <img
                              src={service.icon}
                              alt=""
                              className="w-[24px] h-[24px]"
                            />
                          </div>
                        </div>
                        <span className="text-[#020715] text-[12px] font-medium font-['Space_Grotesk'] text-center leading-[15px]">
                          {service.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pointer-events-none absolute inset-y-0 left-0 w-[28px] bg-gradient-to-r from-white to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-[28px] bg-gradient-to-l from-white to-transparent" />
              </div>
            </div>
          </div>

          <div className="flex flex-col flex-1 gap-[12px]">
            {/* Connection/Avatars Block */}
            <div className="flex flex-col flex-1 border border-[#f0f1f2] rounded-[20px] bg-white p-[31px] gap-[20px]">
              <div className="flex items-center">
                <img
                  src={d_avatar1}
                  alt=""
                  className="w-[40px] h-[40px] rounded-full border border-white object-cover"
                />
                <img
                  src={d_avatar2}
                  alt=""
                  className="w-[40px] h-[40px] rounded-full border border-white object-cover -ml-[16px]"
                />
                <img
                  src={d_avatar3}
                  alt=""
                  className="w-[40px] h-[40px] rounded-full border border-white object-cover -ml-[16px]"
                />
                <img
                  src={d_avatar4}
                  alt=""
                  className="w-[40px] h-[40px] rounded-full border border-white object-cover -ml-[16px]"
                />
              </div>

              <div className="flex flex-col gap-[8px]">
                <h3 className="text-[#000000] text-[24px] font-bold font-['Space_Grotesk']">
                  Easy Connection
                </h3>
                <p className="text-[#6b7280] text-[14px] font-['Space_Grotesk']">
                  Fast requests, real-time updates, smooth communication.
                  Keeping you connected every step of the way.
                </p>
              </div>
            </div>

            {/* New Key Features Section - Replacing the old Services location */}
            <div className="flex flex-col border border-[#f0f1f2] rounded-[20px] bg-white p-[32px] gap-[20px]">
              <h3 className="text-[#000000] text-[24px] font-bold font-['Space_Grotesk']">
                Key Features
              </h3>
              <ul className="flex flex-col gap-[16px]">
                <li className="flex items-start gap-[12px]">
                  <div className="flex-shrink-0 w-[24px] h-[24px] flex items-center justify-center rounded-full bg-[#e8f5e9] text-[#2e7d32] mt-[2px]">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[#000000] text-[16px] font-bold font-['Space_Grotesk']">
                      Instant Matching
                    </h4>
                    <p className="text-[#6b7280] text-[14px] font-['Inter']">
                      We connect you to verified professionals in seconds.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-[12px]">
                  <div className="flex-shrink-0 w-[24px] h-[24px] flex items-center justify-center rounded-full bg-[#e8f5e9] text-[#2e7d32] mt-[2px]">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[#000000] text-[16px] font-bold font-['Space_Grotesk']">
                      Trusted & Vetted Experts
                    </h4>
                    <p className="text-[#6b7280] text-[14px] font-['Inter']">
                      Every provider is screened for skill, identity, and
                      reliability.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-[12px]">
                  <div className="flex-shrink-0 w-[24px] h-[24px] flex items-center justify-center rounded-full bg-[#e8f5e9] text-[#2e7d32] mt-[2px]">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[#000000] text-[16px] font-bold font-['Space_Grotesk']">
                      Real-Time Arrival Tracking
                    </h4>
                    <p className="text-[#6b7280] text-[14px] font-['Inter']">
                      Know exactly when help is on the way.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-[12px]">
                  <div className="flex-shrink-0 w-[24px] h-[24px] flex items-center justify-center rounded-full bg-[#e8f5e9] text-[#2e7d32] mt-[2px]">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[#000000] text-[16px] font-bold font-['Space_Grotesk']">
                      Safe, Transparent Payments
                    </h4>
                    <p className="text-[#6b7280] text-[14px] font-['Inter']">
                      Pay securely — no hidden charges, no surprises.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-[12px]">
                  <div className="flex-shrink-0 w-[24px] h-[24px] flex items-center justify-center rounded-full bg-[#e8f5e9] text-[#2e7d32] mt-[2px]">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[#000000] text-[16px] font-bold font-['Space_Grotesk']">
                      24/7 Availability
                    </h4>
                    <p className="text-[#6b7280] text-[14px] font-['Inter']">
                      We’re here whenever you need help.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex w-full border border-[#f0f1f2] rounded-[20px] bg-white overflow-hidden flex-col desktop:flex-row">
          <div className="flex flex-col justify-between p-[32px] gap-[24px] desktop:w-[298px] desktop:min-w-[298px]">
            <div className="flex flex-col gap-[8px]">
              <h3 className="text-[#000000] text-[24px] font-bold font-['Space_Grotesk']">
                Exclusive community
              </h3>
              <p className="text-[#6b7280] text-[14px] font-['Space_Grotesk']">
                Join our exclusive skilled workers community for strategic
                partnerships, upskilling opportunities, and perks.
              </p>
            </div>
            <button
              type="button"
              className="inline-flex items-center justify-center bg-[#222222] rounded-[999px] py-[10px] px-[20px] w-fit"
            >
              <span className="text-white text-[16px] font-medium font-['Inter'] tracking-[-0.3px] leading-[24px]">
                Get Started
              </span>
            </button>
          </div>

          <div className="relative flex-1 bg-[#eaeaea] overflow-hidden h-[289px] min-[1025px]:h-[402px]">
            <div className="h-full flex items-center">
              <div className="relative w-full overflow-hidden px-[20px] outline-none">
                <div ref={communityRef} className="overflow-hidden">
                  <div className="flex gap-[9px] w-max">
                    <div className="flex flex-col gap-[9px] flex-[0_0_auto]">
                      <div className="flex items-center gap-[11px] pt-[24px] min-[1025px]:pt-[84px]">
                        {[m_comm1, m_comm2].map((src, idx) => (
                          <CommunityTile
                            key={`row1-${idx}`}
                            src={src}
                            className="w-[150px] h-[80px] rounded-[12px] overflow-hidden min-[1025px]:w-[259px] min-[1025px]:h-[138px] min-[1025px]:rounded-[20px]"
                          />
                        ))}
                      </div>
                      <div className="flex items-center gap-[11px]">
                        {[m_comm5, m_comm6].map((src, idx) => (
                          <CommunityTile
                            key={`row2-${idx}`}
                            src={src}
                            className="w-[150px] h-[80px] rounded-[12px] overflow-hidden min-[1025px]:w-[259px] min-[1025px]:h-[138px] min-[1025px]:rounded-[20px]"
                          />
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col gap-[9px] flex-[0_0_auto]">
                      <div className="flex items-center gap-[11px] pt-[24px] min-[1025px]:pt-[84px]">
                        {[m_comm3, m_comm4].map((src, idx) => (
                          <CommunityTile
                            key={`row1-b-${idx}`}
                            src={src}
                            className="w-[150px] h-[80px] rounded-[12px] overflow-hidden min-[1025px]:w-[259px] min-[1025px]:h-[138px] min-[1025px]:rounded-[20px]"
                          />
                        ))}
                      </div>
                      <div className="flex items-center gap-[11px]">
                        {[m_comm7, m_comm8].map((src, idx) => (
                          <CommunityTile
                            key={`row2-b-${idx}`}
                            src={src}
                            className="w-[150px] h-[80px] rounded-[12px] overflow-hidden min-[1025px]:w-[259px] min-[1025px]:h-[138px] min-[1025px]:rounded-[20px]"
                          />
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col gap-[9px] flex-[0_0_auto]">
                      <div className="flex items-center gap-[11px] pt-[24px] min-[1025px]:pt-[84px]">
                        <CommunityTile
                          src={m_comm9}
                          className="w-[150px] h-[80px] rounded-[12px] overflow-hidden min-[1025px]:w-[259px] min-[1025px]:h-[138px] min-[1025px]:rounded-[7px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pointer-events-none absolute inset-y-0 left-0 w-[36px] bg-gradient-to-r from-[#eaeaea] to-[#eaeaea00]" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-[36px] bg-gradient-to-l from-[#eaeaea] to-[#eaeaea00]" />
              </div>
            </div>

            <div className="pointer-events-none absolute inset-y-0 left-0 w-[36px] bg-gradient-to-r from-[#f5f5f5] to-[#f5f5f500]" />
          </div>
        </div>
      </div>
    </section>
  );
}
