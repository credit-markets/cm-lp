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

        {/* One panel cut by the slash from the CM mark: the originator's side in the light
            register, the protocol's side in navy, the same tone as the rails in ProtocolSection. */}
        <div className="mt-14 relative grid grid-cols-1 md:grid-cols-2 rounded-xl overflow-hidden bg-cm-surface shadow-card">
          <div className="relative p-7 pb-14 sm:p-10 sm:pb-16 md:p-12 lg:p-14 md:pr-16">
            <p className="text-sm text-cm-text-2">{o.bringLabel}</p>
            <ul className="mt-4 divide-y divide-cm-border">
              {o.bring.map((s) => (
                <li key={s} className="py-4 text-xl md:text-2xl font-display font-semibold tracking-[-0.02em] leading-snug">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative p-7 sm:p-10 md:p-12 lg:p-14 md:pl-20 lg:pl-24 text-cm-navy-text">
            <div
              aria-hidden="true"
              className="absolute inset-0 -top-7 md:top-0 md:-left-14 bg-cm-navy [clip-path:polygon(0_28px,100%_0,100%_100%,0_100%)] md:[clip-path:polygon(84px_0,100%_0,100%_100%,0_100%)]"
            />
            <div className="relative">
              <p className="text-sm text-cm-sky">{o.providesLabel}</p>
              <ul className="mt-4 divide-y divide-white/10">
                {o.provides.map((s) => (
                  <li key={s} className="py-4 text-xl md:text-2xl font-display font-semibold tracking-[-0.02em] leading-snug text-white">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-cm-border flex flex-col lg:flex-row lg:items-center justify-between gap-8">
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
