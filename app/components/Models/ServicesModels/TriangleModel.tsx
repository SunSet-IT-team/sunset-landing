'use client'

import { OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { FC, useRef } from 'react'

export const TriangleModel: FC = props => {
	const group = useRef()
	const { nodes, materials, animations } = useGLTF(
		'/models/services_models/triangle/triangle.gltf'
	)

	return (
		<Canvas className='!h-[800px]'>
			<directionalLight
				position={[-1.41508, -0.991563, 0.917187]}
				intensity={50}
				rotation={[0.949597, -0.375777, -1.02032]}
				color='#FF5406'
			/>
			<directionalLight
				position={[0.149532, -0.263762, 2.62549]}
				intensity={50}
				rotation={[0.949597, -0.375777, -1.02032]}
				color='#FF5406'
			/>
			<directionalLight
				position={[2.96206, 2.70748, 0.751484]}
				intensity={50}
				rotation={[-1.29908, -1.58974, -1.14776]}
				color='#FF5406'
			/>
			<directionalLight
				position={[-0.796234, -2.19012, 1.84228]}
				intensity={50}
				rotation={[1.05609, 0.061284, -0.357682]}
				color='#FF5406'
			/>
			<directionalLight
				position={[1.56781, 4.67911, 2.73073]}
				intensity={50}
				rotation={[-0.542054, -1.17824, -1.12879]}
				color='#2B00FF'
			/>

			<pointLight
				position={[-1.88585, 0.489106, 1.81141]}
				intensity={50}
				color='#2B00FF'
			/>

			<pointLight
				position={[-0.849573, 1.79321, 2.09783]}
				intensity={50}
				color='#fff'
			/>

			<pointLight
				position={[2.05722, -0.403353, 0.501271]}
				intensity={50}
				color='#2B00FF'
			/>

			<pointLight
				position={[-0.417448, 0.985976, 1.69314]}
				intensity={50}
				color='#fff'
			/>

			<pointLight
				position={[-0.310308, 0.487446, 1.97921]}
				intensity={50}
				color='#fff'
			/>

			<pointLight
				position={[1.74569, 1.34236, -1.15676]}
				intensity={50}
				color='#fff'
			/>

			<pointLight
				position={[1.68445, 1.97305, 0.807406]}
				intensity={50}
				color='#2B00FF'
			/>

			<pointLight
				position={[0.182547, 0.151176, -0.216293]}
				intensity={50}
				color='#2B00FF'
			/>

			<pointLight
				position={[-0.541427, -0.259984, -0.160818]}
				intensity={50}
				color='#FF5000'
			/>

			<pointLight
				position={[0.546766, 0.856733, 0.771385]}
				intensity={50}
				color='#2B00FF'
			/>
			<OrbitControls />

			<group {...props} dispose={null}>
				<mesh
					geometry={nodes.Куб.geometry}
					material={materials['Материал.006']}
					position={[-0.378, 0.725, -0.052]}
					rotation={[0.666, -0.294, 0.133]}
					scale={[0.197, 0.88, 0.27]}
				/>
			</group>
		</Canvas>
	)
}

useGLTF.preload('/models/services_models/triangle/triangle.gltf')
