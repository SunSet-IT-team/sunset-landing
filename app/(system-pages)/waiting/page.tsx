import { LogoAnimationModelWrapper } from '@/app/components/Models/LogoAnimationModel/LogoAnimationModelWrapper'
import { Metadata } from 'next'
import { FC } from 'react'

export const metadata: Metadata = {
	title: 'Загрузка...',
	description: 'Подождите, идёт загрузка',
}

const Waiting: FC = () => {
	return (
		<div className='flex flex-col px-20 h-full relative'>
			<div className=' absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full'>
				<LogoAnimationModelWrapper />
			</div>
		</div>
	)
}

export default Waiting
