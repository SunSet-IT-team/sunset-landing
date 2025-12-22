'use client';
import { Suspense, useState } from 'react';
import { ContentMode, PostContent } from '@/src/share/types/share';
import SearchAndToggle from './SearchAndToggle';
import GridContent from './GridContent';
import { twMerge } from 'tailwind-merge';

interface ToggleGridContentProps {
    /**
     * Класс
     */
    className?: string;

    /**
     * Данные для показа
     */
    data?: PostContent[];

    /**
     * Обработчик для поиска
     */
    onChangeSearch?: (s: string) => void;

    /**
     * Заголовок
     */
    title?: string;

    /**
     * Идёт ли загрузка
     */
    isLoading?: boolean;
}

/**
 * Вывод контента с переключением между листом и таблицей
 */
const ToggleGridContent = ({
    className,
    data = [],
    onChangeSearch,
    isLoading,
    title = 'Без названия',
}: ToggleGridContentProps) => {
    // Тип отображения
    const [mode, setMode] = useState<ContentMode>('list');

    return (
        <>
            <div
                className={twMerge(
                    'mb-4 flex flex-col gap-4 md:gap-auto md:flex-row md:items-center justify-between',
                    className,
                )}>
                <h1 className="main-heading mr-[15px]">{title}</h1>
                <Suspense
                    fallback={
                        <div className="flex flex-row gap-4 md:gap-8 justify-between">
                            <div className="w-64 h-10 bg-gray-200 animate-pulse rounded" />
                            <div className="w-20 h-10 bg-gray-200 animate-pulse rounded" />
                        </div>
                    }>
                    <SearchAndToggle
                        onSearchChange={onChangeSearch}
                        onModeChange={setMode}
                        defaultMode={mode}
                    />
                </Suspense>
            </div>
            <GridContent isLoading={isLoading} data={data} mode={mode} className="pt-8" />
        </>
    );
};

export default ToggleGridContent;
