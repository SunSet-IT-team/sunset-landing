import { CLOSED_MENU_ITEM_WIDTH } from '@/shared/data/constants'
import { TStyles } from '@/shared/types/style.types'
import { create } from 'zustand'

interface IState {
	activeId: number
	stack: number[]
	styles: TStyles
	currentActiveSectionWidth: number
	clientWidth: number
	setStyles: (styles: TStyles) => void
	setClientWidth: (width: number) => void
	setActiveId: (id: number) => void
	setStack: (stack: number[]) => void
	setCurrentActiveSection: (widht: number) => void
}

const styles: TStyles = {
	'2': {
		right: 2 * CLOSED_MENU_ITEM_WIDTH,
		top: 0,
		width: CLOSED_MENU_ITEM_WIDTH,
	},
	'3': {
		right: 1 * CLOSED_MENU_ITEM_WIDTH,
		top: 0,
		width: CLOSED_MENU_ITEM_WIDTH,
	},
	'4': {
		right: 0 * CLOSED_MENU_ITEM_WIDTH,
		top: 0,
		width: CLOSED_MENU_ITEM_WIDTH,
	},
}

export const useNavStore = create<IState>(set => ({
	activeId: 1,
	stack: [1],
	styles: styles,
	currentActiveSectionWidth: 0,
	clientWidth: 0,
	setClientWidth: width => set(() => ({ clientWidth: width })),
	setStyles: styles => set(() => ({ styles })),
	setActiveId: id => set(() => ({ activeId: id })),
	setStack: stack => set(() => ({ stack: stack })),
	setCurrentActiveSection: width =>
		set(() => ({ currentActiveSectionWidth: width })),
}))
