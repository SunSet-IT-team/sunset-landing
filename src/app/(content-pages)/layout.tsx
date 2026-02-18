import Footer from '@/src/components/Layout/Footer/Footer';
import Header from '@/src/components/Layout/Header/Header';
import Container from '@/src/share/ui/Container';
import NotificationsBlock from '@/src/share/ui/Notifications/NotificationsBlock/NotificationBlock';

/**
 * Лайяут для страниц где есть контент, который нужно вывести
 */
export default function ContentPagesLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={`w-full min-h-[100dvh] md:min-h-[100vh]  flex flex-col relative z-[22]`}>
            <Header />
            <Container className="w-[100vw]" type="small">
                {children}
            </Container>
            <NotificationsBlock />
            <Footer />
        </div>
    );
}
