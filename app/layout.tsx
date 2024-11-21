import Footer from '@/app/shared/components/Layout/Footer/Footer'
import Header from '@/app/shared/components/Layout/Footer/Header/Header'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const akony = localFont({
	src: './fonts/akony.woff',
	variable: '--font-akony',
	weight: '700',
})
const arodoraPro = localFont({
	src: './fonts/ArodoraPro-Light.otf',
	variable: '--font-arodora-pro',
	weight: '300',
})

export const metadata: Metadata = {
	title: 'Sunset',
	description: 'Sunset',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body
				className={`${akony.variable} ${arodoraPro.variable} antialiased h-[100vh] w-[100vw] bg-black-gradient text-white max-w-[1440px] mx-auto`}
			>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}
