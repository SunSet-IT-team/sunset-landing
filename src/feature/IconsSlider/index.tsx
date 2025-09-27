'use client';

import LogoLoop from '@/components/LogoLoop';
import { useMediaQuery } from '@/src/hooks/useMediaQuery';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
import { twMerge } from 'tailwind-merge';

const techLogos = [
    { node: <SiReact />, title: 'React', href: 'https://react.dev' },
    { node: <SiNextdotjs />, title: 'Next.js', href: 'https://nextjs.org' },
    { node: <SiTypescript />, title: 'TypeScript', href: 'https://www.typescriptlang.org' },
    { node: <SiTailwindcss />, title: 'Tailwind CSS', href: 'https://tailwindcss.com' },
    { node: <SiReact />, title: 'React', href: 'https://react.dev' },
    { node: <SiNextdotjs />, title: 'Next.js', href: 'https://nextjs.org' },
    { node: <SiTypescript />, title: 'TypeScript', href: 'https://www.typescriptlang.org' },
    { node: <SiTailwindcss />, title: 'Tailwind CSS', href: 'https://tailwindcss.com' },
];

/**
 * Слайдер всех иконок
 */
const IconsSlider = () => {
    const isMobile = useMediaQuery('(max-width: 767px)');
    return (
        <div
            className={twMerge(
                'absolute w-full md:w-[102vh] h-[62px] right-0 md:right-[70px] bottom-0 md:bottom-[unset] md:-top-[1vh] origin-top-right',
            )}
            style={{
                transform: isMobile ? '' : 'rotate(-90deg) translateZ(0)',
                willChange: 'transform',
                backfaceVisibility: 'hidden',
            }}>
            <LogoLoop
                logos={techLogos}
                speed={120}
                direction={isMobile ? 'left' : 'top'}
                logoHeight={48}
                gap={40}
                pauseOnHover
                scaleOnHover
                ariaLabel="Technology partners"
            />
        </div>
    );
};

export default IconsSlider;
