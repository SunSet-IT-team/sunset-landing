import BallPreview from '@/src/assets/images/ball-preview.png';
import { useTexture } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

export const BallModelPlaceholder = () => {
    const ref = useRef();
    const texture = useTexture(BallPreview.src);

    return (
        <mesh ref={ref} scale={[8, 8, 8]}>
            <planeGeometry args={[1, 1]} />
            <meshBasicMaterial map={texture} transparent={true} alphaTest={0.01} />
        </mesh>
    );
};
