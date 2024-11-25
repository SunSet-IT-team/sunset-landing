'use client'
import {
	ANIMATION_DURATION,
	CLOSED_MENU_ITEM_WIDTH,
} from '@/app/shared/data/constants'
import { useNavStore } from '@/app/store/navStore'
import { motion } from 'framer-motion'
import { FC, PropsWithChildren, useEffect, useRef } from 'react'
import { twMerge } from 'tailwind-merge'

interface IProps {
	sectionId: number
}

const Section: FC<PropsWithChildren<IProps>> = ({ sectionId, children }) => {
	const { stack, setCurrentActiveSection, activeId } = useNavStore()
	const ref = useRef<HTMLDivElement | null>(null)
	useEffect(() => {
		if (activeId === sectionId && ref.current) {
			setCurrentActiveSection(ref.current.clientWidth)
		}
	}, [activeId])
	return (
		<>
			<motion.div
				ref={ref}
				className={twMerge('mt-10 h-full -translate-x-full absolute ')}
				initial={{ x: '-100%' }}
				animate={{
					x:
						stack.at(-1) !== sectionId
							? '-100%'
							: stack.at(-1) === 1
							? `0%`
							: `calc(0% + ${CLOSED_MENU_ITEM_WIDTH * (sectionId - 2)}px)`,
				}}
				transition={{ duration: ANIMATION_DURATION, type: 'spring' }}
			>
				{children}
			</motion.div>
		</>
	)
}

export default Section
