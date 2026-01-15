import { Button } from "./ui/button";
import cmLogoSvg from "@/assets/cm-logo.svg";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

// Cache for color luminance calculations
const colorCache = new Map<string, boolean>();

// Optimized luminance calculation
const calculateLuminance = (color: string): number => {
  let match = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);

  if (!match) {
    console.warn('Unexpected color format for luminance calculation', {
      color,
      format: 'expected rgb/rgba',
    });

    if (color.startsWith('#')) {
      const hex = color.replace('#', '');
      if (hex.length === 6) {
        const r = parseInt(hex.substr(0, 2), 16);
        const g = parseInt(hex.substr(2, 2), 16);
        const b = parseInt(hex.substr(4, 2), 16);
        match = ['', String(r), String(g), String(b)];
      }
    }

    if (!match) {
      return 0;
    }
  }

  const r = Number(match[1]);
  const g = Number(match[2]);
  const b = Number(match[3]);

  if (isNaN(r) || isNaN(g) || isNaN(b)) {
    console.error('Invalid RGB values in color', { color, r, g, b });
    return 0;
  }

  // Convert to sRGB and calculate luminance
  const srgb = [r, g, b]
    .map((v) => v / 255)
    .map((c) => (c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)));

  return 0.2126 * srgb[0] + 0.7152 * srgb[1] + 0.0722 * srgb[2];
};

const Navigation = () => {
  const navRef = useRef<HTMLElement | null>(null);
  const logoWrapperRef = useRef<HTMLDivElement | null>(null);
  const [useDarkLogo, setUseDarkLogo] = useState(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const location = useLocation();
  const isMainPage = location.pathname === '/';

  useEffect(() => {
    const navEl = navRef.current;

    const getEffectiveBg = (el: HTMLElement | null): string => {
      let current: HTMLElement | null = el;
      let depth = 0;

      while (current && depth < 20) {
        const style = window.getComputedStyle(current);
        const bg = style.backgroundColor;
        if (bg && bg !== "rgba(0, 0, 0, 0)" && bg !== "transparent") {
          return bg;
        }
        current = current.parentElement as HTMLElement | null;
        depth++;
      }

      const bodyBg = window.getComputedStyle(document.body).backgroundColor;
      console.warn('Logo background detection fell back to document.body', {
        sampledElement: el?.tagName,
        sampledElementClasses: el?.className,
        depthSearched: depth,
        bodyBackground: bodyBg,
      });

      return bodyBg;
    };

    const checkBackground = () => {
      if (!navEl || !logoWrapperRef.current) return;

      const rect = logoWrapperRef.current.getBoundingClientRect();
      const sampleX = Math.round(rect.left + rect.width / 2);
      const sampleY = Math.round(rect.bottom + 2);

      const previousPointer = navEl.style.pointerEvents;
      navEl.style.pointerEvents = "none";
      const target = document.elementFromPoint(sampleX, sampleY) as HTMLElement | null;
      navEl.style.pointerEvents = previousPointer;

      const bg = getEffectiveBg(target);

      if (colorCache.has(bg)) {
        setUseDarkLogo(colorCache.get(bg)!);
        return;
      }

      const luminance = calculateLuminance(bg);
      const isDark = luminance > 0.6;
      colorCache.set(bg, isDark);
      setUseDarkLogo(isDark);
    };

    const onScroll = () => {
      if (window.innerWidth < 768 || scrollTimeoutRef.current) return;

      scrollTimeoutRef.current = setTimeout(() => {
        requestAnimationFrame(checkBackground);
        scrollTimeoutRef.current = null;
      }, 100);
    };

    checkBackground();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", checkBackground);

    return () => {
      window.removeEventListener("scroll", onScroll as EventListener);
      window.removeEventListener("resize", checkBackground);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  return (
    <nav ref={navRef} className="sticky top-0 z-50 bg-transparent">
      <div className="container mx-auto px-6 py-4 md:py-8">
        <div className="flex items-center justify-between">
          <div ref={logoWrapperRef} className="h-10 w-10 md:h-8 md:w-8">
            <Link to="/" aria-label="Home">
              <img
                src={cmLogoSvg}
                alt="Credit Markets"
                className={`h-full w-full object-contain transition-all duration-150 ${useDarkLogo ? "brightness-0" : "brightness-0 invert"}`}
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-12">
            <a
              href={isMainPage ? "#principles" : "/#principles"}
              className={`${useDarkLogo ? 'text-deep-black' : 'text-clean-white'} hover:text-strategic-blue transition-colors duration-300 font-mono text-sm tracking-wider uppercase`}
            >
              PRINCIPLES
            </a>
            <a
              href={isMainPage ? "#solution" : "/#solution"}
              className={`${useDarkLogo ? 'text-deep-black' : 'text-clean-white'} hover:text-strategic-blue transition-colors duration-300 font-mono text-sm tracking-wider uppercase`}
            >
              SOLUTION
            </a>
            <a
              href={isMainPage ? "#research" : "/#research"}
              className={`${useDarkLogo ? 'text-deep-black' : 'text-clean-white'} hover:text-strategic-blue transition-colors duration-300 font-mono text-sm tracking-wider uppercase`}
            >
              RESEARCH
            </a>
            <a
              href={isMainPage ? "#access" : "/#access"}
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