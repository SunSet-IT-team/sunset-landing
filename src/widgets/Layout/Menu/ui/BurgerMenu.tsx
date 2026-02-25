'use client';

import { FC, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { useMenuContext } from '../model/MenuContext';

interface BurgerMenuProps {
    className?: string;
}

/**
 * Иконка бургера для меню
 */
const BurgerMenu: FC<BurgerMenuProps> = ({ className }) => {
    const { isOpen, setIsOpen } = useMenuContext();

    return (
        <div
            className={twMerge(
                'w-[24px] h-[15px] md:w-[32px] md:h-[20px] absolute  top-6 right-6  md:top-[44px] md:right-[30px] z-[50] cursor-pointer flex flex-col justify-between',
                className,
            )}
            onClick={() => {
                setIsOpen(!isOpen);
            }}>
            {/* Верхняя палочка */}
            <span
                className={twMerge(
                    'block w-full h-[2px] md:h-[3px] bg-white transition-all duration-400 ease-linear origin-center',
                    isOpen
                        ? 'translate-y-[6.5px] md:translate-y-[8.5px]  rotate-45'
                        : 'translate-y-0 rotate-0',
                )}></span>

            {/* Центральная палочка */}
            <span
                className={twMerge(
                    'block w-full h-[2px] md:h-[3px] bg-white transition-all duration-400 ease-linear origin-center',
                )}
                style={{ transform: isOpen ? 'rotateY(90deg)' : 'rotateY(0deg)' }}></span>

            {/* Нижняя палочка */}
            <span
                className={twMerge(
                    'block w-full h-[2px] md:h-[3px] bg-white transition-all duration-400 ease-linear origin-center',
                    isOpen
                        ? '-translate-y-[6.5px] md:-translate-y-[8.5px] -rotate-45'
                        : 'translate-y-0 rotate-0',
                )}></span>
        </div>
    );
};

export default BurgerMenu;
