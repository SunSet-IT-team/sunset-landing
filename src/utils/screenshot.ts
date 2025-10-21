import { useThree } from '@react-three/fiber';
import { useEffect } from 'react';
import * as THREE from 'three';

interface ScreenshotHelperProps {
    targetRef: React.RefObject<THREE.Object3D>;
    width?: number;
    height?: number;
    name?: string;
}

export const ScreenshotHelper = ({
    targetRef,
    width = 400,
    height = 400,
    name = 'preview',
}: ScreenshotHelperProps) => {
    const { gl, camera, scene } = useThree();

    useEffect(() => {
        if (!targetRef.current) return;

        // сохраняем прежний размер
        const prevSize = new THREE.Vector2();
        gl.getSize(prevSize);
        const prevPR = gl.getPixelRatio();

        gl.setSize(width, height);
        gl.setPixelRatio(1);

        // получаем центр и размер модели
        const box = new THREE.Box3().setFromObject(targetRef.current);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);

        // вычисляем позицию камеры
        const perspectiveCamera = camera as THREE.PerspectiveCamera;
        const fov = perspectiveCamera.fov * (Math.PI / 180);
        const distance = maxDim / (2 * Math.tan(fov / 2));
        camera.position.set(center.x, center.y, center.z + distance * 1.2);
        camera.lookAt(center);

        // рендерим и получаем DataURL
        gl.render(scene, camera);
        const dataURL = gl.domElement.toDataURL('image/png');

        const link = document.createElement('a');
        link.href = dataURL;
        link.download = `${name}.png`;
        link.click();

        // возвращаем размеры
        gl.setSize(prevSize.width, prevSize.height);
        gl.setPixelRatio(prevPR);
    }, [targetRef]);

    return null;
};
