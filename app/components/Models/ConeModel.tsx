'use client'
import { useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
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
	const { nodes, materials } = useGLTF('/models/cone/cone.gltf') as GLTFResult
	return (
		<Canvas>
			<group {...props} dispose={null}>
				<directionalLight
					intensity={100}
					color='#FF5406'
					position={[-1.41508, -0.991563, 0.917187]}
					rotation={[0.949597, -0.375777, -1.02032]}
				/>

				<directionalLight
					intensity={100}
					color='#FF5406'
					position={[0.149532, -0.263762, 2.62549]}
					rotation={[0.949597, -0.375777, -1.02032]}
				/>

				<directionalLight
					intensity={100}
					color='#FF5406'
					position={[2.96206, 2.70748, 0.751484]}
					rotation={[-1.29908, -1.58974, -1.14776]}
				/>

				<directionalLight
					intensity={100}
					color='#FF5406'
					position={[-0.796234, -2.19012, 1.84228]}
					rotation={[1.05609, 0.061284, -0.357682]}
				/>

				<directionalLight
					intensity={100}
					color='#2B00FF'
					position={[1.56781, 4.67911, 2.73073]}
					rotation={[-0.542054, -1.17824, -1.12879]}
				/>
				<pointLight
					intensity={100}
					decay={2}
					color='#2300ff'
					position={[0.547, 0.771, -0.857]}
					rotation={[-Math.PI / 2, 0, 0]}
				/>
				<pointLight
					intensity={100}
					decay={2}
					color='#2300ff'
					position={[-1.886, 1.811, -0.489]}
					rotation={[-Math.PI / 2, 0, 0]}
				/>
				<pointLight
					intensity={100}
					decay={2}
					color='#fbffeb'
					position={[-0.85, 2.098, -1.793]}
					rotation={[-Math.PI / 2, 0, 0]}
				/>
				<pointLight
					intensity={100}
					decay={2}
					color='#2300ff'
					position={[2.057, 0.501, 0.403]}
					rotation={[-Math.PI / 2, 0, 0]}
				/>
				<pointLight
					intensity={100}
					decay={2}
					color='#fbffeb'
					position={[-0.417, 1.693, -0.986]}
					rotation={[-Math.PI / 2, 0, 0]}
				/>
				<pointLight
					intensity={100}
					decay={2}
					color='#fbffeb'
					position={[-0.31, 1.979, -0.487]}
					rotation={[-Math.PI / 2, 0, 0]}
				/>
				<pointLight
					intensity={100}
					decay={2}
					color='#fbffeb'
					position={[1.746, -1.157, -1.342]}
					rotation={[-Math.PI / 2, 0, 0]}
				/>
				<pointLight
					intensity={100}
					decay={2}
					color='#2300ff'
					position={[1.684, 0.807, -1.973]}
					rotation={[-Math.PI / 2, 0, 0]}
				/>
				<pointLight
					intensity={100}
					decay={2}
					color='#2300ff'
					position={[0.183, -0.216, -0.151]}
					rotation={[-Math.PI / 2, 0, 0]}
				/>
				<pointLight
					intensity={100}
					decay={2}
					color='#ff5000'
					position={[-0.541, -0.161, 0.26]}
					rotation={[-Math.PI / 2, 0, 0]}
				/>
				<mesh
					geometry={nodes.Конус.geometry}
					material={materials['Материал.006']}
					position={[-0.38, 0.757, -0.047]}
					rotation={[0.791, 0.382, 2.328]}
					scale={[0.367, 0.357, 0.367]}
				/>
			</group>
		</Canvas>
	)
}

useGLTF.preload('/models/cone/cone.gltf')
export default ConeModel
