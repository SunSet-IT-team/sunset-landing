import Container from '@/src/share/ui/Container';
import LogoLanding from '@/src/share/ui/Logo/LogoLanding';
import { FC } from 'react';
import AsideNavigation from '../Menu/ui/AsideNavigation';
import { landingMenuData } from '../Menu/model/landingMenuData';

/**
 * Шапка сайта
 */
const HeaderLanding: FC = () => {
    return (
        <>
            <header className="py-4 md:h-28 sticky md:absolute r-0 t-0 l-0 w-full z-40 pointer-events-none ">
                <Container className="flex w-full justify-center md:justify-start items-center relative z-10 gap-4 overflow-x-clip">
                    <LogoLanding />
                </Container>
            </header>
            <AsideNavigation items={landingMenuData} />
        </>
    );
};

export default HeaderLanding;
