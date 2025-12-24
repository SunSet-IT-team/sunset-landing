import { Metadata } from 'next';

/**
 * Лайяут для страниц c контентом
 */
export default function CatalogPagesLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="w-full pt-6 mb-8 flex flex-row gap-10 overflow-x-clip relative">
            {children}
        </div>
    );
}
