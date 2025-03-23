import type { Config } from 'tailwindcss';

const config: Config = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				'space-grotesk': ['Space Grotesk', 'sans-serif'],
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
			},
			textShadow: {
				sm: '0 1px 2px rgba(0, 0, 0, 0.2)',
				DEFAULT: '0 2px 4px rgba(0, 0, 0, 0.2)',
				lg: '0 8px 16px rgba(0, 0, 0, 0.3)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				scroll: {
					to: {
						transform: 'translate(calc(-50% - 0.5rem))',
					},
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				scroll:
					'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
			},
		},
	},
	plugins: [
		require('tailwindcss-animate'),
		function ({ addUtilities, theme }: { addUtilities: any; theme: any }) {
			const textShadows = theme('textShadow');
			const utilities = Object.entries(textShadows).reduce((acc, [key, value]) => {
				const className = key === 'DEFAULT' ? 'text-shadow' : `text-shadow-${key}`;
				return {
					...acc,
					[`.${className}`]: {
						'text-shadow': value,
					},
				};
			}, {});
			addUtilities(utilities);
		},
	],
};

export default config;
