'use client'
import { useGLTF } from '@react-three/drei'
import { FC, useRef } from 'react'

import * as THREE from 'three'

import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
	nodes: {
		Цилиндр: THREE.Mesh
	}
	materials: {
		['Материал.006']: THREE.MeshStandardMaterial
	}
}

const BallModel: FC = () => {
	const { scene } = useGLTF(
		'/models/services_models/ball/ball_compressed.glb'
	) as GLTFResult
	const ref = useRef<THREE.Group>(null)

	return (
		<>
			<primitive
				rotation={[-1.74672551539592, -1.59592906802361, 1.03044239037745]}
				position={[-0.515221195188726, 2.11115026321234, 3.19185813604723]}
				scale={[5, 5, 5]}
				ref={ref}
				object={scene}
			/>
		</>
	)
}

useGLTF.preload('/models/services_models/ball/ball_compressed.glb')
export default BallModel
