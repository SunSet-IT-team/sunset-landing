'use client';

import { ContentMode } from '@/src/share/types/share';
import Toggler from './Toggler';
import { useState } from 'react';
import Card, { CardProps } from '@/src/share/ui/Card';
import { twMerge } from 'tailwind-merge';

interface ToggleGridContentProps {
    className?: string;
    data?: CardProps[];
}

/**
 * Вывод контента с переключением между листом и таблицей
 */
const ToggleGridContent = ({ data, className }: ToggleGridContentProps) => {
    const [mode, setMode] = useState<ContentMode>('list');

    return (
        <div className={twMerge(className)}>
            <div className="mb-4 flex flex-row items-center justify-end">
                <Toggler onChange={(mode) => setMode(mode)} defaultMode={mode} />
            </div>
            <div
                className={twMerge(
                    mode == 'list' ? 'flex flex-col gap-5' : 'grid grid-cols-3  gap-4',
                )}>
                {data.map((post) => (
                    <Card {...post} type={mode === 'grid' ? 'col' : 'row'} />
                ))}
            </div>
        </div>
    );
};

export default ToggleGridContent;
