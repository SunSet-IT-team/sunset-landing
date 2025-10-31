import { LogoAnimationModelWithLight } from '@/src/share/models/LogoAnimationModel/LogoAnimationModelWithLight';
import { View } from '@react-three/drei';
import { Metadata } from 'next';
import { FC, Suspense } from 'react';

export const metadata: Metadata = {
    title: 'Загрузка...',
    description: 'Подождите, идёт загрузка',
};

const Waiting: FC = () => {
    return <div className="flex flex-col px-20 h-full w-full relative"></div>;
};

export default Waiting;
