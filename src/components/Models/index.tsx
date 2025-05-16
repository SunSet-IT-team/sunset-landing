'use client';

import dynamic from 'next/dynamic';

export const DynamicHelmetModel = dynamic(() => import('./HelmetModel/HelmetModel'), {
    ssr: false,
});

export const DynamicTorModel = dynamic(() => import('./TorModel/TorModel'), {
    ssr: false,
});

export const DynamicCubesModel = dynamic(() => import('./CubesModel/CubesModel'), { ssr: false });

export const DynamicConeModel = dynamic(() => import('./ConeModel/ConeModel'), {
    ssr: false,
});

export const DynamicBallModel = dynamic(() => import('./BallModel/BallModel'), {
    ssr: false,
});

export const DynamicTriangleModel = dynamic(() => import('./TriangleModel/TriangleModel'), {
    ssr: false,
});

export const DynamicLogoAnimationModel = dynamic(
    () => import('./LogoAnimationModel/LogoAnimationModel'),
    { ssr: false },
);

export const DynamicCircleModel = dynamic(() => import('./Circles/Circle'), {
    ssr: false,
});
