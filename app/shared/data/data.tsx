import Cases from '@/app/shared/components/Sections/Cases/Cases'
import Contacts from '@/app/shared/components/Sections/Contacts/Contacts'
import Home from '@/app/shared/components/Sections/Home/Home'
import Services from '@/app/shared/components/Sections/Services/Services'

export const sections = [
	{ id: 1, href: '', text: 'Home', content: <Home /> },
	{ id: 2, href: '', text: 'Кейсы', content: <Cases /> },
	{ id: 3, href: '', text: 'Услуги', content: <Services /> },
	{ id: 4, href: '', text: 'Контакты', content: <Contacts /> },
]
