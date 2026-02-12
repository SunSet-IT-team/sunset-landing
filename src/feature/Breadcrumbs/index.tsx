import Link from 'next/link';
import { Breadcrumb } from './types';
import clsx from 'clsx';
import Head from 'next/head';

interface Props {
    /**
     * Элементы для показа
     */
    items: Breadcrumb[];

    /**
     * Дополнительные css стили
     */
    className?: string;
}

/**
 * Хлебные крошки
 */
export default function Breadcrumbs({ items, className }: Props) {
    // Формируем JSON-LD
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items
            .map((item, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                name: item.title.replace(/<[^>]+>/g, ''), // убираем HTML теги
                item: item.href ? `${process.env.NEXT_PUBLIC_SITE_URL}${item.href}` : undefined,
            }))
            .filter((i) => i.item), // фильтруем элементы без ссылки
    };

    return (
        <>
            <Head>
                <script
                    type="application/ld+json"
                    // @ts-ignore
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </Head>
            <nav aria-label="Breadcrumb" className={clsx(className)}>
                <ol className="flex flex-wrap gap-2 text-sm text-gray-500">
                    {items.map((item, index) => (
                        <li key={index} className="flex gap-2">
                            {item.href ? (
                                <Link
                                    href={item.href}
                                    className="text-breadcrumbs text-orange opacity-90">
                                    {item.title}
                                </Link>
                            ) : (
                                <span
                                    className="text-breadcrumbs  opacity-70"
                                    dangerouslySetInnerHTML={{ __html: item.title }}></span>
                            )}
                            {index < items.length - 1 && (
                                <span className="text-breadcrumbs">/</span>
                            )}
                        </li>
                    ))}
                </ol>
            </nav>
        </>
    );
}
