import Footer from '@/src/components/Layout/Footer/Footer';
import Header from '@/src/components/Layout/Header/Header';
import Container from '@/src/components/ui/Container';
import { Metadata } from 'next';

/**
 * Лайяут для страниц документов
 */
export default function DocumentPagesLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <main className="mr-auto w-full md:w-[75%]">{children}</main>;
}
