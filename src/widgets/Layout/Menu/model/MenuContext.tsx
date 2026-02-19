'use client';

import { createContext, ReactNode, useContext, useMemo, useState } from 'react';

interface MenuContextValue {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
    toggleMenu: () => void;
    closeMenu: () => void;
}

const MenuContext = createContext<MenuContextValue | null>(null);

interface MenuProviderProps {
    children: ReactNode;
}

export const MenuProvider = ({ children }: MenuProviderProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const value = useMemo(
        () => ({
            isOpen,
            setIsOpen,
            toggleMenu: () => setIsOpen((prev) => !prev),
            closeMenu: () => setIsOpen(false),
        }),
        [isOpen],
    );

    return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};

export const useMenuContext = () => {
    const context = useContext(MenuContext);

    if (!context) {
        throw new Error('useMenuContext must be used inside MenuProvider');
    }

    return context;
};
