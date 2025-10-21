'use client';

import { Float } from '@react-three/drei';
import { FC } from 'react';
import { DynamicTriangleModel } from '..';
import { ModelSwitcher } from '../helpers/ModelSwitcher';

const TriangleModelWithLight: FC<{ active?: boolean }> = ({ active = true }) => {
    return (
        <>
            <directionalLight
                position={[-1.41508, -0.991563, 0.917187]}
                intensity={30}
                rotation={[0.949597, -0.375777, -1.02032]}
                color="#FF5406"
            />
            <directionalLight
                position={[0.149532, -0.263762, 2.62549]}
                intensity={30}
                rotation={[0.949597, -0.375777, -1.02032]}
                color="#FF5406"
            />
            <directionalLight
                position={[2.96206, 2.70748, 0.751484]}
                intensity={30}
                rotation={[-1.29908, -1.58974, -1.14776]}
                color="#FF5406"
            />
            <directionalLight
                position={[-0.796234, -2.19012, 1.84228]}
                intensity={30}
                rotation={[1.05609, 0.061284, -0.357682]}
                color="#FF5406"
            />
            <directionalLight
                position={[1.56781, 4.67911, 2.73073]}
                intensity={30}
                rotation={[-0.542054, -1.17824, -1.12879]}
                color="#2B00FF"
            />

            <pointLight position={[-1.88585, 0.489106, 1.81141]} intensity={30} color="#2B00FF" />

            <pointLight position={[-0.849573, 1.79321, 2.09783]} intensity={30} color="#fff" />

            <pointLight position={[2.05722, -0.403353, 0.501271]} intensity={30} color="#2B00FF" />

            <pointLight position={[-0.417448, 0.985976, 1.69314]} intensity={30} color="#fff" />

            <pointLight position={[-0.310308, 0.487446, 1.97921]} intensity={30} color="#fff" />

            <pointLight position={[1.74569, 1.34236, -1.15676]} intensity={30} color="#fff" />

            <pointLight position={[1.68445, 1.97305, 0.807406]} intensity={30} color="#2B00FF" />

            <pointLight position={[0.182547, 0.151176, -0.216293]} intensity={30} color="#2B00FF" />

            <pointLight
                position={[-0.541427, -0.259984, -0.160818]}
                intensity={30}
                color="#FF5000"
            />

            <pointLight position={[0.546766, 0.856733, 0.771385]} intensity={30} color="#2B00FF" />
            <Float speed={2} rotationIntensity={0.6} floatIntensity={0.6}>
                <ModelSwitcher show={active}>
                    <DynamicTriangleModel />
                </ModelSwitcher>
            </Float>
        </>
    );
};

export default TriangleModelWithLight;
