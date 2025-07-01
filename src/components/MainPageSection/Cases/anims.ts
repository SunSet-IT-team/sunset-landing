import { generateUniqueKeyframes } from '@/src/utils/share';
import { MotionValue, useSpring } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

/**
 * Получение фреймов для анимации
 */
export const useFrames = (activeId: number) => {
    const [frames, setFrames] = useState({
        xKeyframes: [0],
        yKeyframes: [0],
    });

    useEffect(() => {
        setFrames({
            xKeyframes: generateUniqueKeyframes(5, 6),
            yKeyframes: generateUniqueKeyframes(5, 5),
        });
    }, [activeId]);

    return frames;
};

/**
 * Функция для получения угла наклона
 */
export const getRotation = (isActive: boolean, id: number, activeId: number, total: number) => {
    if (isActive) return 0;

    const diff = (id - activeId + total) % total;

    // Если слайд находится "до" активного в циклическом смысле
    if (diff <= total / 2) {
        return 15;
    } else {
        return -15;
    }
};

interface TiltReturn {
    ref: React.RefObject<HTMLDivElement>;
    rotateX: MotionValue<number>;
    rotateY: MotionValue<number>;
}

/**
 * Анимация взаимодействия с карточкой
 */
export const useTilt = (active: boolean, max = 12): TiltReturn => {
    const ref = useRef<HTMLDivElement>(null);

    // плавное движение, а не резкие прыжки
    const rotateX = useSpring(0, { stiffness: 150, damping: 20 });
    const rotateY = useSpring(0, { stiffness: 150, damping: 20 });

    useEffect(() => {
        if (!active || !ref.current) return;

        const el = ref.current;

        const handleMove = (e: MouseEvent) => {
            const rect = el.getBoundingClientRect();
            const dx = e.clientX - (rect.left + rect.width / 2);
            const dy = e.clientY - (rect.top + rect.height / 2);

            // нормируем в диапазон [-1; 1]
            const nx = dx / (rect.width / 2);
            const ny = dy / (rect.height / 2);

            // курсор «давит» — наклоняем **от** него
            rotateY.set(-nx * max); // вокруг OY (лево/право)
            rotateX.set(ny * max); // вокруг OX (верх/низ)
        };

        const reset = () => {
            rotateX.set(0);
            rotateY.set(0);
        };

        el.addEventListener('mousemove', handleMove);
        el.addEventListener('mouseleave', reset);

        return () => {
            el.removeEventListener('mousemove', handleMove);
            el.removeEventListener('mouseleave', reset);
        };
    }, [active, max, rotateX, rotateY]);

    return { ref, rotateX, rotateY };
};
