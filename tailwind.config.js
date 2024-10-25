/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        jost: ['Jost']
      },  
      clipPath: {
        'diagonal': 'polygon(30% 0, 100% 0, 100% 100%, 0 100%)',
      },
    },
  },
  plugins: [require('tailwind-clip-path'),],
};
