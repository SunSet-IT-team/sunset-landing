'use client';

import { useState } from 'react';
import { LayoutGrid, List } from 'lucide-react';
import { cn } from '@/lib/utils'; // убери, если не используешь clsx
import { ContentMode } from '@/src/share/types/share';

interface TogglerProps {
    className?: string;
    onChange?: (mode: ContentMode) => void;
    defaultMode?: ContentMode;
}

/**
 * Переключатель контента (switcher)
 */
const Toggler = ({ className, onChange, defaultMode = 'grid' }: TogglerProps) => {
    const [mode, setMode] = useState<ContentMode>(defaultMode);

    const handleToggle = () => {
        const newMode = mode === 'grid' ? 'list' : 'grid';
        setMode(newMode);
        onChange?.(newMode);
    };

    return (
        <button
            type="button"
            onClick={handleToggle}
            aria-label="Toggle view mode"
            className={cn(
                'flex items-center justify-between gap-4 rounded-[6px] h-8 md:h-auto bg-neutral-900/70 text-white p-2 backdrop-blur-sm shadow-inner border border-neutral-700 transition-all duration-300 hover:bg-neutral-800 active:scale-[0.97]',
                className,
            )}>
            {/* Grid icon */}
            <div
                className={cn(
                    'flex items-center justify-center transition-all duration-300 h-4 md:h-auto',
                    mode === 'grid'
                        ? 'scale-125 text-white'
                        : 'scale-100 text-neutral-500 opacity-70',
                )}>
                <LayoutGrid className="h-4 w-4 md:h-[20px] md:w-[20px]" />
            </div>

            {/* Switch indicator (optional visual cue) */}
            <div
                className={cn(
                    'h-6 w-[2px] rounded-full bg-neutral-700 transition-all duration-300',
                    mode === 'grid' ? 'translate-x-0' : 'translate-x-[0]',
                )}></div>

            {/* List icon */}
            <div
                className={cn(
                    'flex items-center justify-center transition-all duration-300 h-4 md:h-auto',
                    mode === 'list'
                        ? 'scale-125 text-white'
                        : 'scale-100 text-neutral-500 opacity-70',
                )}>
                <List className="h-4 w-4 md:h-[20px] md:w-[20px]" />
            </div>
        </button>
    );
};

export default Toggler;
