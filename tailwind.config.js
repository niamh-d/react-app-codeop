/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: ["forest", "coffee", "sunset", "lofi", "nord", "garden"]
  },
  theme: {
    extend: {}
  },
  plugins: [require("daisyui", "@tailwindcss/typography")]
};

// npx tailwindcss -i ./src/index.css -o .src/output.css
