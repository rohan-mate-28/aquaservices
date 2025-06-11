// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      transitionProperty: {
        'opacity-transform': 'opacity, transform',
      },
    },
  },
};
