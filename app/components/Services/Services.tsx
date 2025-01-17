'use client'
import { View } from '@/shared/components/canvas/View'
import { FC, Suspense } from 'react'
import { twMerge } from 'tailwind-merge'
import BallModelWithLight from '../Models/BallModel/BallModelWithLight'
import TriangleModelWithLight from '../Models/TriangleModel/TriangleModelWithLight'

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
					'grid grid-cols-2 justify-between ml-24 grid-rows-4 gap-y-10 text-sm mt-24 relative z-20'
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
			<div className='absolute -top-[33%] right-0 opacity-50 h-[400px] w-[400px] bg-[#0D0D0D] '></div>
			<div className='absolute bottom-0 left-10 w-[400px] h-[400px] opacity-50  bg-[#0D0D0D] '></div>
			<View className='absolute -top-[33%] right-0 opacity-50 h-[400px] w-[400px] '>
				<Suspense fallback={null}>
					<BallModelWithLight />
				</Suspense>
			</View>

			<View className='absolute bottom-0 left-0 w-[20vw] h-[20vw] opacity-50 '>
				<Suspense fallback={null}>
					<TriangleModelWithLight />
				</Suspense>
			</View>
		</>
	)
}

export default Services
