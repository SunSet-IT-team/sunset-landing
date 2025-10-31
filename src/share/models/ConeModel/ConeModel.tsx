'use client';
import { useGLTF } from '@react-three/drei';
import { FC, useEffect, useRef } from 'react';
import * as THREE from 'three';

import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
    nodes: {
        Конус: THREE.Mesh;
    };
    materials: {
        ['Материал.006']: THREE.MeshStandardMaterial;
    };
};

useGLTF.preload('/models/cone/cone.glb');

const ConeModel: FC = (props) => {
    const { scene } = useGLTF('/models/cone/cone.glb') as GLTFResult;

    const ref = useRef<THREE.Object3D>(null);

    useEffect(() => {
        if (!ref.current) return;

        // Включаем прозрачность у всех материалов
        ref.current.traverse((child) => {
            if (child instanceof THREE.Mesh && child.material) {
                child.material.transparent = true;
            }
        });
    }, []);

    return (
        <primitive
            ref={ref}
            object={scene}
            scale={4}
            rotation={[-1.25, 2.66, -0.62]}
            position={[0.075, 0.18, 4.62]}
        />
    );
};

export default ConeModel;
