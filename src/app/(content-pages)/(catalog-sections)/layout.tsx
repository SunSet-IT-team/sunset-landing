import { Metadata } from 'next';

/**
 * Лайяут для страниц c контентом
 */
export default function CatalogPagesLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <main className="mr-auto w-full md:w-[75%] pt-6 mb-8">{children}</main>;
}
