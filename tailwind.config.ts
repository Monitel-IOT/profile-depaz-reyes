import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
				'hero-contact': "url('/images/contact/builds.png')",
				'whatsapp': "url('/images/lat_whatsapp.png')",
				'contact': "url('/images/lat_contactar.png')",
				'facebook': "url('/images/lat_facebook.png')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
			boxShadow: {
        '3xl': '0 0 0.5rem rgba(0, 0, 0, 0.45)',
      },
      colors: {
        'dorado': '#D5AA6D',
      },
    },
  },
  plugins: [],
}
export default config
