// Class strings for Credit Markets design system v3 primitives
// (../brand-guide/system/components). 6px radius, expo-out 200ms, press scale 0.99.

const btnBase =
  "inline-flex items-center justify-center gap-2 h-12 px-6 rounded-lg font-sans text-[15px] font-medium whitespace-nowrap transition-all duration-200 ease-cm active:scale-[0.99] disabled:opacity-60 disabled:pointer-events-none";

export const cm = {
  // Light register
  btnPrimary: `${btnBase} bg-cm-accent text-white shadow-[0_0_0_1px_rgba(30,58,138,0.6),0_4px_12px_rgba(30,58,138,0.25)] hover:bg-cm-accent-hover`,
  btnSecondary: `${btnBase} bg-cm-surface text-cm-text border border-cm-border-strong hover:border-cm-accent hover:text-cm-accent`,
  // Navy register
  btnPrimaryNavy: `${btnBase} bg-cm-sky text-cm-navy hover:bg-cm-sky-hover`,
  btnSecondaryNavy: `${btnBase} text-cm-navy-text border border-white/20 hover:border-white/40 hover:bg-white/5`,

  card: "bg-cm-surface rounded-lg shadow-card transition-shadow duration-200 ease-cm hover:shadow-card-hover",
  iconBox: "w-10 h-10 rounded-lg flex items-center justify-center bg-cm-accent/[0.06] border border-cm-accent/15 text-cm-accent",

  sectionPad: "py-20 md:py-28",
  container: "max-w-7xl mx-auto px-4 sm:px-6",
};
