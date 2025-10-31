'use client';

import LogoLoop from '@/components/LogoLoop';
import { useMediaQuery } from '@/src/share/hooks/useMediaQuery';
import { useEffect, useState } from 'react';
import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiWordpress,
    SiWoocommerce,
    SiFastapi,
    SiNodedotjs,
    SiPhp,
    SiPython,
    SiRedux,
    SiTelegram,
} from 'react-icons/si';
import { twMerge } from 'tailwind-merge';

const techLogos = [
    { node: <SiReact /> },
    { node: <SiNextdotjs /> },
    { node: <SiTypescript /> },
    { node: <SiTailwindcss /> },
    { node: <SiWordpress /> },
    { node: <SiWoocommerce /> },
    { node: <SiRedux /> },
    { node: <SiNodedotjs /> },
    { node: <SiFastapi /> },
    { node: <SiPython /> },
    { node: <SiPhp /> },
    { node: <SiTelegram /> },
];

/**
 * Слайдер всех иконок
 */
const IconsSlider = () => {
    const isMobile = useMediaQuery('(max-width: 767px)');

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;
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
