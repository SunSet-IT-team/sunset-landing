import { forwardRef, HTMLAttributes, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    type?: 'big' | 'small';
}

const Container = forwardRef<HTMLDivElement, PropsWithChildren<IProps>>(
    ({ children, className, type = 'big', ...rest }, ref) => {
        return (
            <div
                className={twMerge(
                    'mx-auto px-6 lg:px-10',
                    type == 'big' ? 'max-w-[1440px]' : 'max-w-[1280px] ',
                    className,
                )}
                {...rest}
                ref={ref}>
                {children}
            </div>
        );
    },
);

export default Container;
