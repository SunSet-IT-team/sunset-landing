import { Metadata } from 'next';

/**
 * Лайяут для страниц документов
 */
export default function DocumentPagesLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <main className="pt-6 mb-8">{children}</main>;
}
