import React, { useEffect, useMemo, useRef, useState } from "react";

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
  const AUTO_SLIDE_MS = 7000;
  const serviceItems = useMemo<ServiceItem[]>(
    () => [
      { icon: d_cleaning, label: "Cleaning" },
      { icon: d_psw, label: "PSW care" },
      { icon: d_plumbing, label: "Plumbing" },
      { icon: d_locksmith, label: "Locksmith" },
      { icon: d_electrician, label: "Electrician" },
      { icon: d_babysitting, label: "Babysitting" },
      { icon: d_petsitter, label: "Petsitter" },
      { icon: d_handyman, label: "Handyman" },
    ],
    [],
  );

  const iconScrollRef = useRef<HTMLDivElement | null>(null);
  const iconScrollRafRef = useRef<number | null>(null);
  const [activeIconIndex, setActiveIconIndex] = useState(0);
  const activeIconIndexRef = useRef(0);
  const [iconIsPaused, setIconIsPaused] = useState(false);
  const [iconAutoKey, setIconAutoKey] = useState(0);

  const communityViewportRef = useRef<HTMLDivElement | null>(null);
  const communityTrackRef = useRef<HTMLDivElement | null>(null);
  const communityBoundsRef = useRef({ minOffset: 0 });
  const communityDidInitRef = useRef(false);
  const communityDragRef = useRef({
    active: false,
    startX: 0,
    startOffset: 0,
  });
  const [communityHasMeasured, setCommunityHasMeasured] = useState(false);
  const [communityOffset, setCommunityOffset] = useState(0);
  const [communityIsDragging, setCommunityIsDragging] = useState(false);
  const [communitySnapIndex, setCommunitySnapIndex] = useState(0);
  const [communityIsPaused, setCommunityIsPaused] = useState(false);
  const [communityAutoKey, setCommunityAutoKey] = useState(0);

  useEffect(() => {
    const el = iconScrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      if (iconScrollRafRef.current !== null) {
        window.cancelAnimationFrame(iconScrollRafRef.current);
      }
      iconScrollRafRef.current = window.requestAnimationFrame(() => {
        const items = Array.from(
          el.querySelectorAll<HTMLElement>("[data-service-item]"),
        );
        if (items.length === 0) return;
        const leftEdge = el.scrollLeft;
        let closestIdx = 0;
        let closestDist = Number.POSITIVE_INFINITY;
        items.forEach((item, idx) => {
          const dist = Math.abs(item.offsetLeft - leftEdge);
          if (dist < closestDist) {
            closestDist = dist;
            closestIdx = idx;
          }
        });
        setActiveIconIndex((prev) => (prev === closestIdx ? prev : closestIdx));
      });
    };

    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      el.removeEventListener("scroll", handleScroll);
      if (iconScrollRafRef.current !== null) {
        window.cancelAnimationFrame(iconScrollRafRef.current);
      }
    };
  }, []);

  useEffect(() => {
    activeIconIndexRef.current = activeIconIndex;
  }, [activeIconIndex]);

  useEffect(() => {
    if (iconIsPaused) return;
    const el = iconScrollRef.current;
    if (!el) return;
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    const timeoutId = window.setTimeout(() => {
      const items = Array.from(
        el.querySelectorAll<HTMLElement>("[data-service-item]"),
      );
      if (items.length === 0) return;
      const stride =
        items.length > 1 ? items[1].offsetLeft - items[0].offsetLeft : 1;
      const visibleCount = Math.max(
        1,
        Math.floor(el.clientWidth / Math.max(1, stride)),
      );
      const step = Math.min(visibleCount, items.length);
      const nextIdx = (activeIconIndexRef.current + step) % items.length;
      const nextLeft = Math.min(
        Math.max(0, items[nextIdx]?.offsetLeft ?? 0),
        Math.max(0, el.scrollWidth - el.clientWidth),
      );
      el.scrollTo({
        left: nextLeft,
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
      setActiveIconIndex(nextIdx);
      setIconAutoKey((k) => k + 1);
    }, AUTO_SLIDE_MS);

    return () => window.clearTimeout(timeoutId);
  }, [AUTO_SLIDE_MS, iconIsPaused, iconAutoKey]);

  useEffect(() => {
    const viewport = communityViewportRef.current;
    const track = communityTrackRef.current;
    if (!viewport || !track) return;

    const recalc = () => {
      const viewportWidth = viewport.clientWidth;
      const trackWidth = track.scrollWidth;
      const minOffset = Math.min(0, viewportWidth - trackWidth);
      communityBoundsRef.current = { minOffset };
      const initialPreferredOffset =
        typeof window !== "undefined" && window.innerWidth >= 1025 ? -137 : -80;
      setCommunityOffset((prev) => {
        if (!communityDidInitRef.current) {
          communityDidInitRef.current = true;
          return Math.max(minOffset, Math.min(0, initialPreferredOffset));
        }
        return Math.max(minOffset, Math.min(0, prev));
      });
      setCommunityHasMeasured(true);
    };

    recalc();

    const ro =
      typeof window !== "undefined" && "ResizeObserver" in window
        ? new ResizeObserver(recalc)
        : null;
    ro?.observe(viewport);
    ro?.observe(track);

    window.addEventListener("resize", recalc);
    return () => {
      ro?.disconnect();
      window.removeEventListener("resize", recalc);
    };
  }, []);

  useEffect(() => {
    if (!communityHasMeasured) return;
    const { minOffset } = communityBoundsRef.current;
    const initialPreferredOffset =
      typeof window !== "undefined" && window.innerWidth >= 1025 ? -137 : -80;
    const startOffset = Math.max(
      minOffset,
      Math.min(0, initialPreferredOffset),
    );
    const stops = [startOffset, (startOffset + minOffset) / 2, minOffset];
    const target = stops[communitySnapIndex] ?? 0;
    setCommunityOffset(Math.max(minOffset, Math.min(0, target)));
  }, [communityHasMeasured, communitySnapIndex]);

  useEffect(() => {
    if (!communityHasMeasured) return;
    if (communityIsDragging) return;
    if (communityIsPaused) return;
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (prefersReducedMotion) return;

    const timeoutId = window.setTimeout(() => {
      setCommunitySnapIndex((prev) => (prev + 1) % 3);
      setCommunityAutoKey((k) => k + 1);
    }, AUTO_SLIDE_MS);

    return () => window.clearTimeout(timeoutId);
  }, [
    AUTO_SLIDE_MS,
    communityHasMeasured,
    communityIsDragging,
    communityIsPaused,
    communityAutoKey,
  ]);

  const snapCommunityToNearest = (nextOffset: number) => {
    const { minOffset } = communityBoundsRef.current;
    const initialPreferredOffset =
      typeof window !== "undefined" && window.innerWidth >= 1025 ? -137 : -80;
    const startOffset = Math.max(
      minOffset,
      Math.min(0, initialPreferredOffset),
    );
    const stops = [startOffset, (startOffset + minOffset) / 2, minOffset];
    let bestIdx = 0;
    let bestDist = Number.POSITIVE_INFINITY;
    stops.forEach((stop, idx) => {
      const dist = Math.abs(stop - nextOffset);
      if (dist < bestDist) {
        bestDist = dist;
        bestIdx = idx;
      }
    });
    setCommunitySnapIndex(bestIdx);
  };

  const beginCommunityDrag = (clientX: number) => {
    communityDragRef.current = {
      active: true,
      startX: clientX,
      startOffset: communityOffset,
    };
    setCommunityIsDragging(true);
  };

  const moveCommunityDrag = (clientX: number) => {
    if (!communityDragRef.current.active) return;
    const { minOffset } = communityBoundsRef.current;
    const dx = clientX - communityDragRef.current.startX;
    const nextOffset = Math.max(
      minOffset,
      Math.min(0, communityDragRef.current.startOffset + dx),
    );
    setCommunityOffset(nextOffset);
  };

  const endCommunityDrag = () => {
    if (!communityDragRef.current.active) return;
    communityDragRef.current.active = false;
    setCommunityIsDragging(false);
    snapCommunityToNearest(communityOffset);
    setCommunityAutoKey((k) => k + 1);
  };

  const nudgeCommunityBy = (dx: number) => {
    const { minOffset } = communityBoundsRef.current;
    setCommunityOffset((prev) => Math.max(minOffset, Math.min(0, prev + dx)));
  };

  const onCommunityWheel: React.WheelEventHandler<HTMLDivElement> = (e) => {
    const absX = Math.abs(e.deltaX);
    const absY = Math.abs(e.deltaY);
    const wantsHorizontal = absX > absY || e.shiftKey;
    if (!wantsHorizontal) return;
    e.preventDefault();
    const dx = -(absX > absY ? e.deltaX : e.deltaY);
    nudgeCommunityBy(dx);
    setCommunityAutoKey((k) => k + 1);
  };

  return (
    <section className="flex flex-col items-center w-full bg-[#fafafa] py-[50px] px-[24px] desktop:py-[100px] desktop:px-[120px] gap-[30px]">
      <div className="flex flex-col items-center text-center gap-[14px] w-full max-w-[944px]">
        <h2 className="text-[#000000] text-[24px] desktop:text-[30px] font-bold font-['Space_Grotesk']">
          Why us AidSprint?&nbsp;
        </h2>
        <p className="text-[#6b7280] text-[14px] desktop:text-[16px] font-['Space_Grotesk']">
          Connect instantly with verified plumbers, electricians, locksmiths,
          cleaners, and other professionals near you. Request help, track
          arrival in real time, and pay securely all from your phone.
        </p>
      </div>

      <div className="flex flex-col w-full max-w-[1200px] gap-[12px]">
        <div className="flex flex-col desktop:flex-row items-stretch gap-[12px] w-full">
          <div className="flex flex-col flex-1 border border-[#f0f1f2] rounded-[20px] bg-white overflow-hidden">
            <div className="flex flex-col gap-[8px] p-[32px]">
              <h3 className="text-[#000000] text-[24px] font-bold font-['Space_Grotesk']">
                Optimized Layouts
              </h3>
              <p className="text-[#6b7280] text-[14px] font-['Space_Grotesk']">
                Crafted to adapt beautifully across screen sizes—fluid,
                responsive, and consistent wherever you go.
              </p>
            </div>

            <div className="bg-[#e6e7eb] pt-[32px] overflow-hidden flex-1">
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
          </div>

          <div className="flex flex-col flex-1 gap-[12px]">
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
                  Real-time teamwork made simple with synced changes and smart
                  user roles across your team.
                </p>
              </div>
            </div>

            <div className="flex flex-col border border-[#f0f1f2] rounded-[20px] bg-white overflow-hidden">
              <div className="flex items-center py-[45px] pb-[44px] overflow-hidden">
                <div
                  className="relative w-full max-w-[520px] overflow-hidden px-[32px] mx-auto"
                  onMouseEnter={() => setIconIsPaused(true)}
                  onMouseLeave={() => setIconIsPaused(false)}
                  onFocusCapture={() => setIconIsPaused(true)}
                  onBlurCapture={() => setIconIsPaused(false)}
                >
                  <div
                    ref={iconScrollRef}
                    className="flex items-start gap-[20px] overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory"
                  >
                    {serviceItems.map((service, idx) => (
                      <div
                        key={service.label}
                        data-service-item
                        className="flex flex-col items-center gap-[8px] shrink-0 w-[59px] snap-start cursor-pointer select-none"
                        onClick={() => {
                          const items = Array.from(
                            iconScrollRef.current?.querySelectorAll<HTMLElement>(
                              "[data-service-item]",
                            ) ?? [],
                          );
                          const prefersReducedMotion =
                            typeof window !== "undefined" &&
                            window.matchMedia?.(
                              "(prefers-reduced-motion: reduce)",
                            )?.matches;
                          const el = iconScrollRef.current;
                          const item = items[idx];
                          if (el && item) {
                            const nextLeft = Math.min(
                              Math.max(0, item.offsetLeft),
                              Math.max(0, el.scrollWidth - el.clientWidth),
                            );
                            el.scrollTo({
                              left: nextLeft,
                              behavior: prefersReducedMotion
                                ? "auto"
                                : "smooth",
                            });
                          }
                          setActiveIconIndex(idx);
                          setIconAutoKey((k) => k + 1);
                        }}
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

                  <div className="pointer-events-none absolute inset-y-0 left-0 w-[28px] bg-gradient-to-r from-white to-transparent" />
                  <div className="pointer-events-none absolute inset-y-0 right-0 w-[28px] bg-gradient-to-l from-white to-transparent" />
                </div>
              </div>

              <div className="flex flex-col px-[32px] pb-[32px] items-center">
                <h4 className="text-[#000000] text-[24px] font-bold font-['Space_Grotesk'] text-center">
                  Services
                </h4>
              </div>
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
              <div
                ref={communityViewportRef}
                className="relative w-full overflow-hidden px-[20px] outline-none"
                tabIndex={0}
                style={{ touchAction: "pan-y" }}
                onWheel={onCommunityWheel}
                onMouseEnter={() => setCommunityIsPaused(true)}
                onMouseLeave={() => setCommunityIsPaused(false)}
                onFocusCapture={() => setCommunityIsPaused(true)}
                onBlurCapture={() => setCommunityIsPaused(false)}
                onKeyDown={(e) => {
                  if (e.key === "ArrowLeft") {
                    e.preventDefault();
                    nudgeCommunityBy(160);
                    setCommunityAutoKey((k) => k + 1);
                    return;
                  }
                  if (e.key === "ArrowRight") {
                    e.preventDefault();
                    nudgeCommunityBy(-160);
                    setCommunityAutoKey((k) => k + 1);
                  }
                }}
                onPointerDown={(e) => {
                  (e.currentTarget as HTMLDivElement).setPointerCapture(
                    e.pointerId,
                  );
                  beginCommunityDrag(e.clientX);
                }}
                onPointerMove={(e) => moveCommunityDrag(e.clientX)}
                onPointerUp={endCommunityDrag}
                onPointerCancel={endCommunityDrag}
                onTouchStart={(e) =>
                  beginCommunityDrag(e.touches[0]?.clientX ?? 0)
                }
                onTouchMove={(e) =>
                  moveCommunityDrag(e.touches[0]?.clientX ?? 0)
                }
                onTouchEnd={endCommunityDrag}
              >
                <div
                  ref={communityTrackRef}
                  className={`services-community-track flex flex-col gap-[9px] w-max ${
                    communityHasMeasured ? "services-community-track--js" : ""
                  } ${
                    communityIsDragging
                      ? "transition-none"
                      : "transition-transform duration-700 ease-out"
                  }`}
                  style={
                    communityHasMeasured
                      ? { transform: `translate3d(${communityOffset}px,0,0)` }
                      : undefined
                  }
                >
                  <div className="flex items-center gap-[11px] pt-[24px] min-[1025px]:pt-[84px]">
                    {[m_comm1, m_comm2, m_comm3, m_comm4].map((src, idx) => (
                      <CommunityTile
                        key={`row1-${idx}`}
                        src={src}
                        className="w-[150px] h-[80px] rounded-[12px] overflow-hidden min-[1025px]:w-[259px] min-[1025px]:h-[138px] min-[1025px]:rounded-[20px]"
                      />
                    ))}
                  </div>
                  <div className="flex items-center gap-[11px]">
                    {[m_comm5, m_comm6, m_comm7, m_comm8].map((src, idx) => (
                      <CommunityTile
                        key={`row2-${idx}`}
                        src={src}
                        className="w-[150px] h-[80px] rounded-[12px] overflow-hidden min-[1025px]:w-[259px] min-[1025px]:h-[138px] min-[1025px]:rounded-[20px]"
                      />
                    ))}
                    <CommunityTile
                      src={m_comm9}
                      className="w-[150px] h-[80px] rounded-[12px] overflow-hidden min-[1025px]:w-[259px] min-[1025px]:h-[138px] min-[1025px]:rounded-[7px]"
                    />
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
