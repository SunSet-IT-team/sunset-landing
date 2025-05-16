'use client';

import { CLOSED_MENU_ITEM_WIDTH, ANIMATION_DURATION } from '@/src/data/constants';
import { sections } from '@/src/data/data';
import { useNavStore } from '@/src/store/navStore';
import { motion } from 'framer-motion';
import { FC, PropsWithChildren, useEffect, useMemo, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

interface IProps {
    sectionId: number;
}

const Section: FC<PropsWithChildren<IProps>> = ({ sectionId, children }) => {
    const { stack, setCurrentActiveSection, activeId, maxContentWidth } = useNavStore();
    const ref = useRef<HTMLDivElement | null>(null);
    const [isActiveSection, setIsActiveSection] = useState<boolean>(sectionId === activeId);
    const calculatedWidth = useMemo(() => {
        return maxContentWidth - (stack.length - 1) * 248 - (sections.length - sectionId) * 248;
    }, [maxContentWidth, stack, sectionId]);

    useEffect(() => {
        if (activeId === sectionId && ref.current) {
            setCurrentActiveSection(ref.current.clientWidth);
        }
        setIsActiveSection(activeId === sectionId);
    }, [activeId]);

    const motionStyle = useMemo(() => {
        const isHomeSection = stack.at(-1) === 1;
        return {
            opacity: !isActiveSection ? 0 : 1,
            x: !isActiveSection
                ? '-150%'
                : isHomeSection
                ? '0%'
                : `calc(0% + ${CLOSED_MENU_ITEM_WIDTH * (sectionId - 2)}px)`,
        };
    }, [stack, isActiveSection, sectionId]);

    return (
        <motion.div
            ref={ref}
            className={twMerge('mt-10 h-full -translate-x-full absolute')}
            style={{
                width: isActiveSection ? `${calculatedWidth}px` : 'auto',
            }}
            initial={{ x: '-150%', opacity: 0 }}
            animate={motionStyle}
            transition={{ duration: ANIMATION_DURATION, type: 'spring' }}>
            {children}
        </motion.div>
    );
};

export default Section;
