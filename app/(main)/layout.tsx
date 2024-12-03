import Footer from '@/shared/components/Layout/Footer/Footer'
import Header from '@/shared/components/Layout/Header/Header'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Sunset',
	description: 'Sunset',
}

export default function MainLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<>
			<Header />
			<main className='h-[calc(100vh-160px)] mt-48'>{children}</main>
			<Footer />
		</>
	)
}
