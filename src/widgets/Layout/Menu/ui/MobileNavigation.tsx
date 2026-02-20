import { FC, useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { CSSTransition } from 'react-transition-group';
import { NavItem } from '../model/types';
import { useMenuContext } from '../model/MenuContext';
import { Plus } from 'lucide-react';

interface NavigationProps {
    items: NavItem[];
}

/**
 * Мобильное меню
 */
const MobileNavigation = ({ items }: NavigationProps) => {
    const { isOpen, setIsOpen } = useMenuContext();

    const [showLogo, setShowLogo] = useState(false);

    const bgRef = useRef(null);

    // Блокировка скролла при открытом меню
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    useEffect(() => {
        let timeout: NodeJS.Timeout;

        if (isOpen) {
            // Ждём пока меню выедет (500ms)
            timeout = setTimeout(() => {
                setShowLogo(true);
            }, 600);
        } else {
            // При закрытии убираем сразу
            setShowLogo(false);
        }

        return () => clearTimeout(timeout);
    }, [isOpen]);

    return (
        <>
            <CSSTransition
                in={isOpen}
                nodeRef={bgRef}
                timeout={200}
                classNames="fade"
                unmountOnExit>
                <div
                    ref={bgRef}
                    className={twMerge(
                        'fixed bg-black/30 w-full h-full z-[100] left-0 right-0 top-0 ',
                    )}
                    onClick={() => setIsOpen(false)}></div>
            </CSSTransition>

            <aside
                className={twMerge(
                    'fixed top-0 right-0 w-full md:w-[400px] h-full shadow-lg transform transition-transform duration-700 ease-in-out z-[1100] flex flex-col md:hidden',
                    isOpen ? 'translate-x-0' : 'translate-x-full',
                )}>
                <div className="fixed inset-0   w-full h-full z-10 bg-blue-400 opacity-20"></div>
                <div className="fixed inset-0  bg-opacity-50 backdrop-blur-md w-full h-full z-100"></div>
                <nav className="overflow-y-auto flex-1 p-6 z-20 flex flex-col">
                    <Link
                        href="/"
                        onClick={() => setIsOpen(false)}
                        className={twMerge(
                            'transition-all duration-300 ease-out w-fit',
                            showLogo
                                ? 'blur-0 opacity-100 translate-y-0'
                                : 'blur-md opacity-0 translate-y-2',
                        )}>
                        <Image
                            width={240}
                            height={100}
                            src="/sunset_menu_logo.svg"
                            alt="SunSet IT logo"
                            className="object-contain w-[200px] md:w-[240px]"
                        />
                    </Link>
                    <ul className="flex flex-col gap-6 mt-16">
                        {items.map((item) => (
                            <li key={item.title}>
                                <Link
                                    href={item.href}
                                    className="text-button text-white hover:text-orange transition-colors ease duration-300 text-[20px]"
                                    onClick={() => setIsOpen(false)}>
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <Plus
                    size={32}
                    className="absolute top-2 right-2 rotate-45 z-30"
                    onClick={() => setIsOpen(false)}
                />
            </aside>
        </>
    );
};

export default MobileNavigation;
