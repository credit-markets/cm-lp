import { memo, useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { cm } from "@/lib/cm";
import { useLang } from "@/i18n/useLang";

// Financing gaps in $T. Squares are drawn area-true (side = sqrt(value)).
const GAP_VALUES = [5.7, 1.0, 0.68];

const Word = memo(function Word({
  word,
  range,
  progress,
}: {
  word: string;
  range: [number, number];
  progress: MotionValue<number>;
}) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return <motion.span style={{ opacity }}>{word} </motion.span>;
});

const GapChart = memo(function GapChart() {
  const { t } = useLang();
  const gaps = t.thesis.gaps;
  const side = (v: number) => `${(Math.sqrt(v) / Math.sqrt(GAP_VALUES[0])) * 100}%`;
  return (
    <figure className="w-full max-w-[280px] sm:max-w-[340px] xl:ml-auto">
      <div className="relative aspect-square border border-cm-border-strong bg-cm-surface">
        <span className="absolute top-4 left-4 right-4">
          <span className="cm-num block text-2xl font-medium">{gaps[0].label}</span>
          <span className="block mt-1 text-sm text-cm-text-2">{gaps[0].caption}</span>
        </span>
        <div
          className="absolute left-0 bottom-0 bg-cm-accent/10 border-t border-r border-cm-accent/30"
          style={{ width: side(GAP_VALUES[1]), height: side(GAP_VALUES[1]) }}
          aria-label={`${gaps[1].caption}: ${gaps[1].label}`}
        >
          <span className="absolute top-2 left-2.5 cm-num text-sm text-cm-accent">{gaps[1].label}</span>
        </div>
        <div
          className="absolute left-0 bottom-0 bg-cm-accent"
          style={{ width: side(GAP_VALUES[2]), height: side(GAP_VALUES[2]) }}
          aria-label={`${gaps[2].caption}: ${gaps[2].label}`}
        >
          <span className="absolute bottom-2.5 left-2.5 cm-num text-sm text-white whitespace-nowrap">{gaps[2].label}</span>
        </div>
      </div>
      <figcaption className="mt-3 flex justify-between gap-4 text-xs text-cm-text-2">
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
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 50%"] });
  const counts = STATEMENT.map((l) => l.text.split(" ").length);
  const offsets = counts.map((_, i) => counts.slice(0, i).reduce((a, b) => a + b, 0));
  const total = counts.reduce((a, b) => a + b, 0);

  return (
    <section id="thesis" className="relative py-24 md:py-32 bg-cm-bg">
      <div className={`${cm.container} grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-12 xl:gap-16 items-center`}>
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
          </div>
        ))}
      </div>
    </section>
  );
});

export default ThesisSection;
