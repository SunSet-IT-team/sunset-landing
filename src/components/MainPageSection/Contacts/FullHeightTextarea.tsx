'use client';
import { FC } from 'react';
import { IProps as TextareaProps } from '@/src/share/ui/Input/Textarea';
import { twMerge } from 'tailwind-merge';

interface IProps extends TextareaProps {
    isFullHeight: boolean;
}

const FullHeightTextarea: FC<IProps> = ({
    label,
    isValid = true,
    isFullHeight = false,
    className,
    ...rest
}) => {
    return (
        <div
            className={twMerge(
                'w-full flex flex-col flex-end justify-end',
                'transition-[padding] duration-300 ease',
                isFullHeight ? 'p-0 delay-0 h-full' : 'delay-[500ms]',
            )}>
            <label
                className={twMerge(
                    'flex flex-col gap-2',
                    'transition-[height] duration-300 ease',
                    isFullHeight ? 'h-full delay-[500ms]' : 'h-[121px] lg:h-[176px] delay-[0ms]',
                )}>
                <span className="heading-h3">{label}</span>
                <textarea
                    className={twMerge(
                        'bg-grey w-full rounded outline-none px-2 pt-1 pb-1 resize-none text h-full cursor-target',
                        'transition-[opacity] ease',
                        isFullHeight
                            ? 'opacity-100 delay-0 rounded-t-sm rounded-b-[0]'
                            : 'opacity-90 delay-[500ms]',
                        !isValid && 'border-2 border-orange',
                        className,
                    )}
                    {...rest}></textarea>
            </label>
            <button
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                }}
                className={twMerge(
                    'transition-all duration-300 ease overflow-hidden cursor-target',
                    'w-full bg-orange rounded-b-sm',
                    isFullHeight ? 'max-h-[500px] delay-[500ms]' : 'max-h-0',
                )}>
                Готово
            </button>
        </div>
    );
};

export default FullHeightTextarea;
