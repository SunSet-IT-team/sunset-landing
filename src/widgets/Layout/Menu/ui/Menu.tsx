import Navigation from './Navigation';
import { menuData } from '../model/menuData';
import BurgerMenu from './BurgerMenu';

/**
 * Обычное меню
 */
const Menu = () => {
    return (
        <div>
            <Navigation items={menuData} />
            <BurgerMenu className="md:hidden relative top-[unset] right-[unset]" />
        </div>
    );
};

export default Menu;
