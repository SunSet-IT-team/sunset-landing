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
            <div className="relative flex flex-grow md:flex-grow-[initial] items-center h-8 md:h-auto">
                {/* Иконка лупы */}
                <Search
                    size={25}
                    className="absolute left-3 text-neutral-500 pointer-events-none"
                />

                {/* Сам input */}
                <input
                    ref={ref}
                    type="search"
                    className={twMerge(
                        'bg-grey w-full rounded-[6px] pl-12 pr-2 py-1 outline-none text cursor-target placeholder:text-neutral-400 self-stretch',
                        className,
                    )}
                    {...rest}
                />
            </div>
        );
    },
);

export default SearchInput;
