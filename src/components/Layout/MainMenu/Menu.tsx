'use client';

import { FC } from 'react';
import { menuItems } from './data';
import { twMerge } from 'tailwind-merge';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

interface IProps {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
}

/**
 * Компонент самого меню
 */
const Menu: FC<IProps> = ({ isOpen, setIsOpen }) => {
    const pathname = usePathname();
    const isHomePage = pathname === '/';

    return (
        <>
            {/* Задний блюр фон */}
            <div
                className={twMerge(
                    'fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md transition-all duration-500 ease-in-out z-[1000]',
                    isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
                )}
                onClick={() => setIsOpen(false)}></div>

            {/* Сайдбар меню */}
            <aside
                className={twMerge(
                    'fixed top-0 right-0 w-[300px] md:w-[400px] h-full bg-blue-400 shadow-lg transform transition-transform duration-500 ease-in-out z-[1100] flex flex-col',
                    isOpen ? 'translate-x-0' : 'translate-x-full',
                )}>
                <nav className="overflow-y-auto flex-1 p-6">
                    {!isHomePage && (
                        <Link
                            href="/"
                            onClick={() => setIsOpen(false)}
                            className=" mt-8 flex justify-center">
                            <Image
                                width={240}
                                height={100}
                                src="/sunset_menu_logo.svg"
                                alt="SunSet IT logo"
                                className="object-contain w-[180px] md:w-[240px]"
                            />
                        </Link>
                    )}

                    <ul className="flex flex-col gap-6 mt-8">
                        {menuItems.map((item) => (
                            <li key={item.title}>
                                <Link
                                    href={item.href}
                                    className="uppercase text-[14px] md:text-[20px] font-bold font-akony text-white hover:text-orange transition-colors ease duration-300"
                                    onClick={() => setIsOpen(false)}>
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>
        </>
    );
};

export default Menu;
