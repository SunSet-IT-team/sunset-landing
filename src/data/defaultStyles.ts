import { TStyles } from '../types/main';
import { CLOSED_MENU_ITEM_WIDTH } from './constants';

export let defaultStyles: TStyles = {
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
};
