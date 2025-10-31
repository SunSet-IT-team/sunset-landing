import { FC } from 'react';
import { DynamicTorModel } from '..';
import { Float } from '@react-three/drei';
import { ModelSwitcher } from '../helpers/ModelSwitcher';

const TorModelWithLight: FC<{ active?: boolean }> = ({ active = true }) => {
    return (
        <>
            <directionalLight
                position={[-1.41508, -0.991563, 0.917187]}
                intensity={10}
                rotation={[0.949597, -0.375776, -1.02032]}
                color="#FF5406"
            />
            <directionalLight
                position={[0.149532, -0.263762, 2.62549]}
                intensity={10}
                rotation={[0.949597, -0.375777, -1.02032]}
                color="#a25b13"
            />
            <directionalLight
                position={[2.96206, 2.70748, 0.751484]}
                intensity={10}
                rotation={[-1.29908, -1.58974, -1.14776]}
                color="#a25b13"
            />
            <directionalLight
                position={[-0.796234, -2.19012, 1.84228]}
                intensity={40}
                rotation={[1.05609, 0.061284, -0.357682]}
                color="#6310ec"
            />
            <directionalLight
                position={[1.56781, 4.67911, 2.73073]}
                intensity={30}
                rotation={[-0.542054, -1.17824, -1.12879]}
                color="#8d2fb3"
            />
            <pointLight
                intensity={50}
                decay={2}
                color="#802669"
                position={[0.547, 0.771, -0.857]}
                rotation={[-Math.PI / 2, 0, 0]}
            />
            <pointLight
                intensity={50}
                decay={2}
                color="#802669"
                position={[-1.886, 1.811, -0.489]}
                rotation={[-Math.PI / 2, 0, 0]}
            />
            <pointLight
                intensity={50}
                decay={2}
                color="#fbffeb"
                position={[-0.85, 2.098, -1.793]}
                rotation={[-Math.PI / 2, 0, 0]}
            />
            <pointLight
                intensity={50}
                decay={2}
                color="#2300ff"
                position={[2.057, 0.501, 0.403]}
                rotation={[-Math.PI / 2, 0, 0]}
            />
            <pointLight
                intensity={50}
                decay={2}
                color="#fbffeb"
                position={[-0.417, 1.693, -0.986]}
                rotation={[-Math.PI / 2, 0, 0]}
            />
            <pointLight
                intensity={50}
                decay={2}
                color="#fbffeb"
                position={[-0.31, 1.979, -0.487]}
                rotation={[-Math.PI / 2, 0, 0]}
            />
            <pointLight
                intensity={50}
                decay={2}
                color="#802669"
                position={[1.746, -1.157, -1.342]}
                rotation={[-Math.PI / 2, 0, 0]}
            />
            <pointLight
                intensity={50}
                decay={2}
                color="#2300ff"
                position={[1.684, 0.807, -1.973]}
                rotation={[-Math.PI / 2, 0, 0]}
            />
            <pointLight
                intensity={50}
                decay={2}
                color="#2300ff"
                position={[0.183, -0.216, -0.151]}
                rotation={[-Math.PI / 2, 0, 0]}
            />
            <pointLight
                intensity={50}
                decay={2}
                color="#ff5000"
                position={[-0.541, -0.161, 0.26]}
                rotation={[-Math.PI / 2, 0, 0]}
            />
            <Float speed={2} rotationIntensity={0.6} floatIntensity={0.6}>
                <ModelSwitcher show={active}>
                    <DynamicTorModel />
                </ModelSwitcher>
            </Float>
        </>
    );
};

export default TorModelWithLight;
