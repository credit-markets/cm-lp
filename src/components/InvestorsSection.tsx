import { memo } from "react";
import { cm } from "@/lib/cm";
import { useLang } from "@/i18n/useLang";


const InvestorsSection = memo(function InvestorsSection() {
  const { t } = useLang();
  return (
    <section id="investors" className="relative py-24 md:py-32 bg-cm-bg">
      <div className={cm.container}>
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-cm-accent">{t.investors.eyebrow}</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-[-0.035em] leading-[1.06]">
            {t.investors.title}
          </h2>
          <p className="mt-5 text-lg text-cm-text-2 leading-relaxed">
            {t.investors.lead}
          </p>
        </div>

        <ul className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-10 border-t border-cm-text pt-10">
          {t.investors.points.map((p) => (
            <li key={p.title}>
              <p className="text-2xl font-display font-semibold tracking-[-0.02em]">{p.title}</p>
              <p className="mt-2 text-[15px] text-cm-text-2 leading-relaxed max-w-xs">{p.body}</p>
            </li>
          ))}
        </ul>

        <a href="#register-investor" className={`${cm.btnPrimary} mt-12`}>
          {t.investors.cta}
        </a>
      </div>
    </section>
  );
});

export default InvestorsSection;
