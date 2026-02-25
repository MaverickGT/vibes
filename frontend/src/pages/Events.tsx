import React from 'react';
import { EventsHero } from '../components/EventsHero';
import { UpcomingVibes } from '../components/UpcomingVibes';
import { CallToAction } from '../components/CallToAction';

export const Events: React.FC = () => {
    return (
        <>
            <EventsHero />
            <div style={{ paddingTop: '2rem' }}>
                <UpcomingVibes />
            </div>
            <CallToAction />
        </>
    );
};
