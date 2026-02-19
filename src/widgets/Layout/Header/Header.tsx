'use client';
import Container from '@/src/share/ui/Container';
import Logo from '@/src/share/ui/Logo/Logo';
import { FC, useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import Menu from '../Menu/ui/Menu';
import { useMenuContext } from '../Menu/model/MenuContext';
import MobileNavigation from '../Menu/ui/MobileNavigation';
import { menuData } from '../Menu/model/menuData';

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
        <>
            <header
                className={`
        sticky top-0 left-0 right-0 w-full z-50 transition-all duration-300
        ${scrolled ? 'bg-black/60 backdrop-blur-md shadow-md' : 'bg-transparent'}
      `}>
                <Container
                    className={twMerge(
                        'flex w-full justify-between items-center transition-all duration-300 relative',
                        scrolled ? 'py-1' : 'py-4',
                    )}>
                    <Logo />
                    <Menu />
                </Container>
            </header>
            <MobileNavigation items={menuData} />
        </>
    );
};

export default Header;
