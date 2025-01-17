'use client'
import { useGLTF } from '@react-three/drei'
import { FC, useRef } from 'react'
import * as THREE from 'three'

import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
	nodes: {
		helmet: THREE.Mesh
	}
	materials: {
		['Default']: THREE.MeshStandardMaterial
	}
}
const HelmetModel: FC = props => {
	const ref = useRef(null)
	const { scene } = useGLTF('/models/helmet/helmet.glb') as GLTFResult
	// useDebugModel(ref)
	return (
		<primitive
			rotation={[0.16336281798667, 2.78973427638774, -0.100530964914873]}
			position={[1.5079644737231, -1.04300876099181, 0]}
			scale={[2.1, 2.1, 2.1]}
			ref={ref}
			object={scene}
			{...props}
		/>
	)
}

useGLTF.preload('/models/helmet/helmet.glb')
export default HelmetModel
