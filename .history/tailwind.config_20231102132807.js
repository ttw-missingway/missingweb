/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      'display': ['Reem Kufi Variable', 'sans-serif'],
      'sans': ['Quicksand Variable', 'sans-serif'],
      'serif': ['Hina Mincho', 'serif']
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1496px',
      },
    },
    extend: {},
  },
  plugins: [],
}

