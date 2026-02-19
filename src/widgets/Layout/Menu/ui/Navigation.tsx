'use client';

import { FC } from 'react';
import Link from 'next/link';
import { NavItem } from '../model/types';

interface NavigationProps {
    items: NavItem[];
}

/**
 * Компонент десктопной навигации
 */
const Navigation: FC<NavigationProps> = ({ items }) => {
    return (
        <nav className="hidden md:block">
            <ul className="flex flex-row items-center gap-4">
                {items.map((item) => (
                    <li key={item.title}>
                        <Link
                            href={item.href}
                            className="text-button hover:text-orange transition-colors ease duration-300">
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;
