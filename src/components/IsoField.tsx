import { memo, useEffect, useRef } from "react";

// Hand-drawn isometric block field for the hero. Canvas 2D, no dependencies:
// ~200 prisms per frame, painted back to front. A ridge sweeps along the grid
// diagonal (the slash in the CM mark) and lights the blocks it passes in sky.
// Stops when off-screen or the tab is hidden; one static frame under reduced motion.

interface IsoFieldProps {
  className?: string;
  cols?: number;
  rows?: number;
}

// Navy register palette (brand-guide tokens)
const SKY = [91, 174, 214];
const SLATE_TOP = [52, 71, 122];
const SLATE_LEFT = [22, 37, 84];
const SLATE_RIGHT = [33, 52, 104];

function hash(i: number, j: number) {
  const s = Math.sin(i * 127.1 + j * 311.7) * 43758.5453;
  return s - Math.floor(s);
}

function mix(a: number[], b: number[], t: number, alpha = 1) {
  return `rgba(${Math.round(a[0] + (b[0] - a[0]) * t)},${Math.round(a[1] + (b[1] - a[1]) * t)},${Math.round(
    a[2] + (b[2] - a[2]) * t,
  )},${alpha})`;
}

const IsoField = memo(function IsoField({ className, cols = 13, rows = 13 }: IsoFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const base = Array.from({ length: cols * rows }, (_, k) => {
      const i = k % cols;
      const j = Math.floor(k / cols);
      const n = hash(i, j);
      // Taller blocks toward the back, a few tall outliers
      return 0.15 + n * n * 0.9 + (n > 0.92 ? 0.6 : 0);
    });

    let width = 0;
    let height = 0;
    let tile = 0;
    let originX = 0;
    let originY = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      // Fit the diamond footprint into the canvas width
      tile = Math.min((width * 0.98) / ((cols + rows) / 2), (height * 1.5) / ((cols + rows) / 2));
      originX = width / 2 + ((rows - cols) * tile) / 4;
      originY = height * 0.5 - ((cols + rows) * tile) / 8 + tile * 0.6;
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, width, height);
      const tw = tile;
      const th = tile / 2;
      const gap = 0.84; // blocks read as separate pieces
      const maxH = tile * 1.6;

      for (let sum = 0; sum <= cols + rows - 2; sum++) {
        for (let i = Math.max(0, sum - (rows - 1)); i <= Math.min(cols - 1, sum); i++) {
          const j = sum - i;
          const b = base[j * cols + i];
          // Ridge travelling from front to back along i + j
          const phase = sum * 0.42 - t * 0.0011;
          const wave = Math.pow(Math.max(0, Math.sin(phase)), 10);
          const lit = wave * (0.55 + hash(j, i) * 0.45);
          const h = maxH * (b * 0.55 + lit * 0.5);

          const cx = originX + ((i - j) * tw) / 2;
          const cy = originY + ((i + j) * th) / 2;
          const hw = (tw / 2) * gap;
          const hh = (th / 2) * gap;

          // Fade blocks near the outer edge of the footprint
          const edge = Math.min(i, j, cols - 1 - i, rows - 1 - j);
          const alpha = Math.min(1, 0.25 + edge * 0.28);

          // Left face
          ctx.beginPath();
          ctx.moveTo(cx - hw, cy);
          ctx.lineTo(cx, cy + hh);
          ctx.lineTo(cx, cy + hh - h);
          ctx.lineTo(cx - hw, cy - h);
          ctx.closePath();
          ctx.fillStyle = mix(SLATE_LEFT, [30, 90, 140], lit, alpha);
          ctx.fill();

          // Right face
          ctx.beginPath();
          ctx.moveTo(cx, cy + hh);
          ctx.lineTo(cx + hw, cy);
          ctx.lineTo(cx + hw, cy - h);
          ctx.lineTo(cx, cy + hh - h);
          ctx.closePath();
          ctx.fillStyle = mix(SLATE_RIGHT, [48, 120, 168], lit, alpha);
          ctx.fill();

          // Top face
          ctx.beginPath();
          ctx.moveTo(cx, cy - hh - h);
          ctx.lineTo(cx + hw, cy - h);
          ctx.lineTo(cx, cy + hh - h);
          ctx.lineTo(cx - hw, cy - h);
          ctx.closePath();
          ctx.fillStyle = mix(SLATE_TOP, SKY, Math.min(1, lit * 1.4), alpha);
          ctx.fill();
        }
      }
    };

    let raf = 0;
    let running = false;
    let visible = true;

    const loop = (now: number) => {
      draw(now);
      raf = requestAnimationFrame(loop);
    };
    const start = () => {
      if (running || reduce || !visible || document.hidden) return;
      running = true;
      raf = requestAnimationFrame(loop);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    resize();
    draw(reduce ? 2400 : performance.now());

    const ro = new ResizeObserver(() => {
      resize();
      if (!running) draw(reduce ? 2400 : performance.now());
    });
    ro.observe(canvas);

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
      else stop();
    });
    io.observe(canvas);

    const onVisibility = () => (document.hidden ? stop() : start());
    document.addEventListener("visibilitychange", onVisibility);

    start();

    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [cols, rows]);

  return <canvas ref={canvasRef} aria-hidden="true" className={className} />;
});

export default IsoField;
