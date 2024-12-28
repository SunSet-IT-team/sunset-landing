'use client'
import { useAnimations, useGLTF } from '@react-three/drei'
import React, { FC, useEffect } from 'react'

export const LogoAnimationModel: FC = props => {
	const scale = 2
	const group = React.useRef()
	const { nodes, materials, animations } = useGLTF(
		'/models/logo_animation/logo_animation.gltf'
	)
	const { actions, names } = useAnimations(animations, group)

	useEffect(() => {
		names.forEach(animation => {
			actions?.[animation]?.play()
		})
	}, [actions, names])
	return (
		<group
			ref={group}
			{...props}
			dispose={null}
			position={[0, -2, 0]}
			scale={3.2}
		>
			<group name='Scene' rotation={[0, Math.PI, 0]}>
				<directionalLight
					intensity={50}
					name='Источник-область'
					position={[-1.415, 0.917, 0.992]}
					rotation={[-1.148, -0.935, -0.61]}
					scale={2.532}
					color={'#FF5406'}
				/>
				<directionalLight
					intensity={50}
					name='Источник-область001'
					position={[0.15, 2.625, 0.264]}
					rotation={[-1.148, -0.935, -0.61]}
					scale={2.532}
					color={'#FF5406'}
				/>
				<directionalLight
					intensity={50}
					name='Источник-область002'
					position={[2.962, 0.751, -2.707]}
					rotation={[3.134, 0.876, -1.583]}
					scale={2.532}
					color={'#FF5406'}
				/>
				<directionalLight
					intensity={50}
					name='Источник-область003'
					position={[-0.796, 1.842, 2.19]}
					rotation={[-0.537, -0.28, -0.233]}
					scale={15.413}
					color={'#FF5406'}
				/>
				<directionalLight
					intensity={50}
					name='Источник-область004'
					position={[1.568, 2.731, -4.679]}
					rotation={[-2.805, 0.128, -1.405]}
					scale={15.413}
					color={'#2B00FF'}
				/>
				<pointLight
					name='Точечный_источник013'
					intensity={50}
					decay={2}
					color='#2300ff'
					position={[0.547, 0.771, -0.857]}
					rotation={[-Math.PI / 2, 0, 0]}
				/>
				<pointLight
					name='Точечный_источник001'
					intensity={50}
					decay={2}
					color='#2300ff'
					position={[-1.886, 1.811, -0.489]}
					rotation={[-Math.PI / 2, 0, 0]}
				/>
				<pointLight
					name='Точечный_источник002'
					intensity={50}
					decay={2}
					color='#fbffeb'
					position={[-0.85, 2.098, -1.793]}
					rotation={[-Math.PI / 2, 0, 0]}
				/>
				<pointLight
					name='Точечный_источник003'
					intensity={50}
					decay={2}
					color='#2300ff'
					position={[2.057, 0.501, 0.403]}
					rotation={[-Math.PI / 2, 0, 0]}
				/>
				<pointLight
					name='Точечный_источник004'
					intensity={50}
					decay={2}
					color='#fbffeb'
					position={[-0.417, 1.693, -0.986]}
					rotation={[-Math.PI / 2, 0, 0]}
				/>
				<pointLight
					name='Точечный_источник005'
					intensity={50}
					decay={2}
					color='#fbffeb'
					position={[-0.31, 1.979, -0.487]}
					rotation={[-Math.PI / 2, 0, 0]}
				/>
				<pointLight
					name='Точечный_источник006'
					intensity={50}
					decay={2}
					color='#fbffeb'
					position={[1.746, -1.157, -1.342]}
					rotation={[-Math.PI / 2, 0, 0]}
				/>
				<pointLight
					name='Точечный_источник007'
					intensity={50}
					decay={2}
					color='#2300ff'
					position={[1.684, 0.807, -1.973]}
					rotation={[-Math.PI / 2, 0, 0]}
				/>
				<mesh
					name='Сфера'
					geometry={nodes.Сфера.geometry}
					material={materials['Материал.006']}
					position={[0.007, 0.557, 0.005]}
					rotation={[Math.PI, -0.023, 0]}
					scale={[-0.121, -0.696, -0.696]}
				/>
				<mesh
					name='Сфера001'
					geometry={nodes.Сфера001.geometry}
					material={materials['Материал.001']}
					position={[0.295, 0.557, 0.005]}
					rotation={[Math.PI, -0.023, 0]}
					scale={[-0.093, -0.536, -0.536]}
				/>
				<mesh
					name='Сфера002'
					geometry={nodes.Сфера002.geometry}
					material={materials['Материал.004']}
					position={[-0.526, 0.553, 0.005]}
					rotation={[0, 0.023, -Math.PI]}
					scale={[-0.061, -0.349, -0.348]}
				/>
				<mesh
					name='Сфера003'
					geometry={nodes.Сфера003.geometry}
					material={materials['Материал.005']}
					position={[-0.298, 0.557, 0.005]}
					rotation={[0, 0.023, -Math.PI]}
					scale={[-0.093, -0.536, -0.536]}
				/>
				<mesh
					name='Сфера004'
					geometry={nodes.Сфера004.geometry}
					material={materials['Материал.003']}
					position={[0.523, 0.553, 0.005]}
					rotation={[Math.PI, -0.023, 0]}
					scale={[-0.061, -0.349, -0.348]}
				/>
			</group>
		</group>
	)
}

useGLTF.preload('/models/logo_animation/logo_animation.gltf')
