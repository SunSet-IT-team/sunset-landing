import { create } from 'zustand';

interface IState {
    /**
     * ID активной секции
     * @default 1
     */
    activeId: number;

    /**
     * Изменяет активную секцию
     * @param id - новый ID активной секции
     * @remarks Автоматически добавляет ID в стек навигации
     */
    setActiveId: (id: number) => void;
}

/**
 * Хранилище для управления навигацией и стилями секций
 */
export const useNavStore = create<IState>((set) => ({
    // Состояние
    activeId: 1,

    setActiveId: (id) =>
        set(() => ({
            activeId: id,
        })),
}));

// Вспомогательные селекторы
/**
 * Хук для получения текущего activeId
 */
export const useActiveId = () => useNavStore((state) => state.activeId);
