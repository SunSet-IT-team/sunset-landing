import { View } from '@/src/components/CanvasPortal/View';
import CubesModelWithLight from '@/src/share/models/CubesModel/CubesModelWithLight';
import { Metadata } from 'next';
import { FC, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

export const metadata: Metadata = {
    title: 'Страница не найдена',
    description: 'Что-то пошло не так, страница не найдена',
};

const Custom404: FC = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center h-full relative z-10">
                <p className="heading text-7xl">404</p>
                <p className="text">Что-то пошло не так!</p>
            </div>
            <View className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-full h-full">
                <Suspense fallback={null}>
                    <ErrorBoundary fallback={null}>
                        <CubesModelWithLight />
                    </ErrorBoundary>
                </Suspense>
            </View>
        </>
    );
};

export default Custom404;
