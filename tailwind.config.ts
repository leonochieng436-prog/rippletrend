import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: { 950: "#101414", 900: "#171D1C", 800: "#222B28" },
        volt: "#16C784",
        cyan: { ripple: "#9AEAC4" },
        mist: "#141A18",
      },
      fontFamily: { sans: ["var(--font-jakarta)", "system-ui", "sans-serif"] },
      keyframes: {
        ripple: {
          "0%": { transform: "scale(0.2)", opacity: "0.9" },
          "100%": { transform: "scale(1)", opacity: "0" },
        },
      },
      animation: { ripple: "ripple 7s cubic-bezier(.2,.6,.3,1) infinite" },
    },
  },
  plugins: [],
};
export default config;
