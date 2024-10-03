import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      main: {
        "dark-green": "#060E0B",
        "light-green": "#1E4135",
        "gold": "#E2C28D",
        "red": "#BF1A2F",
        "champagne": "#F3E5CE",
      },
      chart: {
        red: "#d00000",
        green: "#70e000",
        blue: "#1a759f",
        yellow: "#eeef20",
        default: "#7a918d",
      },
    },
  },
  plugins: [],
};
export default config;
