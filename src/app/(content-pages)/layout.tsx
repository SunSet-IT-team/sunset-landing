import Footer from '@/src/components/Layout/Footer/Footer';
import Logo from '@/src/components/ui/Logo';
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
            <div className="flex justify-center mt-10">
                <Logo />
            </div>
            <main className="relative">{children}</main>
            <Footer />
        </div>
    );
}
