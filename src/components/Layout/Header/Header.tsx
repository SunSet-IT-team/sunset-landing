'use client';

import { FC, useEffect, useRef } from 'react';
import Container from '../../ui/Container';
import Navbar from './Navbar/Navbar';
import { getSectionPosition } from '@/src/utils/getSectionPosition';
import { DEFAULT_CLIENT_WIDTH } from '@/src/data/constants';
import { useNavStore } from '@/src/store/navStore';
import Logo from '../../ui/Logo';

/**
 * Шапка
 */
const Header: FC = () => {
    const ref = useRef<HTMLDivElement | null>(null);

    const {
        activeId,
        setActiveId,
        stack,
        setStack,
        setStyles,
        styles,
        currentActiveSectionWidth,
        maxContentWidth,
        setMaxContentWidth,
    } = useNavStore();

    /**
     * Перерасчёт секции
     */
    useEffect(() => {
        const data = getSectionPosition({
            sectionId: activeId,
            stack,
            styles,
            windowWidth: maxContentWidth,
            sectionWidth: currentActiveSectionWidth,
        });
        setStack(data.stack);
        setStyles(data.styles);
    }, [activeId, currentActiveSectionWidth]);

    /**
     * Определение максимальной ширины
     */
    useEffect(() => {
        setMaxContentWidth(ref.current?.clientWidth || DEFAULT_CLIENT_WIDTH);
    }, []);

    return (
        <header className="py-4 font-akony h-28">
            <Container
                className="flex justify-between items-center relative z-10  gap-4 overflow-x-clip"
                ref={ref}>
                <Logo />
                <Navbar />
            </Container>
        </header>
    );
};

export default Header;
