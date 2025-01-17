'use client'

import Button from '@/shared/components/ui/Button'
import { FC, useMemo, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import { twMerge } from 'tailwind-merge'
import Case from './Case'
import { data } from './data'

const Cases: FC = () => {
	const [activeId, setActiveId] = useState(1)
	const settings = {
		infinite: true,
		speed: 300,
		slidesToShow: 3,
		centerMode: true,
		centerPadding: '0',
		initialSlide: 1,
		beforeChange: (current: number, next: number) => setActiveId(next),
	}

	const cases = useMemo(() => {
		return data.map(item => (
			<Case
				id={item.id}
				img={item.img}
				name={item.name}
				key={item.id + item.name}
				isActive={activeId === item.id - 1}
				activeId={activeId}
			/>
		))
	}, [activeId])

	return (
		<div className={twMerge('z-10 ml-16 mt-6 text-center', `w-[800px]`)}>
			<Slider {...settings} lazyLoad='anticipated'>
				{cases}
			</Slider>
			<Button className='mt-10 p-5'>Посмотреть все</Button>
		</div>
	)
}

export default Cases
