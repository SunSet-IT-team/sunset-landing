/**
 * Генератор уникальных ключевых кадров для каждой карточки
 */
export const generateUniqueKeyframes = (count: number, range: number) => {
    const keyframes = [];
    for (let i = 1; i < count - 1; i++) {
        keyframes.push(Math.random() * range * 2 - range); // [-range, range]
    }
    keyframes.push(0);

    return keyframes;
};

/**
 * Проверка на слабый девайс
 */
export function isWeakDevice(): boolean {
    if (typeof window === 'undefined' || typeof navigator === 'undefined') return false; // на сервере считаем устройство "нормальным"

    const cores = navigator.hardwareConcurrency || 2;
    const ramGB = (navigator as any).deviceMemory || 4;

    // эвристика — можно подстроить под свой проект
    const weakByCpu = cores <= 2;
    const weakByRam = ramGB <= 2;

    return weakByCpu || weakByRam;
}

/**
 * Проверка на WebGL
 */
export function isWebGLSupported(): boolean {
    try {
        const canvas = document.createElement('canvas');
        return !!(
            window.WebGLRenderingContext &&
            (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
        );
    } catch (e) {
        return false;
    }
}
