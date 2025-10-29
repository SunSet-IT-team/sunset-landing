'use client';

import { FC, useEffect, useRef, useState } from 'react';
import Container from '../../ui/Container';
import Legality from './Legality';
import Questions from './Questions';
import SocialMedia from './SocialMedia';

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
                className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full h-[12px] bg-blue-400 z-40 cursor-pointer"
                onMouseEnter={handleMouseEnter}
                onClick={() => setIsVisible(true)}
                style={{
                    backgroundImage: `url('/icons/arrow.svg')`,
                    backgroundSize: '10px 10px',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            />

            {/* Подвал с анимацией */}
            <footer
                ref={footerRef}
                className={`bg-blue-400 fixed left-0 right-0 bottom-0 py-2 md:py-4 h-26 md:h-36 z-50 transition-transform duration-300 ease-in-out ${
                    isVisible ? 'translate-y-0' : 'translate-y-full'
                }`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                <Container className="flex flex-col items-center justify-center gap-2 md:gap-4 w-full h-full relative">
                    {/* <Questions /> */}
                    <SocialMedia />
                    <Legality />
                </Container>
            </footer>
        </>
    );
};

export default FooterLanding;
