import { Metadata } from 'next';
import { CanvasPortal } from '../components/dom/CanvasPortal';

import '../assets/globals.css';
import { akony, arodoraPro } from '../assets/fonts/lindex';

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
