import { motion } from 'framer-motion'
import { FC } from 'react'
import Tilt from 'react-parallax-tilt'
import { twMerge } from 'tailwind-merge'
interface IProps {
	id: number
	name: string
	img: string
	isActive: boolean
	activeId: number
}

const Case: FC<IProps> = ({ id, img, name, isActive, activeId }) => {
	return (
		<motion.div
			title={String(id)}
			className={twMerge('relative ')}
			initial={{
				scale: !isActive ? 0.5 : 1,
				rotate: !isActive ? (id - 1 < activeId ? -10 : 10) : 0,
			}}
			animate={{
				scale: !isActive ? 0.5 : 1,
				y: !isActive ? [0, 5 * id * 0.25, -10 * id * 0.25, 0] : 0, // Движение вверх и вниз
				x: !isActive ? [0, 5 * id * 0.25, -5 * id * 0.25, 0] : 0, // Лёгкие колебания по горизонтали
				rotate: !isActive
					? id - 1 < activeId
						? [-2, -3, -1, 3, -2]
						: [2, 3, 1, -3, 2]
					: 0,
			}}
			transition={{
				scale: {
					duration: 0.5, // Длительность анимации для scale
					ease: 'easeInOut',
				},
				y: !isActive
					? {
							duration: 10,
							repeat: Infinity,
							repeatType: 'loop',
							ease: 'easeInOut',
					  }
					: { duration: 0 },
				x: !isActive
					? {
							duration: 10,
							repeat: Infinity,
							repeatType: 'loop',
							ease: 'easeInOut',
					  }
					: { duration: 0 },
				rotate: !isActive
					? {
							duration: 10,
							repeat: Infinity,
							repeatType: 'loop',
							ease: 'easeInOut',
					  }
					: { duration: 0 },
			}}
		>
			<Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} tiltEnable={isActive}>
				<div
					className='w-[300px] h-[500px] '
					style={{
						backgroundImage: `url('${img}')`,
					}}
				></div>
			</Tilt>
		</motion.div>
	)
}

export default Case
