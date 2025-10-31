'use client';
import { InputHTMLAttributes, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
    isValid?: boolean;
}

const Field = forwardRef<HTMLInputElement, IProps>(
    ({ label, error = '', isValid = true, className, ...rest }, ref) => {
        return (
            <label className="flex flex-col">
                <span className="heading-h3 mb-2">{label}</span>
                <input
                    ref={ref}
                    className={twMerge(
                        'bg-grey w-full rounded outline-none px-2 py-1 text cursor-target',
                        !isValid && 'border-2 border-orange',
                        className,
                    )}
                    {...rest}
                />
                {!isValid && (
                    <span className="text-red-500 text">{error || 'Заполните поле верно'}</span>
                )}
            </label>
        );
    },
);

export default Field;
