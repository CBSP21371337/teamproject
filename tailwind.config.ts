import { url } from "inspector";
import { Content } from "next/font/google";
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
    fontSize: {
      sm: '1.2em',
      base: '1.44em',
      xl: '1.728em',
      '2xl': '2.074em',
      '3xl': '2.488em',
      '4xl': '2.986em',
      '5xl': '3.583em',
    },
  },
  daisyui: {
    themes: [
      {
        dark:{
          "primary": "#C33732",
          "secondary": "#19B6E1",
          "accent": "#2027D9",
          "neutral": "#0F1013",
          "base-100": "#131418",
          "info": "#009eff",
          "success": "#00af4e",
          "warning": "#ffc400",
          "error": "#ff5f84",

          "color": "#fff",

          '.kalaowimglogo': {
            'content': 'url(/sus.png)',
          },
        },
        light:{
          "primary": "#C33732",
          "secondary": "#19B6E1",
          "accent": "#2027D9",
          "neutral": "#fff",
          "base-100": "#f5f5f5",
          "info": "#009eff",
          "success": "#00af4e",
          "warning": "#ffc400",
          "error": "#ff5f84",

          "color": "#050315",

          '.navbar':{
            'color': '#050315',
          },
          '.kalaowimglogo': {
            'content': 'url(/logoblack.png)',
          },
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
