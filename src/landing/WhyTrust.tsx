import React from "react";

const trustFeatures = [
  {
    title: "Verified & Background-Checked Professionals",
    description: "Every plumber, electrician, cleaner, caregiver, babysitter, and technician is thoroughly screened for identity, certifications, and work history.",
  },
  {
    title: "Secure Payments Powered by Stripe",
    description: "Your payment is encrypted, protected, and only released when the job is completed to your satisfaction.",
  },
  {
    title: "Real-Time Tracking & Arrival Updates",
    description: "Know exactly who’s coming and when. Track your provider’s route from the moment they accept your request.",
  },
  {
    title: "Fast Response for Emergencies",
    description: "AidSprint is built for urgent situations — get matched with nearby professionals in minutes.",
  },
  {
    title: "Transparent Pricing — No Hidden Fees",
    description: "See the cost upfront before you book. No surprises, no extra charges.",
  },
  {
    title: "24/7 Availability",
    description: "Day or night, weekends or holidays — AidSprint ensures help is always within reach.",
  },
  {
    title: "Ratings & Reviews You Can Trust",
    description: "Each provider has a visible rating, service history, and customer reviews so you can choose confidently.",
  }
];

export function WhyTrust() {
  return (
    <section id="why-trust" className="flex flex-col items-center bg-[#fafafa] py-[50px] px-[24px] desktop:py-[100px] desktop:px-[120px] gap-[40px] desktop:gap-[60px]">
      {/* Header Section */}
      <div className="flex flex-col items-center gap-[14px] desktop:gap-[20px] w-full max-w-[800px] mx-auto text-center">
        <h2 className="text-[24px] desktop:text-[36px] font-bold text-black font-['Space_Grotesk'] leading-tight tracking-[-0.5px]">
          Why Trust AidSprint?
        </h2>
        <p className="text-[16px] desktop:text-[18px] text-[#5e5e5e] font-['Inter'] leading-[1.6]">
          A safer, faster, more reliable way to get help when you need it most.
        </p>
        <div className="w-[60px] h-[4px] bg-[#5d5a88] rounded-full mt-[10px] mb-[10px]" />
      </div>

      {/* Grid Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 desktop:grid-cols-3 gap-[20px] desktop:gap-[24px] w-full max-w-[1200px] mx-auto">
        {trustFeatures.map((feature, idx) => (
          <div 
            key={idx} 
            className="flex flex-col gap-[12px] p-[24px] desktop:p-[32px] bg-white rounded-[20px] border border-[#f0f1f2] hover:shadow-sm transition-shadow"
          >
            <div className="flex items-center gap-[12px]">
              <div className="flex items-center justify-center w-[24px] h-[24px] rounded-full bg-[#e8f5e9] text-[#2e7d32] shrink-0">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <h3 className="text-[18px] font-bold text-black font-['Space_Grotesk'] leading-[1.3]">
                {feature.title}
              </h3>
            </div>
            <p className="text-[14px] desktop:text-[15px] text-[#5e5e5e] font-['Inter'] leading-[1.6] pl-[36px]">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
