import React from "react";

const chooseFeatures = [
  {
    title: "Fast Response",
    description: "Get help in minutes, not hours.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
    ),
    bgColor: "bg-[#e3f2fd]",
    iconColor: "text-[#1565c0]",
  },
  {
    title: "Verified Experts Only",
    description: "Quality and safety guaranteed.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        <polyline points="9 12 11 14 15 10"></polyline>
      </svg>
    ),
    bgColor: "bg-[#f3e5f5]",
    iconColor: "text-[#4a148c]",
  },
  {
    title: "Simple to Use",
    description: "Request. Track. Get help. Pay. Done.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
        <line x1="12" y1="18" x2="12.01" y2="18"></line>
      </svg>
    ),
    bgColor: "bg-[#e8f5e9]",
    iconColor: "text-[#2e7d32]",
  },
  {
    title: "Affordable Services",
    description: "Fair pricing designed for every household.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"></line>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
      </svg>
    ),
    bgColor: "bg-[#fff3e0]",
    iconColor: "text-[#ef6c00]",
  }
];

export function WhyChoose() {
  return (
    <section id="why-choose" className="flex flex-col items-center bg-white py-[50px] px-[24px] desktop:py-[100px] desktop:px-[120px] gap-[40px] desktop:gap-[60px]">
      {/* Header Section */}
      <div className="flex flex-col items-center gap-[14px] desktop:gap-[20px] w-full max-w-[800px] mx-auto text-center">
        <h2 className="text-[24px] desktop:text-[36px] font-bold text-black font-['Space_Grotesk'] leading-tight tracking-[-0.5px]">
          Why Choose AidSprint?
        </h2>
        <div className="w-[60px] h-[4px] bg-[#5d5a88] rounded-full mt-[10px] mb-[10px]" />
      </div>

      {/* Grid Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px] w-full max-w-[1200px] mx-auto">
        {chooseFeatures.map((feature, idx) => (
          <div 
            key={idx} 
            className="flex flex-col items-center text-center gap-[16px] p-[32px] bg-[#fafafa] rounded-[24px] border border-[#f0f1f2] hover:shadow-md transition-all duration-300 hover:-translate-y-1"
          >
            <div className={`flex items-center justify-center w-[64px] h-[64px] rounded-full ${feature.bgColor} ${feature.iconColor} mb-[8px]`}>
              {feature.icon}
            </div>
            <h3 className="text-[20px] font-bold text-black font-['Space_Grotesk'] leading-[1.3]">
              {feature.title}
            </h3>
            <p className="text-[15px] text-[#5e5e5e] font-['Inter'] leading-[1.6]">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}