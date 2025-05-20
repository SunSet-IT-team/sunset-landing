import { FC } from 'react';
import ContactForm from './ContactForm';

const Contacts: FC = () => {
    return (
        <div className="lg:h-full overflow-hidden relative">
            <ContactForm />
        </div>
    );
};

export default Contacts;
