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
                'transition-[padding] duration-500 ease',
            )}>
            <label
                className={twMerge(
                    'flex flex-col gap-2',
                    'transition-[height] duration-500 ease',
                    isFullHeight
                        ? 'h-[30vh] md:h-[320px] lg:h-[384px] 3xl:h-[276px]'
                        : 'h-[71px] sm:h-[121px] lg:h-[124px] 3xl:h-[156px]',
                )}>
                <span className="heading-h3">{label}</span>
                <textarea
                    className={twMerge(
                        'bg-grey w-full rounded outline-none px-2 pt-1 pb-1 resize-none text h-full cursor-target',
                        'transition-all ease',
                        isFullHeight ? 'opacity-100rounded-t-sm rounded-b-[0]' : 'opacity-90',
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
                    'transition-all ease-in-out',
                    'w-full bg-orange rounded-b-sm overflow-hidden',
                    isFullHeight ? 'opacity-100 scale-y-100 mt-2' : 'opacity-0 scale-y-0 mt-0',
                )}
                style={{ transformOrigin: 'top' }}>
                Готово
            </button>
        </div>
    );
};

export default FullHeightTextarea;
