import { memo } from "react";
import { ArrowUpRight } from "lucide-react";
import IsoField from "./IsoField";
import { APP_URL } from "@/lib/constants";
import { cm } from "@/lib/cm";
import { useLang } from "@/i18n/useLang";

const HeroSection = memo(function HeroSection() {
  const { t } = useLang();
  return (
    <section id="hero" className="cm-navy relative bg-cm-navy text-cm-navy-text overflow-hidden">
      <IsoField className="absolute right-[-14%] top-[4%] h-[86%] w-[78%] lg:w-[64%] opacity-40 lg:opacity-100 iso-mask pointer-events-none" />

      <div className={`relative ${cm.container} min-h-[100dvh] flex flex-col`}>
        <div className="flex-1 flex items-center pt-24 pb-12">
          <div className="max-w-[740px]">
            <h1 className="text-[2.75rem] sm:text-6xl lg:text-[4.25rem] font-bold leading-[1] tracking-[-0.045em] text-white">
              {t.hero.title}
            </h1>
            <p className="mt-7 text-lg md:text-xl text-cm-navy-text-2 leading-relaxed max-w-[30rem]">
              {t.hero.sub}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a href="#register" className={cm.btnPrimaryNavy}>
                {t.hero.cta}
              </a>
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 py-3 text-[15px] font-medium text-white/90 hover:text-white underline-offset-[6px] decoration-white/30 hover:underline"
              >
                {t.hero.app}
                <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <dl className="grid grid-cols-3 border-t border-white/10">
          {t.hero.stats.map((s, i) => (
            <div key={s.label} className={`py-6 md:py-8 ${i > 0 ? "pl-4 md:pl-8" : ""}`}>
              <dd className="cm-num text-xl sm:text-2xl md:text-[2rem] font-medium text-white leading-none">{s.value}</dd>
              <dt className="mt-2 text-sm text-cm-navy-text-2">{s.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
});

export default HeroSection;
