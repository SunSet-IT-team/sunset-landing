import Container from '@/app/shared/components/ui/Container'
import { FC } from 'react'
import Legality from './Legality'
import Questions from './Questions'
import SocialMedia from './SocialMedia'
const Footer: FC = () => {
	return (
		<footer className='bg-blue absolute bottom-0 left-0 right-0 px-11 py-4 h-[156px]'>
			<Container className='grid grid-cols-3'>
				<Questions />
				<SocialMedia />
				<Legality />
			</Container>
		</footer>
	)
}

export default Footer
