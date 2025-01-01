'use client'
import { useGLTF } from '@react-three/drei'
import { FC, useRef } from 'react'

import * as THREE from 'three'

import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
	nodes: {
		Куб: THREE.Mesh
	}
	materials: {
		['Материал.006']: THREE.MeshStandardMaterial
	}
}
useGLTF.preload('/models/services_models/triangle/triangle_compressed.glb')

const TriangleModel: FC = props => {
	const { scene } = useGLTF(
		'/models/services_models/triangle/triangle_compressed.glb'
	) as GLTFResult
	const ref = useRef(null)
	// useDebugModel(ref)
	return (
		<primitive
			rotation={[0.339292006587698, 3.11645991236108, 0]}
			position={[-0.666017642561036, -1.4451326206513, 0.100530964914873]}
			ref={ref}
			object={scene}
			{...props}
			scale={2.5}
		/>
	)
}

export default TriangleModel
