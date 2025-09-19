import { Button } from "./ui/button";
import cmLogoSvg from "@/assets/cm-logo.svg";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const navRef = useRef<HTMLElement | null>(null);
  const logoWrapperRef = useRef<HTMLDivElement | null>(null);
  const [useDarkLogo, setUseDarkLogo] = useState(false);

  useEffect(() => {
    const navEl = navRef.current;
    const checkBackground = () => {
      if (!navEl || !logoWrapperRef.current) return;

      const rect = logoWrapperRef.current.getBoundingClientRect();
      const sampleX = Math.round(rect.left + rect.width / 2);
      const sampleY = Math.round(rect.bottom + 2);

      const previousPointer = navEl.style.pointerEvents;
      navEl.style.pointerEvents = "none";
      const target = document.elementFromPoint(sampleX, sampleY) as HTMLElement | null;
      navEl.style.pointerEvents = previousPointer;

      const getEffectiveBg = (el: HTMLElement | null): string => {
        let current: HTMLElement | null = el;
        while (current) {
          const style = window.getComputedStyle(current);
          const bg = style.backgroundColor;
          if (bg && bg !== "rgba(0, 0, 0, 0)" && bg !== "transparent") return bg;
          current = current.parentElement as HTMLElement | null;
        }
        return window.getComputedStyle(document.body).backgroundColor;
      };

      const bg = getEffectiveBg(target);

      const parseRGB = (color: string) => {
        const match = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
        if (!match) return { r: 0, g: 0, b: 0 };
        return { r: Number(match[1]), g: Number(match[2]), b: Number(match[3]) };
      };

      const { r, g, b } = parseRGB(bg);
      const srgb = [r, g, b].map((v) => v / 255).map((c) => (c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)));
      const luminance = 0.2126 * srgb[0] + 0.7152 * srgb[1] + 0.0722 * srgb[2];

      setUseDarkLogo(luminance > 0.6);
    };

    const onScroll = () => {
      // Use rAF to avoid jank
      requestAnimationFrame(checkBackground);
    };

    checkBackground();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", checkBackground);
    return () => {
      window.removeEventListener("scroll", onScroll as EventListener);
      window.removeEventListener("resize", checkBackground);
    };
  }, []);

  return (
    <nav ref={navRef} className="sticky top-0 z-50 bg-transparent">
      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div ref={logoWrapperRef} className="h-8 w-8">
            <Link to="/" aria-label="Home">
              <img
                src={cmLogoSvg}
                alt="Credit Markets"
                className={`h-full w-full object-contain transition-all duration-150 ${useDarkLogo ? "brightness-0" : "brightness-0 invert"}`}
              />
            </Link>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-12">
            <a 
              href="#protocol" 
              className={`${useDarkLogo ? 'text-deep-black' : 'text-clean-white'} hover:text-strategic-blue transition-colors duration-300 font-mono text-sm tracking-wider uppercase`}
            >
              PROTOCOL
            </a>
            <a 
              href="#markets" 
              className={`${useDarkLogo ? 'text-deep-black' : 'text-clean-white'} hover:text-strategic-blue transition-colors duration-300 font-mono text-sm tracking-wider uppercase`}
            >
              MARKETS
            </a>
            <a 
              href="#access" 
              className={`${useDarkLogo ? 'text-deep-black' : 'text-clean-white'} hover:text-strategic-blue transition-colors duration-300 font-mono text-sm tracking-wider uppercase`}
            >
              ACCESS
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;