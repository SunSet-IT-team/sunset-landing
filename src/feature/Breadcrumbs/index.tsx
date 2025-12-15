import Link from 'next/link';
import { Breadcrumb } from './types';
import clsx from 'clsx';

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
    return (
        <nav aria-label="Breadcrumb" className={clsx(className)}>
            <ol className="flex gap-2 text-sm text-gray-500">
                {items.map((item, index) => (
                    <li key={index} className="flex gap-2">
                        {item.href ? (
                            <Link
                                href={item.href}
                                className="text-breadcrumbs text-orange opacity-90">
                                {item.title}
                            </Link>
                        ) : (
                            <span className="text-breadcrumbs  opacity-70">{item.title}</span>
                        )}
                        {index < items.length - 1 && <span className="text-breadcrumbs">/</span>}
                    </li>
                ))}
            </ol>
        </nav>
    );
}
