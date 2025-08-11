const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0a0a0a',
        'deep-red': '#8B0000',
        'blood-red': '#CC0000',
        'gold': '#FFD700',
        'silver': '#C0C0C0',
      },
      fontFamily: {
        'japanese': ['Noto Sans JP', 'sans-serif'],
        'samurai': ['Cinzel', 'serif'],
      }
    },
  },
  plugins: [],
};
