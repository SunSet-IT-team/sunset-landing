import { FC } from 'react';
import Container from '@/src/share/ui/Container';
import Legality from './Legality';
import Questions from './Questions';
import SocialMedia from './SocialMedia';

/**
 * Подвал сайта
 */
const Footer: FC = () => {
    return (
        <footer className={`mt-auto bg-blue-400 w-full py-2 md:py-4 h-26 md:h-36`}>
            <Container className="flex flex-col items-center justify-center gap-2 md:gap-4 w-full h-full relative">
                {/* <Questions /> */}
                <SocialMedia />
                <Legality />
            </Container>
        </footer>
    );
};

export default Footer;
