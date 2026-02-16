'use client';
import { ContentMode, PostContent } from '@/src/share/types/share';
import Card from '@/src/share/ui/Card';
import { twMerge } from 'tailwind-merge';
import { CardSkeleton } from '@/src/share/ui/Card/Skeleton';

interface GridContentProps {
    className?: string;

    /**
     * Идёт ли загрузка
     */
    isLoading?: boolean;

    /**
     * Есть ли ошибка
     */
    isError?: boolean;

    /**
     * Данные для отрисовки
     */
    data?: PostContent[];

    /**
     * Тип отображения
     */
    mode?: ContentMode;

    /**
     * Количесто плейсохледров загрузки
     */
    numberPlaceholderCard?: number;

    /**
     * Slug для записей
     */
    postSlug?: string;
}

/**
 * Вывод контента с переключением между листом и таблицей
 */
const GridContent = ({
    className,
    isLoading = false,
    isError = false,
    data = [],
    mode = 'list',
    postSlug = '',
    numberPlaceholderCard = 6,
}: GridContentProps) => {
    let content: React.ReactNode;

    if (isLoading) {
        content = Array.from({ length: numberPlaceholderCard }).map((_, i) => (
            <CardSkeleton type={mode === 'grid' ? 'col' : 'row'} key={i} />
        ));
    } else if (!!isError) {
        content = <p className="heading-h3">Произошла ошибка при загрузке данных</p>;
    } else if (!data.length) {
        content = <p className="heading-h3">Ничего не нашлось</p>;
    } else {
        content = data.map(({ id, url, ...post }) => (
            <Card
                {...post}
                url={`${postSlug}/${post.slug}`}
                type={mode === 'grid' ? 'col' : 'row'}
                key={id}
                src={post.thumbnail ? post.thumbnail.url : ''}
            />
        ));
    }

    return (
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
    );
};

export default GridContent;
