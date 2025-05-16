import { LogoAnimationModelWithLight } from '@/src/components/Models/LogoAnimationModel/LogoAnimationModelWithLight';
import { View } from '@react-three/drei';
import { Metadata } from 'next';
import { FC, Suspense } from 'react';

export const metadata: Metadata = {
    title: 'Загрузка...',
    description: 'Подождите, идёт загрузка',
};

const Waiting: FC = () => {
    return (
        <div className="flex flex-col px-20 h-full w-full relative">
            {/* @ts-ignore */}
            <View className="absolute w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                <Suspense fallback={null}>
                    <LogoAnimationModelWithLight />
                </Suspense>
            </View>
        </div>
    );
};

export default Waiting;
