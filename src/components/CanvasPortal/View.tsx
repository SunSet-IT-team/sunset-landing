'use client';

import { Three } from '@/src/helpers/components/Three';
import { View as ViewImpl } from '@react-three/drei';
import { forwardRef, HTMLAttributes, PropsWithChildren, useImperativeHandle, useRef } from 'react';

export const View = forwardRef<HTMLDivElement, PropsWithChildren<HTMLAttributes<HTMLDivElement>>>(
    ({ children, ...props }, ref) => {
        const localRef = useRef<HTMLDivElement | null>(null);

        useImperativeHandle(ref, () => localRef.current);

        return (
            <>
                <div ref={localRef} {...props} />
                <Three>
                    <ViewImpl track={localRef}>{children}</ViewImpl>
                </Three>
            </>
        );
    },
);
View.displayName = 'View';
