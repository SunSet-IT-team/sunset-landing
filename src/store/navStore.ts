import { create } from 'zustand';
import { defaultStyles } from '../data/defaultStyles';
import { TStyles } from '../types/main';

interface IState {
    /**
     * ID активной секции
     * @default 1
     */
    activeId: number;

    /**
     * Стек открытых секций (история навигации)
     * @default [1]
     */
    stack: number[];

    /**
     * Стили интерфейса
     * @see {@link TStyles}
     * @default defaultStyles
     */
    styles: TStyles;

    /**
     * Ширина текущей активной секции в пикселях
     * @default 0
     */
    currentActiveSectionWidth: number;

    /**
     * Максимальная ширина контентной области
     * @default 0
     */
    maxContentWidth: number;

    /**
     * Устанавливает новые стили для интерфейса
     * @param styles - объект стилей {@link TStyles}
     */
    setStyles: (styles: TStyles) => void;

    /**
     * Обновляет максимальную ширину контента
     * @param width - новая ширина в пикселях
     */
    setMaxContentWidth: (width: number) => void;

    /**
     * Изменяет активную секцию
     * @param id - новый ID активной секции
     * @remarks Автоматически добавляет ID в стек навигации
     */
    setActiveId: (id: number) => void;

    /**
     * Заменяет весь стек навигации
     * @param stack - массив ID секций
     * @warning Не используйте напрямую без необходимости
     */
    setStack: (stack: number[]) => void;

    /**
     * Обновляет ширину текущей активной секции
     * @param width - ширина в пикселях
     */
    setCurrentActiveSection: (width: number) => void;
}

/**
 * Хранилище для управления навигацией и стилями секций
 *
 * @example
 * // Получение текущего activeId
 * const activeId = useNavStore(state => state.activeId);
 *
 * // Установка нового стиля
 * useNavStore.getState().setStyles(newStyles);
 */
export const useNavStore = create<IState>((set) => ({
    // Состояние
    activeId: 1,
    stack: [1],
    styles: defaultStyles,
    currentActiveSectionWidth: 0,
    maxContentWidth: 0,

    setMaxContentWidth: (width) => set(() => ({ maxContentWidth: width })),
    setStyles: (styles) => set(() => ({ styles })),
    setActiveId: (id) =>
        set((state) => ({
            activeId: id,
            stack: [...state.stack, id],
        })),
    setStack: (stack) => set(() => ({ stack })),
    setCurrentActiveSection: (width) => set(() => ({ currentActiveSectionWidth: width })),
}));

// Вспомогательные селекторы
/**
 * Хук для получения текущего activeId
 */
export const useActiveId = () => useNavStore((state) => state.activeId);

/**
 * Хук для получения текущих стилей
 */
export const useStyles = () => useNavStore((state) => state.styles);
