import React from 'react';
import styles from './EventsHero.module.css';

export const EventsHero: React.FC = () => {
    return (
        <div style={{ padding: '0 1.5rem' }}>
            <section className={styles.hero}>
                <div className={`${styles.pill} animate-fade-in`}>DISCOVER • JOIN • EXPERIENCE</div>
                <h1 className={`${styles.title} animate-fade-in`} style={{ animationDelay: '0.1s' }}>
                    All Upcoming <br />
                    <span className={styles.teal}>Events &</span> <span className={styles.coral}>Activities.</span>
                </h1>
                <p className={`${styles.subtitle} animate-fade-in`} style={{ animationDelay: '0.2s' }}>
                    Find the perfect event for you. From casual meetups to grand celebrations, we've got you covered.
                </p>
            </section>
        </div>
    );
};
