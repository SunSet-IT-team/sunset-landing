// PaginationInitializer.tsx
'use client';

import { useSearchParams } from 'next/navigation';
import { ReactNode, Suspense } from 'react';
import { PaginationProvider } from './PaginationProvider';
import { Pagination } from '.';

interface Props {
    children: ReactNode;
    itemsPerPage: number;
}

const PaginationInitializerContent = ({ children, itemsPerPage }: Props) => {
    const searchParams = useSearchParams();
    const initialPage = Math.max(1, Number(searchParams.get('page')) || 1);

    return (
        <PaginationProvider itemsPerPage={itemsPerPage} initialPage={initialPage}>
            {children}
        </PaginationProvider>
    );
};

export const PaginationInitializer = ({ children, itemsPerPage }: Props) => {
    return (
        <Suspense
            fallback={
                <PaginationProvider itemsPerPage={itemsPerPage} initialPage={1}>
                    {children}
                    <Pagination className="mt-8 md:mt-16" />
                </PaginationProvider>
            }>
            <PaginationInitializerContent itemsPerPage={itemsPerPage}>
                {children}
                <Pagination className="mt-8 md:mt-16" />
            </PaginationInitializerContent>
        </Suspense>
    );
};
