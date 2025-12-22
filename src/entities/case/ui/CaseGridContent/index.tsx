'use client';
import { PostContent } from '@/src/share/types/share';
import { useEffect, useState } from 'react';
import { usePagination } from '@/src/share/ui/Pagination/hooks/usePagination';
import { useInputDebounce } from '@/src/share/hooks/useInputDebounce';
import ToggleGridContent from '@/src/share/ui/ToggleGridContent';
import { useCasesQuery } from '../../model/useCasesQuery';

interface CaseGridContentProps {
    /**
     * Класс
     */
    className?: string;

    /**
     * Изначальные данные для показа
     */
    initialData?: PostContent[];

    /**
     * Изначальное количество страниц
     */
    initialTotalPages?: number;

    /**
     * Изначальная страница
     */
    initialPage?: number;
}

/**
 * Вывод контента с переключением между листом и таблицей
 */
const CaseGridContent = ({
    className,
    initialData = [],
    initialTotalPages = 1,
    initialPage = 1,
}: CaseGridContentProps) => {
    // Строка запроса
    const [searchQuery, setSearchQuery] = useState('');

    // Поиск отдебаунстный
    const debouncedQuery = useInputDebounce(searchQuery);

    // Данные пагинации
    const { page, setPage, itemsPerPage, setTotalPages } = usePagination();

    const { data, totalPages, isLoading, error } = useCasesQuery({
        page,
        perPage: itemsPerPage,
        search: debouncedQuery,
        initialData,
        initialTotalPages,
        initialPage,
    });

    useEffect(() => {
        if (error?.wpCode === 'rest_post_invalid_page_number') {
            setPage(1);
        }
    }, [error, setPage]);

    useEffect(() => {
        if (typeof totalPages === 'number') setTotalPages(totalPages);
    }, [totalPages]);

    // При изменении поиска
    const onChangeSearch = (s: string) => {
        setSearchQuery(s);
        setPage(1);
    };

    return (
        <ToggleGridContent
            title="Кейсы"
            onChangeSearch={onChangeSearch}
            data={data}
            isLoading={isLoading}
            className={className}
        />
    );
};

export default CaseGridContent;
