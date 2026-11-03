import { memo } from "react";
import { ArrowUpRight } from "lucide-react";
import { cm } from "@/lib/cm";
import { useLang } from "@/i18n/useLang";
import { DASHBOARD_URL, PARAGRAPH_URL } from "@/lib/constants";

// Market data: one entry point to the FIDC dashboard on score.credit.markets
// (monthly indicators, the market report and one page per fund). Research notes
// stay one link away on Paragraph.
const BlogInsightsSection = memo(() => {
  const { t } = useLang();
  const r = t.research;

  return (
    <section id="research" className={`relative ${cm.sectionPad} bg-cm-bg`}>
      <div className={cm.container}>
        <div className={`${cm.card} grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 p-7 sm:p-10 lg:p-12`}>
          <div className="flex flex-col">
            <p className="text-sm font-medium text-cm-accent">{r.eyebrow}</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-[-0.035em] leading-[1.08]">{r.title}</h2>
            <p className="mt-5 text-lg text-cm-text-2 leading-relaxed max-w-xl">{r.body}</p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <a href={DASHBOARD_URL} target="_blank" rel="noopener noreferrer" className={cm.btnPrimary}>
                {r.cta}
                <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" />
              </a>
              <a
                href={PARAGRAPH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 py-2 text-sm font-medium text-cm-text-2 hover:text-cm-accent transition-colors"
              >
                {r.notes}
                <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} aria-hidden="true" />
              </a>
            </div>
          </div>

          <ul className="divide-y divide-cm-border border-y border-cm-border self-center">
            {r.points.map((p) => (
              <li key={p.title} className="py-5">
                <p className="font-display font-semibold text-lg tracking-[-0.015em]">{p.title}</p>
                <p className="mt-1 text-[15px] text-cm-text-2 leading-relaxed">{p.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
});

BlogInsightsSection.displayName = "BlogInsightsSection";

export default BlogInsightsSection;
