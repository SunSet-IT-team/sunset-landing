import { FC } from 'react';
import Container from '../../ui/Container';
import Logo from '../../ui/Logo';

/**
 * Шапка сайта
 */
const Header: FC = () => {
    return (
        <header className="py-4 font-akony h-28 absolute r-0 t-0 l-0 w-full z-40 pointer-events-none ">
            <Container className="flex justify-between items-center relative z-10  gap-4 overflow-x-clip">
                <Logo />
            </Container>
        </header>
    );
};

export default Header;
