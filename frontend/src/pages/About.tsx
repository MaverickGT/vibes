import React from 'react';
import { AboutHero } from '../components/AboutHero';
import { Mission } from '../components/Mission';
import { Team } from '../components/Team';
import { CallToAction } from '../components/CallToAction';

export const About: React.FC = () => {
    return (
        <>
            <AboutHero />
            <Mission />
            <Team />
            <CallToAction />
        </>
    );
};
