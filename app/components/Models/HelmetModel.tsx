'use client'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { motion } from 'framer-motion-3d'
import { FC } from 'react'
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
	const { nodes, materials } = useGLTF(
		'/models/helmet/helmet.gltf'
	) as GLTFResult
	return (
		<Canvas className='!h-[800px]'>
			<directionalLight
				position={[-1.41508, -0.991563, 0.917187]}
				intensity={10}
				rotation={[0.949597, -0.375776, -1.02032]}
				color='#a25b13'
			/>
			<directionalLight
				position={[0.149532, -0.263762, 2.62549]}
				intensity={10}
				rotation={[0.949597, -0.375777, -1.02032]}
				color='#a25b13'
			/>
			<directionalLight
				position={[2.96206, 2.70748, 0.751484]}
				intensity={10}
				rotation={[-1.29908, -1.58974, -1.14776]}
				color='#a25b13'
			/>
			<directionalLight
				position={[-0.796234, -2.19012, 1.84228]}
				intensity={10}
				rotation={[1.05609, 0.061284, -0.357682]}
				color='#a25b13'
			/>
			<directionalLight
				position={[1.56781, 4.67911, 2.73073]}
				intensity={10}
				rotation={[-0.542054, -1.17824, -1.12879]}
				color='#a25b13'
			/>

			<pointLight
				position={[-1.88585, 0.489106, 1.81141]}
				intensity={10}
				color='#a25b13'
			/>

			<pointLight
				position={[-0.849573, 1.79321, 2.09783]}
				intensity={10}
				color='#a25b13'
			/>

			<pointLight
				position={[2.83179, 2.83179, 1.8107]}
				intensity={10}
				color='#a25b13'
			/>

			<pointLight
				position={[-1.775, 1.60158, 2.35977]}
				intensity={10}
				color='#a25b13'
			/>

			<pointLight
				position={[-0.310308, 0.487446, 1.97921]}
				intensity={10}
				color='#a25b13'
			/>

			<pointLight
				position={[1.74569, 1.34236, -1.15676]}
				intensity={10}
				color='#a25b13'
			/>

			<pointLight
				position={[1.68445, 1.97305, 0.807406]}
				intensity={10}
				color='#a25b13'
			/>

			<pointLight
				position={[0.546766, 0.856733, 0.771385]}
				intensity={10}
				color='#a25b13'
			/>

			<OrbitControls enableZoom={false} enableRotate={false} />
			<motion.group
				{...props}
				dispose={null}
				animate={{
					x: [
						0, -0.1455776622457, -0.0595490059707, 0.0318564413215,
						0.088312747002, 0.1259502841224, 0.128638679631, 0.0721823739505,
						0.0587403964075, 0.0936895380192, -0.0192230733418,
						-0.1052517296168, -0.1348240802114, -0.1428892667371,
						-0.0783677745309, -0.024599864359, 0,
					],
					y: [
						0, 0.1106554825432, 0.1482930196635, 0.1644233927151,
						0.118720669069, 0.0649527588971, -0.0318294794124, -0.0506482479725,
						-0.1017277626358, -0.1286117177218, -0.1662492548421,
						-0.1501188817906, -0.0775322030585, -0.0103223153436,
						-0.0775322030585, -0.0748438075499, 0,
					],
					rotateX: [0, 0.1, 0],
					rotateY: [0, 0.1, 0],
				}}
				transition={{
					duration: 50,
					repeat: Infinity,
					repeatType: 'loop',
					ease: 'easeInOut',
				}}
			>
				<group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
					<mesh
						geometry={nodes.helmet.geometry}
						material={materials.Default}
						position={[57.184, -30.22, 25.746]}
						rotation={[0.3, 0.1, -0.6]}
						scale={20}
					/>
				</group>
			</motion.group>
		</Canvas>
	)
}

useGLTF.preload('/models/helmet/helmet.gltf')
export default HelmetModel
