import React from "react";

export function About() {
  return (
    <section id="about" className="flex flex-col items-center bg-white py-[50px] px-[24px] desktop:py-[100px] desktop:px-[120px] gap-[40px] desktop:gap-[60px]">
      {/* Header Section */}
      <div className="flex flex-col items-center gap-[14px] desktop:gap-[20px] w-full max-w-[800px] mx-auto text-center">
        <h2 className="text-[24px] desktop:text-[36px] font-bold text-black font-['Space_Grotesk'] leading-tight tracking-[-0.5px]">
          A smarter, faster way to solve urgent home problems.
        </h2>
        <div className="w-[60px] h-[4px] bg-[#5d5a88] rounded-full mt-[10px] mb-[10px]" />
      </div>

      {/* Content Section */}
      <div className="flex flex-col w-full max-w-[1000px] mx-auto gap-[24px] desktop:gap-[32px]">
        <p className="text-[16px] desktop:text-[18px] text-[#5e5e5e] font-['Inter'] leading-[1.6] desktop:leading-[1.8] text-center desktop:text-left">
          AidSprint is an innovative on-demand service platform that connects individuals and families with verified professionals for essential home services. Whether it’s a plumbing emergency, electrical fault, deep cleaning, lock repair, or daily support needs like babysitting, pet-sitting or home care — AidSprint makes sure help arrives quickly and safely.
        </p>

        <div className="grid grid-cols-1 desktop:grid-cols-2 gap-[24px] desktop:gap-[40px]">
          <div className="flex flex-col gap-[24px] p-[30px] bg-[#fafafa] rounded-[20px] border border-[#f0f1f2]">
            <h3 className="text-[20px] font-bold text-black font-['Space_Grotesk']">About AidSprint</h3>
            <p className="text-[15px] text-[#5e5e5e] font-['Inter'] leading-[1.6]">
              AidSprint exists to bring peace of mind when life gets stressful. With vetted professionals, instant matching and live tracking, we help you solve urgent problems quickly—from essential home services to on the go help—so you can feel safe, supported, and in control.
            </p>
            <p className="text-[15px] text-[#5e5e5e] font-['Inter'] leading-[1.6] font-medium text-[#5d5a88]">
              AidSprint connects you with your HERO anytime, everytime.
            </p>
          </div>

          <div className="flex flex-col gap-[24px] p-[30px] bg-[#fafafa] rounded-[20px] border border-[#f0f1f2]">
            <h3 className="text-[20px] font-bold text-black font-['Space_Grotesk']">Our Mission</h3>
            <p className="text-[15px] text-[#5e5e5e] font-['Inter'] leading-[1.6]">
              Our mission is simple: to empower households with fast, trusted, and accessible services anytime they need them.
            </p>
            <p className="text-[15px] text-[#5e5e5e] font-['Inter'] leading-[1.6]">
              AidSprint brings convenience, safety, and peace of mind into everyday living by combining technology with a verified network of skilled professionals. Whether it's an urgent crisis or a scheduled service, we’re committed to delivering quality you can trust — anytime, every time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
