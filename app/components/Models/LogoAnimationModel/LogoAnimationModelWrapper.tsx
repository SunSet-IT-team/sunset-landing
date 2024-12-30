'use client'
import { Canvas } from '@react-three/fiber'
import { FC } from 'react'
import { LogoAnimationModel } from '..'

export const LogoAnimationModelWrapper: FC = props => {
	return (
		<Canvas className='!h-[calc(100vh-120px)]'>
			<LogoAnimationModel />
		</Canvas>
	)
}
