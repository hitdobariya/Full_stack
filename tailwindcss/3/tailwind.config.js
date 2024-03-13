/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      listStyleImage: {
        instagram: 'url("/src/instagram.png")'
      },
      content: {
        'link': 'url("/src/link-solid.svg")'
      },
    },
  },
  plugins: [],
}

