'use client'
import { Canvas } from '@react-three/fiber'
import { FC } from 'react'
import { twMerge } from 'tailwind-merge'

import { BallModel, TriangleModel } from '../Models'

export const data = [
	{
		id: 1,
		title: 'Полный круг создания сайтов',
		description:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, ipsa!',
	},
	{
		id: 2,
		title: 'Постоянная поддержка',
		description:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, ipsa!',
	},
	{
		id: 3,
		title: 'Помощь с web-защитой',
		description:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, ipsa!',
	},
	{
		id: 4,
		title: 'Сотрудничество с дизайн студиями',
		description:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, ipsa!',
	},
]

const Services: FC = () => {
	return (
		<>
			<div
				className={twMerge(
					'grid grid-cols-2 justify-between ml-24 grid-rows-4 gap-y-10 text-sm mt-24'
				)}
			>
				{data.map((item, index) => {
					return (
						<div
							key={item.title}
							className={twMerge(
								`w-[350px]`,
								index % 2 === 0 ? 'col-span-2' : 'col-span-1',
								index % 2 !== 0 ? 'col-start-2' : 'col-end-3'
							)}
						>
							<h3 className=''>{item.title}</h3>
							<p className='font-arodora-pro'>{item.description}</p>
						</div>
					)
				})}
			</div>
			<div className='absolute bottom-0 left-0 w-[600px] h-[600px] opacity-50'>
				<Canvas className='!h-[800px]'>
					<TriangleModel />
				</Canvas>
			</div>
			<div className='absolute -top-[25%] right-0 w-[600px] h-[600px] opacity-50'>
				<BallModel />
			</div>
		</>
	)
}

export default Services
