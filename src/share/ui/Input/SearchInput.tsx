'use client';
import { InputHTMLAttributes, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { Search } from 'lucide-react';
import { X } from 'lucide-react';

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
    onClickClear: () => void;
    hasValue: boolean;
}

/**
 * Поле поиска
 */
const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
    ({ className, hasValue, onClickClear, ...rest }, ref) => {
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
                        'bg-grey w-full rounded-[6px] pl-12 pr-8 py-1 outline-none text cursor-target placeholder:text-neutral-400 self-stretch',
                        className,
                    )}
                    {...rest}
                />
                {hasValue && (
                    <X size={20} className="absolute right-2 text-orange" onClick={onClickClear} />
                )}
            </div>
        );
    },
);

export default SearchInput;
