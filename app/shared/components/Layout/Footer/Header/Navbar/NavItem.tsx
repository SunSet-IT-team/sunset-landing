'use client'
import {
	ANIMATION_DURATION,
	CLOSED_MENU_ITEM_WIDTH,
} from '@/app/shared/data/constants'
import { sections } from '@/app/shared/data/data'
import { IStyle } from '@/app/shared/types/style.types'
import { useNavStore } from '@/app/store/navStore'
import { motion } from 'framer-motion'
import { FC } from 'react'
import { twMerge } from 'tailwind-merge'

interface IProps {
	id: number
	text: string
	styles: IStyle
	href: string
}

const NavItem: FC<IProps> = ({ id, styles, text, href }) => {
	const { activeId, setActiveId, stack } = useNavStore()

	return (
		<motion.li
			onClick={() => {
				setActiveId(id)
			}}
			initial={{
				width: CLOSED_MENU_ITEM_WIDTH,
				right: (sections.length - id) * CLOSED_MENU_ITEM_WIDTH,
				top: styles.top === 0 ? '50%' : styles.top,
				transform: styles.top === 0 ? 'translateY(-3%)' : 'none',
			}}
			animate={{
				right: styles.right,
				top: styles.top === 0 ? '50%' : styles.top,
				transform: styles.top === 0 ? 'translateY(-3%)' : 'none',
				width: styles.width,
			}}
			transition={{ duration: ANIMATION_DURATION, type: 'spring' }}
			key={text + href + id}
			className={twMerge(
				'pl-5 absolute top-0 h-[calc(100vh-160px)] before:w-0.5 before:h-[100vh] before:absolute before:-top-40 before:bottom-0 before:left-0 before:bg-grey',
				id === 2 && stack.includes(2) && 'before:-left-20',
				`right-[${styles.right}px]`,
				activeId === id && 'text-blue-300',
				stack.includes(id) && activeId !== id && ' bg-black'
			)}
		>
			<p>{text}</p>
		</motion.li>
	)
}

export default NavItem
