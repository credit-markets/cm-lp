import { memo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cm } from "@/lib/cm";
import { useLang } from "@/i18n/useLang";

type Tone = "plain" | "rails";

interface Layer {
  role: string;
  who: string;
  body: string;
  tone: Tone;
}

// Bottom to top, as on the deck's architecture slide: curators, rails, allocators
const TONES: Tone[] = ["plain", "rails", "plain"];

// Isometric slab geometry (viewBox units)
const CX = 210;
const W = 330;
const H = W / 2;
const T = 26;
const GAP = 58;
const BASE_Y = 300;

const FILL = {
  plain: { top: "#FFFFFF", left: "#E6ECF8", right: "#D5DFF2", stroke: "#CBD5E1" },
  plainActive: { top: "#DCE5FA", left: "#C3D1F1", right: "#B2C3EC", stroke: "#1E3A8A" },
  rails: { top: "#01184E", left: "#011038", right: "#011443", stroke: "#01184E" },
  railsActive: { top: "#1E3A8A", left: "#14296A", right: "#19317C", stroke: "#5BAED6" },
};

const Slab = memo(function Slab({
  index,
  layer,
  active,
  reduce,
}: {
  index: number;
  layer: Layer;
  active: boolean;
  reduce: boolean | null;
}) {
  const ty = BASE_Y - index * (T + GAP);
  const key = `${layer.tone}${active ? "Active" : ""}` as keyof typeof FILL;
  const c = FILL[key];
  const l = CX - W / 2;
  const r = CX + W / 2;
  const transition = { duration: 0.2, ease: [0.16, 1, 0.3, 1] as const };

  return (
    <motion.g
      initial={reduce ? false : { opacity: 0, y: -28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, delay: index * 0.14, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.polygon
        points={`${l},${ty} ${CX},${ty + H / 2} ${CX},${ty + H / 2 + T} ${l},${ty + T}`}
        animate={{ fill: c.left }}
        transition={transition}
      />
      <motion.polygon
        points={`${CX},${ty + H / 2} ${r},${ty} ${r},${ty + T} ${CX},${ty + H / 2 + T}`}
        animate={{ fill: c.right }}
        transition={transition}
      />
      <motion.polygon
        points={`${CX},${ty - H / 2} ${r},${ty} ${CX},${ty + H / 2} ${l},${ty}`}
        animate={{ fill: c.top, stroke: c.stroke }}
        strokeWidth={1}
        transition={transition}
      />
      <text x={r + 14} y={ty + T / 2 + 4} fontSize={13} fontWeight={600} fill={layer.tone === "rails" ? "#01184E" : "#475569"}>
        {layer.role}
      </text>
    </motion.g>
  );
});

const ProtocolSection = memo(function ProtocolSection() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState<number | null>(null);
  const { t } = useLang();
  const LAYERS: Layer[] = t.protocol.layers.map((l, i) => ({ ...l, tone: TONES[i] }));

  return (
    <section id="protocol" className="relative py-24 md:py-32 bg-cm-raised border-y border-cm-border">
      <div className={`${cm.container} grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center`}>
        <div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.035em] leading-[1.06]">
            {t.protocol.title}
          </h2>
          <p className="mt-5 text-lg text-cm-text-2 leading-relaxed max-w-lg">
            {t.protocol.lead}
          </p>

          <ol className="mt-10 flex flex-col-reverse">
            {LAYERS.map((layer, i) => (
              <li key={layer.role}>
                <button
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onMouseLeave={() => setActive(null)}
                  onFocus={() => setActive(i)}
                  onBlur={() => setActive(null)}
                  className="w-full text-left py-5 border-t border-cm-border"
                >
                  <span className="flex items-baseline justify-between gap-4">
                    <span className={`font-semibold ${active === i ? "text-cm-accent" : ""} transition-colors duration-200`}>
                      {layer.role}
                    </span>
                    <span className="text-xs text-cm-text-2">{layer.who}</span>
                  </span>
                  <span className="block mt-1.5 text-[15px] text-cm-text-2 leading-relaxed">{layer.body}</span>
                </button>
              </li>
            ))}
          </ol>
        </div>

        <svg
          viewBox="0 0 510 420"
          role="img"
          aria-label={t.protocol.aria}
          className="w-full max-w-[340px] lg:max-w-[540px] mx-auto order-first lg:order-none"
        >
          {LAYERS.map((layer, i) => (
            <Slab key={layer.role} index={i} layer={layer} active={active === i} reduce={reduce} />
          ))}
        </svg>
      </div>
    </section>
  );
});

export default ProtocolSection;
