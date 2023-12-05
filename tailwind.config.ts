import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   formal: ["Noto Sans SC", "sans-serif"],
      //   chinese: ["Ma Shan Zheng", "cursive"],
      // },
    },
  },
  plugins: [],
};
export default config;
