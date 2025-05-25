import { useGLTF } from '@react-three/drei';
import React, { FC } from 'react';
import * as THREE from 'three';
import { GLTF } from 'three-stdlib';

type ActionName = 'Сфера.002Action.002';

interface GLTFAction extends THREE.AnimationClip {
    name: ActionName;
}

type GLTFResult = GLTF & {
    nodes: {
        Сфера002: THREE.Mesh;
    };
    materials: {
        ['Материал.004']: THREE.MeshStandardMaterial;
    };
    animations: GLTFAction[];
};

const Circle: FC<{
    id?: number;
    position: THREE.Vector3;
    rotation: THREE.Euler;
    scale: THREE.Vector3;
}> = ({ id, position, rotation, scale }) => {
    const group = React.useRef<THREE.Group>();
    const { nodes, materials } = useGLTF('/models/circle/circle.glb') as GLTFResult;

    return (
        <group ref={group} dispose={null} position={position} rotation={rotation} scale={scale}>
            <group name="Scene">
                <mesh
                    name="Сфера002"
                    geometry={nodes.Сфера002.geometry}
                    material={materials['Материал.004']}
                    position={[-0.526, 0.553, 0.005]}
                    rotation={[0, 0.023, -Math.PI]}
                    scale={[-0.061, -0.349, -0.348]}
                />
            </group>
        </group>
    );
};

useGLTF.preload('/models/circle/circle.glb');
export default Circle;
