import { FC } from 'react'
import { DynamicCubesModel } from '..'

const CubesModelWithLight: FC = () => {
	return (
		<>
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
			<DynamicCubesModel />
		</>
	)
}

export default CubesModelWithLight
