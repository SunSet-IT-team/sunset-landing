'use client'
import { DEFAULT_CLIENT_WIDTH } from '@/shared/data/constants'
import { useNavStore } from '@/store/navStore'
import { getSectionPosition } from '@/utils/getSectionPosition'

import Logo from '@/shared/components/ui/Logo'
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
		maxContentWidth,
		setMaxContentWidth,
	} = useNavStore()
	useEffect(() => {
		const data = getSectionPosition({
			sectionId: activeId,
			stack,
			styles,
			windowWidth: maxContentWidth,
			sectionWidth: currentActiveSectionWidth,
		})
		setStack(data.stack)
		setStyles(data.styles)
	}, [activeId, currentActiveSectionWidth])
	useEffect(() => {
		setMaxContentWidth(ref.current?.clientWidth || DEFAULT_CLIENT_WIDTH)
	}, [])
	return (
		<header className='py-4 font-akony h-28'>
			<Container
				className='flex justify-between items-center relative z-10  gap-4 overflow-x-clip'
				ref={ref}
			>
				<Logo />
				<Navbar />
			</Container>
		</header>
	)
}

export default Header
