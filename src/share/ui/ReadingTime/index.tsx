import { twMerge } from 'tailwind-merge';
import { Timer } from 'lucide-react';

interface ReadingTimeProps {
    className?: string;
    readingMinutes: number;
}

/**
 * Время прочтения записи
 */
const ReadingTime = ({ className, readingMinutes }: ReadingTimeProps) => {
    return (
        <div className="flex flex-row gap-2 items-center">
            <Timer size={20} />
            <span
                className={twMerge(
                    'text font-bold flex justify-center items-center mt-1',
                    className,
                )}>
                {Math.ceil(readingMinutes)} мин
            </span>
        </div>
    );
};

export default ReadingTime;
