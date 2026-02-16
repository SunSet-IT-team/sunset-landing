'use client';

import { twMerge } from 'tailwind-merge';
import { useView } from '../model/useView';
import { Eye } from 'lucide-react';

interface ViewsProps {
    postId: number;
    initialViews: number;
    className?: string;
}

/**
 * Показывает количество просмотров
 */
export function Views({ postId, initialViews, className }: ViewsProps) {
    const views = useView({ postId, initialViews });

    return (
        <div className="flex flex-row gap-2 items-center">
            <Eye size={20} />
            <span
                className={twMerge(
                    'text font-bold flex justify-center items-center mt-1',
                    className,
                )}>
                {Math.ceil(views)}
            </span>
        </div>
    );
}
