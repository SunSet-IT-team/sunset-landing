'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC, useMemo } from 'react';
import Head from 'next/head';

export const Breadcrumbs: FC = () => {
    const pathname = usePathname();

    const breadcrumbs = useMemo(() => {
        if (!pathname) return [];
        const parts = pathname.split('/').filter(Boolean);
        return parts.map((part, index) => {
            const href = '/' + parts.slice(0, index + 1).join('/');
            const name = decodeURIComponent(part)
                .replace(/-/g, ' ')
                .replace(/\b\w/g, (l) => l.toUpperCase());
            return { name, href };
        });
    }, [pathname]);

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((bc, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: bc.name,
            item: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://example.com'}${bc.href}`,
        })),
    };

    if (breadcrumbs.length === 0) return null;

    return (
        <>
            {/* Микроразметка JSON-LD */}
            <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </Head>

            {/* Визуальные хлебные крошки */}
            <nav
                aria-label="breadcrumbs"
                className="text-sm text-gray-600 flex flex-wrap items-center gap-1">
                <Link href="/" className="hover:underline">
                    Главная
                </Link>
                {breadcrumbs.map((bc, i) => (
                    <span key={bc.href} className="flex items-center gap-1">
                        <span>/</span>
                        {i === breadcrumbs.length - 1 ? (
                            <span aria-current="page" className="font-medium text-gray-900">
                                {bc.name}
                            </span>
                        ) : (
                            <Link href={bc.href} className="hover:underline">
                                {bc.name}
                            </Link>
                        )}
                    </span>
                ))}
            </nav>
        </>
    );
};
