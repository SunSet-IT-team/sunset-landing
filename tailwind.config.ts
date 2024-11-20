import type { Config } from 'tailwindcss'

export default {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				blue: 'var(--blue)',
				grey: 'var(--grey)',
				orange: 'var(--orange)',
			},
			fontFamily: {
				akony: 'var(--font-akony)',
				'arodora-pro': 'var(--font-arodora-pro)',
			},
			backgroundImage: {
				'black-gradient': 'var(--black-gradient)',
			},
		},
	},
	plugins: [],
} satisfies Config
