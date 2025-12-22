'use client';

import { PostContent } from '@/src/share/types/share';
import { useState, useEffect } from 'react';
import { WPError } from '../types/main';

export interface ContentQueryResult<T extends PostContent> {
    data: T[];
    totalPages: number;
    isLoading: boolean;
    error: WPError | null;
}

interface ContentFetcherParams {
    page?: number;
    perPage?: number;
    search?: string;
}

export interface UseContentQueryProps<T extends PostContent> {
    fetcher: (params: ContentFetcherParams) => Promise<{
        data: any[];
        totalPages: number;
    }>;
    mapper: (dto: any) => T;

    page?: number;
    perPage?: number;
    search?: string;

    initialPage?: number;
    initialSearch?: string;
    initialTotalPages?: number;
    initialData?: T[];
}

/**
 * Кор-функция для создания функций для запроса данных с сервера
 */
export function useContentQuery<T extends PostContent>({
    fetcher,
    mapper,
    page = 1,
    perPage = 12,
    search = '',
    initialPage = 1,
    initialSearch = '',
    initialTotalPages = 1,
    initialData = [],
}: UseContentQueryProps<T>) {
    const [data, setData] = useState<T[]>(initialData);
    const [totalPages, setTotalPages] = useState(initialTotalPages);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<WPError | null>(null);

    const isInitialQuery = page === initialPage && search === initialSearch;

    useEffect(() => {
        // Если изначальный запос - то ничего запрашивать не нужно
        if (isInitialQuery) {
            setData(initialData);
            return;
        }

        let cancelled = false;

        (async () => {
            setIsLoading(true);
            setError(null);

            try {
                const res = await fetcher({ page, perPage, search });
                if (!cancelled) {
                    setData(res.data.map(mapper));
                    setTotalPages(res.totalPages);
                }
            } catch (e) {
                if (!cancelled) setError(e as WPError);
            } finally {
                if (!cancelled) setIsLoading(false);
            }
        })();

        return () => {
            cancelled = true;
        };
    }, [page, perPage, search, isInitialQuery]);

    return { data, totalPages, isLoading, error };
}
