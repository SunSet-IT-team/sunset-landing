// SearchAndToggle.tsx
'use client';
import SearchInput from '@/src/share/ui/Input/SearchInput';
import Toggler from './Toggler';
import { useSearchInput } from '@/src/share/hooks/useSearchInput';
import { ChangeEvent } from 'react';
import { ContentMode } from '@/src/share/types/share';

interface SearchAndToggleProps {
    onSearchChange?: (value: string) => void;
    onModeChange: (mode: ContentMode) => void;
    defaultMode: ContentMode;
}

const SearchAndToggle = ({ onSearchChange, onModeChange, defaultMode }: SearchAndToggleProps) => {
    const { value: query, setValue: setQuery } = useSearchInput();

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuery(value);
        onSearchChange?.(value);
    };

    return (
        <div className="flex flex-row gap-4 md:gap-8 justify-between">
            <SearchInput value={query} onChange={handleSearchChange} />
            <Toggler onChange={onModeChange} defaultMode={defaultMode} />
        </div>
    );
};

export default SearchAndToggle;
