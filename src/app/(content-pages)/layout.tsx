import Footer from '@/src/components/Layout/Footer/Footer';
import Header from '@/src/components/Layout/Header/Header';
import Container from '@/src/components/ui/Container';
import { Metadata } from 'next';

/**
 * Лайяут для страниц где есть контент, который нужно вывести
 */
export default function ContentPagesLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={`w-full h-full flex flex-col overflow-y-hidden relative z-[22]`}>
            <Header />
            <Container className="w-[100vw]">{children}</Container>
            <Footer />
        </div>
    );
}
