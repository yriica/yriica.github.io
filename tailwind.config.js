module.exports = {
  content: [
    "./**/*.{html,md,markdown,liquid}",
    "!./_site/**/*"
  ],
  theme: {
    extend: {}
  },
  plugins: [require("@tailwindcss/typography")]
};
