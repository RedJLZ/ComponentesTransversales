/** @type {import('tailwindcss').Config} */
import {heroui} from '@heroui/react';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

    // añade aquí tu librería real:
    "./node_modules/@ppm/frontend-toolkit-ui/**/*.{js,ts,jsx,tsx}",

    // y el propio HeroUI:
    "./node_modules/@heroui/react/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    heroui({
      themes: {
        light: {},
        dark: {},
      }
    })
  ],
};