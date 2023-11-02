import '@fontsource-variable/reem-kufi';
import '@fontsource-variable/quicksand';
import '@fontsource/hina-mincho';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      'display': ['Reem Kufi Variable', 'sans-serif'],
      'body': ['Quicksand Variable', 'sans-serif'],
      'serif': ['Hina Mincho', 'serif']
    },
    extend: {},
  },
  plugins: [],
}

