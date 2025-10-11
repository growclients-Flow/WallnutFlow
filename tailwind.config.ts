import type {Config} from "tailwindcss";

const config: Config ={
    content:[
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class", // important!
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef3ff",
          100: "#dbe6ff",
          200: "#b9cfff",
          300: "#8aafff",
          400: "#5b8cff",
          500: "#2f6bff",         // main blue (matches screenshot)
          600: "#2554cc",
          700: "#1e43a6",
          800: "#183581",
          900: "#11255b",
        },
        card: {
          DEFAULT: "#ffffff",
          dark: "#0f1521",
        },
        surface: {
          DEFAULT: "#f6f8fb",
          dark: "#0b101a",
        },
      },
      boxShadow: {
        kpi: "0 10px 30px -12px rgba(47,107,255,.35)",
        soft: "0 12px 24px rgba(16,24,40,.06)",
        softDark: "0 12px 24px rgba(0,0,0,.35)",
      },
      borderRadius: {
        xl2: "1.2rem",
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "Inter", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"],
      },
    },
  },
  plugins: [],
};
export default config;