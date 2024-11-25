import Section from './shared/components/Sections/Section'
import Container from './shared/components/ui/Container'
import { sections } from './shared/data/data'

export default function Page() {
	return (
		<Container className='relative overflow-hidden h-full -mt-40 pt-40'>
			{sections.map(section => (
				<Section sectionId={section.id} key={section.id + section.text}>
					<div className='font-akony'>{section.content}</div>
				</Section>
			))}
		</Container>
	)
}
