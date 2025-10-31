'use client';
import { useGLTF } from '@react-three/drei';
import { FC, useEffect, useRef } from 'react';

import * as THREE from 'three';

import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
    nodes: {
        Тор: THREE.Mesh;
    };
    materials: {
        ['Материал.006']: THREE.MeshStandardMaterial;
    };
};

useGLTF.preload('/models/tor/tor.glb');

const TorModel: FC = (props) => {
    const { nodes, materials } = useGLTF('/models/tor/tor.glb') as GLTFResult;

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
        <group {...props} dispose={null} ref={ref}>
            <mesh
                geometry={nodes['Тор'].geometry}
                material={materials['Материал.006']}
                position={[0, -0.2, 0]}
                rotation={[0.16, 1.1, 3.99]}
                scale={2.7}
            />
        </group>
    );
};

export default TorModel;
