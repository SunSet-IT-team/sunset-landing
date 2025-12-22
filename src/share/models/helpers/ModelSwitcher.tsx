import { animated } from '@react-spring/three';
import { useSpring } from '@react-spring/core';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

/**
 * Обёртка для модели.
 */
export function ModelSwitcher({ show, children }: { show: boolean; children: React.ReactNode }) {
    const { opacity, scale } = useSpring({
        opacity: show ? 1 : 0,
        scale: show ? 1 : 0, // Масштаб от 50% до 100%
        config: { tension: 350, friction: 40 },
    });

    const groupRef = useRef<THREE.Group>(null);

    // Применяем opacity ко всем материалам внутри children
    useFrame(() => {
        if (!groupRef.current) return;
        const currentOpacity = opacity.get();

        groupRef.current.traverse((obj) => {
            if (obj instanceof THREE.Mesh && obj.material) {
                obj.material.opacity = currentOpacity;
            }
        });
    });

    return (
        <animated.group scale={scale.to((s: number) => [s, s, s])} ref={groupRef}>
            {children}
        </animated.group>
    );
}
