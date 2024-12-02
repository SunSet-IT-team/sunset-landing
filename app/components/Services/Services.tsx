import Image from 'next/image'
import { FC } from 'react'
import { twMerge } from 'tailwind-merge'

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
			<div className=''>
				<Image
					alt=''
					src={'/services/abstract1.png'}
					width={256}
					height={258}
					className='absolute top-[500px] left-5'
				/>
				<Image
					alt=''
					src={'/services/abstract2.png'}
					width={175}
					height={175}
					className='absolute top-32 left-5'
				/>
				<Image
					alt=''
					src={'/services/abstract3.png'}
					width={231}
					height={266}
					className='absolute -top-10 right-5'
				/>
			</div>
		</>
	)
}

export default Services
