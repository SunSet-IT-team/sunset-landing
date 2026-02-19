'use client';

import { FC, useState } from 'react';
import BurgerMenu from './BurgerMenu';
import Navigation from './LandingNavigation';
import { landingMenuData } from '../model/landingMenuData';

/**
 * Меню специально для лендинга
 */
const LandingMenu: FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <>
            <BurgerMenu isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
            <Navigation isOpen={isOpen} setIsOpen={setIsOpen} items={landingMenuData} />
        </>
    );
};

export default LandingMenu;
