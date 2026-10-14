/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Minimalist Luxury palette (single source of truth for the theme)
        cream: '#F7F3ED',
        ivory: '#FFFCF8',
        sand: '#E8DED1',
        'sand-dark': '#C9B8A5',
        taupe: '#81766B',
        charcoal: '#24211F',
        'charcoal-light': '#77716B'
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Fraunces"', '"Playfair Display"', 'Georgia', 'serif'],
        roboto: ['"Roboto"', 'system-ui', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        fadeIn: { from: { opacity: '0', transform: 'translateY(8px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        headerIn: { from: { opacity: '0', transform: 'translateY(-100%)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        heroZoom: { from: { transform: 'scale(1.18)' }, to: { transform: 'scale(1.05)' } },
        pageIn: { from: { opacity: '0' }, to: { opacity: '1' } },
      },
      animation: {
        fadeIn: 'fadeIn 0.35s cubic-bezier(0.22, 1, 0.36, 1) both',
        headerIn: 'headerIn 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        heroZoom: 'heroZoom 2.4s cubic-bezier(0.22, 1, 0.36, 1) both',
        pageIn: 'pageIn 0.6s ease-out both',
      },
      borderRadius: {
        'organic': '2.5rem',
        'arch': '12rem',
      }
    },
  },
  plugins: [],
}
