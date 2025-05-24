import { Float } from '@react-three/drei';
import { FC } from 'react';
import { DynamicBallModel } from '..';
import { ModelSwitcher } from '../helpers/ModelSwitcher';

const BallModelWithLight: FC<{ active?: boolean }> = ({ active = true }) => {
    return (
        <>
            <directionalLight
                intensity={20}
                color="#FF5406"
                position={[-1.41508, -0.991563, 0.917187]}
                rotation={[0.949597, -0.375777, -1.02032]}
            />

            <directionalLight
                intensity={20}
                color="#FF5406"
                position={[0.149532, -0.263762, 2.62549]}
                rotation={[0.949597, -0.375777, -1.02032]}
            />

            <directionalLight
                intensity={20}
                color="#FF5406"
                position={[2.96206, 2.70748, 0.751484]}
                rotation={[-1.29908, -1.58974, -1.14776]}
            />

            <directionalLight
                intensity={20}
                color="#FF5406"
                position={[-0.796234, -2.19012, 1.84228]}
                rotation={[1.05609, 0.061284, -0.357682]}
            />

            <directionalLight
                intensity={20}
                color="#2B00FF"
                position={[1.56781, 4.67911, 2.73073]}
                rotation={[-0.542054, -1.17824, -1.12879]}
            />
            <pointLight
                intensity={20}
                color="#2300ff"
                position={[0.547, 0.771, -0.857]}
                rotation={[-Math.PI / 2, 0, 0]}
            />
            <pointLight
                intensity={20}
                color="#2300ff"
                position={[-1.886, 1.811, -0.489]}
                rotation={[-Math.PI / 2, 0, 0]}
            />
            <pointLight
                intensity={20}
                color="#fbffeb"
                position={[-0.85, 2.098, -1.793]}
                rotation={[-Math.PI / 2, 0, 0]}
            />
            <pointLight
                intensity={20}
                color="#2300ff"
                position={[2.057, 0.501, 0.403]}
                rotation={[-Math.PI / 2, 0, 0]}
            />
            <pointLight
                intensity={20}
                color="#fbffeb"
                position={[-0.417, 1.693, -0.986]}
                rotation={[-Math.PI / 2, 0, 0]}
            />
            <pointLight
                intensity={20}
                color="#fbffeb"
                position={[-0.31, 1.979, -0.487]}
                rotation={[-Math.PI / 2, 0, 0]}
            />
            <pointLight
                intensity={20}
                color="#fbffeb"
                position={[1.746, -1.157, -1.342]}
                rotation={[-Math.PI / 2, 0, 0]}
            />
            <pointLight
                intensity={20}
                color="#2300ff"
                position={[1.684, 0.807, -1.973]}
                rotation={[-Math.PI / 2, 0, 0]}
            />
            <pointLight
                intensity={20}
                color="#2300ff"
                position={[0.183, -0.216, -0.151]}
                rotation={[-Math.PI / 2, 0, 0]}
            />
            <pointLight
                intensity={20}
                color="#ff5000"
                position={[-0.541, -0.161, 0.26]}
                rotation={[-Math.PI / 2, 0, 0]}
            />

            <Float speed={2} rotationIntensity={0.6} floatIntensity={0.6}>
                <ModelSwitcher show={active}>
                    <DynamicBallModel />
                </ModelSwitcher>
            </Float>
        </>
    );
};

export default BallModelWithLight;
