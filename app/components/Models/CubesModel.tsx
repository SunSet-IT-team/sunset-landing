'use client'
import { useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

import { FC, useRef } from 'react'

export const CubesModel: FC = props => {
	const group = useRef()
	const { nodes, materials } = useGLTF('/models/cubes/cubes.gltf')

	return (
		<Canvas className='relative z-10 !h-[calc(100vh-120px)]'>
			<group
				ref={group}
				{...props}
				dispose={null}
				scale={3}
				rotation={[0, Math.PI, 0]}
				position={[-0.3, -1.2, 0]}
			>
				<group name='Scene'>
					<directionalLight
						position={[-1.415, 0.917, 0.992]}
						rotation={[-1.148, -0.935, -0.61]}
						scale={2.532}
						intensity={10}
						color='#ff5000'
					/>
					<directionalLight
						position={[0.15, 2.625, 0.264]}
						rotation={[-1.148, -0.935, -0.61]}
						scale={2.532}
						intensity={10}
						color='#ff5000'
					/>
					<directionalLight
						position={[2.962, 0.751, -2.707]}
						rotation={[3.134, 0.876, -1.583]}
						scale={2.532}
						intensity={10}
						color='#ff5000'
					/>
					<directionalLight
						position={[-0.796, 1.842, 2.19]}
						rotation={[-0.537, -0.28, -0.233]}
						scale={15.413}
						intensity={10}
						color='#ff5000'
					/>
					<directionalLight
						position={[1.568, 2.731, -4.679]}
						rotation={[-2.805, 0.128, -1.405]}
						scale={15.413}
						color='#2300ff'
					/>
					<pointLight
						intensity={50}
						decay={2}
						color='#2300ff'
						position={[0.547, 0.771, -0.857]}
						rotation={[-Math.PI / 2, 0, 0]}
					/>
					<pointLight
						intensity={50}
						decay={2}
						color='#2300ff'
						position={[-1.886, 1.811, -0.489]}
						rotation={[-Math.PI / 2, 0, 0]}
					/>
					<pointLight
						intensity={50}
						decay={2}
						color='#fbffeb'
						position={[-0.85, 2.098, -1.793]}
						rotation={[-Math.PI / 2, 0, 0]}
					/>
					<pointLight
						intensity={50}
						decay={2}
						color='#2300ff'
						position={[2.057, 0.501, 0.403]}
						rotation={[-Math.PI / 2, 0, 0]}
					/>
					<pointLight
						intensity={50}
						decay={2}
						color='#fbffeb'
						position={[-0.417, 1.693, -0.986]}
						rotation={[-Math.PI / 2, 0, 0]}
					/>
					<pointLight
						intensity={50}
						decay={2}
						color='#fbffeb'
						position={[-0.31, 1.979, -0.487]}
						rotation={[-Math.PI / 2, 0, 0]}
					/>
					<pointLight
						intensity={50}
						decay={2}
						color='#fbffeb'
						position={[1.746, -1.157, -1.342]}
						rotation={[-Math.PI / 2, 0, 0]}
					/>
					<pointLight
						intensity={50}
						decay={2}
						color='#2300ff'
						position={[1.684, 0.807, -1.973]}
						rotation={[-Math.PI / 2, 0, 0]}
					/>
					<pointLight
						intensity={50}
						decay={2}
						color='#2300ff'
						position={[0.183, -0.216, -0.151]}
						rotation={[-Math.PI / 2, 0, 0]}
					/>
					<pointLight
						intensity={50}
						decay={2}
						color='#ff5000'
						position={[-0.541, -0.161, 0.26]}
						rotation={[-Math.PI / 2, 0, 0]}
					/>
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
		</Canvas>
	)
}

useGLTF.preload('/models/cubes/cubes.gltf')
