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
        <div className="w-full h-full overflow-y-hidden">
            <Header />
            <main className="h-full relative z-30">{children}</main>
            <Footer />
        </div>
    );
}
