'use client';

import { FC, ReactNode } from 'react';
import { Pagination } from '@/src/share/ui/Pagination/ui';
import { PaginationProvider } from '@/src/share/ui/Pagination/ui/PaginationProvider';
import { useGetItemsPerPage } from '@/src/share/ui/Pagination/hooks/useGetItemsPerPage';
import { useServicesQuery } from '@/src/entities/service/model/useServicesQuery';
import { useSearchInput } from '@/src/share/hooks/useSearchInput';
import { usePagination } from '@/src/share/ui/Pagination/hooks/usePagination';

interface Props {
    children: ReactNode;
}

/**
 * Компонент пагинации для страницы услуг
 */
export const ServicesPagination: FC<Props> = ({ children }) => {
    const itemsPerPage = useGetItemsPerPage({
        '(min-width: 1024px)': 1,
        '(min-width: 768px) and (max-width: 1024px)': 1,
        '(max-width: 768px)': 1,
    });

    return (
        <PaginationProvider itemsPerPage={itemsPerPage}>
            {children}
            <Pagination className="mt-8 md:mt-16" />
        </PaginationProvider>
    );
};
