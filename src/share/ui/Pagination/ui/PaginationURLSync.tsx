'use client';

import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';

interface PaginationURLSyncProps {
    page: number;
    itemsPerPage: number;
}

/**
 * Компонент для синхронизации пагинации с URL параметрами
 */
export const PaginationURLSync = ({ page, itemsPerPage }: PaginationURLSyncProps) => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        const newSearchParams = new URLSearchParams(searchParams.toString());
        if (page > 1) {
            newSearchParams.set('page', String(page));
        } else {
            newSearchParams.delete('page');
        }
        if (itemsPerPage > 1) {
            newSearchParams.set('perPage', String(itemsPerPage));
        } else {
            newSearchParams.delete('perPage');
        }

        router.replace(`${pathname}?${newSearchParams.toString()}`, {
            scroll: false,
        });
    }, [page, itemsPerPage, router, pathname, searchParams]);

    return null;
};
