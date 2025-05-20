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
