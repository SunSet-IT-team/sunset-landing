import { Metadata } from 'next';
import { CanvasPortal } from '../components/CanvasPortal/CanvasPortal';

import '../assets/globals.css';
import { akony, arodoraPro } from '../assets/fonts/lindex';
import BodyScriptMetrika from '../feature/Metrika/BodyScriptMetrika';
import HeadScriptMetrika from '../feature/Metrika/HeadScriptMetrika';
import NotificationsBlock from '../components/NotificationsBlock/NotificationBlock';
import MainMenu from '../components/Layout/MainMenu/MainMenu';
import WorkSpaceVerification from '../feature/WorkSpace';

export const metadata: Metadata = {
    title: 'Sunset IT — digital-команда разработчиков',
    description: 'Мы создаём современные сайты и приложения для вашего бизнеса',
    keywords: ['digital', 'разработка сайтов', 'создание приложений', 'IT-команда'],
    authors: [{ name: 'Sunset IT' }],
    creator: 'Sunset IT',
    publisher: 'Sunset IT',
    applicationName: 'Sunset IT',
    // Иконки для сайта (favicon, apple touch icon)
    icons: {
        icon: '/favicon.ico',
        apple: '/apple-touch-icon.png',
        other: [
            {
                rel: 'icon',
                url: '/icon-192.png',
                sizes: '192x192',
                type: 'image/png',
            },
        ],
    },
    // Open Graph — для соцсетей (Facebook, VK, LinkedIn)
    openGraph: {
        title: 'Sunset — digital-команда',
        description: 'Мы создаём современные сайты и приложения для вашего бизнеса',
        url: 'https://sunset-it.agency',
        siteName: 'Sunset IT',
        images: [
            {
                url: 'https://sunset-it.agency/og.png',
                width: 1200,
                height: 630,
                alt: 'Sunset IT — digital-команда',
            },
        ],
        locale: 'ru_RU',
        type: 'website',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
            <head>
                <meta name="apple-mobile-web-app-title" content="SunSet IT" />
                <HeadScriptMetrika />
                <WorkSpaceVerification />
            </head>
            <body
                className={`${akony.variable} ${arodoraPro.variable} 
                    antialiased h-[100vh] 
                    w-[100vw] bg-black-gradient
                    text-white  relative overflow-x-hidden `}>
                <BodyScriptMetrika />
                <CanvasPortal>{children}</CanvasPortal>
                {/* <MainMenu /> */}
            </body>
        </html>
    );
}
