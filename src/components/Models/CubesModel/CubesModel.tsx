'use client'
import { useGLTF } from '@react-three/drei'

import { FC, useRef } from 'react'
import * as THREE from 'three'

import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
	nodes: {
		Куб: THREE.Mesh
		Куб001: THREE.Mesh
		Куб002: THREE.Mesh
		Куб003: THREE.Mesh
		Куб004: THREE.Mesh
		Куб005: THREE.Mesh
		Куб006: THREE.Mesh
		Куб007: THREE.Mesh
		Куб008: THREE.Mesh
		Куб009: THREE.Mesh
		Куб010: THREE.Mesh
	}
	materials: {
		['Материал.006']: THREE.MeshStandardMaterial
	}
}

const CubesModel: FC = props => {
	const group = useRef()
	const { nodes, materials } = useGLTF('/models/cubes/cubes.gltf') as GLTFResult

	return (
		<group
			ref={group}
			{...props}
			dispose={null}
			scale={3}
			rotation={[0, Math.PI, 0]}
			position={[-0.3, -1.2, 0]}
		>
			<group name='Scene'>
				<mesh
					name='Куб'
					geometry={nodes.Куб.geometry}
					material={materials['Материал.006']}
					position={[-0.02, 0.537, 0.101]}
					rotation={[0.057, 0.744, -2.86]}
					scale={0.359}
				/>
				<mesh
					name='Куб001'
					geometry={nodes.Куб001.geometry}
					material={materials['Материал.006']}
					position={[-0.156, 1.372, 0.229]}
					rotation={[-0.406, 0.407, -0.531]}
					scale={0.134}
				/>
				<mesh
					name='Куб003'
					geometry={nodes.Куб003.geometry}
					material={materials['Материал.006']}
					position={[-0.591, 0.744, 0.474]}
					rotation={[0.604, -0.448, -1.777]}
					scale={0.134}
				/>
				<mesh
					name='Куб004'
					geometry={nodes.Куб004.geometry}
					material={materials['Материал.006']}
					position={[0.782, 0.549, 0.287]}
					rotation={[0.712, 0.456, -0.602]}
					scale={-0.097}
				/>
				<mesh
					name='Куб005'
					geometry={nodes.Куб005.geometry}
					material={materials['Материал.006']}
					position={[-0.476, 0.204, -1.132]}
					rotation={[0.246, 0.881, 0.336]}
					scale={0.165}
				/>
				<mesh
					name='Куб006'
					geometry={nodes.Куб006.geometry}
					material={materials['Материал.006']}
					position={[0.641, 1.308, 0.305]}
					rotation={[-0.578, -0.298, 2.946]}
					scale={0.307}
				/>
				<mesh
					name='Куб007'
					geometry={nodes.Куб007.geometry}
					material={materials['Материал.006']}
					position={[0.797, -0.069, 0.29]}
					rotation={[0.741, 0.253, -0.839]}
					scale={0.332}
				/>
				<mesh
					name='Куб008'
					geometry={nodes.Куб008.geometry}
					material={materials['Материал.006']}
					position={[-0.256, 0.96, 0.251]}
					rotation={[-0.244, -0.201, 0.957]}
					scale={0.062}
				/>
				<mesh
					name='Куб009'
					geometry={nodes.Куб009.geometry}
					material={materials['Материал.006']}
					position={[-0.015, 0.016, 0.217]}
					rotation={[-0.334, 0.499, -0.801]}
					scale={0.062}
				/>
				<mesh
					name='Куб010'
					geometry={nodes.Куб010.geometry}
					material={materials['Материал.006']}
					position={[-0.55, 0.43, 0.308]}
					rotation={[-0.46, 0.169, 0.006]}
					scale={0.062}
				/>
			</group>
		</group>
	)
}

useGLTF.preload('/models/cubes/cubes.gltf')
export default CubesModel
