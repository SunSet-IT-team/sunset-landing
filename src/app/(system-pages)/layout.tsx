import Footer from '@/src/components/Layout/Footer/FooterLanding';
import Logo from '@/src/components/ui/LogoLanding';
import { Metadata } from 'next';
export const metadata: Metadata = {
    title: 'Тех.работы',
    description: 'Извините, но сейчас идут технические работы',
};
export default function SystemPagesLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={`w-full h-full flex flex-col overflow-y-hidden relative z-[22]`}>
            <div className="flex justify-center mt-10">
                <Logo />
            </div>
            <main className=" h-[calc(100vh-120px)] relative">{children}</main>
            <Footer />
        </div>
    );
}
