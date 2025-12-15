'use client';

import { FC, ReactNode } from 'react';
import { Pagination } from '@/src/share/ui/Pagination/ui';
import { PaginationProvider } from '@/src/share/ui/Pagination/ui/PaginationProvider';

interface Props {
    children: ReactNode;
}

/**
 * Компонент пагинации для страницы услуг
 */
export const ServicesPagination: FC<Props> = ({ children }) => {
    // const itemsPerPage = useGetItemsPerPage({
    //     '(min-width: 1024px)': 12,
    //     '(min-width: 768px) and (max-width: 1024px)': 8,
    //     '(max-width: 768px)': 5,
    // });

    return (
        <PaginationProvider itemsPerPage={12}>
            {children}
            <Pagination className="mt-8 md:mt-16" />
        </PaginationProvider>
    );
};
