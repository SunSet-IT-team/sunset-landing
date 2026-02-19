import Navigation from './Navigation';
import MobileNavigation from './MobileNavigation';
import { menuData } from '../model/menuData';
import { useMenuContext } from '../model/MenuContext';
import BurgerMenu from './BurgerMenu';

/**
 * Обычное меню
 */
const Menu = () => {
    const { isOpen, toggleMenu } = useMenuContext();

    return (
        <div>
            <Navigation items={menuData} />
            <BurgerMenu
                isOpen={isOpen}
                onClick={toggleMenu}
                className="md:hidden relative top-[unset] right-[unset]"
            />
        </div>
    );
};

export default Menu;
