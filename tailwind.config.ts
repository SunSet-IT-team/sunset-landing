import type { Config } from 'tailwindcss';

export default {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                blue: {
                    200: 'var(--blue-200)',
                    300: 'var(--blue-300)',
                    400: 'var(--blue-400)',
                },
                grey: 'var(--grey)',
                darkGrey: 'var(--dark-grey)',
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
} satisfies Config;
