'use client'
import { Canvas } from '@react-three/fiber'
import { FC } from 'react'
import { LogoAnimationModel } from './LogoAnimationModel'

export const LogoAnimationModelWrapper: FC = props => {
	return (
		<Canvas className='!h-full mt-28'>
			{/* <OrbitControls enableZoom={false} enableRotate={false} zoom={20} /> */}
			<LogoAnimationModel />
		</Canvas>
	)
}
