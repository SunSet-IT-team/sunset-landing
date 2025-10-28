import { FC } from 'react';
import Container from '../../ui/Container';
import Logo from '../../ui/Logo';

/**
 * Шапка сайта
 */
const Header: FC = () => {
    return (
        <header className="py-4 sticky  w-full pointer-events-none ">
            <Container className="flex w-full justify-between items-center">
                <Logo />
            </Container>
        </header>
    );
};

export default Header;
