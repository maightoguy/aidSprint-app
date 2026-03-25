import React, { useState } from "react";

// Icons for Desktop
import d_minusIcon from "../assets/faq/mmz2hlal-e2uyc5q.svg";
import d_plusIcon from "../assets/faq/mmz2hlal-wx20fjq.svg";

// Icons for Mobile
import m_minusIcon from "../assets/faq/mmz2il8t-qcccbq5.svg";
import m_plusIcon from "../assets/faq/mmz2il8u-8w1hjjz.svg";

const faqData = [
  {
    id: 1,
    question: "What is Aidsprint",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Aliquam bibendum scelerisque sed auctor aliquam eu platea aliquam ullamcorper. Nulla interdum parturient ante facilisis felis est elit. Et tincidunt mi in purus egestas parturient dignissim. Vitae nunc molestie auctor sem in at velit at. Senectus aliquam quam elit gravida fermentum. Pellentesque sagittis posuere integer morbi non ac eget eget. Ullamcorper eu vitae pellentesque ultrices gravida sollicitudin vitae ut. Risus hendrerit magna etiam scelerisque vivamus risus.\n\nPhasellus dui ut augue mauris. Orci tellus arcu elementum sed sed egestas libero porta mi. Nullam parturient.",
  },
  {
    id: 2,
    question:
      "Lorem ipsum dolor sit amet consectetur. Mollis augue felis nisl ac nulla. Ornare nulla.",
    answer: "Detailed answer goes here...",
  },
  {
    id: 3,
    question:
      "Lorem ipsum dolor sit amet consectetur. Viverra neque egestas elit morbi congue arcu.",
    answer: "Detailed answer goes here...",
  },
  {
    id: 4,
    question:
      "Lorem ipsum dolor sit amet consectetur. Cursus in porta tincidunt amet mattis tincidunt.",
    answer: "Detailed answer goes here...",
  },
  {
    id: 5,
    question:
      "Lorem ipsum dolor sit amet consectetur. Vitae cursus diam sed sed neque. Arcu sit vitae.",
    answer: "Detailed answer goes here...",
  },
];

export function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleAccordion = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faqs" className="flex flex-col items-center bg-white desktop:bg-white bg-[#fafafa] py-[50px] px-[24px] desktop:py-[100px] desktop:px-[120px] w-full gap-[30px]">
      {/* Header */}
      <div className="flex flex-col items-center gap-[14px] w-full max-w-[944px] mx-auto text-center">
        <h2 className="text-[#000000] text-[24px] desktop:text-[30px] font-bold font-['Space_Grotesk']">
          Your Questions Answered
        </h2>
        <p className="text-[#5e5e5e] text-[14px] font-['Inter'] desktop:font-['Inter'] font-['Space_Grotesk'] tracking-[-0.2px] leading-[21px] desktop:leading-normal">
          Answers to all your questions, quickly and clearly
        </p>
      </div>

      {/* Accordion List */}
      <div className="flex flex-col w-full max-w-[1010px] mx-auto gap-[12px] desktop:px-[40px] lg:px-[0]">
        {faqData.map((item) => {
          const isOpen = openId === item.id;

          return (
            <div
              key={item.id}
              className={`flex flex-col w-full rounded-[12px] transition-colors duration-300 ${
                isOpen ? "bg-[#f5f5f5]" : "bg-[#fafafa]"
              } p-[22px] px-[24px] cursor-pointer`}
              onClick={() => toggleAccordion(item.id)}
            >
              {/* Question Row */}
              <div className="flex items-center justify-between w-full gap-[16px]">
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
              </div>

              {/* Answer Row */}
              {isOpen && (
                <div className="mt-[12px] text-[#5e5e5e] text-[14px] font-['Inter'] tracking-[-0.2px] leading-[21px] whitespace-pre-line desktop:max-w-[722px]">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
