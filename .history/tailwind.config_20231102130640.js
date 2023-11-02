import '@fontsource-variable/reem-kufi';
import '@fontsource-variable/quicksand';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      'display': ['Reem Kufi Variable', ]
      'body': 'Quicksand Variable', 'sans-serif'
    },
    extend: {},
  },
  plugins: [],
}

