'use client'

import {
	CLOSED_MENU_ITEM_WIDTH,
	DEFAULT_CLIENT_WIDTH,
} from '@/shared/data/constants'
import { sections } from '@/shared/data/data'
import { useNavStore } from '@/store/navStore'
import { getSectionPosition } from '@/utils/getSectionPosition'
import Image from 'next/image'
import { FC, useEffect, useRef } from 'react'
import Container from '../../ui/Container'
import Navbar from './Navbar/Navbar'

const Header: FC = () => {
	const ref = useRef<HTMLDivElement | null>(null)
	const {
		activeId,
		setActiveId,
		stack,
		setStack,
		setStyles,
		styles,
		currentActiveSectionWidth,
		clientWidth,
		setClientWidth,
	} = useNavStore()
	useEffect(() => {
		const data = getSectionPosition({
			countMenuItems: sections.length,
			sectionId: activeId,
			stack,
			styles,
			windowWidth: clientWidth,
			closedSectionWidth: CLOSED_MENU_ITEM_WIDTH,
			sectionWidth: currentActiveSectionWidth,
		})
		setStack(data.stack)
		setStyles(data.styles)
	}, [activeId, currentActiveSectionWidth])
	useEffect(() => {
		setClientWidth(ref.current?.clientWidth || DEFAULT_CLIENT_WIDTH)
	}, [])
	return (
		<header className='py-4 font-akony h-28'>
			<Container
				className='flex justify-between items-center relative z-10  gap-4 overflow-x-clip'
				ref={ref}
			>
				<a
					href='#'
					className=' flex items-center text-2xl gap-2'
					onClick={() => {
						setActiveId(1)
					}}
				>
					<Image
						alt='Логотип компании Sunset'
						src={'/logo.webp'}
						width={73}
						height={81}
					/>
					Sunset
				</a>
				<Navbar />
			</Container>
		</header>
	)
}

export default Header
