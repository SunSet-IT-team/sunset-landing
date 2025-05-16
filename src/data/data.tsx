import Cases from '../components/Cases/Cases';
import Contacts from '../components/Contacts/Contacts';
import Home from '../components/Home/Home';
import Services from '../components/Services/Services';

export const sections = [
    { id: 1, href: '', text: 'Home', content: <Home /> },
    { id: 2, href: '', text: 'Кейсы', content: <Cases /> },
    { id: 3, href: '', text: 'Услуги', content: <Services /> },
    { id: 4, href: '', text: 'Контакты', content: <Contacts /> },
];
