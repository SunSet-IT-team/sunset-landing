import DotGrid from '@/components/DotGrid';
import Footer from '@/src/components/Layout/Footer/Footer';
import Header from '@/src/components/Layout/Header/Header';
import NotificationsBlock from '@/src/components/NotificationsBlock/NotificationBlock';
import Cursor from '@/src/feature/UIBackground/Cursor';
import UIBackground from '@/src/feature/UIBackground/ui';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Sunset IT — Создание сайтов и приложений для бизнеса',
    description:
        'SunSet IT — команда разработчиков, создающая удобные и надёжные сайты, веб-приложения и цифровые продукты для малого и среднего бизнеса. Быстрый запуск, поддержка и развитие онлайн-проектов.',
    keywords: [
        'создание сайта',
        'разработка веб-приложений',
        'digital-команда',
        'разработка сайтов для бизнеса',
        'поддержка сайтов',
        'SunSet IT',
        'создать сайт дешево',
        'малый бизнес',
    ],
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
            <NotificationsBlock />
            <Footer />
            <div className="fixed inset-0 left-0 right-0 -top-2 bottom-0 pointer-events-none">
                <DotGrid
                    dotSize={2}
                    gap={20}
                    baseColor="#5227FF"
                    activeColor="#FF6400"
                    proximity={120}
                    shockRadius={250}
                    shockStrength={5}
                    resistance={600}
                    returnDuration={1.5}
                />
            </div>
            <UIBackground />
            <Cursor />
        </div>
    );
}
