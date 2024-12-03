import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
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
      fontFamily: {
        sans: ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "sans-serif"],
      },
      colors: {
        accent: "#007AFF", // iOS blue
        border: "rgba(0, 0, 0, 0.1)",
        input: "rgba(0, 0, 0, 0.05)",
        ring: "#007AFF",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#007AFF",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#FF3B30", // iOS red
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "rgba(0, 0, 0, 0.05)",
          foreground: "rgba(0, 0, 0, 0.6)",
        },
      },
      borderRadius: {
        'ios': '10px',
      },
      backdropBlur: {
        'ios': '20px',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;