'use client';

import { FC, useState } from 'react';
import Container from '../../ui/Container';
import Legality from './Legality';
import Questions from './Questions';
import SocialMedia from './SocialMedia';

/**
 * Подвал сайта
 */
const Footer: FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <>
            {/* Оранжевый триггер */}
            <div
                className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full h-[12px] bg-blue-400 z-40 cursor-pointer"
                onMouseEnter={() => setIsVisible(true)}
                style={{
                    backgroundImage: `url('/icons/arrow.svg')`,
                    backgroundSize: '10px 10px',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            />

            {/* Подвал с анимацией */}
            <footer
                className={`bg-blue-400 fixed left-0 right-0 bottom-0 px-11 py-4 h-40 z-50 transition-transform duration-300 ease-in-out ${
                    isVisible ? 'translate-y-0' : 'translate-y-full'
                }`}
                onMouseLeave={() => setIsVisible(false)}>
                <Container className="grid grid-cols-3 w-full h-full">
                    <Questions />
                    <SocialMedia />
                    <Legality />
                </Container>
            </footer>
        </>
    );
};

export default Footer;
