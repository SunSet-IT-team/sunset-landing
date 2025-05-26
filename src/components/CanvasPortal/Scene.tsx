'use client';

import { r3f } from '@/src/feature/3d/helpers/global';
import { Preload } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * Сцена для рендра 3d
 */
export default function Scene({ ...props }) {
    return (
        <Canvas
            {...props}
            frameloop="always"
            onCreated={(state) => (state.gl.toneMapping = THREE.AgXToneMapping)}>
            <r3f.Out />
            <Preload all />
        </Canvas>
    );
}
