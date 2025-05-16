'use client'
import { motion } from 'framer-motion'
import { FC } from 'react'

const lines = [
	{
		width: 65,
		duration: 0.5,
	},
	{
		width: 85,
		duration: 0.8,
	},
	{
		width: 100,
		duration: 1,
	},
]
const Lines: FC = () => {
	return (
		<>
			{lines.map(line => {
				return (
					<motion.div
						key={line.duration + line.width}
						className='absolute h-full bg-black-gradient left-0.5 top-0 border-l-2 border-grey'
						initial={{
							x: '200%',
							width: `${line.width}%`,
						}}
						animate={{
							x: 0,
							opacity: 0,
						}}
						transition={{
							x: {
								duration: 0.5 + line.duration,
							},
							opacity: {
								duration: 1.5 + line.duration,
							},
						}}
					></motion.div>
				)
			})}
		</>
	)
}

export default Lines
