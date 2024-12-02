import {
	CLOSED_MENU_ITEM_WIDTH,
	TOP_OFFSET_MENU_ITEM,
} from '@/shared/data/constants'
import { sections } from '@/shared/data/data'
import { TStyles } from '@/shared/types/style.types'

interface IParams {
	sectionId: number
	sectionWidth: number
	stack: number[]
	styles: TStyles
	windowWidth: number
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
	const countMenuItems = sections.length
	let { sectionId, stack, styles, windowWidth, sectionWidth } = data
	//Если сейчас активна секция "Home"
	if (sectionId === 1) {
		let styles: TStyles = {
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
		stack = [1]
		return {
			stack,
			styles,
		}
	}
	//Если секция уже есть в стеке и её пытаются открыть
	if (stack.includes(sectionId)) {
		const countLessElements = count(item => item < sectionId, stack)
		stack.forEach(item => {
			//Пересчитываем стили для секций, которые уже есть в стеке, но идут после той, которую сейчас хотят открыть
			if (item > sectionId) {
				styles[item].right = (countMenuItems - item) * CLOSED_MENU_ITEM_WIDTH
				styles[item].top = 0
				styles[item].width = CLOSED_MENU_ITEM_WIDTH
				return
			}
			//Пересчитываем стили для секции, которую хотят открыть
			if (item === sectionId) {
				styles[item].right =
					windowWidth -
					sectionWidth -
					countLessElements * CLOSED_MENU_ITEM_WIDTH
				styles[item].top = TOP_OFFSET_MENU_ITEM
				styles[item].width = sectionWidth
			}
		})
		//Оставляем в стеке только текущую и секции, id которых меньше текущей (чтобы отправить в Navbar секции, которые идут после той, которую хотят открыть)
		stack = stack.filter(item => item <= sectionId)
	} else {
		//Если в стеке ещё секции нет
		stack = []
		//Добавляем все секции, идущие до той, которую хотят открыть (кроме Home). Это нужно, если хотят сразу открыть, например, секцию "Контакты", а секции "Кейсы" и "Услуги" не открывали ещё
		for (let i = 2; i <= sectionId; i++) {
			stack.push(i)
		}
		//Сворачиваем все секции
		stack.forEach(item => {
			styles[item] = {
				right: windowWidth - (item - 1) * CLOSED_MENU_ITEM_WIDTH,
				top: TOP_OFFSET_MENU_ITEM,
				width: CLOSED_MENU_ITEM_WIDTH,
			}
		})
		//Разворачиваем текущую секцию
		styles[sectionId] = {
			right:
				windowWidth -
				sectionWidth -
				(stack.length - 1) * CLOSED_MENU_ITEM_WIDTH,
			top: TOP_OFFSET_MENU_ITEM,
			width: sectionWidth,
		}
	}
	return {
		stack,
		styles,
	}
}
