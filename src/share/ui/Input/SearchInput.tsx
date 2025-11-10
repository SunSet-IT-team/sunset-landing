'use client';
import { InputHTMLAttributes, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { Search } from 'lucide-react'; // можно заменить на SVG вручную

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {}

/**
 * Поле поиска
 */
const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
    ({ className, ...rest }, ref) => {
        return (
            <div className="relative flex items-center">
                {/* Иконка лупы */}
                <Search
                    size={18}
                    className="absolute left-3 text-neutral-500 pointer-events-none"
                />

                {/* Сам input */}
                <input
                    ref={ref}
                    type="search"
                    className={twMerge(
                        'bg-grey w-full rounded pl-9 pr-2 py-1 outline-none text cursor-target placeholder:text-neutral-400',
                        className,
                    )}
                    {...rest}
                />
            </div>
        );
    },
);

export default SearchInput;
