/**
 * Расширяем интерфейс Window для поддержки ym
 */
declare global {
    interface Window {
        ym: (id: number, event: string, goal: string, data?: any) => void;
    }
}

export {};
