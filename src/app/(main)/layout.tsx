import Footer from '@/src/components/Layout/Footer/Footer';
import Header from '@/src/components/Layout/Header/Header';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Sunset',
    description: 'Sunset',
};

interface MainLayoutProps {
    children: React.ReactNode;
}

/**
 * Страница лендоса
 */
export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <div className="w-full h-full flex flex-col overflow-y-hidden">
            <Header />
            <main className="pt-2 md:pt-0 relative z-30 flex-grow-[1] h-0 md:h-full ">
                {children}
            </main>
            <Footer />
        </div>
    );
}
