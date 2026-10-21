import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Credit Markets design system v3 (../brand-guide/system/tokens/colors.css)
        cm: {
          bg: "#FAFBFF",
          surface: "#FFFFFF",
          raised: "#F4F7FF",
          text: "#01184E",
          "text-2": "#475569",
          muted: "#94A3B8",
          border: "#E2E8F0",
          "border-strong": "#CBD5E1",
          accent: "#1E3A8A",
          "accent-hover": "#2547A8",
          navy: "#01184E",
          "navy-card": "#162035",
          "navy-raised": "#1E2D50",
          "navy-text": "#F0F4FF",
          "navy-text-2": "#8A9BB8",
          sky: "#5BAED6",
          "sky-hover": "#7FC4E4",
          amber: "#D4A847",
          teal: "#2DD4BF",
          "teal-700": "#008070",
          stress: "#EF4444",
        },

        // Standard Semantic Tokens
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        display: ['Archivo', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(1,24,78,0.04), 0 0 0 1px rgba(1,24,78,0.06)',
        'card-hover': '0 8px 28px rgba(1,24,78,0.10), 0 0 0 1px rgba(1,24,78,0.08)',
        'navy-card': '0 1px 2px rgba(0,0,0,0.30), 0 0 0 1px rgba(255,255,255,0.05)',
      },
      transitionTimingFunction: {
        cm: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" }
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" }
        },
        "cursor-blink": {
          "0%, 50%": { opacity: "1" },
          "51%, 100%": { opacity: "0" }
        },
        "scanlines": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(3px)" }
        },
        "data-flow": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" }
        },
        "terminal-type": {
          "0%": { width: "0" },
          "100%": { width: "100%" }
        },
        "orbit": {
          "0%": { transform: "rotate(0deg) translateX(160px) rotate(0deg)" },
          "100%": { transform: "rotate(360deg) translateX(160px) rotate(-360deg)" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "cursor-blink": "cursor-blink 1s infinite",
        "scanlines": "scanlines 2s linear infinite",
        "data-flow": "data-flow 3s ease-in-out infinite",
        "terminal-type": "terminal-type 2s steps(20) infinite",
        "orbit": "orbit 3s linear infinite",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
