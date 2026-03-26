import React, { useState } from "react";

// Icons for Desktop
import d_minusIcon from "../assets/faq/mmz2hlal-e2uyc5q.svg";
import d_plusIcon from "../assets/faq/mmz2hlal-wx20fjq.svg";

// Icons for Mobile
import m_minusIcon from "../assets/faq/mmz2il8t-qcccbq5.svg";
import m_plusIcon from "../assets/faq/mmz2il8u-8w1hjjz.svg";

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "What is AidSprint?",
    answer:
      "AidSprint is an innovative platform that connects you with trained and verified professionals for urgent home services such as plumbing, electrical repairs, cleaning, and more. We help you find help faster and securely.",
  },
  {
    id: 2,
    question: "How does AidSprint work?",
    answer:
      "Simply download the app, choose the service you need, get instantly matched with a verified provider, track their arrival in real time, and pay securely after the job is done.",
  },
  {
    id: 3,
    question: "Are the service providers verified?",
    answer:
      "Yes. Every provider undergoes identity verification, background checks, and skill assessment before joining the platform.",
  },
  {
    id: 4,
    question: "How quickly can I get help?",
    answer:
      "Most users get matched with a provider within minutes. Arrival time depends on your location and provider availability.",
  },
  {
    id: 5,
    question: "What services can I request?",
    answer:
      "Plumbing, electrical, locksmith services, cleaning, babysitting, petsitter, psw care, and more — all available through the app.",
  },
  {
    id: 6,
    question: "How do payments work?",
    answer:
      "Payments are completed securely through the AidSprint app after the job is completed. We support multiple safe payment options.",
  },
  {
    id: 7,
    question: "Is there customer support?",
    answer: "Yes. You can reach us via in-app chat, email, or phone anytime.",
  },
  {
    id: 8,
    question: "Can I schedule services ahead of time?",
    answer: "Yes. You can request urgent help or schedule services for later.",
  },
];

export function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleAccordion = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faqs"
      className="flex flex-col items-center bg-white desktop:bg-white bg-[#fafafa] py-[50px] px-[24px] desktop:py-[100px] desktop:px-[120px] w-full gap-[30px]"
      aria-labelledby="faq-heading"
    >
      {/* Header */}
      <div className="flex flex-col items-center gap-[14px] w-full max-w-[944px] mx-auto text-center">
        <h2
          id="faq-heading"
          className="text-[#000000] text-[24px] desktop:text-[30px] font-bold font-['Space_Grotesk']"
        >
          Your Questions Answered
        </h2>
        <p className="text-[#5e5e5e] text-[14px] font-['Inter'] desktop:font-['Inter'] font-['Space_Grotesk'] tracking-[-0.2px] leading-[21px] desktop:leading-normal">
          Answers to all your questions, quickly and clearly
        </p>
      </div>

      {/* Accordion List */}
      <div className="flex flex-col w-full max-w-[1010px] mx-auto gap-[12px] desktop:px-[40px] lg:px-[0]">
        {faqData.length > 0 ? (
          faqData.map((item) => {
            const isOpen = openId === item.id;
            const contentId = `faq-content-${item.id}`;
            const headerId = `faq-header-${item.id}`;

            return (
              <div
                key={item.id}
                className={`flex flex-col w-full rounded-[12px] transition-colors duration-300 ${
                  isOpen ? "bg-[#f5f5f5]" : "bg-[#fafafa]"
                } p-[22px] px-[24px] cursor-pointer`}
              >
                {/* Question Row */}
                <button
                  type="button"
                  id={headerId}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  className="flex items-center justify-between w-full gap-[16px] text-left outline-none focus-visible:ring-2 focus-visible:ring-[#5d5a88] rounded-sm"
                  onClick={() => toggleAccordion(item.id)}
                >
                  <h3 className="text-[#000000] text-[16px] font-medium font-['Space_Grotesk'] leading-[1.2] desktop:leading-[11px]">
                    {item.question}
                  </h3>
                  <div className="flex-shrink-0 flex items-center justify-center w-[32px] h-[32px] bg-[#eaeaea] rounded-[12px]">
                    {/* Desktop Icons */}
                    <img
                      src={isOpen ? d_minusIcon : d_plusIcon}
                      alt={isOpen ? "Collapse" : "Expand"}
                      className="hidden desktop:block w-[16px] h-[16px]"
                    />
                    {/* Mobile Icons */}
                    <img
                      src={isOpen ? m_minusIcon : m_plusIcon}
                      alt={isOpen ? "Collapse" : "Expand"}
                      className="block desktop:hidden w-[16px] h-[16px]"
                    />
                  </div>
                </button>

                {/* Answer Row */}
                {isOpen && (
                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={headerId}
                    className="mt-[12px] text-[#5e5e5e] text-[14px] font-['Inter'] tracking-[-0.2px] leading-[21px] whitespace-pre-line desktop:max-w-[722px]"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <p className="text-center text-[#5e5e5e]">
            No FAQs available at this time.
          </p>
        )}
      </div>
    </section>
  );
}
