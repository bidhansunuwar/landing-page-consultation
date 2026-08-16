import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      boxShadow: {
        glow: "0 20px 70px -24px rgba(37, 99, 235, 0.42)",
        card: "0 18px 48px -28px rgba(15, 23, 42, 0.28)",
      },
      colors: {
        ink: "#10213E",
        muted: "#52627A",
        primary: "#2563EB",
        "primary-dark": "#1D4ED8",
        mist: "#EFF6FF",
        cloud: "#F8FAFC",
      },
    },
  },
  plugins: [],
};

export default config;
