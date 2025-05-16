import { Metadata } from 'next';
import localFont from 'next/font/local';

import '../assets/globals.css';

import { CanvasPortal } from '../components/dom/CanvasPortal';

const akony = localFont({
    src: '../assets/fonts/akony.woff',
    variable: '--font-akony',
    weight: '700',
});
const arodoraPro = localFont({
    src: '../assets/fonts/ArodoraPro-Light.otf',
    variable: '--font-arodora-pro',
    weight: '300',
});

export const metadata: Metadata = {
    title: 'Sunset',
    description: 'Sunset',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
            <body
                className={`${akony.variable} ${arodoraPro.variable} antialiased h-[calc(100vh+160px)] w-[100vw] bg-black-gradient text-white  relative overflow-x-hidden font-akony`}>
                <CanvasPortal>{children}</CanvasPortal>
            </body>
        </html>
    );
}
