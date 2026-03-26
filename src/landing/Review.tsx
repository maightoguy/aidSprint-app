import React, { useEffect, useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

// Assets for Desktop
import d_playstoreIcon from "../assets/review/mmz344z5-skya8pm.svg";
import d_appstoreIcon from "../assets/review/mmz344z5-gmmhe9u.svg";
import d_leftArrow from "../assets/review/mmz344z5-qvh2b1k.svg";
import d_rightArrow from "../assets/review/mmz344z5-qd0itx9.png";
import d_avatar1 from "../assets/review/mmz344za-4ans8fm.png";
import d_avatar2 from "../assets/review/mmz344za-qchvp4j.png";
import d_avatar3 from "../assets/review/mmz344za-0sycmoy.png";
import d_avatar4 from "../assets/review/mmz344za-bhlv2mp.png";

// Assets for Mobile
import m_playstoreIcon from "../assets/review/mmz34jl7-kgog3bt.svg";
import m_appstoreIcon from "../assets/review/mmz34jl7-xv8nrgs.svg";

const reviews = [
  {
    id: 1,
    text: "“AidSprint saved my day! My kitchen pipe burst unexpectedly and the plumber arrived in under 20 minutes. Fast, professional, and affordable.”",
    name: "Gail O.",
    role: "London",
    avatar: d_avatar1,
  },
  {
    id: 2,
    text: "“The real-time tracking is my favorite part. I always know when the provider is on the way. Zero stress, zero guesswork.”",
    name: "Alex P.",
    role: "Toronto",
    avatar: d_avatar2,
  },
  {
    id: 3,
    text: "“I used AidSprint to book a cleaner at the last minute. The service was spotless — literally. Highly recommend!”",
    name: "Danielle S.",
    role: "Mississauga",
    avatar: d_avatar3,
  },
  {
    id: 4,
    text: "“Reliable and safe. I love that every provider is verified. It gives me peace of mind when booking babysitters or home care services.”",
    name: "Samantha A.",
    role: "Brampton",
    avatar: d_avatar4,
  },
  {
    id: 5,
    text: "“Joining AidSprint increased my client base overnight. I get steady jobs every week and only work when I want to. The platform is smooth and transparent.”",
    name: "Josh F.",
    role: "Professional Electrician",
    avatar: d_avatar1, // Reusing avatars since we only have 4
  },
  {
    id: 6,
    text: "“As a single mom, AidSprint has helped me earn consistently. Payments are fast, and customers are respectful and verified.”",
    name: "Isabel M.",
    role: "Cleaner",
    avatar: d_avatar2,
  },
  {
    id: 7,
    text: "“I love how easy it is to accept jobs on the app. No more waiting for referrals. AidSprint brings the customers directly to me.”",
    name: "Kelvin J.",
    role: "Plumber",
    avatar: d_avatar3,
  },
];

export function Review() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [
      Autoplay({
        delay: 4000,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
      }),
    ],
  );

  const [activeDot, setActiveDot] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setActiveDot(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const resetAutoplay = useCallback(() => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;
    autoplay.reset();
  }, [emblaApi]);

  const goPrev = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
    resetAutoplay();
  }, [emblaApi, resetAutoplay]);

  const goNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
    resetAutoplay();
  }, [emblaApi, resetAutoplay]);

  const jumpToRealIndex = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
      resetAutoplay();
    },
    [emblaApi, resetAutoplay],
  );

  return (
    <section className="flex flex-col items-center bg-white py-[50px] px-[24px] desktop:py-[100px] desktop:px-[120px] w-full overflow-hidden gap-[30px]">
      {/* Header */}
      <div className="flex flex-col items-center gap-[14px] w-full text-center">
        <h2 className="text-[#000000] text-[24px] desktop:text-[30px] font-bold font-['Space_Grotesk']">
          What our customer’s say
        </h2>
        <p className="text-[#5e5e5e] text-[14px] font-['Space_Grotesk'] desktop:font-['Inter'] tracking-[-0.2px]">
          Get firsthand reviews from our customers
        </p>
      </div>

      {/* Store Buttons */}
      <div className="flex items-center justify-center gap-[11px] desktop:gap-[14px]">
        <button className="flex items-center justify-center gap-[8px] desktop:gap-[10px] bg-[#020715] rounded-[816px] desktop:rounded-[999px] py-[8px] px-[16px] desktop:py-[10px] desktop:px-[20px] hover:bg-gray-800 transition-colors">
          <img
            src={d_playstoreIcon}
            alt="Play Store"
            className="hidden desktop:block w-[20px] h-[24px]"
          />
          <img
            src={m_playstoreIcon}
            alt="Play Store"
            className="block desktop:hidden w-[9px] h-[11px]"
          />
          <span className="text-white text-[11px] desktop:text-[14px] font-medium font-['Inter'] tracking-[-0.16px] desktop:tracking-[-0.2px]">
            Get On playstore
          </span>
        </button>
        <button className="flex items-center justify-center gap-[8px] desktop:gap-[10px] bg-[#020715] rounded-[816px] desktop:rounded-[999px] py-[8px] px-[16px] desktop:py-[10px] desktop:px-[20px] hover:bg-gray-800 transition-colors">
          <img
            src={d_appstoreIcon}
            alt="App Store"
            className="hidden desktop:block w-[23px] h-[27px]"
          />
          <img
            src={m_appstoreIcon}
            alt="App Store"
            className="block desktop:hidden w-[9px] h-[11px]"
          />
          <span className="text-white text-[11px] desktop:text-[14px] font-medium font-['Inter'] tracking-[-0.16px] desktop:tracking-[-0.2px]">
            Get on Appstore
          </span>
        </button>
      </div>

      <div className="flex flex-col items-center w-full max-w-[1200px]">
        <div
          ref={emblaRef}
          data-testid="reviews-scroll"
          className="w-full overflow-hidden py-[10px]"
        >
          <div className="flex items-center gap-[8px]">
            {reviews.map((review) => (
              <div
                key={review.id}
                data-review-card
                className="flex flex-col justify-between min-w-[280px] w-[280px] desktop:min-w-[280px] desktop:w-[280px] flex-[0_0_auto] bg-[#fafafa] border border-[#f0f1f2] rounded-[24px] p-[31px] h-[267px]"
              >
                <p className="text-[#5e5e5e] text-[16px] font-['Space_Grotesk'] leading-[1.5]">
                  {review.text}
                </p>
                <div className="flex items-center gap-[12px]">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-[32px] h-[32px] rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <span className="text-[#000000] text-[16px] font-medium font-['Space_Grotesk'] leading-[1.2] desktop:leading-[11px]">
                      {review.name}
                    </span>
                    <span className="text-[#6b7280] text-[14px] font-['Space_Grotesk'] leading-[18px]">
                      {review.role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden desktop:flex items-center justify-center gap-[8px] mt-[10px]">
          <button
            type="button"
            data-testid="reviews-prev"
            onClick={goPrev}
            className="flex items-center justify-center w-[32px] h-[32px] bg-[#fafafa] border border-[#f0f1f2] rounded-full transition-colors hover:bg-gray-100 active:scale-[0.97]"
          >
            <img
              src={d_leftArrow}
              alt="Previous"
              className="w-[16px] h-[16px]"
            />
          </button>
          <div className="flex items-center gap-[12px] px-[4px]">
            {reviews.map((_, dotIdx) => (
              <button
                key={dotIdx}
                type="button"
                aria-label={`Go to review ${dotIdx + 1}`}
                onClick={() => jumpToRealIndex(dotIdx)}
                className={`w-[10px] h-[10px] rounded-full ${
                  dotIdx === activeDot ? "bg-[#5d5a88]" : "bg-[#d1d3d8]"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            data-testid="reviews-next"
            onClick={goNext}
            className="flex items-center justify-center w-[32px] h-[32px] bg-[#fafafa] border border-[#f0f1f2] rounded-full transition-colors hover:bg-gray-100 active:scale-[0.97]"
          >
            <img
              src={d_rightArrow}
              alt="Next"
              className="w-[16px] h-[16px] rotate-180"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
