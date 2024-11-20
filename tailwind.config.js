/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,vue}'],
  theme: {
    extend: {},
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('daisyui'),
  ],
}
