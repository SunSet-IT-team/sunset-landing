'use client'
import { useGLTF } from '@react-three/drei'
import { FC } from 'react'
import * as THREE from 'three'

import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
	nodes: {
		Конус: THREE.Mesh
	}
	materials: {
		['Материал.006']: THREE.MeshStandardMaterial
	}
}
const ConeModel: FC = props => {
	const { scene } = useGLTF('/models/cone/cone.glb') as GLTFResult
	return (
		<primitive object={scene} {...props} />
		// <group {...props} dispose={null}>
		// 	<mesh
		// 		geometry={nodes.Конус.geometry}
		// 		material={materials['Материал.006']}
		// 		position={[-0.38, 0.757, -0.047]}
		// 		rotation={[0.791, 0.382, 2.328]}
		// 		scale={[0.367, 0.357, 0.367]}
		// 	/>
		// </group>
	)
}

useGLTF.preload('/models/cone/cone.glb')
export default ConeModel
