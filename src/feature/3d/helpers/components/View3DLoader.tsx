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
        const timer = setTimeout(() => setMounted(true), 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <View className={className}>
            {mounted && (
                <Suspense fallback={null}>
                    <ErrorBoundary fallback={null}>{children}</ErrorBoundary>
                </Suspense>
            )}
        </View>
    );
};

export default View3DLoader;
