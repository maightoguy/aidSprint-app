# Task Handover

## Summary of Edits

- **Task**: Initial setup and Hero component creation.
  - Copied Figma images to `src/assets/hero/` folder.
  - Created a responsive `Hero.tsx` component implementing the Figma design using Tailwind CSS.
  - Added the `Hero` component to `App.jsx` just below the `Header`.

- **Task**: Update Header to match Figma design.
  - Copied Figma header assets (SVGs) to `src/assets/header/`.
  - Updated `src/landing/Header.tsx` to implement the Desktop and Mobile header designs using the provided vector assets and layout logic.
  - The Header now switches between Desktop and Mobile layouts based on screen size (`md:` breakpoint).
  - **Update**: Removed transparent/blur effects from the Desktop Header to match the white background in Figma design.

- **Task**: Resolve image import errors.
  - Verified existence of all image assets in `src/assets/hero` and `src/assets/header`.
  - Created `src/vite-env.d.ts` with `/// <reference types="vite/client" />` to fix TypeScript/IDE errors regarding image imports (`.png`, `.svg`).
  - Created `tsconfig.json` to properly configure TypeScript for the project (mixed JS/TS environment).
  - Corrected `Header.tsx` mobile logo construction to strictly match Figma styles (fixed dimensions and margins for `m_vector2_dup` and `m_vector7`).

- **Task**: Implement Services Section.
  - Copied Figma services assets to `src/assets/services/`.
  - Created `src/landing/Services.tsx` component implementing the Desktop and Mobile designs.
  - **Update**: Fixed the layout of the "Optimized Layouts" card to match the reference image:
    - Adjusted padding so text is not obstructed by the phones.
    - Aligned the three iPhone mockups straight (removed rotation).
    - Positioned the phones lower so they are partially cut off by the bottom edge of the card, and adjusted sizes for a better visual hierarchy.

- **Task**: Implement "How it works" Section.
  - Extracted Figma images to `src/assets/how-it-works/`.
  - Created `src/landing/HowItWorks.tsx` component.
  - Implemented responsive layout matching the Figma design: 
    - Desktop: 3-column layout (vertical steps, text list with opacity toggle, phone mockup).
    - Mobile: Column layout (horizontal steps with progress line, active text, phone mockup).
  - Added interactive step switching with state.
  - Added "Users" and "Contractors" toggle (UI).
  - Configured phone mockup using absolute positioning and SVG notch overlay.
  - Integrated into `App.jsx`.

- **Task**: Implement "How Our story at Aidsprint" Section.
  - Copied Figma images and SVGs to `src/assets/our-story/`.
  - Created `src/landing/OurStory.tsx` responsive component matching desktop and mobile layouts.
  - Added section to `App.jsx`.

- **Task**: Implement "FAQ" Section.
  - Extracted Figma images and SVG icons to `src/assets/faq/`.
  - Created `src/landing/FAQ.tsx` component.
  - Implemented interactive accordion functionality using React `useState`.
  - Added responsive styling matching Figma layouts (Desktop and Mobile), including dynamic background color changes on active/inactive items.
  - Added `<FAQ />` section to `App.jsx`.

- **Task**: Implement "Contact Us" Section.
  - Extracted Figma images and SVGs to `src/assets/contact/`.
  - Created `src/landing/ContactUs.tsx` responsive component:
    - Added background pattern and dark styling theme.
    - Implemented 2-column layout for desktop (Contact Info & Form).
    - Included correctly placed logo icons (desktop and mobile specific placements).
  - Integrated `<ContactUs />` section into `App.jsx`.

- **Task**: Implement "Review" Section.
  - Extracted Figma images and SVGs to `src/assets/review/`.
  - Created `src/landing/Review.tsx` responsive component:
    - Added store buttons (Playstore/Appstore) adapting sizes based on viewport.
    - Implemented a horizontally scrollable container for the review cards with `snap-x` and `snap-mandatory` for a smooth native-like carousel experience on mobile.
    - Built out review cards with avatars, names, roles, and review text.
    - Included desktop-only pager and arrow controls.
  - Integrated `<Review />` section into `App.jsx`.

