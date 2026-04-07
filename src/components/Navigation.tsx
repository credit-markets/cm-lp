import { Button } from "./ui/button";
import cmLogoSvg from "@/assets/cm-logo.svg";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";


const Navigation = () => {
  const logoWrapperRef = useRef<HTMLDivElement | null>(null);
  const [useDarkLogo, setUseDarkLogo] = useState(false);
  const location = useLocation();
  const isMainPage = location.pathname === '/';

  useEffect(() => {
    // Skip on mobile
    if (window.innerWidth < 768) {
      setUseDarkLogo(false);
      return;
    }

    // Map section backgrounds to logo color
    // Light backgrounds (clean-white) need dark logo
    // Dark backgrounds (deep-black, dimensional-gray, gradient-depth) need light logo
    const sectionBackgrounds: Record<string, boolean> = {
      'hero': false,           // bg-deep-black
      'principles': false,     // bg-deep-black
      'opportunity': false,    // bg-dimensional-gray (dark)
      'solution': false,       // bg-deep-black
      'value': false,          // bg-dimensional-gray (dark)
      'structure': false,      // bg-deep-black
      'team': true,            // bg-clean-white (light)
      'research': false,       // bg-deep-black
      'access': false,         // bg-gradient-depth
    };

    // Track which section is currently visible at logo position
    let currentSection: string | null = null;

    const updateLogoColor = (sectionId: string) => {
      if (currentSection === sectionId) return;
      currentSection = sectionId;
      const useDark = sectionBackgrounds[sectionId] ?? false;
      setUseDarkLogo(useDark);
    };

    // Create observer with optimized options
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the section with highest intersection at the top of viewport
        let topSection: { id: string; top: number; ratio: number } | null = null;

        entries.forEach((entry) => {
          const sectionId = entry.target.id;
          if (!sectionId) return;

          const rect = entry.target.getBoundingClientRect();
          const logoBottom = logoWrapperRef.current?.getBoundingClientRect().bottom ?? 80;

          // Check if section overlaps with logo area
          if (rect.top <= logoBottom && rect.bottom >= logoBottom) {
            if (!topSection || rect.top < topSection.top) {
              topSection = {
                id: sectionId,
                top: rect.top,
                ratio: entry.intersectionRatio,
              };
            }
          }
        });

        if (topSection) {
          updateLogoColor(topSection.id);
        }
      },
      {
        // Check when sections cross the top 120px (logo area)
        rootMargin: '-80px 0px -80% 0px',
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
      }
    );

    // Observe all main sections
    const observedSections = new Set<Element>();

    const observeSections = () => {
      const sections = document.querySelectorAll('section[id]');
      sections.forEach((section) => {
        if (!observedSections.has(section)) {
          observedSections.add(section);
          observer.observe(section);
        }
      });
    };

    observeSections();

    // Watch for lazy-loaded sections appearing in the DOM
    const mutationObserver = new MutationObserver(() => {
      observeSections();
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    // Initial check
    const initialSection = Array.from(document.querySelectorAll('section[id]')).find((section) => {
      const rect = section.getBoundingClientRect();
      const logoBottom = logoWrapperRef.current?.getBoundingClientRect().bottom ?? 80;
      return rect.top <= logoBottom && rect.bottom >= logoBottom;
    });

    if (initialSection?.id) {
      updateLogoColor(initialSection.id);
    }

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-transparent">
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