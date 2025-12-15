'use client';
import { ContentMode } from '@/src/share/types/share';
import Card from '@/src/share/ui/Card';
import SearchInput from '@/src/share/ui/Input/SearchInput';
import { ChangeEvent, Suspense, useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import Toggler from './Toggler';
import { usePagination } from '@/src/share/ui/Pagination/hooks/usePagination';
import { useServicesQuery } from '@/src/entities/service/model/useServicesQuery';
import { useSearchInput } from '@/src/share/hooks/useSearchInput';
import { CardSkeleton } from '@/src/share/ui/Card/Skeleton';
import { Service } from '@/src/entities/service/api/types';
import { useInputDebounce } from '@/src/share/hooks/useInputDebounce';
import SearchAndToggle from './SearchAndToggle';

interface ToggleGridContentProps {
    className?: string;
    initialServices: Service[];
    initialTotalPages: number;
}

/**
 * Вывод контента с переключением между листом и таблицей
 */
const ToggleGridContent = ({
    className,
    initialServices,
    initialTotalPages,
}: ToggleGridContentProps) => {
    const [mode, setMode] = useState<ContentMode>('list');
    const [searchQuery, setSearchQuery] = useState('');
    const debouncedQuery = useInputDebounce(searchQuery);

    const { page, setPage, itemsPerPage, setTotalPages } = usePagination();

    const {
        data: services = initialServices,
        totalPages = initialTotalPages,
        isLoading,
        error,
    } = useServicesQuery({
        page,
        perPage: itemsPerPage,
        search: debouncedQuery,
    });

    useEffect(() => {
        if (error?.wpCode === 'rest_post_invalid_page_number') {
            setPage(1);
        }
    }, [error, setPage]);

    useEffect(() => {
        if (typeof totalPages === 'number') setTotalPages(totalPages);
    }, [totalPages]);

    let content: React.ReactNode;

    if (isLoading) {
        content = Array.from({ length: itemsPerPage }).map((_, i) => (
            <CardSkeleton type={mode === 'grid' ? 'col' : 'row'} key={i} />
        ));
    } else if (!!error) content = 'Произошла ошибка при загрузке данных';
    else if (!services.length) {
        content = 'Ничего не нашлось';
    } else {
        content = services.map(({ id, url, ...post }) => (
            <Card
                {...post}
                url={`/services/${post.slug}`}
                type={mode === 'grid' ? 'col' : 'row'}
                key={id}
            />
        ));
    }

    return (
        <>
            <div className="mb-4 flex flex-col gap-4 md:gap-auto md:flex-row md:items-center justify-between">
                <h1 className="main-heading mr-[15px]">Услуги</h1>
                <Suspense
                    fallback={
                        <div className="flex flex-row gap-4 md:gap-8 justify-between">
                            <div className="w-64 h-10 bg-gray-200 animate-pulse rounded" />
                            <div className="w-20 h-10 bg-gray-200 animate-pulse rounded" />
                        </div>
                    }>
                    <SearchAndToggle
                        onSearchChange={setSearchQuery}
                        onModeChange={setMode}
                        defaultMode={mode}
                    />
                </Suspense>
            </div>
            <div className={twMerge(className)}>
                <div
                    className={twMerge(
                        mode == 'list'
                            ? 'flex flex-col gap-5'
                            : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4',
                    )}>
                    {content}
                </div>
            </div>
        </>
    );
};

export default ToggleGridContent;
