import { url } from "inspector";
import { Content } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        'buttonGray':'#202124',
        'thInside': 'rgba(0,0,0,33%)',
      },
      keyframes:{
        btnHover:{
          '0%': {background: 'none'},
          '50%, 100%': {'font-size': '1.1', color: '#000'},
          '100%': {background: "#19B6E1", 'font-weight': 'bold', scale:'1.05'},
        },
        btnHoverR:{
          '100%': {background: 'none'},
          '0%, 50%': {'font-size': '1.1', color: '#000'},
          '0%': {background: "#19B6E1", 'font-weight': 'bold', scale:'1.05'},
        },
        themeCtr:{
          '100%': {background: 'none'},
          '0%, 50%': {'font-size': '1.1', color: '#000'},
          '0%': {background: "#19B6E1", 'font-weight': 'bold', scale:'1.05'},
        }
      },
      animation:{
        btnHover: 'btnHover 0.35s ease-out forwards',
        btnHoverR: 'btnHoverR 0.55s ease-out backwards',
        themeCtr: 'themeCtr 0.55s ease-out backwards',
      }
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
          "base-200": "#202124",
          "info": "#009eff",
          "success": "#00af4e",
          "warning": "#ffc400",
          "error": "#ff5f84",

          "color": "#fff",

          '.kalaowimglogo': {
            'content': 'url(/sus.png)',
          },
          '.burger-dp-menu':{
            'content': 'url(/burger-menu.svg)',
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
          '.burger-dp-menu':{
            'content': 'url(/burger-menuL.svg)',
          },
        },
      },
    ],
    base: true, // applies background color and foreground color for root element by default
    styled: false, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: "", // The element that receives theme color CSS variables
  },
  plugins: [require("daisyui")],
};
export default config;
