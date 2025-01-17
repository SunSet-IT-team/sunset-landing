'use client'

import Container from '@/shared/components/ui/Container'
import { sections } from '@/shared/data/data'
import { Leva } from 'leva'
import Section from '../components/Section/Section'

export default function Page() {
	return (
		<>
			<Container className='relative font-akony h-full -mt-40  z-20'>
				{sections.map(section => (
					<Section sectionId={section.id} key={section.id + section.text}>
						{section.content}
					</Section>
				))}
			</Container>
			<Leva />
		</>
	)
}