- **Task**: Implement "Footer" Section.
  - Extracted Figma images and SVGs to `src/assets/footer/`.
  - Created `src/landing/Footer.tsx` responsive component:
    - Added dark gradient background matching Figma (`bg-gradient-to-br from-[#0c3399] to-[#041133]`).
    - Integrated watermark SVG background (adapting to desktop/mobile constraints).
    - Constructed complex logo asset layouts specific to Desktop and Mobile viewpoints.
    - Added top section with subtitle and store buttons.
    - Added bottom section with navigation links, social icons, and copyright details.
  - Integrated `<Footer />` section into `App.jsx`.

- **Task**: Update Header Section to match new design.
  - Rebuilt the navigation wrapper in `src/landing/Header.tsx` to match the floating pill-shaped design seen in the new reference images.
  - Desktop: Added `bg-white/30 backdrop-blur-[5px]` with a white active pill for "Home" inside a light grey `bg-[#fafafa]` container.
  - Mobile: Kept simple logo and hamburger menu layout but updated spacing to reflect the cleaner design.

- **Task**: Implement smooth scrolling navigation.
  - Added unique `id` attributes to main section components (`Hero`, `HowItWorks`, `FAQ`, `ContactUs`).
  - Updated `href` hash links in `Header.tsx` and `Footer.tsx` to target these section IDs.
  - Added `scroll-behavior: smooth;` to `index.css` to enable smooth scrolling across the page when links are clicked.

- **Task**: Update Header Logo to use PNG.
  - Copied `primary-logo.png` to `src/assets/logos/`.
  - Replaced the complex SVG-constructed logos in `src/landing/Header.tsx` with the single PNG asset, simplifying the component significantly.
  - Ensured correct sizing for both desktop (`h-[30px]`) and mobile (`h-[24px]`).

- **Task**: Optimize landing page for Tablet view (Galaxy Tab S9+).
  - Fixed phone image overlap issue in `Services.tsx` by adding a semi-transparent background to the text container (`bg-white/80 backdrop-blur-sm`).
  - Modified the Services Icons container in `Services.tsx` to horizontally auto-scroll across all screen sizes (including desktop) using `snap-x` and `overflow-x-auto`.
  - Increased gap spacing in `HowItWorks.tsx` between the steps UI and text container, especially for tablet and desktop breakpoints.
  - Added horizontal padding `md:px-[40px] lg:px-[0]` to the `FAQ.tsx` accordion list to prevent the list from looking smushed against the edges on tablet devices.

- **Task**: Fix Phones Layout in Services Section.
  - Reordered the phone images in `Services.tsx` so the main phone (`d_phone1`) is in the center foreground with a higher z-index (`z-20`).
  - Positioned the other two phones (`d_phone2` and `d_phone3`) symmetrically behind it (`z-10`), scaled slightly smaller, and pushed down using negative bottom margins so they appear half-hidden at the bottom of the card, matching the design exactly.
  - Changed the card's background color to match the design's light grey (`bg-[#f0f1f2]`).

- **Task**: Implement custom Tailwind tablet breakpoints.
  - Added specific media queries in `index.css` for tablet resolutions (`tab800: 800px`, `tab820: 820px`, `tab834: 834px`).
  - Refactored `md:` breakpoint usages across all main components (`Services.tsx`, `HowItWorks.tsx`, `FAQ.tsx`, `ContactUs.tsx`, `Review.tsx`, `Footer.tsx`) to utilize the new `tab800:` breakpoint, ensuring optimal tablet scaling and layout transitioning directly targeted at Galaxy Tab S9+ dimensions and similar devices.

- **Task**: Fix Phones Layout on Mobile/Tablet in Services Section.
  - Corrected the breakpoint structure so mobile devices also see all three phones instead of hiding them via `hidden sm:block`.
  - Adjusted the bottom positions of the phones (`bottom-[-40px]` for center, `bottom-[-80px]` for background phones) and adjusted the parent container's height to `h-[250px]` to ensure they are visually cropped at the halfway mark, matching the exact visual style in the mockups across smaller resolutions.
  - Added `--breakpoint-desktop: 1024px;` in `index.css` to act as the clean cut-off for expanding out to a 2-column grid to prevent stretching on iPads/tablets in portrait orientation.

