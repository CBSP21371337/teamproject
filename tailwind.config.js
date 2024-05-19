import daisyui from 'daisyui';
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    boxShadow: {
      'custom': '0 0 25px rgba(14,165,233, 0.2)',
    },
  },
  plugins: [daisyui]
};