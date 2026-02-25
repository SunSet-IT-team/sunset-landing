'use client';

import { FC, useEffect, useRef, useState } from 'react';
import Legality from './Legality';
import Questions from './Questions';
import SocialMedia from './SocialMedia';
import Container from '@/src/share/ui/Container';
import { twMerge } from 'tailwind-merge';

/**
 * Подвал сайта для лендинга интерактивный
 */
const FooterLanding: FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null); // Для дебаунса
    const footerRef = useRef<HTMLDivElement>(null);

    // Обработчик клика вне подвала
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (footerRef.current && !footerRef.current.contains(event.target as Node)) {
                setIsVisible(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleMouseLeave = () => {
        // Запускаем таймер скрытия
        hideTimeoutRef.current = setTimeout(() => {
            setIsVisible(false);
        }, 300);
    };

    const handleMouseEnter = () => {
        // Если мышь вернулась быстро → отменяем таймер
        if (hideTimeoutRef.current) {
            clearTimeout(hideTimeoutRef.current);
            hideTimeoutRef.current = null;
        }
        setIsVisible(true);
    };

    return (
        <>
            {/* Триггер */}
            <div
                className={twMerge(
                    'fixed left-0 right-0 w-full h-[12px] z-40 cursor-pointer transition-all duration-300',
                    isVisible ? '-bottom-10' : ' bottom-0',
                )}
                onMouseEnter={handleMouseEnter}
                onClick={() => setIsVisible(true)}>
                <div className="absolute inset-0  w-full  h-[12px] z-10 bg-blue-400 opacity-70"></div>
                <div className="absolute inset-0  bg-opacity-50 backdrop-blur-md w-full  h-[12px] z-20"></div>
                <div
                    style={{
                        backgroundImage: `url('/icons/arrow.svg')`,
                        backgroundSize: '10px 10px',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                    className="relative z-50 mx-auto h-[12px] w-[12px]"></div>
            </div>

            {/* Подвал с анимацией */}
            <footer
                ref={footerRef}
                className={twMerge(
                    'fixed left-0 right-0 bottom-0 py-2 md:py-4 h-26 md:h-36 z-50 transition-transform duration-300 ease-in-out',
                    isVisible ? 'translate-y-0' : 'translate-y-full',
                )}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                <div className="fixed inset-0   w-full h-full z-10 bg-blue-400 opacity-40"></div>
                <div className="fixed inset-0  bg-opacity-50 backdrop-blur-md w-full h-full z-20"></div>
                <Container className="flex flex-col items-center justify-center gap-2 md:gap-4 w-full h-full relative z-[100]">
                    {/* <Questions /> */}
                    <SocialMedia />
                    <Legality />
                </Container>
            </footer>
        </>
    );
};

export default FooterLanding;
