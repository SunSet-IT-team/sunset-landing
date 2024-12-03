import Container from '@/shared/components/ui/Container'
import { sections } from '@/shared/data/data'
import Section from '../components/Section/Section'

export default function Page() {
	return (
		<Container className='relative overflow-hidden h-full -mt-40  z-20'>
			{sections.map(section => (
				<Section sectionId={section.id} key={section.id + section.text}>
					<div className='font-akony'>{section.content}</div>
				</Section>
			))}
		</Container>
	)
}
