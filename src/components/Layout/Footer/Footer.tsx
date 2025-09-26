'use client';

import { FC, useEffect, useRef, useState } from 'react';
import Container from '../../ui/Container';
import Legality from './Legality';
import Questions from './Questions';
import SocialMedia from './SocialMedia';

/**
 * Подвал сайта
 */
const Footer: FC = () => {
    const [isVisible, setIsVisible] = useState(false);

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

    return (
        <>
            {/* Триггер */}
            <div
                className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full h-[12px] bg-blue-400 z-40 cursor-pointer"
                onMouseEnter={() => setIsVisible(true)}
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
                onMouseLeave={() => setIsVisible(false)}>
                <Container className="flex flex-col items-center justify-center gap-2 md:gap-4 w-full h-full relative">
                    {/* <Questions /> */}
                    <SocialMedia />
                    <Legality />
                </Container>
            </footer>
        </>
    );
};

export default Footer;
