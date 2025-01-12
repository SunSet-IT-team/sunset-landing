'use client'

import { r3f } from '@/shared/helpers/global'
import { Preload } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'
export default function Scene({ ...props }) {
	return (
		<Canvas
			{...props}
			onCreated={state => (state.gl.toneMapping = THREE.AgXToneMapping)}
		>
			<r3f.Out />
			<Preload all />
		</Canvas>
	)
}
