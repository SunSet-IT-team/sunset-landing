'use client';

import { twMerge } from 'tailwind-merge';
import { useActiveHeading } from './useActiveHeading';

/**
 * Элемент навигации
 */
export interface TocItem {
    id: string;
    title: string;
    level: 2 | 3 | 4;
}

interface TOCProps {
    className?: string;
    items: TocItem[];
}

/**
 * Table of content - вывод навигации по заголовкам
 */
const TOC = ({ className, items }: TOCProps) => {
    const activeId = useActiveHeading(items.map((i) => i.id));

    return (
        <div className="relative w-[280px] flex">
            <div className={twMerge('w-full h-fit sticky top-20', className)}>
                <h3 className="heading-h3 mb-4">Содержание</h3>
                <nav>
                    <ul className="flex flex-col gap-2">
                        {items.map((item) => (
                            <li key={item.id}>
                                <a
                                    href={`#${item.id}`}
                                    className={twMerge(
                                        'block rounded-lg py-2 px-4 text font-bold hover:bg-[#6f31da37]',
                                        'transition-all opacity-100',
                                        item.level === 3 ? 'pl-8' : item.level === 4 ? 'pl-12' : '',
                                        item.id === activeId
                                            ? 'bg-[#7031da70] hover:bg-[#7031da70] text-blue-50'
                                            : '',
                                    )}>
                                    {item.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default TOC;
