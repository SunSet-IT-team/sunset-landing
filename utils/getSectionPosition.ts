import {
	CLOSED_MENU_ITEM_WIDTH,
	TOP_OFFSET_MENU_ITEM,
} from '@/shared/data/constants'
import { TStyles } from '@/shared/types/style.types'

interface IParams {
	sectionId: number
	sectionWidth: number
	closedSectionWidth: number
	stack: number[]
	styles: TStyles
	windowWidth: number
	countMenuItems: number
}

const count = (condition: (item: any) => boolean, array: any[]) => {
	return array.reduce((acc: number, item) => {
		if (condition(item)) {
			acc++
		}
		return acc
	}, 0)
}

export const getSectionPosition = (data: IParams) => {
	let {
		sectionId,
		stack,
		styles,
		windowWidth,
		closedSectionWidth,
		countMenuItems,
		sectionWidth,
	} = data
	if (sectionId === 1) {
		let styles: TStyles = {
			'2': {
				right: 2 * closedSectionWidth,
				top: 0,
				width: CLOSED_MENU_ITEM_WIDTH,
			},
			'3': {
				right: 1 * closedSectionWidth,
				top: 0,
				width: CLOSED_MENU_ITEM_WIDTH,
			},
			'4': {
				right: 0 * closedSectionWidth,
				top: 0,
				width: CLOSED_MENU_ITEM_WIDTH,
			},
		}
		stack = [1]
		return {
			stack,
			styles,
		}
	}
	if (stack.includes(sectionId)) {
		const countLessElements = count(item => item < sectionId, stack)
		stack.forEach(item => {
			if (item > sectionId) {
				styles[item].right = (countMenuItems - item) * closedSectionWidth
				styles[item].top = 0
				styles[item].width = closedSectionWidth
				return
			}
			if (item < sectionId) {
				styles[item].width = closedSectionWidth
				return
			}
			if (item === sectionId) {
				styles[item].right =
					windowWidth - sectionWidth - countLessElements * closedSectionWidth
				styles[item].top = TOP_OFFSET_MENU_ITEM
				styles[item].width = sectionWidth
			}
		})
		stack = stack.filter(item => item <= sectionId)
	} else {
		stack = []
		for (let i = 2; i <= sectionId; i++) {
			stack.push(i)
		}
		stack.forEach(item => {
			styles[item] = {
				right: windowWidth - (item - 1) * closedSectionWidth,
				top: TOP_OFFSET_MENU_ITEM,
				width: closedSectionWidth,
			}
		})
		styles[sectionId] = {
			right:
				windowWidth - sectionWidth - (stack.length - 1) * closedSectionWidth,
			top: TOP_OFFSET_MENU_ITEM,
			width: sectionWidth,
		}
	}
	return {
		stack,
		styles,
	}
}
