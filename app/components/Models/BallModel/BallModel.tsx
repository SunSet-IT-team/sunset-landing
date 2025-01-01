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

const BallModel: FC = props => {
	const { scene } = useGLTF(
		'/models/services_models/ball/ball_compressed.glb'
	) as GLTFResult
	const ref = useRef(null)
	// useDebugModel(ref)
	return (
		<primitive
			position={[-0.816814089933346, 3.04106168867492, 3.19185813604723]}
			rotation={[-1.74672551539592, -1.59592906802361, 0.716283125018474]}
			scale={[6.283185307179586, 6.283185307179586, 6.283185307179586]}
			ref={ref}
			object={scene}
			{...props}
		/>
	)
}

useGLTF.preload('/models/services_models/ball/ball_compressed.glb')
export default BallModel
