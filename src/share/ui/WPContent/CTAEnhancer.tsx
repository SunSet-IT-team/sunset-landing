'use client';

import { useEffect } from 'react';

/**
 * Слушатель для скролла страниц
 */
export default function CTAEnhancer() {
    useEffect(() => {
        const buttons = document.querySelectorAll('.cta-scroll-button');

        buttons.forEach((button) => {
            const block = button.closest('.cta-scroll-block');
            const anchor = block?.getAttribute('data-anchor');
            if (!anchor) return;

            button.addEventListener('click', () => {
                const target = document.getElementById(anchor);
                if (!target) return;

                const yOffset = -100; // если есть фиксированный header
                const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;

                window.scrollTo({ top: y, behavior: 'smooth' });
            });
        });
    }, []);

    return null;
}
