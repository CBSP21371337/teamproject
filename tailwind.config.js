/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        dark: {
          "primary": "#b91c1c",
          "secondary": "#19B6E1",
          "accent": "#2027D9",
          "neutral": "#0F1013",
          "base-100": "#fbfbfe",
          "info": "#009eff",
          "success": "#00af4e",
          "warning": "#ffc400",
          "error": "#ff5f84",
          "background-color": "#000",
        },
        light: {
          "primary": "#b91c1c",
          "secondary": "#19B6E1",
          "accent": "#2027D9",
          "neutral": "#0F1013",
          "base-100": "#fbfbfe",
          "info": "#009eff",
          "success": "#00af4e",
          "warning": "#ffc400",
          "error": "#ff5f84",
          "background-color": "#fff",
        },
      },
    ],
  },
}