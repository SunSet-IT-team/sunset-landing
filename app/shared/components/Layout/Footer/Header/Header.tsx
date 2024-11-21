import Container from '@/app/shared/components/ui/Container'
import Image from 'next/image'
import { FC } from 'react'

const Header: FC = () => {
	return (
		<header className='py-4'>
			<Container>
				<div className=''>
					<Image
						alt='Логотип компании Sunset'
						src={'/logo.webp'}
						width={73}
						height={81}
					/>
				</div>
			</Container>
		</header>
	)
}

export default Header
