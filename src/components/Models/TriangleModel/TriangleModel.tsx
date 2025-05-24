'use client';
import { useGLTF } from '@react-three/drei';
import { FC, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
    nodes: {
        Куб: THREE.Mesh;
    };
    materials: {
        ['Материал.006']: THREE.MeshStandardMaterial;
    };
};

useGLTF.preload('/models/services_models/triangle/triangle_compressed.glb');

const TriangleModel = () => {
    const { scene } = useGLTF(
        '/models/services_models/triangle/triangle_compressed.glb',
    ) as GLTFResult;

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
            opacity={0.1}
            ref={ref}
            object={scene}
            scale={3}
            position={[-0.05, -1.45, 0.1]}
            rotation={[0.339, 3.041, 0]}
        />
    );
};

export default TriangleModel;
