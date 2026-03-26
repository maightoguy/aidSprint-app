import React, { useEffect, useState } from "react";

import bgPattern from "../assets/how-it-works/bg.svg";
import step01Screen from "../assets/how-it-works/step-01.png";
import step02Screen from "../assets/how-it-works/step-02.png";
import step03Screen from "../assets/how-it-works/step-03.png";
import step04Screen from "../assets/how-it-works/step-04.png";
import notchIcon from "../assets/how-it-works/notch.svg";
import playstoreIcon from "../assets/how-it-works/playstore.svg";
import appstoreIcon from "../assets/how-it-works/appstore.svg";

import contractorBgPattern from "../assets/how-it-works/contractor/bg.svg";
import contractorStep01Screen from "../assets/how-it-works/contractor/step-01.png";
import contractorStep02Screen from "../assets/how-it-works/contractor/step-02.png";
import contractorStep03Screen from "../assets/how-it-works/contractor/step-03.png";
import contractorStep04Screen from "../assets/how-it-works/contractor/step-04.png";
import contractorNotchIcon from "../assets/how-it-works/contractor/notch.svg";
import contractorPlaystoreIcon from "../assets/how-it-works/contractor/playstore.svg";
import contractorAppstoreIcon from "../assets/how-it-works/contractor/appstore.svg";

type HowItWorksStep = {
  id: number;
  title: string;
  desc: string;
  img: string;
};

const userSteps: HowItWorksStep[] = [
  {
    id: 1,
    title: "Request Help",
    desc: "Choose the service you need and describe your emergency.",
    img: step01Screen,
  },
  {
    id: 2,
    title: "Get Matched Instantly",
    desc: "AidSprint connects you with nearby verified professionals ready to help.",
    img: step02Screen,
  },
  {
    id: 3,
    title: "Track Your Contractor",
    desc: "See your contractor’s location and arrival time in real time.",
    img: step03Screen,
  },
  {
    id: 4,
    title: "Job Completed & Pay Securely",
    desc: "Confirm the job, pay safely in the app, and leave a review.",
    img: step04Screen,
  },
];

const contractorSteps: HowItWorksStep[] = [
  {
    id: 1,
    title: "Create Your Profile",
    desc: "Sign up with your details and get verified",
    img: contractorStep01Screen,
  },
  {
    id: 2,
    title: "Get Verified",
    desc: "Once approved, your profile becomes visible and you can start receiving job requests.",
    img: contractorStep02Screen,
  },
  {
    id: 3,
    title: "Accept Jobs",
    desc: "Get matched with emergency requests and accept.",
    img: contractorStep03Screen,
  },
  {
    id: 4,
    title: "Complete Jobs & Earn",
    desc: "Finish the job, get confirmation and receive payment instantly",
    img: contractorStep04Screen,
  },
];

