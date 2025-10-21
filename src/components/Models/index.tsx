'use client';

import { Html } from '@react-three/drei';
import dynamic from 'next/dynamic';
import { BallModelPlaceholder } from './BallModel/BallModelPlaceholder';

export const DynamicHelmetModel = dynamic(() => import('./HelmetModel/HelmetModel'), {
    ssr: false,
});

export const DynamicTorModel = dynamic(() => import('./TorModel/TorModel'), {
    ssr: false,
    loading: () => null,
});

export const DynamicCubesModel = dynamic(() => import('./CubesModel/CubesModel'), { ssr: false });

export const DynamicConeModel = dynamic(() => import('./ConeModel/ConeModel'), {
    ssr: false,
    loading: () => null,
});

export const DynamicBallModel = dynamic(() => import('./BallModel/BallModel'), {
    ssr: false,
    loading: () => <BallModelPlaceholder />,
});

export const DynamicTriangleModel = dynamic(() => import('./TriangleModel/TriangleModel'), {
    ssr: false,
    loading: () => null,
});

export const DynamicLogoAnimationModel = dynamic(
    () => import('./LogoAnimationModel/LogoAnimationModel'),
    { ssr: false },
);

export const DynamicCircleModel = dynamic(() => import('./Circles/Circle'), {
    ssr: false,
});
