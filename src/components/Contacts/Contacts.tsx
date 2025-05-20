import { FC } from 'react';
import ContactForm from './ContactForm';

/**
 * Секция связи
 */
const Contacts: FC = () => {
    return (
        <div className="lg:h-full overflow-hidden relative">
            <ContactForm />
        </div>
    );
};

export default Contacts;
