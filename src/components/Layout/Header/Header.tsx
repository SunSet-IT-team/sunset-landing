'use client';
import { FC, useEffect, useState } from 'react';
import Container from '../../ui/Container';
import Logo from '../../ui/Logo';
import { twMerge } from 'tailwind-merge';

const Header: FC = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`
        sticky top-0 left-0 right-0 w-full z-50 transition-all duration-300
        ${scrolled ? 'bg-black/60 backdrop-blur-md shadow-md' : 'bg-transparent'}
      `}>
            <Container
                className={twMerge(
                    'flex w-full justify-between items-center transition-all duration-300',
                    scrolled ? 'py-1' : 'py-4',
                )}>
                <Logo />
            </Container>
        </header>
    );
};

export default Header;
