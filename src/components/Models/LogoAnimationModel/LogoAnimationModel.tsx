'use client';
import { useAnimations, useGLTF } from '@react-three/drei';
import React, { FC, useEffect } from 'react';
import * as THREE from 'three';

import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
    nodes: {
        Сфера: THREE.Mesh;
        Сфера001: THREE.Mesh;
        Сфера002: THREE.Mesh;
        Сфера003: THREE.Mesh;
        Сфера004: THREE.Mesh;
    };
    materials: {
        ['Материал.001']: THREE.MeshStandardMaterial;
        ['Материал.003']: THREE.MeshStandardMaterial;
        ['Материал.004']: THREE.MeshStandardMaterial;
        ['Материал.006']: THREE.MeshStandardMaterial;
        ['Материал.005']: THREE.MeshStandardMaterial;
    };
};
const LogoAnimationModel: FC = (props) => {
    const group = React.useRef();
    const { nodes, materials, animations } = useGLTF(
        '/models/logo_animation/logo_animation.glb',
    ) as GLTFResult;
    const { actions, names } = useAnimations(animations, group);

    // useEffect(() => {
    // 	names.forEach(animation => {
    // 		actions?.[animation]?.play()
    // 	})
    // }, [actions, names])

    return (
        <group ref={group} {...props} dispose={null} position={[0, -2, 0]} scale={3.2}>
            <group name="Scene" rotation={[-0, 1.2, 0]}>
                <mesh
                    name="Сфера"
                    geometry={nodes.Сфера.geometry}
                    material={materials['Материал.006']}
                    position={[0.007, 0.557, 0.005]}
                    rotation={[Math.PI, -0.023, 0]}
                    scale={[-0.121, -0.696, -0.696]}
                />
                <mesh
                    name="Сфера001"
                    geometry={nodes.Сфера001.geometry}
                    material={materials['Материал.001']}
                    position={[0.295, 0.557, 0.005]}
                    rotation={[Math.PI, -0.023, 0]}
                    scale={[-0.093, -0.536, -0.536]}
                />
                <mesh
                    name="Сфера002"
                    geometry={nodes.Сфера002.geometry}
                    material={materials['Материал.004']}
                    position={[-0.526, 0.553, 0.005]}
                    rotation={[0, 0.023, -Math.PI]}
                    scale={[-0.061, -0.349, -0.348]}
                />
                <mesh
                    name="Сфера003"
                    geometry={nodes.Сфера003.geometry}
                    material={materials['Материал.005']}
                    position={[-0.298, 0.557, 0.005]}
                    rotation={[0, 0.023, -Math.PI]}
                    scale={[-0.093, -0.536, -0.536]}
                />
                <mesh
                    name="Сфера004"
                    geometry={nodes.Сфера004.geometry}
                    material={materials['Материал.003']}
                    position={[0.523, 0.553, 0.005]}
                    rotation={[Math.PI, -0.023, 0]}
                    scale={[-0.061, -0.349, -0.348]}
                />
            </group>
        </group>
    );
};

useGLTF.preload('/models/logo_animation/logo_animation.glb');
export default LogoAnimationModel;
