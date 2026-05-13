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
        // Foundation System
        'deep-black': "hsl(var(--deep-black))",
        'dimensional-gray': "hsl(var(--dimensional-gray))",
        'clean-white': "hsl(var(--clean-white))",
        'depth-gray': "hsl(var(--depth-gray))",
        'strategic-blue': "hsl(var(--strategic-blue))",
        'navy-accent': "hsl(var(--navy-accent))",
        'terminal-green': "hsl(var(--terminal-green))",
        'terminal-amber': "hsl(var(--terminal-amber))",
        
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
      fontSize: {
        'hero': 'var(--font-size-hero)',
        'section': 'var(--font-size-section)',
        'data': 'var(--font-size-data)',
        'terminal': 'var(--font-size-terminal)',
      },
      fontFamily: {
        'mono': ['IBM Plex Mono', 'Courier New', 'monospace'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-depth': 'var(--gradient-depth)',
        'gradient-terminal': 'var(--gradient-terminal)',
        'gradient-data': 'var(--gradient-data)',
      },
      boxShadow: {
        'isometric': 'var(--shadow-isometric)',
        'lifted': 'var(--shadow-lifted)',
        'terminal': 'var(--shadow-terminal)',
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
