/** @type {import('tailwindcss').Config} */
import './node_modules/daisyui'
import daisyui from './node_modules/daisyui'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins:[daisyui],
}

