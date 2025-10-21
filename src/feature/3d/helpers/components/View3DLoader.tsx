'use client';

import { View } from '@/src/components/CanvasPortal/View';
import { useState, Suspense, useEffect, ReactElement } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

interface View3DLoaderProps {
    /** Компонент 3D, который будет отображаться */
    children: ReactElement<any, any>;
    /** Опционально delay перед показом, мс */
    delay?: number;
    /** Класс для контейнера */
    className?: string;
}

const View3DLoader = ({ children, className }: View3DLoaderProps) => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        let timer = null;
        if ('requestIdleCallback' in window) {
            requestIdleCallback(() => setMounted(true));
        } else {
            timer = setTimeout(() => setMounted(true), 800);
        }

        return () => clearTimeout(timer);
    }, []);

    if (!mounted) return null;

    return (
        <View className={className}>
            <Suspense fallback={null}>
                <ErrorBoundary fallback={null}>{children}</ErrorBoundary>
            </Suspense>
        </View>
    );
};

export default View3DLoader;
