module.exports = {
  content: ["./**/*.{html,md,markdown,liquid}","!./_site/**/*"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace']
      },
      colors: {
        ink: {
          900: '#0a0a0a',   // 本文色（濃い黒）
          700: '#333333',   // 見出し/強調
          500: '#666666',   // メタ情報
          300: '#a3a3a3'    // 罫線/区切り
        },
        accent: { 500: '#0f766e' } // リンク色（控えめな緑系、好みで変更）
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            color: theme('colors.ink.900'),
            a: {
              color: 'inherit',
              textDecoration: 'underline',
              textDecorationThickness: '0.08em',
              textUnderlineOffset: '0.2em',
              transition: 'opacity .15s ease',
              '&:hover': { opacity: .7 }
            },
            h1: { fontWeight: '600', color: theme('colors.ink.700') },
            h2: { fontWeight: '600', color: theme('colors.ink.700') },
            h3: { fontWeight: '600', color: theme('colors.ink.700') },
            code: { backgroundColor: '#f6f6f6', padding: '0.1em 0.35em', borderRadius: '0.25rem' },
            'blockquote p:first-of-type::before': { content: '""' },
            'blockquote p:last-of-type::after': { content: '""' }
          }
        }
      })
    }
  },
  plugins: [require("@tailwindcss/typography")]
}
