import { twMerge } from 'tailwind-merge';

interface ContentContainerProps {
    children: React.ReactNode;
    className?: string;
    as?: 'div' | 'main';
}

/**
 * Контейнер для страниц контента
 */
const ContentContainer = ({ children, className, as = 'div' }: ContentContainerProps) => {
    const Container = as;
    return (
        <Container className={twMerge('mr-auto w-full lg:w-[calc(100%_-_320px)]', className)}>
            {children}
        </Container>
    );
};

export default ContentContainer;