- **Task**: Enforce Mobile Layout on Tablet Devices (800x1280, 820x1180, 834x1210).
  - Changed the default Tailwind layout switching mechanism from `tab800:` (800px) to the new `desktop:` breakpoint (1024px) across *all* components (`Header`, `HowItWorks`, `OurStory`, `FAQ`, `ContactUs`, `Review`, `Footer`).
  - This ensures that tablets in portrait mode (up to 1023px wide) correctly inherit the stacked mobile designs rather than forcing the multi-column desktop designs too early.

- **Task**: Rebuild "How AidSprint works" (Users tab) to match Figma.
  - Copied the Figma assets into `src/assets/how-it-works/` (bg pattern, 4 step screens, notch, store icons).
  - Rebuilt `src/landing/HowItWorks.tsx` to match Figma layout and sizing:
    - Desktop (`desktop:`): 3-column grid (vertical stepper, stacked step texts with opacity states, phone preview card).
    - Mobile/Tablet (<1024px): mobile layout (horizontal stepper + active step text + clipped phone preview card).
  - Improved desktop spacing by matching the stepper’s 80px segment spacing and aligning the text column height to the stepper height.

- **Task**: Implement "How AidSprint works" (Contractor tab) to match Figma.
  - Copied Contractor tab assets into `src/assets/how-it-works/contractor/` (bg pattern, 4 step screens, notch, store icons).
  - Updated `src/landing/HowItWorks.tsx` to switch step copy, images, background pattern, notch, and store icons based on selected tab.
  - Reset steps state to step 01 when switching between Users/Contractor tabs to match expected UX.

## Recent Changes (Post-Handover Updates)

- **Task**: Services section layout + auto-scrolling.
  - Rebuilt the Services layout so “Optimized Layouts” and the adjacent right column occupy equal space on desktop, while staying stacked on mobile/tablet.
  - Implemented a “discovery” services icon rail:
    - Always horizontal, partially obscured (never all visible), hidden scrollbars.
    - Auto-advances every 7 seconds, smooth scrolling, pause-on-hover, and click-to-scroll.
  - Added `.no-scrollbar` utility in `src/index.css`.

- **Task**: Services phone mock alignment + centering.
  - Removed margin-offset centering hacks and centered the phone cluster using layout (`flex justify-center`) so the phones stay centered across all breakpoints.

- **Task**: “Exclusive community” collage fixes + panoramic carousel.
  - Fixed missing collage on mobile/tablet by replacing the fragile absolute layout with an overflow-hidden viewport approach and correct sizing.
  - Added a resilient image fallback: each tile renders a gray placeholder container and keeps it visible if an image fails to load.
  - Added panoramic slideshow behavior:
    - Auto-advance every 7 seconds.
    - Supports touch drag, mouse drag, trackpad horizontal wheel/shift-wheel, and keyboard arrow navigation.
    - Pause-on-hover.
  - Eliminated a page “snapping/jumping” bug caused by `scrollIntoView` usage in the Services icons auto-advance by switching to `scrollTo({ left })`.
  - Added a CSS animation fallback for the collage (`servicesCommunityPanorama`) in `src/index.css`, and disables it when JS-driven dragging is active.

- **Task**: Hero iPhone crop fix (mobile).
  - Adjusted the Hero iPhone mock’s bottom offset so the top is fully visible on mobile, with only the bottom cropped.

- **Task**: Review carousel migration to Embla Carousel.
  - Re-implemented the `Review.tsx` carousel using `embla-carousel-react` and `embla-carousel-autoplay`.
  - Maintained the exact visual design, gap sizing, and `min-w-[280px]` cards using Embla's flex layout structure.
  - Enabled smooth horizontal scrolling with touch/swipe support across all devices.
  - Configured `loop: true` for seamless continuous sliding.
  - Integrated `embla-carousel-autoplay` for automatic transitions (6500ms delay) with pause-on-hover and pause-on-interaction.
  - Wired existing desktop left/right navigation arrows and dot indicators to `emblaApi.scrollPrev()`, `scrollNext()`, and `scrollTo()`.

- **Task**: Testing setup (added, then tests removed).
  - Added a Vitest + Testing Library setup and a `test` script in `package.json`.
  - Added dependencies for Vitest/jsdom/testing-library.
  - Note: `src/landing/Review.test.tsx` was later deleted (tests currently not present even though the test script/deps remain).
  - Note: installing dev dependencies required `npm install --legacy-peer-deps` due to a peer dependency conflict between `vite@8` and `@tailwindcss/vite`.

*Always update this file after every major task.*
