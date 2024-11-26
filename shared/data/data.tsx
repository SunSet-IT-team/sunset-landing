import Cases from '@/app/components/Cases/Cases'
import Contacts from '@/app/components/Contacts/Contacts'
import Home from '@/app/components/Home/Home'
import Services from '@/app/components/Services/Services'

export const sections = [
	{ id: 1, href: '', text: 'Home', content: <Home /> },
	{ id: 2, href: '', text: 'Кейсы', content: <Cases /> },
	{ id: 3, href: '', text: 'Услуги', content: <Services /> },
	{ id: 4, href: '', text: 'Контакты', content: <Contacts /> },
]
