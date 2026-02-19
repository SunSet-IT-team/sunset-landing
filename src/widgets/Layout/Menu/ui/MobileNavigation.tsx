import { FC, useEffect, useRef } from 'react';
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

const MobileNavigation = ({ items }: NavigationProps) => {
    const { isOpen, setIsOpen } = useMenuContext();

    const pathname = usePathname();

    const isHomePage = pathname === '/';

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

    return (
        <>
            <CSSTransition
                in={isOpen}
                nodeRef={bgRef}
                timeout={500}
                classNames="fade"
                unmountOnExit>
                <div
                    ref={bgRef}
                    className={twMerge(
                        'fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md z-[1000]',
                    )}
                    onClick={() => setIsOpen(false)}></div>
            </CSSTransition>

            <aside
                className={twMerge(
                    'fixed top-0 right-0 w-[300px] md:w-[400px] h-full bg-blue-400 shadow-lg transform transition-transform duration-500 ease-in-out z-[1100] flex flex-col md:hidden',
                    isOpen ? 'translate-x-0' : 'translate-x-full',
                )}>
                <nav className="overflow-y-auto flex-1 p-6">
                    {!isHomePage && (
                        <Link href="/" onClick={() => setIsOpen(false)}>
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
                        {items.map((item) => (
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
                <Plus
                    size={32}
                    className="absolute top-2 right-2 rotate-45"
                    onClick={() => setIsOpen(false)}
                />
            </aside>
        </>
    );
};

export default MobileNavigation;
