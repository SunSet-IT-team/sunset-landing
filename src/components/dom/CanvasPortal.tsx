'use client';

import dynamic from 'next/dynamic';
import { FC, PropsWithChildren, useRef } from 'react';
const Scene = dynamic(() => import('..//canvas/Scene'), {
    ssr: false,
});

export const CanvasPortal: FC<PropsWithChildren> = ({ children }) => {
    const ref = useRef(null);

    return (
        <div
            ref={ref}
            style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                overflow: 'auto',
                touchAction: 'auto',
            }}>
            {children}
            <Scene
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    pointerEvents: 'none',
                    zIndex: '20',
                }}
                eventSource={ref}
                eventPrefix="client"
            />
        </div>
    );
};
