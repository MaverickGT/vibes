import React from 'react';
import { ContactHero } from '../components/ContactHero';
import { ContactForm } from '../components/ContactForm';

export const Contact: React.FC = () => {
    return (
        <>
            <ContactHero />
            <ContactForm />
        </>
    );
};
