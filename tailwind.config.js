/** @type {import('tailwindcss').Config} */
import './node_modules/daisyui'
import daisyui from './node_modules/daisyui'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#ff007a",

          "secondary": "#554e00",

          "accent": "#00a8ff",

          "neutral": "#170d02",

          "base-100": "#fffdff",

          "info": "#0095c7",

          "success": "#a2d600",

          "warning": "#ffad00",

          "error": "#ff7882",
        },
      },
    ],
  },
  plugins: [daisyui],
}

