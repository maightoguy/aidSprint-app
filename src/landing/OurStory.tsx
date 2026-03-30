import React from "react";

// Assets
import d_teamImage from "../assets/our-story/mmy1btn0-zfpeb7q.png";
import m_teamImage from "../assets/our-story/mmy1ct6h-vfg68qa.png";
import heartIcon from "../assets/our-story/mmy1btn0-4f8jzxq.svg";
import zapIcon from "../assets/our-story/mmy1btn1-8drnfoj.svg";

export function OurStory() {
  return (
    <section className="flex flex-col items-center bg-[#fafafa] py-[50px] px-[24px] desktop:py-[100px] desktop:px-[120px] gap-[30px]">
      {/* Header Section */}
      {/* <div className="flex flex-col items-center gap-[14px] desktop:gap-[30px] w-full max-w-[668px] mx-auto text-center">
        <h2 className="text-[24px] desktop:text-[30px] font-bold text-black font-['Space_Grotesk'] leading-tight">
          How Our story at Aidsprint
        </h2>
        <p className="text-[14px] desktop:text-[21px] text-[#1d263a] opacity-70 font-['Space_Grotesk'] leading-[1.5]">
          We are an industry-leading company that values honesty, integrity, and
          efficiency. Building quality products and caring for the users are
          what made us stand out since the beginning.
        </p>
      </div> */}

      {/* Main Image */}
      <div className="w-full max-w-[1168px] rounded-[6px] desktop:rounded-[20px] overflow-hidden mt-[10px] desktop:mt-[0]">
        <img
          src={d_teamImage}
          alt="Our Team"
          className="hidden desktop:block w-full h-auto object-cover"
        />
        <img
          src={m_teamImage}
          alt="Our Team"
          className="block desktop:hidden w-full h-auto object-cover"
        />
      </div>

      {/* Values/Features Section */}
      <div className="flex flex-col desktop:flex-row items-start justify-between w-full max-w-[1168px] gap-[30px] desktop:gap-[40px] mt-[10px] desktop:mt-[20px]">
        {/* Value 1 */}
        <div className="flex items-start gap-[16px] desktop:gap-[30px] w-full desktop:w-[501px]">
          <div className="relative flex-shrink-0 w-[49px] h-[54px] desktop:w-[72px] desktop:h-[80px] rounded-[50%] bg-white/40 border border-[#f0f1f2] flex items-center justify-center">
            <img
              src={heartIcon}
              alt="Heart Icon"
              className="w-[20px] h-[22px] desktop:w-[29px] desktop:h-[32px]"
            />
          </div>
          <p className="text-[16px] text-[#1d263a] font-medium font-['Space_Grotesk'] opacity-70 leading-[1.5] flex-1 desktop:mt-[5px]">
            We are an industry-leading company that values honesty, integrity,
            and efficiency. Building quality products and caring for the users
            are what made us stand out since the beginning.
          </p>
        </div>

        {/* Value 2 */}
        <div className="flex items-start gap-[16px] desktop:gap-[30px] w-full desktop:w-[501px]">
          <div className="relative flex-shrink-0 w-[47px] h-[52px] desktop:w-[72px] desktop:h-[80px] rounded-[50%] bg-white/40 border border-[#f0f1f2] flex items-center justify-center">
            <img
              src={zapIcon}
              alt="Lightning Icon"
              className="w-[21px] h-[23px] desktop:w-[33px] desktop:h-[36px]"
            />
          </div>
          <p className="text-[16px] text-[#1d263a] font-medium font-['Space_Grotesk'] opacity-70 leading-[1.5] flex-1 desktop:mt-[6px]">
            We’re a team of highly skilled professionals with years of
            experience in different fields vowed to revolutionize the people’s
            web experience.
          </p>
        </div>
      </div>
    </section>
  );
}
