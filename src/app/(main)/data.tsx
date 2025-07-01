import Cases from '@/src/components/MainPageSection/Cases/Cases';
import Contacts from '@/src/components/MainPageSection/Contacts/Contacts';
import Home from '@/src/components/MainPageSection/Home/Home';
import Services from '@/src/components/MainPageSection/Services/Services';

export const sections = [
    { id: 1, href: '', text: 'Home', content: <Home /> },
    { id: 2, href: '', text: 'Кейсы', content: <Cases /> },
    { id: 3, href: '', text: 'Услуги', content: <Services /> },
    { id: 4, href: '', text: 'Контакты', content: <Contacts /> },
];
