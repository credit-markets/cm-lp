import { memo, useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { cm } from "@/lib/cm";
import { useLang } from "@/i18n/useLang";

// Financing gaps in $T: global, Latin America, Brazil (SME Finance Forum).
const GAP_VALUES = [5.7, 1.0, 0.68];
const EASE = [0.16, 1, 0.3, 1] as const;

const Word = memo(function Word({
  word,
  range,
  progress,
}: {
  word: string;
  range: [number, number];
  progress: MotionValue<number>;
}) {
  const opacity = useTransform(progress, range, [0.4, 1]);
  return <motion.span style={{ opacity }}>{word} </motion.span>;
});

// Three bars on one scale: global, Latin America, Brazil. Brazil is the one in accent.
const GapChart = memo(function GapChart() {
  const { t } = useLang();
  const reduce = useReducedMotion();
  const rows = t.thesis.gaps.map((g, i) => ({ ...g, share: (GAP_VALUES[i] / GAP_VALUES[0]) * 100, focus: i === 2 }));

  return (
    <figure className="w-full max-w-[520px] xl:max-w-none">
      <ul role="img" aria-label={t.thesis.chartAria} className="space-y-5">
        {rows.map((r, i) => (
          <li key={r.caption} aria-hidden="true">
            <div className="flex items-baseline justify-between gap-4">
              <span className={`text-sm ${r.focus ? "font-semibold text-cm-text" : "text-cm-text-2"}`}>{r.caption}</span>
              <span className={`cm-num shrink-0 whitespace-nowrap ${r.focus ? "text-2xl text-cm-accent" : "text-lg text-cm-text"}`}>{r.label}</span>
            </div>
            <div className="mt-2 h-3 rounded-full bg-cm-accent/[0.06]">
              <motion.div
                className={`h-full rounded-full origin-left ${r.focus ? "bg-cm-accent" : i === 0 ? "bg-cm-muted/60" : "bg-cm-accent/35"}`}
                style={{ width: `${r.share}%` }}
                initial={reduce ? false : { scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 1.6, delay: reduce ? 0 : 0.2 + i * 0.35, ease: EASE }}
              />
            </div>
          </li>
        ))}
      </ul>

      <figcaption className="mt-6 pt-4 border-t border-cm-border flex justify-between gap-4 text-xs text-cm-text-2">
        <span>{t.thesis.chartCaption}</span>
        <span className="shrink-0">SME Finance Forum</span>
      </figcaption>
    </figure>
  );
});

const ThesisSection = memo(function ThesisSection() {
  const ref = useRef<HTMLHeadingElement>(null);
  const reduce = useReducedMotion();
  const { t } = useLang();
  const STATEMENT = t.thesis.statement.map((text, i) => ({ text, strong: i === 0 }));
  const BARRIERS = t.thesis.barriers;
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 90%", "end 65%"] });
  const counts = STATEMENT.map((l) => l.text.split(" ").length);
  const offsets = counts.map((_, i) => counts.slice(0, i).reduce((a, b) => a + b, 0));
  const total = counts.reduce((a, b) => a + b, 0);

  return (
    <section id="thesis" className="relative py-24 md:py-32 bg-cm-bg">
      <div className={`${cm.container} grid grid-cols-1 xl:grid-cols-[3fr_2fr] gap-14 xl:gap-20 items-center`}>
        <h2 ref={ref} className="text-[2rem] sm:text-4xl md:text-[3.25rem] font-bold tracking-[-0.035em] leading-[1.08]">
          {STATEMENT.map((line, li) => (
            <span
              key={line.text}
              className={`block ${line.strong ? "" : "mt-4 text-2xl sm:text-3xl md:text-[2.4rem] leading-[1.15] text-cm-text-2"}`}
            >
              {reduce
                ? line.text
                : line.text.split(" ").map((word, wi) => {
                    const index = offsets[li] + wi;
                    return (
                      <Word key={`${li}-${wi}`} word={word} range={[index / total, (index + 1) / total]} progress={scrollYProgress} />
                    );
                  })}
            </span>
          ))}
        </h2>
        <GapChart />
      </div>

      <div className={`${cm.container} mt-20 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 border-t border-cm-text pt-10`}>
        {BARRIERS.map((b) => (
          <div key={b.title}>
            <p className="font-semibold">{b.title}</p>
            <p className="mt-2 text-[15px] text-cm-text-2 leading-relaxed max-w-md">{b.body}</p>
            <p className="mt-6 flex items-baseline gap-4">
              <span className="cm-num text-4xl font-medium text-cm-accent shrink-0">{b.figure}</span>
              <span className="text-sm text-cm-text-2 max-w-[16rem]">{b.figureLabel}</span>
            </p>
            {/* The barrier's answer, so problem and solution read together */}
            <p className="mt-6 pl-3 border-l-2 border-cm-accent text-[15px] text-cm-text leading-relaxed max-w-md">
              <span className="font-semibold text-cm-accent">{t.thesis.answerLead}</span> {b.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
});

export default ThesisSection;
