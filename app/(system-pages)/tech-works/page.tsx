import { HelmetModel } from '@/app/components/Models'
import { Metadata } from 'next'
import { FC } from 'react'

export const metadata: Metadata = {
	title: 'Тех.работы',
	description: 'Извините, но сейчас идут технические работы',
}

const TechWorks: FC = () => {
	return (
		<div className='flex flex-col px-20 h-full'>
			<p className='font-arodora-pro w-48 mt-auto'>
				Прямо сейчас ведутся технические работы. Просим вас немного подождать и
				мы станем ещё лучше!
			</p>

			<div className='-mt-10 -ml-10 absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
				<HelmetModel />
			</div>
			<h1 className='text-8xl mt-auto'>
				Тех.
				<br />
				работы
			</h1>
		</div>
	)
}

export default TechWorks
