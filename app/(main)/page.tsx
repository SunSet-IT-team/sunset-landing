'use client'
// import Container from '@/shared/components/ui/Container'
// import { useNavStore } from '@/store/navStore'

// import { sections } from '@/shared/data/data'
// import Section from '../components/Section/Section'

// export default function Page() {
// 	const { activeId } = useNavStore()
// 	return (
// 		<Container className='relative  h-full -mt-40  z-20 font-akony'>
// 			<Section>{sections[activeId - 1].content}</Section>
// 		</Container>
// 	)
// }

import Container from '@/shared/components/ui/Container'
import { sections } from '@/shared/data/data'
import { Leva } from 'leva'
import Section from '../components/Section/Section'

export default function Page() {
	// useEffect(() => {
	// 	// Функция для обработки скролла
	// 	const handleScroll = event => {
	// 		console.log('Scrolling container:', event.target)
	// 	}

	// 	// Получаем все элементы, которые могут прокручиваться
	// 	const scrollableContainers = document.querySelectorAll('*')
	// 	scrollableContainers.forEach(container =>
	// 		container.addEventListener('scroll', handleScroll)
	// 	)

	// 	// Удаляем обработчики при размонтировании компонента
	// 	return () => {
	// 		scrollableContainers.forEach(container =>
	// 			container.removeEventListener('scroll', handleScroll)
	// 		)
	// 	}
	// }, [])
	return (
		<>
			<Container className='relative  h-full -mt-40  z-20'>
				{sections.map(section => (
					<Section sectionId={section.id} key={section.id + section.text}>
						<div className='font-akony'>{section.content}</div>
					</Section>
				))}
			</Container>
			<Leva />
		</>
	)
}
