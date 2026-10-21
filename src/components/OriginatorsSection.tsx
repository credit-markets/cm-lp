import { memo } from "react";
import { cm } from "@/lib/cm";
import { useLang } from "@/i18n/useLang";

const OriginatorsSection = memo(function OriginatorsSection() {
  const { t } = useLang();
  const o = t.originators;
  return (
    <section id="originators" className="relative py-24 md:py-32 bg-cm-raised border-y border-cm-border">
      <div className={cm.container}>
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-cm-accent">{o.eyebrow}</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-[-0.035em] leading-[1.06]">
            {o.title}
          </h2>
          <p className="mt-5 text-lg text-cm-text-2 leading-relaxed">
            {o.lead}
          </p>
        </div>

        {/* The slash from the CM mark divides what the curator brings from what the rails provide */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-0 items-stretch">
          <div className="md:pr-12">
            <p className="text-sm text-cm-text-2">{o.bringLabel}</p>
            <ul className="mt-5 space-y-3">
              {o.bring.map((s) => (
                <li key={s} className="text-2xl md:text-[1.75rem] font-display font-semibold tracking-[-0.02em] leading-snug">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div aria-hidden="true" className="hidden md:block relative w-24">
            <div className="absolute inset-y-0 left-1/2 w-px bg-cm-accent origin-center rotate-[14deg]" />
          </div>

          <div className="md:pl-12">
            <p className="text-sm text-cm-text-2">{o.providesLabel}</p>
            <ul className="mt-5 space-y-3">
              {o.provides.map((s) => (
                <li key={s} className="text-2xl md:text-[1.75rem] font-display font-semibold tracking-[-0.02em] leading-snug text-cm-accent">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-cm-border flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <p className="text-[15px] text-cm-text-2 max-w-2xl">{o.closing}</p>
          <a href="#register-originator" className={`${cm.btnPrimary} self-start lg:self-auto`}>
            {o.cta}
          </a>
        </div>
      </div>
    </section>
  );
});

export default OriginatorsSection;
