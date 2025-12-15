'use client';

import {
    createContext,
    useCallback,
    useEffect,
    useState,
    ReactNode,
    FC,
    SetStateAction,
    Suspense,
} from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { PaginationContext as PaginationContextType, PaginationOptions } from '../model/types';
import { PaginationURLSync } from './PaginationURLSync';

export const PaginationContext = createContext<PaginationContextType | null>(null);

interface BaseProps {
    children: ReactNode;
    options?: PaginationOptions;
    initialPage?: number; // Добавляем начальную страницу
}

interface DefaultProps extends BaseProps {
    itemsPerPage: number;
    setItemsPerPage?: never;
}

interface PerPageLikeStateProps extends BaseProps {
    itemsPerPage: number;
    setItemsPerPage: React.Dispatch<SetStateAction<number>>;
}

type Props = DefaultProps | PerPageLikeStateProps;

/**
 * Провайдер контекста для пагинации. Содержит все необходимые значения и callback для удобной
 * ее реализации. Требует уточнения totalPages при помощи setTotalPages для корректной работы (изначально = null)
 */
export const PaginationProvider: FC<Props> = ({
    children,
    itemsPerPage,
    setItemsPerPage,
    initialPage = 1,
}) => {
    const [page, setPage] = useState(initialPage);
    const [totalPages, setTotalPages] = useState<number | null>(null);

    // Корректируем максимальную возможную открытую страницу
    useEffect(() => {
        if (totalPages !== null && page > totalPages) {
            setPage(totalPages);
        }
    }, [itemsPerPage, totalPages, page]);

    const goNextPage = useCallback(() => {
        setPage((p) => (totalPages !== null && p < totalPages ? p + 1 : p));
    }, [totalPages]);

    const goPrevPage = useCallback(() => {
        setPage((p) => (p > 1 ? p - 1 : p));
    }, []);

    return (
        <PaginationContext.Provider
            value={{
                page,
                setPage,
                totalPages,
                setTotalPages,
                itemsPerPage,
                setItemsPerPage,
                goNextPage,
                goPrevPage,
            }}>
            <Suspense fallback={null}>
                <PaginationURLSync page={page} itemsPerPage={itemsPerPage} />
            </Suspense>
            {children}
        </PaginationContext.Provider>
    );
};
