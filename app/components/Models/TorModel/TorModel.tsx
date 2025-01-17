'use client'
import { useGLTF } from '@react-three/drei'
import { FC } from 'react'

import * as THREE from 'three'

import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
	nodes: {
		Тор: THREE.Mesh
	}
	materials: {
		['Материал.006']: THREE.MeshStandardMaterial
	}
}

const TorModel: FC = props => {
	const { nodes, materials } = useGLTF('/models/tor/tor.gltf') as GLTFResult
	return (
		<group {...props} dispose={null}>
			<mesh
				geometry={nodes['Тор'].geometry}
				material={materials['Материал.006']}
				position={[-0.153, 0.735, -0.078]}
				rotation={[-0.951, 0.509, -0.235]}
				scale={0.513}
			/>
		</group>
	)
}

useGLTF.preload('/models/tor/tor.gltf')
export default TorModel