export function HowItWorks() {
  const [activeTab, setActiveTab] = useState<"Users" | "Contractor">("Users");
  const [activeStep, setActiveStep] = useState(1);

  const isContractor = activeTab === "Contractor";
  const steps = isContractor ? contractorSteps : userSteps;
  const activeStepData = steps[activeStep - 1] ?? steps[0];
  const activeBgPattern = isContractor ? contractorBgPattern : bgPattern;
  const activeNotchIcon = isContractor ? contractorNotchIcon : notchIcon;
  const activePlaystoreIcon = isContractor
    ? contractorPlaystoreIcon
    : playstoreIcon;
  const activeAppstoreIcon = isContractor
    ? contractorAppstoreIcon
    : appstoreIcon;

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setActiveStep((prev) => (prev >= steps.length ? 1 : prev + 1));
    }, 7000);

    return () => window.clearTimeout(timeoutId);
  }, [activeStep, activeTab, steps.length]);

  return (
    <section
      id="how-it-works"
      className="relative w-full overflow-hidden flex flex-col items-center bg-[#fafafa] desktop:bg-white py-[40px] px-[24px] desktop:py-[100px] desktop:px-[120px] gap-[30px]"
    >
      <img
        src={activeBgPattern}
        alt=""
        className="hidden desktop:block absolute inset-0 w-full h-full object-cover pointer-events-none"
      />

      <div className="relative z-10 flex flex-col items-center gap-[14px] w-full">
        <h2 className="text-[#000000] text-[24px] desktop:text-[30px] font-bold font-['Space_Grotesk'] text-center">
          How AidSprint works
        </h2>
      </div>

      <div className="relative z-10 flex items-center justify-center gap-[20px] border border-[#f0f1f2] rounded-[55px] bg-[#fafafa] p-[1px_3px_1px_1px] w-[298px]">
        <button
          type="button"
          className={`flex-1 flex items-center justify-center rounded-[39px] py-[9px] px-[7px] text-[14px] font-medium font-['Space_Grotesk'] transition-colors ${
            activeTab === "Users"
              ? "bg-white text-[#041133] border border-[#f0f1f2]"
              : "text-[#9ca1aa] hover:text-[#041133]"
          }`}
          onClick={() => {
            setActiveTab("Users");
            setActiveStep(1);
          }}
        >
          Users
        </button>
        <button
          type="button"
          className={`flex-1 flex items-center justify-center rounded-[39px] py-[9px] px-[7px] text-[14px] font-medium font-['Space_Grotesk'] transition-colors ${
            activeTab === "Contractor"
              ? "bg-white text-[#041133] border border-[#f0f1f2]"
              : "text-[#9ca1aa] hover:text-[#041133]"
          }`}
          onClick={() => {
            setActiveTab("Contractor");
            setActiveStep(1);
          }}
        >
          Contractor
        </button>
      </div>

      <div className="relative z-10 w-full max-w-[1050px]">
        <div className="flex desktop:hidden flex-col items-center w-full">
          <div className="flex items-center w-full max-w-[327px]">
            {steps.map((step, idx) => (
              <React.Fragment key={step.id}>
                <button
                  type="button"
                  className={`flex items-center justify-center w-[53px] h-[53px] rounded-full border text-[24px] font-bold font-['Space_Grotesk'] transition-colors ${
                    activeStep >= step.id
                      ? "bg-[#0057db] border-[#0057db] text-white"
                      : "bg-white border-[#0000001a] text-[#6b7280]"
                  }`}
                  onClick={() => setActiveStep(step.id)}
                >
                  0{step.id}
                </button>
                {idx < steps.length - 1 ? (
                  <div
                    className={`flex-1 h-[3px] ${
                      activeStep > step.id ? "bg-[#0057db]" : "bg-[#f0f1f2]"
                    }`}
                  />
                ) : null}
              </React.Fragment>
            ))}
          </div>

          <div
            key={`${activeTab}-${activeStep}-mobile-text`}
            className="howitworks-fade flex flex-col items-center text-center gap-[8px] w-full max-w-[327px] mt-[12px]"
          >
            <h3 className="text-[#000000] text-[20px] font-bold font-['Space_Grotesk']">
              {activeStepData.title}
            </h3>
            <p className="text-[#808080cc] text-[16px] font-['Space_Grotesk'] leading-[1.5]">
              {activeStepData.desc}
            </p>
          </div>

          <div className="mt-[12px] border border-[#f0f1f2] rounded-[20px] bg-[#fafafa] p-[31px] w-full max-w-[327px] h-[445px] overflow-hidden flex items-start justify-center">
            <div className="w-[268px] h-[558px] bg-black rounded-[38px] p-[9px] relative shadow-[0_16px_60px_-8px_rgba(12,12,13,0.3)]">
              <div className="w-full h-full bg-white rounded-[29px] overflow-hidden relative">
                <img
                  key={`${activeTab}-${activeStep}-mobile-img`}
                  src={activeStepData.img}
                  alt="App Screen"
                  className="howitworks-fade w-full h-full object-cover"
                />
                <img
                  src={activeNotchIcon}
                  alt="notch"
                  className="absolute top-[4px] left-1/2 -translate-x-1/2 w-[249px]"
                />
              </div>
              <div className="absolute top-[122px] left-[-2px] w-[3px] h-[21px] bg-black opacity-50 rounded-l-[2px]" />
              <div className="absolute top-[177px] left-[-2px] w-[3px] h-[42px] bg-black opacity-50 rounded-l-[2px]" />
              <div className="absolute top-[232px] left-[-2px] w-[3px] h-[42px] bg-black opacity-50 rounded-l-[2px]" />
              <div className="absolute top-[182px] right-[-2px] w-[3px] h-[60px] bg-black opacity-50 rounded-r-[2px]" />
              <div className="absolute bottom-[8px] left-1/2 -translate-x-1/2 w-[100px] h-[4px] bg-black rounded-full" />
            </div>
          </div>
        </div>

        <div className="hidden desktop:flex items-center gap-[12px] w-full">
          <div className="flex flex-col items-center justify-center">
            {steps.map((step, idx) => (
              <React.Fragment key={step.id}>
                <button
                  type="button"
                  className={`flex items-center justify-center w-[53px] h-[53px] rounded-full border text-[24px] font-bold font-['Space_Grotesk'] transition-colors ${
                    activeStep >= step.id
                      ? "bg-[#0057db] border-[#0057db] text-white"
                      : "bg-white border-[#0000001a] text-[#6b7280]"
                  }`}
                  onClick={() => setActiveStep(step.id)}
                >
                  0{step.id}
                </button>
                {idx < steps.length - 1 ? (
                  <div
                    className={`w-[3px] h-[80px] ${
                      activeStep > step.id ? "bg-[#0057db]" : "bg-[#f0f1f2]"
                    }`}
                  />
                ) : null}
              </React.Fragment>
            ))}
          </div>

          <div className="flex flex-col justify-between w-[352px] min-w-[352px] h-[452px]">
            {steps.map((step) => (
              <button
                key={step.id}
                type="button"
                className={`text-left flex flex-col items-start gap-[8px] transition-opacity duration-300 ${
                  activeStep === step.id ? "opacity-100" : "opacity-40"
                }`}
                onClick={() => setActiveStep(step.id)}
              >
                <span className="text-[#000000] text-[20px] font-bold font-['Space_Grotesk'] leading-[26px]">
                  {step.title}
                </span>
                <span className="text-[#808080cc] text-[16px] font-['Space_Grotesk'] max-w-[262px]">
                  {step.desc}
                </span>
              </button>
            ))}
          </div>

          <div className="flex-1 flex flex-col items-start gap-[12px]">
            <div className="border border-[#f0f1f2] rounded-[20px] bg-[#fafafa] p-[31px] w-full max-w-[577px] overflow-hidden flex items-center justify-center">
              <div className="w-[268px] h-[558px] bg-black rounded-[38px] p-[9px] relative shadow-[0_16px_60px_-8px_rgba(12,12,13,0.3)]">
                <div className="w-full h-full bg-white rounded-[29px] overflow-hidden relative">
                  <img
                    key={`${activeTab}-${activeStep}-desktop-img`}
                    src={activeStepData.img}
                    alt="App Screen"
                    className="howitworks-fade w-full h-full object-cover"
                  />
                  <img
                    src={activeNotchIcon}
                    alt="notch"
                    className="absolute top-[4px] left-1/2 -translate-x-1/2 w-[249px]"
                  />
                </div>
                <div className="absolute top-[122px] left-[-2px] w-[3px] h-[21px] bg-black opacity-50 rounded-l-[2px]" />
                <div className="absolute top-[177px] left-[-2px] w-[3px] h-[42px] bg-black opacity-50 rounded-l-[2px]" />
                <div className="absolute top-[232px] left-[-2px] w-[3px] h-[42px] bg-black opacity-50 rounded-l-[2px]" />
                <div className="absolute top-[182px] right-[-2px] w-[3px] h-[60px] bg-black opacity-50 rounded-r-[2px]" />
                <div className="absolute bottom-[8px] left-1/2 -translate-x-1/2 w-[100px] h-[4px] bg-black rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-center gap-[11px] desktop:gap-[14px] w-full max-w-[327px] desktop:max-w-none">
        <button
          type="button"
          className="flex items-center justify-center gap-[8px] desktop:gap-[10px] bg-[#041133] rounded-[816px] desktop:rounded-[999px] py-[8px] px-[16px] desktop:py-[10px] desktop:px-[20px] hover:bg-[#0a205a] transition-colors"
        >
          <img
            src={activePlaystoreIcon}
            alt="Play Store"
            className="w-[9px] h-[11px] desktop:w-[20px] desktop:h-[24px]"
          />
          <span className="text-white text-[11px] desktop:text-[14px] font-medium font-['Inter'] tracking-[-0.16px] desktop:tracking-[-0.2px]">
            Get On playstore
          </span>
        </button>
        <button
          type="button"
          className="flex items-center justify-center gap-[8px] desktop:gap-[10px] bg-[#041133] rounded-[816px] desktop:rounded-[999px] py-[8px] px-[16px] desktop:py-[10px] desktop:px-[20px] hover:bg-[#0a205a] transition-colors"
        >
          <img
            src={activeAppstoreIcon}
            alt="App Store"
            className="w-[9px] h-[11px] desktop:w-[23px] desktop:h-[27px]"
          />
          <span className="text-white text-[11px] desktop:text-[14px] font-medium font-['Inter'] tracking-[-0.16px] desktop:tracking-[-0.2px]">
            Get on Appstore
          </span>
        </button>
      </div>
    </section>
  );
}
