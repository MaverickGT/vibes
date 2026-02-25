import React from 'react';
import { Hero } from '../components/Hero';
import { UpcomingVibes } from '../components/UpcomingVibes';
import { Stats } from '../components/Stats';
import { CallToAction } from '../components/CallToAction';

export const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <UpcomingVibes />
            <Stats />
            <CallToAction />
        </>
    );
};
