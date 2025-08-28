'use client';

import { FC, useState } from 'react';
import { twMerge } from 'tailwind-merge';

interface IProps {
    isOpen?: boolean;
    onClick?: () => void;
}

const BurgerMenu: FC<IProps> = ({ onClick, isOpen: isOpenProps }) => {
    const [_isOpen, setIsOpen] = useState<boolean>(false);
    const isOpen = isOpenProps ?? _isOpen;

    return (
        <div
            className="w-[32px] h-[20px] absolute  top-6 right-6  md:top-[44px] md:right-[30px] z-[9999] cursor-pointer flex flex-col justify-between"
            onClick={() => {
                setIsOpen(!isOpen);
                onClick?.();
            }}>
            {/* Верхняя палочка */}
            <span
                className={twMerge(
                    'block w-full h-[3px] bg-white transition-all duration-400 ease-linear origin-center',
                    isOpen ? 'translate-y-[8.5px] rotate-45' : 'translate-y-0 rotate-0',
                )}></span>

            {/* Центральная палочка */}
            <span
                className={twMerge(
                    'block w-full h-[3px] bg-white transition-all duration-400 ease-linear origin-center',
                    isOpen ? 'scale-0' : 'scale-100',
                )}></span>

            {/* Нижняя палочка */}
            <span
                className={twMerge(
                    'block w-full h-[3px] bg-white transition-all duration-400 ease-linear origin-center',
                    isOpen ? '-translate-y-[8.5px] -rotate-45' : 'translate-y-0 rotate-0',
                )}></span>
        </div>
    );
};

export default BurgerMenu;
