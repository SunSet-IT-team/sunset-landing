import { forwardRef, HTMLAttributes, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

interface IProps extends HTMLAttributes<HTMLDivElement> {}

const Container = forwardRef<HTMLDivElement, PropsWithChildren<IProps>>(
    ({ children, className, ...rest }, ref) => {
        return (
            <div className={twMerge('max-w-[1440px] mx-auto px-10', className)} {...rest} ref={ref}>
                {children}
            </div>
        );
    },
);

export default Container;
