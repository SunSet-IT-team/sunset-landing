'use client'

import dynamic from 'next/dynamic'

export const HelmetModel = dynamic(
	() => import('../../components/Models/HelmetModel'),
	{ ssr: false }
)

export const TorModel = dynamic(
	() => import('../../components/Models/TorModel'),
	{ ssr: false }
)

export const CubesModel = dynamic(
	() => import('../../components/Models/CubesModel'),
	{ ssr: false }
)

export const ConeModel = dynamic(
	() => import('../../components/Models/ConeModel'),
	{ ssr: false }
)

export const BallModel = dynamic(
	() => import('../../components/Models/BallModel'),
	{ ssr: false }
)

export const TriangleModel = dynamic(
	() => import('../../components/Models/ServicesModels/TriangleModel'),
	{ ssr: false }
)

export const LogoAnimationModel = dynamic(
	() => import('../../components/Models/LogoAnimationModel/LogoAnimationModel'),
	{ ssr: false }
)
